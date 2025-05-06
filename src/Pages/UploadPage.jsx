// UploadPage.js
import React, { useEffect, useState } from "react";
import axios from "axios"
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { apiurl } from "../Constant";

const UploadPage = ({ setExcelData }) => {

  const [file , setFile ] = useState(null);
  const [files , setFiles ] = useState([]);
   const navigate =useNavigate()

   useEffect(()=>{
      fetchFiles();
   },[]);

   const fetchFiles = async () =>{
    const res = await axios.get(`${apiurl}/api/files`);
    setFiles(res.data);
   }

   const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const data = await axios.post(`${apiurl}/api/upload`, formData);
      console.log("data from db :", data)
      fetchFiles();
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

   const handleViewFile = (id, filename)=>{
     navigate(`/showfile/${id}`)
   }

// accept=".xlsx, .xls" onChange={handleFileUpload}
  return (
    <div className="p-3 flex flex-col w-full items-start justify-start h-fit ">
      <div className=" flex flex-col w-full items-start justify-start h-fit pb-3 border-b border-gray-300" >
          <h2 className="text-xl font-bold mb-4">Upload Excel File</h2>
          <div  className=" flex w-full gap-5">
          <input type="file"  accept=".xlsx,.xls"
           onChange={(e)=> setFile(e.target.files[0])} 
    
            className=" border border-blue-600 p-2 rounded-md w-full" />
          <button  className=" bg-blue-500 px-5 text-white rounded" onClick={uploadFile} disabled={!file}  >Upload</button>
          </div>
        </div>

       <div className=" flex flex-col w-full items-center justify-start h-fit gap-3 mt-5" >
        {
          files.length <= 0 ? "No file uploaded " :
          files?.map((data, idx)=> 
            <div className="flex items-center  justify-between w-full  h-15 rounded-md border border-blue-400 bg-blue-100 px-4"  >
             <p>{data.filename}</p>
             <div className="flex gap-5 items-center justify-between " >
             <div className=" flex items-center justify-center w-8 h-8 rounded-full border border-blue-400 cursor-pointer"  onClick={()=> handleViewFile(data._id)} > <VisibilityIcon sx={{ color:"rgb(23,141,241)"}} /></div>
             <div className=" flex items-center justify-center w-8 h-8 rounded-full border border-blue-400  cursor-pointer" > <DownloadIcon  sx={{ color:"rgb(23,141,241)" }} /> </div>
              </div>
             </div>
          )
        }
         
      </div>
    </div>
  );
};

export default UploadPage;
