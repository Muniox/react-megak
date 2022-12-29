import { Routes, Route, Link } from 'react-router-dom'
import './App.pcss'
import { GiftsView } from './views/GiftsView'
import { TestView } from './views/TestView'
import { Header } from './components/Header/Header'
import { NotFoundView } from './views/NotFoundView'
import { SingleGiftView } from './views/SingleGiftView'

export const App = () => {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/gift" element={<GiftsView/>} />
      <Route path="/gift/:idOfGift" element={<SingleGiftView/>} />
      <Route path="/test" element={<TestView/>} />
      <Route path="*" element={<NotFoundView/>} />
    </Routes>
    </>

  )
}

