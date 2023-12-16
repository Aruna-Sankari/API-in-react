import { BrowserRouter,Routes,Route } from "react-router-dom";
import Api from './Component/Api/Api.js'
import Home from "./Component/Api/Home.js";
const Routing=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Api />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing