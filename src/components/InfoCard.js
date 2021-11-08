import React from "react";
function InfoCard() {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
      <div class="col">
        <div class="card h-100">
          <img
            src="https://images.unsplash.com/photo-1588993608283-7f0eda4438be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

// function InfoCard() {
//   return (
//     <div class="container-1">
//       <div class="card">
//         <figure class="card__thumb">
//           <img
//             src="https://images.unsplash.com/photo-1591204954412-a30e9ae525ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
//             alt="Picture by Kyle Cottrell"
//             class="card__image"
//           ></img>
//           <figcaption class="card__caption">
//             <h2 class="card__title">
//               NASA Has Found Hundreds Of Potential New Planets
//             </h2>
//             <p class="card__snippet">
//               NASA released a list of 219 new “planet candidates” discovered by
//               the Kepler space telescope, 10 of which are similar to Earth’s
//               size and may be habitable by other life forms.
//             </p>
//             <a href="" class="card__button">
//               Read more
//             </a>
//           </figcaption>
//         </figure>
//       </div>

//       <div class="card">
//         <figure class="card__thumb">
//           <img
//             src="https://images.unsplash.com/photo-1591204954412-a30e9ae525ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
//             alt="Picture by Nathan Dumlao"
//             class="card__image"
//           ></img>
//           <figcaption class="card__caption">
//             <h2 class="card__title">This Is Your Body And Brain On Coffee</h2>
//             <p class="card__snippet">
//               Drinking more caffeine during the coronavirus lockdown? Here's how
//               it can affect you over time and advice on making it better for
//               you.
//             </p>
//             <a href="" class="card__button">
//               Read more
//             </a>
//           </figcaption>
//         </figure>
//       </div>

//       <div class="card">
//         <figure class="card__thumb">
//           <img
//             src="https://images.unsplash.com/photo-1591204954412-a30e9ae525ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
//             alt="Picture by Daniel Lincoln"
//             class="card__image"
//           ></img>
//           <figcaption class="card__caption">
//             <h2 class="card__title">Why You Should Bring Your Dog To Work</h2>
//             <p class="card__snippet">
//               On Friday, offices around the country celebrated the 15th annual
//               Take Your Dog to Work Day. Though the event's primary goal is to
//               raise awareness for pet adoption, the unanticipated impact may be
//               a slightly more relaxing work environment for any office choosing
//               to participate.
//             </p>
//             <a href="" class="card__button">
//               Read more
//             </a>
//           </figcaption>
//         </figure>
//       </div>
//     </div>
//   );
// }

export default InfoCard;
