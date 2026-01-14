import * as React from "react";

import { LearnMoreButton } from "@/components/ui/LearnMoreButton";

type CardVariant = "green" | "gold";

type CardSize = "sm" | "lg";

export type CardProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  learnMoreLabel?: React.ReactNode;
  variant?: CardVariant;
  size?: CardSize;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function Card({
  title,
  children,
  href,
  learnMoreLabel = "Learn more",
  variant = "green",
  size = "sm",
  imageSrc,
  imageAlt = "",
  className,
}: CardProps) {
  const isGold = variant === "gold";
  const hasImageSection = isGold && Boolean(imageSrc);

  const container = cx(
    "relative overflow-hidden rounded-[21.132px]",
    isGold ? "bg-[#D8B461]" : "bg-[#143B2E]",
    size === "lg" ? "w-[480px] h-[370px]" : "w-[350px] h-[370px]",
    className,
  );

  const titleClass = cx(
    "font-sans font-semibold uppercase text-[25.36px] leading-[1.015] tracking-[-0.04em] min-h-[55px]",
    isGold ? "text-[#143B2E]" : "text-[#D8B461]",
    size === "lg" ? "max-w-[430px]" : "max-w-[300px]",
  );

  const bodyClass = cx(
    "font-sans font-light text-[15.85px] leading-[1.35] text-justify",
    "text-white",
  );

  const learnMoreColor = isGold ? "white" : "gold";

  const footer = href ? (
    <div
      className={cx(
        "mt-auto flex w-full justify-end",
        hasImageSection ? "p-6.25" : undefined,
      )}
    >
      <LearnMoreButton href={href} variant="ghost" ghostColor={learnMoreColor}>
        {learnMoreLabel}
      </LearnMoreButton>
    </div>
  ) : null;

  return (
    <section className={container}>
      {hasImageSection ? (
        <div className="flex h-full flex-col">
          {/* Top text section (padded) */}
          <div className="px-6.25 pt-6.25">
            <div className="flex flex-col gap-5">
              <h3 className={titleClass}>{title}</h3>
              <div className={bodyClass}>{children}</div>
            </div>
          </div>

          {/* Bottom image section (full-bleed within the card) */}
          <div className="relative mt-auto h-37.5 w-full rounded-bl-[21.132px] rounded-br-[21.132px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover rounded-bl-[21.132px] rounded-br-[21.132px]"
            />

            {href ? (
              <div className="absolute inset-0 flex items-end justify-end p-6.25">
                <LearnMoreButton href={href} variant="ghost" ghostColor="white">
                  {learnMoreLabel}
                </LearnMoreButton>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col p-6.25">
          <div className="flex flex-col gap-5">
            <h3 className={titleClass}>{title}</h3>
            <div className={bodyClass}>{children}</div>
          </div>

          {footer}
        </div>
      )}
    </section>
  );
}
