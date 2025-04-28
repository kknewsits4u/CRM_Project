import React from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const UpdateDataCompo = () => {
 

  const updateData =[
    {
      bg:"",
      text:"Password Update"
    },
    {
      bg:"",
      text:"SMS API Setting"
    },
    {
      bg:"",
      text:"Update Data"
    },
   ]
  



  return (

    <div  className=' flex flex-col w-full h-fit  px-3 mt-5 gap-2' >
         <div  className=' flex flex-col items-center justify-center w-full min-h-12 h-fit border border-blue-200 rounded gap-2 cusrsor-pointer bg-white' >
               <h1  className=' text-[rgb(23,141,241)] font-semibold ' > VOTING<span className=' ml-2' > <DoubleArrowIcon sx={{ color:"rgb(23,141,241)", fontSize:"20px"  }}  /> </span> </h1>
        </div>
        <div  className=' flex items-center justify-between w-full h-60 md:h-70 rounded gap-2 ' >
          <div className=' flex items-center justify-center w-1/3 border border-blue-200 bg-white h-full' > <p className=' font-semibold text-slate-700' >Import <br />  Export </p> </div>
          <div className=' flex flex-col items-center justify-center w-2/3 h-full gap-2'  >

          {
            updateData.map((data, i)=>
               <div key={i} className=' flex items-center justify-center h-1/3 bg-white border w-full border-blue-200  '  >
                <p className=' font-semibold text-slate-700 text-sm '>{data.text}</p>
            </div>
            )
          }
          
          </div>
        </div>
     </div>
  )
}

export default UpdateDataCompo