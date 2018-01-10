
function gen_btn() {
    var send ="";
    for (var i = 0; i < 10000; i++) {
        send+= Math.floor(Math.random() * 10);
    }
    var sendText = document.getElementById("sendText");
    sendText.value = send;

    var send_num = document.getElementById("send_num");
    send_num.innerHTML= send.length;

}
function clear_btn() {
    var receiveText = document.getElementById("receiveText");
    receiveText.value = "";
    var receive_num = document.getElementById("receive_num");
    receive_num.innerHTML= 0;

}
function iGetInnerText(testStr) {
    var resultStr = testStr.replace(/\ +/g, ""); //去掉空格
    resultStr = resultStr.replace(/[ ]/g, "");    //去掉空格
    resultStr = resultStr.replace(/[\r\n]/g, ""); //去掉回车换行
    return resultStr;
}
function eval_btn() {

    var sendText = document.getElementById("sendText").value;
    var receiveText = iGetInnerText(document.getElementById("receiveText").value);
    document.getElementById("receiveText").value = receiveText;
    var correctNum = 0;
    var Total = sendText.length;
    var send_num = document.getElementById("send_num");
    send_num.innerHTML= sendText.length;
    var receive_num = document.getElementById("receive_num");
    receive_num.innerHTML= receiveText.length;
    if(!sendText)
    {
        alert("请生成发送字符串!");
        return 0;
    }
    if(!receiveText){
        alert("请输入接收字符串");
        return 0;
    }
    if(sendText.length!==receiveText.length){
        alert("收、发字符串长度不相等！");
        return 0;
    }

    for(var i=0 ;i<sendText.length;i++){
        if(sendText[i]===receiveText[i]){
            correctNum++;
        }
    }
    var total_num = document.getElementById("total_num");
    var correct_num = document.getElementById("correct_num");
    var error_num = document.getElementById("error_num");
    var correct_rate = document.getElementById("correct_rate");
    total_num.innerHTML = Total;
    correct_num.innerHTML = correctNum;
    error_num.innerHTML = parseInt(Total)-parseInt(correctNum);
    correct_rate.innerHTML = (parseFloat(correctNum)/parseFloat(Total)).toFixed(4)*100+"%";
}

