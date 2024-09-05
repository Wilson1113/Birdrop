import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Airdrop from './pages/Airdrop'
import NoPage from './pages/NoPage'
import DailyTracker from './pages/DailyTracker'
import Profile from './pages/Profile'
import AirdropDetail from './pages/AirdropDetail'

function App() {
  return (
    <div>
      <BrowserRouter basename='/Birdrop/'>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/airdrop' element={<Airdrop/>}/>
          <Route path='/dailytracker' element={<DailyTracker/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/airdropdetail' element={<AirdropDetail/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
