$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
       
		var formData = $('form').serialize();//to arrange the form as serialize array
        //alert(formData)
		var str=formData
		//alert(str)
		$.ajax({
			type: 'POST',
			url: './php/register.php',
			data: str,
			success: function(data){
				alert(data)
				if(data.trim() === "User registered successfully in database."){
							window.location.href = "login.html";

				}else{
					// $("#error-message").html("Invalid Email or Password");
					$("#message").html(data);
				}
			}
			
		});
	});
});


