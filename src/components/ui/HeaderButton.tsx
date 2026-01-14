import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type HeaderButtonProps = Omit<ComponentProps<typeof Link>, "className" | "children"> & {
  children: ReactNode;
};

export function HeaderButton({ children, ...props }: HeaderButtonProps) {
  const className =
    "font-sans inline-flex h-9 items-center justify-center rounded-full px-4 text-lg font-bold text-black transition-colors hover:text-gray-700";

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
}
