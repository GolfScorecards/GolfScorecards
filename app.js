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
    document.getElementById("mySidenavMenu").style.width = "250px";
}
function closeMenuNav() {
    document.getElementById("mySidenavMenu").style.width = "0";
}

function openWeatherNav() {
    document.getElementById("mySidenavWeather").style.width = "250px";
}
function closeWeatherNav() {
    document.getElementById("mySidenavWeather").style.width = "0";
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

    // console.log("this is the total :" + result1.value)
    // console.log("this is the total :" + result2.value)
    // console.log("this is the total :" + result3.value)
    // console.log("this is the total :" + result4.value)
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
    console.log("Opened logoSubscribePopUp")
}
function closeSubscribePopUp() {
    document.getElementById("logoSubscribeButton1").style.display = "none";
    console.log("Closed logoSubscribePopUp")
}


// timer for exipred time on free preview

// setTimeout(function () { document.getElementById("PreviewExpired").style.display = "block"; }, 20000);

// timer for expired time on QR code
// setTimeout(function () { document.getElementById("expiredQRcode").style.display = "none"; }, 10000);
// setTimeout(function () { document.getElementById("expiredQRcode1").innerHTML = '<b>QR code has expired</b>'; }, 10000);




///////////////////////////////////

// Links to resources

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

