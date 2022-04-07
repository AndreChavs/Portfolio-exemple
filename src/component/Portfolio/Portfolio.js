import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"
import Modal from "./Modal"

const Portfolio = () => {  
  const [modal, setModal] = React.useState(false)
  function handleModal() {
    setModal(!modal)
  }
  React.useEffect( () => {
    if (modal) {
      window.document.body.classList.add('active-modal')
    }else{
      window.document.body.classList.remove('active-modal')
    }
  },[modal])
  return <>
    <section className='Portfolio' id='portfolio'>
      <div className="container">
        <div className="heading">
          <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
          <h1>My Portfolio</h1>
        </div>
        <div className="grid">
        <Modal> 
          {Portfolio_data.map( (item,i) => {
            return <Card 
              key={i}
              handleModal={handleModal}
              image={item.image}
              totalLike={item.totalLike}
              title={item.title} 
              category={item.category}
              modal={modal}
              
            />
          })} 
        </Modal>
        </div>
      </div>
    </section>    
  </>
}

export default Portfolio;
