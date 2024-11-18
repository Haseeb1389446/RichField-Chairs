// NAVBAR

document.querySelector(".navbar").innerHTML = `
<nav>
                <div class="nav1">
                    <div class="logo"><img src="img/logo.png" alt="" id="main-logo"></div>
                    <div class="navigation">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="#">Brands <i class="fa-solid fa-caret-down"></i></a>
                                <ul>
                                    <h4>CHAIRS BRANDS</h4>
                                    <hr>
                                    <li><a href="leo.html">LEO <span>&#8594;</span></a></li>
                                    <li><a href="vaseat.html">VASEAT <span>&#8594;</span></a></li>
                                    <li><a href="steelcase.html">STEELCASE <span>&#8594;</span></a></li>
                                    <li><a href="lamex.html">LAMEX <span>&#8594;</span></a></li>
                                    <li><a href="knoll.html">KNOLL <span>&#8594;</span></a></li>
                                    <li><a href="lazboy.html">LAZ BOY <span>&#8594;</span></a></li>
                                    <li><a href="hni.html">HNI <span>&#8594;</span></a></li><br>
                                </ul>
                            </li>
                            <li><a href="comparison.html">product comparison</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                    </div>
                </div>
                <div class="nav2">
                    <ul>
                        <li><img src="svg/dark-light.svg" id="icon" onclick="themetoggle()"></li>
                        <li><a href="#"><button class="popup-btn" onclick="showmodal()">log in</button></button></a></li>
                    </ul>
                </div>
            </nav>
`

// NAVBAR END


// PAGINATION

document.querySelector(".pagination").innerHTML = `<span style = "color: white;">1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>></span>`

// PAGINATION END


// FOOTER

document.querySelector(".footer").innerHTML = `<div class="foot-container">
<div class="f-row1">
    <div class="footer-col">
        <h4>Address:</h4>
        <span><p>Aptech,metro star gate</p></span>
    </div><hr>
    <div class="footer-col">
        <h4>Number:</h4>
        <span><p>0334-6742222</p></span>
    </div><hr>
    <div class="footer-col">
        <h4>Email:</h4>
        <span><p>random@richfildchair.com</p></span>
    </div>
    </div>

   <div class="f-row2">
       <div class="footer-col">
           <img src="img/logo.png" alt="" id="main-footer">
        <br>
           <p>We sell different types of chairs...</p>
       </div>
       <div class="footer-col">
           <h4>Menu</h4>
           <ul>
               <li><a href="index.html">Home</a></li>
               <li><a href="about.html">about</a></li>
               <li><a href="#">Brands</a></li>
               <li><a href="Contact.html">Contact Us</a></li>
           </ul>
       </div>
       <div class="footer-col">
           <h4>Brands</h4>
           <ul>
               <li><a href="leo.html">Leo</a></li>
               <li><a href="Vaseat.html">Vaseat</a></li>
               <li><a href="Steelcase.html">Steelcase</a></li>
               <li><a href="lamex.html">lamex</a></li>
               <li><a href="Knoll.html">Knoll</a></li>
               <li><a href="Lazboy.html">Laz boy</a></li>
               <li><a href="hni.html">hni</a></li>
           </ul>
       </div>
       <div class="footer-col">
           <h4>follow us</h4>
           <div class="social-links">
               <a href="#"><i class="fab fa-facebook-f"></i></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-linkedin-in"></i></a>
           </div>
       </div>
</div><br><br><hr>
<div class="f-row3">
    <div>@2024 Richfield chair | All right reserved!</div>
</div>
</div>`

// FOOTER END



// DARK AND LIGHT THEME

function themetoggle() {
    var icon = document.getElementById("icon");
    var logo = document.getElementById("main-logo");
    var footlogo = document.getElementById("main-footer");
  
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
      logo.src = "img/logo2.png";
      footlogo.src = "img/logo2.png";
    } else {
      logo.src = "img/logo.png";
      footlogo.src = "img/logo.png";
    }
  }

//   POP UP


function showmodal(){
    document.querySelector('.overlay').classList.add('show-overlay');
    document.querySelector('.login-form').classList.add('show-login-form');
}



function hidemodal(){
    document.querySelector('.overlay').classList.remove('show-overlay');
    document.querySelector('.login-form').classList.remove('show-login-form');
}