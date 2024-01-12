import { getUserBySession } from "@server/user"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { EditForm } from "./edit-form"
import { Preview } from "./preview"

export default async function EditorPage() {
  const user = (await getUserBySession()) as {
    name: string
    title: string
    image: string
  }
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
          <EditForm
            name={user.name}
            title={user.title}
            initialPath={user.image}
          />
        </TabsContent>
      </Tabs>
    </>
  )
}
