import React from 'react';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import Footer from './components/Footer';
import './mainStyle.css';

function App() {
  return (
    <>
    <div className="container">
     <Header />
     <SearchResult />
     <Footer />
      </div>
    </>
  );
}
export default App;
