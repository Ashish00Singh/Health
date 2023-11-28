import React from 'react'
import { Link } from 'react-router-dom'

export default function But() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary navbar-default sticky-top">
        <div class="container-fluid">
          <Link to={"dewali"}><img src="https://cdn.dribbble.com/users/2558657/screenshots/7836816/media/92a948f5e5f3b8786c29c300e6dad017.gif" className='navbar-brand icon' /></Link>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"h_d"}>Chick</Link>
              </li>
              <li class="nav-item">
                {/* <Link class="nav-link" aria-current="page" to={"Latest car"}>latest car</Link> */}
              </li>
              <li class="nav-item">
                {/* <Link class="nav-link" aria-current="page" to={"Loard Krishna"}>Loard Krishna</Link> */}
              </li>
              <li class="nav-item">
                {/* <Link class="nav-link" aria-current="page" to={"Upcoming festival"}>Upcoming festival</Link> */}
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div className=' row justify-content-center sticky-top position-sticky btum'>
        <button className='btn btn-warning col-2 mx-2'><Link class="nav-link" aria-current="page" to={"Upcoming festival"}>Upcoming festival</Link></button>
        <button className='btn btn-warning col-2 mx-2'><Link class="nav-link" aria-current="page" to={"Loard Krishna"}>Loard Krishna</Link></button>
        <button className='btn btn-warning col-2 mx-2'><Link class="nav-link" aria-current="page" to={"Latest car"}>latest car</Link></button>
        <button className='btn btn-warning col-2 mx-2'><Link class="nav-link active" aria-current="page" to={"latest Bikes"}>latest Bikes</Link></button>
      </div>


    </>
  )
}
