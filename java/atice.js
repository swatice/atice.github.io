
/* document.addEventListener('contextmenu', event => event.preventDefault()); */ 

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
    
  link.href ="https://drive.google.com/file/d/1c_KEKEaUxGFwnR3zO83Ry8zELgfE5RNh/view?usp=sharing";
}

function Semi_Equipment_Sales_Lnk() {
	
  var link = document.getElementById("semi_equipment_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1jojLfZg5KmVWYqgCAHmCx0v2pZiuEd4u/view?usp=sharing";
}

function Semi_Material_Sales_Lnk() {
	
  var link = document.getElementById("semi_material_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1cJGJiiNu31MLbCK9O2OtKT3GqrxXgTLU/view?usp=sharing";
}

function Photomask_Sales_Lnk() {
	
  var link = document.getElementById("photomask_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1eVJ9bPsad9iPlGlUhQAedk2VF67EEf_t/view?usp=sharing";
}

function Semi_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("semi_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1YzfUI-qpGzQKh9asaSOGCJNsLIDNi6CM/view?usp=sharing";
}

function Semi_Equipment_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("semi_equipment_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1AWfJjTC3cTHMOj87jN3IW8UYjV44Rp3H/view?usp=sharing";
}

function Semi_Material_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("semi_material_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1l1smAh_dpmC8ibcYO7ljrYtRZ8DWFxte/view?usp=sharing";
}

function Photomask_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("photomask_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1ziT4cpl_JQ2tNI8S8YlDB_hXPZnrMO49/view?usp=share_link";
}

function Deflated_Semi_Sales_Lnk() {
	
  var link = document.getElementById("deflated_semi_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1RbB0MhoM1AOwMGqeAswJxViqYVxmYEXh/view?usp=sharing";
}

function Deflated_Semi_Equipment_Sales_Lnk() {
	
  var link = document.getElementById("deflated_semi_equipment_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1mGDKkawd2__BR7jPHzLvBYa6Ii18fqQp/view?usp=sharing";
}

function Deflated_Semi_Material_Sales_Lnk() {
	
  var link = document.getElementById("deflated_semi_material_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/13EZihMa_kju3S17CNg2pElh2iNAQFFjG/view?usp=sharing";
}

function Deflated_Photomask_Sales_Lnk() {
	
  var link = document.getElementById("deflated_photomask_sales_lnk");		
    
  link.href ="https://drive.google.com/file/d/1U6e5dWYha8-J_ps6v_FmbCBi6ih-XECt/view?usp=sharing";
}

function Deflated_Semi_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_semi_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1TYKzRtSI1pWyf4VoAiD5i1GbHCViAjiR/view?usp=sharing";
}

function Deflated_Semi_Equipment_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_semi_equipment_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/18W04It3b-qya22vp3dz094FX05piln0y/view?usp=sharing";
}

function Deflated_Semi_Material_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_semi_material_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1RABL_yVIXoqVLr0mNge4uWUROM3WOcsJ/view?usp=sharing";
}

function Deflated_Photomask_Sales_CAGR_Lnk() {
	
  var link = document.getElementById("deflated_photomask_sales_cagr_lnk");		
    
  link.href ="https://drive.google.com/file/d/1u5F8yT0e5h1RosJLBD-vlp4fy-t7Q1l7/view?usp=sharing";
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


/* -------------------- */

