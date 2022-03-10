import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as StackStyle from './tech-stack.module.css';

const GraphQLImg = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "graph_ql.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      class={` content-align-center ${StackStyle.stackImg}`}
      alt='GraphQL img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default GraphQLImg;
