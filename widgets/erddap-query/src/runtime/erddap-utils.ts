export function findOceanNameByCode (code: string): string {
  const values = new Map([
    ['0', 'Arctic'],
    ['1', 'Indian'],
    ['2', 'North Atlantic'],
    ['3', 'North Pacific'],
    ['4', 'South Atlantic'],
    ['5', 'South Pacific'],
    ['6', 'Southern']
  ])
  return values.get(code) || ''
}

export function findFisheryRegionByCode (code: string): string {
  const values = [
    'Caribbean',
    'Gulf (formerly Gulf of Mexico)',
    'Mid-Atlantic',
    'New England',
    'North Pacific',
    'Pacific',
    'South Atlantic',
    'Unknown',
    'Western Pacific'
  ]
  return values[parseInt(code)] || ''
}

// mutates the provided array
export function convertSqlToErddapParams (sql: string, searchParams: string[]) {
  // manipulate SQL string into list of 3-element lists (field, operator, value)
  const clauses = parseSql(sql)
//   const clauses = sql
//     .replace(/\(+?/g, '') // replace left parens
//     .replace(/\)+?/g, '') // replace right parens
//     .replace(/LOWER/g, '') // remove the LOWER() function
//     .split(/ and /i)
//     .map(elem => {
//       const t = elem.split(/\s+/)
//       // construct 3-element array with field, operator, value. Value may have multiple words which need
//       // to be rejoined and replace single quotes with double quotes
//       return t.slice(0, 2).concat(t.slice(2).join(' ').replace(/'/g, '"'))
//     })
  // console.log(clauses)

  // build key/value pairs for specified parameters
  let found = clauses.find(elem => elem[0] === 'VernacularNameCategory')
  // ERDDAP requires the value to be in double quotes, so we need to replace single quotes with double quotes
  if (found) { searchParams.push(`VernacularNameCategory=${found[2].replace(/'/g, '"')}` ) }

  // HighlightImageURL is skipped since ERDDAP does not support the OR condition
  found = clauses.find(elem => elem[0] === 'ImageURL')
  if (found) { searchParams.push(`ImageURL=~"https://.*"` ) }

  // DepthInMeters is a special case because it can be specified multiple times, e.g. "DepthInMeters >= 0 AND DepthInMeters <= 100"
  clauses.filter(elem => elem[0] === 'DepthInMeters').forEach(elem => {
    searchParams.push(`DepthInMeters${elem[1]}${elem[2]}`)
  })

  found = clauses.find(elem => elem[0] === 'ScientificName')
  if (found) { searchParams.push(`ScientificName=${found[2].replace(/'/g, '"')}`) }

  // ObservationYear is a special case because it can be specified multiple times, e.g. "ObservationYear >= 2020 AND ObservationYear <= 2026"
  clauses.filter(elem => elem[0] === 'ObservationYear').forEach(elem => {
    searchParams.push(`ObservationYear${elem[1]}${elem[2]}`)
  })

  found = clauses.find(elem => elem[0] === 'FishCouncilRegionCode')
  if (found) { searchParams.push(`FishCouncilRegion="${findFisheryRegionByCode(found[2])}"`) }

  found = clauses.find(elem => elem[0] === 'OceanCode')
  if (found) { searchParams.push(`Ocean="${findOceanNameByCode(found[2])}"`) }

  found = clauses.find(elem => elem[0] === 'Phylum')
  if (found) { searchParams.push(`Phylum=${found[2].replace(/'/g, '"')}`) }

  found = clauses.find(elem => elem[0] === 'Class')
  if (found) { searchParams.push(`Class=${found[2].replace(/'/g, '"')}`) }

  // Order is a reserved word and renamed in the hosted feature layer
  found = clauses.find(elem => elem[0] === 'Order_')
  if (found) { searchParams.push(`Order=${found[2]}`) }

  found = clauses.find(elem => elem[0] === 'Family')
  if (found) { searchParams.push(`Family=${found[2].replace(/'/g, '"')}`) }

  found = clauses.find(elem => elem[0] === 'Genus')
  if (found) { searchParams.push(`Genus=${found[2]}`) }

  found = clauses.find(elem => elem[0] === 'Synonyms')
  if (found) {
    // e.g. "%paradox%" -> ".*paradox.*"
    // mark as case-insensitive pattern match
    searchParams.push(`Synonyms=~"(?i).*${found[2].replace(/['%]/g, '')}.*"`)
  }

  found = clauses.find(elem => elem[0] === 'VerbatimScientificName')
  if (found) {
    const regex = /["%]/g
    const str = found[2].replace(regex, '')
    searchParams.push(`VerbatimScientificName=~"(?i).*${str.replace(/['%]/g, '')}.*"`)
  }

  found = clauses.find(elem => elem[0] === 'AphiaID')
  if (found) { searchParams.push(`AphiaID=${found[2]}`) }

  found = clauses.find(elem => elem[0] === 'DatasetID')
  if (found) { searchParams.push(`DatasetID=${found[2]}`) }
}


export function stripTrailingParens (sql: string): string {
  while (sql.endsWith(')')) {
    sql = sql.slice(0, -1)
  }
  return sql
}

export function stripLeadingParens (sql: string): string {
  while (sql.startsWith('(')) {
    sql = sql.slice(1)
  }
  return sql
}

/**
 * take a SQL string and split it into clauses, stripping leading and trailing
 * parentheses from each clause. Returns a list of lists, where each inner list
 * is a clause split into its components (field, operator, value).
 * WARNING: this function does not recognize nested clauses
 * @returns list of clauses
 */
export function parseSql (sql: string): string[][] {
    // Experience Builder sometimes uses lowercase 'and' and 'or' instead of uppercase so standardize for parsing
    const sqlString = sql.replaceAll(' and ', ' AND ').replaceAll(' or ', ' OR ')
    const clausesList = sqlString.split(/AND|OR/).map(clause => clause.trim())
    const parsedList = clausesList.map(clause => {
        clause = stripLeadingParens(clause)
        clause = stripTrailingParens(clause)
        return clause.split(/\s+/).map(part => part.trim())
    })
    return parsedList.map(clause => {
        // join all parts after the operator into a single value string
        clause[2] = clause.slice(2).join(' ')
        // remove any extra parts after the value
        return clause.splice(0,3)
    })
}