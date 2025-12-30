import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar'
import UseStateDemo from './components/UseStateDemo/UseStateDemo.jsx'
import UseReducerDemo from './components/UseReducerDemo/UseReducerDemo.jsx'
import UseMemoDemo from './components/UseMemoDemo/UseMemoDemo.jsx'
import UseCallbackDemo from './components/UseCallbackDemo/UseCallbackDemo.jsx'

import './css/App.css'
import UseContextParent from './components/UseContextDemo/UseContextParent.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="" element={<UseStateDemo />} />
              <Route path="/context" element={<UseContextParent />} />
              <Route path="/reducer" element={<UseReducerDemo />} />
              <Route path="/memo" element={<UseMemoDemo />} />
              <Route path="/callback" element={<UseCallbackDemo />} />
              <Route path="/" element={<UseStateDemo />} />
            </Routes>
          </main> 
      </div>
    </>
  )
}

export default App
