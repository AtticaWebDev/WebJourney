const text = document.querySelector("h2");
const btn = document.querySelector("button");

function getValue(e) {
  e.preventDefault();
  const inp = document.querySelector("input").value;
  text.innerText = `Bienvenue ${inp} !`;
}

btn.addEventListener("click", getValue);
