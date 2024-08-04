import React, { useState, useEffect} from 'react'
import CardFilter from './CardFilter'
import ProjectTable from './ProjectTable'

function Project() {
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState('วันนี้')
    const handleFilterChange = filter => {
        setFilter(filter)
    }

    const fetchData = () => {
        fetch('http://localhost:4000/project')
        .then(res => res.json())
        .then(data => {
            setItems(data)
        })
        .catch(e => console.log(e.message))
    }

    useEffect(() => {
        fetchData()
    })
  return (
    <div className='card project overflow-auto'>
        <CardFilter filterChange={handleFilterChange} />

        <div className='card-body'>
            <h5 className='card-title'>
            รายชื่อโครงการ <span>| {filter}</span>
            </h5>
            <ProjectTable items={items} />
        </div>    
    </div>
  )
}

export default Project