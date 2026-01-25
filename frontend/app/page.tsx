import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl">
          Momentum
        </h1>
        <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
          Velocity aimed in the right direction. <br/>
          <span className="text-gray-500 text-sm">A production-ready monorepo template.</span>
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-2 hover:bg-gray-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 font-semibold"
            href="#"
          >
            Get Started
          </a>
          <a
            className="rounded-full border border-solid border-white/20 transition-colors flex items-center justify-center hover:bg-white/10 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#"
          >
            Documentation
          </a>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-500 text-sm">
        <p>© 2024 Momentum. All rights reserved.</p>
      </footer>
    </div>
  );
}
