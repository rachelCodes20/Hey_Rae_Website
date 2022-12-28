import './index.scss';
import { Routes } from 'react-router-dom'
import SideBar from '../Sidebar'

const Layout = () => {
    return (
      <div>
        <SideBar />
        <div class="App">
          {/* <ul class="navBar"> */}
          <ul >
            <a href="https://github.com/oslabs-beta/SvelteSlicer">
              <li class="navLi">
                <strong>Open Source Product </strong>
              </li>
            </a>
            <a href="https://github.com/rachelCodes20">
              <li >
                <strong>Portfolio</strong>
              </li>
            </a>
            <a href="https://svelte.dev/">
              <li>
                <strong>Favorite Frontend Framework?</strong>
              </li>
            </a>
            <a href="https://kit.svelte.dev/">
              <li class="navLi">
                <strong>New Tech I'm Excited About</strong>
              </li>
            </a>
          </ul>
        </div>
        <div >
          <h1 >R&nbsp;A&nbsp;C&nbsp;H&nbsp;E&nbsp;L</h1>
          <p>
            Software&nbsp;&nbsp; Engineer.&nbsp;&nbsp;&nbsp; Frontend
            &nbsp;&nbsp;Developer &nbsp;&nbsp;&nbsp;&
            &nbsp;&nbsp;&nbsp;Education &nbsp;&nbsp;Enthusiast.
          </p>
        </div>
        <div >
          <ul >
            <li>
              <h3>Education</h3>
            </li>
            <li>
              <h5>Codesmith 2022</h5>
            </li>
            <li>Software Engineering Immersive</li>
            <li>
              <h5>Long Island University 2016</h5>
            </li>
            <li>Elementary Education, M.S.</li>
            <li>
              <h5>SUNY Binghamton 2008</h5>
            </li>
            <li>Psychology, B.S.</li>
          </ul>
        </div>
        <div >
          <a href="hobbies.html">My Hobbies</a>
        </div>
      </div>
    );
   }


export default Layout