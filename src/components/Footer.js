import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
    <section className='footer-subscription'>
    <p className='footer-subscription-heading'>
        Join our newsletter
    </p>
    <p className='footer-subscription-text'>
    You can unsubscribe anytime.
    </p>
    <div className='input-areas'>
    <form>
    <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
    <Button buttonStyle='btn--outline'>Subscribe</Button>
    </form>
    </div>
    </section>
    <div className='footer-links'>
    <div className='footer-link-wrapper'>
    <div className='footer-link-items'>
    <h2> </h2>
    <Link to='/sign-up'></Link>
    </div>
    </div>
    <section className='social-media'>
    <div className='social-media-wrap'>
    <div className='footer-logo'>
    <Link to='/' className='social-logo'>
    XPLORE <i className='fa-solid fa-passport' />
    </Link>
    </div>
    <div className='social-icons'>
    <Link className='social-icon-link instagram'
    to='/'
    target='blank'
    aria-label='Instagram'>
    <i className='fab fa-instagram' />
    </Link>
    </div>
    </div>
    </section>
    </div>
    </div>
  );
}

export default Footer