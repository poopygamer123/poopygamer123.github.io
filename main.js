const header = document.getElementById("clickerHeader");
let clickers = 0;

function click(){
  clickers ++;
  header.InnerHTML = clickers;
}

