import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-white shadow sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-blue-700'>Mehrabian</h1>
        <nav className='space-x-6 text-sm font-medium text-gray-700'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/services'>Services</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
