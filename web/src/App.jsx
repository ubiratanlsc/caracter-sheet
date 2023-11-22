import Sidebar from './sidebar/Sidebar';
import Grimorio from './components/grimorio/Grimorio';
import './index.css'
function App() {
  return (
    <div className="bg-hero bg-cover">
      <Sidebar>
        <Grimorio></Grimorio>
      </Sidebar>
    </div>
  )
}

export default App
