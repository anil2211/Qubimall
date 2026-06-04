"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const items = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return { href, label, isLast: index === segments.length - 1 };
  });

  return (
    <nav aria-label="Breadcrumb" className="container py-3">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="inline-flex items-center hover:text-primary transition-colors">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href} className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4" />
            {item.isLast ? (
              <span className="text-foreground font-medium truncate max-w-[200px]">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors truncate max-w-[200px]"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
