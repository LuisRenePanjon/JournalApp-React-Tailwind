import React from 'react'
import { Spinner } from './Spinner'

export const LoadingPage = () => {
  return (
    <div className='w-screen h-screen bg-[#5856d6]'>
        <Spinner />
    </div>
  )
}
