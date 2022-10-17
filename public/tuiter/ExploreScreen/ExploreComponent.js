import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
          <div class="search d-flex gap-3 align-items-center mb-2">
            <div class="bg-white d-flex flex-row align-items-center border rounded-pill w-100 justify-content-start">
              <i class="fa fa-search ms-2"></i>
              <input type="text" placeholder="Search Twitter" 
              class="border-0 ms-3 w-75 shadow-none bg-white text-black">
              </input>
            </div>
            <i class="fa fa-cog text-primary fa-2x"></i>
          </div>
          <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-none d-md-block" href="entertainment.html"
                >Entertainment</a
              >
            </li>
          </ul>
          <!-- image with overlaid text -->
          <div class="card mt-2 mb-2">
            <div class="position-relative">
              <img
              class="card-img"
              src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
              />
              <h3 class="text-white position-absolute bottom-0 start-0 m-2">
              <b>SpaceX's Starship</b>
              </h3>
            </div>
          </div>
          ${PostSummaryList()}
    `;
};
export default ExploreComponent;
