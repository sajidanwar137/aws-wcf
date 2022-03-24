import React, { useState } from 'react';
import { subscriber } from "../../utility/apiService";
import {toast } from 'react-toastify';

const SubscriberForm = () => {
  const [inputEmail, setInputEmail] = useState('');
  //const [loader,showLoader, hideLoader] = useLoader();
  const handleInput = (e) =>{
    setInputEmail(e.target.value)
  }
  const [isError, setError] = useState(false);
  const [isErrorEmpty, setErrorEmpty] = useState(false);
  let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleSubmit=(e)=>{
    e.preventDefault()
    setError(false)
    setErrorEmpty(false)
    handleValidation()
    if(regEmail.test(inputEmail)){
      //showLoader();
      subscriber({email: inputEmail})
        .then((res) => {
          if(res.data.code === 200) {
            toast.success(res.data.message)
            setInputEmail('')
          }
          if(res.data.code === 409) {
            toast.error(res.data.message)
          }
          //hideLoader()
        })
        .catch((error) => {
            //hideLoader()
            console.error(error)
        })
    }
  } 
  const handleValidation=()=>{
    if(inputEmail===''){  
      setErrorEmpty(true)
    }else{
      if(!regEmail.test(inputEmail)){
        setError(true);
      }  
    }
  }
  return (
    <>
    {/* {loader} */}
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-4">
        <input type="text" value={inputEmail} onChange={(e)=>handleInput(e)} placeholder="Enter your e-mail here" className="form-control"/>
        {isError &&
          <p className="error">Please Enter Valid Email</p>
        } 
        {isErrorEmpty &&
          <p className="error">Please Enter Email</p>
        }
      </div>
      <div className="form-group mb-4">
        <button type="submit" className="button">Subscribe</button>
      </div>
    </form>
    </>
  );
};

export default SubscriberForm;
