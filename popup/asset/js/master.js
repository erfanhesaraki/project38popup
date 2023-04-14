let _openBtn = document.getElementById("openBtn");
let _cloceBtn = document.getElementById("cloceBtn");
let _popup = document.getElementById("popup");

_openBtn.addEventListener("click", function () {
  _popup.classList.add("open-popup");
});

_cloceBtn.addEventListener("click", function () {
  _popup.classList.remove("open-popup");
});
