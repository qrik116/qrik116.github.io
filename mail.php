<?php

$recepient = "qrik116@gmail.com";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$phone = trim($_GET["tel"]);
$Car = trim($_GET["Car"])

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \n";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>