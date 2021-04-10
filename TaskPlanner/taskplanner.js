let http = require("http");
let url = require("url");
let port = 9090;
let fs = require("fs");
let loginInfo = `
    <form action = "/store" method = "get">
        <h1>Task Planner </h1><br/>
        <h3> Add Task </h3>
        <label>Employee Id </label>
        <input type = "text" name = "empid" /><br/>  
        <label>Task Id </label>
        <input type = "text" name = "taskid" /><br/>
        <label>Task</label>
        <input type = "text" name = "task" /><br/>  
        <label>Deadline </label>
        <input type = "date" name = "date" /><br/>
        <input type = "submit" value = "Add Task" />        
    </form>

    <form action = "/remove" method = "get">
        <h3> Delete Task </h3>
        <label>Task Id </label>
        <input type = "text" name = "taskid" /><br/><br/>
        <input type = "submit" value = "Delete Task" />      
    </form>

    <div>
    <form action = "/display" method = "get">
        <input type = "submit" value = "List all tasks" />
    </form>
    </div>
`

let server = http.createServer((req,res)=>{
    //console.log(url.parse(req.url,true))
    var pathInfo = url.parse(req.url,true).pathname;
    if(req.url == "/")
    {
        res.setHeader("content-type","text/html");
        res.end("loginInfo");
    }else if(pathInfo == "/store")
    {
        res.setHeader("content-type","text/html");
        res.end("loginInfo");
        var data = url.parse(req.url,true).query;
        let eid = data.empid
        let tid = data.taskid
        let task = data.task
        let deadline = data.date
        let emp1 = {"empid":eid,"taskid":tid,"task":task,"deadline":deadline}

        fs.readFile('taskrec.json',function(err,data){
            var obj = JSON.parse(data)
            obj.push(emp1);
            var empString = JSON.stringify(obj);
            fs.writeFile("taskrec.json",empString,(err)=>{
                if(!err)
                {
                    console.log("Record storred successfully..")
                }
            })

        })

    }else if(pathInfo == "/display"){
        res.setHeader("content-type","text/html");
        var data = fs.readFileSync('taskrec.json');
        let obj = JSON.parse(data)
      
        var taskinfo;
      
        console.log(obj)
        taskinfo = `<h1>Task Details </h1>
        <table border = "1">
        <tr>
        <th>Employee Id </th>
        <th>Task Id </th>
        <th>Task </th>
        <th>Deadine </th>
        </tr>
        `

            for(let i=0;i<obj.length;i++)
            {
                console.log(obj[i].empId)
                taskinfo+= `
                <tr>
                <td>${obj[i].empId}</td>
                <td>${obj[i].taskId}</td>
                <td>${obj[i].task} </td>
                <td>${obj[i].deadline}</td>
                `
            }
            taskinfo+= `</table>`
            res.end(loginInfo+taskinfo)


    }else if(pathInfo=="/remove"){
        res.setHeader("content-type","text/html");
        res.end("loginInfo");
        var obj = new Array();
        var jsondata = fs.readFileSync('taskrec.json')
        obj = JSON.parse(jsondata);
        var data = url.parse(req.url,true).query;
        let tid = data.taskid;
        
        for(let i = 0;i<obj.length;i++)
        {
            if(tid == obj[i].taskId)
            {
                var arr = obj.splice(i)
                console.log(arr)
                
                var empString = JSON.stringify(obj);
                fs.writeFile("taskrec.json",empString,(err)=>{
                    if(!err)
                    {
                        console.log("Record storred successfully..")
                    }else{
                        res.end(loginInfo+"Invalid Task Id Details");
                    }
                })
            }
        }

    }
    res.end();   

})
server.listen(port,()=>console.log(`Server running on port number ${port}`));