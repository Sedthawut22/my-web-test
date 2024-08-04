import React from 'react'
import profileImg from '../images/user.jpg'

function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-3">
        <a
            className="nav-link nav-profile d-flex align-itmes-center pe-0"
            href="#"
            data-bs-toggle="dropdown"
        >
            <img src={profileImg} alt="Profile" className="rounded-circle" />
            <span className="d-none d-md-block dropdown-toggle ps-2">Sedthawut</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
                <h6>Sedthawut</h6>
                <span>UX/UI Design</span>
            </li>
            <li>
                <hr className="dropdown-divider"/>
            </li>

            <li>
                <a
                    className="dropdown-item d-flex align-items-center"
                    href="user-profike.html"
                >
                    <i className="bi bi-person"></i>
                    <span>ข้อมูลส่วนตัว</span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider"/>
            </li>

            <li>
                <a
                    className="dropdown-item d-flex align-item-center"
                    href="users-profile.html"
                >
                    <i className="bi bi-gear"></i>
                    <span>ตั้งค่า</span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider"/>
            </li>

            <li>
                <a className="dropdown-item d-flex align-item-center" href="#">
                    <i className="bi bi-box-arrow-right"></i>
                    <span>ออกจากระบบ</span>
                </a>
            </li>
        </ul>
    </li>
  )
}

export default NavAvatar