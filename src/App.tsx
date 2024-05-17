import './App.css'
import {Layout} from "@/components/pages/layout.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Detail} from "@/components/pages/detail.tsx";

function App() {
    //<Layout />
  return (
      <>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path={'/movie/:movieId'} element={<Detail />} />
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
