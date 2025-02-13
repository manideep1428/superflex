import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, children, href, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={cn(
          "relative text-sm font-medium transition-colors hover:text-white/80",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        <motion.span
          className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white"
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.2 }}
        />
      </Link>
    )
  }
)
NavLink.displayName = "NavLink"

export { NavLink }
