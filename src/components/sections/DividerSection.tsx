import type { HTMLAttributes } from "react";

type DividerSectionProps = HTMLAttributes<HTMLElement> & {
  title: string;
  subtitle: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function DividerSection({ title, subtitle, className, ...props }: DividerSectionProps) {
  return (
    <section
      {...props}
      className={cx(
        "w-full bg-white text-center text-[#D8B461]",
        "flex flex-col items-center gap-1.75",
        className,
      )}
    >
      <div className="flex w-full items-center justify-center gap-4.75">
        <div className="h-[5.514px] w-[184.703px] bg-[#D8B461]" />
        <h2
          className={cx(
            "font-merriweather font-bold capitalize",
            "text-[49.622px] leading-[1.015] tracking-[-1.9849px]",
            "max-w-[683.676px]",
          )}
        >
          {title}
        </h2>
        <div className="h-[5.514px] w-[184.703px] bg-[#D8B461]" />
      </div>

      <p
        className={cx(
          "font-sans font-normal lowercase",
          "text-[27.568px] leading-[1.015] tracking-[-1.1027px]",
        )}
      >
        {subtitle}
      </p>
    </section>
  );
}
