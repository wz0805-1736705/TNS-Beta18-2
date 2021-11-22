import React from "react";

function Footer() {
  return (
    <div class="my-5" style={{ marginLeft: "5vw" }}>
      <footer class="text-center text-grey">
        <div class="p-4 pb-0">
          <section class="mb-4">
            <a className="btn btn-floating m-1" href="#">
              <img
                className="logo"
                src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png"
              />
            </a>
            {/* TWITTER */}
            <a className="btn btn-floating m-1" href="#">
              <img
                className="logo"
                src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png"
              />
            </a>
            {/* INS */}
            <a className="btn btn-floating m-1" href="#">
              <img
                className="logo"
                src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png"
              />
            </a>
          </section>
        </div>

        <div class="text-center p-3">
          © 2021 Copyright:
          <a> The Neighborhood Score </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
