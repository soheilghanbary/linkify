"use server"

import { db } from "@lib/db"
import { getUserSession } from "@lib/user-session"

// get user by session
const getUserBySession = async () => {
  const { id } = (await getUserSession()) as { id: string }
  return await db.user.findUnique({ where: { id } })
}

export { getUserBySession }
