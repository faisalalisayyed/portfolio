import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
// import kwesforms from 'kwesforms';
import emailjs from '@emailjs/browser';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 20px;
  }

  .input-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    width: 100%;
  }

  .input-field {
    color: #64ffda;
    flex: 1;
    border: 1px solid;
    transition: all 0.3s;
    border-radius: 0.5rem;
    padding: 0.75rem;
    background-color: transparent;
    border-color: #64ffda;
  }

  .textarea-field {
    color: #64ffda;
    background-color: transparent;
    height: 16rem;
    border: 1px solid;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 100%;
    flex: auto;
    border-color: #64ffda;
    resize: none;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.GATSBY_EMAILJS_SERVICE_ID,
      process.env.GATSBY_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.GATSBY_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      e.target.reset(); // Clear form fields
    }, 
    (error) => {
      console.error(error);
    });
  }

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I’m currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi.
      </p>

      <form className="form-container" onSubmit={sendEmail}>
        <div className="input-group">
          <input type="text" placeholder="Please Enter Your Full Name" className="input-field" name="to_name" required />
          <input type="email" placeholder="Please Enter Your Email" className="input-field" name="from_name" required />
        </div>
        <textarea placeholder="Enter Your Message" className="textarea-field" required autoComplete="false" name="message"></textarea>
        <button className="email-link">Connect Now!!</button>
      </form>

    </StyledContactSection>
  );
};

export default Contact;
