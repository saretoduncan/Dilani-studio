const txtToggle = e => {
  const duration = 500;
  $(document).ready(() => {
    $(e).click(() => $(e).toggle(duration));
  })
}
txtToggle(".designFig,#designPar");
txtToggle(".devFig,#devPar");
txtToggle(".productFig,#productPar");