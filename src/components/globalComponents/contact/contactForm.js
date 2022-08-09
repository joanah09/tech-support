import { useOnChange, useHandleSubmit, useFormData} from '../../../context/ContactFormInfo'

function ContactForm() {
    const handleSubmit = useHandleSubmit()
    const handleChange = useOnChange()
    const formData = useFormData()
    
    return (
        <form className="row position-relative" onSubmit={handleSubmit}>
            <section className="col-xl-6 col-md-12 col-sm-12 col-12 pt-5 pb-2 px-2 mb-3">        
              <div className="form-group py-2">
                <label>Your Name</label>
                <input type="text" className="form-control" name="name" onChange={handleChange} value={formData.name} />
              </div>
              <div className="form-group py-2">
                <label>Your Email</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} value={formData.email} />
              </div>
              <div className="form-group py-2">
                <label>Contact Number</label>
                <input type="number" className="form-control" name="number" onChange={handleChange} value={formData.number} />
              </div>
            </section>
            <section className="col-xl-6 col-md-12 col-sm-12 col-12 pt-md-5 pt-sm-0 pb-2 px-2">
              <label>Message</label>
               <textarea className="form-control" rows="5" name="message" required onChange={handleChange} value={formData.message} />
            </section>
          <button className="btn btn-primary mb-5">SEND</button>
      </form>

    )
}

export default ContactForm