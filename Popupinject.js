  function collectHeight() {
      var e = Math.max(document.documentElement.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight,
      document.documentElement.offsetHeight);
      document.getElementById("overlay").style.height = e + "px";
      document.getElementById("outerbox").style.height = e + "px";
}

function closeFunction() {
  document.getElementById("outerbox").style.display ="none",
  document.getElementById("overlay").style.display = "none"
}

function ajax_post() {
    var e = new XMLHttpRequest,
        t = "postData.php",
        i = document.getElementById("emailAddress").value,
        o = "email=" + i;
        e.open("POST", t, !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.onreadystatechange =
        function() {
            if (4 == e.readyState && 200 == e.status) {
                var t = e.responseText;
                document.getElementById("subscribeForm").innerHTML = t, document.getElementById(
                    "optWrap").style.display = "none"
            }
        }, e.send(o)
}

/*-----THE CSS OBJECT-----------*/
cssFile = "*{margin:0; padding:0}.clearfix:after{visibility:hidden;display:block;font-size:0;content:'';clear: both;height:0}* html .clearfix{zoom:1}*:first-child+html .clearfix{zoom:1} #overlay{position:absolute; width:100%; height:100%; background:#fff; opacity:0.8; top:0; left:0; -ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)'; filter: alpha(opacity=40) !important; -moz-opacity: 0.8; -khtml-opacity: 0.8; opacity: 0.8} #outerbox{position:absolute; top:0;z-index:1; left:0; width:100%; height:100%; _z-index:999} #popup{width:600px; font-family:verdana; position:relative; margin:8% auto 0; padding:20px 0; background:#fff; box-shadow:0px 0px 60px 10px #ccc; _z-index:0}#subForm{margin:0 auto}#emailAddress{padding:10px 2%; border:0; height:30px; font-size:15px; width:96%; margin-bottom:15px; border-radius:5px;-moz-border-radius:5px; -webkit-border-radius:5px;-o-border-radius:5px;-ms-border-radius:5px; color:#000; text-align:center}#submitBtn{background:#000; color:#fff; border:none; height:50px; width:100%; font-size:15px; font-weight:bold; text-align:center; border-radius:5px;-moz-border-radius:5px; -webkit-border-radius:5px;-o-border-radius:5px;-ms-border-radius:5px; cursor:pointer}#titlehead{font-weight:bold; font-size:60px; color:#000; text-align:center; padding-bottom:5px}#titleForm{color:#000; font-size:15px; text-align:center; letter-spacing-3px}#titleWrap{padding:20px}#subscribeForm{padding:20px 20%; background:#ebebeb}#optWrap{padding:20px 20px 0}#optForm{font-size:14px; color:#000; text-align:center; text-decoration:underline; cursor:pointer}#closeBtn{color:#d0d0d0; font-size:20px; cursor:pointer; text-align:center; position:absolute; right:10px; top:10px; line-height:20px; font-family:comic sans ms}#minPurchaseWrap{padding:20px 20px 0}#minPurchase{font-size:11px; text-align:center; color:#c7c7c7}::-webkit-input-placeholder {color:#999; opacity: 1 !important;}::-moz-input-placeholder {color:#999; opacity: 1 !important;}::-ms-input-placeholder {color:#999; opacity: 1 !important;}@media only screen and (max-width:620px) {#popup{width:80%}#titlehead{font-size:28px}#subscribeForm{padding:20px 7% !important; font-size:14px}}",

/*-----Creation of Elements for POPUP-----------*/
mainDivObj = document.createElement("div"),
mainDivObj.className ="mainDivObj",

styleObj = document.createElement("style"),
styleObj.type = "text/css", styleObj.innerHTML = cssFile,

overlayObj = document.createElement("div"),
overlayObj.id ="overlay",

outerboxObj = document.createElement("div"), outerboxObj.id = "outerbox",

popupObj = document.createElement("div"), popupObj.id = "popup",

subObj = document.createElement("div"), subObj.id = "subscribeForm",

closeBtnObj = document.createElement("div"), closeBtnObj.id = "closeBtn", closeBtnObj.innerHTML = "X",

titleWrapObj = document.createElement("div"), titleWrapObj.id = "titleWrap",

titleHeadObj = document.createElement("div"), titleHeadObj.id = "titlehead", titleHeadObj.innerHTML = "GET 10% OFF",

titleObj = document.createElement("div"), titleObj.id = "titleForm", titleObj.innerHTML = "SUBSCRIBE TO OUR NEWSLETTER & RECEIVE A COUPON",

optWrapObj = document.createElement("div"), optWrapObj.id = "optWrap",

optObj = document.createElement("div"), optObj.id = "optForm", optObj.innerHTML = "NO THANKS",

minPurchaseWrapObj = document.createElement("div"), minPurchaseWrapObj.id = "minPurchaseWrap",

minPurchaseObj = document.createElement("div"), minPurchaseObj.id = "minPurchase", minPurchaseObj.innerHTML = "$50 MINIMUM PURCHASE",

formObj = document.createElement("form"), formObj.id = "subForm", formObj.name = "subForm", formObj.action = "#", formObj.method = "post",

inputTxtObj = document.createElement("input"), inputTxtObj.type = "email", inputTxtObj.id = "emailAddress", inputTxtObj.name = "emailAddress",
inputTxtObj.placeholder = "ENTER YOUR EMAIL",

inputBtnObj = document.createElement("input"), inputBtnObj.type = "button", inputBtnObj.id = "submitBtn", inputBtnObj.name = "submitBtn",
inputBtnObj.value = "GET MY 10% OFF", inputBtnObj.addEventListener("click", ajax_post, !1),


/*-----Addition of Elements on Body-----------*/
null != document.body && (document.body.appendChild(mainDivObj),
mainDivObj.appendChild(styleObj),
mainDivObj.appendChild(overlayObj),
mainDivObj.appendChild(outerboxObj),
outerboxObj.appendChild(popupObj),
popupObj.appendChild(closeBtnObj),
popupObj.appendChild(titleWrapObj),
titleWrapObj.appendChild(titleHeadObj),
titleWrapObj.appendChild(titleObj),
popupObj.appendChild(subObj),
subObj.appendChild(formObj),
formObj.appendChild(inputTxtObj),
formObj.appendChild(inputBtnObj),
popupObj.appendChild(optWrapObj),
optWrapObj.appendChild(optObj),
popupObj.appendChild(minPurchaseWrapObj),
minPurchaseWrapObj.appendChild(minPurchaseObj)),

window.onload = collectHeight,
window.onresize = collectHeight,


document.getElementById("closeBtn").onclick = closeFunction,
document.getElementById("optForm").onclick = closeFunction;
