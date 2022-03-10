import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as StackStyle from './tech-stack.module.css';

const StripeImg = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "stripe.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      class={` content-align-center ${StackStyle.stripeImg}`}
      alt='Stripe img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default StripeImg;
