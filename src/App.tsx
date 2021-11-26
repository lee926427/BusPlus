import {ReactNode} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import BusMap from "@/views/BusMap.tsx";
interface RouterProps{
  children: ReactNode
}
function Router({children}:RouterProps){
  return (
    <BrowserRouter>
    {children}
    </BrowserRouter>
  )
}

function App() {
  return (
    <div className="w-screen h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<BusMap/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
