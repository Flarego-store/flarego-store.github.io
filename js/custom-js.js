window.onscroll=function(){myFunc()};

var headline=document.getElementById("headline_wrapper");
var header=document.getElementById("header");
var page=document.getElementById("page_header");

// offsetbot-offsetbotheader=value nga matouch ang ends
var offsetBot=headline.offsetTop+headline.offsetHeight;
var offsetBotHeader=header.offsetTop+header.offsetHeight;

page.classList.add("d-none");
function myFunc(){
  if(window.scrollY>offsetBot-offsetBotHeader){
      page.classList.remove("d-none");
      page.classList.add("fixed-top");
      
  }else{
      page.classList.add("d-none");
      page.classList.remove("fixed-top");
  }
}

console.log(offsetBot,offsetBotHeader);
