import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Job Tracker
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Track your job applications in one place.
      </p>
    </div>
  )
}
