#!/bin/bash

# "npm audit fix" returns a non-0 exit code if any vulnerability cannot be addressed automatically
# "set -e" caused build to fail in this case 
set -x

# any value in BUILD_NUMBER triggers some problem in Esri's webpack such that the built custom widgets 
# do not end up in /client/dist/widgets/ where they should
export BUILD_NUMBER=

# install Node.js
DOWNLOAD_URL=https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-linux-x64.tar.gz
wget --quiet -O - ${DOWNLOAD_URL} | tar xz
export PATH="${WORKSPACE}/node-${NODE_VERSION}-linux-x64/bin":${PATH}
echo installed Node.js version `node --version`

# download ArcGIS Experience Builder Developer Edition
# ARCGIS_LIB_DOWNLOADER_USERNAME, ARCGIS_LIB_DOWNLOADER_PASSWORD env vars set via Jenkins credentials
npx arcgis-lib-downloader@latest -p arcgis-experience-builder -v ${EXB_VERSION}
unzip -q arcgis-experience-builder-${EXB_VERSION}.zip -d arcgis-experience-builder-${EXB_VERSION}

# Copy Custom Widgets
cp -r widgets/* arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/client/your-extensions/widgets

# Create App directory
mkdir -p arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/server/public/apps
cp -r apps/* arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/server/public/apps
  
# NPM install client folder
cd arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/client
npm ci
npm audit fix
cd $WORKSPACE

# NPM install in server folder
cd arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/server
npm ci
npm audit fix
cd $WORKSPACE

# install any widget dependencies
cd arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/client/your-extensions/widgets
for d in `find . -mindepth 1 -maxdepth 1 -type d`; do
  cd $d
  if test -f package.json; then
    echo "installing dependencies for `pwd`..."
    npm i
    npm audit fix
  fi
  cd ..
done
cd $WORKSPACE

# Build widgets
cd arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/client
npm run build:dev
cd $WORKSPACE

# Run download script
cd arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder
node -e "require('./server/src/middlewares/dev/apps/app-download.js').zipApp('0', 'app.zip')"

cd $WORKSPACE
mkdir dist
mv -i arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/app.zip dist
echo "unzip app.zip and grant o+rx to directories and o+r to files" > dist/README
if [ -f dist/app.zip ]; then
  # TODO deploy app.zip?
  echo "successfully built artifact app.zip"
else
  echo "ERROR: artifact app.zip not found"
  exit 1
fi