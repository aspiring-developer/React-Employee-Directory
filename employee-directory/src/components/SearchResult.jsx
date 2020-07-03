import React, {Component} from 'react';
import SearchInput from './SearchInput';
import Search from './Search';
import Api from './Api';

class SearchResult extends Component {
state = {
  search: '',
  result: [],
  resultDisplay: []

};
  // When this component mounts, search the API for employee info 
  componentDidMount() {    
    this.searchApi("users");  
  }  
  searchApi = query => {    
    API.search(query)      
    .then(res => this.setState({ results: res.data.data }))      
    .catch(err => console.log(err));  
  };  
  handleInputChange = event => {    
    const userInput = event.target.value;
    const populatedList = this.state.result.filter(employee => {
      const employeeFullName = employee.name.first + employee.name.last;
      return employeeFullName.includes(userInput);
    });    
    this.setState({ 
      resultDisplay: populatedList,     
      search: userInput  
    });  
  }; 

componentDidMount() {
  Api.result().then(res => {
    this.setState({
      result: res.data.results,
      resultDisplay: res.data.results,
    });
  });
}

render() {
  return (
    <>
       
     <SearchForm          
     search={this.handleInputChange} val={this.state.search} /> 
 <div className="container">
 <table className="table displayTable w-100">
  <thead>
    <tr>
    <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Current Age</th>
    </tr>
  </thead>
  {this.state.resultDisplay && this.state.resultDisplay.map(employee => {
    <tbody>
    <tr key={employee.id.value}>
      <td><img src={employee.picture.thumbnail} alt="Employee Profile Thumbnail" /> </td>
      <td>{employee.name.first} {employee.name.last}</td>
      <td>{employee.phone}</td>
      <td>{employee.email}</td>
      <td>{employee.dob.age}</td>
    </tr>
    </tbody>
  })}


  </table>


 </div>

    </>
  )
}



}






export default SearchResult;