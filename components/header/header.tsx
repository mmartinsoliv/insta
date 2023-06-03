import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='bg-slate-900'>
      <nav className="flex items-center justify-around p-12">
        <Image
          src="/icon.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
        <Link href="/sign-in">
          Login / Criar
        </Link>
      </nav>
    </header>
  )
}
