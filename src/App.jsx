import './App.css'

import Hero from './components/Hero'
import TeethGrid from './components/TeethGrid'

const App = () => {
  return (
    <main className='bg-black overflow-y-auto'>
        <Hero/>
        <TeethGrid/>
    </main>
  )
}

export default App;