import { ModeToggle } from "@components/mode-toggle"
import { getUserBySession } from "@server/user"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function Dashboard() {
  const user = await getUserBySession()
  return (
    <div>
      <h1 className="text-muted-foreground">
        Welcome Back <strong className="text-foreground">{user?.name}</strong>
      </h1>
      <ModeToggle />
      <div className="my-4 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Views</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>+34321</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Likes</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>+34321</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Last Updated</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>2024/08/11 12:43 pm</p>
          </CardContent>
        </Card>
      </div>
      <div className="mx-auto max-w-lg">
        <div className="mb-2 space-y-2">
          <h3 className="text-xl font-semibold">Activity</h3>
          <hr className="w-20 rounded-full border-2 border-primary" />
        </div>
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
      </div>
    </div>
  )
}

const ActivityItem = () => (
  <div className="flex items-center gap-2.5 p-2">
    <Avatar className="size-7 md:size-8">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <h2 className="text-xs font-semibold md:text-base">Soheil</h2>
    <p className="flex-1 text-xs text-muted-foreground md:text-base">
      has been liked your portfolio
    </p>
    <p className="text-xs text-muted-foreground md:text-sm">3w ago</p>
  </div>
)
