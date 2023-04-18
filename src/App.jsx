import { Home } from './components/home/home'
import { Posts } from './components/posts/Posts'

import './Global.css'

function App() {
  return (
    <div>
      <Home/>
      <div className='cor_fundo'>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  )
}

export default App
