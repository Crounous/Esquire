import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type LearnMoreVariant = "filled" | "ghost";
type GhostColor = "white" | "gold";

type LearnMoreButtonProps = Omit<
  ComponentProps<typeof Link>,
  "className" | "children"
> & {
  className?: string;
  children?: ReactNode;
  variant?: LearnMoreVariant;
  /** Only applies when variant="ghost" */
  ghostColor?: GhostColor;
  iconSizeClass?: string;
  iconOffsetClass?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(className)}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1.25011 24.7487L17.7493 8.24959"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25004 8.24958L17.7492 8.24958L17.7492 24.7487"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LearnMoreButton({
  className,
  children = "Learn More",
  variant = "filled",
  ghostColor = "white",
  iconSizeClass = "h-4 w-4",
  iconOffsetClass = "-translate-y-0.5",
  ...props
}: LearnMoreButtonProps) {
  const base =
    "inline-flex items-center gap-1 font-sans text-[15.35px] font-semibold tracking-[-0.04em] transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const filled =
    "rounded-full bg-white px-5 py-2.5 text-black hover:bg-white/90";

  const ghost = cx(
    "rounded-full bg-transparent px-1 py-1 hover:opacity-80",
    ghostColor === "white" && "text-white",
    ghostColor === "gold" && "text-[#D8B461]",
  );

  return (
    <Link
      {...props}
      className={cx(base, variant === "filled" ? filled : ghost, className)}
    >
      <ArrowIcon className={`${iconSizeClass} ${iconOffsetClass}`} />
      <span>{children}</span>
    </Link>
  );
}
