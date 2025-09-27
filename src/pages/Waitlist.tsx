import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Waitlist() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')


  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const apiUrl = import.meta.env.VITE_API_URL || ''
      const res = await fetch(`${apiUrl}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (res.status === 201 || res.status === 409) {
        navigate('/success', { replace: true })
      } else {
        const data = await res.json()
        setError(data.message || 'Failed to join waitlist')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
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
          </p>
        </div>

        {/* Input + CTA pill: fixed desktop size, responsive downwards */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-2">
          <div className="relative flex w-full max-w-[445px] h-[60px] rounded-[100px] border border-[#D0D5DD] bg-white items-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 sm:px-5 text-center sm:text-left text-[14px] leading-[120%] font-normal outline-none placeholder:text-[#667185]"
              style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
              disabled={loading}
            />
            <button
              type="submit"
              className="shrink-0 w-[100px] h-[40px] rounded-[100px] text-white text-[14px] font-semibold mr-[10px]"
              style={{ backgroundColor: '#101928' }}
              disabled={loading}
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
          {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
        </form>
      </div>
    </section>
  )
}
