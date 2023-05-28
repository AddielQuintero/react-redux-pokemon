export const logger = (store: any) => (next: any) => (action: any) => {
  // console.log('🚀  action:', action.payload)
  next(action)
}

export const prefix = (store: any) => (next: any) => (action: any) => {
  const prefix = action.payload.map((pokemon: any) => ({ ...pokemon, name: 'poke-' + pokemon.name }))
  const updateAction = { ...action, payload: prefix }
  next(updateAction)
  // next(action)
}
