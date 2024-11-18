// LAZBOY

var lazboy = [
    {
      img: "https://www.refinery29.com/images/11244957.png?format=webp&width=720&height=650&quality=85",
      title: "side chair rfg4",
      desc: "this is an side chair in wood for your rest you can easily afford this chair",
      price: "1899",
    },
    {
      img: "https://cdn.apartmenttherapy.info/image/upload/v1692995559/commerce/product-roundups/2023/2023-08-small-bedroom-chairs/DAZONE-armchair-ottoman.jpg",
      title: "sofa X table",
      desc: "chair X table it's an bonus and this chair is very soft",
      price: "1699",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYghYfhxGtqCbz03XdO1IXlhGXc5gucD8lcZag1EIo0qN_SzFLJR2A8ewWgQILkBruPg&usqp=CAU",
      title: "sofa fi5",
      desc: "this is an light single sofa youu can easily effort this",
      price: "1499",
    },
    {
      img: "https://images.thdstatic.com/productImages/e7870b4a-02d0-456e-b673-df6d310fe11e/svn/beige-folding-chairs-sc004x001a-64_1000.jpg",
      title: "folding chair df6",
      desc: "this is an simple folding chair best quality for our trip",
      price: "1299",
    },
    {
      img: "https://img.ofo.co.uk/media/img/shop/srcpd/116536.jpg",
      title: "desk chair hth6",
      desc: "this is an desk or office chair for office and working on computer",
      price: "1299",
    },
    {
      img: "https://pyxis.nymag.com/v1/imgs/298/513/2bea7219adf416139cd2c0268f44ab609e-mesh-back-nesting-chair-w-flip-seat-5.rsquare.w600.jpg",
      title: "folding chair df3",
      desc: "this is an folding chair like side chair it's unique design",
      price: "1299",
    },
    {
      img: "https://www.deutschfurniturehaus.com/wp-content/uploads/2016/04/LaurieArmChair.jpg",
      title: "side chair sde3",
      desc: "this is an side chair in wood for your rest you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmiNsWypHMPExnBsAIdYYCmTLK4gXteB6b4MPpSlhFithwyJvA8A4pRuqC4FO3395J8s&usqp=CAU",
      title: "sofa bfd",
      desc: "this is an soft single sofa you can easily effort this",
      price: "1299",
    },
    {
      img: "https://cdn20.pamono.com/p/m/1/5/1553978_6idbqsyw5q/grand-executive-chair-attributed-to-antonio-citterio-for-vitra.jpg",
      title: "desk chair gdr",
      desc: "this is an desk or office chair for office and working on computer in pastic",
      price: "1299",
    },
    {
      img: "https://chair.com.pk/wp-content/uploads/2022/06/Insta-High-Back-Executive-C-300x300.jpg",
      title: "desk chair fg4",
      desc: "this is an desk or office chair for office and working on computer in pastic",
      price: "1299",
    },
    {
      img: "https://www.communityplaythings.co.uk/-/media/images/product-images/furniture/chairs/classroom-chairs/variant-images/j505.ashx?rev=74287b1db5574ca7944452041c1169b8&sc_lang=en&hash=AB99FC46984AF11FB171B0BA074AEE08",
      title: "kids chair g5",
      desc: "this is an plastic chair for kids you can very easily effort this chair",
      price: "1299",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDvEEXohOe9voqppAc9xsZDpICEfVP6UP1A&usqp=CAU",
      title: "stool chair jf8",
      desc: "this is an stool chair looking expensive for decorate our hotels",
      price: "1299",
    }
  ];
  for (let e = 0; e <= lazboy.length; e++) {
    document.getElementById("lazboy").innerHTML += `
      <div class="content" >
              <img src="${lazboy[e].img}" alt="">
              <h3>${lazboy[e].title}</h3>
              <p>${lazboy[e].desc}</p>
              <h6>$${lazboy[e].price}</h6>
              <ul>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star"></i></li>
              </ul>
              <button><a href="detailpage6.html?id=${e}">buy now</a></button>
          </div>
      `;
  }
  
  // LAZBOY END