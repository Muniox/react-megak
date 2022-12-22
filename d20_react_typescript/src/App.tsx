import { useEffect, useState } from 'react'
// import './App.pcss'
import { Dialog } from './components/common/Dialog/Dialog'
import { CryptoPrice } from './components/CryptoPrice/CryptoPrice'

export const App = () => {


  return (
    <div className="App">
      <CryptoPrice/>
    </div>
  )
}

