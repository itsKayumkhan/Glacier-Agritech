const greenhouseItems = [
  {
    title: "Greenhouse Structure",
    imgSrc: "assets/images/1.jpg",
  },
  {
    title: "Greenhouse Curtain System",
    imgSrc: "assets/images/2.jpg",
  },
  {
    title: "Greenhouse Ventilation System",
    imgSrc: "assets/images/3.jpg",
  },
  {
    title: "Greenhouse Irrigation",
    imgSrc: "assets/images/4.jpg",
  },
  { title: "Ground Cover", imgSrc: "assets/images/5.webp" },
  {
    title: "Greenhouse Opening Insect Netting",
    imgSrc: "assets/images/6.webp",
  },
  { title: "Greenhouse Benches", imgSrc: "assets/images/7.webp" },
  {
    title: "Greenhouse Accessories",
    imgSrc: "assets/images/8.webp",
  },
  {
    title: "Gardening Suppliers",
    imgSrc: "assets/images/9.webp",
  },
];

// Generate HTML dynamically
const exploreContainer = document.getElementById("exploreContainer");
greenhouseItems.map((item) => {
  const exploreItem = `
  <div class=" col-md-4 col-sm-6">
     	<div class="single-explore-item  ">
								<div class="single-explore-img">
									<img src="${item.imgSrc}" alt="explore image">
								</div>
								<div class="single-explore-txt bg-theme-1">
									<h2><a href="#">${item.title}</a></h2>

								</div>
							</div></div>
    `;
  exploreContainer.innerHTML += exploreItem;
});
