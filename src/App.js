import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//wrap entire app in router and wrap all route components in a routes tag
import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {
  


  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Posts/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
