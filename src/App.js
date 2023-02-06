import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './component/Add';
// import Edit from './component/Edit';
import List from './component/List';
import Locallist from './component/locallist';
import Login from './component/Login';
import Update from './component/Update';
import Updatelist from './component/updatelist';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/locallist' element={<Locallist />} />
          <Route path='/list' element={<List />} />
          <Route path='/add' element={<Add />} />
          {/* <Route path='/edit/:id' element={<Edit />} /> */}
          <Route path='/update/:id' element={<Update />} />
          <Route path='/updatelist/:id' element={<Updatelist />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
