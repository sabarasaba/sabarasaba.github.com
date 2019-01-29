import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => (
  <main>
    <section>
      <h1 className="big name"><Link to="/">@Ignacio Rivas</Link></h1>
      <p className="time" id="time">Sun, Jul 09, 6:06pm</p>
    </section>

    {children}
  </main>
);
