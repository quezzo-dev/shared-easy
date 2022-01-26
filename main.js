const citymap = [
  {
    center: [41.878, -87.629],
    population: 2714856,
  },
  {
    center: [40.714, -74.005],
    population: 8405837,
  },
  {
    center: [34.052, -118.243],
    population: 3857799,
  },
  {
    center: [49.25, -123.1],
    population: 603502,
  },
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 40.929077, lng: -98.368149 },
  });

  const icon = "/images/map/mapMarker.svg";

  // setMarkers(map);
  citymap.forEach((el) => {
    myLatLng = Number(el.center);
    console.log(el.center[0]);

    new google.maps.Marker({
      position: { lat: Number(el.center[0]), lng: Number(el.center[1]) },
      map,
      icon: icon,
      title: "Hello World!",
    });
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  // for (const city in citymap) {
  //   // Add the circle for this city to the map.
  //   const cityCircle = new google.maps.Circle({
  //     background: "#fff",
  //     //   width: 5000,
  //     //   height: 5000,
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     //   fillColor: "#FF0000",
  //     fillOpacity: 0.35,
  //     map,
  //     center: citymap[city].center,
  //   });
  // }
}

const button = document.querySelector(".map__button");
const arrow = document.querySelector(".map__button-svg");
const map = document.querySelector(".map__wrapper");
const mapText = document.querySelector(".map__button-text");

button.addEventListener("click", () => {
  map.classList.toggle("active");
  arrow.classList.toggle("rotate");
  if (map.classList.contains("active")) {
    mapText.innerHTML = "Close map layer";
  } else {
    mapText.innerHTML = "Open map layer";
  }
});

const cards = [
  {
    id: 0,
    img: "./images/cards/card.png",
    title: "455 Apartment 91th Street #345",
    price: 1200,
    sqft: 30,
    bedrooms: 1,
  },
  {
    id: 1,
    img: "./images/cards/card.png",
    title: "455 Apartment 91th Street #345",
    price: 1337,
    sqft: 120,
    bedrooms: 3,
  },
  {
    id: 2,
    img: "./images/cards/card.png",
    title: "455 Apartment 91th Street #345",
    price: 777,
    sqft: 222,
    bedrooms: 3,
  },
  {
    id: 3,
    img: "./images/cards/card.png",
    title: "455 Apartment 91th Street #345",
    price: 777,
    sqft: 222,
    bedrooms: 3,
  },
  {
    id: 4,
    img: "./images/cards/card.png",
    title: "455 Apartment 91th Street #345",
    price: 777,
    sqft: 222,
    bedrooms: 3,
  },
  {
    id: 5,
    img: "./images/cards/card.png",
    title: "455 Apartment 91th Street #345",
    price: 777,
    sqft: 222,
    bedrooms: 3,
  },
  {
    id: 6,
    img: "./images/cards/card.png",
    title: "455 Apartment 91th Street #345",
    price: 777,
    sqft: 222,
    bedrooms: 3,
  },
];

const list = document.querySelector("#js-list");

parseCards();

function parseCards() {
  cards.forEach((el) => {
    list.innerHTML += `
 <div class="card__item" id="js-card" data-id="${el.id}">
            
             <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                          <img
                            src="${el.img}"
                            alt="Card Images"
                            class="card__img"
                            />    
                    </div>
                     <div class="swiper-slide">
                          <img
                            src="${el.img}"
                            alt="Card Images"
                            class="card__img"
                            />    
                    </div>
                     <div class="swiper-slide">
                          <img
                            src="${el.img}"
                            alt="Card Images"
                            class="card__img"
                            />    
                    </div>
                </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
             </div>
            
            <p class="card__price-wrapper">
            from <br>
              <span class="card__price">$${el.price}</span> / mo
            </p>
            
            </p>
            <div class="card__thumb">
              <p class="card__title">${el.title}</p>
              <div class="card__wrapper">
                    <img
                            src="./images/cards/sqft.svg"
                            alt="Card Images"
                            class="card__img"
                            />
                <p class="card__sqft">${el.sqft} sqft</p>

                 <img
                            src="./images/cards/bedrooms.svg"
                            alt="Card Images"
                            class="card__img"
                            />
                <p class="card__bedrooms">${el.bedrooms} bedrooms</p>
              </div>
            </div>
          </div>`;
  });
}

const card = document.querySelectorAll(".card__item");
const modalCard = document.querySelector(".modal__card");
const modal = document.querySelector("[data-modal]");
const closeModalBtn = document.querySelector("[data-modal-close]");

card.forEach((element) => {
  element.addEventListener("click", () => {
    toggleModal();
    // modalCard.innerHTML = element.outerHTML;

    cards.forEach((e) => {
      if (e.id == element.getAttribute("data-id")) {
        modalCard.innerHTML = `
        <div class="card__item">
             <div class="swiper mySwiperSecond">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                          <img
                            src="${e.img}"
                            alt="Card Images"
                            class="card__img"
                            />
                    </div>
                     <div class="swiper-slide">
                          <img
                            src="${e.img}"
                            alt="Card Images"
                            class="card__img"
                            />
                    </div>
                     <div class="swiper-slide">
                          <img
                            src="${e.img}"
                            alt="Card Images"
                            class="card__img"
                            />
                    </div>
                </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
             </div>

            <p class="card__price-wrapper">
            from <br>
              <span class="card__price">$${e.price}</span> / mo
            </p>

            </p>
            <div class="card__thumb">
              <p class="card__title">${e.title}</p>
              <div class="card__wrapper">
                            <img
                            src="./images/cards/sqft.svg"
                            alt="Card Images"
                            class="card__img"
                            />
                <p class="card__sqft">${e.sqft} sqft</p>

                 <img
                            src="./images/cards/bedrooms.svg"
                            alt="Card Images"
                            class="card__img"
                            />
                <p class="card__bedrooms">${e.bedrooms} bedrooms</p>
              </div>
            </div>
          </div>`;
      }
    });
  });
});

closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("backdrop--hidden");
}

const filter = document.querySelector(".filter");
const filterButton = document.querySelector(".content__filter-button");
const filterArrow = document.querySelector("#js-filter-arrow");

filterButton.addEventListener("click", () => {
  filter.classList.toggle("filter__active");
});

filterArrow.addEventListener("click", () => {
  filter.classList.toggle("filter__active");
});
