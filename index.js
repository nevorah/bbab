function showhow(show) {
    //get a DIV howto
    var howto = document.getElementById("howto");

    //To aliminate problemas it verify if show variable is set
    // If dont set, show howto div to easy call function
    if (show==null || typeof show=="undefined" || show==true) {
        howto.style.display = "block";
    } else {
        howto.style.display = "none";
    }
}
var memory = "";
var timeschalenge=4;
var isfirsttime = true;
var safe = false;
var beeps=0;
var lastone = false;
function startnow() {
    
    // clear all element to start game
    for (var i=0;i<document.getElementsByClassName("nogame").length;i++){
        document.getElementsByClassName("nogame")[i].style.display = "none";
    }

    

    //load paths
    var main = document.getElementById('main');
    var temp = null;
    var r=0;
    var g=0;
    var b=0; 
    var count = 0
    for (var i=0;i<3;i++) {
        for (var c=0; c<3; c++) {
            temp = document.createElement("button");
            temp.className = "paths";
            temp.id = "path"+count;
            temp.onclick = function() {
                if (!safe) {
                    safe=true;
                    var oldcolor = this.style.backgroundColor;
                    this.style.backgroundColor = "white";
                    var it = this;
                    nextsound();
                    memory += this.id.replace(/path/,'');
                    beeps++;
                    
                    setTimeout(function(){
                        it.style.backgroundColor = oldcolor;
                        safe=false;
                    },300);
                    if (lastone) {
                        alert("OK, one more path add.\n"+
                                "Now, you will redirect to share with a friend this new challenge!\n"
                                +"PS: Write the name of friend on the shared text.");
                        alertx('#FFC','WAIT TO LOAD PAGE TO SHARE IT...',10000);
                        window.location.href="nextchalange.php?key="+ encodeURIComponent(base64.encode(memory));
                        return false;
                    }
                    if (chalange.substr(0,beeps)!=memory.substr(0,beeps) &&
                            lastone==false) {
                        alert("Oh no!!! YOU LOSE!");
                        window.location.reload();
                    }
                    if (beeps==timeschalenge) {
                        if (memory==chalange) {
                            alert("Congratulation! YOU WIN! \n"
                            +"Now select one more path to dificult to your friend!\n"
                            +"After, you will share this chalange with your friend!!!");
                            lastone = true;
                        } else {
                            alert("Oh no!!! YOU LOSE!");
                            window.location.reload();
                        }
                    }
                }
            }
            r = parseInt(Math.random() * 255);
            g = parseInt(Math.random() * 255);
            b = parseInt(Math.random() * 255);
            temp.style.backgroundColor = "rgb("+r+", "+g+", "+b+")" 
            main.appendChild(temp);
            count++;
        }        
    }
    setTimeout(function(){toca();},300);
    
    //verify if exist a chalenge of a friend
    if (typeof chalange=="undefined" || chalange==false || chalange=="") {
        
    }
    
    //alert("Under construction!\n CS50 project\n Come soon...");
    return false;
    
}

var sound = 0;
function nextsound() {
    document.getElementById("audio"+sound).play();
    sound++;
    if (sound==7) { sound=0; }
}

var cplay = 0;
function toca() {
    safe =true;
    var c = chalange.split("");
    var at = c[cplay];
    console.log(at);
    var oldcolor = document.getElementById("path"+at).style.backgroundColor;
    document.getElementById("path"+at).style.backgroundColor = "white";
    nextsound();
    cplay++;
    setTimeout(function(){
        document.getElementById("path"+at).style.backgroundColor = oldcolor;
        if (cplay==c.length) {
            safe=false;
            sound=0;
        } else {
            toca();
        }
    },500);
}

function showchalange() {
    document.getElementById("showchalange").style.display = "block";
}

// JavaScript Document
var alerttime;
function alertx(cor, msg, tempo) {
	if (tempo==undefined) { var tempo=3000; }
	var avisox = document.getElementById("alrx");
	if (avisox==undefined || avisox==null) {
			var avisox = document.createElement('div');
		avisox.setAttribute('id', 'alrx');
		avisox.setAttribute('name', 'alrx');
		avisox.style.position="absolute";
		avisox.style.fontSize="40px";
		avisox.style.fontStretch="expanded";
		avisox.style.left= "0px";
                avisox.style.top= "50%";
		avisox.style.opacity="0.97";
		avisox.style.width= "100%";
		//avisox.style.height="100px";
		avisox.style.zIndex="2000";
		avisox.style.overflow="auto";
		avisox.style.visibility="hidden";
		
		var conteudo = document.body;
		conteudo.appendChild(avisox);
	}
	if (alerttime!=undefined) { clearTimeout(alerttime); }
		//avisox.style.top=  window.pageYOffset + "px";
	avisox.style.visibility='visible';
	if (cor=="") { cor="#FFCDBB"; }
		avisox.style.backgroundColor=cor;
	avisox.innerHTML="<table width='100%' height='100%'><tr><td align='center' valign='Middle' style='font-Size:20px;font-Stretch:expanded'>" + msg + "</td></tr></table>";
	alerttime=setTimeout("document.getElementById('alrx').innerHTML=''; document.getElementById('alrx').style.visibility='hidden';", tempo);	
}