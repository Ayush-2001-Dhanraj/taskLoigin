import React from 'react'
import './LoginCard.css'

const Logincard = () => {
  return (
    <div className='login'>
      <div className='head'>
        <img
          className='amazonLogo'
          src='/assets/amazon.png'
          alt='amazon logo'
        />
      </div>
      <div className='body'>
        <h4 className='heading'>Login</h4>
        <img className='treeImg' src='/assets/tree1.png' alt='tree' />
        <form>
          <div className='inputContainer'>
            <input type='text' placeholder='Email' className='inputs' />
            <label className='cautionSection'>
              <img src='/assets/caution.svg' alt='caution' />
              The email field is required
            </label>
          </div>

          <div className='inputContainer'>
            <input type='text' placeholder='Password' className='inputs' />
          </div>
          <div className='d-grid gap-2 pill'>
            <button className='btn btn-lg text-white'>Sign In</button>
          </div>
          <div className='otherNav'>
            <p>
              <strong>Forget Password?</strong>
            </p>
            <p>New User? Sign Up</p>
          </div>
        </form>
        <p>
          <strong>or</strong>
        </p>
        <div className='fullBtn'>
          <img
            className='socialLogo'
            src='/assets/google.png'
            alt='social
'
          />
          <p>continue with google</p>
        </div>

        <div className='fullBtn'>
          <img className='socialLogo' src='/assets/fb.png' alt='social' />
          <p>continue with Facebook</p>
        </div>
      </div>
    </div>
  )
}

export default Logincard
