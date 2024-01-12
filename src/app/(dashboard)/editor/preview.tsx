import { Icons } from "@components/icons"
import { getUserBySession } from "@server/user"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export const Preview = async () => {
  const user = await getUserBySession()
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Avatar className="size-24">
        <AvatarImage src={user?.image!} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2 className="text-lg font-semibold text-foreground">{user?.name}</h2>
      <p className="rounded-full border bg-muted px-2.5 py-1 text-sm text-muted-foreground">
        {user?.title}
      </p>
      <div className="space-y-3 [&>h3]:text-center [&>h3]:text-lg [&>h3]:font-semibold">
        <h3>My Links</h3>
        <div className="grid grid-cols-5 gap-3">
          <Button variant={"secondary"} size={"icon"}>
            <Icons.github className="size-4" />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <Icons.github className="size-4" />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <Icons.github className="size-4" />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <Icons.github className="size-4" />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <Icons.github className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
