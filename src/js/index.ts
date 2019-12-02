  console.log("sda");
  import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";


interface Card {
    time: string;
    id: number;
    name: string;
    rank: string;
}
 
let uri :string = "https://jsmbcardreader.azurewebsites.net/api/entry";
let outputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content");




    axios.get<Card[]>(uri)
    .then(function (response:AxiosResponse<Card[]>):void{
        let tableHead : string = '<div class="table-container" id="content" role="table" aria-label="Destinations">';
        let result : string = ' <div class="flex-table row">';
        response.data.forEach((card : Card) => {
            if(card == null)
              {
            
               // result += "<li> NULL element</li>"        
              }
            else
              {
                tableHead = ' <div class="flex-table header" role="rowgroup"><div class="flex-row" role="columnheader">Id</div><div class="flex-row" role="columnheader"> Card Id</div><div class="flex-row" role="columnheader">Name</div><div class="flex-row" role="columnheader">Time</div>';
               // result += "<li> "+user.id  +"</li>" 
               result += '<div class="flex-row">'+ card.id + '</div><div class="flex-row">' + card.name +   '</div><div class="flex-row">'+ card.rank + ' </div><div class="flex-row">'+ card.time +' </div>' ;      

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
    




  