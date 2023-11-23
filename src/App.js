import { Routes,Route } from "react-router-dom"
import {Home} from './components/Home'
import {Report} from './components/Report'
import {Map} from './components/Map'
import {Navbar} from './components/Navbar'
import {News} from './components/News'


function App()
{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Report' element={<Report/>}></Route>
      <Route path='News' element={<News/>}></Route>
      <Route path='Map' element={<Map/>}></Route>
    </Routes>
    </>
  )
}
export default App
