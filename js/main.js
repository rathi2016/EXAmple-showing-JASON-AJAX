var button = document.getElementById('button');
var aniamalDetails = document.getElementById('animal-info');
var counter = 1
button.addEventListener("click", function(){

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ counter + '.json');

  ourRequest.onload = function(){
  var ourData = JSON.parse(ourRequest.responseText);
  renderHtml(ourData);
  };
  ourRequest.send();
  counter ++ ;
  if(counter > 3) {
    button.classList.add("hide-me");
  }
});

function renderHtml(data){
  var string = "" ;
  for(i=0 ; i < data.length; i++){
    string += "<p>"+data[i].name + " is a " + data[i].species + ".</p>";
  }
  // we use method available to all DOM elements 'insertAdjacentHTML'
  aniamalDetails.insertAdjacentHTML('beforeend',string)
}
// creating an instance of build in tool of web browser "XMLHttpRequest()"

// var ourData = ourRequest.responseText;
// console.log(ourData[0]);

// if we do this we get '[' as logged value on console because by default when our browser
// go to the url to download this data it download not know to interpret this as JSON data instead
// see it as giant string and first item in the text string [0] index  is '[' therefore to avoid
// this we want brwser to interput this as real JSon data i.e as Ojects and Arrays
