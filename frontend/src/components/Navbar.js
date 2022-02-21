import React from 'react'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <a className="navbar-brand" href="#">
                {/* <img src="../public/images/logo/data-analysis-consulting.png" style={{width: "50px"}} /> */}
                <span>DVA Blog App</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blogs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About Me</a>
                </li>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;