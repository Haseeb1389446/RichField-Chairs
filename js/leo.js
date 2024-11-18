// LEO

var leo = [
    {
      img: "img/C1.jpg",
      title: "Fancy side chair X9",
      desc: "this is the fancy side chair for decorate our hotel,company and  other buildings",
      price: "$38",
    },
    {
      img: "https://furniturecity.com.pk/cdn/shop/products/LF-35.jpg?v=1623066629",
      title: "Desk chair PP5",
      desc: "this is an desk or office chair for office and working on computer in pastic ",
      price: "$50",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoNPjHmcOo3RUqhGU0EsP48J8UY4yqll6ZQ&usqp=CAU",
      title: "Sofa V3",
      desc: "this is the single fancy sofa for decorate our hotel,company and other buildings",
      price: "$63",
    },
    {
      img: "https://interwood.pk/cdn/shop/products/elle_dining_chair.jpg?v=1687431310",
      title: "Side chair HH4",
      desc: "this is an side chair for your rest you can easily afford this chair",
      price: "$6",
    },
    {
      img: "https://content.cylindo.com/api/v2/4800/products/250L/frames/5/250L.JPG?background=FFFFFF&feature=LEATHER%3A:VOBLK",
      title: "Fancy triple chair",
      desc: "this is the fancy triple chair for decorate our hotel,company and other buildings",
      price: "$65",
    },
    {
      img: "https://getzfurniture.com/wp-content/uploads/2020/09/bp316-600x800-2.png",
      title: "Plastic chair nf7",
      desc: "this is an plastic chair for your rest you can easily afford this chair",
      price: "$8",
    },
    {
      img: "https://assets.wfcdn.com/im/17860525/compr-r85/2502/250264996/tiloine-faux-leather-office-chair.jpg",
      title: "desk chair YR*",
      desc: "this is an desk or office chair for office and working on computer in pastic",
      price: "$40",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKa8DlUMOrO5kXqUnn8H_DWEdkOlGQHdD8KZNj7L5IFAd-cPkj6-DI_cRAf7WbiRDB7Q&usqp=CAU",
      title: "bold fancy side chair ",
      desc: "this is the single bold fancy side chair like sofa for decorate ",
      price: "$42",
    },
    {
      img: "https://homedesign.pk/2109-large_default/carmen-moulded-plastic-chair-hd-mld-001.jpg",
      title: "plastic chair Uz4",
      desc: "this is an plastic chair for your rest you can easily afford this chair",
      price: "4",
    },
    {
      img: "https://interwood.pk/cdn/shop/files/Marcus_Visitor_Chair__TI-AR705-28__02.jpg?v=1705663089",
      title: "Side chair II2",
      desc: "this is an side chair for your rest you can easily afford this chair",
      price: "$10",
    },
    {
      img: "https://be-media.swooneditions.com/Landers/Chairs/Occasional_Chairs.jpg",
      title: "Fancy sofa JK^",
      desc: "this is the single bold fancy side chair like sofa for decorate ",
      price: "$35",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRmradzK3RntAU9G4do65kh-yMKUtgwBU18cjCv3Rp5DUu_Q6ERN_b_GYZy1s9lCd6Sc&usqp=CAU",
      title: "Bowl chair nc8",
      desc: "bowl chair it's fancy and expensive chair for decorating our houses",
      price: "$67",
    }
  ];
  for (let a = 0; a <= leo.length; a++) {
    document.getElementById("leo").innerHTML += `
      <div class="content">
              <img src="${leo[a].img}" alt="">
              <h3>${leo[a].title}</h3>
              <p >${leo[a].desc}</p>
              <h6>$${leo[a].price}</h6>
              <ul>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star"></i></li>
              </ul>
              <button><a href="detailpage.html?id=${a}">buy now</a></button>
          </div>
      `;
  }
  
  // LEO END