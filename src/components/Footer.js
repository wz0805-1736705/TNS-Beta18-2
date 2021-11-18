import React from "react";

function Footer() {
  return (
    <div className="container my-5">
      <footer>
        <div className="social">
          {/* FB */}
          <a className="btn  btn-floating m-1" href="#">
            <img
              className="logo"
              src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png"
            />
          </a>
          {/* TWITTER */}
          <a className="btn  btn-floating m-1" href="#">
            <img
              className="logo"
              src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png"
            />
          </a>
          {/* INS */}
          <a className="btn  btn-floating m-1" href="#">
            <img
              className="logo"
              src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png"
            />
          </a>
        </div>
        <div className="row">
          <p className="col-md-4">
            Empowering you to live in a community you love.
          </p>
          <p className="col-md-4">© 2021 The Neighborhood Score</p>
          {/* <img
            alt=""
            src="Copy of TNS-logo-dark.png"
            width="125"
            height="35"
            className=""
          /> */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
