import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const mappedData = data.map(x => {
        console.log(x);
        return <Card key={x.id} item={x} />
    }); 
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <Card img='katie-zaferes.png' rating='5.0' count={6} location='USA' title='Life Lessons with Katie Zaferes' price={136}/> */}
            <div className="cards-list">
                {mappedData}
            </div>
        </div>
    )
}

// id={x.id} title={x.title} description={x.description} price={x.price} img={x.coverImg} rating={x.stats.rating} count={x.stats.reviewCount} location={x.location} openSpots={x.openSpots}