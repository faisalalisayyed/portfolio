import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Contact, BackToTopButton } from '@components';
import { Helmet } from 'react-helmet';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Faisal Ali Sayyed - Portfolio</title>
      <meta name="title" content="Faisal Ali Sayyed - Portfolio" />
      <meta name="description" content="I'm a dedicated Python developer with extensive project experience in frameworks like FastAPI, Flask, and Django, I enjoy watching anime, playing outdoor games, and mobile games." />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.c0deslayer.tech/" />
      <meta property="og:title" content="Faisal Ali Sayyed - Portfolio" />
      <meta property="og:description" content="I'm a dedicated Python developer with extensive project experience in frameworks like FastAPI, Flask, and Django, I enjoy watching anime, playing outdoor games, and mobile games." />
      <meta property="og:image" content="/og.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.c0deslayer.tech/" />
      <meta property="twitter:title" content="Faisal Ali Sayyed - Portfolio" />
      <meta property="twitter:description" content="I'm a dedicated Python developer with extensive project experience in frameworks like FastAPI, Flask, and Django, I enjoy watching anime, playing outdoor games, and mobile games." />
      <meta property="twitter:image" content="/og.png" />

    </Helmet>

    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <BackToTopButton />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
