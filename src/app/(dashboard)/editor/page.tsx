import { TextField } from "@components/common/TextField"
import { Icons } from "@components/icons"
import { Button } from "@ui/button"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { LinkList } from "./link-list"

export default function EditorPage() {
  return (
    <>
      <Tabs defaultValue="preview" className="mx-auto my-4 max-w-sm">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="flex flex-col items-center justify-center gap-2">
            <Avatar className="size-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-semibold text-gray-700">
              Soheil Ghanbary
            </h2>
            <p className="rounded-full border bg-muted px-2 py-1 text-sm text-muted-foreground">
              Software Enginner
            </p>
            <div className="space-y-3 [&>h3]:text-center [&>h3]:text-lg [&>h3]:font-semibold">
              <h3>My Links</h3>
              <div className="grid grid-cols-5 gap-3">
                <Button variant={"secondary"} size={"icon"}>
                  <Icons.github className="size-4" />
                </Button>
                <Button variant={"secondary"} size={"icon"}>
                  <Icons.github className="size-4" />
                </Button>
                <Button variant={"secondary"} size={"icon"}>
                  <Icons.github className="size-4" />
                </Button>
                <Button variant={"secondary"} size={"icon"}>
                  <Icons.github className="size-4" />
                </Button>
                <Button variant={"secondary"} size={"icon"}>
                  <Icons.github className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="editor">
          <div className="space-y-4">
            <div className="mx-auto flex size-24 cursor-pointer items-center justify-center rounded-full border-2 border-dashed shadow-sm transition-all hover:border-primary hover:bg-muted">
              <Icons.upload className="size-6" />
            </div>
            <TextField label="Name" />
            <TextField label="Title" />
            <Button variant={"outline"}>
              <Icons.link className="mr-2.5 size-5" />
              Add Link
            </Button>
            <LinkList />
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
