type DeviceFrameProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  priorityGlow?: 'blue' | 'violet' | 'gold';
  src: string;
};

const glowMap: Record<NonNullable<DeviceFrameProps['priorityGlow']>, string> = {
  blue: 'bg-blueIce/18',
  gold: 'bg-gold/14',
  violet: 'bg-fuchsia-400/12',
};

export function DeviceFrame({
  alt,
  className = '',
  imageClassName = '',
  priorityGlow = 'blue',
  src,
}: DeviceFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute inset-x-[14%] top-[7%] h-[22%] rounded-[999px] ${glowMap[priorityGlow]} blur-3xl`}
      />
      <div className="relative rounded-[3rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.3),rgba(255,255,255,0.04)_18%,rgba(255,255,255,0.02)_44%,rgba(200,169,107,0.2)_100%)] p-[2px] shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
        <div className="rounded-[2.95rem] border border-white/10 bg-[linear-gradient(180deg,#0f1016,#07070a_68%)] px-[10px] pb-[10px] pt-[12px]">
          <div className="relative overflow-hidden rounded-[2.45rem] border border-white/10 bg-black">
            <div className="absolute left-1/2 top-0 z-20 h-[28px] w-[42%] -translate-x-1/2 rounded-b-[1.15rem] bg-black">
              <div className="absolute left-1/2 top-[9px] h-[6px] w-[34%] -translate-x-1/2 rounded-full bg-white/10" />
            </div>
            <div className="relative aspect-[9/19.5]">
              <img
                src={src}
                alt={alt}
                className={`h-full w-full object-cover object-top ${imageClassName}`}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_18%,transparent_72%,rgba(0,0,0,0.28))]" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[18%] bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent_72%)] mix-blend-screen opacity-55" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
