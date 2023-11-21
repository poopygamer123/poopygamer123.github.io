const header = document.GetElementById("clickerHeader");
let clickers = 0;

function click(){
  clickers ++;
  header.InnerHTML = `CLICKERS: ${clickers}`;
}

