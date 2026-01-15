import { Card } from "@/components/ui/Card";
import { LearnMoreButton } from "@/components/ui/LearnMoreButton";
import { BottomSection } from "@/components/sections/BottomSection";
import { DividerSection } from "@/components/sections/DividerSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="flex w-full flex-col items-center gap-12 md:gap-20">

        <Reveal className="w-full mt-10 md:mt-20" delayMs={100}>
          {/* Hero Section */}
          <div className="relative flex w-full justify-center overflow-hidden">
            <div className="relative w-full min-h-105 sm:min-h-128 lg:w-300 lg:h-125">
              <img
                src="/home/images/HeroBackground.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none lg:object-contain"
              />
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-y-6 px-4 sm:px-6 lg:absolute lg:inset-0 lg:items-end lg:justify-between lg:px-5 lg:py-15">
                <div className="shrink-0 aspect-square rounded-full bg-white size-[clamp(44px,9vw,80px)]" />
                <div className="w-full max-w-xl text-center lg:text-right flex flex-col gap-y-2">
                  <h1 className="font-sans text-[clamp(22px,4.2vw,48px)] lg:text-3xl font-semibold leading-[1.1] text-white">
                    IT IS DIFFICULT ENOUGH TO LOSE A HOME TO FORECLOSURE.
                  </h1>
                  <p className="font-sans text-2xl font-light tracking-tight leading-[1.15] text-white">
                    You should not also lose your home equity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="w-full" delayMs={200}>
          {/* Banner Section */}
          <div className="relative w-full overflow-hidden bg-[#143B2E] py-10 lg:h-70 lg:py-0">
            <div className="relative z-2 left-0 top-0 w-full px-4 sm:px-6 lg:px-35 flex flex-col gap-8 lg:h-full lg:flex-row lg:items-center lg:py-10">
              <div className="flex flex-col gap-y-4 w-full lg:max-w-2xl ">
                <h2 className="font-merriweather text-2xl sm:text-1xl lg:text-2xl font-semibold text-white">ESQUIRE ASSET RECOVERY, LLC</h2>
                <p className="font-sans text-base sm:text-md lg:text-lg font-light text-white max-w-3xl">
                  The nation's most trusted and experienced attorney owned firm that specializes in helping people 
                  recover money legally owed to them after a foreclosure. Our team of attorneys and investigators 
                  specialize in cases just like yours. We have helped many others in your situation reclaim money 
                  they didn't even know they were owed.
                </p>
              </div>
              <div className="flex-1 self-start lg:self-end flex justify-start lg:justify-end">
                <LearnMoreButton href="/"></LearnMoreButton>
              </div>
            </div>
            <img src="/home/images/BannerLogo.png"
              alt="Banner Logo"
              className="hidden sm:block absolute z-0 inset-y-0 right-0 h-full w-auto object-contain object-center opacity-60 pointer-events-none"
            />
          </div>
        </Reveal>

        <Reveal className="w-full" delayMs={120}>
          <VideoSection
            className="px-4 sm:px-6 lg:px-35"
            youtubeUrl="https://youtu.be/37Ri4yn9Fos"
          />
        </Reveal>

        <Reveal className="w-full" delayMs={120}>
          {/* Cards Section */}
          <div className="w-full px-4 sm:px-6">
            <div className="mx-auto flex w-full max-w-400 flex-col items-center gap-3">
            {/* Top Cards */}
            <div className="group/row flex w-full flex-col items-stretch gap-3 lg:flex-row lg:flex-wrap lg:items-start lg:justify-center">
              <Card
                title="Understanding Surplus Funds"
                variant="green"
                size="sm"
                href="/"
                learnMoreLabel="Learn more"
                imageSrc="/home/images/CardImage1.png"
                imageAlt=""
                className="lg:group-hover/row:w-80 lg:hover:w-120"
                shortDescription="When a property is sold at a foreclosure auction, it may sell for more than the debt owed."
              >
                When a property is sold at a foreclosure auction, it may sell for more than the debt owed.
                That extra amount legally belongs to the former homeowner. Yet many people never 
                receive it due to confusing procedures, strict deadlines, or lack of proper notice.
              </Card>

              <Card
                title="Our Legal-Grade Recovery Process"
                variant="green"
                size="sm"
                href="/"
                learnMoreLabel="Learn more"
                imageSrc="/home/images/CardImage2.png"
                imagePositionClass="object-top"
                imageAlt=""
                className="lg:group-hover/row:w-80 lg:hover:w-120"
                shortDescription="Recovering surplus funds requires accuracy: petitions, affidavits, supporting documents, and
                court filings must be completed correctly and on time."
              >
                Recovering surplus funds requires accuracy: petitions, affidavits, supporting documents, and
                court filings must be completed correctly and on time. A single mistake can delay or jeopardize
                recovery. Our specialists handle the heavy lifting with the care and rigor you expect from a
                legal team.
              </Card>

              <Card
                title="Why Clients Trust Esquire"
                variant="gold"
                size="lg"
                href="/"
                learnMoreLabel="Learn more"
                imageSrc="/home/images/CardImage3.png"
                imageAlt=""
                imagePositionClass="object-[90%_70%]"
                className="lg:group-hover/row:w-80 lg:hover:w-120"
                shortDescription="Trust is earned through consistency. Our attorney-owned team combines clear communication with
                meticulous legal work."
              >
                Trust is earned through consistency. Our attorney-owned team combines clear communication with
                meticulous legal work, handling every filing on time and keeping you informed at each step. We
                protect your claim, reduce delays, and pursue the maximum recovery you’re owed.
              </Card>
            </div>

            {/* Bottom Cards */}
            <div className="group/row flex w-full flex-col items-stretch gap-3 lg:flex-row lg:flex-wrap lg:items-start lg:justify-center">
              <Card
                title="Your Dedicated Advocate"
                variant="green"
                size="sm"
                href="/"
                learnMoreLabel="Learn more"
                imageSrc="/home/images/CardImage4.png"
                imagePositionClass="object-[30%_20%]"
                imageAlt=""
                className="lg:group-hover/row:w-80 lg:hover:w-120"
                shortDescription="Most individuals never claim the funds owed to them—not because they don’t qualify, but
                because no one guides them through the process."
              >
                Most individuals never claim the funds owed to them—not because they don’t qualify, but
                because no one guides them through the process. With Esquire, you gain a dedicated partner who
                supports you from start to finish.
              </Card>

              <Card
                title="Clear, Legal-Based Guidance"
                variant="gold"
                size="lg"
                href="/"
                learnMoreLabel="Learn more"
                imageSrc="/home/images/CardImage5.png"
                imageAlt=""
                className="lg:group-hover/row:w-80 lg:hover:w-120"
                shortDescription="Surplus-fund recovery can feel intimidating, especially when dealing with county records,
                court procedures, or unfamiliar terminology."
              >
                Surplus-fund recovery can feel intimidating, especially when dealing with county records,
                court procedures, or unfamiliar terminology. Our role is to remove that worry and do it all for you.
              </Card>

              <Card
                title="Proven Results With Compassion"
                variant="green"
                size="sm"
                href="/"
                learnMoreLabel="Learn more"
                imageSrc="/home/images/CardImage6.png"
                imageAlt=""
                className="lg:group-hover/row:w-80 lg:hover:w-120"
                shortDescription="Behind every recovery is a real person—a story, a family, and the hope for a fresh start."
              >
                Behind every recovery is a real person—a story, a family, and the hope for a fresh start. Our
                team approaches each case with empathy and respect while consistently delivering results. We
                move quickly, communicate clearly, and pursue your recovery as if it were our own. 
              </Card>
            </div>
          </div>
          </div>
        </Reveal>

        <Reveal className="w-full" delayMs={120}>
          <DividerSection
            title="Your house sold for more than what you owed"
            subtitle="that extra amount - known as excess proceeds - is legally yours"
          />
        </Reveal>

        <Reveal className="w-full" delayMs={120}>
          <div className="relative w-full overflow-x-clip">
            <div className="relative z-10 mb-16 sm:mb-25">
              <BottomSection requestHref="/" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
              <div className="relative mx-auto w-full max-w-322.25">
                <img
                  src="/home/images/woman.png"
                  alt=""
                  className="hidden lg:block absolute bottom-0 -right-5 sm:right-[clamp(-0px,-8vw,-50px)] h-105 sm:h-[clamp(520px,55vw,705px)] w-auto max-w-none"
                />
              </div>
            </div>

            <FooterSection year={2026} className="relative z-30" />
          </div>
        </Reveal>

      </div>
    </main>
  );
}
