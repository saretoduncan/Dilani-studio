//toggle function to what we do section
const txtToggle = e => {
    const duration = 500;
    $(document).ready(() => {
      $(e).click(() => $(e).toggle(duration));
    })
  }
  //....
txtToggle(".designFig,#designPar"); //Design section
txtToggle(".devFig,#devPar"); //Development section
txtToggle(".productFig,#productPar"); //project management section