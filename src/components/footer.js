import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="site-footer" id="footer">
        <div className="container">
          <span>{this.props.siteName}</span>
          <ul className="social">
              <li>
                <a
                  className="fab fa-facebook-f"
                  href={this.props.aboutUs.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-twitter"
                  href={this.props.aboutUs.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-instagram"
                  href={this.props.aboutUs.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-linkedin-in"
                  href={this.props.aboutUs.linkdin}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}
