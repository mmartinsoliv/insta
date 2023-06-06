'use client'
import { FormEvent, useState } from 'react'
import { Button, Form, Input } from '@/components'
import useForm from '@/hooks/useForm'
import useFetch from '@/hooks/useForm'

type FormData = {
  username: string
  email: string
  password: string
}

const SignIn = () => {

  const [user, setUser] = useState<FormData>({
    username: '',
    email: '',
    password: ''
  })

  const { loading, error, request } = useFetch()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form submitted!', user);
    const data = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(user)
    })

    const response = await data.json()

    console.log('resposta', response)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target
     setUser((prevValues) => ({
      ...prevValues,
      [name]: value
     }))
  }


  const inputProps = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      value: user.username,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'E-mail',
      value: user.email,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      value: user.password,
    },
  ];

  return (
    <>
      <h1 aria-label="form title" role="heading" className="text-center text-2xl font-mono mt-28 mb-8">Sign up to InstaPets</h1>
      <form role="form" className="flex flex-col items-center gap-5 w-80 m-[auto]" onSubmit={handleSubmit}>
        {inputProps.map(input => (
          <Input key={input.name} onChange={handleInputChange}  {...input} />
        ))}
        <Button>Sign up</Button>
      </form>
   </>
  )
}


export default SignIn
