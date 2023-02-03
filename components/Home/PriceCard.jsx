import React from 'react'

const PriceCard = ({name, price, id}) => {
  return (
    <div className='flex w-full items-center justify-around py-4 ' >
        <div className='flex flex-col w-2/3 items-start'>
        <p className='font-semibold text-xl'>{name.toUpperCase()}</p>
        <p className='text-xs'>TFID: {id}</p>
        </div>
        <p className='font-semibold'>$ {price}</p>
    </div>
  )
}

export default PriceCard