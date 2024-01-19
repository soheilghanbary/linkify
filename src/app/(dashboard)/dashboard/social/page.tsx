"use client"

import { SocialLinkModal } from "./social-link-modal"
import { useLinks } from "./useLinks"

export default function SocialPage() {
  const { links } = useLinks()
  return (
    <div>
      <pre>{JSON.stringify(links, null, 2)}</pre>
      <SocialLinkModal />
    </div>
  )
}
