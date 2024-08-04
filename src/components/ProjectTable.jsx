import React from 'react'

function ProjectTable({items}) {
    const handleStatus = status => {
        switch (status) {
           case 'Approved':
            return 'success';
            break;
           case 'ร่างประกาศจัดซื้อจัดจ้าง':
                return 'warning';
                break;
           case 'ล่าช้า':
                return 'danger';
                break;
            default:
                return 'success';
        }
    }

  return (
    <table className='table table-borderless datatable'>
        <thead className='table-light'>
            <tr>
                <th scope='col' >ลำดับที่</th>
                <th scope='col' >ชื่อโครงการ</th>
                <th scope='col' >บริษัท</th>
                <th scope='col' >กรรมการ</th>
                <th scope='col' >วันที่เริ่มต้น</th>
                <th scope='col' >วันที่สิ้นสุด</th>
                <th scope='col' >สถานะ</th>
            </tr>
        </thead>
        <tbody>
            {items &&
                items.length > 0 &&
                items.map(item => (
                    <tr key={item._id}>
                        <td>{item.no}</td>
                        <td>{item.name}</td>
                        <td>{item.customer}</td>
                        <td>{item.director}</td>
                        <td>{item.datestart}</td>
                        <td>{item.dateend}</td>
                        <td>
                            <span className={`badge bg-${handleStatus(item.status)}`}>
                                {item.status}
                            </span>
                        </td>
                    </tr>
                ))}
        </tbody>
    </table>
  )
}

export default ProjectTable