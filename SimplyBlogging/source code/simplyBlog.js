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
    var title = document.getElementById("title").value;
    var articles = document.getElementById("articles").value;
    var imageInfo = document.getElementById("image").files[0].name;
    console.log(title)
    console.log(articles);
    console.log(imageInfo);
    document.getElementById("titleInfo").innerHTML=title;
    document.getElementById("articleInfo").innerHTML=articles;
    document.getElementById("imageInfo").src=imageInfo;
   
    var imageInfo1 = document.getElementById("image").files[0].name;
    console.log(title)
    console.log(articles);
    console.log(imageInfo1);
    document.getElementById("titleInfo1").innerHTML=title;
    document.getElementById("articleInfo1").innerHTML=articles;
    document.getElementById("imageInfo1").src=imageInfo1;
    resetData();
    storeInSession();
}


function resetData()
{
    document.getElementById("title").value ="";
    document.getElementById("articles").value = "";
    document.getElementById("image").value = "";
}