import { Outlet } from 'react-router-dom'
import Logo from './components/Logo'

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      {/* Top logo bar */}
      <header className="py-6">
        <div className="max-w-5xl mx-auto flex justify-center">
          <Logo />
        </div>
      </header>
      {/* Main content sits slightly below center to mimic the mockup composition */}
      <main className="flex-1 flex items-start justify-center px-6">
        <div className="w-full container-narrow mx-auto mt-10 sm:mt-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
