"use client"

import { type PropsWithChildren } from "react"
import { Icons } from "@components/icons"
import { useUser } from "@hooks/use-user"
import { Skeleton } from "@ui/skeleton"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Preview = () => {
  const { data: user, isPending } = useUser()

  if (isPending || !user) {
    return <PreviewLoader />
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Avatar className="size-24">
        <AvatarImage src={user.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <PreviewName>{user.name}</PreviewName>
      <PreviewTitle>{user.title}</PreviewTitle>
      <PreviewLinks links={user.links} />
    </div>
  )
}

const PreviewName = ({ children }: PropsWithChildren) => (
  <h2 className="text-lg font-semibold text-foreground">{children}</h2>
)

const PreviewTitle = ({ children }: PropsWithChildren) => (
  <p className="rounded-full border bg-muted px-2.5 py-1 text-sm text-muted-foreground">
    {children}
  </p>
)

const PreviewLinks = ({ links }: { links: { id: string; url: string }[] }) => {
  return (
    <div className="space-y-3 [&>h3]:text-center [&>h3]:text-lg [&>h3]:font-semibold">
      <h3>My Links</h3>
      <div className="grid gap-3">
        {links.map(({ id, url }) => (
          <a
            href={url}
            target="_blank"
            key={id}
            className="group flex items-center gap-3 rounded-full border p-2 pr-5 shadow-sm hover:bg-secondary"
          >
            <div className="rounded-full border bg-secondary p-2 shadow-sm">
              <Icons.link className="size-5" />
            </div>
            <span className="font-medium text-muted-foreground hover:text-foreground">
              {url}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

const PreviewLoader = () => (
  <div className="flex flex-col items-center justify-center gap-3">
    <Skeleton className="size-24 rounded-full" />
    <Skeleton className="h-6 w-32" />
    <Skeleton className="h-6 w-24" />
    <div className="w-full space-y-3">
      <Skeleton className="h-9 w-full rounded-full" />
      <Skeleton className="h-9 w-full rounded-full" />
      <Skeleton className="h-9 w-full rounded-full" />
    </div>
  </div>
)
