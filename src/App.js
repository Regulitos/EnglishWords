import React, { useState } from 'react';
import Header from './components/header/Header';
import CardList from './components/body/CardList';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [filter, setFilter] = useState('ALL');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="App">
      <Header onFilterChange={handleFilterChange} />
      <CardList filter={filter} />
      <Footer />
    </div>
  );
}

export default App;
