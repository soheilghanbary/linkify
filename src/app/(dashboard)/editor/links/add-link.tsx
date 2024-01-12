import { useState } from "react"
import { useLinksAtom } from "@atoms/links.atom"
import { Icons } from "@components/icons"
import { Button } from "@ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/dialog"
import { Input } from "@ui/input"
import { toast } from "sonner"

export const AddLink = () => {
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState("")
  const { addLink } = useLinksAtom()
  const onSubmit = () => {
    addLink(url)
    toast.success("Link added successfully")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant={"outline"}>
          <Icons.link className="mr-2.5 size-5" />
          Add Link
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Add New Link</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-4">
          <Input
            type="url"
            placeholder="https://url"
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSubmit()
              }
            }}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button type="button" onClick={onSubmit}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
