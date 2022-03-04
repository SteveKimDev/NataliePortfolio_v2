import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as ExpStyle from './experience.module.css';

const ExpImg5 = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "exp-img-5.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={ExpStyle.expImg5}
      alt='experience img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default ExpImg5;
