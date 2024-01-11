import { TextField } from "@components/common/TextField"
import { Icons } from "@components/icons"
import { Button } from "@ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { LinkList } from "./link-list"
import { Preview } from "./preview"
import { UploadImage } from "./upload-image"

export default function EditorPage() {
  return (
    <>
      <Tabs defaultValue="preview" className="mx-auto my-4 max-w-sm">
        <TabsList className="mb-4 grid grid-cols-2">
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <Preview />
        </TabsContent>
        <TabsContent value="editor">
          <div className="space-y-4">
            <UploadImage />
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
