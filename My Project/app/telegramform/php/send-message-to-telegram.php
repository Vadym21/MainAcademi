<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['message'])){
  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
  $name = strip_tags($_POST['name']);
  $nameFieldset = "Имя пославшего: ";
  }
}
if (isset($_POST['email'])) {
  if (!empty($_POST['email'])){
  $email = strip_tags($_POST['email']);
  $emailFieldset = "Пошта: ";
  }
}
if (isset($_POST['phone'])) {
  if (!empty($_POST['phone'])){
  $phone = strip_tags($_POST['phone']);
  $phoneFieldset = "Телефон: ";
  }
}
if (isset($_POST['message'])) {
  if (!empty($_POST['message'])){
  $message = strip_tags($_POST['message']);
  $messageFieldset = "Повідомлення: ";
  }
}
if (isset($_POST['theme'])) {
  if (!empty($_POST['theme'])){
  $theme = strip_tags($_POST['theme']);
  $themeFieldset = "Тема: ";
  }
}
$token = "887375531:AAG9rEiku2FexiHdB9n_ubH_B7d1K7E05rU";
$chat_id = "-305307919";
$arr = array(
  $nameFieldset => $name,
  $emailFieldset => $email,
  $phoneFieldset => $phone,
  $messageFieldset => $message,  
  $themeFieldset => $theme

);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
 
  echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
    return true;
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
  echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
}
} else {
header ("Location: /");
}

?>