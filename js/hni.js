// HNI

var hni = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxa2Hz9mEg0W3m1lFrOa6Y16J9wns7tk_C2A&usqp=CAU",
      title: "plastic chair ld7",
      desc: "this is an plastic chair for your rest you can easily afford this chair",
      price: "1899",
    },
    {
      img: "https://www.masteroffisys.com/cdn/shop/products/12_73cbd109-1527-460d-884a-16fca5a0165e_768x.jpg?v=1678102831",
      title: "desk chair hg6",
      desc: "this is an desk or office chair for office and working on computer",
      price: "1699",
    },
    {
      img: "https://www.rosehill.co.uk/wp-content/uploads/2019/02/Postura-Poly-Chair-blueSQ.jpg",
      title: "plastic chair ld4",
      desc: "this is an plastic chair for your rest you can easily afford this chair",
      price: "1499",
    },
    {
      img: "https://designertrapped.com/wp-content/uploads/2023/08/blue-velvet-accent-chair-2-820x820.webp",
      title: "single sofa efd3",
      desc: "this is the single sofa for decorate our hotel,company and other buildings",
      price: "1299",
    },
    {
      img: "https://www.humanscale.com/userFiles/images/homepage/nav_menu/menu_seating.jpg",
      title: "desk chair yty",
      desc: "this is an desk or office chair for office and working on computer",
      price: "1299",
    },
    {
      img: "https://files.ekmcdn.com/4d4065/images/diamond-upholstered-tan-faux-leather-dining-chair-with-black-metal-legs-mh21244-6171-p.png?v=E2559CBD-43F3-4D3B-B887-49A57948F3C8",
      title: "side chair dd1",
      desc: "this is an uniqe side chair for your rest you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/M/P/56708_1523273691.jpg",
      title: "side chair dd2",
      desc: "this is an side chair for our functions you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://cb.scene7.com/is/image/Crate/MomoAccentChairSOSSS23?wid=440&qlt=70&op_sharpen=1",
      title: "soft side chair jd0",
      desc: "this is an soft side chair for your rest you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://www.bludot.com/media/catalog/product/f/d/fd1_lngchr_bh_frontlow-field-lounge-chair-tait-blush_2.jpg?optimize=medium&fit=bounds&height=1200&width=1500&canvas=1500:1200",
      title: "soft side chair jd3",
      desc: "this is an soft side chair for your rest you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://cdn.polywood.com/image/upload/s--F4Deg6_B--/w_900,h_900,c_pad,q_80/o4w8pqzadwkgfpqs23rw.jpg",
      title: "side chair dd7",
      desc: "this is an uniqe side chair in wood mostly recommended for parks",
      price: "1299",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/2364/8175/files/cubino-chair-fgrey-fgrey.jpg",
      title: "single sofa efd4",
      desc: "this is the single uniqe sofa for decorate our hotel,company and other buildings",
      price: "1299",
    },
    {
      img: "https://d35l77wxi0xou3.cloudfront.net/opencart/image/catalog/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANKUR/Steel%20Craft/COCHGR05-600x600.jpg",
      title: "desk chair sa7",
      desc: "this is an desk or office chair looking premium for our tasks",
      price: "1299",
    }
  ];
  for (let g = 0; g <= hni.length; g++) {
    document.getElementById("hni").innerHTML += `
      <div class="content" >
              <img src="${hni[g].img}" alt="">
              <h3>${hni[g].title}</h3>
              <p>${hni[g].desc}</p>
              <h6>$${hni[g].price}</h6>
              <ul>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star"></i></li>
              </ul>
              <button><a href="detailpage7.html?id=${g}">buy now</a></button>
          </div>
      `;
  }
  
  // HNI END