
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles'
const fetchBottles= async ()=>{
  const res= await fetch('./bottles.json')
  return res.json()
}

function App() {
  
const bottlePromise= fetchBottles()
  return (
    <>
      <Suspense fallback={<h3>Bottles data loading....</h3>}>

      <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
