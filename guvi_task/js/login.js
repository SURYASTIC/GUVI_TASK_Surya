

$(document).ready(function(){
    $("#login").click(function(){
        var username = $("input[name='email']").val();
        var password = $("input[name='password']").val();
        alert(username)
        $.ajax({
            url: "./php/login.php",
            type: "POST",
            data: {email: username, password: password},
            // success: function(data){
            //     $("#message").html(data);
            // }
            success: function(response){
                var res = JSON.parse(response);
                alert(res.msg);

                if(res.msg === "success"){
                    // alert('success');
                    // window.location.href = "./profile.html";
                    var exp = (new Date(Date.now() + 86400 * 1000)).toUTCString();
                    localStorage.setItem('datas',username);
                    window.location.href="profile.html"
                    $("#message").html(data);
                }else{
                    // $("#error-message").html("Invalid Email or Password");
                    $("#message").html(data);
                }
            }
        });
    });
});


function signup(e){
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var user ={
        email: email,
        password: password,
    };

    var json= JSON.stringify(user);
    localStorage.setItem('User', json);
    console.log('user added');
}

