import React, { useState } from 'react';
import './form.css'

const initValue={
    f_name:'',
    l_name:'',
    phone:'',
    email:'',
    msg:''
}


const Enquiry = () => {


    const [info,setInfo]=useState(initValue);
    const [detail,setDetail]=useState([]);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setInfo({...info,[name]:value})
        console.log(e.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setDetail([...detail,info]);
        setInfo(initValue)
    }

  return (
    <div className='main-container'>
        <div className='form-container'>
            <h1>FORKLIST ENQUIRY</h1>
           
                <span className='line'></span>
                <form onSubmit={handleSubmit}>
                    <div className='grid'>
                        <input type="text" placeholder='Fisrt Name' value={info.f_name} name='f_name' onChange={handleChange}/>
                        <input type="text" placeholder='Last Name' value={info.l_name} name='l_name' onChange={handleChange}/>
                        <input type="text" placeholder='Phone Number' value={info.phone} name='phone' onChange={handleChange}/>
                        <input type="text" placeholder='Email Address' value={info.email} name='email' onChange={handleChange}/>
                    </div>
                    <textarea  id="" cols="30" rows="10" placeholder='How Can We Help You ?' value={info.msg} name='msg' onChange={handleChange}/>
                    <button>SEND MESSAGE</button>
                </form>
        </div>
    </div>
  )
}

export default Enquiry