import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as HomeStyle from '../home.module.css';

const WorkImg1 = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "work-img-1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={HomeStyle.workImg1}
      alt='work img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default WorkImg1;
