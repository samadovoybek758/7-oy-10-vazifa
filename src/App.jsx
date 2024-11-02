import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Likes from './components/Likes'
import MainLayouts from './layouts/MainLayouts';

function App() {

  
  
  return (
    <div className='max-w-[1800px]'>
      <Routes>
        <Route path='/' element={<MainLayouts><Home></Home></MainLayouts>}>Home</Route>
        <Route path='/details/:id' element={<MainLayouts><Details></Details></MainLayouts>}>Deyails</Route>
        <Route path='/likes' element={<MainLayouts><Likes></Likes></MainLayouts>}>Likes</Route>
      </Routes>
    </div>
  )
}

export default App