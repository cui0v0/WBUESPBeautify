// ==UserScript==
// @name         WBUSASCalculator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  WBU学期平均成绩计算器
// @author       Simprole
// @match        http://jw.wbu.edu.cn/jsxsd/*
// @match        http://jw-wbu-edu-cn.webvpn.wbu.edu.cn:8118/jsxsd/*
// @icon         https://www.wbu.edu.cn/_upload/tpl/00/a9/169/template169/images/favicon.ico
// @require      https://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function(){
    $(document).ready(function(){
        $("body").append($('<style>input#SimBtn{width: unset!important;font-size: 1rem;background-image: none;color: #fff!important;;background-color: rgb(35 119 254);border: rgb(35 119 254);border-radius: 20px;box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);padding: 5px 10px 5px 13px;position: relative;letter-spacing: 1px;text-align: center;text-decoration:none!important;height: min-content;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;&:hover{text-decoration:none;filter: brightness(0.8);box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.7);transform: translateY(0.5px);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;}}</style>'));
        function calculate(){
            let subjects = [];
            let score = $("#dataList")[0].getElementsByTagName("a");
            let temp = 0,gpa = 0,totalCredits= 0;
            for(let i =1;i<=score.length;i++){
                if(score[i-1].parentElement.nextElementSibling.innerHTML!=0){
                    let subjectJson = {};
                    subjectJson.subject = score[i-1].parentElement.previousElementSibling.innerText;
                    if(parseFloat(score[i-1].innerText)){
                        subjectJson.score = parseFloat(score[i-1].innerText);
                    }else{
                        switch(score[i-1].innerText){
                            case "优": subjectJson.score = 90; break;
                            case "良": subjectJson.score = 80; break;
                            case "中": subjectJson.score = 70; break;
                            case "及格": subjectJson.score = 60; break;
                            case "不及格": subjectJson.score = 40; break;
                            case "0": subjectJson.score = 0; break;
                        }
                    }
                    subjectJson.credit = parseFloat(score[i-1].parentElement.nextElementSibling.innerText);
                    subjects.push(subjectJson);
                }
            }
            console.log(subjects);
            for(var num in subjects){
                totalCredits += subjects[num].credit;
                temp += subjects[num].credit*subjects[num].score;
            }
            gpa=(temp/totalCredits)*0.7;
            console.log("学期平均成绩："+gpa);
            window.alert("学期平均成绩："+gpa);
        }
        if($("title")[0].innerHTML=='学生个人考试成绩'){
            if(!window.parent.document.getElementById("SimPage")){
                let calcBtn = document.createElement("input");
                calcBtn.setAttribute("value","计算学期平均成绩");
                calcBtn.setAttribute("type","button");
                calcBtn.classList.add("button");
                calcBtn.id = "SimBtn";
                calcBtn.style.cssText = "position: fixed;bottom: 1rem;z-index: 100;right: 1rem;"
                calcBtn.addEventListener("click",calculate);
                document.body.appendChild(calcBtn);
            }
        }
    });
})();