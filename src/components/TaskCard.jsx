import React from 'react'
import {FaEdit,FaTrash,FaCheck} from 'react-icons/fa'

const TaskCard = ({ name, desc,handleEdit,index,navigate ,handleDelete,handleStatus,complete}) => {
    const today = new Date().toLocaleDateString()
  

  return (
    <div className='text-white   bg-[#111827] px-4 py-6 border border-white rounded-sm'>
       <p className='text-xs text-right'>{today}</p>
      <h2 className='text-xl mb-4 font-semibold'>{name}</h2>
         
      <p>{desc}</p>
      <div className='flex justify-between mt-5'>
        <h3 className={`bg-[#1F2937] px-4 py-1 ${complete==="Pending"?'text-yellow-400 border-yellow-400 animate-pulse ' :'text-green-400  border-green-400 '} rounded-2xl border-2 `}>{complete}</h3>
        <div className='flex gap-4 px-3'>
          <button disabled={complete==="Completed"? true :false} onClick={()=>{handleEdit(index),navigate('/create')}}
           className='bg-[#1F2937] text-white border-1 px-3 py-1 rounded-lg cursor-pointer'><FaEdit/></button>
          <button  onClick={()=>{handleDelete(index)}}
           className='bg-[#1F2937] text-white border-1 px-3 py-1 rounded-lg cursor-pointer'><FaTrash/></button>
          <button disabled={complete==="Completed"? true :false} onClick={()=>{handleStatus(index)}}
           className='bg-[#1F2937] text-white border-1 px-3 py-1 rounded-lg cursor-pointer'><FaCheck/></button>
        </div>
      </div>
  
    </div>
  );
};

export default TaskCard;
