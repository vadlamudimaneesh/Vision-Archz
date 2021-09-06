navLinks = ["services", "about", "departments"]
services = ['product development', 'ui management', 'devops','data sciences']

const subServices = {
  productdevelopment : {
      item1: 'link1a',
      item2: 'link1b',
      item3: 'link1c',
      item4: 'link1d'
  },
  uimanagement:{
      item1: 'a',
      item2: 'b',
  }
}

Object.values(subServices.productdevelopment).forEach(val => console.log(val));


var brandName = document.getElementById("bName");
brandName.innerHTML = "ARCHZ VISION";

var dynamic = document.querySelector('.items');
for (var i=0; i < navLinks.length; i++){
    var fetch = document.querySelector('.items').innerHTML;
    dynamic.innerHTML = `<li class="item"><a href="#" class="links">${navLinks[i]}</a></li>` + fetch;
}

const landingText = document.getElementById("landing-text");
landingText.innerHTML = "Lorem ipsum dolor sit amet consectetur amet";

const quotes = document.getElementById("quotes");
quotes.innerHTML="Our Software Product Development Expertise Empowers Global Brands to Build Evolutionary Software";

const paraHeading = document.getElementById("para-heading");
paraHeading.innerHTML = "Lorem ipsum dolor sit amet consectetur";

const para = document.getElementById("para");
para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. labosam amet obcaecati labore velit sunt dicta quidem quod deleniti possimus dolores, eligendi est sit vero quibusdam laborum optio earum corporis dolorum! Lorem ipsum dolor sit amet consecte Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet obcaecati labore velit sunt dicta quidem quod deleniti possimus dolores!";


var data1 = document.querySelector('.wrap-container');
var data2 = document.querySelector('.info');
for (var i=0; i < services.length; i++){
    // for(var y=0; y < Object.values(subServices.productDevelopment).length; y++){
    //     var result = document.querySelector('.info').innerHTML;
    //     data2.innerHTML = `<a href="#" class="points">${subServices.productDevelopment[y]}</a>`
    // }
    var fetch = document.querySelector('.wrap-container').innerHTML;
    data1.innerHTML = `<div class="wrapper">
    <div class="card">
      <div class="imgBx">
        <img src="assets/landing.jpg">
        <div id="card-heading">${services[i]}</div>
      </div>
      <div class="info">
      </div>
    </div>
  </div>` + fetch;
}

// Object.keys(obj