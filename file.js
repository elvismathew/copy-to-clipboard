function myFunction(){
    var copyText= document.getElementById("myInput");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
   

    var tooltip = document.getElementsByClassName("copy");
     tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc(){
    var tooltip = document.getElementsByClassName("copy");
    tooltip.innerHTML = "Copy url to clipboard";
}