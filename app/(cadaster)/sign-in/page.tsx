'use client'

import { Button, Input } from '@/components'
import Link from 'next/link'

const SignIn = () => {

  return (
    <form role="form" className="flex flex-col items-center gap-5 mt-28 w-80 m-[auto]">
      <h1 aria-label="form title" role="heading" className="text-center text-2xl font-mono">Sign in to InstaPets</h1>
      <Input id='email' type='email' placeholder='Email' />
      <Input id="password" type="password" placeholder="Password"/>
      <Link href="/forgot-password" className='ml-[auto] text-[#5F5F5F]'>Forgot your password?</Link>
      <Button>Log in</Button>
      <div>
        <div className='w-80'>-</div>
      </div>
    </form>
  )
}


export default SignIn

