

//function gettoken(){
//    $(document).ready(function() {
//	$('#login-form').submit(function(event) {
//		event.preventDefault();
//		var username = $('#email').val();
//		var password = $('#password').val();
//		console.log(username)
//		console.log(password)
//		$.ajax({
//			url: ' http://127.0.0.1:8000/o/token/',
//			method: 'POST',
//			data: {
//                'grant_type': 'password',
//				'username': username,
//				'password': password,
//				'client_id':'Hf7sIk32PQwoFvAcT2UyzAX4ihOF0Z0OZbU5qJJf',
//				'client_secret': 'ZLXtQvKse5Nbias1ZZFlMZ7oVqEfmDhox9t3tqok2mAOS00hoB0eSchxtJPnoX7rj62U9no8KOznPjX9Sbi0ogviWvcdVEknWKo1NpP1zUmn9GEn3fRsueV2vxz6U29y',
//			},
//			success: function(data) {
//			    console.log(data)
//				localStorage.setItem('access_token', data.access_token);
//				localStorage.setItem('refresh_token', data.refresh_token);
////				window.location.href = '/dashboard/';
//				console.log(data.access_token)
//			},
//			error: function(jqXHR, textStatus, errorThrown) {
//				var error = JSON.parse(jqXHR.responseText).detail;
//				$('#login-form').append('<p class="error">' + error + '</p>');
//			}
//		});
//	});
//});}
//gapi.load('auth2', function() {
//  gapi.auth2.init({
//    client_id: '764718647298-7bgnamsh4fq035aj12oo8u29ahp3dn84.apps.googleusercontent.com',
//    cookie_policy: 'single_host_origin'
//  });
//});

function onSignIn(googleUser) {
  console.log("hello")
  var profile = googleUser.getBasicProfile();
  console.log(profile)
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


