<?php
	// header('Content-type: application/json');
	// $status = array(
	// 	'type'=>'success',
	// 	'message'=>'Thank you for contacting us. We will be in touch with you very soon '
	// );

    $name = @trim(stripslashes($_POST['name'])); 
    $email = @trim(stripslashes($_POST['email'])); 
    $subject = @trim(stripslashes($_POST['subject'])); 
    $message = @trim(stripslashes($_POST['message'])); 

    $email_from = $email;
    $email_to = 'gaismainc@gmail.com';//replace with your email

    // $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' . $message;

    // $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');


    if(mail($email_to, $subject, $message)){
    echo 'Your message has been sent successfully.';
} else{
    echo 'Unable to send message. Please try again.';
}


?>