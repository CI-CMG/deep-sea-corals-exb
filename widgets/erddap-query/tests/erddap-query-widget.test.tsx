// import { React } from 'jimu-core'
// import _Widget from '../src/runtime/widget'
import { convertSqlToErddapParams, findOceanNameByCode, findFisheryRegionByCode, stripTrailingParens, parseSql, stripLeadingParens } from '../src/runtime/erddap-utils'

describe('test erddap-query widget', () => {
  it('placeholder test', () => {
    expect(1).toEqual(1)
  })
})

describe('test lookup functions', () => {
  it('should find correct fishery region code', () => {
    expect(findFisheryRegionByCode('0')).toEqual('Caribbean')
  })
  it('should find correct ocean name by code', () => {
    expect(findOceanNameByCode('0')).toEqual('Arctic')
  })
})


describe('test convertSqlToErddapParams', () => {
  const input = "(VernacularNameCategory = 'alcyonacean (unspecified)') AND ((HighlightImageURL LIKE 'https%') OR (ImageURL LIKE 'https%')) AND ((ObservationYear >= 2020) AND (ObservationYear <= 2026)) AND (FishCouncilRegionCode = 0)"
  const input1 =
  "((VernacularNameCategory = 'alcyonacean (unspecified)') AND ((HighlightImageURL LIKE 'https%') OR (ImageURL LIKE 'https%')) AND ((ObservationYear >= 2020) AND (ObservationYear <= 2026)) AND (FishCouncilRegionCode = 0) AND (OceanCode = 2)) and (Phylum = 'Chordata') and (ScientificName = 'Aaptos') and (VerbatimScientificName LIKE '%verbatimname%')"
  const input2 = "VernacularNameCategory = 'alcyonacean (unspecified)'"

  it('should convert SQL to ERDDAP params - single filter', () => {
    const searchParams: string[] = []
    convertSqlToErddapParams(input2, searchParams)
    expect(searchParams).toEqual(['VernacularNameCategory="alcyonacean (unspecified)"'])
  })

  it('should retrieve Ocean name', () => {
    expect(findOceanNameByCode('2')).toEqual('North Atlantic')
  })

  it('should retrieve Fishery Region name', () => {
    expect(findFisheryRegionByCode('0')).toEqual('Caribbean')
  })

  it('should convert SQL to ERDDAP params - multiple filters', () => {
    const searchParams: string[] = []
    convertSqlToErddapParams(input1, searchParams)
    // expect(searchParams.length).toEqual(8)
    expect(searchParams).toEqual([
      'VernacularNameCategory="alcyonacean (unspecified)"',
      'ImageURL=~"https://.*"',
      'ScientificName="Aaptos"',
      'ObservationYear>=2020',
      'ObservationYear<=2026',
      'FishCouncilRegion="Caribbean"',
      'Ocean="North Atlantic"',
      'Phylum="Chordata"',
      'VerbatimScientificName=~"(?i).*verbatimname.*"'
    ])
  })

})

describe('test parseSql', () => {
  const input = "(VernacularNameCategory = 'alcyonacean (unspecified)') AND ((HighlightImageURL LIKE 'https%') OR (ImageURL LIKE 'https%')) AND ((ObservationYear >= 2020) AND (ObservationYear <= 2026)) AND (FishCouncilRegionCode = 0)"
  const input1 = "((VernacularNameCategory = 'alcyonacean (unspecified)') AND ((HighlightImageURL LIKE 'https%') OR (ImageURL LIKE 'https%')) AND ((ObservationYear >= 2020) AND (ObservationYear <= 2026)) AND (FishCouncilRegionCode = 0) AND (OceanCode = 2)) AND (Phylum = 'Chordata') AND (ScientificName = 'Aaptos') AND (VerbatimScientificName LIKE '%verbatimname%')"
  // single clause with no parens
  const input2 = "VernacularNameCategory = 'alcyonacean (unspecified)'"

  it('should split SQL into clauses', () => {
    const clauses = parseSql(input)
    expect(clauses.length).toEqual(6)
    expect(clauses[0]).toEqual(['VernacularNameCategory', '=', "'alcyonacean (unspecified)'"])
    expect(clauses[1]).toEqual(['HighlightImageURL', 'LIKE', "'https%'"])
    expect(clauses[2]).toEqual(['ImageURL', 'LIKE', "'https%'"])
    expect(clauses[3]).toEqual(['ObservationYear', '>=', '2020'])
    expect(clauses[4]).toEqual(['ObservationYear', '<=', '2026'])
    expect(clauses[5]).toEqual(['FishCouncilRegionCode', '=', '0'])
  })
  it('should split SQL into clauses - multiple filters', () => {
    const clauses = parseSql(input1)
    // expect(clauses.length).toEqual(10)
    expect(clauses[0]).toEqual(['VernacularNameCategory', '=', "'alcyonacean (unspecified)'"])
    expect(clauses[1]).toEqual(['HighlightImageURL', 'LIKE', "'https%'"])
    expect(clauses[2]).toEqual(['ImageURL', 'LIKE', "'https%'"])
    expect(clauses[3]).toEqual(['ObservationYear', '>=', '2020'])
    expect(clauses[4]).toEqual(['ObservationYear', '<=', '2026'])
    expect(clauses[5]).toEqual(['FishCouncilRegionCode', '=', '0'])
    expect(clauses[6]).toEqual(['OceanCode', '=', '2'])
    expect(clauses[7]).toEqual(['Phylum', '=', "'Chordata'"])
    expect(clauses[8]).toEqual(['ScientificName', '=', "'Aaptos'"])
    expect(clauses[9]).toEqual(['VerbatimScientificName', 'LIKE', "'%verbatimname%'"])
  })
  it('should strip trailing parens from SQL but preserve embedded parentheses', () => {
    let sql = "(VernacularNameCategory = 'alcyonacean (unspecified)')"
    expect( stripTrailingParens(sql)).toEqual("(VernacularNameCategory = 'alcyonacean (unspecified)'")
    sql = "(VernacularNameCategory = 'alcyonacean (unspecified)'))"
    expect( stripTrailingParens(sql)).toEqual("(VernacularNameCategory = 'alcyonacean (unspecified)'")
    expect (stripTrailingParens(input2)).toEqual(input2) // no leading parens to strip

  })
  it('should strip all leading parens from SQL but preserve embedded parentheses', () => {
    let sql = "(VernacularNameCategory = 'alcyonacean (unspecified)'"
    expect( stripLeadingParens(sql)).toEqual("VernacularNameCategory = 'alcyonacean (unspecified)'")
    sql = "((VernacularNameCategory = 'alcyonacean (unspecified)'"
    expect( stripLeadingParens(sql)).toEqual("VernacularNameCategory = 'alcyonacean (unspecified)'")
    expect (stripLeadingParens(input2)).toEqual(input2) // no leading parens to strip
  })

})