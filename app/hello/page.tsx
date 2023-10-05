import Link from 'next/link';

export default function Hello() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/">Home</Link>

      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="text-2xl font-bold">This is a page in Next.js</p>
    </main>
  )
}