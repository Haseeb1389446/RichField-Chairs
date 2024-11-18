// KNOLL

var knoll = [
    {
      img: "https://habitt.com/cdn/shop/products/seating-furniture-ethan-dining-chair-29488779460792.jpg?v=1662967710",
      title: "side chair ds78",
      desc: "this is an side chair for your rest you can easily afford this chair",
      price: "1899",
    },
    {
      img: "https://furniturecity.com.pk/cdn/shop/products/IMG_1653.jpg?v=1623066551",
      title: "stool chair y5",
      desc: "this is an stool chair like side chair in plastic and wood best quality",
      price: "1699",
    },
    {
      img: "https://cdnprod.mafretailproxy.com/sys-master-root/h10/h45/13424722706462/192831_3.jpg_480Wx480H",
      title: "plastic chair dyt4",
      desc: "this is an plastic chair for your rest you can easily afford this chair",
      price: "1499",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1844/9185/products/51aT4FpX0qL._SL1200_500x_9c7bcc97-8dd1-4914-bd5f-542a35fb3589_1024x1024.jpg?v=1636353563",
      title: "stool chair hd4",
      desc: "this is an stool chair in plastic and steel best quality for our shops",
      price: "1299",
    },
    {
      img: "https://assets.wfcdn.com/im/17860525/compr-r85/2502/250264996/tiloine-faux-leather-office-chair.jpg",
      title: "desk chair wh7",
      desc: "this is an desk or office chair for office and working on computer in lether",
      price: "1299",
    },
    {
      img: "https://www.dcgstores.com/resize/shared/productimages/east-end-imports/eei-1383-gry.jpg?bw=1000&w=1000&bh=1000&h=1000",
      title: "side chair fg",
      desc: "this is an soft side chair for your rest you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://www.oakworld.co.uk/wp-content/uploads/2018/09/Alston-Oak-Dining-Chair-64334-64283.jpg",
      title: "side chair sa3",
      desc: "this is an side chair in wood for your rest you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652908179-blue-accent-chairs-thd-if-123-blue-64_1000.jpg?crop=1xw:1.00xh;center,top&resize=980:*",
      title: "bowl chair jds7",
      desc: "this is an light bowl chair it's looking fancy and expensive for decorating our houses",
      price: "1299",
    },
    {
      img: "https://myhomestore.pk/cdn/shop/products/WhatsAppImage2022-03-24at1.42.42PM_2_600x.jpg?v=1648126411",
      title: "side chair a7",
      desc: "this is an side chair in steel and wood you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://ourhome.ph/cdn/shop/products/SELMADININGCHAIRCOCOANAVY_10425154_3_ddafc806-4c0a-4188-b19d-7f21d09f8bc5_800x.jpg?v=1679983565",
      title: "folding chair fdg6",
      desc: "this is an light and uniqe side chairin wood you can easily effort this chair",
      price: "1299",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy789jVI_4tIJQdfMJltZt3IR0L9wVALAToQ&usqp=CAU",
      title: "folding chair fdg7",
      desc: "this is an uniqe side chair in wood for your rest you can easily afford this chair",
      price: "1299",
    },
    {
      img: "https://be-media.swooneditions.com/Landers/Chairs/Bespoke_chairs.jpg",
      title: "single sofa dsj32",
      desc: "this is the single fancy sofa for decorate our hotel,company and other buildings",
      price: "1299",
    }
  ];
  for (let f = 0; f <= knoll.length; f++) {
    document.getElementById("knoll").innerHTML += `
      <div class="content" >
              <img src="${knoll[f].img}" alt="">
              <h3>${knoll[f].title}</h3>
              <p>${knoll[f].desc}</p>
              <h6>$${knoll[f].price}</h6>
              <ul>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
              </ul>
              <button><a href="detailpage5.html?id=${f}">buy now</a></button>
          </div>
      `;
  }
  
  // KNOLL END