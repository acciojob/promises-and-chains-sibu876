//your JS code here. If required.
const form = document.getElementById("form");

form.addEventListener("submit",(e) =>{
	e.preventDefault();
	const name = document.getElementById("name").value.trim();
	const age = document.getElementById("age").value;

	if(name ==="" || age ===""){
		alert("Please enter valid details");
		return;
	}

	const votePromise = new Promise((resolve,reject)=>{
		setTimeout(() =>{
			if(Number(age) > 18){
				resolve(`Welcome, ${name}. You can vote.`);
			}else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		},4000);
	});

	votePromise.then((message) => alert(message)).catch((error) => alert(error));
	
});