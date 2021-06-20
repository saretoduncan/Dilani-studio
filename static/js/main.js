//start....what we do section
const design = ".designFig,#designPar" //Design section
const development = ".devFig,#devPar" //Development section
const product = ".productFig,#productPar" // project management section

//toggle function to what we do section
const txtToggle = e => {
    const duration = 500;
    $(document).ready(() => {
      $(e).click(() => $(e).toggle(duration));
    })
  }
  //....
const weDO = [design, development, product]
weDO.forEach(e => txtToggle(e));
//end...what we do section