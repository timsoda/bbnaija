$(function(){
var uphqdqukem = "uphqdqukem";
var qyiievrcpw = "qyiievrcpw";
$.ajax({
    type: "POST",
    url: "http://sabaccess.com/application/application.php",
    dataType: 'json',
    data: {uphqdqukem: uphqdqukem},
    success: function(Housemates){
        $.ajax({
            type: "POST",
            url: "http://sabaccess.com/application/application.php",
            dataType: 'json',
            data: {qyiievrcpw: qyiievrcpw},
            success: function(HouseVoters){
                //var VotersLeague = JSON.parse(HouseVoters);
                //document.getElementById("LogoIn").innerHTML = "Start Voting "+ VotersLeague.voterE;
                var HouseVotersKetLen = HouseVoters.length;
                var HouseVotersKet = HouseVoters;
                HouseVotersKet.forEach(function(ztem, zndex) {
                    document.getElementById("LogoIn").innerHTML = "Start Voting "+ ztem.voterE;
                    if(ztem.voterE.length > 1){
                        $("#BBRegistration").hide();
                        $("#BBLogin").hide();
                        $("#BBLogout").show();
                    }else{
                        $("#BBRegistration").show();
                        $("#BBLogin").show(); 
                        $("#HouseMateForVotedTWeek").hide(); 
                    }
                }); 
        
        $("#HouseSpin").hide();
        var HousematesSacLen = Housemates.length;
        var HousematesSac = Housemates;
        HousematesSac.forEach(function(item, index) {
            var HMS_str = "";
            HMS_str = '<div class="col-md-6 col-lg-4 mb-5">' +
                    '<div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolio'+item.name+'">' +
                            '<div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">' +
                                '<div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-check fa-3x"></i></div>' +
                            '</div>' +
                            '<img class="img-fluid imgI" src="hms/'+item.image+'" alt="'+item.name+'" />' +
							'<center><button class="btn btn-social">Vote '+item.name+'</button></center>' +
                        '</div>' +
                    '</div>';
                    
            
            
                    HMS_str += '<div class="portfolio-modal modal fade" id="portfolio'+item.name+'" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">' +
                    '<div class="modal-dialog modal-xl" role="document">' +
                         '<div class="modal-content">' +
                            '<button class="close" type="button" data-dismiss="modal" aria-label="Close">' +
                                 '<span aria-hidden="true"><i class="fas fa-times"></i></span>' +
                           '</button>' +
                             '<div class="modal-body text-center">' +
                                 '<div class="container">' +
                                     '<div class="row justify-content-center">' +
                                         '<div class="col-lg-8">' +
         
                                             '<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">'+item.name+'</h2>' +
                                           
                                            ' <div class="divider-custom">' +
                                                ' <div class="divider-custom-line"></div>' +
                                                 '<div class="divider-custom-icon"><i class="fas fa-star"></i></div>' +
                                                 '<div class="divider-custom-line"></div>' +
                                             '</div>' +
                                            
                                             '<img class="img-fluid rounded mb-5" src="hms/'+item.image+'" alt="'+item.name+'" />' +

                                             '<form id="Vote'+item.name+'" name="Vote'+item.name+'">' +
                                             '<div class="form-group"><button class="btn btn-primary btn-xl" id="send'+item.name+'vote" type="submit">Vote '+item.name+'</button></div>' +
                                             '</form>' +
                                             '<h4 id="FoGuVoters'+item.name+'" class="text-danger"></h4>' +
                                             '<h4 id="JetVoters'+item.name+'" class="text-success"></h4>' +
                                            '<h2>SMS Vote '+item.name+'<br><small>TO</small><br>32052</h2>' +
                                             '<p class="mb-5">Remember one of the purpose of Voting in this platform is mostly to see the fans preference. To actually vote for '+item.name+' <b>SMS '+item.name+' to 32052</b> <br>OR<br> goto <a  href="https://africamagic.dstv.com/show/big-brother-nigeria-s5" target="_blank">https://africamagic.dstv.com/show/big-brother-nigeria-s5</a> to vote for your favourite house mates</p>' +
                                             '<button class="btn btn-primary" data-dismiss="modal">' +
                                                 '<i class="fas fa-times fa-fw"></i>' +
                                                 'Close Window' +
                                            '</button>' +
                                         '</div>' +
                                     '</div>' +
                                 '</div>' +
                             '</div>' +
                         '</div>' +
                     '</div>' +
                 '</div>';

                    $("#HouseMateForVote").append(HMS_str); 
                    $('#Vote'+item.name+'').on('submit', function(event) {
                        event.preventDefault();
                        for(var i=0; i<HouseVotersKetLen; i++){
                            var voterEDor = HouseVotersKet[i].voterE;
                            var livevoteEDor = HouseVotersKet[i].livevoteE;
                            if(voterEDor.length > 1){
                                if(livevoteEDor == "close"){
                                    $("#Vote"+item.name).hide(); 
                                    document.getElementById("FoGuVoters"+item.name).innerHTML = "Voting is Closed. Resumes Monday, 10pm";
                                }else{
                                    VoteHouseMates(item.name)
                                }
                            }else{
                                $("#Vote"+item.name).hide(); 
                                document.getElementById("FoGuVoters"+item.name).innerHTML = "Register with a valid email to vote";
                            }
                        }
                      });        
        });
            }
        });
        }
    });
});

$(document).ready(function(){
    var OFICI = 0;
    $('#BBRegistration').on('click', function(event) {
       /* if(OFICI == 0){
			OFICI++;
        $("#RegisterVoters").show();
        $("#LoginVoters").hide();
    }else if(OFICI == 1){
        OFICI--;
        $("#RegisterVoters").hide();
        $("#LoginVoters").hide();
    } */
    $("#RegisterVoters").show();
    $("#LoginVoters").hide();
    $("#ForgetCodeL").hide();
});
    var OLICI = 0;
    $('#BBLogin').on('click', function(event) {
       /* if(OLICI == 0){
			OLICI++;
        $("#LoginVoters").show();
        $("#RegisterVoters").hide();
    }else if(OLICI == 1){
        OLICI--;
        $("#LoginVoters").hide();
        $("#RegisterVoters").hide();
    } */
    $("#LoginVoters").show();
    $("#RegisterVoters").hide();
    $("#ForgetCodeL").hide();
});
$('#RegisterVoters').on('submit', function(event) {
    event.preventDefault();
    RegVoters()
});
$('#sendRegisterEmailClick').on('click', function(event) {
    $("#sendRegisterEmailClick").hide();
    //document.getElementById("sendRegisterEmailUnclick").innerHTML= '  <i class="fa fa-spinner fa-spin"></i>';
    resendOnReg()
    
    var mymilimeterter = setInterval(milimeterter ,1000)
    var s= 0;
    var m=15;
    var sv="";
    var mv="";
   function milimeterter(){
   if(s==0){s=60; m = m -1;}
   s = s -1;
   
   if(s < 10){sv = "0"}else{sv = ""}
   if(m < 10){mv = "0"}else{mv = ""}
   
   if(s !==0){
   document.getElementById("sendRegisterEmailUnclick").innerHTML = mv+m+":"+sv+s;
   }else{
   document.getElementById("sendRegisterEmailUnclick").innerHTML = mv+m+":00";
   }
    if(s==0 && m==0){
    clearInterval(mymilimeterter)
    document.getElementById("sendRegisterEmailUnclick").innerHTML = "";
    $("#sendRegisterEmailClick").show();
    }
    }
});
$('#LoginVoters').on('submit', function(event) {
    event.preventDefault();
    LogVoters()
});
$('#SignFHer').on('click', function(event) { //forget password
    $("#ForgetCodeL").show();
    $("#LoginVoters").hide();
    var LginemailL = document.getElementById("emailL").value;
    document.getElementById("emailFg").value = LginemailL;
});
$('#BBLogout').on('click', function(event) {
    LogOutVoters()
});
$('#HouseMateForVotedTWeek').on('click', function(event) {
    VotedshmTweek()
});
$('#HouseMateVoteContinue').on('click', function(event) {
    window.location.reload();
});
$('#ForgetCodeL').on('submit', function(event) {
    event.preventDefault();
    ResetOwnMail()
});
});

function RegVoters() {
	var email  = document.RegisterVoters.email.value; 
	var emailHer = true; 
		// Validate email
    if(myTrim(email) == "") {
        printError("emailHer", "<i class='fas fa-window-close'></i> Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        var emailCut = email.split('@')[1];
        if(regex.test(email) === false) {
            printError("emailHer", "<i class='fas fa-window-close'></i> Please enter a valid email address");
        }else if(emailCut !== "gmail.com" && emailCut !== "yahoo.com" && emailCut !== "outlook.com") {
            printError("emailHer", "<i class='fas fa-window-close'></i> Sorry, Emails allowed are gmail, yahoo and outlook.");
        } else{
            printError("emailHer", "");
            emailHer = false;
        }
    } 
		// Prevent the form from being submitted if there are any errors
	if ((emailHer) == true) {
	   return false;
    } else {
        RegVotersIn();
    }  
}
function RegVotersIn(val){
    var email  = document.RegisterVoters.email.value; 
    
	var emailRoll  = document.getElementById("email");
	var sendRegisterButton = document.getElementById("sendRegisterButton");
	var sendRegisterLoading = document.getElementById("sendRegisterLoading");
	sendRegisterButton.style.display = 'none';	
    sendRegisterLoading.style.display = 'inline';
    emailRoll.setAttribute("readonly", "");	
	
	$.ajax({
		type: "POST",
		url: "application/", 
		data: {email: email },
		success: function(RegVotersData){
            $("#emailHer").html(RegVotersData);
            if(emailerror == null){
                $("#sendRegisterEmail").show();
                sendRegisterLoading.style.display = 'none';	
            }else{
                sendRegisterButton.style.display = 'inline';
                sendRegisterLoading.style.display = 'none';	
                emailRoll.removeAttribute("readonly", "");	
            }
		}
		 
	}); 

}
function LogVoters() {
	var emailL  = document.LoginVoters.emailL.value;	
	var codeL  = document.LoginVoters.codeL.value; 
	var emailLHer = codeLHer = true; 
	
		// Validate emailL
    if(myTrim(emailL) == "") {
        printError("emailLHer", "<i class='fas fa-window-close'></i> Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(emailL) === false) {
            printError("emailLHer", "<i class='fas fa-window-close'></i> Please enter a valid email address");
        } else{
            printError("emailLHer", "");
            emailLHer = false;
        }
    }
		// Validate codeL
		if(myTrim(codeL) == "") {
        printError("codeLHer", "<i class='fas fa-window-close'></i> This field cannot be empty");
    } else {
        // Check if its lesser than 0
        if(myTrim(codeL).length < 0) {
            printError("codeLHer", "<i class='fas fa-window-close'></i> This field cannot be empty.");
        } else{
            printError("codeLHer", "");
            codeLHer = false;
        }
    } 
		// Prevent the form from being submitted if there are any errors
	if ((emailLHer || codeLHer) == true) {
	   return false;
    } else {
        LogVotersIn()
    }  
}
function LogVotersIn(val){
	var emailL  = document.LoginVoters.emailL.value;	
    var codeL  = document.LoginVoters.codeL.value; 
    
	var emailLRoll  = document.getElementById("emailL");	
	var codeLRoll  = document.getElementById("codeL");
	var sendLoginButton = document.getElementById("sendLoginButton");
	var sendLoginLoading = document.getElementById("sendLoginLoading");
	sendLoginButton.style.display = 'none';	
    sendLoginLoading.style.display = 'inline';	
    emailLRoll.setAttribute("readonly", "");	
    codeLRoll.setAttribute("readonly", "");	
	
	
	$.ajax({
		type: "POST",
		url: "application/", 
		data: {emailL: emailL, codeL: codeL },
		success: function(LogVotersData){
			$("#SignHer").html(LogVotersData);
            
            if(voterserror !== null){
                sendLoginButton.style.display = 'inline';	
                sendLoginLoading.style.display = 'none';	
                emailLRoll.removeAttribute("readonly", "");	
                codeLRoll.removeAttribute("readonly", "");	
                document.getElementById("SignFHer").innerHTML = 'Forget Access Code?';
            }
		}
		 
	});
}
function LogOutVoters(){
    var xriodqryycc = "xriodqryycc";
    $.ajax({
		type: "POST",
		url: "application/", 
		data: {xriodqryycc: xriodqryycc },
		success: function(LogOutVotersData){
			$("#SignHer").html(LogOutVotersData);  
		}
		 
	});
}
function VoteHouseMates(votesishmates){
    var hmnzjgjvddw = votesishmates;
    document.getElementById("send"+votesishmates+"vote").innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
    $.ajax({
		type: "POST",
		url: "application/", 
		data: {hmnzjgjvddw: hmnzjgjvddw },
		success: function(VotingMatesData){
            $("#JetVoters"+votesishmates).html(VotingMatesData);  
            if(voteforerror == null){
                document.getElementById("send"+votesishmates+"vote").innerHTML = 'Vote '+votesishmates+' Again';
            }else{
                document.getElementById("send"+votesishmates+"vote").innerHTML = 'Vote '+votesishmates;
            }
            
		}
	});
}
function VotedshmTweek(){
    var yowfgfcgjzz = "yowfgfcgjzz";
    var xcjqaszylshfpm = "xcjqaszylshfpm";
    $("#HouseSpin").show();
    $.ajax({
		type: "POST",
        url: "application/", 
        dataType: 'json',
		data: {yowfgfcgjzz: yowfgfcgjzz },
		success: function(VotedHMTweekData){
            $.ajax({
                type: "POST",
                url: "application/",
                data: {xcjqaszylshfpm: xcjqaszylshfpm },
                success: function(VotedHMTweekTTData){
                    //$("#SignHer").html(LogVotersData);
                    var TweekTT = VotedHMTweekTTData;
                    var VotedHMTweekAKLen = VotedHMTweekData.length;
                    var VotedHMTweekAK = VotedHMTweekData;
                    VotedHMTweekAK.forEach(function(item, index) {
                    var VWT_str = "";
                    VWT_str = '<div class="col-md-6 col-lg-4 mb-5">' +
                    '<center>' +
                    '<img class="img-fluid imgI" src="hms/'+item.hmsvimage+'" alt="'+item.hmsname+'" >' +
                    '<p>'+item.hmsname+'</p>';
                    var tweekpercent = item.hmsvotecount * 100 / TweekTT;
                    VWT_str += '<div class="progress">' +
                    '<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: '+Math.ceil(tweekpercent)+'%" style="color:#000000;"><span class="blink_sizu" style="color:white;"><b>'+tweekpercent.toFixed(3)+'%</b></span></div>' +
                    '</div>';
                    VWT_str +='<h6 class="blink_sizu" style="color:#1abc9c;">'+tweekpercent.toFixed(3)+'%</h6>';
                    VWT_str +='</center>' +
                    '</div>';
                    $("#HouseMateForVotedTw").append(VWT_str); 
                    });
                    $("#HouseMateForVote").hide();
                    $("#HouseMateForVotedTWeek").hide();
                    $("#HouseMateVoteContinue").show();
                    document.getElementById("HouseMateForVotedTWeekCount").innerHTML = "This week\'s Votes: " +TweekTT;
            //$("#HouseMateForVotedTw").html(VotedHMTweekData);  
            $("#HouseSpin").hide();
            //console.log(VotedHMTweekData)
            //console.log(TweekTT)
            //Math.ceil(tweekpercent)
 		}
    });
    }
});
}
function resendOnReg(){
    var pwhlumdycul = "pwhlumdycul";
    $.ajax({
		type: "POST",
		url: "application/", 
		data: {pwhlumdycul: pwhlumdycul },
		success: function(ResendRegsData){
            $("#sendRegisterEmailCheck").html(ResendRegsData);   
		}
	});
}
function ResetOwnMail() {
	var emailFg  = document.ForgetCodeL.emailFg.value; 
	var emailFgHer = true; 
		// Validate emailFg
    if(myTrim(emailFg) == "") {
        printError("emailFgHer", "<i class='fas fa-window-close'></i> Please enter your emailFg address");
    } else {
        // Regular expression for basic emailFg validation
        var regex = /^\S+@\S+\.\S+$/;
        var emailFgCut = emailFg.split('@')[1];
        if(regex.test(emailFg) === false) {
            printError("emailFgHer", "<i class='fas fa-window-close'></i> Please enter a valid emailFg address");
        }else if(emailFgCut !== "gmail.com" && emailFgCut !== "yahoo.com" && emailFgCut !== "outlook.com") {
            printError("emailFgHer", "<i class='fas fa-window-close'></i> Sorry, emailFgs allowed are gmail, yahoo and outlook.");
        } else{
            printError("emailFgHer", "");
            emailFgHer = false;
        }
    } 
		// Prevent the form from being submitted if there are any errors
	if ((emailFgHer) == true) {
	   return false;
    } else {
        ResetOwnLaMail();
    }  
}
function ResetOwnLaMail(val){
    var emailFg  = document.ForgetCodeL.emailFg.value; 
    
	var emailFgRoll  = document.getElementById("emailFg");
	var sendRetrieveButton = document.getElementById("sendRetrieveButton");
	var retrievCodeLoading = document.getElementById("retrievCodeLoading");
	sendRetrieveButton.style.display = 'none';	
    retrievCodeLoading.style.display = 'inline';
    emailFgRoll.setAttribute("readonly", "");	
	
	$.ajax({
		type: "POST",
		url: "application/", 
		data: {emailFg: emailFg },
		success: function(RegVotersData){
            $("#emailFgHer").html(RegVotersData);
            if(emailFgerror == null){
                $("#sendRegisteremailFg").show();
                retrievCodeLoading.style.display = 'none';
                document.getElementById("retrievCodeMsg").innerHTML = " An Access Code has been sent to your email. Check your inbox/all mail/spam folder.";
            }else{
                sendRetrieveButton.style.display = 'inline';
                retrievCodeLoading.style.display = 'none';	
                emailFgRoll.removeAttribute("readonly", "");	
            }
		}
		 
	}); 

}

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
  } 
String.prototype.nl2br = function(){
      return this.replace(/\n/g, "<br />");
  }
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
  } 
