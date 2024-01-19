"use client"

import { useCallback, useState, useTransition } from "react"
import Image from "next/image"
import { Icons } from "@components/icons"
import { useEdgeStore } from "@lib/edgestore"
import { cn } from "@lib/utils"
import { updateUserImage } from "@server/user"
import { useDropzone } from "react-dropzone"
import { toast } from "sonner"

import styles from "./personal.module.scss"

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
      className={cn(styles.figure, { "animate-pulse": isPending })}
    >
      {path.length ? (
        <ProfileImage path={path} />
      ) : (
        <Icons.upload className="size-6" />
      )}
    </div>
  )
}

const ProfileImage = ({ path }: { path: string }) => {
  const [loading, setLoading] = useState(true)
  return (
    <Image
      fill
      alt=""
      src={path}
      onLoadingComplete={() => setLoading(false)}
      className={cn(styles.image, loading ? styles["image-loader"] : "")}
    />
  )
}
