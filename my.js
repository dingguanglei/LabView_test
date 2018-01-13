function gen_btn() {
    "use strict";
    // var seed = "1234";
    var seed = document.getElementById("seedInput").value + "";
    if(document.getElementById("seedTypeInput").checked){

        if (seed.length !== 4) {
            alert("请输入4位随机数种子！");
            return;
        }
        else {
            const PRIME1 = [2, 23, 3, 17, 5, 11, 13, 31, 7];
            const PRIME2 = [229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293];

            var s1 = parseInt(seed[0]) + 1;
            var s2 = parseInt(seed[1]) + s1;
            var s3 = parseInt(seed[2]) + 3;
            var s4 = parseInt(seed[3]) + s2;
            var s5 = 0;
            var send = "";
            var num = 100000;
            num = parseInt(document.getElementById("numInput").value);
            for (var i = 0; i < num; i++) {


                s5 = (s1 * s3 + s2 * Math.pow(s4, s1)) % (i + 13579 + PRIME2[i % PRIME2.length]);

                s5 = (s5 + "");
                s5 = parseInt(s5[(i + PRIME1[i % PRIME1.length]) % s5.length]) + parseInt((s2 + "")[0]);


                send += (s5 + "")[(i + PRIME2[i % PRIME2.length]) % (s5 + "").length];
                s1 = s2;
                s2 = s3;
                s3 = s4;
                s4 = s5;
            }
        }
        var iBeginPos = 0, iEndPos = send.length;
        for (var i = 0; i < send.length; i = i + 2) {
            var item = parseInt(send[i]);
            item = (item+parseInt(seed[3])*7)%10;


            var sFrontPart = send.substr(iBeginPos, i);
            var sTailPart = send.substr(i + 1,iEndPos);
            send = sFrontPart + item + sTailPart;
        }
    }

    if(document.getElementById("randomTypeInput").checked){
        var num = parseInt(document.getElementById("numInput").value);
        var send ="";
        for(var i=0;i<num;i++){
            send+=Math.floor(Math.random()*10);
        }
    }



    var sendText = document.getElementById("sendText");
    sendText.value = send;
    var send_num = document.getElementById("send_num");
    send_num.innerHTML = send.length;

}

function clear_btn() {
    var receiveText = document.getElementById("receiveText");
    receiveText.value = "";
    var receive_num = document.getElementById("receive_num");
    receive_num.innerHTML = 0;

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
    send_num.innerHTML = sendText.length;
    var receive_num = document.getElementById("receive_num");
    receive_num.innerHTML = receiveText.length;
    if (!sendText) {
        alert("请生成发送字符串!");
        return 0;
    }
    if (!receiveText) {
        alert("请输入接收字符串");
        return 0;
    }
    if (sendText.length !== receiveText.length) {
        alert("收、发字符串长度不相等！");
        return 0;
    }

    for (var i = 0; i < sendText.length; i++) {
        if (sendText[i] === receiveText[i]) {
            correctNum++;
        }
    }
    var total_num = document.getElementById("total_num");
    var correct_num = document.getElementById("correct_num");
    var error_num = document.getElementById("error_num");
    var correct_rate = document.getElementById("correct_rate");

    total_num.innerHTML = Total;
    correct_num.innerHTML = correctNum;
    error_num.innerHTML = parseInt(Total) - parseInt(correctNum);
    correct_rate.innerHTML = (parseFloat(correctNum) / parseFloat(Total)).toFixed(4) * 100 + "%";
    alert("正确率：" + correct_rate.innerHTML);
}

function showSeedBox() {
    var seedBox = document.getElementById("seed-box");
    seedBox.style.display="block";
}
function hideSeedBox() {
    var seedBox = document.getElementById("seed-box");
    seedBox.style.display="none";
}

