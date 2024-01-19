"use client"

import { useTransition } from "react"
import { TextField } from "@components/common/TextField"
import { TextFieldArea } from "@components/common/TextFieldArea"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateUserDetails } from "@server/user"
import { Button } from "@ui/button"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

type Schema = z.infer<typeof schema>

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  bio: z.string().min(1, { message: "Bio is required" }),
})

export const PersonalForm = (values: Schema) => {
  const [isPending, startTransition] = useTransition()
  const { register, handleSubmit } = useForm<Schema>({
    defaultValues: values,
    resolver: zodResolver(schema),
  })
  const onSubmit = (data) => {
    startTransition(async () => {
      await updateUserDetails(data)
      toast.success("Personal Updated")
    })
  }
  return (
    <form className="space-y-4 pt-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4">
        <TextField label="Name" {...register("name")} />
        <TextField label="Title" {...register("title")} />
      </div>
      <TextFieldArea label="Bio" {...register("bio")} />
      <Button type="submit" disabled={isPending}>
        Save Changes
      </Button>
    </form>
  )
}
