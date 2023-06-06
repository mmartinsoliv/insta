import { Header } from '@/components'

import { PhotoTypes } from '@/types/photos'
import Image from 'next/image'

async function getData() {
  const data = await fetch('https://dogsapi.origamid.dev/json/api/photo')
  return data.json()
}

export default async function Home() {
  const data: PhotoTypes[] = await getData()

  console.log(data)

  return (
    <>
    <Header />
    <main className="flex min-h-screen bg-white">
      <section className='mt-8 px-4 m-[auto]'>
         <ul className='grid grid-cols-3 gap-4 justify-items-center mb-4'>
            {data.map(photo => (
              <li key={photo.id} className='grid rounded'>
                <img src={photo.src} alt={photo.title} width={245} height={245} />
              </li>
            ))}
         </ul>
      </section>
    </main>
    </>
  )
}
