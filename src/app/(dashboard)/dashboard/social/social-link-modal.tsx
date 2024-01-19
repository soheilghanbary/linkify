"use client"

import { useState } from "react"
import { Icons } from "@components/icons"
import { Button } from "@ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/dialog"
import { Github } from "iconoir-react"

import styles from "./social.module.scss"
import { useLinks } from "./useLinks"

const socials = [
  {
    name: "Github",
    url: "https://github.com",
    selected: false,
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    selected: false,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    selected: false,
  },
  {
    name: "Tiktok",
    url: "https://tiktok.com",
    selected: false,
  },
  {
    name: "Personal",
    url: "https://",
    selected: false,
  },
]

export const SocialLinkModal = () => {
  const [open, setOpen] = useState(false)
  const { links, setLinks } = useLinks()
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Icons.new className="mr-2 size-4" />
          Add Link
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose a social link</DialogTitle>
          <DialogDescription>
            Choose a social link to add to your profile
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-4">
          {socials.map((social) => (
            <SocialLinkBox
              key={social.name}
              name={social.name}
              url="https://github.com/"
              icon={Github}
              onClose={() => setOpen(false)}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

const SocialLinkBox = ({
  name,
  icon: Icon,
  url,
  onClose,
}: {
  name: string
  icon: any
  url: string
  onClose: () => void
}) => {
  const { addLink } = useLinks()
  return (
    <button
      onClick={() => {
        addLink({
          id: new Date().getMilliseconds().toString(),
          name,
          url,
        })
        onClose()
      }}
      className={styles["social-box"]}
    >
      <Icon className="size-5" />
      <span>{name}</span>
    </button>
  )
}
