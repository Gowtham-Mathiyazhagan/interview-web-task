const dropdown = document.getElementById("login");
dropdown.addEventListener("click", () => {
  const ul = document.getElementById("ul");
  ul.style.display = "block";
});

dropdown.addEventListener("click", (e) => {
  const create = document.getElementById("create");
  const signin = document.getElementById("signin");
//   const body = document.getElementsByTagName("body");
  if (e.target.id == "ul-first") {
	document.body.classList.add("color");
    create.style.display = "block";
  } else if (e.target.id == "ul-second") {
    signin.style.display = "block";
	document.body.classList.add("color");
  }
});

function closeBox() {
  const create = document.getElementById("create");
  const ul = document.getElementById("ul");
  const signin = document.getElementById("signin");
  if (create || ul || signin) {
    create.style.display = "none";
    signin.style.display = "none";
    ul.style.display = "none";
	document.body.classList.remove("color");
  }
}
