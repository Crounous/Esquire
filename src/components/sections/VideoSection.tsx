import type { HTMLAttributes } from "react";

type VideoSectionProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  subtitle?: string;
    src?: string;
  poster?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function VideoSection({
  className,
  title = "We Fight Home Equity Theft",
  subtitle = "Your Fight is Our Fight",
  src,
  poster,
  ...props
}: VideoSectionProps) {
  return (
    <section
      {...props}
      className={cx("flex w-full flex-col items-center gap-y-10", className)}
    >
      <div className="w-full flex flex-col gap-y-1 tracking-tight items-center">
        <h2 className="font-merriweather text-6xl font-bold text-center">{title}</h2>
        <h2 className="font-merriweather text-6xl font-bold text-center">{subtitle}</h2>
      </div>

      <div className="w-full max-w-7xl">
        {src ? (
          <video
            className="w-full aspect-video rounded-4xl overflow-hidden bg-black"
            src={src}
            poster={poster}
            controls
            preload="metadata"
            playsInline
          />
        ) : (
          <div className="w-full aspect-video bg-black rounded-4xl overflow-hidden grid place-items-center">
            <p className="font-sans text-white/80 text-base">
              Add a video file and pass its path (e.g. <span className="font-mono">/home/videos/intro.mp4</span>).
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
