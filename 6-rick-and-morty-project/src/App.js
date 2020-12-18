/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import Navbar from './components/NavbarComponent/Navbar';
import CharactersList from './components/CharactersComponent/CharactersList';
import FavoritesList from './components/FavoritesListComponent/FavoritesList';
import Searcher from './components/SearcherComponent/Searcher';
import CharacterDetails from './components/CharacterDetailsComponent/CharacterDetails';

import './App.css';

function App() {
  const [theme, updateTheme] = useState('bg-light');
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <BrowserRouter>
        <Navbar />
        <div className={`main-${theme}`}>
          <Switch>
            <Route exact path="/favorites"> 
              <FavoritesList />
            </Route>
            <Route exact path="/:characterId" component={CharacterDetails}/>
            <Route exact path="/"> 
            <Searcher />
            <CharactersList />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
