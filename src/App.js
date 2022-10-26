import Header from './components/Header/Header'
import './styles/App.scss'
import AllPolls from './pages/Polls/Polls'
import { Route, Routes } from 'react-router-dom'
import Entrance from './components/Entrance/Entrance';
import About from './pages/About/About'
import Statistic from './pages/Statistic/Statistic'
import Constructor from './pages/Conctructor/Constructor'
import Poll from './pages/Poll/Poll'
function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path='/*' element={<Entrance />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/statistic' element={<Statistic />}></Route>
          <Route path='/polls' element={<AllPolls />}></Route>
          <Route path='/constructor' element={<Constructor />}></Route>
          <Route path='/polls/:id' element={<Poll/>}></Route>
        </Routes>
      </div>

    </>


  );
}

export default App;
