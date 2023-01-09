/* Cookie to keep track of window.history for back button in sub apges of Book.html */ 

function bake_cookie(name, value) {
/*  var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join(''); */
  var cookie = [name, '=', JSON.stringify(value), '; path=/;'].join('');  
  document.cookie = cookie;  
}

function read_cookie(name) {
 var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
 result && (result = JSON.parse(result[1]));
 return result;
}

function delete_cookie(name) {
  document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/;'].join('');
}
/* Cookie function defs end */

/* Code to display an image in a modal window Begin */

var HomeMenu_A = 
  '<a href=javascript:void(0); class="active">HOME</a>' + 
  '<a href="pages/consulting.html">CONSULTING</a>' +
  '<a href="pages/books.html">PUBLISHING</a>' +
  '<a href="pages/about.html">ABOUT</a>' +
  '<a href="pages/contact.html">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';
  
var ConsultingMenu_A = 
  '<a href="../index.html">HOME</a>' + 
  '<a href=javascript:void(0); class="active" onclick="return false;">CONSULTING</a>' +
  '<a href="../pages/books.html">PUBLISHING</a>' +
  '<a href="../pages/about.html">ABOUT</a>' +
  '<a href="../pages/contact.html">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';
var ConsultingMenu_B =
  '<a href=javascript:void(0); class="active">CONSULTING</a>' +	  
  '<a href="../index.html">HOME</a>' + 
  '<a href="../pages/books.html">PUBLISHING</a>' +
  '<a href="../pages/about.html">ABOUT</a>' +
  '<a href="../pages/contact.html">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';

var BookstoreMenu_A = 
  '<a href="../index.html">HOME</a>' + 
  '<a href="../pages/consulting.html">CONSULTING</a>' +
  '<a href=javascript:void(0); class="active">PUBLISHING</a>' +
  '<a href="../pages/about.html">ABOUT</a>' +
  '<a href="../pages/contact.html">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';
var BookstoreMenu_B =
  '<a href=javascript:void(0); class="active">PUBLISHING</a>' +	  
  '<a href="../index.html">HOME</a>' + 
  '<a href="../pages/consulting.html">CONSULTING</a>' +  
  '<a href="../pages/about.html">ABOUT</a>' +
  '<a href="../pages/contact.html">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';
  
var AboutMenu_A = 
  '<a href="../index.html">HOME</a>' + 
  '<a href="../pages/consulting.html">CONSULTING</a>' +
  '<a href="../pages/books.html">PUBLISHING</a>' +
  '<a href=javascript:void(0); class="active">ABOUT</a>' +
  '<a href="../pages/contact.html">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';
var AboutMenu_B =
  '<a href=javascript:void(0); class="active">ABOUT</a>' +	  
  '<a href="../index.html">HOME</a>' + 
  '<a href="../pages/consulting.html">CONSULTING</a>' +  
  '<a href="../pages/books.html">PUBLISHING</a>' +
  '<a href="../pages/contact.html">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';  

var ContactMenu_A = 
  '<a href="../index.html">HOME</a>' + 
  '<a href="../pages/consulting.html">CONSULTING</a>' +
  '<a href="../pages/books.html">PUBLISHING</a>' +
  '<a href="../pages/about.html">ABOUT</a>' +
  '<a href=javascript:void(0); class="active">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';
var ContactMenu_B =
  '<a href=javascript:void(0); class="active">CONTACT</a>' +	  
  '<a href="../index.html">HOME</a>' + 
  '<a href="../pages/consulting.html">CONSULTING</a>' +  
  '<a href="../pages/books.html">PUBLISHING</a>' +
  '<a href="../pages/about.html">ABOUT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';  

var ForsaleMenu_A = 
  '<a href="../../index.html">HOME</a>' + 
  '<a href="../../pages/consulting.html">CONSULTING</a>' +
  '<a href=javascript:void(0); class="active">PUBLISHING</a>' +
  '<a href="../../pages/about.html">ABOUT</a>' +
  '<a href="../../pages/contact.html">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';
var ForsaleMenu_B =
  '<a href=javascript:void(0); class="active">PUBLISHING</a>' +	  
  '<a href="../../index.html">HOME</a>' + 
  '<a href="../../pages/consulting.html">CONSULTING</a>' +  
  '<a href="../../pages/about.html">ABOUT</a>' +
  '<a href="../../pages/contact.html">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';
  
var SemiDataMenu_A = 
  '<a href="../../index.html">HOME</a>' + 
  '<a href=javascript:void(0); class="active">CONSULTING</a>' +
  '<a href="../../pages/books.html">PUBLISHING</a>' +
  '<a href="../../pages/about.html">ABOUT</a>' +
  '<a href="../../pages/contact.html">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';
var SemiDataMenu_B =
  '<a href=javascript:void(0); class="active">CONSULTING</a>' +	  
  '<a href="../../index.html">HOME</a>' + 
  '<a href="../../pages/books.html">PUBLISHING</a>' +  
  '<a href="../../pages/about.html">ABOUT</a>' +
  '<a href="../../pages/contact.html">CONTACT</a>' +        
  '<a href="javascript:void(0);" class="icon" onclick="DropDownMenu()"><i class="fa fa-bars"></i></a>';              

let subheaderheight = 0;

let subheaderVisible = false;

let headerheight = 0;

let modalVisible = false;

$(document).ready(function(){
	
switch (document.title) {
  case "Home":
    NavMenu_A =  HomeMenu_A;
    NavMenu_B =  HomeMenu_A; 
  break;
  case "Consulting":
    NavMenu_A =  ConsultingMenu_A;
    NavMenu_B =  ConsultingMenu_B;   
  break; 
  case "Publishing":
    NavMenu_A =  BookstoreMenu_A;
    NavMenu_B =  BookstoreMenu_B;   
  break;    
  case "About":
    NavMenu_A =  AboutMenu_A;
    NavMenu_B =  AboutMenu_B;    
  break;  
  case "Contact":
    NavMenu_A =  ContactMenu_A;
    NavMenu_B =  ContactMenu_B;     
  break; 
  case "Semidata":
    NavMenu_A =  SemiDataMenu_A;
    NavMenu_B =  SemiDataMenu_B;      
  break;   
  default: 
    NavMenu_A =  ForsaleMenu_A;
    NavMenu_B =  ForsaleMenu_B;          
}    

/*
if (document.URL.includes("index.html") || doctitle_Home) {
  NavMenu_A =  HomeMenu_A;
  NavMenu_B =  HomeMenu_A;   
}
if (document.URL.includes("consulting.html") || doctitle_Consulting) {
  NavMenu_A =  ConsultingMenu_A;
  NavMenu_B =  ConsultingMenu_B;  
}
if (document.URL.includes("books.html")) {
  NavMenu_A =  BookstoreMenu_A;
  NavMenu_B =  BookstoreMenu_B;  
}
if (document.URL.includes("forsale")) {
  NavMenu_A =  ForsaleMenu_A;
  NavMenu_B =  ForsaleMenu_B;  
}
if (document.URL.includes("about.html")) {
  NavMenu_A =  AboutMenu_A;
  NavMenu_B =  AboutMenu_B;  
}
if (document.URL.includes("contact.html")) {
  NavMenu_A =  ContactMenu_A;
  NavMenu_B =  ContactMenu_B;  
}
if (document.URL.includes("semidata")) {
  NavMenu_A =  SemiDataMenu_A;
  NavMenu_B =  SemiDataMenu_B;  
}
*/

if (window.innerWidth >768) {
  document.getElementById("NavMenuItems").innerHTML = NavMenu_A;	
} else {
  document.getElementById("NavMenuItems").innerHTML = NavMenu_B;		
};

headerheight = document.getElementById("pagHeader").offsetHeight;

let contvertpos = document.getElementById("pagHeader").offsetHeight + "px";

$(".content").css("margin-top", contvertpos);

const contentheight = document.getElementById("pagContent").offsetHeight;

var modal = document.getElementById("popImgModal");

var modalImg = document.getElementById("modal-Image");

var captionText = document.getElementById("modal-Caption");

var scrXpos = window.pageXOffset;

var scrYpos = window.pageYOffset;
	
$(".popImg").click(function(){
  var paintingsize = this.classList[1] || false;
  modalVisible = true;	
  scrXpos = window.pageXOffset;
  scrYpos = window.pageYOffset;		
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera 	
  modal.style.display = "block";
  modal.style.marginTop = document.getElementById("pagHeader").offsetHeight + "px"; 
  modalImg.src = this.src;  
/*  switch (paintingsize) {    
  case "ExcelGraph":
    modalImg.style.width = "960px";
    modalImg.style.height = "578.5px";
    break;      
  case "BookCover":
    modalImg.style.width = "604.4px";
    modalImg.style.height = "960px";
    modalImg.style.resize = both;
  } */
/*  modalImg.style.maxWidth = 98%; */
/*  modalImg.style.height = auto; */       
  var currentcontentheight = modalImg.offsetHeight + 100;
  modal.style.height = currentcontentheight + "px";
  $(".content").height(currentcontentheight + 100);
  $(".content").css("visibility","hidden"); 
}); 

$(".close").click(function(){
  modal.style.display = "none";	
  document.getElementById("popImgModal").style.display = "none";
  modalVisible = false;
  $(".content").height(contentheight);
  $(".content").css("visibility","visible");
  window.scrollTo(scrXpos, scrYpos);
});

function CheckModalHeight1(NewSize){
  var el_1 = document.getElementById("modal-Image"); 
  var el_3 = document.getElementById("popImgModal"); 
  x = el_1.offsetHeight + 100;
  y = el_3.offsetHeight; 
  if (x != y) {
    $(el_3).css("height", x + "px"); 
    $(".content").height(x + "px");    
  }
  $(el_3).css("margin-top", NewSize);	   	
}

/*
$(".content").click(function(){
 alert(contvertpos);
});
*/

/* Code to adjust menu and start of content window top marigin Begin */

const mediaQuery = '(max-width: 768px)';
const mediaQueryList = window.matchMedia(mediaQuery);

mediaQueryList.addEventListener('change', event => {
  if (event.matches) {
	menuYsize = document.getElementById("pagHeader").offsetHeight + "px";
    $(".content").css("margin-top", menuYsize);
    var parentwidth = document.getElementById("pagWrapper").offsetWidth + "px";
    document.getElementById("pagHeader").offsetWidth = parentwidth;
    document.getElementById("NavMenuItems").innerHTML = NavMenu_B;    
    if (modalVisible) {CheckModalHeight1(menuYsize)};
  } else {		
    menuYsize = contvertpos;
    $(".content").css("margin-top", menuYsize);
    var parentwidth = document.getElementById("pagWrapper").offsetWidth + "px";
    document.getElementById("pagHeader").offsetWidth = parentwidth;    
    document.getElementById("NavMenuItems").innerHTML = NavMenu_A;     
    if (modalVisible) {CheckModalHeight1(menuYsize)};    	    
  }
})

/* This function is dupicated outside the $(document).ready function so it is available to html pages after load */
 
function DropDownMenu() {
var x = document.getElementById("pagTopNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  menuYsize = document.getElementById("pagHeader").offsetHeight + "px";
  $(".content").css("margin-top", menuYsize);
  var parentwidth = document.getElementById("pagHeader").offsetWidth + "px";
  $(".pagBanner").width(parentwidth);
}

function storeScrollPos() {
  var XPos = window.scrollX;
  var YPos = window.scrollY - document.getElementById("pagHeader").offsetHeight;
  sessionStorage.setItem("ScrollPosX",XPos);
  sessionStorage.setItem("ScrollPosY",YPos);    
}

$(".EBookCover").click(function(){	
  sessionStorage.setItem("Redirect","On");
  sessionStorage.setItem("scrFlg","On");  
  storeScrollPos();
  bake_cookie('ClickCount',0);   		 
});

$(".subheadClose").click(function(){  
var LandingPage = read_cookie('ClickCount');    
  subheaderVisible = false;
  menuYsize = document.getElementById("pagHeader").offsetHeight + "px";
  $(".content").css("margin-top", menuYsize);  
  history.go(-LandingPage);    
});

}); /* end of $(document).ready function */

function DropDownMenu() {
var x = document.getElementById("pagTopNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  menuYsize = document.getElementById("pagHeader").offsetHeight + "px";
  $(".content").css("margin-top", menuYsize);
}

function CheckModalHeight2(NewSize){
  var el_1 = document.getElementById("modal-Image");  
  var el_3 = document.getElementById("popImgModal"); 
  x = el_1.offsetHeight + 100;
  y = el_3.offsetHeight; 
  if (x != y) {
    $(el_3).css("height", x + "px");
    $(".content").height(x + "px");  
  }
  $(el_3).css("margin-top", NewSize);	   	
}

function SubMenuSet() {
  var addsize = document.getElementById("pagHeader").offsetHeight;
  var CurrCnt = read_cookie('ClickCount');
  CurrCnt = CurrCnt + 1;
  bake_cookie('ClickCount',CurrCnt);
  if (addsize != headerheight) {
	headerheight = addsize;
	menuYsize = headerheight + "px";
    $(".content").css("margin-top", menuYsize);
    if (modalVisible) {CheckModalHeight2(menuYsize)}; 
  } else {
    if (modalVisible) {CheckModalHeight2(addsize)};
  }
  
}

function SubMenuResize() {
  var addsize = document.getElementById("pagHeader").offsetHeight;
  if (addsize != headerheight) {
	headerheight = addsize;
	menuYsize = headerheight + "px";
    $(".content").css("margin-top", menuYsize);
    if (modalVisible) {CheckModalHeight2(menuYsize)};    
  } else {
    if (modalVisible) {CheckModalHeight2(addsize)};
  }  
}
  
/* Code to adjust menu and start of content window top margin End */ 

function initScrollTracker(){
 
var redirect = Boolean(sessionStorage.getItem("Redirect") === "On");
  
if (redirect) {
  var XPos = sessionStorage.getItem("ScrollPosX");
  var YPos = sessionStorage.getItem("ScrollPosY"); 	
  sessionStorage.setItem("Redirect","Off");
  window.scrollTo(XPos, YPos);                                 
} 
else {
  var XPos = 0; var YPos = 0;
  sessionStorage.setItem("ScrollPosX",XPos);
  sessionStorage.setItem("ScrollPosY",YPos);
  window.scrollTo(XPos, YPos);
}
 
}
