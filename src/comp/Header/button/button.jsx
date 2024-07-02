import React from 'react'
import './button.css'
import { FaUserCircle } from "react-icons/fa";
function Button() {
  return (
    <button className='button_head'>
    <FaUserCircle  size={50} style={{color:'#1995AD'}}/>
    <div className='hover_head'>
    <div className='contant_button'>
    <div class="login-card">
  <button class="normal-signin">Sign in</button>
  <div class="instruction-text">Don't have an Account?</div>
  <button class="create-account">Create Account</button>
  {/* <div class="instruction-text">Or sign in with</div> */}
  </div>
    </div>
    </div>
</button>
  )
}

export default Button