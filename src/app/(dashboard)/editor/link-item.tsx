import { Icons } from "@components/icons"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Button } from "@ui/button"
import { Input } from "@ui/input"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type LinkProps = {
  id: number
  url: string
}

export function SortableItem({ id, url }: LinkProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-center gap-3 rounded-lg border p-2 shadow-sm"
    >
      <span className="line-clamp-1 flex-1">{url}</span>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={() => console.log("hello world")}
            variant={"secondary"}
            size={"icon"}
          >
            <Icons.link className="size-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit Link</DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <Input type="text" placeholder="https://url" className="flex-1" />
            <Button>Save</Button>
          </div>
        </DialogContent>
      </Dialog>
      <Button
        variant={"outline"}
        size={"icon"}
        ref={setActivatorNodeRef}
        {...listeners}
      >
        <Icons.drag className="size-4" />
      </Button>
    </div>
  )
}
