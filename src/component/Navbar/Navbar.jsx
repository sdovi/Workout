import React from 'react'
import './Style.scss'

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand" href="#">WORKOUT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbar-text" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>

            <ul className='navbar-nav'>

              <li class="nav-item navbar-text-end">
                <a class="nav-link nav_endtxt active" aria-current="page" href="#sect1"><h6 className='nav-end_text'>EXERCISES</h6></a>
              </li>
              <li class="nav-item navbar-text-end">
                <a class="nav-link nav_endtxt active" aria-current="page" href="#sect2"><h6 className='nav-end_text'>TRAINERS</h6></a>
              </li>
              <li class="nav-item navbar-text-end">
                <a class="nav-link nav_endtxt active" aria-current="page" href="#footer"><h6 className='nav-end_text'>PRICING</h6></a>
              </li>
              <li class="nav-item navbar-text-end">
                <a class="nav-link nav_endtxt active" aria-current="page" href="#"><h6 className='nav-end_text'>LOGIN</h6></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
