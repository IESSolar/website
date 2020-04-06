import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class page extends Component {
  render() {
    const data = this.props.data.contentfulPages;

    return (
      <Layout>
        <SEO
          title={data.title}
          keywords={[`IES`, `Renewable`, `Solar`, `Energy`, `${data.title}`]}
        />
        <div className="site-container f">
          <div className="container">
            <Img
              className="feature-img"
              fixed={data.featureImage.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
            />
            <div className="details">
              <h1 className="title">{data.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query SinglePageQuery($slug: String!) {
    contentfulPages(slug: { eq: $slug }) {
      id
      title
      slug
      featureImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulSiteInformation {
      siteUrl
      twiteerHandle
    }
  }
`;
