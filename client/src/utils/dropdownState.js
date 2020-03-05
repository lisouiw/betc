export const dropdownState = open => {
  if (open === "drop-open") {
    let dropDown = document.getElementById("dropdown");
    let dropOpen = document.getElementById("drop-open");
    let option = document.getElementById("option");

    dropOpen.style.bottom = "initial";
    dropOpen.style.flexDirection = "column";
    option.style.borderBottom = "1px solid #5074AD";
    option.style.borderTop = "1px solid #5074AD";

    let dropdownPos =
      dropDown.getBoundingClientRect().top +
      window.scrollY +
      dropDown.scrollHeight;

    if (window.innerHeight < dropdownPos) {
      dropOpen.style.bottom = "0px";
      dropOpen.style.flexDirection = "column-reverse";
      option.style.borderTop = "unset";
      option.style.borderBottom = "1px solid #5074AD";
    }
  }
};
