import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  function inputEvent({target}) {
    const {name, value} = target
    setData( (preVal) => {
      console.log({...preVal})
      return {...preVal, [name]: value}
    })
  }
  function handleSubmit(event) {
    event.preventDefault()
    alert(`
    My name is ${data.fullname}.
    My phone number is ${data.phone}.
    My email address is ${data.email}.
    and, this my message: ${data.message}
    `)
  }
  
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container'>

          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content dflex'>

            <div className='left'>
              <div className='box'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Nevine Acotanza</h1>
                  <p>Chief Operating Officer</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +01234567890</p>
                  <p>Email: admin@example.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right'>
              <form onSubmit={handleSubmit}>
                <div className='dflex'>
                  <div className='input'>                    
                    <label>Your Name</label>                    
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input'>
                  <label>Number phone</label>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
              <div className='dflex'>
                <div className='input'>
                  <label>Email</label>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>                
                <div className='input'>
                  <label>Subject</label>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
              </div>
                <div className='input'>
                  <label>YOUR MESSAGE </label>
                  <textarea rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
