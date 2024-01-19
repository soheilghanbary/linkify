import Link from "next/link"
import { Icons } from "@components/icons"
import { getUserBySession } from "@server/user"

import { PersonalForm } from "./personal-form"
import { UploadImage } from "./upload-image"

export default async function PersonalPage() {
  const user = (await getUserBySession()) as {
    name: string
    title: string
    bio: string
    image: string
  }
  return (
    <div className="max-w-lg space-y-4">
      <div className="flex items-center gap-3">
        <Link
          href={"/dashboard"}
          className="flex items-center justify-center rounded-md bg-secondary p-2 text-secondary-foreground"
        >
          <Icons.left className="size-4" />
        </Link>
        <h1 className="text-lg font-semibold">Edit Personal</h1>
      </div>
      <UploadImage initialPath={user.image} />
      <PersonalForm name={user.name} title={user.title} bio={user.bio} />
    </div>
  )
}
