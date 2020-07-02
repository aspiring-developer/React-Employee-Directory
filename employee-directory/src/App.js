import React from 'react';
import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <>
     <Header />
     <SearchInput />
     <EmployeeTable />
    </>
  );
}
export default App;
