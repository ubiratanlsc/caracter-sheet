import { useState } from 'react'
import ToolTip from './sidebar/Sidebar';
import Sidebar from './sidebar/Sidebar';
import '../src/assets/css/style.css'
import { Personagens } from './components/personagens/Personagens';
import { Magias } from './components/magias/Magias';
import Modal from './components/modal/Modal';
function App() {

  return (
    <>
      <Sidebar>
        <Magias />
      </Sidebar>
    </>
  )
}

export default App
