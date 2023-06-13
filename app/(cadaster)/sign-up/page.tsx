'use client'
import { useContext } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input } from '@/components'

import { schemaSignUp } from '@/utils/validation'

import useFetch from '@/hooks/useFetch';

import { USER_POST } from '@/api'

import { UserContext } from '@/context/userContext'

type FormData = {
  username: string
  email: string
  password: string
}

const SignIn = () => {
  const { control, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schemaSignUp)
  });

  const { userLogin } = useContext(UserContext);

  const { request } = useFetch()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { url, options } = USER_POST({
      username: data.username,
      email: data.email,
      password: data.password
    })

    const { response } = await request(url, options)

    if(response?.ok) userLogin(data.username, data.password)

  }

  const fields = watch(['username', 'email', 'password'])

  return (
    <>
      <h1 aria-label="form title" role="heading" className="text-center text-2xl font-mono mt-28 mb-8">Sign up to InstaPets</h1>
      <form role="form" className="flex flex-col items-center gap-5 w-80 m-[auto]" onSubmit={handleSubmit(onSubmit)}>
        <Controller name='username' control={control} render={({ field }) => <Input type="text" placeholder='username' {...field} />} />
        {errors.username && <p>{errors.username.message}</p>}
        <Controller name='email' control={control} render={({ field }) => <Input type="email" placeholder='email' {...field} />} />
        {errors.email && <p>{errors.email.message}</p>}
        <Controller name='password' control={control} render={({ field }) => <Input type="password" placeholder='password' {...field} />} />
        {errors.password && <p>{errors.password.message}</p>}
        <Button type='submit'>Sign up</Button>
      </form>
   </>
  )
}


export default SignIn
