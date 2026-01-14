import type { HTMLAttributes } from "react";

type FooterSectionProps = HTMLAttributes<HTMLElement> & {
  year?: number;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function FooterSection({
  className,
  year = 2026,
  ...props
}: FooterSectionProps) {
  return (
    <footer {...props} className={cx("relative w-full shrink-0", className)}>
      <div className="relative z-20 h-23 w-full bg-[#D8B461]" />
      <p className="absolute inset-x-0 top-8.5 z-30 text-center font-sans text-[24px] font-medium leading-[0.75855] tracking-[-0.96px] text-white">
        © {year} Esquire Asset Recovery, LLC. All rights reserved.
      </p>
    </footer>
  );
}
