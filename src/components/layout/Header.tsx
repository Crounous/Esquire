import Link from "next/link";
import { HeaderButton } from "@/components/ui/HeaderButton";

export function Header() {
  return (
    <header className="sticky z-100 top-0 bg-white">
      <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-15">
        <HeaderButton href="/">Esquire Asset Recovery, LLC</HeaderButton>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          <HeaderButton href="/">Home</HeaderButton>
          <HeaderButton href="/">About Us</HeaderButton>
          <HeaderButton href="/">Our Team</HeaderButton>
          <HeaderButton href="/">News & Insights</HeaderButton>
          <HeaderButton href="/">State Regulations</HeaderButton>
          <HeaderButton href="/">Service Areas</HeaderButton>
        </nav>

        {/* Mobile menu (no JS) */}
        <details className="relative lg:hidden">
          <summary className="list-none cursor-pointer select-none rounded-full px-4 py-2 font-sans text-lg font-bold text-black hover:text-gray-700">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-black/10 bg-white p-2 shadow-lg">
            <nav className="flex flex-col gap-1">
              <HeaderButton href="/">Home</HeaderButton>
              <HeaderButton href="/">About Us</HeaderButton>
              <HeaderButton href="/">Our Team</HeaderButton>
              <HeaderButton href="/">News & Insights</HeaderButton>
              <HeaderButton href="/">State Regulations</HeaderButton>
              <HeaderButton href="/">Service Areas</HeaderButton>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
