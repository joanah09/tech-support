import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {

    return (
<footer className="col-12 px-0 pt-5 mx-0">
<section className="container">
   <article className="row">
        <div className="w-auto mx-auto text-center">
            <h4>TECHSUPPORT</h4>
        </div>
        <div className="social pr-0 w-100">
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
        </div>

        <div className="copyright col-12 mt-4 mb-5">
            <p>©2002-2016 Techsupport. All rights reserved. Techsupport and the U.S and/or other counties.</p>
            <p>All other trademarks are the property of their respective owners</p>
        </div>
   </article>
</section>

</footer>
    )
}

export default Footer