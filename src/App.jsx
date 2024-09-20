import './App.css'
import Content from './Layout/Content/Content'
import Sidebar from './Layout/Sidebar/Sidebar'
import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Opensidebar =()=>{
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="app">
      <Sidebar Opensidebar={Opensidebar}/>
      <Content Opensidebar ={Opensidebar} sidebarOpen={sidebarOpen}/>
    </div>
  )
}

export default App
