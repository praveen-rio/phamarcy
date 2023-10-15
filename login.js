console.clear();



function check_login(event)
{
	
	event.preventDefault();

	
	if($("#username").val() == $("#password").val())
	{
		alert("Login Successful");
		localStorage.setItem("logged_in", "true");
		$(location).attr("href", "admins.html");
	}
	else
	{
		alert("Invalid Login Credentials");
	}
}


$("#login_form").submit(check_login);

// once i login it will show loing and closed my page again i login it shows already login
if(localStorage.getItem("logged_in") == "true")
{
	console.log("user already logged in");
	$(location).attr("href", "admins.html");
}