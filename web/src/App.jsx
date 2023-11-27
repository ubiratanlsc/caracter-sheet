import Sidebar from './sidebar/Sidebar';
import Grimorio from './components/grimorio/Grimorio';
import './index.css'
import Ficha from './components/ficha/Ficha';
function App() {
  return (
    <div className="bg-hero bg-cover">
      <Sidebar>
        <Ficha></Ficha>
      </Sidebar>
    </div>
  )
}

export default App
