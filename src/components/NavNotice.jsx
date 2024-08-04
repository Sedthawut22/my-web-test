import React from 'react'

function NavNotice() {
  return (
    <li className="nav-item dropdown">
        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-danger badge-number">4</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
                คุณมีการแจ้งเตือนใหม่ 4 รายการ
                <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      ดูทั้งหมด
                    </span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li> 

            <li className="notifications-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h5>นัดหมายตรวจรับที่ใกล้จะถึง</h5>
                    <p1>ปรับปรุงอาคารและสิ่งก่อสร้างประกอบ</p1>
                    <p>30 นาที ที่ผ่านมา</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notifications-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h5>นัดหมายตรวจรับที่ใกล้จะถึง</h5>
                    <p1>ค่าจ้างที่ปรึกษา</p1>
                    <p>30 นาที ที่ผ่านมา</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notifications-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h5>นัดหมายตรวจรับที่ใกล้จะถึง</h5>
                    <p1>ปรับปรุงถนน</p1>
                    <p>30 นาที ที่ผ่านมา</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider"/>
            </li>

            <li className="notifications-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h5>นัดหมายตรวจรับที่ใกล้จะถึง</h5>
                    <p1>เสริมผิวลาดยางแอสฟัลต์คอนกรีต</p1>
                    <p>30 นาที ที่ผ่านมา</p>
                </div>
            </li>
        </ul>
    </li>
  )
}

export default NavNotice