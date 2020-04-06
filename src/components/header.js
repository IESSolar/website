import { Link } from "gatsby";
import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                {data.contentfulSiteInformation.logo.file.url ? (
                  <img src={data.contentfulSiteInformation.logo.file.url} alt="logo" />
                ) : (
                  <span>{data.contentfulSiteInformation.siteName}</span>
                )}
              </Link>
            </div>
            <div
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu
                });
              }}
            >
              <span></span>
            </div>
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {data.contentfulSiteInformation.menus.map((menu, index) => {
                    let page = data.allContentfulPages.edges.find(item => item.node.title === menu);
                    if(page) {
                      return (
                        <li key={index}>
                          <Link to={page.node.slug}>{page.node.title}</Link>
                        </li>
                      )}
                  })}
                </ul>
              </div>
          </div>
        </div>
      </header>
    );
  }
}
