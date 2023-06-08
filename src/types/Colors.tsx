export type TColors = {
  [key: string]: { color: string }
}

export const typesColors: TColors = {
  bug: { color: '#94BC4A' },
  ice: { color: '#70CBD4' },
  dark: { color: '#736C75' },
  fire: { color: '#EA7A3C' },
  rock: { color: '#B2A061' },
  water: { color: '#539AE2' },
  fairy: { color: '#E397D1' },
  ghost: { color: '#846AB6' },
  grass: { color: '#71C558' },
  steel: { color: '#89A1B0' },
  dragon: { color: '#6A7BAF' },
  flying: { color: '#7DA6DE' },
  ground: { color: '#CC9F4F' },
  normal: { color: '#AAB09F' },
  poison: { color: '#B468B7' },
  psychic: { color: '#E5709B' },
  fighting: { color: '#CB5F48' },
  electric: { color: '#E5C531' },
}

export const pokemonStats: { [key: string]: string } = {
  hp: "HP",
  attack: "ATT",
  defense: "DEF",
  "special-attack": "S-ATT",
  "special-defense": "S-DEF",
  speed: "SPED",
};

export const pokemonStatsColor: { [key: string]: string } = {
  hp: "#ef4444", // Red
  attack: "#f97316", // Orange
  defense: "#eab308", // Yellow
  "special-attack": "#a855f7", // Purple
  "special-defense": "#06b6d4", // Cyan
  speed: "#22c55e", // Green
}

export const styles = (type: string[], percent: number) => {
  let background: string
  if (type.length > 1) {
    background = `linear-gradient(0deg, ${type.map((item) => typesColors[item].color + percent)}`
  } else {
    background = typesColors[type[0]].color + percent
  }
  return { background, color: typesColors[type[0]].color }
}