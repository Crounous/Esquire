import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type HeaderButtonProps = Omit<ComponentProps<typeof Link>, "className" | "children"> & {
  children: ReactNode;
};

export function HeaderButton({ children, ...props }: HeaderButtonProps) {
  const className =
    "group inline-flex h-9 items-center justify-center px-4 font-sans text-lg font-bold text-black";

  return (
    <Link {...props} className={className}>
      <span className="relative inline-block after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[3px] after:bg-[#2E5B3A] after:scale-x-0 after:origin-left after:transition after:duration-500 group-hover:after:scale-x-100">
        <span className="text-black">{children}</span>
        <span className="pointer-events-none absolute left-0 top-0 h-full w-0 overflow-hidden bg-gradient-to-tr from-[#2E5B3A] to-[#1F3E2A] text-transparent bg-clip-text transition-[width] duration-500 group-hover:w-full">
          <span className="whitespace-nowrap">{children}</span>
        </span>
      </span>
    </Link>
  );
}
