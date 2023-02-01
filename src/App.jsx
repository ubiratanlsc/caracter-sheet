import { useState } from 'react'
import ToolTip from './sidebar/Sidebar';
import Sidebar from './sidebar/Sidebar';
import '../src/assets/css/style.css'
import { Personagens } from './components/personagens/Personagens';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar>
        <Personagens/>
      </Sidebar>
    </>
  )
}

export default App
