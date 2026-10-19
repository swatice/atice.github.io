
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
    
  link.href ="https://drive.google.com/file/d/1cfFwQ_YmNtmnqoZRCjWuUKq2_loj_SV7/view?usp=sharing";
}

function Semi_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("semi_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1ZSynbxKdfwgfh3zPTHnysHF5DN2m5MOF/view?usp=sharing";
}

function Semi_Equipment_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("semi_equipment_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/11B4SQiTbfyyIRG-pJms2yJpCkxn_OQSD/view?usp=sharing";
}

function Semi_Material_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("semi_material_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1YS_WPpqyc_FDzbRuZnfbTSvRMT5KSgvw/view?usp=sharing";
}

function Photomask_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("photomask_sales_cagr_lnk");		
     
  link.href ="https://drive.google.com/file/d/1wqoqF2GyOKoMKFt3n3T7JO4pS9_OGD1T/view?usp=sharing";
}

function Deflated_Semi_Sales_Lnk() {
	
  var link = document.getElementById("deflated_semi_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1TaUeooT2cY5WBnBKQ5bmUGlZ4RVsQE6L/view?usp=sharing";
}

function Deflated_Semi_Equipment_Sales_Lnk() {
	
  var link = document.getElementById("deflated_semi_equipment_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1loc73FM8cgGmy6rO0TpkTWS7kzeDE730/view?usp=sharing";
}

function Deflated_Semi_Material_Sales_Lnk() {
	
  var link = document.getElementById("deflated_semi_material_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1dWxNGKUZUXjyglVzuiHVNlUIASutWVIf/view?usp=sharing";
}

function Deflated_Photomask_Sales_Lnk() {
	
  var link = document.getElementById("deflated_photomask_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1LLatmEPXYtBCDL_U8NMBrHLBTAzdaPmK/view?usp=sharing";
}

function Deflated_Semi_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_semi_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1vYqGIKUiYVv9kDnYOqet-iHeaGdbIsqu/view?usp=sharing";
}

function Deflated_Semi_Equipment_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_semi_equipment_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1J7PcXKZLqXXKhxPbQZKvNZzlKTEJcDH9/view?usp=sharing";
}

function Deflated_Semi_Material_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_semi_material_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1KK5_C3a593gO-62jvOzua1rHcCtKzdcr/view?usp=sharing";
}

function Deflated_Photomask_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_photomask_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1myiD_RQbONoreE1FxR70_Kc5w-J6rcrI/view?usp=sharing";
}

/*---------------------- LINKS TO GOOOGLE DRIVE DOCS END ----------------------*/


/*---------------------- LINKS TO BOOKSELLERS BEGIN ----------------------*/

/* BEGIN: The Human Condition */

function THC_Google_Lnk() {
  
  var link = document.getElementById("thc-google-lnk");
  
  link.href = "https://play.google.com/store/books/details?id=Y8fVDwAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=7-JXEAAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=a_2VEAAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=t4-ZEAAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=vyKcEAAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=Sh6eEAAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=qtpuEAAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=y-lvEAAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=iOpxEAAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=zl1zEAAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=5IITEAAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=6AIpEAAAQBAJ";  
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
  
  link.href = "https://play.google.com/store/books/details?id=GAMpEAAAQBAJ";  
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
  
  link.href = "https://play.google.com/store/books/details?id=CPl7EAAAQBAJ";
}

/* END: BSW Flowering Art - Part One */

/* BEGIN: BSW Flowering Art - Part Two */

function BMW_WKS2_Apple_Lnk() {
  
  var link = document.getElementById("bmw-wks2-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/flowering-art-the-paintings-of-brigitte-m-wurm/id6443172267?ls=1";
}

function BMW_WKS2_Google_Lnk() {
  
  var link = document.getElementById("bmw-wks2-google-lnk");
  
  link.href = "https://play.google.com/store/books/details?id=DPl7EAAAQBAJ";
}

/* END: BSW Flowering Art - Part Two */

/* BEGIN: BSW Flowering Art - Part Three */

function BMW_WKS3_Apple_Lnk() {
  
  var link = document.getElementById("bmw-wks3-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/flowering-art-the-paintings-of-brigitte-m-wurm/id6443172615?ls=1";
}

function BMW_WKS3_Google_Lnk() {
  
  var link = document.getElementById("bmw-wks3-google-lnk");
  
  link.href = "https://play.google.com/store/books/details?id=Dvl7EAAAQBAJ";
}

/* END: BSW Flowering Art - Part Three */

/* BEGIN: BSW Flowering Art - Part Four */

function BMW_WKS4_Apple_Lnk() {
  
  var link = document.getElementById("bmw-wks4-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/flowering-art-the-paintings-of-brigitte-m-wurm/id6443172264?ls=1";
}

function BMW_WKS4_Google_Lnk() {
  
  var link = document.getElementById("bmw-wks4-google-lnk");
  
  link.href = "https://play.google.com/store/books/details?id=EPl7EAAAQBAJ";
}

/* END: BSW Flowering Art - Part Four */

/* BEGIN: Technical Mechanics */

function TEME_EN_Google_Lnk() {
  
  var link = document.getElementById("teme-en-google-lnk");
  
  link.href = "https://play.google.com/store/books/details?id=dITVEAAAQBAJ";
}

function TEME_EN_Apple_Lnk() {
  
  var link = document.getElementById("teme-en-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/technical-mechanics/id6464541554";
}

function TEME_EN_Kobo_Lnk() {
  
  var link = document.getElementById("teme-en-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/technical-mechanics-2";
}

/* END: Technical Mechanics */

/* BEGIN: Technische Mechanik */

function TEME_DE_Google_Lnk() {
  
  var link = document.getElementById("teme-de-google-lnk");
  
  link.href = "https://play.google.com/store/books/details?id=goTVEAAAQBAJ";
}

function TEME_DE_Apple_Lnk() {
  
  var link = document.getElementById("teme-de-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/technische-mechanik/id6464542543";
}

function TEME_DE_Kobo_Lnk() {
  
  var link = document.getElementById("teme-de-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/technische-mechanik-5";
}

/* END: Technische Mechanik */


/* BEGIN: Fundamentals of Physics - Part One */

function PH1L_EN_Google_Lnk() {
  
  var link = document.getElementById("ph1l-en-google-lnk");
  
  link.href = "https://play.google.com/store/books/details?id=d7AAEQAAQBAJ";
}

function PH1L_EN_Apple_Lnk() {
  
  var link = document.getElementById("ph1l-en-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/fundamental-of-physics-part-one/id6483937325";
}

function PH1L_EN_Kobo_Lnk() {
  
  var link = document.getElementById("ph1l-en-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/fundamentals-of-physics-part-one";
}

/* END: Fundamentals of Physics - Part One */

/* BEGIN: Fundamentals of Physics - Part Two */

function PH2L_EN_Google_Lnk() {
  
  var link = document.getElementById("ph2l-en-google-lnk");
  
  link.href = "https://play.google.com/store/books/details?id=5YEaEgAAQBAJ";
}

function PH2L_EN_Apple_Lnk() {
  
  var link = document.getElementById("ph2l-en-apple-lnk");
  
  link.href = "https://books.apple.com/au/book/fundamentals-of-physics-part-two/id6822380323?l=en-GB";
}

function PH2L_EN_Kobo_Lnk() {
  
  var link = document.getElementById("ph2l-en-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/fundamentals-of-physics-part-two";
}

/* END: Fundamentals of Physics - Part TWo */

/* BEGIN: Grundlagen der Physik - Erster Teil */

function PH1L_DE_Google_Lnk() {
  
  var link = document.getElementById("ph1l-de-google-lnk");
  
  link.href = "https://play.google.com/store/books/details?id=h7AAEQAAQBAJ";
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

/* BEGIN: Grundlagen der Physik - Zweiter Teil */

function PH2L_DE_Google_Lnk() {
  
  var link = document.getElementById("ph2l-de-google-lnk");
  
  link.href = "https://play.google.com/store/books/details?id=w4EaEgAAQBAJ";
}

function PH2L_DE_Apple_Lnk() {
  
  var link = document.getElementById("ph2l-de-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/grundlagen-der-physik-zweiter-teil/id6822390586";
}

function PH2L_DE_Kobo_Lnk() {
  
  var link = document.getElementById("ph2l-de-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/grundlagen-der-physik-zweiter-teil";
}

/* END: Grundlagen der Physik - Zweiter Teil */

/* BEGIN: Der schnelle Brueter */

function DSB_Google_Lnk() {
  
  var link = document.getElementById("dsb-google-lnk");
  
  link.href = "https://play.google.com/store/books/details?id=qKoKEQAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=bPYkEQAAQBAJ";
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
  
  link.href = "https://play.google.com/store/books/details?id=1-MxEQAAQBAJ";
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

