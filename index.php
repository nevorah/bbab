<!DOCTYPE html>
<html>
    <head>
<meta property="og:url" content="http://env-6461067.jelasticlw.com.br/beepbeepandbeep/?key=<?=$_GET["key"]?>">
<meta property="og:title" content="Beep beep And Beep Challenge!">
<meta property="og:type" content="Game">
<meta property="fb:admins" content="137348699692865"/>
<meta property="og:image" content="http://env-6461067.jelasticlw.com.br/beepbeepandbeep/logo287.png">
<meta property="og:description" content="The game to trainning memory with your friend. Fast and easy!">
<meta name="author" content="Tiago Neves">
<!-- 
This game was made for final project a Harvard Course CS50
//-->
        <title>beepbeepandbeep</title>
        <link href="index.css" rel="stylesheet" type="text/css" />
        <script src="index.js"></script>
        <script src="64.js"></script>
    </head>
    <body>
        <div class="logo nogame"></div>
        <div class="start nogame">
            <button class="how" onclick="showhow()">How to play?</button>
            <button class="now" onclick="startnow()">Start Now!!!</button>
        </div>
        <div class="main" id="main"></div>
        <div id="howto" style="display: none">
            <h2>How to play</h2>
            <p>
                Beep Beep And Beep is a simple and fun game to share with your friends on a  social network.
            </p>
            <ol>
                <li>Click on "Start Now!!!"</li>
                <li>The game starts with four sequences that computer gives.</li>
                <li>Wait until the game shows you the sequence.</li>
                <li>Try to repeat this sequence.</li>
                <li>If you get it, the game will ask you for a one more sequence to grow it.</li>
                <li>After you add this one new block, the game will invite you to share the new sequence with a friend.</li>
                <li>Write name of this friend on text that you will send.</li>
                <li>Wait your friend win the new sequence, and send again to you.</li>
                <li>Thus the sequence grows more difficult! So hang on!!!</li>
            </ol>
            <button onclick="showhow(false)"  style='width:100%;font-size:40px'>All Right</button><br>
            <small>
                If you dont understood send a e-mail to tiago@maiia.net.<br>
            </small>
        </div>
        <div class="rights nogame" >
            This is a project of <br>CS50 Harvard Course.<br>
            Programmer: Tiago Neves<br>
            Reviewer: Caryl Bigenho<br>
            Version: 0.99.01 Beta<br>
            2014
        </div>
        <div id='showchalange' class="showchalange" style="display:none;z-index: 1100">
            <div style='margin: 5%;'><h2>Welcome!!</h2>
            <h3>A friend challenged you to play this game!</h3>
            This game works with repeating paths sequences. 
You have a pre-determinate sequence and you need repeat it.
When you repeat right sequence, the game give you one more step to you, 
and the sequence will grow, 
and you should share the new sequence with your friend. 
<br><br><button  style='width:100%;font-size:40px' onclick='startnow();document.getElementById("showchalange").style.display="none"'>Let's go!</button>
            </div></div>
        <?php for ($i=0;$i<7;$i++) { ?>
        <audio id="audio<?=$i?>" src="snd/<?=$i?>.ogg"></audio>
        <?php } ?>
        
        <!-- <audio id="inicio" src="snd/inicio.ogg" autoplay loop></audio> //-->
        
        <script type="text/javascript">
            var chalange="";
        <?php 
        
        if (isset($_COOKIE[$_GET["key"]])) {
            ?>
             alert("You win this chalange! You need wait your friend play it.");
             window.location.href="http://env-6461067.jelasticlw.com.br/beepbeepandbeep/";
            <?php
            
        } 
        if (isset($_GET["key"])) {
            $nivel = strlen(base64_decode($_GET["key"]));
            echo "\nshowchalange();\n";
        }
        
        
        $fisttime="";
        if (isset($_GET["key"])) { ?>
        setTimeout(function(){
            
            isfirsttime = false;
            chalange = base64.decode("<?=$_GET["key"]?>");
            timeschalenge = chalange.length;
        },100);
        <?php } else {
            for ($i=0;$i<4;$i++) {
                $fisttime .= rand(0, 8);
            }
            ?>
                setTimeout(function(){
                    chalange = "<?=$fisttime?>";
                    timeschalenge=4;
                    
                },100);
            <?php
        } ?>
        
        
        
        
        </script>
        
    </body>
</html>
