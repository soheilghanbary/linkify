"use client"

import { useTransition } from "react"
import { TextField } from "@components/common/TextField"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateUserDetails } from "@server/user"
import { Button } from "@ui/button"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { AddLink } from "./links/add-link"
import { LinkList } from "./links/link-list"
import { UploadImage } from "./upload-image"

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  title: z.string().min(1, { message: "Title is required" }),
})

type Schema = z.infer<typeof schema> & {
  initialPath: string
}

export const EditForm = ({ initialPath, name, title }: Schema) => {
  const [isPending, startTransition] = useTransition()

  const { register, handleSubmit } = useForm<Schema>({
    defaultValues: {
      name,
      title,
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: Schema) => {
    startTransition(async () => {
      const res = await updateUserDetails(data)
      toast.success("user details updated")
    })
  }

  return (
    <div className="space-y-2">
      <UploadImage initialPath={initialPath} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pb-2">
        <TextField label="Name" {...register("name")} />
        <TextField label="Title" {...register("title")} />
        <div className="flex items-center space-x-2">
          <Button disabled={isPending} type="submit" variant={"default"}>
            Save
          </Button>
          <AddLink />
        </div>
      </form>
    </div>
  )
}
