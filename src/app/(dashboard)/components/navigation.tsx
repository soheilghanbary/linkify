"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icons } from "@components/icons"
import { cn } from "@lib/utils"

export const Navigation = () => (
  <div className="mx-auto flex max-w-lg items-center gap-2 overflow-x-scroll rounded-full border p-1.5 shadow md:grid md:grid-cols-4">
    <NavigationItem label="Dashboard" href="/dashboard" icon={Icons.rocket} />
    <NavigationItem label="Editor" href="/editor" icon={Icons.new} />
    <NavigationItem label="Templates" href="/templates" icon={Icons.projects} />
    <NavigationItem label="Settings" href="/settings" icon={Icons.settings} />
  </div>
)

const NavigationItem = ({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: any
}) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center gap-2 rounded-full p-3 text-sm font-medium ring-border transition-all hover:bg-secondary hover:ring-2",
        {
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground hover:ring-0":
            isActive,
        }
      )}
    >
      <Icon className="size-4" />
      <span>{label}</span>
    </Link>
  )
}
