import { Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import Home from './routes/home/home.component'
import Shop from './routes/shop/shop.component'
import Navigation from './components/navigation/navigation.componen'





const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
