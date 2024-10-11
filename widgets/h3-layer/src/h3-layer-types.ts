export interface HexbinSummary {
    minDepth: number
    maxDepth: number
    phylumCounts: PhylumCount[]
    speciesCount: SpeciesCount
    scientificNameCounts: ScientificNameCount[]
    environmentalVariables?: EnvironmentalVariables
  }
  
  export interface EnvironmentalVariables {
    salinity?: number
    min_salinity?: number
    max_salinity?: number
    oxygen?: number
    min_oxygen?: number
    max_oxygen?: number
    temperature?: number
    min_temperature?: number
    max_temperature?: number
  }

  export interface PhylumCount {
    Count: number
    Phylum: string
  }

  export interface ScientificNameCount {
    Count: number
    ScientificName: string,
    VernacularNameCategory?: string
  }
  
  export interface SpeciesCount {
    rawCount: number
    normalizedCount?: number
  }
 