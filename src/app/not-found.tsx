"use client"

import { useRouter } from "next/navigation"

export default function NotFoundPage() {
  const router = useRouter()
  return (
    <div>
      <div className="space-y-10 text-center">
        <h1 className="text-4xl">متاسفانه صفحه مورد نظر یافت نشد!</h1>
      </div>
    </div>
  )
}
