"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function PremiumButton({
  href,
  children,
  className,
  variant = "default",
  size = "default",
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}) {
  const sharedClassName = cn(
    "rounded-full px-6 py-3 text-sm font-medium shadow-[0_10px_40px_rgba(15,76,92,0.14)] transition-all duration-300",
    variant === "outline" && "border border-slate-300 bg-white/80 text-slate-900 hover:bg-slate-50",
    variant === "ghost" && "border border-transparent bg-transparent text-slate-700 shadow-none hover:bg-slate-100",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        <Button variant={variant === "default" ? "default" : variant} size={size} className={sharedClassName}>
          {children}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    );
  }

  return (
    <Button variant={variant === "default" ? "default" : variant} size={size} className={sharedClassName}>
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
