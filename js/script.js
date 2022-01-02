
/*--Setting variables--*/
let submit_img  = document.getElementById("submit-img");
let submit      = document.getElementById("submit");
let input_group = document.querySelector(".input-group");
let form_email  = document.querySelector("#form-email");


/*--Input Form--*/
input_group.addEventListener("mouseover", function( event ) {
    submit_img.src="/img/ic_arrow_hover.svg";
    /*submit.style.borderTop      = "1px solid #4066A5";
    submit.style.borderBottom   = "1px solid #4066A5";
    submit.style.borderRight    = "1px solid #4066A5";*/

    form_email.style.border         = "1px solid #4066A5";
    form_email.style.borderLeft     = "4px solid #4066A5";
},false);
input_group.addEventListener("mouseout", function( event ) {
    submit_img.src="/img/ic_arrow.svg";
    /*submit.style.borderTop      = "1px solid #E3E3E4";
    submit.style.borderBottom   = "1px solid #E3E3E4";
    submit.style.borderRight    = "1px solid #E3E3E4";*/
    
    form_email.style.border         = "1px solid #E3E3E4";
    form_email.style.borderLeft     = "4px solid #E3E3E4";
},false);


