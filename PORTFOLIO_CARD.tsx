// Add this to your portfolio's Featured Projects section on carriefarr.com
// This matches your existing project card style with gradient header and tech badges

<div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
  {/* Gradient Header */}
  <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />

  <div className="p-6">
    {/* Project Title */}
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
      Bricks Pizza Ordering System
    </h3>

    {/* Description */}
    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
      Full-featured restaurant ordering system with group orders, scheduled orders,
      real-time cart management, email/SMS notifications, and WCAG 2.1 accessibility.
      Built for local pizza restaurant with Square API integration ready.
    </p>

    {/* Key Features */}
    <ul className="text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
      <li>✓ Group ordering with split payments</li>
      <li>✓ Schedule orders up to 7 days ahead</li>
      <li>✓ Email receipts & SMS notifications</li>
      <li>✓ Order history, favorites & reorder</li>
      <li>✓ Fully accessible (keyboard nav, ARIA, screen readers)</li>
    </ul>

    {/* Tech Stack Badges */}
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
        React
      </span>
      <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
        TypeScript
      </span>
      <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
        JavaScript
      </span>
      <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
        Firebase
      </span>
      <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
        Tailwind CSS
      </span>
      <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
        Vite
      </span>
      <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
        Square API
      </span>
    </div>

    {/* Action Buttons */}
    <div className="flex gap-3">
      <a
        href="https://bricks-pizza.web.app/demo/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Live Demo
      </a>

      <a
        href="https://github.com/clfarr/bricks-pizza-ordering-system"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
        </svg>
        GitHub
      </a>
    </div>
  </div>
</div>


{/* ============================================ */}
{/* ALTERNATIVE: If you prefer JSON/Data format */}
{/* ============================================ */}

// Or add this object to your projects data array:
const bricksPizzaProject = {
  title: "Bricks Pizza Ordering System",
  description: "Full-featured restaurant ordering system with group orders, scheduled orders, real-time cart management, email/SMS notifications, and WCAG 2.1 accessibility. Built for local pizza restaurant with Square API integration ready.",
  features: [
    "Group ordering with split payments",
    "Schedule orders up to 7 days ahead",
    "Email receipts & SMS notifications",
    "Order history, favorites & reorder",
    "Fully accessible (keyboard nav, ARIA, screen readers)"
  ],
  techStack: [
    { name: "React", color: "blue" },
    { name: "TypeScript", color: "blue" },
    { name: "JavaScript", color: "yellow" },
    { name: "Firebase", color: "orange" },
    { name: "Tailwind CSS", color: "cyan" },
    { name: "Vite", color: "green" },
    { name: "Square API", color: "purple" }
  ],
  liveUrl: "https://bricks-pizza.web.app/demo/",
  githubUrl: "https://github.com/clfarr/bricks-pizza-ordering-system",
  gradient: "from-orange-500 via-red-500 to-pink-500"
}
