import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Create from './pages/Create'
import Footer from './components/Footer'

const App = () => {
  const [taskData, setTaskData] = useState({ name: "", desc: "" });
  const [tasks, setTasks] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null)



  const handleTaskData = (key, value) => {
    setTaskData({ ...taskData, [key]: value });
  };
  
  

  const handleSubmit = (e, navigate) => {
    e.preventDefault();
   if(editingIndex===null){
     if (!taskData.name || !taskData.desc) return;
    setTasks((prevTasks) => [...prevTasks, taskData]);
    setTaskData({ name: "", desc: "" }); 

  }
  else{
    tasks[editingIndex] = taskData
      setTaskData({ name: "", desc: "" }); 
      setEditingIndex(null)
}
    navigate("/"); 
   }

  const handleEdit= (index)=>{
      const selectedUser = tasks[index];
      setTaskData({
        name:selectedUser.name,
        desc:selectedUser.desc
      })
        setEditingIndex(index)

  }

  const handleDelete= (index)=>{
    tasks.splice(index,1);
    setTasks([...tasks])


  }



  return (
    <BrowserRouter>
    
      <div className='bg-black min-h-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home tasks={tasks} handleEdit={handleEdit} handleDelete={handleDelete} setTasks={setTasks} />} />
          <Route path='/create' element={
            <Create
              taskData={taskData}
              handleTaskData={handleTaskData}
              handleSubmit={handleSubmit}
              editingIndex={editingIndex}
            />
          } />
        </Routes>
      
      </div>
        <Footer/>
    </BrowserRouter>
  );
};

export default App;
