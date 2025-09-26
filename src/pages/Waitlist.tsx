import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Waitlist() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    navigate('/success', { replace: true })
  }

  return (
    <section className="pt-8 sm:pt-10">
      {/* Centered vertical-flow container: 20% smaller than original (725px -> 580px), 40px gap */}
      <div className="mx-auto w-full max-w-[580px] flex flex-col items-center text-center gap-10">
        {/* Headline reduced by 20% (72px -> ~58px, 86px -> ~69px height) */}
        <div className="w-full h-[69px] flex items-center justify-center">
          <h1
            className="font-semibold text-[clamp(30px,9vw,58px)] leading-[120%] tracking-[-0.04em] text-gray-900 m-0"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
          >
            Be First in Line.
          </h1>
        </div>

        {/* Subtext block: fixed width at desktop, responsive downwards */}
        <div className="w-full max-w-[516px] h-[56px]">
          <p
            className="text-[14px] leading-[120%] font-normal tracking-[0] text-slate-500 m-0"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
          >
            Get ahead of the crowd, explore<br/>
            Suilens first and enjoy early access<br/>
            and exclusive perks.
          </p>
        </div>

        {/* Input + CTA pill: fixed desktop size, responsive downwards */}
        <form onSubmit={handleSubmit} className="w-full flex items-center justify-center">
          <div className="relative flex w-full max-w-[445px] h-[82px] rounded-[100px] border border-[#D0D5DD] bg-white items-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 sm:px-5 text-center sm:text-left text-[14px] leading-[120%] font-normal outline-none placeholder:text-[#667185]"
              style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
            />
            {/* CTA button: 140x74, radius 100, brand bg #101928, positioned visually at right */}
            <button
              type="submit"
              className="shrink-0 w-[112px] h-[59px] rounded-[100px] text-white text-[14px] font-semibold mr-[10px]"
              style={{ backgroundColor: '#101928' }}
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
