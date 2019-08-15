<?php
   header('Access-Control-Allow-Origin: *');

   
   $email = $_POST['email'];
   $name = $_POST['name'];
   $phone = $_POST['phone'];
   $massege = $_POST['massege'];

   $subject = "=?utf-8?B?".base64_encode("Повідомлення з сайту")."?=";
   $headers = "Form: $email\r\n\Reply-to: $email\t\nContent-type: text/html; charset=utf-8\r\n";

   $success = mail("basaraba.vadum@gmail.com", $subject, $massege, $headers);
   echo $success;
?>