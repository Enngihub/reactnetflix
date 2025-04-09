import React from "react";
import { Link } from "react-router-dom";
import Main from "./Main";

const NavBar = function () {
  return (
    <div className="container d-flex justify-content-around bg-dark">
      <div className="row w-100">
        <div className="col-sm-12 col-md-8">
          <nav className="navbar navbar-expand-lg bg-dark">
            <img
              className="w-25"
              src="/assets/netflix_logo.png"
              alt="Netflix logo"
            />
            <div className="container-fluid">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/tvshow">
                      TV Shows
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">
                      Movies
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">
                      Recently Added
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled text-light"
                      aria-disabled="true"
                    >
                      My List
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="col-sm-12 col-md-4">
          <nav className="navbar bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </a>

              <p className="mt-3 text-light">KIDS</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>

              <img
                style={{ width: "50px" }}
                src="/assets/kids_icon.png"
                alt="Kids Icon"
              />

              <div
                className="collapse"
                id="navbarToggleExternalContent"
                data-bs-theme="dark"
              >
                <div className="bg-dark p-4">
                  <h5 className="text-body-emphasis h4">Profile</h5>
                  <a
                    className="text-light text-decoration-none"
                    href="./profilo.html"
                    aria-placeholder="Setting"
                  >
                    Setting
                  </a>
                </div>
              </div>
              <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </button>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
