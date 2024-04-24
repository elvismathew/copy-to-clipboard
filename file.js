function myFunc(){
    var copyText= document.getElementById("myInput");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
   

    var newButton = document.createElement("button");
    newButton.innerHTML = "<i class='fa-solid fa-check'></i><span class = 'tooltiptext'> Copied!! </span>";
    newButton.id = "newButton";

    var originalButton = document.getElementById("originalButton");
    originalButton.parentNode.replaceChild(newButton, originalButton);
}

function outFunc(){
    var tooltip = document.getElementsByClassName("copy");
    tooltip.innerHTML = "Copy url to clipboard";
}

