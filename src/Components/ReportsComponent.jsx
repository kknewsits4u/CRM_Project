import React from 'react'

const ReportsComponent = () => {

 const reportData =[
  {
    text:"Search",
    bg:"#F1E7E7"
  },
  {
    text:"Menu",
    bg:"#AFDDFF"
  },
  {

    text:"Agewise Report",
    bg:"#FFDBDB"
  },
  {

    text:"Family Report",
    bg:"#FBE4D6"
  },
  {

    text:"Surname Wise Report",
    bg:"#B4EBE6"
  },
  {

    text:"Caste Report",
    bg:"#F1E7E7"
  },
  {
    text:"Redgreen Report",
    bg:"#AFDDFF"
  },
  {

    text:"Repeat Name Report",
    bg:"#FFDBDB"
  },
  {
    text:"Address Wise Report",
    bg:"#FBE4D6"
  },
  {
    text:"Party Wise Report",
    bg:"#B4EBE6"
  },
  {

    text:"Reference Report",
    bg:"#F1E7E7"
  },
  {
    text:"Dead Person Report",
    bg:"#F1E7E7"
  },
  {
    text:"Blood Group Report",
    bg:"#AFDDFF"
  },
  {
    text:"Shifted Report",
    bg:"#FFDBDB"
  },
  {
    text:"Area Report",
    bg:"#FBE4D6"
  },
  {
    text:"Party Report",
    bg:"#B4EBE6"
  },
  {

    text:"Education Report",
    bg:"#F1E7E7"
  },
  {
    text:"Professional Report",
    bg:"#AFDDFF"
  },
  {
    text:"Birthday Wise Report",
    bg:"FFDBDB"
  },
 ]


  return (
    <div  className=' flex flex-col w-full h-fit  px-3 mt-5' >
        <div  className=' flex flex-col w-full min-h-30 h-fit  rounded gap-2' >
            <div className='flex h-10 items-center justify-start border rounded-tl rounded-tr shadow shadow-blue-100 px-2 border-blue-100 ' >
               <h1 className=' text-blue-400 font-semibold text-base'  >All Important Reports</h1>
            </div>
            <div  className=' grid grid-cols-2 gap-2 '  >
              {
                reportData.map((data, i)=>
                  <div className='flex flex-col items-center justify-between p-2 border border-blue-100  w-full  h-20 md:h-25 rounded bg-blue-50' 
                   >
                     <h1 className=' text-center text-xs font-semibold text-slate-600'  >{data.text}</h1>
                     <div className='flex items-center justify-center text-xs h-5 px-3 py-2 border border-blue-200 rounded  hover:shadow-md text-blue-400' >View </div>
                  </div>
                )
              }

            </div>
        </div>
    </div>
  )
}

export default ReportsComponent