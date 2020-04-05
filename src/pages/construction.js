import React, { Component } from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class ConstructionPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <Layout>
        <SEO
          title="Construction"
          keywords={[`IES`, `Renewable`, `Solar`, `Energy`, `Construction`]}
        />
        <div className="site-container blogs-page" id="Construcion">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Construcion</h1>
            </div>
            {/* <ul className="memberships-page-list">
              {data.contentfulMemberships.photos.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div
                      className="inner"
                      onClick={() => {
                        this.setState({
                          activePopup: true,
                          selectedItem: index
                        });
                      }}
                    >
                      <Img
                        fixed={item.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    </div>
                  </li>
                );
              })}
            </ul> */}
          </div>
        </div>
      </Layout>
    );
  }
}
export const pageQuery = graphql`
  query ConstructionPageQuery {
    contentfulMemberships {
      photos {
        file {
          url
        }
        fluid(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }
`;
