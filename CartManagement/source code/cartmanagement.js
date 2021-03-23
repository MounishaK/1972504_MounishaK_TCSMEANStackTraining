var cartObj = [];
function storeInSession(cartObj) {
    var obj = sessionStorage.getItem("cartinfo");
    if (obj = undefined) {
        var dataObj = JSON.parse(obj);
        if (cartObj.length > 0) {
            dataObj.push(cartObj[0]);
            sessionStorage.setItem("cartinfo", JSON.stringify(dataObj));
        }
    }
    else {
        sessionStorage.setItem("cartinfo", JSON.stringify(cartObj));
    }
}
var i = 0;
function onFormSubmit(index) {
    var cartObj = [];
    var item = readFormData(index);
    cartObj.push(item);
    storeInSession(cartObj);
    //document.getElementById("num").value = i++;
}
function retrive() {
    var obj2 = JSON.parse(sessionStorage.getItem("cartinfo"));
    console.log(obj2);
    insertNewRecord(obj2);
}
function readFormData(index) {
    var obj1 = {}; // empty object
    obj1.item1 = document.getElementById("item1" + index).textContent;
    obj1.itemPrice1 = document.getElementById("itemPrice1" + index).textContent;
    console.log(obj1);
    return obj1;
}
function insertNewRecord(obj2) {
    var table = document.getElementById("ShoppingCart");
    var body = table.getElementsByTagName("tbody")[0];
    var total = 0;
    for (var i_1 = 0; i_1 < obj2.length; i_1++) {
        var newRow = body.insertRow(); //row created
        var cell1 = newRow.insertCell(0); //cell created
        cell1.innerHTML = obj2[i_1].item1; // value passed
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = obj2[i_1].itemPrice1;
        total += parseFloat(obj2[i_1].itemPrice1);
    }
    var pElement = document.getElementById("totalPrice");
    pElement.innerHTML = "total:" + total;
}
