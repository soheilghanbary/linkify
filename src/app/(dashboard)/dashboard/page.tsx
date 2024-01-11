import Link from "next/link"
import { Icons } from "@components/icons"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Dashboard() {
  return (
    <div>
      <div className="my-4 grid grid-cols-3 gap-4">
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
        <div className="mb-4 space-y-2">
          <h3 className="text-xl font-semibold">Activity</h3>
          <hr className="w-20 rounded-full border-2 border-primary" />
        </div>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="font-semibold">Soheil Ghanbary</h2>
          <p className="text-muted-foreground">has been liked your portfolio</p>
          <p className="text-sm text-muted-foreground">3w ago</p>
        </div>
      </div>
    </div>
  )
}
