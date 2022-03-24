import React, { useState } from "react"
import {toast } from 'react-toastify';
import "./style.scss";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.target)
    fetch("https://dallas15442.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then(res => {
        toast.success("Success!");
        setFormSubmitted(true)
        setTimeout(() => {
          setFormSubmitted(false)
        }, 5000)
      })
      .catch(error => {
        toast.success("Request failed!")
      })
  }

  return (
    <div className="active-campaign">
      <div className="container">
        <div className="active-campaign__wcf-title">
          <p className="heading2">Get exclusive early Beta access</p>
        </div>
        <form onSubmit={e => handleSubmit(e)} className="active-campaign__form">
          <input type="hidden" name="u" value="1" />
          <input type="hidden" name="f" value="1" />
          <input type="hidden" name="s" />
          <input type="hidden" name="c" value="0" />
          <input type="hidden" name="m" value="0" />
          <input type="hidden" name="act" value="sub" />
          <input type="hidden" name="v" value="2" />
          <div className="active-campaign__wcf-campaign">
            <div className="active-campaign__campaign-column">
              <div className="active-campaign__campaign-input">
                <input placeholder="Name*" type="text" name="fullname" required className="form-control"/>
              </div>
            </div>
            <div className="active-campaign__campaign-column">
              <div className="active-campaign__campaign-input">
                <input placeholder="Email*" className="form-control" type="email" name="email" required />
              </div>
            </div>
            <div className="active-campaign__campaign-column">
              <button className="button" type="submit">Submit</button>
            </div>
          </div>
          <div className="_form-thank-you" ></div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm