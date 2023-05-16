import Sidebar from './sidebar/Sidebar';
import '../src/assets/css/style.css'
import { Outlet } from 'react-router-dom';
function App() {

 
  return (
    <>
      <Sidebar>
        <Outlet/>
      </Sidebar>
    </>
  )
}

export default App
