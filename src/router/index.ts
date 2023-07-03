interface TypePages {
  default: () => void
  [K: string]: any
}
const pages: TypePages = import.meta.glob("../pages/*/*.tsx", { eager: true })
const routes = Object.keys(pages).map((path) => {
  const temp = path.split('/');
  const name = temp.at(-1).split('.tsx')[0]
  return {
    name,
    path: name === "Home" ? "/home" : `${name.toLowerCase()}`,
    component: pages[path]?.default || null
  }
})

export default routes
