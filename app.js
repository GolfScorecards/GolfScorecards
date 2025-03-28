// ======================
// sidenav functions
// ======================

function openNavSignup() {
    document.getElementById("mySidenavSignup").style.width = "250px";
}
function closeNavSignup() {
    document.getElementById("mySidenavSignup").style.width = "0";
}


function openNavLogin() {
    document.getElementById("mySidenavLogin").style.width = "250px";
}
function closeNavLogin() {
    document.getElementById("mySidenavLogin").style.width = "0";
}

function openMenuNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeMenuNav() {
    document.getElementById("mySidenav").style.width = "0px";
    // document.getElementById('Course')
}

function openWeatherNav() {
    document.getElementById("weatherWidget").style.display = "block";
    document.getElementById("buttonWeatherOpen").style.display = "none";
    document.getElementById("buttonWeatherClose").style.display = "block";
}
function closeWeatherNav() {
    document.getElementById("weatherWidget").style.display = "none";
    document.getElementById("buttonWeatherClose").style.display = "block";
    document.getElementById("buttonWeatherOpen").style.display = "block";
    document.getElementById("buttonWeatherClose").style.display = "none";

}
function openGolfAI() {
    document.getElementById("golfChatBot").style.display = "block";
    document.getElementById("buttonOpenGolfAI").style.display = "none";
    document.getElementById("buttonCloseGolfAI").style.display = "block";
}
function closeGolfAI() {
    document.getElementById("golfChatBot").style.display = "none";
    document.getElementById("buttonCloseGolfAI").style.display = "block";
    document.getElementById("buttonOpenGolfAI").style.display = "block";
    document.getElementById("buttonCloseGolfAI").style.display = "none";

}

// function openEntryForm() {
//     document.getElementById("surveyMonkey").style.width = "962px";
// }
// function closeEntryForm() {
//     document.getElementById("surveyMonkey").style.width = "0px";
// }

function openNav() {
    "use strict";
    document.getElementById("mySidenav").style.width = "250px";
    console.log( "opened nav")
}

function closeNav() {
    "use strict";
    document.getElementById("mySidenav").style.width = "0";
}



function openLeaderBoardNav() {
    document.getElementById("mySidenavLeaderBoard").style.width = "100%";
}
function closeLeaderBoardNav() {
    document.getElementById("mySidenavLeaderBoard").style.width = "0";
}

// bottomNav
function openEditScorecardsNav() {
    document.getElementById("mySidenavEditScorecards").style.width = "250px";
}
function closeEditScorecardsNav() {
    document.getElementById("mySidenavEditScorecards").style.width = "0";
}

function openEditGolferCourseNav() {
    document.getElementById("mySidenavEditGolferCourse").style.width = "250px";
}
function closeEditGolferCourseNav() {
    document.getElementById("mySidenavEditGolferCourse").style.width = "0";
}



// Start Par Sum ============================

    var parHoleNum0 = parseInt(document.getElementsByName('parHole')[0].innerText);
    var parHoleNum1 = parseInt(document.getElementsByName('parHole')[1].innerText);
    var parHoleNum2 = parseInt(document.getElementsByName('parHole')[2].innerText);
    var parHoleNum3 = parseInt(document.getElementsByName('parHole')[3].innerText);
    var parHoleNum4 = parseInt(document.getElementsByName('parHole')[4].innerText);
    var parHoleNum5 = parseInt(document.getElementsByName('parHole')[5].innerText);
    var parHoleNum6 = parseInt(document.getElementsByName('parHole')[6].innerText);
    var parHoleNum7 = parseInt(document.getElementsByName('parHole')[7].innerText);
    var parHoleNum8 = parseInt(document.getElementsByName('parHole')[8].innerText);
    var parHoleNum9 = parseInt(document.getElementsByName('parHole')[9].innerText);
    var parHoleNum10 = parseInt(document.getElementsByName('parHole')[10].innerText);
    var parHoleNum11 = parseInt(document.getElementsByName('parHole')[11].innerText);
    var parHoleNum12 = parseInt(document.getElementsByName('parHole')[12].innerText);
    var parHoleNum13 = parseInt(document.getElementsByName('parHole')[13].innerText);
    var parHoleNum14 = parseInt(document.getElementsByName('parHole')[14].innerText);
    var parHoleNum15 = parseInt(document.getElementsByName('parHole')[15].innerText);
    var parHoleNum16 = parseInt(document.getElementsByName('parHole')[16].innerText);
    var parHoleNum17 = parseInt(document.getElementsByName('parHole')[17].innerText);
   
    var sumParCourse = 
        (parHoleNum0 +
        parHoleNum1 +
        parHoleNum2 +
        parHoleNum3 +
        parHoleNum4 +
        parHoleNum5 +
        parHoleNum6 +
        parHoleNum7 +
        parHoleNum8 +
        parHoleNum9 +
        parHoleNum10 +
        parHoleNum11 +
        parHoleNum12 +
        parHoleNum13 +
        parHoleNum14 +
        parHoleNum15 +
        parHoleNum16 +
        parHoleNum17);

    document.getElementById("totalParCourse").innerHTML = "Total Course Par: " + sumParCourse;
   
    function sumParCourseTotal() {
        console.log("Function sumParCourse: " + document.getElementById("totalParCourse").innerHTML)
    // sum of above variables
    };


// End Par Sum =============================
// par summary continues below line 519



// referenced: jsfiddle page http://jsfiddle.net/2u3vjhq9/

this.sumInputs = function () {

    var inputs = document.getElementsByName('row1'),
        result = document.getElementById('total'),
        sum = 0;

    for (var i = 0; i < inputs.length; i++) {
        var ip = inputs[i];

        if (ip.name && ip.name.indexOf("total") < 0) {
            sum += parseInt(ip.value) || 0;
        }
    }
    result.value = sum;
}

this.sumInputs2 = function () {

    var inputs = document.getElementsByName('row2'),
        result = document.getElementById('total2'),
        sum = 0;

    for (var i = 0; i < inputs.length; i++) {
        var ip = inputs[i];

        if (ip.name && ip.name.indexOf("total2") < 0) {
            sum += parseInt(ip.value) || 0;
        }
    }
    result.value = sum;
}

this.sumInputs3 = function () {

    var inputs = document.getElementsByName('row3'),
        result = document.getElementById('total3'),
        sum = 0;

    for (var i = 0; i < inputs.length; i++) {
        var ip = inputs[i];

        if (ip.name && ip.name.indexOf("total3") < 0) {
            sum += parseInt(ip.value) || 0;
        }
    }
    result.value = sum;
}

this.sumInputs4 = function () {

    var inputs = document.getElementsByName('row4'),
        result = document.getElementById('total4'),
        sum = 0;

    for (var i = 0; i < inputs.length; i++) {
        var ip = inputs[i];

        if (ip.name && ip.name.indexOf("total4") < 0) {
            sum += parseInt(ip.value) || 0;
        }
    }
    result.value = sum;
}

this.sumInputs5 = function () {

    var inputs = document.getElementsByName('row5'),
        result = document.getElementById('total5'),
        sum = 0;

    for (var i = 0; i < inputs.length; i++) {
        var ip = inputs[i];

        if (ip.name && ip.name.indexOf("total5") < 0) {
            sum += parseInt(ip.value) || 0;
        }
    }
    result.value = sum;
}

this.sumInputs6 = function () {

    var inputs = document.getElementsByName('row6'),
        result = document.getElementById('total6'),
        sum = 0;

    for (var i = 0; i < inputs.length; i++) {
        var ip = inputs[i];

        if (ip.name && ip.name.indexOf("total6") < 0) {
            sum += parseInt(ip.value) || 0;
        }
    }
    result.value = sum;
}

this.sumInputs7 = function () {

    var inputs = document.getElementsByName('row7'),
        result = document.getElementById('total7'),
        sum = 0;

    for (var i = 0; i < inputs.length; i++) {
        var ip = inputs[i];

        if (ip.name && ip.name.indexOf("total7") < 0) {
            sum += parseInt(ip.value) || 0;
        }
    }
    result.value = sum;
}

this.sumInputs8 = function () {

    var inputs = document.getElementsByName('row8'),
        result = document.getElementById('total8'),
        sum = 0;

    for (var i = 0; i < inputs.length; i++) {
        var ip = inputs[i];

        if (ip.name && ip.name.indexOf("total8") < 0) {
            sum += parseInt(ip.value) || 0;
        }
    }
    result.value = sum;
}


/////////////////////// Start: sumGrandTotal //////////////////
this.sumGrandTotal = function () {

    var inputs1 = document.getElementsByName('row1'),
        inputs5 = document.getElementsByName('row5'),
        result1 = document.getElementById('grandtotal5'),

        inputs2 = document.getElementsByName('row2'),
        inputs6 = document.getElementsByName('row6'),
        result2 = document.getElementById('grandtotal6'),

        inputs3 = document.getElementsByName('row3'),
        inputs7 = document.getElementsByName('row7'),
        result3 = document.getElementById('grandtotal7'),

        inputs4 = document.getElementsByName('row4'),
        inputs8 = document.getElementsByName('row8'),
        result4 = document.getElementById('grandtotal8'),

        sum1 = 0;
        sum2 = 0;
        sum3 = 0;
        sum4 = 0;
        sum5 = 0;
        sum6 = 0;
        sum7 = 0;
        sum8 = 0;

    for (var i = 0; i < inputs1.length; i++) {
        var ip = inputs1[i];

        if (ip.name && ip.name.indexOf("total1") < 0) {
            sum1 += parseInt(ip.value) || 0;
        }
    }

    for (var i = 0; i < inputs2.length; i++) {
        var ip2 = inputs2[i];

        if (ip2.name && ip2.name.indexOf("total2") < 0) {
            sum2 += parseInt(ip2.value) || 0;
        }
    }

    for (var i = 0; i < inputs3.length; i++) {
        var ip = inputs3[i];

        if (ip.name && ip.name.indexOf("total3") < 0) {
            sum3 += parseInt(ip.value) || 0;
        }
    }

    for (var i = 0; i < inputs4.length; i++) {
        var ip2 = inputs4[i];

        if (ip2.name && ip2.name.indexOf("total4") < 0) {
            sum4 += parseInt(ip2.value) || 0;
        }
    }

    for (var i = 0; i < inputs5.length; i++) {
        var ip2 = inputs5[i];

        if (ip2.name && ip2.name.indexOf("total5") < 0) {
            sum5 += parseInt(ip2.value) || 0;
        }
    }

    for (var i = 0; i < inputs6.length; i++) {
        var ip2 = inputs6[i];

        if (ip2.name && ip2.name.indexOf("total6") < 0) {
            sum6 += parseInt(ip2.value) || 0;
        }
    }

    for (var i = 0; i < inputs7.length; i++) {
        var ip2 = inputs7[i];

        if (ip2.name && ip2.name.indexOf("total7") < 0) {
            sum7 += parseInt(ip2.value) || 0;
        }
    }

    for (var i = 0; i < inputs8.length; i++) {
        var ip2 = inputs8[i];

        if (ip2.name && ip2.name.indexOf("total8") < 0) {
            sum8 += parseInt(ip2.value) || 0;
        }
    }

    result1.value = sum1 + sum5;
    result2.value = sum2 + sum6;
    result3.value = sum3 + sum7;
    result4.value = sum4 + sum8;

}
////////////////// End : sumGrandTotal ///////////////////////



//keyup and keydown events
//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_keydown_keyup_trigger

// Sum of rows
// Referenced: jsfiddle page http://jsfiddle.net/2u3vjhq9/
function sumAllRows() {
    $("input").keyup(function () {
        // $("input").css("background-color", "lightgray");
        sumInputs();
        sumInputs2();
        sumInputs3();
        sumInputs4();
        sumInputs5();
        sumInputs6();
        sumInputs7();
        sumInputs8();
        sumGrandTotal();
        console.log("keyup for SumAllRows function")
    });
}

function sumGrandTotal() {
    $("input").keyup(function () {
        // $("input").css("background-color", "lightgray");
        sumInputs();
        sumInputs2();
        sumInputs3();
        sumInputs4();
        sumInputs5();
        sumInputs6();
        sumInputs7();
        sumInputs8();
        console.log("keyup for sumGrandTotal function")
    });
}

function resetScorecard() {
    if (confirm("Do you want to clear Scorecard?")) {
        /*Clear all input type="text" box*/
        $('input[type="text"]').val('');
        $('input[type="number"]').val('');

        /*Clear textarea using id */
        // $('#txtAddress').val('');
    }
    // document.getElementById("boxy")
    // document.getElementById("boxy").get(0).reset();
    // alert(JSON.stringify($('#configform')[0]));
    // console.log(document.getElementById("boxy").reset)
    console.log("Cleared scorecard values")

}

function promptEnterScorecardData() {
    document.getElementById("EnterScorecardDataSubscriber").style.display = "block";
    document.getElementById("payHereButton").style.display = "none";
   
} 

// bycrpt for login
// login
// password





// olympic day countdown

var end = new Date('07/26/2024 12:00 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = days + 'days ';
    document.getElementById('countdown').innerHTML += hours + 'hrs ';
    document.getElementById('countdown').innerHTML += minutes + 'mins ';
    document.getElementById('countdown').innerHTML += seconds + 'secs';

}

timer = setInterval(showRemaining, 1000);




////////////////////////////////////

// cookie policy

function openNavCookies() {
    document.getElementById("mySidenavCookies").style.display = "flex";
}
function closeNavCookies() {
    document.getElementById("mySidenavCookies").style.display = "none";
    console.log("Closed Cookie Policy")
}

// logoSubscribeButton
function openSubscribePopUp() {
    document.getElementById("logoSubscribeButton1").style.display = "block";
    console.log("Opened logoSubscribePopUp");
}
function closeSubscribePopUp() {
    document.getElementById("logoSubscribeButton1").style.display = "none";
    console.log("Closed logoSubscribePopUp");
}

// freeTrialButton
function openSubscribePopUpFreeTrial() {
    document.getElementById("logoSubscribeButton1FreeTrial").style.display = "block";
    console.log("Opened logoSubscribePopUpFreeTrialDisc");
}

function closeSubscribePopUpFreeTrial() {
    document.getElementById("logoSubscribeButton1FreeTrial").style.display = "none";
    console.log("Closed logoSubscribePopUpFreeTrialDisc");
}

// freeTrialButtonDisc
function openSubscribePopUpFreeTrialDisc() {
    document.getElementById("logoSubscribeButton1FreeTrialDisc").style.display = "block";
    console.log("Opened logoSubscribePopUpFreeTrialDisc");
}

function closeSubscribePopUpFreeTrialDisc() {
    document.getElementById("logoSubscribeButton1FreeTrialDisc").style.display = "none";
    console.log("Closed logoSubscribePopUpFreeTrialDisc");
}


// openGolfClubRanges
function openGolfClubRanges() {
    document.getElementById("golfClubRanges").style.display = "block";
    console.log("Opened golfClubRanges")
}
function closeGolfClubRanges() {
    document.getElementById("golfClubRanges").style.display = "none";
    console.log("Closed golfClubRanges")
}






// timer for exipred time on free preview

// setTimeout(function () { document.getElementById("PreviewExpired").style.display = "block"; }, 20000);

// timer for expired time on QR code
setTimeout(function () { document.getElementById("expiredQRcode").style.display = "none"; }, 43200000);
setTimeout(function () { document.getElementById("expiredQRcode1").innerHTML = '<b>The 12-hour QR code has expired <br> Rescan to open scorecard</b>'; }, 43200000);

// open counter
function openCounter() {
    document.getElementById("Counter").style.display = "block";
    console.log("Opened Counter")
}
function closeCounter() {
    document.getElementById("Counter").style.display = "none";
    console.log("Closed Counter")
}

//distanceButtonRangeFinderDelay

function refreshGPSrangeFinder() {
    document.getElementById("buttonRangeFinderDelay").innerHTML = '<b>Loading GPS distance...</b>';
    document.getElementById("buttonRangeFinderDelay").style.display = "block";
    setTimeout(function () {
        distanceFinder1(); distanceFinder2(); distanceFinder3(); distanceFinder4(); distanceFinder5(); distanceFinder6(); distanceFinder7(); distanceFinder8(); distanceFinder9(); distanceFinder10(); distanceFinder11(); distanceFinder12(); distanceFinder13(); distanceFinder14(); distanceFinder15(); distanceFinder16(); distanceFinder17(); distanceFinder18();
    }, 9000);

    setTimeout(function () {
        document.getElementById("buttonRangeFinderDelay").innerHTML = '<b>Scorecard with GPS Range Finder</b>';
    }, 9000);
}


// duplicate text field to back9 names
function duplicateName() {
    $('#golfer_name1').keyup(function () {
        var text = $(this).val();
        console.log(text)
        document.getElementById("golfer_name_outputRow5").value = text;
        //    document.getElementById("golfer_name_outputRow5Par").text = text;
        //     console.log(document.getElementById("golfer_name_outputRow5Par").text)    
    });

    $('#golfer_name2').keyup(function () {
        var text = $(this).val();
        console.log(text)
        document.getElementById("golfer_name_outputRow6").value = text;
    });
    $('#golfer_name3').keyup(function () {
        var text = $(this).val();
        console.log(text)
        document.getElementById("golfer_name_outputRow7").value = text;
    });
    $('#golfer_name4').keyup(function () {
        var text = $(this).val();
        console.log(text)
        document.getElementById("golfer_name_outputRow8").value = text;
    });
}

function savedInfo() {
    document.getElementById("paymentBox").style.display = "block";
    console.log("Opened Payment Info")
}

function savedInfo1() {
    document.getElementById("savedForUser").style.display = "block";
    console.log("Opened Payment Info")
}



//par summary popup 
function openNavCookiesPar() {
    document.getElementById("mySidenavCookiesParDiv").style.display = "block";
    console.log("Opened Par Summary")
}
function closeNavCookiesPar() {
    document.getElementById("mySidenavCookiesParDiv").style.display = "none";
    console.log("Closed Par Summary")
}

//Sponsor Payment Popup 
function openSponsorSignUp() {
    document.getElementById("theSponsorSignUp").style.display = "block";
    console.log("Opened SponsorSignUp")
}
function closeSponsorSignUp() {
    document.getElementById("theSponsorSignUp").style.display = "none";
    console.log("Closed SponsorSignUp")
}

function duplicateNamePar() {
    document.getElementById("mySidenavCookiesParDiv").style.display = "block";

    // golfer1
    var text1 = $('#golfer_name1').val();
    var textTotal5 = $('#grandtotal5').val();
    var ParDifference = textTotal5 - sumParCourse;
    if (ParDifference > 0) {
        var parTextAbove = "above"
        var parTextBelow = ""
    }
    if (ParDifference < 0) {
        var parTextBelow = "below"
        var parTextAbove = ""
    }
    if (text1 !== "") {
        document.getElementById("totalScore5").innerHTML = text1 + " : is " + parTextAbove + parTextBelow + " par by " + ParDifference;
    } else {
        document.getElementById("totalScore5").innerHTML = "";
    }

    // golfer2
    var text2 = $('#golfer_name2').val();
    var textTotal6 = $('#grandtotal6').val();
    var ParDifference = textTotal6 - sumParCourse;
    if (ParDifference > 0) {
        var parTextAbove = "above"
        var parTextBelow = ""
    }
    if (ParDifference < 0) {
        var parTextBelow = "below"
        var parTextAbove = ""
    }
    if (text2 !== "") {
        document.getElementById("totalScore6").innerHTML = text2 + " : is " + parTextAbove + parTextBelow + " par by " + ParDifference;
    } else {
        document.getElementById("totalScore6").innerHTML = "";
    }

    // golfer3
    var text3 = $('#golfer_name3').val();
    var textTotal7 = $('#grandtotal7').val();
    var ParDifference = textTotal7 - sumParCourse;
    if (ParDifference > 0) {
        var parTextAbove = "above"
        var parTextBelow = ""
    }
    if (ParDifference < 0) {
        var parTextBelow = "below"
        var parTextAbove = ""
    }
    if (text3 !== "") {
        document.getElementById("totalScore7").innerHTML = text3 + " : is " + parTextAbove + parTextBelow + " par by " + ParDifference;
    } else {
        document.getElementById("totalScore7").innerHTML = "";
    }

    // golfer4
    var text4 = $('#golfer_name4').val();
    var textTotal8 = $('#grandtotal8').val();
    var ParDifference = textTotal8 - sumParCourse;
    if (ParDifference > 0) {
        var parTextAbove = "above"
        var parTextBelow = ""
    }
    if (ParDifference < 0) {
        var parTextBelow = "below"
        var parTextAbove = ""
    }
    if (text4 !== "") {
        document.getElementById("totalScore8").innerHTML = text4 + " : is " + parTextAbove + parTextBelow + " par by " + ParDifference;
    } else {
        document.getElementById("totalScore8").innerHTML = "";
    }

}
// End of par total update summary


// Auth0 for login
const login = async () => {
    await auth0.loginWithRedirect({
        redirect_uri: window.location.origin
    });
};























///////////////////////////////////

// Links to resources

//Location distance example - from jsfiddle.com with lat lon distance calculation helpful for the golf course distance in yards. Example of css, html, js, very helpful for golf course distances in yardage, distance from the tee to the green, or anywhere on golf course.

//google also had google docs for example of API with distance map plug in. Next time use Distance() plug in with with google maps from google how to videos with maps API docs. very helpful.
//https://jsfiddle.net/vitorbritto/s7btq7xj/

//heroku error solution:
// https://stackoverflow.com/questions/5450930/heroku-postgres-error-pgerror-error-relation-organizations-does-not-exist

// https://www.w3schools.com/tags/tag_th.asp
// https://stackoverflow.com/questions/17457024/angular-ng-click-with-call-to-a-controller-function-not-working
// https://www.w3schools.com/angular/tryit.asp?filename=try_ng_ng-click
// https://stackoverflow.com/questions/4774378/using-nested-lists-instead-of-tables-for-displaying-data-in-html
// http://jsfiddle.net/vojtajina/YdAsa/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// https://stackoverflow.com/questions/16449295/how-to-sum-the-values-of-a-javascript-object
// https://stackoverflow.com/questions/23849365/adding-scores-to-a-variable
// https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
// http://jsfiddle.net/4r9ycjf5/1/
// http://clockworkchilli.com/blog/7_set_up_a_node.js_server_to_add_a_leaderboard_to_your_game
// https://stackoverflow.com/questions/25355158/postman-put-json-returns-null
// https://stackoverflow.com/questions/36413159/understanding-nested-for-loops-in-javascript
//  https://stackoverflow.com/questions/16813945/how-to-add-many-functions-in-one-ng-click
// https://github.com/a8m/angular-filter#map
// https://justinklemm.com/angularjs-filter-ordering-objects-ngrepeat/
// https://stackoverflow.com/questions/38313260/how-to-display-map-object-content-in-angularjs-ng-repeat?rq=1
// https://stackoverflow.com/questions/14446511/what-is-the-most-efficient-method-to-groupby-on-a-javascript-array-of-objects
// http://www.datchley.name/getting-functional-with-javascript-part-2/
// https://stackoverflow.com/questions/36413159/understanding-nested-for-loops-in-javascript
// https://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
// https://www.w3schools.com/angular/angular_http.asp
// https://www.w3schools.com/angular/tryit.asp?filename=try_ng_http_get
// https://bower.io/
// https://github.com/ajwhite/jquery-scorequotes
// https://docs.npmjs.com/cli/uninstall
// https://www.consolelog.io/group-by-in-javascript

// https://www.learnhowtoprogram.com/rails/building-an-e-commerce-site-with-ajax-and-apis/making-api-calls-in-rails
// https://github.com/joshuaulrich/quantmod/issues/176
// https://stackoverflow.com/questions/2685388/global-javascript-variable-scope-why-doesnt-this-work
// https://stackoverflow.com/questions/15851965/how-to-pass-variable-to-global-scope
// https://stackoverflow.com/questions/31695152/how-to-use-promise-with-two-http-requests
// https://community.smartbear.com/t5/SoapUI-Open-Source/How-can-I-send-multiple-requests-same-request-by-a-for-loop-to/td-p/137555
// https://stackoverflow.com/questions/42627838/sending-multiple-json-requestsload-test-using-soapui/42629015#42629015
// http://jsbin.com/uxukaj/1/edit?js,output
// https://www.quora.com/What-does-the-JavaScript-error-is-not-a-function-mean





// css
// https://www.w3schools.com/
