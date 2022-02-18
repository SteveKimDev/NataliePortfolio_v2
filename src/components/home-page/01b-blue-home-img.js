import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as HomeStyle from './home.module.css';

const BlueHomeImg = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "blue-home.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={HomeStyle.blueHomeImg}
      alt='blue background'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default BlueHomeImg;
