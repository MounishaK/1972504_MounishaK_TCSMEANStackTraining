let cartObj = [];

function storeInSession(cartObj:any):void
{ 
    let obj:any = sessionStorage.getItem("cartinfo");
    if(obj! = undefined)
    {
        let dataObj:any = JSON.parse(obj);
        if(cartObj.length>0)
        {
            dataObj.push(cartObj[0]);
            sessionStorage.setItem("cartinfo",JSON.stringify(dataObj));
        }
    }
    else
    {
        sessionStorage.setItem("cartinfo",JSON.stringify(cartObj));
    }
    
}

var i =0;
function onFormSubmit(index:number):void
{
    let cartObj:any = [];
    let item:any = readFormData(index);
    cartObj.push(item);
    storeInSession(cartObj);
    //document.getElementById("num").value = i++;
}


function retrive():void
{
   
    let obj2:any = JSON.parse(sessionStorage.getItem("cartinfo"));
    console.log(obj2);
    insertNewRecord(obj2);
    
}

function readFormData(index:number):any
{
    var obj1:any = {}; // empty object
    obj1.item1 = document.getElementById("item1"+index).textContent;
    obj1. itemPrice1 = document.getElementById("itemPrice1"+index).textContent;
    console.log(obj1);
    return obj1;
}


function insertNewRecord(obj2:any)
{  
    var table = document.getElementById("ShoppingCart")
    var body = table.getElementsByTagName("tbody")[0];
    let total:number = 0;
    for(let i =0; i<obj2.length;i++)
    {
        var newRow = body.insertRow(); //row created

        var cell1 = newRow.insertCell(0); //cell created
         cell1.innerHTML = obj2[i].item1; // value passed

        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = obj2[i].itemPrice1;

        total+= parseFloat(obj2[i].itemPrice1)

    }
    let pElement:any = document.getElementById("totalPrice")
    pElement.innerHTML = "total:" + total;
}
