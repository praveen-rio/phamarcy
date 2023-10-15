// in this  page we 
// checks the value stored in the browser's localStorage with the key "logged_in." 
//It's checking if the value is equal to the string "false.
console.log("checking access");
if(localStorage.getItem("logged_in") == "false")
{
	console.log("user has not logged in");
	$(location).attr("href", "index.html");
}

// here we using function
function logout()
{
	localStorage.setItem("logged_in", "false");
	$(location).attr("href", "index.html");
}