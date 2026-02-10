export interface HexbinSummary {
  minDepth: number
  maxDepth: number
  phylumCounts: PhylumCount[]
  speciesCount: SpeciesCount
  scientificNameCounts: ScientificNameCount[]
  temperature: EnvironmentalStats
  salinity: EnvironmentalStats
  oxygen: EnvironmentalStats
}

export interface EnvironmentalStats {
  min?: number
  max?: number
  avg?: number
  count?: number
}

export interface PhylumCount {
  Count: number
  Phylum: string
}

export interface ScientificNameCount {
  Count: number
  ScientificName: string
  VernacularNameCategory?: string
}

export interface SpeciesCount {
  rawCount: number
  normalizedCount?: number
}
