import { type PropsWithChildren } from "react"

import { Navigation } from "./components/navigation"

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}
