import { create } from "zustand"

type LinkProps = {
  id: number
  url: string
}

type useLinkStoreProps = {
  links: LinkProps[]
  addLink: (newUrl: string) => void
  updateLinks: (links: LinkProps[]) => void
}

const useLinkStore = create<useLinkStoreProps>((set) => ({
  links: [],
  addLink: (url) =>
    set((state) => ({
      links: [...state.links, { id: Date.now(), url }],
    })),
  updateLinks: (links) => set({ links }),
}))

export { useLinkStore }
