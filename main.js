const productImg = document.getElementById("productImg");
const btns = document.getElementsByClassName("btn");

btns[0].onclick = () => {
  productImg.src = "ii.jpg";
  setActive(btns[0]);
};
btns[1].onclick = () => {
  productImg.src = "okk.jpg";
  setActive(btns[1]);
};
btns[2].onclick = () => {
  productImg.src = "jkh.jpg";
  setActive(btns[2]);
};

function setActive(activeBtn) {
  Array.from(btns).forEach((btn) => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}
