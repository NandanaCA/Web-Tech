import { Routes,Route } from "react-router-dom"
import {Home} from './components/Home'
import {Report} from './components/Report'
import {Trends} from './components/Trends'
import {Map} from './components/Map'
import {Navbar} from './components/Navbar'


function App()
{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Report' element={<Report/>}></Route>
      <Route path='Trends' element={<Trends/>}></Route>
      <Route path='Map' element={<Map/>}></Route>
    </Routes>
    </>
  )
}
export default App
