import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return `
  <ul class="list-group">
    <b class="list-group-item">Who to follow</b>
    ${who.map((user) => WhoToFollowListItem(user)).join("")}
  </ul>
  `;
};

export default WhoToFollowList;
