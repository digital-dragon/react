import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import { PictureProvider } from './contexts/PictureContext'

function App() {

  return (
    <PictureProvider>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
    </PictureProvider>
  )
}

export default App
