import React from 'react'

const CandidateImage = () => {
  return (
    <div className=' flex items-center justify-center w-full h-55    ' >
       <div className='flex items-center justify-center rounded-full h-45 w-45 shadow-md bg-slate-100 border border-blue-100 ' >
           <div  className='flex items-center justify-center rounded-full h-40 w-40 shadow-md' >
          <img src="https://i.pinimg.com/474x/7c/84/96/7c8496fbcfe4248c55961a697d8f8f03.jpg" alt="candidate poster" className=' w-full h-full object-cover object-center rounded-full ' />
          </div>
       </div>
    </div>
  )
}

export default CandidateImage