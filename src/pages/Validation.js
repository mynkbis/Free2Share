import React from 'react';

const Validation = (values) => {
  let errors={};

  if(!values.name){
      errors.name="Name is required" 
      }

    if(!values.mobile){
        errors.mobile="Mobile is required" 
          }

    if(!values.username){
        errors.username="Email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.username)){
        errors.username="Please Enter a valid email Address"
    }
    if(!values.password){
        errors.password="Password is mandatory"
    }
    else if(values.password.length<8){
        errors.password="Password must have atleast 8 Characters"
    }
     if(values.cPassword!==values.password){
        errors.cPassword="Password didn't matched"
    } else if(!values.cPassword){
        errors.cPassword="Please Provide the Password"
    }
    if(!values.check){
        errors.check="Accept the T&C"
    }
     return errors
};

export default Validation;
