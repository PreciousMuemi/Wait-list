export default function Success() {
  return (
    <section className="text-center pt-8 sm:pt-10">
      <div className="tick-wrap mb-4">
        <svg width="54" height="54" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="tick-circle" cx="24" cy="24" r="22" fill="currentColor" style={{ color: 'rgba(34,197,94,0.12)' }} />
          <path className="tick-path" d="M16 24.5L22 30.5L32 18.5" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
