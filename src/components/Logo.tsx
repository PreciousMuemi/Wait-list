export default function Logo() {
  return (
    <div className="select-none">
      {/* Per latest instruction: use success.png as the header image on both pages */}
      <img
        src="/Images/success.png"
        alt="Suilens"
        className="h-6 sm:h-7 object-contain"
        loading="eager"
        decoding="async"
      />
    </div>
  )
}
