import React from 'react'
import Header from '../Components/Header'
import CandidateImage from '../Components/CandidateImage'
import ReportsComponent from '../Components/ReportsComponent'
import UpdateDataCompo from '../Components/UpdateDataCompo'

const HomePage = () => {
  return (
      <div className='w-full flex flex-col items-center justify-start '   >
     <CandidateImage/>
     <UpdateDataCompo/>
     <ReportsComponent/>
    </div>
  )
}

export default HomePage