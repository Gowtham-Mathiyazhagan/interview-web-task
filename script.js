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

// Moblie responsive cerate account and sign in
const writeBtn = document.getElementById("write-btn");
const loginBtn = document.getElementById("login-btn");
const mobileCreate = document.getElementById("mobile-create");
const mobileSignin = document.getElementById("mobile-signin");
// const closeBtn = document.getElementById("")
console.log(mobileCreate, mobileSignin);

writeBtn.addEventListener("click", () => {
  mobileCreate.style.bottom = "0";
});
loginBtn.addEventListener("click", () => {
	mobileCreate.style.bottom = "0";
  });

function closeMobileBox() {
  if (mobileCreate || mobileSignin) {
    mobileCreate.style.bottom = "-520px";
    mobileSignin.style.bottom = "-520px";
  }
}
function goLoginPage(){
	if(mobileSignin || mobileCreate){
		if (mobileSignin) {
            mobileSignin.style.bottom = "0";
        }
        if (mobileCreate) {
            mobileCreate.style.bottom = "-520px";
        }
}

}
function goCreatePage(){
	if(mobileSignin || mobileCreate){
		if (mobileSignin) {
            mobileSignin.style.bottom = "-520px";
        }
        if (mobileCreate) {
            mobileCreate.style.bottom = "0";
        }
}
}