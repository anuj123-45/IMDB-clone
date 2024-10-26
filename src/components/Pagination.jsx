import React from 'react'

const Pagination = ({prev,next,no}) => {
  return (
    <div className='bg-gray-400 mt-5 flex justify-center items-center '>
        <div className='p-3' onClick={prev}>
      <i className="fas fa-arrow-left text-white text-xl cursor-pointer"></i>

      </div>
      <div className='p-3 text-xl'>
        {no}
      </div>
      <div className='p-3' onClick={next}>
      <i className="fas fa-arrow-right text-white text-xl cursor-pointer"></i>

      </div>
    </div>
  )
}

export default Pagination
