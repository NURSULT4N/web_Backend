document.querySelector("h2").style.marginBottom = '25px';
document.querySelector("h2").style.marginTop = '15px';

//localStorage.setItem("user", "undefined");

$(document).ready(function() {


	for (let key in localStorage){
		if (key.includes('@')){
			let name = JSON.parse(localStorage.getItem(key)).Name;
			let email = JSON.parse(localStorage.getItem(key)).Email;
			let password = JSON.parse(localStorage.getItem(key)).Password;

			let node = document.createElement("tr");
			let nodeName = document.createElement("td");
			let nodeEmail = document.createElement("td");
			let nodePassword = document.createElement("td");	
			let otmena = document.createElement("span");
			otmena.classList.add("closebtn");
			otmena.addEventListener("click", function(){
				if (name == localStorage.getItem("user")){
					localStorage.setItem("user", "undefined");
					localStorage.removeItem(email);
					window.location = "index.html";
				}else {
					localStorage.removeItem(email);
					location.reload();
				}
			});
			otmena.innerHTML = "x";
			nodeName.innerHTML= name;
			nodeEmail.innerHTML = email;
			nodePassword.innerHTML = password;
			node.appendChild(nodeName);
			node.appendChild(nodeEmail);
			node.appendChild(nodePassword);
			node.appendChild(otmena);
			document.getElementById("tbody").appendChild(node);
		}
	}
});

function Leave () {
	localStorage.setItem("user", "undefined");
	window.location = "index.html";
}