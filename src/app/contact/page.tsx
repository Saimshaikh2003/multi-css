import React from 'react'


const contact = () => {
  return (
    <div>
        <section className="contact-form">
          <h2 className="fade-in">Contact Us</h2>
          <form>
          
            <input type="text" placeholder="Full Name" required  />
            <input type="email" placeholder="Email address" required  />
            <input type="text"  placeholder="Phone Number" required/>
            <input type="Date"  placeholder="Today Date" required/>
            <input type="Time"  placeholder="Today Time" required/>
            <textarea placeholder="Your Message" rows={5}></textarea>
             <button type="submit">Send Message</button>

            </form>
        </section>
    </div>
  )
}

export default contact