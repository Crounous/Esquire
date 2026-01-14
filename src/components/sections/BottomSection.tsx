import Link from "next/link";
import type { HTMLAttributes } from "react";

type BottomSectionProps = HTMLAttributes<HTMLElement> & {
  requestHref?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}
const bottomCardImage =
  "/home/images/BottomCardImage.png";
const iconWalletCheck =
  "/home/icons/wallet-check.svg";
const iconFavoriteChart =
  "/home/icons/favorite-chart.svg";
const iconMoneyReceive =
  "/home/icons/money-receive.svg";
const dividerLine =
  "/home/icons/Line.svg";

function InfoCard({
  iconSrc,
  title,
  description,
}: {
  iconSrc: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex w-full max-w-none flex-col items-center gap-3.75 rounded-[40px] border-2 border-transparent bg-white p-5 lg:h-66.25 lg:w-75 lg:max-w-none lg:p-6.25 transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out hover:scale-[1.03] hover:border-white hover:bg-[#143B2E] hover:shadow-[0_0_22px_rgba(255,255,255,0.28)]">
      <img
        src={iconSrc}
        alt=""
        className="h-16.25 w-16.25 transition-[filter] duration-200 ease-out group-hover:brightness-0 group-hover:invert"
      />
      <p className="w-full font-sans text-[18px] sm:text-[22px] font-medium leading-[1.462] tracking-[-0.88px] text-center text-[#143B2E] transition-colors duration-200 ease-out group-hover:text-white">
        {title}
      </p>
      <p className="w-full font-sans text-[16px] sm:text-[20px] font-normal leading-[1.1] tracking-[-0.8px] text-center text-[#143B2E] transition-colors duration-200 ease-out group-hover:text-white">
        {description}
      </p>
      <div className="relative mt-auto h-0 w-[41.5px]">
        <img
          src={dividerLine}
          alt=""
          className="absolute inset-0 h-0.75 w-full transition-[filter] duration-200 ease-out group-hover:brightness-0 group-hover:invert"
        />
      </div>
    </div>
  );
}

export function BottomSection({
  className,
  requestHref = "/",
  ...props
}: BottomSectionProps) {
  return (
    <section {...props} className={cx("relative w-full", className)}>
      {/* Main card */}
      <div className="relative mx-auto w-full max-w-322.25 rounded-[40px] px-0 pt-0">
        <div className="relative w-full overflow-hidden rounded-[40px] lg:h-212.25">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img
              src={bottomCardImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[rgba(20,59,46,0)] from-[-20.794%] to-[#143B2E] to-[84.041%]" />
          </div>

          <div className="relative z-10 flex flex-col px-6 sm:px-12 lg:px-32.5 py-10 lg:py-12.5 lg:h-full">
            {/* Top section */}
            <div className="flex flex-col items-center gap-12.5">
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-[1.015] tracking-[-1.92px] text-center text-white">
                <span className="capitalize">Maximize Your Money: </span>
                <br />
                <span className="capitalize">Smart Tips For Surplus Funds</span>
              </h2>

              <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:flex-nowrap lg:gap-15.25">
                <InfoCard
                  iconSrc={iconWalletCheck}
                  title="Pay Off Debts"
                  description="Reduce interest costs and gain better control over your finances."
                />
                <InfoCard
                  iconSrc={iconFavoriteChart}
                  title="Invest For Growth"
                  description="Grow your money steadily and build long-term financial security."
                />
                <InfoCard
                  iconSrc={iconMoneyReceive}
                  title="Save For Rainy Days"
                  description="Set aside funds to handle emergencies with confidence."
                />
              </div>
            </div>

            {/* Bottom section */}
            <div className="mt-12 lg:mt-auto flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
              <div className="flex w-full max-w-none lg:max-w-187 flex-col gap-8.75">
                <div className="text-white">
                  <h3 className="font-sans text-3xl sm:text-5xl lg:text-[65.323px] font-semibold leading-[1.08] tracking-[-2.6129px] capitalize">
                    Submit a Request to Claim a Surplus Refund
                  </h3>
                  <p className="mt-4 font-sans text-base sm:text-[20px] font-normal leading-[1.24] tracking-[-0.8px]">
                    Once submitted, our team will review your request and reach out if additional information
                    is needed.
                  </p>
                </div>

                <Link
                  href={requestHref}
                  className="inline-flex h-14 w-full lg:w-50 items-center justify-center rounded-[70.813px] border-2 border-transparent bg-white px-5.25 py-4 font-sans text-[19.5px] font-bold leading-[0.7024] tracking-[-0.78px] text-[#143B2E] uppercase transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out hover:bg-[#143B2E] hover:text-white hover:border-white"
                >
                  Request Here
                </Link>
              </div>
              <div className="hidden w-105 lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
