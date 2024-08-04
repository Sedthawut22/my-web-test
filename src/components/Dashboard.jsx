import React, {useState, useEffect} from 'react'
import './dashboard.css'
import Card from './Card';
import Project from './Project';

function Dashboard() {
    const [cards, setCards] = useState([])

    const fetchData = () => {
        fetch('http://localhost:4000/cards')
            .then(res => res.json())
            .then(data =>{
                setCards(data);
            })
            .catch(e => console.log(e.message))
    }

    useEffect(() => {
        fetchData()
    },[])

  return (
    <section className="dashboard section">
        <div >
            <div className="col-lg-12">
                <div className="row">
                  {
                        cards && cards.length>0 &&
                        cards.map(card=><Card key={card._id}  card={card}/>)}
                  <div className='col-12'>
                        <Project />
                  </div>  
                </div>
            </div> 
            <div className="col-lg-3"></div>
        </div>
    </section>
  )
}

export default Dashboard