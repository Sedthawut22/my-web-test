import React from 'react';
import './sideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
  return ( 
    <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
                </a>
            </li>

            {/*<li className="nav-item">
                <a 
                    className="nav-link collapsed"
                    data-bs-target="#components-nav"
                    data-bs-toggle="collapse"
                    href="#"
                >
                    <i className="bi bi-file-earmark-bar-graph"></i>
                    <span>Project Detail</span>
                </a>
            </li>*/}
        </ul>
    </aside>
  );
}

export default SideBar;