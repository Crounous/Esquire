import { Card } from "@/components/ui/Card";
import { LearnMoreButton } from "@/components/ui/LearnMoreButton";
import { BottomSection } from "@/components/sections/BottomSection";
import { DividerSection } from "@/components/sections/DividerSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="flex flex-col items-center w-full gap-20">

        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center w-full px-35 mt-20 gap-20">
        <div className="flex flex-col w-full min-h-128 gap-y-40 items-end justify-center bg-contain bg-center bg-no-repeat md:px-35" 
        style={{backgroundImage: "url('/home/images/HeroBackground.png')"}} >
          <div className="rounded-full bg-white h-20 w-20"> </div>
          <div className="ml-auto w-full max-w-4xl text-right flex flex-col gap-y-2 pb-10">
          <h1 className="font-sans text-5xl font-semibold text-white">IT IS DIFFICULT ENOUGH TO LOSE A HOME TO FORECLOSURE.</h1>
          <p className="font-sans text-4xl font-light tracking-tight text-white">You should not also lose your home equity</p>
        </div>
        </div>
        </div>

        {/* Banner Section */}
        <div className="relative w-full h-90 overflow-hidden bg-[#143B2E]">
          <div className="relative z-2 left-0 top-0 h-full w-full px-35 flex items-center p-10">
            <div className="flex flex-col gap-y-4">
              <h2 className="font-merriweather text-4xl font-semibold text-white">ESQUIRE ASSET RECOVERY, LLC</h2>
              <p className="font-sans text-xl font-light text-white max-w-3xl">
                The nation's most trusted and experienced attorney owned firm that specializes in helping people 
                recover money legally owed to them after a foreclosure. Our team of attorneys and investigators 
                specialize in cases just like yours. We have helped many others in your situation reclaim money 
                they didn't even know they were owed.
              </p>
            </div>
            <div className="flex-1 self-end flex justify-end">
              <LearnMoreButton href="/"></LearnMoreButton>
            </div>
          </div>
          <img src="/home/images/BannerLogo.png"
            alt="Banner Logo"
            className="absolute z-0 inset-y-0 right-0 h-full w-auto object-contain object-center opacity-60 pointer-events-none"
          />
        </div>

        {/* Video Section */}
        <div className="flex flex-col items-center w-full gap-y-10 px-35">
          <div className="w-full flex flex-col gap-y-1 tracking-tight items-center">
          <h2 className="font-merriweather text-6xl font-bold text-center">We Fight Home Equity Theft</h2>
          <h2 className="font-merriweather text-6xl font-bold text-center">Your Fight is Our Fight</h2>
          </div>
          <div className="w-full max-w-7xl aspect-video bg-black rounded-4xl overflow-hidden"> </div>
        </div>

        {/* Cards Section */}
        <div className="w-full px-6">
          <div className="mx-auto flex w-full max-w-400 flex-col items-center gap-6.25">
            {/* Top Cards */}
            <div className="flex w-full flex-wrap items-start justify-center gap-6.25">
              <Card
                title="Understanding Surplus Funds"
                variant="green"
                size="sm"
                href="/"
                learnMoreLabel="Learn more"
              >
                When a property is sold at a foreclosure auction, it may sell for more than the debt owed.
                That extra amount—known as surplus funds or overages—legally belongs to the former
                homeowner. Yet many people never receive it due to confusing procedures, strict deadlines, or
                lack of proper notice.
              </Card>

              <Card
                title="Our Legal-Grade Recovery Process"
                variant="green"
                size="sm"
                href="/"
                learnMoreLabel="Learn more"
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
                imageSrc="/home/images/CardImage1.png"
                imageAlt=""
              >
                Recovering surplus funds requires accuracy: petitions, affidavits, supporting documents, and
                court filings must be completed correctly and on time. A single mistake can delay or jeopardize
                recovery.
              </Card>
            </div>

            {/* Bottom Cards */}
            <div className="flex w-full flex-wrap items-start justify-center gap-6.25">
              <Card
                title="Your Dedicated Advocate"
                variant="green"
                size="sm"
                href="/"
                learnMoreLabel="Learn more"
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
                imageSrc="/home/images/CardImage2.png"
                imageAlt=""
              >
                Surplus-fund recovery can feel intimidating, especially when dealing with county records,
                court procedures, or unfamiliar terminology. Our role is to remove that worry.
              </Card>

              <Card
                title="Proven Results With Compassion"
                variant="green"
                size="sm"
                href="/"
                learnMoreLabel="Learn more"
              >
                Behind every recovery is a real person—a story, a family, and the hope for a fresh start. Our
                team approaches each case with empathy and respect while consistently delivering results. We
                move quickly, communicate clearly, and pursue your recovery as if it were our own. When your
                funds are released, our goal is for you to feel not only relieved, but empowered.
              </Card>
            </div>
          </div>
        </div>

        <DividerSection
          title="Your house sold for more than what you owed"
          subtitle="that extra amount - known as excess proceeds - is legally yours"
        />

        <div className="relative w-full overflow-x-clip">
          <div className="relative z-10 mb-25">
            <BottomSection requestHref="/" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
            <div className="relative mx-auto w-full max-w-322.25">
              <img
                src="/home/images/woman.png"
                alt=""
                className="absolute bottom-0 right-[clamp(-80px,-8vw,-50px)] h-[clamp(520px,55vw,705px)] w-auto max-w-none"
              />
            </div>
          </div>

          <FooterSection year={2026} className="relative z-30" />
        </div>

      </div>
    </main>
  );
}
