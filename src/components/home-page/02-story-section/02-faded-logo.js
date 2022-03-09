import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as StoryStyle from './story.module.css';
import * as CoachingStyle from '../../agile-coaching/coaching.module.css';

const FadedLogoImg = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "faded-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={`${StoryStyle.fadedLogo} ${CoachingStyle.fadedLogo}`}
      alt='logo background'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default FadedLogoImg;
