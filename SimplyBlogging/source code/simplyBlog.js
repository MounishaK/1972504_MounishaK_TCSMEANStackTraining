var blogObj = [];

function storeInSession()
{    
    sessionStorage.setItem("bloginfo",JSON.stringify(blogObj));
}

function retrive()
{
    var obj = JSON.parse(sessionStorage.getItem("bloginfo"));
    console.log(obj);    
}

function onFormSubmit()
{
    alert("Data added...");

    var title = document.getElementById("title").value;
    var articles = document.getElementById("articles").value;
    var imageInfo = document.getElementById("image").files[0].name;
    console.log(title)
    console.log(articles);
    console.log(imageInfo);
    document.getElementById("titleInfo").innerHTML=title;
    document.getElementById("descInfo").innerHTML=articles;
    document.getElementById("imageInfo").src=imageInfo;
    resetData();
    storeInSession();
}

function resetData()
{
    document.getElementById("title").value ="";
    document.getElementById("articles").value = "";
    document.getElementById("image").value = "";
        
}

/*   var data = readFormData();
    //insertNewRecord(data);
    resetData();
    budgetObj.push(data); 
    storeInSession();
  


function readFormData()
{
    var obj = {}; // empty object
    obj.clientname = document.getElementById("clientname").innerHTML = clientname ;
    obj.projectname = document.getElementById("projectname").innerHTML = projectname ;
    obj.projectbudget = document.getElementById("projectbudget").src = projectbudget;
    console.log(obj);
    return obj;
}

function insertNewRecord(data)
{   //var budgetObj = {};
    var table = document.getElementById("AnnualBudget")
    var body = table.getElementsByTagName("tbody")[0];
    for(var i =0; i<data.length;i++)
    {
        var newRow = body.insertRow(body.length); //row created

        var cell1 = newRow.insertCell(0); //cell created
         cell1.innerHTML = data[i].clientname; // value passed

        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data[i].projectname;

        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data[i].projectbudget+"<br/>";
    }
}

function resetData()
{
    document.getElementById("clientname").value ="";
    document.getElementById("projectname").value = "";
    document.getElementById("projectbudget").value = "";
        
}
*/

/*
function dispayData()
{
    var obj1 = sessionStorage.getItem("clientname");
    document.getElementById("clientname").innerHTML = obj1;

    var obj2 = sessionStorage.getItem("projectname");
    document.getElementById("projectname").innerHTML = obj2;

    var obj3 = sessionStorage.getItem("projectbudget");
    document.getElementById("projectbudget").innerHTML = obj3;

}*/