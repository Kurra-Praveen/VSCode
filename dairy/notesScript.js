
$(document).ready(function () {

    var mydata= JSON.parse( sessionStorage.getItem("label"))

    var accountid=mydata.accountId

    
    $("#createButton").click( function(event){

        window.open("notesEntry.html", "Signup", "width=750,height=450"); 
    })


    $("#myNotesForm").submit(function(event){

        event.preventDefault(); 

        var date = $("#Date").val();

        var todaynote = $("#todayNotes").val(); 

       console.log(date+" "+ todaynote)

 
       var data1 = {
        dateTime: date,
        dailyNotes: todaynote,    
       };

       var formData = JSON.stringify(data1);

       var myur="http://localhost:8081/notes/"+accountid+"/create-notes";
   
       $.ajax({
           url: myur,
           type: "POST",    
         Accept:"application/json",
         contentType: "application/json",
           data: formData,
           dataType: 'json',
        
           success: function(response){
             
              console.log("not found")
           },
           error: function(){
           
               console.log("Error submitting data.");
           }
           
       });
       var da=date +" 00:00:00"

       $("#notesTable tbody").append("<tr><td>" + da + "</td><td>" + todaynote + "</td><td>" );

       $("#myNotesForm")[0].reset();

    })



    var myurl="http://localhost:8081/notes/"+accountid+"/all-notes";
    $.ajax({
        url: myurl,
        type: "GET",
        Accept: "application/json",
        contentType: "application/json",
       
        cache: false,
        processData: false,
        dataType: 'json',
        //mode: 'use-cors',
        success: function (response) {

            console.log('getting notes sucessfully')

          var   jsonData=  JSON.parse( JSON.stringify(response))

          for (var i = 0; i < jsonData.length; i++) {
            var row = $("<tr>");
            var dateCell = $("<td>").text(jsonData[i].dateTime);
            var notesCell = $("<td>").text(jsonData[i].dailyNotes);
            row.append(dateCell, notesCell);
            $("#notesTable tbody").append(row);
          }

        },
        error: function () {
            alert("Error submitting data.");
        }

    });


    
})