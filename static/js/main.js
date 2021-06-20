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
//start... form section
$(document).ready(() => {
    $("#submit").click((e) => {
      if ($("#email").val() === "" || $("#name").val() === "") {
        e.preventDefault();
        alert(`enter your Name and email address`);
      } else alert(`${$("#name").val()} we have received your message. Thank you for reaching out to us. `);
      $("form").trigger("reset");
    });
  })
  //end.. form section