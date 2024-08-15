import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import {FontsGoogle} from"@fontsgoogle/"
import "./App.css";

function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <i className="fa-brands fa-github"></i>
          <span className="cli-style">CLI</span>
        </div>
        <ul>
        <li>Manual</li>
        <li>Release note</li>
      </ul>

        
      </nav>
      <div className="section-2">
        <div className="border">
          <div className="main-heading">
            <h1>
              Take GitHub to the <br />
              command line
            </h1>
          </div>
          <div className="para-1">
            <p>
              GitHub CLI brings GitHub to your terminal. Free and <br />
              open source.
            </p>
          </div>
          <div className="style-1">
            <button className="btn-1">
              <span className="style-2">Download for Windows</span>
            </button>
          </div>
          <div className="para-img">
            <p>View installation instructions</p>
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="main-panel">
        <div className="main">
          <ol className="option">
            <li>
              <span>$ gh release create</span>
            </li>
            <li>
              <span>$ gh repo view</span>
            </li>
            <li>
              <span>$ gh alias set</span>
            </li>
            <li>
              <span>$ gh issue list</span>
            </li>
          </ol>
          <ol className="option option-1">
            <li>Create a new release.</li>
            <li>View repository READMEs</li>
            <li>Create a shortcut for a gh command.</li>
            <li>View and filter a repository’s open issues.</li>
          </ol>
        </div>

        <div className="main-mid">
          <div className="mid-box">
            <span className="flex">
              <div className="circle">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
              <div className="pause">
                <i className="fa-solid fa-pause"></i>
              </div>
            </span>
            <div className="main-text-2">
              <div className="main-1">
                <p className="text-5">
                  $ gh pr checks <br />
                  All checks were successful <br />
                  1 failing, 3 successful, and 1 pending checks <br />- CodeQL
                  3m43s{" "}
                  <a href="https://github.com/cli/cli/runs/123">
                    https://github.com/cli/cli/runs/123
                  </a>
                  <br />✓ build (macos-latest) 4m18s{" "}
                  <a href="https://github.com/cli/cli/runs/123">
                    https://github.com/cli/cli/runs/123
                  </a>
                  <br />✓ build (ubuntu-latest) 1m23s{" "}
                  <a href="https://github.com/cli/cli/runs/123">
                    https://github.com/cli/cli/runs/123
                  </a>
                  <br />✓ build (windows-latest) 4m43s{" "}
                  <a href="https://github.com/cli/cli/runs/123">
                    https://github.com/cli/cli/runs/123
                  </a>
                  <br />× lint 47s{" "}
                  <a href="https://github.com/cli/cli/runs/123">
                    https://github.com/cli/cli/runs/123
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-heading">
          <h2>View All Github CLI Commands</h2>
        </div>
      </div>
      <div className="footer-2">
        <div className="heading-2">
          <h1>
            Goodbye, context switching. <br />
            Hello, terminal.
          </h1>
        </div>
      </div>
      <div className="footer-3">
        <div className="box-2">
          <h3>Your entire GitHub workflow</h3>
          <p className="para-9">
            Work with issues, pull requests, checks, <br />
            releases and more.
          </p>
          <p>View all GitHub CLI commands</p>
        </div>
        <div className="box-2">
          <h3>Script and customize</h3>
          <p className="para-9">
            Call the GitHub API to script almost any <br />
            action, and set a custom alias for any <br />
            command.
          </p>
          <p>Learn about alias API</p>
        </div>
        <div className="box-2">
          <h3>Enterprise-ready</h3>
          <p className="para-9">
            Connect to GitHub Enterprise Server in <br />
            addition to GitHub.com.
          </p>
          <p>Get set up for Enterprise</p>
        </div>
        <div className="box-2">
          <h3>We &lt;3 community</h3>
          <p className="para-9">
            GitHub CLI is open source and ready for your <br />
            contributions.
          </p>
          <p>Contribute to CLI</p>
        </div>
      </div>
      <div className="bk-img">
        <div className="box-7">
          <div className="text-para">
            <div className="headn">
              <h2>Try GitHub on the command line</h2>
              <p className="grey">
                GitHub CLI brings GitHub to your terminal. Free and open source.
              </p>
              <button>Download for Windows</button>
              <p className="blue-para">View installation instructions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-4">
        <div className="footer-logo">
          <img src="./img/GitHub-Logo-ee398b662d42.png" alt="GitHub Logo" />
        </div>
        <div className="head-2">
          <div className="footer-heading-1">
            <p className="bold">Product</p>
            <p>Product</p>
            <p>Feature</p>
            <p>Security</p>
            <p>Enterprise</p>
            <p>Customer stories</p>
            <p>Resources</p>
          </div>
          <div className="footer-heading-2">
            <p className="bold">Platform</p>
            <p>Developer API</p>
            <p>Partner</p>
            <p>Atom</p>
            <p>Electron</p>
            <p>GitHub Desktop</p>
          </div>
          <div className="footer-heading-3">
            <p className="bold">Support</p>
            <p>Help</p>
            <p>Community forum</p>
            <p>Professional support</p>
            <p>Learning lab</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
