import React from 'react';

function SearchInput(props) {
  return (
<>
<div className="col searchInputColumn">
<input type="text" value={props.val} name="search" id="search" placeholder="Search employee" className="form-control mr-sm-2" onChange={props.handler}/>
</div>
</>
  )}
export default SearchInput;