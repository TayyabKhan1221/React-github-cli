import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import {FontsGoogle} from"@fontsgoogle/"
import "./App.css";

function App() {
  return (
    <>
      <div className="main1">
        <div className="header">
          <div className="header-first">
            <a href="#"></a>

            <span className="span">
              <a href="#">CLI</a>
            </span>
          </div>
          <div className="header-second">
            <ul className="header-second-ul">
              <li>
                <a href="#">Manual</a>
              </li>
              <li>
                <a href="#">Release notes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-section1">
          <div className="section1">
            <h1 className="section1-heading">
              Take GitHub to the command line
            </h1>
            <p className="section1-paragraph">
              GitHub CLI brings GitHub to your terminal. Free and open source.
            </p>
            <button className="section1-button">
              <a href="#">Download for Window</a>
            </button>
            <p className="section-par">View installation instructions →</p>
          </div>
        </div>
        <div className="main-section2">
          <div className="section2">
            <p className="aligncenter">View your pull requests’ checks.</p>
          </div>
          <div className="section-screenshot">
            <br />
            <br />
            <p>$ gh release create 1.0</p>
            <br />
            <h3>? Title GitHub CLI 1.0</h3>
            <br />
            <p className="screenshot-paragraph">? Release notes Write my own</p>
            <p className="screenshot-paragraph">? Is this a prerelease? No</p>
            <p className="screenshot-paragraph">? Submit? Publish release</p>
            <p className="screenshot-paragraph">
              https://github.com/octocat/.github/releases/tag/1.0
            </p>
          </div>
          <p className="section2-graph">View all GitHub CLI commands →</p>
        </div>
        <div className="main-section3">
          <h1 className="section3-heading1">
            Goodbye, context switching. Hello, terminal.
          </h1>
          <div className="column-section">
            <div className="section3">
              <h3 className="section3-heading">Your entire GitHub workflow</h3>
              <p className="section3-paragraph">
                Work with issues, pull requests, checks, releases and more.
              </p>
              <span className="section3-span">
                <a href="#">View all GitHub CLI commands →</a>
              </span>
            </div>
            <div className="section4">
              <h3 className="section3-heading">Script and customize</h3>
              <p className="section3-paragraph">
                Call the GitHub API to script almost any action, and set a
                custom alias for <br />
                any command.
              </p>
              <span className="section3-span">
                <a href="#">Learn about aliases and API →</a>
              </span>
            </div>
            <div className="section5">
              <h3 className="section3-heading">Enterprise-ready</h3>
              <p className="section3-paragraph">
                Connect to GitHub Enterprise Server in addition to GitHub.com.
              </p>
              <span className="section3-span">
                <a href="#">Get set up with Enterprise →</a>
              </span>
            </div>
            <div className="section6">
              <h3 className="section3-heading">We &lt;3 community </h3>
              <p className="section3-paragraph">
                GitHub CLI is open source and ready for your contributions.
              </p>
              <span className="section3-span">
                {" "}
                <a href="#">Contribute to CLI →</a>
              </span>
            </div>
          </div>
        </div>
        <div className="main-section4">
          <div className="section7">
            <h2 className="section7-heading">Try GitHub on the command line</h2>
            <p className="section7-paragraph">
              GitHub CLI brings GitHub to your terminal. Free and open source.
            </p>
            <button className="section7-button">
              <a href="#">Download for Window</a>
            </button>
            <p className="section7-paragraph2">
              View installation instructions →
            </p>
          </div>
        </div>
      </div>
      <div className="main-section5">
        <div className="section8">
          <h1 className="section8-heading">
            <a href="#">Github</a>
          </h1>
        </div>
        <div className="section9">
          <h4 className="main-section5-heading">Product</h4>
          <ul className="section9-ul">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Enterprise</a>
            </li>
            <li>
              <a href="#">Customer stories</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div className="section10">
          <h4 className="main-section5-heading">Platform</h4>
          <ul className="section10-ul">
            <li>
              <a href="#">Developer API</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Atom</a>
            </li>
            <li>
              <a href="#">Electron</a>
            </li>
            <li>
              <a href="#">GitHub Desktop</a>
            </li>
          </ul>
        </div>
        <div className="section11">
          <h4 className="main-section5-heading">Support</h4>
          <ul className="section11-ul">
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Community Forum</a>
            </li>
            <li>
              <a href="#">Professional Services</a>
            </li>
            <li>
              <a href="#">Learning Lab</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
            <li>
              <a href="#">Contact GitHub</a>
            </li>
          </ul>
        </div>
        <div className="section12">
          <h4 className="main-section5-heading">Company</h4>
          <ul className="section12-ul">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bootom-footer">
        <ul className="footer-left">
          <li>© 2024 GitHub, Inc.</li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
        <ul className="footer-right">
          <li>
            {" "}
            <a href="#">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
