"use client"

import { Link as ScrollLink } from "react-scroll"

export function SmoothScrollLink({ href, children, ...props }) {
  if (href.startsWith("#")) {
    return (
      <ScrollLink to={href.substring(1)} smooth={true} duration={500} className="cursor-pointer" {...props}>
        {children}
      </ScrollLink>
    )
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

