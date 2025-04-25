const input = document.querySelector("input#input");
const button = document.querySelector("button");
const lista = document.querySelector("#lista");
button.addEventListener("click", (event) => {

if (input.value.length <= 2) {
window.alert("O item deve ter, pelo menos, 3 letras.");
} 
else {
const novoItem = document.createElement("li");
const checkboxItem = document.createElement("input");
const textItem = document.createElement("span");
const removeButtonItem = document.createElement("button");
textItem.textContent = input.value;
checkboxItem.setAttribute("type", "checkbox");
removeButtonItem.textContent = "Remover";
novoItem.insertAdjacentElement("beforeend", checkboxItem);
novoItem.insertAdjacentElement("beforeend", textItem);
novoItem.insertAdjacentElement("beforeend", removeButtonItem);
lista.appendChild(novoItem);

removeButtonItem.addEventListener("click", removerItem);
input.value = "";
}
});

function removerItem(event) {
    lista.removeChild(event.target.parentElement);
    }

   