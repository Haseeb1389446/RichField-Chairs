// LAMEX

var lamex = [
    {
      img: "https://content.la-z-boy.com/Images/product/category/white/big/230491.jpg",
      title: "sofa gj5",
      desc: "this is the single sofa for decorate our hotel,company and other buildings",
      price: "1899",
    },
    {
      img: "https://chair.com.pk/wp-content/uploads/2021/06/Spider-High-Back-Executive-1-8-300x300.jpg",
      title: "desk chair yt5",
      desc: "this is an desk or office chair for office and working on computer in pastic",
      price: "1699",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7nnUyYJa-9ORAd1HqYIectTOVE1I16b7B_KfDdhpkT_fk0V3gFuwUe11ckYiM_iGvi9A&usqp=CAU",
      title: "sofa kt5",
      desc: "this is the single uniqe fancy sofa for decorate our hotels",
      price: "1499",
    },
    {
      img: "https://shop.bauhaus-movement.com/media/7817/catalog/e15/e15-stuttgart-chair-richard-herre-oat.jpg",
      title: "wood chair fd5",
      desc: "his is an uniqe side chair for your rest you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://www.cultfurniture.com/images/taylor-dining-chair-olive-green-sustainable-velvet-brass-p43622-2865981_image.jpg",
      title: "side chair r8",
      desc: "his is an uniqe side chair for your rest you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJe3PVEByFmvJAzQOrl0YsAJVlSF1HBY_eQ&usqp=CAU",
      title: "single sofa ts8",
      desc: "this is an uniqe chair in market look like sofa best quality and soft",
      price: "1299",
    },
    {
      img: "https://lekkerhome.com/media/catalog/product/2/0/20134_sofa_barrow_lounge_chair_ginger_front_cut_web.jpg?optimize=low&fit=bounds&height=552&width=552",
      title: "bold side chair fd6",
      desc: "this is an light single sofa youu can easily effort this",
      price: "1299",
    },
    {
      img: "https://doddsandshute.com/shop/pub/media/catalog/product/cache/7c0686f28ae54f0e875024628bf6717f/h/d/hd_pedestal_upholstered_without_arms.jpg",
      title: "stool chair sad7",
      desc: "this is an stool chair like side chair in plastic and steel best quality for our shops",
      price: "1299",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-jNmI4rLRGJbWjUIjXPHL9brdNMuUJO95MPt3u0VZtMSn8g03cwd_mtc80rOtoM0zVw&usqp=CAU",
      title: "folding chair 84j",
      desc: "his is an folding chair like side chair in wood you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9D-F0nmJepnSvKghc8KUrH34Efg04CruyltmieJzFeKHoUw8Itdqh9RUw40vlWtmu_z0&usqp=CAU",
      title: "side chair jf8",
      desc: "his is an uniqe side chair for your rest you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKODxmEA_7v8bxrvZ0WdOu5se6TSHAQ4x0g&usqp=CAU",
      title: "egg chair 34",
      desc: "this is an one of the best uniqe chair egg chair in lether",
      price: "1299",
    },
    {
      img: "https://furniturecity.com.pk/cdn/shop/products/BS-1014B.jpg?v=1623066105",
      title: "stool chair jfu",
      desc: "this is an stool chair in plastic and steel best quality for our shops",
      price: "1299",
    }
  ];
  for (let d = 0; d <= lamex.length; d++) {
    document.getElementById("lamex").innerHTML += `
      <div class="content" >
              <img src="${lamex[d].img}" alt="">
              <h3>${lamex[d].title}</h3>
              <p>${lamex[d].desc}</p>
              <h6>$${lamex[d].price}</h6>
              <ul>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star checked"></i></li>
                  <li><i class="fa fa-star"></i></li>
              </ul>
              <button><a href="detailpage4.html?id=${d}">buy now</a></button>
          </div>
      `;
  }
  
  // LAMEX END