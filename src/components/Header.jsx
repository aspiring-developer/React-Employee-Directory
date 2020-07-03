import React from 'react';

function Header() {
  return (
<>
<header>
      <div className="row px-4 customHeader">
        <div className="col headerColumn">
          <h1 className="text-center text-uppercase font-weight-bold mt-5 mb-0"> Employee Directory </h1>
          <p className="text-center text-secondary mt-0"> <em> A React-based employee directory data search app</em> </p>
        </div>
      </div> 
    </header> 

</>

  )
}

export default Header;