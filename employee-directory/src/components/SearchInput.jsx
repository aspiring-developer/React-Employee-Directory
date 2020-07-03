import React from 'react';

function SearchInput(props) {
  return (
<>
<div className="text-center searchField">
<form className="form-inline my-2 my-lg-0">
      <input onChange={props.handleInputChange} value={props.value} name="search" className="form-control mr-sm-2" type="text" placeholder="Search" id="search" aria-label="Search" />
      <button onClick={props.handleFormSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
</>

  )
}
export default SearchInput;