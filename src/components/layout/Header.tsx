import Link from "next/link";
import { HeaderButton } from "@/components/ui/HeaderButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-2">
        <HeaderButton href="/">Esquire Asset Recovery, LLC</HeaderButton>

        <nav className="flex items-center gap-2">
          <HeaderButton href="/">Home</HeaderButton>
          <HeaderButton href="/">About Us</HeaderButton>
          <HeaderButton href="/">Our Team</HeaderButton>
          <HeaderButton href="/">News & Insights</HeaderButton>
          <HeaderButton href="/">State Regulations</HeaderButton>
          <HeaderButton href="/">Service Areas</HeaderButton>
        </nav>
      </div>
    </header>
  );
}
