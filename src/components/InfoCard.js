import React from "react";

// function InfoCard() {
//   return (
//     <main class="page-content">
//       <div class="card">
//         <div class="content">
//           <h2 class="title">Discover Austin</h2>
//           <p class="copy"></p>
//           <button class="btn">View</button>
//         </div>
//       </div>
//     </main>
//   );
// }

function InfoCard() {
  return (
    //   TODO: optimize the code using for loop
    <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
      <div class="col">
        <div class="card h-100">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
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

export default InfoCard;
