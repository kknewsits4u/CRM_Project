import React from 'react'

const CandidateImage = () => {
  return (
    <div className=' flex items-center justify-center w-full h-fit   p-5 ' >
       <div className='flex items-center justify-center rounded-full h-45 md:h-55 w-45 md:w-55 shadow-md bg-slate-100 border border-blue-100 p-2' >
           <div  className='flex items-center justify-center rounded-full h-full w-full shadow-md' >
          <img src="https://i.pinimg.com/474x/7c/84/96/7c8496fbcfe4248c55961a697d8f8f03.jpg" alt="candidate poster" className=' w-full h-full object-cover object-center rounded-full ' />
          </div>
       </div>
    </div>
  )
}

export default CandidateImage