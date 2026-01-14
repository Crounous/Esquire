import Link from "next/link";
import { HeaderButton } from "@/components/ui/HeaderButton";

export function Header() {
  return (
    <header className="sticky z-100 top-0 bg-white">
      <div className="flex h-20 w-full items-center justify-between px-15">
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
