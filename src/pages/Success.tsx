export default function Success() {
  return (
    <section className="text-center pt-8 sm:pt-10">
      <div className="tick-wrap mb-4">
        {/* Per latest instruction: use header.png as the success tick icon */}
        <img src="/Images/header.png" alt="Success" className="h-14 w-14 object-contain tick-pop-in" />
      </div>

      {/* Headline block: exact 725x172 container on desktop */}
      <div className="mx-auto w-full max-w-[725px] h-[172px] flex items-center justify-center">
        <h1
          className="font-semibold text-[clamp(34px,10vw,72px)] leading-[120%] tracking-[-0.04em] text-slate-900 m-0"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          You're in! <span style={{ color: 'var(--success)' }}>Waitlist confirmed.</span>
        </h1>
      </div>
      <p className="mt-2 text-[14px] sm:text-[16px] text-slate-500 leading-[140%] max-w-[560px] mx-auto">
        Thank you for joining, you will be the first to know when we are ready!
      </p>
    </section>
  )
}
