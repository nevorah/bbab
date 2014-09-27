<?php
setcookie($_GET["key"],"win",strtotime( '+30 days' ) );
header("location:https://www.facebook.com/sharer/sharer.php?u=".urlencode("http://env-6461067.jelasticlw.com.br/beepbeepandbeep/?key=".$_GET["key"]));