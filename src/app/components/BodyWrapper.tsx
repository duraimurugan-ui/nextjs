"use client";

import { usePathname } from "next/navigation";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pageClass = pathname === "/" ? "page-home" : `page-${pathname.replace("/", "")}`;

  return <body className={`${pageClass}_dm antialiased`}>{children}</body>;
}