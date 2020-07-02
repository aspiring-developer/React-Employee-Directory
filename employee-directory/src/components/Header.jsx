import React from 'react';

function Header() {
  return (
<>
<section>
      <div className="row px-4 customHeader">
        <div className="col headerColumn">
          <h1 className="text-center text-dark text-uppercase font-weight-bold mt-5 mb-0"> Employee Directory </h1>
          <p className="text-center text-secondary mt-0"> <em> A React-based employee directory data search app</em> </p>
        </div>
      </div> 
    </section> 

</>

  )
}

export default Header;