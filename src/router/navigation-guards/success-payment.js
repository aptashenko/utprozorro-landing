export const isRedirected = (to) => {
  if (to.query.payment !== '1') return {name: 'home'}
  else return true
}
