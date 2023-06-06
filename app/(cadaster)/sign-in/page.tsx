'use client'

import { Button, Form, Input } from '@/components'
import Link from 'next/link'

const SignIn = () => {

  return (
    <Form>
      <h1 aria-label="form title" role="heading" className="text-center text-2xl font-mono">Sign in to InstaPets</h1>
      <Input id='email' name="email" type='email' placeholder='Email' />
      <Input id="password" name="password" type="password" placeholder="Password"/>
      <Link href="/forgot-password" className='ml-[auto] text-[#5F5F5F]'>Forgot your password?</Link>
      <Button>Log in</Button>
      <div>
        <div className='w-80'>-</div>
      </div>
    </Form>
  )
}


export default SignIn

