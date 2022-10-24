import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <a className="list-group-item" href="/">
        <i class="bi bi-twitter"></i>
      </a>
      <a
        className={`list-group-item
                   ${active === "home" ? "active" : ""}`}
        href="/home"
      >
        <i class="bi bi-house-fill"></i>
        <span class="d-none d-xl-inline"> Home</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "explore" ? "active" : ""}`}
        href="/explore"
      >
        <i class="bi bi-hash"></i>
        <span class="d-none d-xl-inline"> Explore</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "notifications" ? "active" : ""}`}
        href="/notifications"
      >
        <i class="bi bi-bell-fill"></i>
        <span class="d-none d-xl-inline"> Notifications</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "messages" ? "active" : ""}`}
        href="/messages"
      >
        <i class="bi bi-envelope-fill"></i>
        <span class="d-none d-xl-inline"> Messages</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "bookmarks" ? "active" : ""}`}
        href="/bookmarks"
      >
        <i class="bi bi-bookmark-fill"></i>
        <span class="d-none d-xl-inline"> Bookmarks</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "lists" ? "active" : ""}`}
        href="/lists"
      >
        <i class="bi bi-list"></i>
        <span class="d-none d-xl-inline"> Lists</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "profile" ? "active" : ""}`}
        href="/profile"
      >
        <i class="bi bi-person-fill"></i>
        <span class="d-none d-xl-inline"> Profile</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "more" ? "active" : ""}`}
        href="/more"
      >
        <i class="bi bi-three-dots"></i>
        <span class="d-none d-xl-inline"> More</span>
      </a>
    </div>
  );
};
export default NavigationSidebar;
