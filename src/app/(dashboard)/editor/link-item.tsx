import { Icons } from "@components/icons"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Button } from "@ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@ui/drawer"
import { Input } from "@ui/input"

type LinkProps = {
  id: number
  url: string
}

export function SortableItem({ id, url }: LinkProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex touch-none items-center gap-3 rounded-lg border p-2 shadow-sm"
    >
      <span className="line-clamp-1 flex-1">{url}</span>
      <Drawer>
        <DrawerTrigger>
          <Button
            onClick={() => console.log("hello world")}
            variant={"secondary"}
            size={"icon"}
          >
            <Icons.link className="size-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit Link</DrawerTitle>
          </DrawerHeader>
          <div className="flex items-center gap-4 px-4">
            <Input type="text" placeholder="https://url" className="flex-1" />
            <Button>Save</Button>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* <Dialog>
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
      </Dialog> */}
      <Button variant={"outline"} size={"icon"} {...listeners} {...attributes}>
        <Icons.drag className="size-4" />
      </Button>
    </div>
  )
}
