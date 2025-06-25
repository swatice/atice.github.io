var myState = {
  pdf:null,
  currentPage:1,
  evenPage:2,
  zoom:1,
  rotation:0
}
       
function fetchPDF(url){
if (url != 0){
    var loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(pdf => {
      myState.pdf = pdf
      document.getElementById("even_page").innerHTML = myState.evenPage;
      document.getElementById("total_pages").innerHTML = myState.pdf._pdfInfo.numPages;
      render()
    });
  } else {
 System.out.println("PDF book file not found");	
  }       
}
        
function render(){
  myState.pdf.getPage(myState.currentPage).then(page => {
    var canvas_1 = document.getElementById("pdf_renderer_1")
    var context_1 = canvas_1.getContext("2d")
    var viewport_1 = page.getViewport(myState.zoom,myState.rotation)
    var outputScale = window.devicePixelRatio || 1;
    var transform_1 = outputScale !== 1
      ? [outputScale, 0, 0, outputScale, 0, 0]
      : null;

    canvas_1.width = viewport_1.width;
    canvas_1.height = viewport_1.height;

    // rendering the page
               
    var renderContext_1 = {
      canvasContext: context_1,
      transform: transform_1,
      viewport: viewport_1
    };

    page.render(renderContext_1);    
  })
    
  myState.pdf.getPage(myState.currentPage + 1).then(page => {
    var canvas_2 = document.getElementById("pdf_renderer_2")
    var context_2 = canvas_2.getContext("2d")
    var viewport_2 = page.getViewport(myState.zoom,myState.rotation)
    var outputScale = window.devicePixelRatio || 1;
    var transform_2 = outputScale !== 1
      ? [outputScale, 0, 0, outputScale, 0, 0]
      : null;

    canvas_2.width = viewport_2.width;
    canvas_2.height = viewport_2.height;

    // rendering the page

    var renderContext_2 = {
      canvasContext: context_2,
      transform: transform_2,
      viewport: viewport_2
    };

    page.render(renderContext_2);          
  })
}

function flipPage(n) {
  if(n == 1){
    if(myState.pdf == null || myState.currentPage >= myState.pdf._pdfInfo.numPages - 2) return;           
    myState.currentPage = myState.currentPage + 2;
    myState.evenPage = myState.currentPage + 1;
    myState.rotation = 0;
    document.getElementById("current_page").value = myState.currentPage;
    document.getElementById("even_page").innerHTML = myState.evenPage;
    document.getElementById("total_pages").innerHTML = myState.pdf._pdfInfo.numPages;
    render()
  }
  if(n ==-1){
    if(myState.pdf == null || myState.currentPage < 3) return;           
    myState.currentPage = myState.currentPage - 2;
    myState.evenPage = myState.currentPage + 1;
    myState.rotation = 0;
    document.getElementById("current_page").value = myState.currentPage;
    document.getElementById("even_page").innerHTML = myState.evenPage;
    document.getElementById("total_pages").innerHTML = myState.pdf._pdfInfo.numPages;
    render()
  }
  if(n == 10){
    if(myState.pdf == null || myState.currentPage >= myState.pdf._pdfInfo.numPages - 2) return;           
    if (myState.currentPage + n >= myState.pdf._pdfInfo.numPages - 2) {
        myState.currentPage = myState.pdf._pdfInfo.numPages - 1;
        myState.evenPage = myState.currentPage + 1;                        
    } else {
        myState.currentPage = myState.currentPage + n;
        myState.evenPage = myState.currentPage + 1;
    }
    myState.rotation = 0;
    document.getElementById("current_page").value = myState.currentPage;
    document.getElementById("even_page").innerHTML = myState.evenPage;
    document.getElementById("total_pages").innerHTML = myState.pdf._pdfInfo.numPages;
    render()
  }
  if(n ==-10){
    if(myState.pdf == null || myState.currentPage < 3) return;
    if (myState.currentPage + n >= 1) {
        myState.currentPage = myState.currentPage + n;
        myState.evenPage = myState.currentPage + 1;                        
    } else {
        myState.currentPage = 1;
        myState.evenPage = myState.currentPage + 1;
    }
    myState.rotation = 0;
    document.getElementById("current_page").value = myState.currentPage;
    document.getElementById("even_page").innerHTML = myState.evenPage;
    document.getElementById("total_pages").innerHTML = myState.pdf._pdfInfo.numPages;
    render()
  }
}
        
function plusZoom(n) {
  if(n == 1){
    if(myState.pdf == null) return; 
    myState.zoom = myState.zoom + 0.075;
    myState.rotation = 0;
    render()
  }
  if(n ==-1){
    if(myState.pdf == null) return; 
    myState.zoom = myState.zoom - 0.075;
    myState.rotation = 0;
    render()
  }
}

// document.getElementById("current_page")
// .addEventListener('keypress', (e) => {
//   if(myState.pdf == null) return;           
//   // get the keycode
//   var code = (e.keycode ? e.keyCode : e.which)
//   if(code == 13){
//     var desiredPage = document.getElementById("current_page").valueAsNumber
//     if(desiredPage >= 1 && desiredPage < myState.pdf._pdfInfo.numPages - 1){
//       if(desiredPage % 2 == 0){ 
//         desiredPage = desiredPage - 1;
//       }
//       myState.currentPage = desiredPage;
//       myState.evenPage = myState.currentPage + 1;
//       document.getElementById("current_page").value = myState.currentPage;
//       document.getElementById("even_page").innerHTML = myState.evenPage;
//       render()
//     } else {
//       document.getElementById("current_page").value = myState.currentPage;
//       render()
//     }
//   }                                   
// })

// document.getElementById("zoom_in")
// .addEventListener('click', (e) => {
//   if(myState.pdf == null) return; 
//   myState.zoom = myState.zoom + 0.1;
//   myState.rotation = 0;
//   render()
// })

// document.getElementById("zoom_out")
// .addEventListener('click', (e) => {
//   if(myState.pdf == null) return; 
//   myState.zoom = myState.zoom - 0.1;
//   myState.rotation = 0;
//   render()
// })
  