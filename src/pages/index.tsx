
import Head from 'next/head'


export default function Index() {
  return (
    <>
      <Head>
        <title>{`Keebout`}</title>
      </Head>
      <main
        className={`h-screen w-screen`}
      >
        <Homepage />
      </main>
    </>
  )
}

export function Homepage() {
  return (
    <>
      <div className='h-screen w-screen'>
        Title
      </div>
    
    </>
  )
}