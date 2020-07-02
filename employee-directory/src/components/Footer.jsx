import React from 'react';

const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
  return (
<>
<footer>
<hr className="mt-5" />
<p className="text-center"> Employee Directory App &bull; &copy; Shiva Sharma &bull; {currentYear} </p>
</footer>
</>

  )
}

export default Footer;