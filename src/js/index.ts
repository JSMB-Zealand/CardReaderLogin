  console.log("sda");
  import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";


interface Entry {
    time: string;
    id: number;
    name: string;
    rank: string;
}

interface User {
    id: number;
    name: string;
    rank: string;
}
 
 
let entryUri :string = "https://jsmbcardreader.azurewebsites.net/api/entry";
let userUri: string = "https://jsmbcardreader.azurewebsites.net/api/user";

let outputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
let outputStorageElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content-storage");


    axios.get<Entry[]>(entryUri)
    .then(function (response:AxiosResponse<Entry[]>):void{
        let tableHead : string = '<div class="table-container" id="content" role="table" aria-label="Destinations">';
        let result : string = ' <div class="flex-table row">';
        response.data.forEach((entry : Entry) => {
            if(entry == null)
              {
            
               // result += "<li> NULL element</li>"        
              }
            else
              {
                tableHead = ' <div class="flex-table header" role="rowgroup"><div class="flex-row" role="columnheader">Id</div><div class="flex-row" role="columnheader"> Card Id</div><div class="flex-row" role="columnheader">Name</div><div class="flex-row" role="columnheader">Time</div>';
               // result += "<li> "+user.id  +"</li>" 
               result += '<div class="flex-row">'+ entry.id + '</div><div class="flex-row">' + entry.name +   '</div><div class="flex-row">'+ entry.rank + ' </div><div class="flex-row">'+ entry.time +' </div>' ;      

              }
            });

        tableHead += '</div>';
       result += "</ol></div";
        outputElement.innerHTML = tableHead + result;
    }
    )
    .catch(function (error:AxiosError):void{
            //divElement.innerHTML= error.message;        
    })


    axios.get<User[]>(userUri)
    .then(function (response:AxiosResponse<User[]>):void{
        let tableHead : string = ' <div class="table-container" id="content-storage" role="table" aria-label="Destinations">';
        let result : string = '<div class="flex-table row">';
        response.data.forEach((user : User) => {
            if(user == null)
              {
            
               // result += "<li> NULL element</li>"        
              }
            else
              {
                tableHead = '<div class="flex-table header" role="rowgroup"><div class="flex-row first" role="columnheader">Action</div><div class="flex-row" role="columnheader">Id</div><div class="flex-row" role="columnheader">Name Id</div><div class="flex-row" role="columnheader">Rank</div></div>'
                // result += "<li> "+user.id  +"</li>" 
              // result += ' <div class="flex-table row"><div class="flex-row first" role="cell"><span class="edit"> <button type="submit">    <i class="fas fa-edit"></i><span>edit</span></button> </span><span class="delete"><button type="submit">    <i class="fas fa-trash"></i><span>delete</span></button> </span> </div><div class="flex-row">'+ user.id + '</div><div class="flex-row">' + user.name +   '</div><div class="flex-row">'+ user.rank + '</div>';      
               result +='<div class="flex-row first" role="cell"><span class="edit"> <button type="submit">    <i class="fas fa-edit"></i><span>edit</span></button> </span><span class="delete"><button type="submit"><i class="fas fa-trash"></i><span>delete</span></button> </span> </div><div class="flex-row">'+ user.id +'</div><div class="flex-row">' + user.name +'</div><div class="flex-row">'+user.rank+'</div>';

               
              }
            });


        tableHead += '</div>';
       result += "</div";
       outputStorageElement.innerHTML = tableHead + result;
    }
    )
    .catch(function (error:AxiosError):void{
            //divElement.innerHTML= error.message;        
    })


/*
    let buttonelement:HTMLButtonElement = <HTMLButtonElement> document.getElementById("myInput");  
buttonelement.addEventListener('keydown',myFunction);

    function myFunction():void {
       var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = (<HTMLInputElement>document.getElementById("myInput")).value;
        //filter = input.value.toUpperCase();
        table = document.getElementById("content");
        tr = table.querySelector(".flex-row");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].querySelector(".flex-row")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
      }
    */




  