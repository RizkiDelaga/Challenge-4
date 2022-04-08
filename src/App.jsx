import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CarDetails from './pages/carDetail';
import SearchingCars from './pages/searchingCars';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search-result/:driverType/:date/:pickUpTime/:totalPassenger' element={<SearchingCars />} />
        <Route path='car/:id' element={<CarDetails />} />

        {/* 404 Error Page */}
        <Route path='*' element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
