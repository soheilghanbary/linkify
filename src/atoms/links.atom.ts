import { atom, useAtom } from "jotai"

type LinkProps = {
  id: number
  url: string
}

const atomLinks = atom<LinkProps[]>([])

const useLinksAtom = () => {
  const [links, setLinks] = useAtom(atomLinks)

  const addLink = (newLink: string) => {
    return setLinks((prev) => [...prev, { id: prev.length + 1, url: newLink }])
  }

  return { links, setLinks, addLink }
}

export { atomLinks, useLinksAtom }
