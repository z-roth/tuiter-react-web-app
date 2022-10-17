const WhoToFollowListItem = (who) => {
  return `<a
  class="list-group-item list-group-item-action d-flex position-relative"
>
  <img
    class="rounded-circle"
    src="${who.avatarIcon}"
    width="48px"
    height="48px"
  />
  <div class="col ms-3">
    <div><b>${who.userName} </b><i class="fa fa-check-circle"></i></div>
    @${who.handle}
  </div>
  <div>
    <button class="btn btn-primary rounded-pill" type="button">
      Follow
    </button>
  </div>
</a>`;
};

export default WhoToFollowListItem;
