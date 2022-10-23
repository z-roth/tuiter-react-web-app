import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <a className="list-group-item">
        <i class="bi bi-twitter"></i>
        <span class="d-none d-xl-inline"> Home</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "home" ? "active" : ""}`}
      >
        <i class="bi bi-house-fill"></i>
        <span class="d-none d-xl-inline"> Home</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "explore" ? "active" : ""}`}
      >
        <i class="bi bi-hash"></i>
        <span class="d-none d-xl-inline"> Explore</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "notifications" ? "active" : ""}`}
      >
        <i class="bi bi-bell-fill"></i>
        <span class="d-none d-xl-inline"> Notifications</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "messages" ? "active" : ""}`}
      >
        <i class="bi bi-envelope"></i>
        <span class="d-none d-xl-inline"> Messages</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "bookmarks" ? "active" : ""}`}
      >
        <i class="bi bi-bookmark-fill"></i>
        <span class="d-none d-xl-inline"> Bookmarks</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "lists" ? "active" : ""}`}
      >
        <i class="bi bi-list"></i>
        <span class="d-none d-xl-inline"> Lists</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "profile" ? "active" : ""}`}
      >
        <i class="bi bi-person-fill"></i>
        <span class="d-none d-xl-inline"> Profile</span>
      </a>
      <a
        className={`list-group-item
                   ${active === "more" ? "active" : ""}`}
      >
        <i class="bi bi-three-dots"></i>
        <span class="d-none d-xl-inline"> More</span>
      </a>
    </div>
  );
};
export default NavigationSidebar;
