import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
${({ theme }) => theme.mixins.smallButton};
background-color: #0a192f;
cursor: pointer;
z-index: 999;
border-radius: 50%;
position: fixed;
right: 40px;
bottom: 20px;
`;

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
    return () => window.removeEventListener('scroll', () => { });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledButton onClick={scrollToTop} className='email-link' style={{ display: showButton ? 'block' : 'none' }}>
      ↑
    </StyledButton>
  );
};


export default BackToTopButton;