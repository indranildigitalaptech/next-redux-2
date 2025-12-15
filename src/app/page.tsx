import Link from 'next/link';

export default function Home() {
  const demos = [
    {
      title: 'Counter',
      description: 'Basic Redux state management with actions and reducers',
      href: '/counter',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🔢',
    },
    {
      title: 'Redux Persist',
      description: 'User Preferences (Theme, Language) preserved across reloads',
      href: '/demo/persist-demo',
      gradient: 'from-green-500 to-teal-500',
      icon: '⚙️',
    },
    {
      title: 'Async API Fetching',
      description: 'Fetch users with createAsyncThunk - loading & error states',
      href: '/demo/users',
      gradient: 'from-orange-500 to-red-500',
      icon: '👥',
    },
    {
      title: 'RTK Query',
      description: 'Advanced data fetching with automatic caching and refetching',
      href: '/demo/posts',
      gradient: 'from-violet-500 to-purple-500',
      icon: '📝',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-6">
            Redux Toolkit Demos
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore different Redux Toolkit features with interactive demos.
            Each demo showcases a different aspect of state management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {demos.map((demo) => (
            <Link
              key={demo.href}
              href={demo.href}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

              <div className="relative">
                <div className="text-5xl mb-4">{demo.icon}</div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {demo.title}
                </h2>
                <p className="text-white/70">
                  {demo.description}
                </p>
                <div className="mt-4 flex items-center text-white/60 group-hover:text-white/90 transition-colors">
                  <span className="text-sm font-semibold">View Demo</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Features Implemented</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <strong className="text-white">Feature-based Architecture</strong>
                <p className="text-sm">Organized folder structure by features</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <strong className="text-white">TypeScript Support</strong>
                <p className="text-sm">Fully typed Redux with TypeScript</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <strong className="text-white">Redux Persist</strong>
                <p className="text-sm">LocalStorage state persistence</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <strong className="text-white">Modern UI Design</strong>
                <p className="text-sm">Glassmorphism with gradients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
