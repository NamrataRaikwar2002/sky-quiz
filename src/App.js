import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Category, Home, Login, Rules, Signup } from './Pages';
function App() {
  return (
   <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/category-page' element={<Category />} /> 
     <Route path='/rules-page' element={<Rules />}/>
     <Route path='/signup-page' element={<Signup />}/>
     <Route path='/login-page' element={<Login />}/>

   </Routes>
  );
}

export default App;
