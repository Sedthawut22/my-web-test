import React from 'react';
import './logo.css';
import logo from '../../src/images/Main_Headder4.png'

function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };
    
  return ( <div className="d-flex align-itens-center justify-content-between">
    <i
        className="bi bi-list toggle-siderbar-btn"
        onClick={handleToggleSideBar}
    ></i>
    <a href="/" className="logo a-flex align-items-center">
        <img src={logo} alt="" className='logo'/>
        {/*<span className="d-none d-lg-block">ระบบบริหารและติดตามโครงการจัดซื้อจัดจ้างของหน่วยงานรัฐฯ</span>*/}
    </a>
  </div>
  );
}

export default Logo