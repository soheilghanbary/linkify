"use client"

import Link from "next/link"
import { Icons } from "@components/icons"

import styles from "./sidebar.module.scss"

export const SidebarBody = () => {
  return (
    <div className={styles[`sidebar-body`]}>
      <SidebarLink href="" label="Dashboard" icon={Icons.home} />
      <SidebarLink href="personal" label="Personal" icon={Icons.user} />
      <SidebarLink href="social" label="Social" icon={Icons.web} />
      <SidebarLink href="products" label="Products" icon={Icons.products} />
    </div>
  )
}

type SidebarLinkProps = {
  href: string
  label: string
  icon: any
}

const SidebarLink = ({ href, label, icon: Icon }: SidebarLinkProps) => {
  return (
    <Link href={`/dashboard/${href}`} className={styles["sidebar-item"]}>
      <Icon className="size-4" />
      <span>{label}</span>
    </Link>
  )
}
