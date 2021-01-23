<?php
if (isset($_POST['sub'])){
    $mymail="armyshopiv@gmail.com"
    $name="Имя: " .$_POST['user'];
    $number="Телефон: " .$_POST['phone'];
    $email="Адрес электронной почты: " .$_POST['mail'];
    $adress="Доставить по адресу: " .$_POST['adress'];
    mail($mymail, $name, $number, $email, $adress);
}
?>