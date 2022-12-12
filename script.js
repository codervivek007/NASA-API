function fetchData () {
    
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function(){
        // console.log(xhrRequest.response);
        console.log(JSON.parse(xhrRequest.response));
        let parseDATA = JSON.parse(xhrRequest.response);
        let imageURL = parseDATA.hdurl;
        let Date = parseDATA.date;
        let Explanation = parseDATA.explanation;
        let title = parseDATA.title;
        $('#Title_API').html(parseDATA.title);
        console.log(Title_API);
        $('#API_DATA').attr('src', imageURL);
        console.log(imageURL);
        $('#Explanation').text("Explanation :" + Explanation);
        console.log(Explanation);
        $('#Date').text("Date :" + Date);
        console.log(Date);
    }
    xhrRequest.open("get","https://api.nasa.gov/planetary/apod?api_key=hZaTB35wxlifs5O41Y0SvTh7fYxblsm4G4LdxU3g");
    xhrRequest.send();
}

$("#getdata").click(fetchData);

$('#Explanation').css({
    backgroundColor : "green",
    fontSize : "20px",
    wordSpacing : "10px",
});

$('#Title_API').css({
    backgroundColor : "Orange",
    fontWeight : "bold"
});

$('#Date').css({
    backgroundColor : "blue",
    fontWeight : "bold",
    color : "white"
});


// myNASA API = https://api.nasa.gov/planetary/apod?api_key=hZaTB35wxlifs5O41Y0SvTh7fYxblsm4G4LdxU3g



