import React from 'react';
import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import SearchResult from './components/SearchResult';
import Footer from './components/Footer';
import './mainStyle.css';

function App() {
  return (
    <>
    <div className="container">
     <Header />
     <SearchResult />
     <EmployeeTable />
     <Footer />
      </div>
    </>
  );
}
export default App;
