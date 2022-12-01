import Header from './components/Header'
import './styles/App.scss'
import { useDispatch, useSelector } from "react-redux";
import AllPolls from './pages/Polls'
import { Route, Routes} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About'
import Statistic from './pages/Statistic'
import Constructor from './pages/Constructor'
import Results from './pages/Results'
import 'animate.css';
import React from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import Poll from './pages/Poll'
import Result from './pages/Result';
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])
  
  return (
    <>
      <Header />
      <div className="justify-center items-center flex-col h-full">
        <Routes>
          <Route path='/' element={<AllPolls />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/statistic' element={<Statistic />}></Route>
          <Route path='/constructor' element={<Constructor />}></Route>
          <Route path='/results' element={<Results />}></Route>
          <Route path='/polls/:id' element={<Poll />}></Route>
          <Route path='/results/:id' element={<Result />}></Route>
        </Routes>
      </div>

    </>


  );
}

export default App;
