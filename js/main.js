for (var i = 1; i < leo.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${leo[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${leo[i].title}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = leo[a].img
        document.getElementById("name1").innerHTML =  leo[a].title
        document.getElementById("price1").innerHTML = "PKR " + leo[a].price
        document.getElementById("desc1").innerHTML = leo[a].desc
        document.getElementById("brand1").innerHTML = leo[a].brand

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = vaseat[0].img
        document.getElementById("name1").innerHTML =  ""
        document.getElementById("price1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("brand1").innerHTML = ""

    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = leo[a].img
        document.getElementById("name2").innerHTML =  leo[a].title
        document.getElementById("price2").innerHTML = "PKR " + leo[a].price
        document.getElementById("desc2").innerHTML = leo[a].desc
        document.getElementById("brand2").innerHTML = leo[a].brand
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = vaseat[0].img
        document.getElementById("name2").innerHTML =  ""
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""

    }
}