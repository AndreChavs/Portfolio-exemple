import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className='features' id='features'>
        <div className='container'>
          <div className='heading'>
            <h4>Recursos</h4>
            <h1>Do que você precisa ?</h1>
          </div>
          <div className='grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}            
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
