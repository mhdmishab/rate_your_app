import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRoute from './route/UserRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<UserRoute/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
