import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as HomeStyle from '../home.module.css';

const BlueBkgdMobile = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "blue-bkgd-mobile.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={HomeStyle.blueBkgdMobile}
      alt='blue background'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default BlueBkgdMobile;