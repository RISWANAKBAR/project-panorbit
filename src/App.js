
import Profileview from "./Profile/Profileview";
import Landing from "./Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
	
	return (
		<div>
			 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
		<Route path="profile/:val" element={< Profileview/>}/>
	

        
   
      </Routes>
    </BrowserRouter>
		
		
		</div>
	);
}

export default App;
