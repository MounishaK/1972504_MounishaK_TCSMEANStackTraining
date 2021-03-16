var budgetObj = [];

function storeInSession()
{ 
   
        sessionStorage.setItem("budgetinfo",JSON.stringify(budgetObj));
}

function retrive()
{
   
    var obj = JSON.parse(sessionStorage.getItem("budgetinfo"));
    console.log(obj);
    insertNewRecord(obj);
    
}

function onFormSubmit()
{
    var data = readFormData();
    //insertNewRecord(data);
    resetData();
    budgetObj.push(data); 
    storeInSession();
  
}

function readFormData()
{
    var obj = {}; // empty object
    obj.clientname = document.getElementById("clientname").value;
    obj.projectname = document.getElementById("projectname").value;
    obj.projectbudget = document.getElementById("projectbudget").value;
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