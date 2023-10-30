# Record Count widget

Displays the total records count along with the count filtered by the map extent and any layer definitions.
Expects to have a DataSource and MapView configured along with DataSourceFilterChangeMessage events from any other widget which emits them.

Although there are several ways to be notified of changes to view extent and layer definition (i.e. queryParams), widget currently uses [ReactiveUtils](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-reactiveUtils.html#watch) to watch the view's ```stationary``` property. An Action recieves the [DataSourceFilterChangeMessage](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/DataSourceFilterChangeMessage/) from the framework and sets the message on the widgetstate thus causing the widget to re-render and re-calculate the filtered record count using the DataSource's QueryParams.
