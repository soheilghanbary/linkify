"use client"

import { useCallback, useState, useTransition } from "react"
import Image from "next/image"
import { Icons } from "@components/icons"
import { useEdgeStore } from "@lib/edgestore"
import { cn } from "@lib/utils"
import { updateUserImage } from "@server/user"
import { useDropzone } from "react-dropzone"
import { toast } from "sonner"

export const UploadImage = ({ initialPath }: { initialPath: string }) => {
  const [isPending, startTransition] = useTransition()
  const [path, setPath] = useState<string>(initialPath)
  const { edgestore } = useEdgeStore()
  const onDrop = useCallback(
    (files: File[]) => {
      setPath(URL.createObjectURL(files[0]))
      startTransition(async () => {
        const image = await edgestore.publicFiles.upload({ file: files[0] })
        const res = await updateUserImage(image.url)
        toast.success("Profile picture updated")
      })
    },
    [edgestore.publicFiles]
  )
  const { getRootProps } = useDropzone({ onDrop })
  return (
    <div
      {...getRootProps()}
      className={cn(
        "relative mx-auto flex size-24 cursor-pointer items-center justify-center rounded-full border-2 border-dashed shadow-sm transition-all hover:border-primary hover:bg-muted",
        { "animate-pulse": isPending }
      )}
    >
      {path.length ? (
        <Image
          fill
          alt=""
          src={path}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <Icons.upload className="size-6" />
      )}
    </div>
  )
}
