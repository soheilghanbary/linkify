"use server"

import { revalidatePath } from "next/cache"
import { db } from "@lib/db"
import { getUserSession } from "@lib/user-session"
import { Divide } from "lucide-react"

// get user by session
const getUserBySession = async () => {
  const { id } = (await getUserSession()) as { id: string }
  return await db.user.findUnique({ where: { id } })
}

// update user image
const updateUserImage = async (image: string) => {
  const { id } = (await getUserSession()) as { id: string }
  const updated = await db.user.update({
    where: { id },
    data: { image },
  })
  revalidatePath("/editor")
  return updated
}

// update user name or title
const updateUserDetails = async ({
  name,
  title,
}: {
  name: string
  title: string
}) => {
  const { id } = (await getUserSession()) as { id: string }
  const userUpdated = await db.user.update({
    where: { id },
    data: { name, title },
  })
  revalidatePath("/editor")
  return userUpdated
}

// add user link
const updateUserLinks = async (links: any) => {
  const { id } = (await getUserSession()) as { id: string }
  const updatedLinks = await db.user.update({
    where: { id },
    data: { links },
  })
}

export { getUserBySession, updateUserImage, updateUserDetails, updateUserLinks }
