import React, { useState } from 'react'
import SuccessComp from './SuccessComp'

export default function Form() {
    const [formData, setFormData] = useState({firstName: "", lastName: "",email: "", queryType: "", checkbox: false, message: ""})
    const [errors, setErrors] = useState({firstName: "", lastName: "",email: "", queryType: "", checkbox: "", message: ""})
    const [submit, setSubmit] = useState(false)
    const warnText = {
      field: "This field is required",
      mail: "Please enter a valid email address",
      select: "Please select a query type",
      submit: "To submit this form, please consent to being contacted"
    };
    const handleChange = (e)=>{
      const {name, value} = e.target
      setFormData({
        ...formData,
        [name]: value
      })
    }
    const submitHandler = (e)=>{
      e.preventDefault()
      let newErrors = {firstName: "", lastName: "", email:"", queryType: "", message: ""}
      let isValid = true

      if(!formData.firstName.trim()) {
        newErrors.firstName = warnText.field
        isValid = false
      }
      if(!formData.lastName.trim()) {
        newErrors.lastName = warnText.field
        isValid = false
      }
      if(!Boolean(formData.queryType)){
        newErrors.queryType = warnText.select
        isValid = false
      }
      if(!formData.checkbox){
        newErrors.checkbox = warnText.submit
        isValid = false
      }
      if(!formData.message.trim()){
        newErrors.message = warnText.field
        isValid = false
      }
      if(!formData.email.trim()){
        newErrors.email = warnText.mail
        isValid = false
      }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = warnText.mail;
        isValid = false;
      }

      setErrors(newErrors)
      if(isValid){
             // Submit the form if valid
      console.log("Form submitted:", formData);
      // alert("Form submitted successfully!");
      setSubmit(true)
      
      }
    }
    console.log(formData.message)
    const checkboxHandler = (e)=>{
      const status = e.target.checked
      if(status){
        setFormData(prev=>({
          ...prev,
          checkbox: true
        }))
      }else {
        setFormData(prev=>({
          ...prev,
          checkbox: false
        }))
      }
    }
    //main 
  return (
    <form onSubmit={submitHandler} noValidate>
      <h1>Contact Us </h1>
      <div className="input-text">
        <label htmlFor="Fname" className='required'>First Name  </label>
        <input
          className="F-name-input"
          type="text"
          id="Fname"
          name='firstName'
          required
          value={formData.firstName}
          onChange={handleChange}
        />
        {<span className='Fname-warn'>{errors.firstName}</span> }
        
        <label htmlFor="Lname" className='required'>Last Name  </label>
        <input
          className="L-name-input"
          type="text"
          id="Lname"
          name='lastName'
          required
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span className="Lname-warn" >{errors.lastName}</span> }
        <label htmlFor="mail" className='required'>Email Address </label>
        <input name='email' onChange={handleChange} value={formData.email} type="email" id="mail" required />
        { <span className="email-warn" >{errors.email}</span> }
      </div>

      <fieldset aria-describedby="query-error">
        <legend className='required'>Query Type</legend>
        <div>
        <label>
          <input name="queryType" onChange={handleChange} id='general-enquiry' type="radio" value="General_Enquiry" />
          General Enquiry
        </label>
        <label>
          <input name="queryType" onChange={handleChange} id='support-enquiry' type="radio" value="Support_Enquiry"  />
          Support
        </label> </div>
        { <span role="alert" aria-live='polite' id='query-error'>{errors.queryType}</span> }
      </fieldset>

      <label className="msg required" htmlFor="msg">
        Message
      </label>
      <br />
      <textarea required name="message" onChange={handleChange} id="msg" rows="10"></textarea>
      {<span>{errors.message}</span>}
      <label className="box required" >
        <input type="checkbox" value="contacted" onChange={checkboxHandler} />I consent to being contacted
        by the team 
      {<span className='checkbox-warn'>{errors.checkbox}</span>}
      </label>
      {submit ? <SuccessComp /> : null }
      <input type="submit" value="Submit" />
    </form>
  );
}
