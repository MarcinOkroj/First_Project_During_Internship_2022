console.log("some text");let acc=document.getElementsByClassName("procedures__column--links");for(let e=0;e<acc.length;e++)acc[e].addEventListener("click",(function(){this.classList.toggle("active");let e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));