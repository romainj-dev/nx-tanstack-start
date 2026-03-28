import { Link } from '@tanstack/react-router'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/jobs', label: 'Jobs' },
] as const

export function Nav() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-8 px-6">
        <Link to="/" className="text-lg font-semibold text-gray-900">
          Job Tracker
        </Link>

        <div className="flex gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: 'bg-gray-100 text-gray-900' }}
              inactiveProps={{ className: 'text-gray-500 hover:text-gray-700 hover:bg-gray-50' }}
              activeOptions={{ exact: link.to === '/' }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
