import React, {Component} from 'react';
import SearchInput from './SearchInput';
import Api from './Api';

class SearchResult extends Component {
state = {
  search: '',
  results: [],
  
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
    const name = event.target.name;    
    const value = event.target.value;    
    this.setState({      
      [name]: value    
    });  
  }; 

}

export default SearchResult;