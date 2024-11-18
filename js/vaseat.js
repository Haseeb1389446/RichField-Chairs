// VASEAT

var vaseat = [
    {
      img: "https://andreuworld.com/media/catalog/product/cache/0ffc178102f09e8a3353d5ad34d15adb/a/d/adela_rex_andreu_world_so1411_armchair_1.jpg",
      title: "plastic chair fh5",
      desc: "this is an side chair for your rest you can easily afford this chair",
      price: "3",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ02n143xyK-8iVNKwDgGdsP_Hu_9IWF5ILKSxf6lzIwskvXpCyDBm_gYli7QZThTVgLQ&usqp=CAU",
      title: "folding chair U7f",
      desc: "this is an folding chair like side chair it's unique design",
      price: "10",
    },
    {
      img: "https://www.stealmod.com/cdn/shop/products/Easter_Egg_Chair_Black_png_1200x1200.png?v=1620074872",
      title: "ball chair k6",
      desc: "this is an ball chair this is very uniqe chair comparison then other chairs",
      price: "30",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4MgsO8bt8diIKqsD5vNWeVrIafTLaJPElw&usqp=CAU",
      title: "side chair s4",
      desc: "this is an side chair for your rest you can easily afford this chair",
      price: "5",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScLQI1OJ3pps58jkKoBWdOxh44mjCh3LkSyruhmDlsOgjuB_7g5B_tCxHNWxk1jpnBnk8&usqp=CAU",
      title: "desk chair J90",
      desc: "this is an desk or office chair for office and working on computer in pastic with steel",
      price: "15",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9wlehSsvUv9khmxzmpUemey_c8tQNANfD-7V1ZZVN_BHSCwoWpdYvb8fX3X2fvMBxzc&usqp=CAU",
      title: "soft side chair g2",
      desc: "this is an simple rest chair for your rest you can easily effort this chair ",
      price: "8",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZFc8Sy2APJz7oeJvvLxjGAr4hMZPVmgsY0zeIp-eX4huhjmcGE_NxO537VWha3Xww9E&usqp=CAU",
      title: "stool chair 590",
      desc: "this is an stool chair looking expensive for decorate our hotels",
      price: "10",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPYgGLxpMvLnGJDwuDHMJpVBzpcqFDq9qWn_0b9Jqfl0izeiD56YuO7zv3l3zYVO2fm0&usqp=CAU",
      title: "rocking chair ud5",
      desc: "this is an rocking chair it's ver uniqe and populer chair",
      price: "6",
    },
    {
      img: "https://www.rosehill.co.uk/wp-content/uploads/2019/02/Postura-Poly-Chair-blueSQ.jpg",
      title: "plastic chair hh3",
      desc: "this is an plastic chair for your rest you can easily afford this chair",
      price: "3",
    },
    {
      img: "https://www.masteroffisys.com/cdn/shop/products/Cres-Lbc_768x.jpg?v=1627040078",
      title: "desk chair T84",
      desc: "this is an desk or office chair for office and working on computer in pastic with steel",
      price: "12",
    },
    {
      img: "https://www.ethanallen.ca/dw/image/v2/AAKH_PRD/on/demandware.static/-/Sites-main/default/dwf4a31c7b/images/large/737980_6_MM_L7877_di_F_parade.jpg?sw=469&sh=469&sm=fit&strip=false",
      title: "sofa GT*",
      desc: "this is the single fancy sofa for decorate our hotel,company and other buildings",
      price: "16",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNsioY4UFyojCP3pf2p36VYOYX3s2xvI4JQHZSUKzmdhKMI8iB7QsFnpK4DxXJn4sRmU&usqp=CAU",
      title: "Bowl chair NP4",
      desc: "bowl chair it's fancy and expensive chair for decorating our houses",
      price: "29",
    }
  ];
  for (let b = 0; b <= vaseat.length; b++) {
    document.getElementById("vaseat").innerHTML += `
      <div class="content" >
              <img src="${vaseat[b].img}" alt="">
              <h3>${vaseat[b].title}</h3>
              <p>${vaseat[b].desc}</p>
              <h6>$${vaseat[b].price}</h6>
              <ul>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star"></i></li>
              </ul>
              <button><a href="detailpage2.html?id=${b}">buy now</a></button>
          </div>
      `;
  }
  
  // VASEAT END