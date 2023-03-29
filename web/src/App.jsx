import { useState } from 'react'
import ToolTip from './sidebar/Sidebar';
import Sidebar from './sidebar/Sidebar';
import '../src/assets/css/style.css'
import { Personagens } from './components/personagens/Personagens';
import { Magias } from './components/magias/Magias';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar>
        <Magias />
      </Sidebar>
    </>
  )
}

export default App
