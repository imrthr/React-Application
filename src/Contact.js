import React, { Component, useState } from 'react';

const Contact = ()=> {
    const [data,setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        mssg:'',
    });
    
const InputEvent =(event)=>{
    const {name, value} =event.target;

    setData((preVal)=>{
        return{
            ... preVal,
            [name]:value,
        }
    })
};

const formSubmit =(e)=>{
    e.preventDefault();
    alert(`${data.fullname}`)
};

    return (
      <>
      <div className='my-5'>
          <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
          <div className='row'>
              <div className='col-md-6 col-10 max-auto'>
              <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className='form-label'>
                            Full Name
                        </label>
                        <input type="text" className="form-control" 
                        id="exampleFormControlInput1" 
                        name='fullname'
                        value={data.fullname}
                        onChange={InputEvent}
                        placeholder="Enter your name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className='form-label'>
                            Phone</label>
                        <input type="number" className="form-control" 
                        id="exampleFormControlInput1" 
                        name='phone'
                        value={data.phone}
                        onChange={InputEvent}
                        placeholder="Mobile number"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className='form-label'>
                            Email</label>
                        <input type="email" className="form-control" 
                        id="exampleFormControlInput1" 
                        name='email'
                        value={data.email}
                        onChange={InputEvent}
                        placeholder="Enter your email id"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className='form-label'>
                            Massage</label>
                        <textarea 
                        className='form-control'
                        id='exampleFormControlTextarea1'
                        name='mssg'
                        value={data.mssg}
                        onChange={InputEvent}
                        rows='3'
                        ></textarea>
                    </div>
                    <div className='col-12'>
                        <button className='btn btn-outline-primary' type='submit'>
                            Submit form
                        </button>
                    </div>
                    </form>
              </div>
          </div>
      </div>
      </>
    );
  }
  export default Contact;