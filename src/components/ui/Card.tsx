import * as React from "react";

import { LearnMoreButton } from "@/components/ui/LearnMoreButton";

type CardVariant = "green" | "gold";

type CardSize = "sm" | "lg";

export type CardProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  shortDescription?: React.ReactNode;
  href?: string;
  learnMoreLabel?: React.ReactNode;
  variant?: CardVariant;
  size?: CardSize;
  imageSrc?: string;
  imageAlt?: string;
  imagePositionClass?: string;
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function Card({
  title,
  children,
  shortDescription,
  href,
  learnMoreLabel = "Learn more",
  variant = "green",
  size = "sm",
  imageSrc,
  imageAlt = "",
  imagePositionClass = "object-center",
  className,
}: CardProps) {
  const hasHoverImage = Boolean(imageSrc);

  const container = cx(
    "group/card relative flex flex-col overflow-hidden rounded-[21.132px]",
    "bg-[#143B2E] hover:bg-[#D8B461]",
    "transition-[width,background-color] duration-300 ease-out",
    "w-full min-h-[320px] lg:w-[360px] lg:h-[360px]",
    className,
  );

  const titleClass = cx(
    "font-sans font-semibold uppercase text-[20px] sm:text-[25.36px] leading-[1.015] tracking-[-0.04em] min-h-[44px] sm:min-h-[55px]",
    "text-[#D8B461] group-hover/card:text-[#143B2E]",
    "w-full lg:w-75 lg:max-w-75",
  );

  const bodyClass = cx(
    "font-sans font-light text-[14px] sm:text-[15.85px] leading-[1.35] text-justify",
    "text-white",
  );

  const learnMoreColor = "gold";

  const footer = href ? (
    <LearnMoreButton
      href={href}
      variant="ghost"
      ghostColor={learnMoreColor}
      className={cx(
        hasHoverImage ? "group-hover/card:text-white" : undefined,
      )}
    >
      {learnMoreLabel}
    </LearnMoreButton>
  ) : null;

  return (
    <section className={container}>
      {hasHoverImage ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[40%] opacity-0 transition-opacity duration-300 ease-out group-hover/card:opacity-100">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={cx("h-full w-full object-cover", imagePositionClass)}
          />
        </div>
      ) : null}

      <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-6.25">
        <div className="flex flex-col gap-5">
          <h3 className={titleClass}>{title}</h3>
          <div
            className={cx(
              bodyClass,
              "transition-[padding] duration-300 ease-out",
              hasHoverImage ? "group-hover/card:pb-32" : undefined,
            )}
          >
            {shortDescription ? (
              <>
                <div className="block group-hover/card:hidden">{shortDescription}</div>
                <div className="hidden group-hover/card:block">{children}</div>
              </>
            ) : (
              children
            )}
          </div>
        </div>

        {!hasHoverImage && footer ? (
          <div className="mt-auto flex w-full justify-end">
            {footer}
          </div>
        ) : null}
      </div>

      {hasHoverImage && footer ? (
        <div className="absolute bottom-4 right-4 z-30 pointer-events-auto">
          {footer}
        </div>
      ) : null}
    </section>
  );
}
