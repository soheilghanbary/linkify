import { atom, useAtom } from "jotai"

type LinkProps = {
  id: string
  name: string
  url: string
}

const linksAtom = atom<LinkProps[]>([])

const useLinks = () => {
  const [links, setLinks] = useAtom(linksAtom)
  const addLink = (link: LinkProps) =>
    setLinks((links) => [...links, { ...link }])
  return { links, setLinks, addLink }
}

export { useLinks }
