const header = document.GetElementById("clickerHeader");
let clickers = 0;

function click(){
  clickers += 1;
  header.InnerHTML = `CLICKERS: ${clickers}`;
}

