
/**document.addEventListener('contextmenu', event => event.preventDefault());**/ 

/** Sticky Page Header Begin */

/** Code for website links in Footer Begin */

function Lnk2FaceBook() {
  
  var link = document.getElementById("facebook-lnk");
  
  link.href = "https://www.facebook.com/Sevencatsgalerie";
}

function Lnk2YouTube() {
  
  var link = document.getElementById("youtube-lnk");
  
  link.href = "https://www.youtube.com/channel/UC5IF0pEWPpvRl4xFJx3af-Q";
}

function Lnk2SevenCats() {
  
  var link = document.getElementById("sevencats-lnk");
  
  link.href = "https://sevencatsgalerie.com";
}

/** Code for website links in Footer End */

/** Code for slideshow in Gallery tab Begin */

var slideIndex = 1;

function initDivs () {
var x = document.getElementsByClassName("mySlides");
if (x.length > 0) {
document.getElementById("totalslides").innerHTML = x.length;
showDivs(slideIndex);}
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
  document.getElementById("slideindex").innerHTML = slideIndex;
}

/** Code for slideshow in Gallery tab End */

$( document ).ready( initDivs );

/*---------------------- LINKS TO GOOOGLE DRIVE DOCS BEGIN ----------------------*/

function FIVE_YR_OUTLOOK_EUV_2018_TOC_Lnk() {
	
  var link = document.getElementById("five_yr_outlook_euv_2018_toc_lnk");	
	
  link.href ="https://drive.google.com/open?id=16093Pc3sdBc2jfoybRX-otson84kE9z6";
}

function EUV_LITHO_PATENTS_2018_TOC_Lnk() {
	
  var link = document.getElementById("euv_litho_patents_2018_toc_lnk");	
	
  link.href ="https://drive.google.com/open?id=1okaS1Oa3meGIcIhT_R0OpfhOny7a1EvE";
}

function EUV_LITHO_PATENTS_2018_BROCHURE_Lnk() {
	
  var link = document.getElementById("euv_litho_patents_2018_brochure_lnk");	
	
  link.href ="https://drive.google.com/file/d/1U4T0y6hpWlhxQ4OPaUXO0c9P8yzKO8rL/view?usp=sharing";
}

function Semi_Sales_Lnk() {
	
  var link = document.getElementById("semi_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1qGf80zUqeZviAjwu44qFJRnMtedLhveP/view?usp=sharing";
}

function Semi_Equipment_Sales_Lnk() {
	
  var link = document.getElementById("semi_equipment_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/115zPyZVjORJ6D9d9MASxXSpCWVKBJUU8/view?usp=sharing";
}

function Semi_Material_Sales_Lnk() {
	
  var link = document.getElementById("semi_material_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1mysCwnBTwpklUuznl34dPF4rLgnjasHM/view?usp=sharing";
}

function Photomask_Sales_Lnk() {
	
  var link = document.getElementById("photomask_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1_9pnHHtZhKMqDWeKCjnL6n62zC9UtHYB/view?usp=sharing";
}

function Semi_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("semi_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1-gP8wVnrRQt6tBfKkKidbDivekbayDAv/view?usp=sharing";
}

function Semi_Equipment_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("semi_equipment_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1sB0XXIHUpwcYP4_1ep1SlfEc52pqVymq/view?usp=sharing";
}

function Semi_Material_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("semi_material_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1x1HggxxbEDIUvy7uhB2qVfFW2czOuXR-/view?usp=sharing";
}

function Photomask_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("photomask_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1wqoqF2GyOKoMKFt3n3T7JO4pS9_OGD1T/view?usp=sharing";
}

function Deflated_Semi_Sales_Lnk() {
	
  var link = document.getElementById("deflated_semi_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1PfX183j-SLBNWQoAAr8LR8cdzeSIAT9V/view?usp=sharing";
}

function Deflated_Semi_Equipment_Sales_Lnk() {
	
  var link = document.getElementById("deflated_semi_equipment_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1idD1aBhmwHqHsJI3MqchUa-wwdb8E_ll/view?usp=sharing";
}

function Deflated_Semi_Material_Sales_Lnk() {
	
  var link = document.getElementById("deflated_semi_material_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1IRdPNu7d7fm1hkmM9SxTCDxffBCallTH/view?usp=sharing";
}

function Deflated_Photomask_Sales_Lnk() {
	
  var link = document.getElementById("deflated_photomask_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1YsglZrQ4D5i89pWmNCBiKP8xiKEIJL8Y/view?usp=sharing";
}

function Deflated_Semi_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_semi_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1qb6uTltjBM7pcS17u1d4B0kakUsrmzvs/view?usp=sharing";
}

function Deflated_Semi_Equipment_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_semi_equipment_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1HXUU-OvC3JJnbbdYTwEcqw9aWDHjyp75/view?usp=sharing";
}

function Deflated_Semi_Material_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_semi_material_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1Nh1EyBInfxyaO2DmknVapsPHRv8iaWpR/view?usp=sharing";
}

function Deflated_Photomask_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_photomask_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/12_Ogh7QemupGkd7fDMZCi7K8FrbWeJVd/view?usp=sharing";
}

/*---------------------- LINKS TO GOOOGLE DRIVE DOCS END ----------------------*/


/*---------------------- LINKS TO BOOKSELLERS BEGIN ----------------------*/

/* BEGIN: The Human Condition */

function THC_Google_Lnk() {
  
  var link = document.getElementById("thc-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/The_Human_Condition_Our_Place_In_The_Cosmos_In_Lif?id=Y8fVDwAAQBAJ&hl=en_US&gl=US";
}

function THC_Apple_Lnk() {
  
  var link = document.getElementById("thc-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/the-human-condition/id1504740791";
}

function THC_Amazon_Lnk() {
  
  var link = document.getElementById("thc-amazon-lnk");
  
  link.href = "https://www.amazon.com/Human-Condition-Place-Cosmos-Life-ebook/dp/B0861G814X/ref=sr_1_5?qid=1658238819&refinements=p_27%3AStefan+Wurm&s=digital-text&sr=1-5&text=Stefan+Wurm";
}

function THC_Kobo_Lnk() {
  
  var link = document.getElementById("thc-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/the-human-condition-22";
}

/* END: The Human Condition */


/* BEGIN: Consensus Realities */

function CR_Google_Lnk() {
  
  var link = document.getElementById("cr-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Stefan_Wurm_Consensus_Realities?id=7-JXEAAAQBAJ&hl=en_US&gl=US";
}

function CR_Apple_Lnk() {
  
  var link = document.getElementById("cr-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/consensus-realities/id1603501446";
}

function CR_Amazon_Lnk() {
  
  var link = document.getElementById("cr-amazon-lnk");
  
  link.href = "https://www.amazon.com/Consensus-Realities-Importance-Being-Honest-ebook/dp/B09R28SPLG/ref=sr_1_1?qid=1658238852&refinements=p_27%3AStefan+Wurm&s=digital-text&sr=1-1&text=Stefan+Wurm";
}

function CR_Kobo_Lnk() {
  
  var link = document.getElementById("cr-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/consensus-realities";
}

/* END: Consensus Realities */

/* BEGIN: Higher Mathematics Lectures Part One */

function HM1L_EN_Google_Lnk() {
  
  var link = document.getElementById("hm1l-en-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Stefan_Wurm_Higher_Mathematics_Lectures_Part_One?id=a_2VEAAAQBAJ&hl=en_US&gl=US";
}

function HM1L_EN_Apple_Lnk() {
  
  var link = document.getElementById("hm1l-en-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/higher-mathematics-lectures-part-one/id6443924446";
}

function HM1L_EN_Kobo_Lnk() {
  
  var link = document.getElementById("hm1l-en-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/higher-mathematics-lectures-part-one";
}

/* END: Higher Mathematics Lectures Part One */

/* BEGIN: Higher Mathematics Lectures Part Two */

function HM2L_EN_Google_Lnk() {
  
  var link = document.getElementById("hm2l-en-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Stefan_Wurm_Higher_Mathematics_Lectures_Part_Two?id=t4-ZEAAAQBAJ&hl=en_US&gl=US";
}

function HM2L_EN_Apple_Lnk() {
  
  var link = document.getElementById("hm2l-en-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/higher-mathematics-lectures-part-two/id6444165502";
}

function HM2L_EN_Kobo_Lnk() {
  
  var link = document.getElementById("hm2l-en-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/higher-mathematics-lectures-part-two";
}

/* END: Higher Mathematics Lectures Part Two */

/* BEGIN: Higher Mathematics Lectures Part Three */

function HM3L_EN_Google_Lnk() {
  
  var link = document.getElementById("hm3l-en-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Stefan_Wurm_Higher_Mathematics_Lectures_Part_Three?id=vyKcEAAAQBAJ&hl=en_US&gl=US";
}

function HM3L_EN_Apple_Lnk() {
  
  var link = document.getElementById("hm3l-en-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/higher-mathematics-lectures-part-three/id6444495759";
}

function HM3L_EN_Kobo_Lnk() {
  
  var link = document.getElementById("hm3l-en-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/higher-mathematics-lectures-part-three";
}

/* END: Higher Mathematics Lectures Part Three */

/* BEGIN: Higher Mathematics Lectures Part Four */

function HM4L_EN_Google_Lnk() {
  
  var link = document.getElementById("hm4l-en-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Stefan_Wurm_Higher_Mathematics_Lectures_Part_Four?id=Sh6eEAAAQBAJ&hl=en_US&gl=US";
}

function HM4L_EN_Apple_Lnk() {
  
  var link = document.getElementById("hm4l-en-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/higher-mathematics-lectures-part-four/id6444747692";
}

function HM4L_EN_Kobo_Lnk() {
  
  var link = document.getElementById("hm4l-en-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/higher-mathematics-lectures-part-four";
}

/* END: Higher Mathematics Lectures Part Four */

/* BEGIN: Hoehere Mathematik Vorlesungen Erster Teil */

function HM1L_DE_Google_Lnk() {
  
  var link = document.getElementById("hm1l-de-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Stefan_Wurm_H%C3%B6here_Mathematik_Vorlesungen_Erster_T?id=qtpuEAAAQBAJ&hl=en_US&gl=US";
}

function HM1L_DE_Apple_Lnk() {
  
  var link = document.getElementById("hm1l-de-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/h%C3%B6here-mathematik-vorlesungen-erster-teil/id1623380086";
}

function HM1L_DE_Kobo_Lnk() {
  
  var link = document.getElementById("hm1l-de-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/hohere-mathematik-vorlesungen-erster-teil";
}

/* END: Hoehere Mathematik Vorlesungen Erster Teil */

/* BEGIN: Hoehere Mathematik Vorlesungen Zweiter Teil */

function HM2L_DE_Google_Lnk() {
  
  var link = document.getElementById("hm2l-de-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Stefan_Wurm_H%C3%B6here_Mathematik_Vorlesungen_Zweiter?id=y-lvEAAAQBAJ&hl=en_US&gl=US";
}

function HM2L_DE_Apple_Lnk() {
  
  var link = document.getElementById("hm2l-de-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/h%C3%B6here-mathematik-vorlesungen-zweiter-teil/id1624538620";
}

function HM2L_DE_Kobo_Lnk() {
  
  var link = document.getElementById("hm2l-de-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/hohere-mathematik-vorlesungen-zweiter-teil";
}

/* END: Hoehere Mathematik Vorlesungen Zweiter Teil */

/* BEGIN: Hoehere Mathematik Vorlesungen Dritter Teil */

function HM3L_DE_Google_Lnk() {
  
  var link = document.getElementById("hm3l-de-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Stefan_Wurm_H%C3%B6here_Mathematik_Vorlesungen_Dritter?id=iOpxEAAAQBAJ&hl=en_US&gl=US";
}

function HM3L_DE_Apple_Lnk() {
  
  var link = document.getElementById("hm3l-de-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/h%C3%B6here-mathematik-vorlesungen-dritter-teil/id6442897206";
}

function HM3L_DE_Kobo_Lnk() {
  
  var link = document.getElementById("hm3l-de-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/hohere-mathematik-vorlesungen-dritter-teil";
}

/* END: Hoehere Mathematik Vorlesungen Dritter Teil */

/* BEGIN: Hoehere Mathematik Vorlesungen Vierter Teil */

function HM4L_DE_Google_Lnk() {
  
  var link = document.getElementById("hm4l-de-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Stefan_Wurm_H%C3%B6here_Mathematik_Vorlesungen_Vierter?id=zl1zEAAAQBAJ&hl=en_US&gl=US";
}

function HM4L_DE_Apple_Lnk() {
  
  var link = document.getElementById("hm4l-de-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/h%C3%B6here-mathematik-vorlesungen-vierter-teil/id6442938301";
}

function HM4L_DE_Kobo_Lnk() {
  
  var link = document.getElementById("hm4l-de-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/hohere-mathematik-vorlesungen-vierter-teil";
}

/* END: Hoehere Mathematik Vorlesungen Vierter Teil */

/* BEGIN: GS Die Schoensten Sagen - Erster Teil */

function GS_SKA1_DE_Google_Lnk() {
  
  var link = document.getElementById("gs-ska1-de-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Gustav_Schwab_Die_sch%C3%B6nsten_Sagen_des_klassischen?id=5IITEAAAQBAJ&hl=en_US&gl=US";
}

function GS_SKA1_DE_Apple_Lnk() {
  
  var link = document.getElementById("gs-ska1-de-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/die-sch%C3%B6nsten-sagen-des-klassischen-altertums-erster-teil/id1548554832";
}

function GS_SKA1_DE_Amazon_Lnk() {
  
  var link = document.getElementById("gs-ska1-de-amazon-lnk");
  
  link.href = "https://www.amazon.com/sch%C3%B6nsten-Sagen-klassischen-Altertums-Erster-ebook/dp/B08T7LZRNX/ref=sr_1_2?qid=1670445553&refinements=p_27%3AStefan+Wurm&s=digital-text&sr=1-2&text=Stefan+Wurm";
}

function GS_SKA1_DE_Kobo_Lnk() {
  
  var link = document.getElementById("gs-ska1-de-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/die-schonsten-sagen-des-klassischen-altertums-erster-teil-4";
}

/* END: GS Die Schoensten Sagen - Erster Teil */


/* BEGIN: GS Die Schoensten Sagen - Zweiter Teil */

function GS_SKA2_DE_Google_Lnk() {
  
  var link = document.getElementById("gs-ska2-de-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Gustav_Schwab_Die_sch%C3%B6nsten_Sagen_des_klassischen?id=6AIpEAAAQBAJ&hl=en_US&gl=US";  
}

function GS_SKA2_DE_Apple_Lnk() {
  
  var link = document.getElementById("gs-ska2-de-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/die-sch%C3%B6nsten-sagen-des-klassischen-altertums-zweiter/id1562888731";
}

function GS_SKA2_DE_Amazon_Lnk() {
  
  var link = document.getElementById("gs-ska2-de-amazon-lnk");
  
  link.href = "https://www.amazon.com/sch%C3%B6nsten-Sagen-klassischen-Altertums-Zweiter-ebook/dp/B092STT8RB/ref=sr_1_3?qid=1670445583&refinements=p_27%3AStefan+Wurm&s=digital-text&sr=1-3&text=Stefan+Wurm";
}

function GS_SKA2_DE_Kobo_Lnk() {
  
  var link = document.getElementById("gs-ska2-de-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/die-schonsten-sagen-des-klassischen-altertums-zweiter-teil-4";
}

/* END: GS Die Schoensten Sagen - Zweiter Teil */

/* BEGIN: GS Die Schoensten Sagen - Dritter Teil */

function GS_SKA3_DE_Google_Lnk() {
  
  var link = document.getElementById("gs-ska3-de-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Gustav_Schwab_Die_sch%C3%B6nsten_Sagen_des_klassischen?id=GAMpEAAAQBAJ&hl=en_US&gl=US";  
}

function GS_SKA3_DE_Apple_Lnk() {
  
  var link = document.getElementById("gs-ska3-de-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/die-sch%C3%B6nsten-sagen-des-klassischen-altertums-dritter/id1562892474";
}

function GS_SKA3_DE_Amazon_Lnk() {
  
  var link = document.getElementById("gs-ska3-de-amazon-lnk");
  
  link.href = "https://www.amazon.com/sch%C3%B6nsten-Sagen-klassichen-Altertums-Dritter-ebook/dp/B092SS9GC2/ref=sr_1_4?qid=1670445611&refinements=p_27%3AStefan+Wurm&s=digital-text&sr=1-4&text=Stefan+Wurm";
}

function GS_SKA3_DE_Kobo_Lnk() {
  
  var link = document.getElementById("gs-ska3-de-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/die-schonsten-sagen-des-klassischen-altertums-dritter-teil";
}

/* END: GS Die Schoensten Sagen - Dritter Teil */

/* BEGIN: BSW Flowering Art - Part One */

function BMW_WKS1_Apple_Lnk() {
  
  var link = document.getElementById("bmw-wks1-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/flowering-art-the-paintings-of-brigitte-m-wurm/id6443171995?ls=1";
}

function BMW_WKS1_Google_Lnk() {
  
  var link = document.getElementById("bmw-wks1-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Brigitte_M_Wurm_FLOWERING_ART_The_Paintings_of_Bri?id=CPl7EAAAQBAJ&hl=en_US&gl=US";
}

/* END: BSW Flowering Art - Part One */

/* BEGIN: BSW Flowering Art - Part Two */

function BMW_WKS2_Apple_Lnk() {
  
  var link = document.getElementById("bmw-wks2-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/flowering-art-the-paintings-of-brigitte-m-wurm/id6443172267?ls=1";
}

function BMW_WKS2_Google_Lnk() {
  
  var link = document.getElementById("bmw-wks2-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Brigitte_M_Wurm_FLOWERING_ART_The_Paintings_of_Bri?id=DPl7EAAAQBAJ&hl=en_US&gl=US";
}

/* END: BSW Flowering Art - Part Two */

/* BEGIN: BSW Flowering Art - Part Three */

function BMW_WKS3_Apple_Lnk() {
  
  var link = document.getElementById("bmw-wks3-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/flowering-art-the-paintings-of-brigitte-m-wurm/id6443172615?ls=1";
}

function BMW_WKS3_Google_Lnk() {
  
  var link = document.getElementById("bmw-wks3-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Brigitte_M_Wurm_FLOWERING_ART_The_Paintings_of_Bri?id=Dvl7EAAAQBAJ&hl=en_US&gl=US";
}

/* END: BSW Flowering Art - Part Three */

/* BEGIN: BSW Flowering Art - Part Four */

function BMW_WKS4_Apple_Lnk() {
  
  var link = document.getElementById("bmw-wks4-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/flowering-art-the-paintings-of-brigitte-m-wurm/id6443172264?ls=1";
}

function BMW_WKS4_Google_Lnk() {
  
  var link = document.getElementById("bmw-wks4-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Brigitte_M_Wurm_FLOWERING_ART_The_Paintings_of_Bri?id=EPl7EAAAQBAJ&hl=en_US&gl=US";
}

/* END: BSW Flowering Art - Part Four */

/* BEGIN: Technical Mechanics */

function TEME_EN_Google_Lnk() {
  
  var link = document.getElementById("teme-en-google-lnk");
  
  link.href = "https://books.google.com/books?id=dITVEAAAQBAJ&newbks=0&dq=978-1-951894-17-7&source=gbs_navlinks_s";
}

function TEME_EN_Apple_Lnk() {
  
  var link = document.getElementById("teme-en-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/technical-mechanics/id6464541554";
}

function TEME_EN_Kobo_Lnk() {
  
  var link = document.getElementById("teme-en-kobo-lnk");
  
  link.href = "https://www.kobo.com/my/en/ebook/technical-mechanics-2";
}

/* END: Technical Mechanics */

/* BEGIN: Technische Mechanik */

function TEME_DE_Google_Lnk() {
  
  var link = document.getElementById("teme-de-google-lnk");
  
  link.href = "https://books.google.com/books?id=goTVEAAAQBAJ&newbks=0&dq=978-1-951894-18-4&source=gbs_navlinks_s";
}

function TEME_DE_Apple_Lnk() {
  
  var link = document.getElementById("teme-de-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/technische-mechanik/id6464542543";
}

function TEME_DE_Kobo_Lnk() {
  
  var link = document.getElementById("teme-de-kobo-lnk");
  
  link.href = "https://www.kobo.com/my/en/ebook/technische-mechanik-5";
}

/* END: Technische Mechanik */


/* BEGIN: Fundamentals of Physics - Part One */

function PH1L_EN_Google_Lnk() {
  
  var link = document.getElementById("ph1l-en-google-lnk");
  
  link.href = "https://books.google.com/books?id=d7AAEQAAQBAJ&newbks=0&dq=978-1-951894-21-4&source=gbs_navlinks_s";
}

function PH1L_EN_Apple_Lnk() {
  
  var link = document.getElementById("ph1l-en-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/fundamental-of-physics-part-one/id6483937325";
}

function PH1L_EN_Kobo_Lnk() {
  
  var link = document.getElementById("ph1l-en-kobo-lnk");
  
  link.href = "https://www.kobo.com/in/en/ebook/fundamentals-of-physics-part-one";
}

/* END: Fundamentals of Physics - Part One */

/* BEGIN: Grundlagen der Physik - Erster Teil */

function PH1L_DE_Google_Lnk() {
  
  var link = document.getElementById("ph1l-de-google-lnk");
  
  link.href = "https://books.google.com/books?id=h7AAEQAAQBAJ&newbks=0&dq=978-1-951894-20-7&source=gbs_navlinks_s";
}

function PH1L_DE_Apple_Lnk() {
  
  var link = document.getElementById("ph1l-de-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/grundlagen-der-physik-erster-teil/id6483937600";
}

function PH1L_DE_Kobo_Lnk() {
  
  var link = document.getElementById("ph1l-de-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/grundlagen-der-physik-erster-teil";
}

/* END: Grundlagen der Physik - Erster Teil */

/* BEGIN: Der schnelle Brueter */

function DSB_Google_Lnk() {
  
  var link = document.getElementById("dsb-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Katja_Gold_Der_schnelle_Br%C3%BCter_Aus_dem_Leben_eines?id=qKoKEQAAQBAJ&hl=en_US&gl=US";
}

function DSB_Apple_Lnk() {
  
  var link = document.getElementById("dsb-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/der-schnelle-br%C3%BCter/id6503322573?ls=1";
}

function DSB_Amazon_Lnk() {
  
  var link = document.getElementById("dsb-amazon-lnk");
  
  link.href = "https://www.amazon.com/schnelle-Br%C3%BCter-Leben-Werbefossils-German-ebook/dp/B0D5FHTKKQ/ref=sr_1_1?crid=VO8V75E6XZV&dib=eyJ2IjoiMSJ9.EKREOOLFhud8jT0myhjEZsXVcvzEIPgQeeG4EYmgghg861zj2_UNdgRJGMk39z7WHocE5WzZENZkqnNPG75IpS8u4fxJOehiSrxlHUIugKDhEofnv99OT9xvcO87W1tNd_SN6REJs13dpz7IHWALTcvXb-9Rw_RQNA4Od5mT6R9iuf1ABtvUSfe5X1HTwaeXVjSGC2tVZo7crgmDnNa-n7bXX3ddPyDGxMrlhgoY_xo.K9EB9zh7sxxdD0wYE72ueMk5Bdt3lexCIREKdNCWcfk&dib_tag=se&keywords=der+schnelle+br%C3%BCter&qid=1716990441&sprefix=der+schnelle+br%C3%BCter%2Caps%2C207&sr=8-1";
}

function DSB_Kobo_Lnk() {
  
  var link = document.getElementById("dsb-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/der-schnelle-bruter";
}

/* END: Der schnelle Brueter */

/* BEGIN: Von dieser Welt */

function VDW_Google_Lnk() {
  
  var link = document.getElementById("vdw-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Christine_Maria_Wurm_Von_dieser_Welt?id=bPYkEQAAQBAJ&hl=en_US";
}

function VDW_Apple_Lnk() {
  
  var link = document.getElementById("vdw-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/von-dieser-welt/id6723902400?ls=1";
}

function VDW_Amazon_Lnk() {
  
  var link = document.getElementById("vdw-amazon-lnk");
  
  link.href = "https://www.amazon.com/Von-dieser-Welt-Gedichte-German-ebook/dp/B0DJ3KPHK1/ref=sr_1_1?crid=1GD7HBCX0PR8Z&dib=eyJ2IjoiMSJ9.e9q0nhbTVRtrZjhXbG0Hdw.ood_XZCa_-GC5SpQhzMqHTDESj4adqycIV-L2wxPEm0&dib_tag=se&keywords=Christine+Maria+Wurm&qid=1727534586&sprefix=christine+maria+wurm%2Caps%2C101&sr=8-1";
}

function VDW_Kobo_Lnk() {
  
  var link = document.getElementById("vdw-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/von-dieser-welt-2";
}

/* END: Von dieser Welt */

/* BEGIN: Descendants - Species Cousins */

function DES_SC_Google_Lnk() {
  
  var link = document.getElementById("des-sc-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Aver_Omadis_DESCENDANTS?id=1-MxEQAAQBAJ";
}

function DES_SC_Apple_Lnk() {
  
  var link = document.getElementById("des-sc-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/descendants/id6738307451?ls=1";
}

function DES_SC_Amazon_Lnk() {
  
  var link = document.getElementById("des-sc-amazon-lnk");
  
  link.href = "https://www.amazon.com/dp/B0DNV3ZX72/ref=sr_1_1?crid=3H5ALEPRTGY0J&dib=eyJ2IjoiMSJ9.ntEtaLqAQDe1GkhIPI190A.iY9mbiIjFPyN4qaCjal5C3PStSSa3_IYSOsHTiiwYoU&dib_tag=se&keywords=book+aver+omadis+descendants&qid=1732374971&sprefix=book+aver+omadis+descendants%2Caps%2C73&sr=8-1";
}

function DES_SC_Kobo_Lnk() {
  
  var link = document.getElementById("des-sc-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/descendants-12";
}

/* END: Descendants Species Cousins */

/* -------------------- */

