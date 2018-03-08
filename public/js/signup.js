
$(document).ready(function() {

	// Getting a reference to the input field where user adds a new user
	$(document).on("click", "#sign-up-submit", insertUser);
 
	// Getting users from database when page loads
	getUsers();

	// This function grabs users from the database and updates the view
	function getUsers() {
	$.get("/api/users", function(data) {
	  users = data;
	});
	}

	// This function inserts a new user into our database
	function insertUser(event) {
	event.preventDefault();
	var user = {
	   name: $("#signup-name").val().trim(),
	   username: $("#signup-username").val().trim(),
	   email: $("#signup-email").val().trim(),
	   password: $("#signup-password").val().trim()
	};

	$.post("/api/users", user, getUsers);
    // $newItemInput.val("");
  };
});
 
	// // This function deletes a user when the user clicks the delete button
	// function deleteUser(event) {
	// event.stopPropagation();
	// var id = $(this).data("id");
	// $.ajax({
	//   method: "DELETE",
	//   url: "/api/users/" + id
	// }).then(console.log("Player has been deleted"));
	// }

	// // This function updates a user in our database
	// function updateUser(users) {
	// $.ajax({
	//   method: "PUT",
	//   url: "/api/users",
	//   data: users
	// }).then(console.log("Player has been updated."));
	// }

