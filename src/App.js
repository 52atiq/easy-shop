
import { Route ,Routes} from 'react-router-dom';
import './App.css';

import Slick from './components/Slick/Slick';
import Navbar from './shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    
    <Navbar> </Navbar>
    
    <Routes>
       <Route></Route>
    </Routes>
   
     {/* <Slick></Slick> */}
   
   
     
    </div>
  );
}

export default App;
