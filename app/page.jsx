import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className="head_text text-center">
        Dizcuss & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>Bizness Ideas with like-minded people</span>
      </h1>
      <p className='desc text-center'>
        Sparkera is an open discussion forum for entreprenuers to share their ideas and find potential partners
      </p>

      <Feed />
    </section>
  )
}

export default Home