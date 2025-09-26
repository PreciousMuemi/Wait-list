export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-slate-800 select-none">
      {/* Abstract eye glyph */}
      <svg width="30" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1C7 1 2.5 6 2 9c.5 3 5 8 12 8s11.5-5 12-8c-.5-3-5-8-12-8Z" fill="#0B1220"/>
        <circle cx="14" cy="9" r="4" fill="white"/>
        <circle cx="14" cy="9" r="2.2" fill="#0B1220"/>
      </svg>
      <span className="font-medium tracking-tight text-[14px] text-slate-700">Suilens</span>
    </div>
  )
}
