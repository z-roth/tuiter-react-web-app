import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = ({ active }) => {
  return (
    <div className="list-group">
      <a className="list-group-item" href="/">
        <i className="bi bi-twitter"></i>
      </a>
      <Link
        className={`list-group-item
                   ${active === "home" ? "active" : ""}`}
        to="/tuiter"
      >
        <i className="bi bi-house"></i>
        <span className="d-none d-xl-inline"> Home</span>
      </Link>
      <Link
        className={`list-group-item
                   ${active === "explore" ? "active" : ""}`}
        to="/explore"
      >
        <i className="bi bi-hash"></i>
        <span className="d-none d-xl-inline"> Explore</span>
      </Link>
      <Link
        className={`list-group-item ${active === "labs" ? "active" : ""}`}
        to="/"
      >
        <i className="bi bi-asterisk"></i>
        <span className="d-none d-xl-inline"> Labs</span>
      </Link>
      <a
        className={`list-group-item
                   ${active === "notifications" ? "active" : ""}`}
        href="/notifications"
      >
        <i className="bi bi-bell"></i>
        <span className="d-none d-xl-inline"> Notifications</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "messages" ? "active" : ""}`}
        href="/messages"
      >
        <i className="bi bi-envelope"></i>
        <span className="d-none d-xl-inline"> Messages</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "bookmarks" ? "active" : ""}`}
        href="/bookmarks"
      >
        <i className="bi bi-bookmark"></i>
        <span className="d-none d-xl-inline"> Bookmarks</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "lists" ? "active" : ""}`}
        href="/lists"
      >
        <i className="bi bi-list"></i>
        <span className="d-none d-xl-inline"> Lists</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "profile" ? "active" : ""}`}
        href="/profile"
      >
        <i className="bi bi-person"></i>
        <span className="d-none d-xl-inline"> Profile</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "more" ? "active" : ""}`}
        href="/more"
      >
        <i className="bi bi-three-dots"></i>
        <span className="d-none d-xl-inline"> More</span>
      </a>
    </div>
  );
};
export default NavigationSidebar;
