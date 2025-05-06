// ShowDataPage.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as XLSX from "xlsx"
import { apiurl } from "../Constant";

const ShowDataPage = () => {
  const [file, setFile] = useState()
  const { id  } = useParams();
  const navigate = useNavigate();
   
  useEffect(()=>{

  async function fetchData(){

  const response = await axios.get(`${apiurl}/api/file/${id}`, { responseType:'arraybuffer'})

   const data = new Uint8Array(response.data)
   const workbook = XLSX.read(data, {type:'array'});

   const firstSheet = workbook.SheetNames[0];
   const worksheet = workbook.Sheets[firstSheet];

   const json = XLSX.utils.sheet_to_json(worksheet , {header:1});
   setFile(json)
  }
  fetchData()
  }, [id])
  
  if (!file || file.length === 0) {
    return <div className="p-5">Loading or no data found...</div>;
  }

  const [headers, ...rows] = file;




  const handleBack = () => {
    navigate("/upload")
  }

  return (
    <div className="px-3 py-3">
        <div className=" flex items-center justify-center px-3 rounded border border-blue-500 w-fit mb-3 text-xs text-blue-500  cursor-pointer" onClick={handleBack} >Go Back</div>
       <div className="w-full overflow-x-scroll h-fit  " >
       <table border="1" cellPadding="10" className="w-full "  style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr className="bg-gray-200" >
          {headers.map((head, index) => (
            <th key={index}  className="border text-sm border-gray-500 px-4 py-2 text-left font-semibold"  >{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rIdx) => (
          <tr key={rIdx}>
            {row.map((cell, cIdx) => (
              <td key={cIdx} className="border border-gray-300 px-4 py-2"  >{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
       </div>
    </div>
  );
};

export default ShowDataPage;
