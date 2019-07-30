<script>
	$(document).ready(function(){
	console.log("Hi beesesss");
	});
		function validatefeedback(){
			var x = document.forms["feedback"]["name"].value;
			if (x=="") {
				alert("First Name should be filled");
				return false;
			}
			var x = document.forms["feedback"]["address"].value;
			if (x=="") {
				alert("Address should be filled");
				return false;
			}
			var x = document.forms["feedback"]["email"].value;
			if (x=="") {
				alert("Email field should be filled");
				return false;
			}
			var x = document.forms["feedback"]["telno"].value;
			if (x=="") {
				alert("Telephone no field should be filled");
				return false;
			}
			var x = document.forms["feedback"]["rating"].value;
			if (x=="") {
				alert("Ratings should be filled");
				return false;
			}
			var x = document.forms["feedback"]["comments"].value;
			if (x=="") {
				alert("Comments should be filled");
				return false;
			}
			else{
				var name = document.forms["feedback"]["name"].value;
				var rate = document.forms["feedback"]["rating"].value;
				var com = document.forms["feedback"]["comments"].value;
				alert("Dear "+name+", Thank you for your feedback. You rated the site as "+rate+" and your comment was "+com);
			}
		}
	</script>