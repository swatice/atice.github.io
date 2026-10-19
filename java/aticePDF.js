var bc1 = new BroadcastChannel('Close Window');

let pdfTab;
let creatorTab

let pdfViewerOpen = false;

function setHostWinURL(){
//var name = active.window.name;
creatorTab = window.document.URL;
alert(creatorTab);
} 

function openPdf(pathstring){
  var pdfLoc = pathstring; 
  pdfTab = window.open('../pages/pdfview/BookViewer.html',"PDF-Viewer"); 
  pdfTab.pdfPath = pdfLoc;
}
  
function closePdf(){
  bc1.postMessage('Close PDF-Viewer');
}

function setPDFViewerRunningFlag(){
  var status = "true";
  localStorage.setItem("PDF-Viewer",status);
}

function delPDFViewerRunningFlag(){
  var status = "false";
  localStorage.setItem("PDF-Viewer",status);
}

function getPdfFlag(){
  var status = localStorage.getItem("PDF-Viewer");
  switch(status) {
    case 'true': return true;
    case 'false': return false;
    default: return false;   
  } 
}

//function goToPdf(pathstring) {
//  var pdfActive = getPdfFlag();
//  alert(pdfActive);
//  if (pdfActive) {
//    closePdf();
//    openPdf(pathstring);
//  } else {
//    openPdf(pathstring);
//  }
//}

// function goToPdf(pathstring) {
//   var tab = document.getElementsByName('PDF-Viewer');
//   alert(tab.length);
//     // alert(tab + '  /  ' + pathstring);
//   // alert(tab + '  /  ' + tab.name + '  /  ' + pathstring);
//   if (tab.length > 0) {
//       closePdf();
//     // pdfTab.window.close();
//       openPdf(pathstring);
//       alert('here: ' + pdfTab.pdfPath);    
//   } else {
//     openPdf(pathstring);
//     alert('2  ' + 'noname');
//   }  
// }

function goToPdf(pathstring) {
  if (pdfTab) {
      pdfTab.window.close();
  } else {
      closePdf();
  }
//  alert(pathstring);
  openPdf(pathstring);
}

//function goToPdf(pathstring) {
//  var tab = document.getElementsByName('PDF-Viewer')[0];
  // alert(tab + '  /  ' + pathstring);
//  alert(tab + '  /  ' + tab.name + '  /  ' + pathstring);
//  if (tab) {
//    if (tab.name == 'PDF-Viewer') { 
//      closePdf();
//      tab.window.close();
//      openPdf(pathstring);
//      alert('here: ' + tab.pdfPath);    
//    } else {
//      openPdf(pathstring);
//       alert('1  ' + tab.name);  
//    }
//  } else {
//    openPdf(pathstring);
//    alert('2  ' + tab.name);
//  }  
//}
