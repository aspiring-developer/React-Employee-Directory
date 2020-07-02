import React from 'react';
import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import SearchInput from './components/SearchInput';
import Footer from './components/Footer';
import './mainStyle.css';

function App() {
  return (
    <>
    <div className="container">
     <Header />
     <SearchInput />
     <EmployeeTable />
     <Footer />
      </div>
    </>
  );
}
export default App;
