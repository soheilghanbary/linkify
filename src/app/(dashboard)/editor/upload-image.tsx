"use client"

import { useCallback, useState } from "react"
import Image from "next/image"
import { Icons } from "@components/icons"
import { useDropzone } from "react-dropzone"

export const UploadImage = () => {
  const [path, setPath] = useState<string>("")
  const onDrop = useCallback(async (files: File[]) => {
    setPath(URL.createObjectURL(files[0]))
  }, [])
  const { getRootProps } = useDropzone({ onDrop })
  return (
    <div
      {...getRootProps()}
      className="relative mx-auto flex size-24 cursor-pointer items-center justify-center rounded-full border-2 border-dashed shadow-sm transition-all hover:border-primary hover:bg-muted"
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
