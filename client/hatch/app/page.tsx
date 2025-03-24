import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen w-full text-gray-900 flex flex-col">
      
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <div className="flex items-center">
          <Image src="/logo.png" alt="App Logo" width={100} height={80} />
        </div>
        <div className="space-x-4">
          <Link href="/login" className="text-sm font-medium hover:underline">
            Login
          </Link>
          <Link href="/signup" className="text-sm font-medium hover:underline">
            Sign Up
          </Link>
        </div>
      </header>
      <section className="flex-grow flex items-center justify-center text-center">
        <h1 className="text-2xl md:text-3xl font-light max-w-xl px-4">
          Collaborate on ideas. Build what matters, together.
        </h1>
      </section>
    </main>
  );
}