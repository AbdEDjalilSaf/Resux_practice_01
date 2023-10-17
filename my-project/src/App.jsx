import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let Buy_Cake = 'Buy_Cake'

function buyCake(){
  return {
    type:Buy_Cake,
    info:"first redux actions"
  }
}


let reducer = (state,action)=>{

switch(action.type){
  case Buy-Cake:return {
    numofCakes:state.numofCakes - 1
}
}
}



return (
  <>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p>
  </>
  )
}

export default App
