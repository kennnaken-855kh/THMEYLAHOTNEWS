"use client"

import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary px-4 py-3 shadow-md flex justify-between items-center text-primary-foreground">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold leading-tight tracking-tight">THMEY LAHOT</h1>
        <span className="text-[10px] tracking-[0.3em] font-medium opacity-90 uppercase">NEWS</span>
      </div>
      <button className="text-2xl focus:outline-none">
        <Menu className="h-6 w-6" />
      </button>
    </header>
  )
}
