import { type PropsWithChildren } from "react"

import { Sidebar } from "./components/sidebar"

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <main className="container mx-auto flex gap-4 divide-x">
      <Sidebar />
      <section className="flex-1 p-4">{children}</section>
      <div className="w-60 p-4">preview is here</div>
    </main>
  )
}
