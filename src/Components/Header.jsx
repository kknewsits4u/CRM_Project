import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

import Drawer from '@mui/material/Drawer';

import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SearchIcon from '@mui/icons-material/Search';
import ForumIcon from '@mui/icons-material/Forum';
import SmsIcon from '@mui/icons-material/Sms';
  
  const Header = () => {
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };


    const reportList =[
      "Agewise Report",
      "Family Report",
      "Repeat Name Report",
      "Surnamewise Report",
      "Addresswise Report",
      "RedGreen Report",
      "Caste Report",
      "Party Worker Report",
      "Reference Report"
    ]
  
 

  return (
    <div  className='w-full h-12 md:h-15 flex items-center justify-start px-5 sticky top-0 left-0 shadow-md'  style={{
      background: "#60B5FF",
      }} >
         <nav  className=' w-full h-full flex items-center justify-start gap-3' >
           <div className='w-6 h-8   items-center justify-center  ' onClick={toggleDrawer(true)}  >
            <DensityMediumIcon  sx={{ height:"100%" , width:"100%" , color:"#fff", fontWeight:"900"  }}  />
           </div>
           <h1  className=' text-base font-bold text-white' >Home</h1>
             <Drawer open={open} onClose={toggleDrawer(false)}>
              <div className=' w-50 flex flex-col h-full items-center justify-start gap-2 pr-1'  >
                <div className='flex flex-col items-start justify-between w-full h-25 p-3' style={{ background:"linear-gradient(45deg , rgb(23,141,241) , rgb(255,255,255))"  }}   >
                    <div  className=' flex  items-center justify-center rounded-full  h-10 w-10 shadow-md   ' >
                       <img src="https://i.pinimg.com/736x/b1/2e/54/b12e543befe20191e6703161556378e1.jpg" alt="logoImage" className=' w-full h-full object-cover object-center rounded-full ' />
                    </div>
                    <h1  className=' text-[rgb(255,255,255)] font-semibold text-base' >SAMPARK  <span className='font-normal ' > 54.0</span></h1>
                </div>
                <div className=' flex items-center justify-start w-full  px-3 py-2 bg-[#d2e9fb] ' >
                  <div className='flex w-full h-full gap-3 cursor-pointer ' >
                      <HomeIcon  sx={{  color:"#102E50" , fontSize:"20px" }}  />
                     <h1 className='text-sm font-semibold text-[#102E50] ' >Home</h1>
                  </div>
                </div>
                <div className=' w-full flex items-center justify-center h-fit px-3 border-b border-slate-200 pb-2' >
                  <div className=' w-full border border-[#d2e9fb] rounded flex items-center justify-start gap-1 py-1' >
                       <div  className='h-full w-12 flex items-center justify-center ' >
                          <SearchIcon sx={{ fontSize:"18px", color:"#9FB3DF"  }}   />
                       </div>
                      <input type="text"  placeholder='Search ' className='border-0 focus:outline-0  text-sm w-[90%]  text-[#a1baf1] '  />
                  </div>
                </div>

                <div  className=' w-full  flex flex-col  items-start justify-center h-fit px-3 ' >
                    <h1 className='text-sm font-semibold text-[#102E50] border-b border-slate-200 pb-2 w-full' >
                      Broadcast
                    </h1>
                    <div className=' flex w-full h-fit text-xs text-slate-500 font-semibold py-2'  >
                        <ul className=' flex flex-col w-fll h-fit gap-2' >
                          <li className=' flex items-center justify-start gap-3 cursor-pointer py-1'  >
                             <ForumIcon  sx={{ fontSize:"18px", color:"#9FB3DF"  }}  />
                            <p>Normal SMS broadcast</p>
                          </li>
                          <li    className=' flex items-center justify-start gap-3 cursor-pointer py-1'  >
                            <SmsIcon sx={{ fontSize:"18px", color:"#9FB3DF"  }}   />
                            <p>Slip SMS broadcast</p>
                          </li>
                        </ul>
                    </div>
                </div>
                <div  className=' w-full  flex flex-col  items-start justify-center h-fit px-3 ' >
                    <h1 className='text-sm font-semibold text-[#102E50] border-b border-slate-200 pb-2 w-full' >
                      Reports
                    </h1>
                    <div className=' flex w-full h-fit text-xs font-semibold text-slate-500 hover:text-slate-700  py-2'  >
                        <ul className=' flex flex-col w-fll h-fit gap-2' >

                         {
                            reportList.map((text, i)=>

                          <li key={i} className=' flex items-center justify-start gap-3 cursor-pointer py-1'  >
                             <AssessmentIcon  sx={{ fontSize:"18px", color:"#9FB3DF"  }}  />
                            <p>{text}</p>
                          </li>
                            
                            )

                         }
                       
                     
                        </ul>
                    </div>
                </div>
                 
              </div>
           </Drawer>
         </nav>
    </div>
  )
}

export default Header