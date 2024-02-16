// content.js

//Change the background color
const style = document.createElement('style');
style.textContent = `
  body {
    --yt-spec-base-background: green !important;
  }
`;
document.head.appendChild(style);

//Make the YouTube Home Page blank

//Adding the grid-disabled class to the ytd-rich-grid-row tag, div id 'contents'
const dtDivs = document.querySelectorAll('div.style-scope ytd-rich-grid-renderer');
const firstElement = dtDivs[0].outerHTML;

//modify the class
let searchString = "style-scope ytd-rich-grid-renderer";
let replacementString = "style-scope ytd-rich-grid-renderer grid-disabled";
let modifiedString = dtDivs[0].outerHTML.replace(searchString, replacementString);
dtDivs[0].outerHTML = modifiedString;