// STEELCASE

var steelcase = [
    {
      img: "https://media.graphassets.com/resize=w:2400,h:1500,fit:crop/output=format:webp/compress/HmTOu3vrRiinwWud2ffs",
      title: "side chair X table",
      desc: "chair X table it's an bonus and this chair is very soft",
      price: "10",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2iuhf3aB81u7CCJuTmZeHONQfbXlji2v6ml_2cSkN2wijE6Y-tcHaK8AYA8roiV5DtU&usqp=CAU",
      title: "camp chair fk7",
      desc: "it's an simple and low quality chair but you can buy this chair",
      price: "2",
    },
    {
      img: "https://www.smartofficefurniture.co.nz/cdn/shop/files/inde-chair-smart-office-furniture.jpg?v=1682597242",
      title: "plastic chair 45",
      desc: "this is an plastic chair for your rest you can easily afford this chair",
      price: "2",
    },
    {
      img: "https://www.online8.co.nz/cdn/shop/products/purepine_300x.jpg?v=1639168105",
      title: "side chair jd8",
      desc: "his is an side chair in wood for your rest you can easily afford this chair",
      price: "4",
    },
    {
      img: "https://dezigndistrict.com/pub/media/catalog/product/cache/e12b5547c437b7ebdb24864b353125d4/v/e/vento-dc-green-front.png",
      title: "side chair jd9",
      desc: "his is an side chair for your rest you can easily afford this chair",
      price: "5",
    },
    {
      img: "https://cdn.manomano.com/images/images_products/31778947/L/102929502_2.jpg",
      title: "camp chair jf0",
      desc: "it's an simple and low quality chair but you can buy this chair",
      price: "2",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe33XwMLdzk4kqRne0OKPXo7Ejy56WyzcuZEOP7e-8UacG0TguiCDjefhJkklgKSF1h9w&usqp=CAU",
      title: "folding chair 74",
      desc: "this is an folding chair looking expensive for expensive trips",
      price: "6",
    },
    {
      img: "https://de.aarniooriginals.com/cdn/shop/products/aarnio_originals_ballchair_blue_08_1200x.png?v=1695743360",
      title: "ball chair t60",
      desc: "this is an ball chair this is very uniqe chair comparison then other chairs",
      price: "20",
    },
    {
      img: "https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-red__0727924_pe735940_s5.jpg",
      title: "plastic chair H50",
      desc: "this is an plastic chair for kids you can very easily effort this chair",
      price: "1",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw31AnopSXFyeRv5geHL6sAJBbvD20mw2_eV-_jP8xCljDe1O6VsiNFMdL1SE5UETmhHc&usqp=CAU",
      title: "side chair Y4",
      desc: "this is an side chair looking expensive for your rest you can easily afford this chair",
      price: "8",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5ieYeQEp9Ip54GmuX8GdxHDCghXslSJkQg&usqp=CAU",
      title: "side chair 67",
      desc: "this is an side chair in wood for your rest you can easily afford this chair",
      price: "7",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KVxN7Xy0ODIjAc1l-Ru2Vp-BQleB2ipKUw&usqp=CAU",
      title: "folding chair JJ0",
      desc: "this is an folding chair like side chair it's unique design",
      price: "10",
    }
  ];
  for (let c = 0; c <= steelcase.length; c++) {
    document.getElementById("steelcase").innerHTML += `
      <div class="content" >
              <img src="${steelcase[c].img}" alt="">
              <h3>${steelcase[c].title}</h3>
              <p>${steelcase[c].desc}</p>
              <h6>$${steelcase[c].price}</h6>
              <ul>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star"></i></li>
              </ul>
              <button><a href="detailpage3.html?id=${c}">buy now</a></button>
          </div>
      `;
  }
  
  // STEELCASE END