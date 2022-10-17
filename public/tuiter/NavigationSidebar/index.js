const NavigationSidebar = () => {
  return `
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i>
      </a>
      <!-- continue rest of list, e.g., Home, Explore, Notifications,  Messages, etc. -->
      <a class="list-group-item list-group-item-action" href="../home.html">
        <i class="fa fa-home"></i><span class="d-none d-xl-inline"> Home</span>
      </a>
      <a class="list-group-item list-group-item-action active" href="index.html">
        <i class="fa fa-hashtag"></i><span class="d-none d-xl-inline"> Explore</span>
      </a> 
      <a class="list-group-item list-group-item-action" href="../notifications.html">
        <i class="fa fa-bell"></i><span class="d-none d-xl-inline"> Notifications</span>
      </a>
      <a class="list-group-item list-group-item-action" href="../messages.html">
        <i class="fa fa-envelope"></i><span class="d-none d-xl-inline"> Messages</span>
      </a>
      <a class="list-group-item list-group-item-action" href="../bookmarks/index.html">
        <i class="fa fa-bookmark"></i><span class="d-none d-xl-inline"> Bookmarks</span>
      </a>
      <a class="list-group-item list-group-item-action" href="../lists.html">
        <i class="fa fa-list"></i><span class="d-none d-xl-inline"> Lists</span>
      </a>
      <a class="list-group-item list-group-item-action" href="../profile.html">
        <i class="fa fa-user"></i><span class="d-none d-xl-inline"> Profile</span>
      </a>
      <a class="list-group-item list-group-item-action position-relative" href="../more.html">
        <span class="fa-stack fa-sm start-0 position-absolute ms-1">
          <i class="fas fa-circle fa-stack-1x"></i>
          <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse fa-xs"></i>
        </span>
        <span class="d-none d-xl-inline ms-3"> More</span><span>&nbsp;</span>
      </a>      
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `;
};
export default NavigationSidebar;
