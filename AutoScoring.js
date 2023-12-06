// ==UserScript==
// @name         WBUTeachersEvaluator
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  WBU自动教学评价
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
        $("body").append($('<script>function saveDataUnlimited(obj, status){var pj06xhs = document.getElementsByName("pj06xh");var flag = true;for (let i = 0; i < pj06xhs.length; i++) {if(jQuery("input[name=\'pj0601id_"+ pj06xhs[i].value+"\']:checked").length == 0) {flag = false;break;}}if (!flag) {alert("评价的每项指标都必须选择!");return false;}flag = false;var minZb = 0;for (let i = 0; i < pj06xhs.length; i++) {var pj0601s = document.getElementsByName("pj0601id_"+ pj06xhs[i].value);minZb = pj0601s.length;break;}for(let j = 0; j < minZb; j++) {var _ind = 0;for (let i = 0; i < pj06xhs.length; i++) {pj0601s = document.getElementsByName("pj0601id_"+ pj06xhs[i].value);if (j < pj0601s.length && pj0601s[j].checked) {_ind++;}}if (_ind == pj06xhs.length) {flag = true;break;}}if (status == "1") {document.getElementById("issubmit").value = "1";} else {document.getElementById("issubmit").value = "0";}if(status == "1" && !confirm("您是否确认提交当前评价,提交后不能修改！")) {} else {obj.disabled = true;document.getElementById("Form1").submit();}}</script>'));
        function autoClick(level){
            document.querySelectorAll("#table1 tr td").forEach(function(e){
                if(e.querySelector("input[type=radio]")){
                    let option = e.querySelectorAll("input[type=radio]");
                    for(let i=1;i<=option.length;i++){
                        option[0].checked = true;
                    }
                }
            })
        }
        if(document.querySelector("script[language=javascript]")){
            document.querySelectorAll("script[language=javascript]").forEach((e)=>{
                if(e.innerHTML.indexOf("alert('保存成功');")!=-1){
                    if(window.parent.parent.document.querySelector("#SimPage")){
                        window.parent.parent.refresh();
                    }else{
                        window.parent.refresh();
                    }
                }
            });
        }
        if(document.querySelector("td.toolstitle")){
            if(document.querySelector("td.toolstitle").innerHTML=='学生评教'){
                let calcBtn = document.createElement("input");
                calcBtn.setAttribute("value","自动评教");
                calcBtn.setAttribute("type","button");
                calcBtn.classList.add("button");
                calcBtn.id = "SimBtn";
                calcBtn.style.cssText = "position: fixed;bottom: 1rem;z-index: 100;right: 1rem;"
                calcBtn.addEventListener("click",autoClick);
                document.body.appendChild(calcBtn);
                unlimitable();
            }
        }
        async function unlimitable(){
            while(true){
                if(document.querySelector("td[align][style] input[type=button][name]")) break;
            }
            document.querySelectorAll("td[align][style] input[type=button][name]").forEach((f)=>{
                if(f.getAttribute("onclick")){
                    if(f.getAttribute("onclick").indexOf("saveData")!=-1){
                        f.setAttribute("onclick","saveDataUnlimited"+f.getAttribute("onclick").slice(f.getAttribute("onclick").indexOf("(")));
                    }
                }
            });
        }

        function asyncSleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }
        function saveDataUnlimited(obj, status){
                var pj06xhs = document.getElementsByName("pj06xh");     
                var flag = true;
                for (let i = 0; i < pj06xhs.length; i++) {
                    if(jQuery("input[name='pj0601id_"+ pj06xhs[i].value+"']:checked").length == 0) {
                        flag = false;
                        break;
                    }
                }
                if (!flag) {
                    alert("评价的每项指标都必须选择!");
                    return false;
                }
                flag = false;
                var minZb = 0;
                for (let i = 0; i < pj06xhs.length; i++) {
                    var pj0601s = document.getElementsByName("pj0601id_"+ pj06xhs[i].value);
                    minZb = pj0601s.length;
                    break;
                }
                
                for(let j = 0; j < minZb; j++) {
                    var _ind = 0;
                    for (let i = 0; i < pj06xhs.length; i++) {
                        pj0601s = document.getElementsByName("pj0601id_"+ pj06xhs[i].value);
                        if (j < pj0601s.length && pj0601s[j].checked) {
                            _ind++;
                        }
                    }
                if (_ind == pj06xhs.length) {
                    flag = true;
                    break;
                }
            }
    
            if (status == "1") {
                document.getElementById("issubmit").value = "1";
            } else {
                document.getElementById("issubmit").value = "0";
            }
            
            if(status == "1" && !confirm("您是否确认提交当前评价,提交后不能修改！")) {
    
            } else {
                obj.disabled = true;
                document.getElementById("Form1").submit();
            }
        }
    });
})();