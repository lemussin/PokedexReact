import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Layout } from './Layout/Layout';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Pokedex } from './Components/Pokedex/Pokedex'
import { PokemonDetail } from './Components/Details/PokemonDetail';
import { ListBalls } from './Components/Balls/ListBalls';
import { useAPI } from './hooks/useAPI';
import { PokemonContext } from './context/PokemonContext';
import { DetailBall } from './Components/Balls/DetailBall';
import { ListBerries } from './Components/Berries/ListBerries';
import { DetailBerry } from './Components/Berries/DetailBerry';
import { DetailGeneration } from './Components/Generation/DetailGeneration';

function App() {
  const { loadingBalls, balls, specialBalls, detailsBalls, berries, generations } = useAPI()

  return ( 
    <PokemonContext.Provider value={{loadingBalls, balls, specialBalls, detailsBalls, berries, generations}}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pokedex/:idPokedex' element={<Pokedex />} />
            <Route path='/detail/:idPokemon' element={<PokemonDetail />} />
            <Route path='/ListBalls' element={
              <ListBalls 
                loadingBalls={loadingBalls} 
                balls={balls} 
                detailsBalls={detailsBalls} 
              /> } 
            />
            <Route path='/ListSpecialBalls' element={
              <ListBalls 
                loadingBalls={loadingBalls} 
                balls={specialBalls} 
                detailsBalls={detailsBalls} 
              /> } 
            />
            <Route path='/detailPokeBall/:idBall' element={<DetailBall /> } />
            <Route path='/listBerries' element={<ListBerries />} />
            <Route path='/detailBerry/:idBerry' element={<DetailBerry />} />
            <Route path='/generation/:idGen' element={<DetailGeneration /> } />
            <Route path='*' element={<p>Not found</p>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </PokemonContext.Provider>    
  );
}

export default App;
