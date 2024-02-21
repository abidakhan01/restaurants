let data = {
  all: [
    {
      img: "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
      titleOne: "Buttermilk Pancakes",
      titleTwo: "$15.99",
      titleThree:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
      img: "	https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
      titleOne: "Diner Double",
      titleTwo: "$13.99",
      titleThree:
        "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
      img: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
      titleOne: "Godzilla Milkshake",
      titleTwo: "$6.99",
      titleThree:
        "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
      img: "https://react-vite-projects-5-menu.netlify.app/images/item-4.jpeg",
      titleOne: "Country Delight",
      titleTwo: "$20.99",
      titleThree:
        "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    },
    {
      img: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
      titleOne: "American Classic",
      titleTwo: "$12.99",
      titleThree:
        "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },
    {
      img: "	https://react-vite-projects-5-menu.netlify.app/images/item-6.jpeg",
      titleOne: "Oreo Dream",
      titleTwo: "$18.99",
      titleThree:
        "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
      img: "	https://react-vite-projects-5-menu.netlify.app/images/item-7.jpeg ",
      titleOne: "Bacon Overflow",
      titleTwo: "$8.99",
      titleThree:
        "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
      img: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
      titleOne: "American Classic",
      titleTwo: "$12.99",
      titleThree:
        "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },
    {
      img: "https://react-vite-projects-5-menu.netlify.app/images/item-9.jpeg",
      titleOne: "Quarantine Buddy",
      titleTwo: "$16.99",
      titleThree:
        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
  ],
  breakfast: [
    {
      img: "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
      titleOne: "Buttermilk Pancakes",
      titleTwo: "$15.99",
      titleThree:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
      img: "	https://react-vite-projects-5-menu.netlify.app/images/item-7.jpeg ",
      titleOne: "Bacon Overflow",
      titleTwo: "$8.99",
      titleThree:
        "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
      img: "https://react-vite-projects-5-menu.netlify.app/images/item-4.jpeg",
      titleOne: "Country Delight",
      titleTwo: "$20.99",
      titleThree:
        "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    },
  ],
  lunch: [
    {
      img: "	https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
      titleOne: "Diner Double",
      titleTwo: "$13.99",
      titleThree:
        "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
      img: "https://react-vite-projects-5-menu.netlify.app/images/item-5.jpeg",
      titleOne: "Egg Attack",
      titleTwo: "$$22.99",
      titleThree:
        "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },
    {
      img: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
      titleOne: "American Classic",
      titleTwo: "$12.99",
      titleThree:
        "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },
  ],
  shakes: [
    {
      img: "	https://react-vite-projects-5-menu.netlify.app/images/item-3.jpeg",
      titleOne: "Godzilla Milkshake",
      titleTwo: "$6.99",
      titleThree:
        "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
      img: "	https://react-vite-projects-5-menu.netlify.app/images/item-6.jpeg",
      titleOne: "Oreo Dream",
      titleTwo: "$18.99",
      titleThree:
        "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
      img: "https://react-vite-projects-5-menu.netlify.app/images/item-9.jpeg",
      titleOne: "Quarantine Buddy",
      titleTwo: "$16.99",
      titleThree:
        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
  ],
};
console.log(data);

let AllItems = document.querySelector(".HomeInner");
let eachData = data.all;
AllItems.innerHTML = "";
for (let i = 0; i < eachData.length; i++) {
  AllItems.innerHTML += `  <div class="homess">
  <img
    src="${eachData[i].img}"
    alt=""
    class="img"
  />
  <div class="inner">
    <h4 class="headings">${eachData[i].titleOne}</h4>
    <p class="para">${eachData[i].titleTwo}</p>
  </div>
  <p class="paraouter">
 ${eachData[i].titleThree}
  </p>
</div>`;
}

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  AllItems.innerHTML = "";
  for (let i = 0; i < eachData.length; i++) {
    AllItems.innerHTML += `  <div class="homess">
  <img
    src="${eachData[i].img}"
    alt=""
    class="img"
  />
  <div class="inner">
    <h4 class="headings">${eachData[i].titleOne}</h4>
    <p class="para">${eachData[i].titleTwo}</p>
  </div>
  <p class="paraouter">
 ${eachData[i].titleThree}
  </p>
</div>`;
  }
});

console.log(AllItems);

//Breakfast

let btnBrkfst = document.getElementById("btn2");
let breakfst = data.breakfast;
btnBrkfst.addEventListener("click", () => {
  AllItems.innerHTML = "";
  for (let i = 0; i < breakfst.length; i++) {
    AllItems.innerHTML += `  <div class="homess">
    <img
      src="${breakfst[i].img}"
      alt=""
      class="img"
    />
  
    <div class="inner">
      <h4 class="headings">${breakfst[i].titleOne}</h4>
      <p class="para">${breakfst[i].titleTwo}</p>
    </div>
    <p class="paraouter">
   ${breakfst[i].titleThree}
    </p>
  </div>`;
  }
});

//lunch
let lunch = document.getElementById("btn3");
let lunchdata = data.lunch;
lunch.addEventListener("click", () => {
  AllItems.innerHTML = "";
  for (let i = 0; i < lunchdata.length; i++) {
    AllItems.innerHTML += `  <div class="homess">
    <img
      src="${lunchdata[i].img}"
      alt=""
      class="img"
    />
  
    <div class="inner">
      <h4 class="headings">${lunchdata[i].titleOne}</h4>
      <p class="para">${lunchdata[i].titleTwo}</p>
    </div>
    <p class="paraouter">
   ${lunchdata[i].titleThree}
    </p>
  </div>`;
  }
});

//shakes

let shakes = document.getElementById("btn4");
let shakesdata = data.shakes;
shakes.addEventListener("click", () => {
  AllItems.innerHTML = "";
  for (let i = 0; i < shakesdata.length; i++) {
    AllItems.innerHTML += `  <div class="homess">
    <img
      src="${shakesdata[i].img}"
      alt=""
      class="img"
    />
  
    <div class="inner">
      <h4 class="headings">${shakesdata[i].titleOne}</h4>
      <p class="para">${shakesdata[i].titleTwo}</p>
    </div>
    <p class="paraouter">
   ${shakesdata[i].titleThree}
    </p>
  </div>`;
  }
});
