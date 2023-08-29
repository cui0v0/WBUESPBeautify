// ==UserScript==
// @name         BCC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  WBUBCC
// @author       Simprole
// @match        http://jw.wbu.edu.cn/jsxsd/xsxk*
// @match        http://jw-wbu-edu-cn.webvpn.wbu.edu.cn:8118/jsxsd/xsxkkc/comeIn*
// @match        http://jw-wbu-edu-cn.webvpn.wbu.edu.cn:8118/jsxsd/xsxk/xsxk_index?*
// @icon         https://www.wbu.edu.cn/_upload/tpl/00/a9/169/template169/images/favicon.ico
// @run-at       document-start
// @require      https://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==

(function(){
    window.onload = function(){
        //$("body").append($('<script>function xsxkOper(){let className,classId;if(this.tagName=="A"){className = this.parentElement.parentElement.children[1].innerText;classId = this.classId;}else{className = this.innerText;classId = this.parentElement.lastChild.firstChild.classId;}if(!window.confirm("提示：确认选择如下课程班级？"+"课程名："+className+"课程ID："+classId)){return;}var rev = eval("(" + $.ajax({url:"/jsxsd/xsxkkc/bxxkOper",data:{jx0404id:classId},async:false}).responseText + ")");if(rev.success){alert("您所选的 "+className+" 选课成功！");parent.window.document.getElementById("xkkbLi").className = "current";parent.window.document.getElementById("xkjgLi").className = "";parent.window.document.getElementById("xkrzLi").className = "";proxyLoc(parent.window.frames["kbFrame"].location).href="/jsxsd/xsxkjg/xsxkkb";}else{alert(rev.message);}}</script>'));
        if($("#mainFrame")[0]){
            $("#mainFrame")[0].style.height = "100%";
            $(".tabContext")[0].style.height = "80%";
        }
        if($("#mainDiv")[0]){
            $("#mainDiv")[0].style.removeProperty("margin-top");
        }
        if(document.getElementsByClassName("display")[0]){
            let table = document.getElementsByClassName("display");
            let tr = table[0].getElementsByTagName("tr");
            let th = tr[0].children;
            th[0].classList.add("thb_t_l");
            th[th.length-1].classList.add("thb_t_r");

            let tr_c = tr[tr.length-1].children;
            if(tr_c[0].tagName == "TD"){
                tr_c[0].classList.add("thb_b_l");
                tr_c[tr_c.length-1].classList.add("thb_b_r");
            }
        }
        if($("#dataView")[0]){
            let xkkb = $("#dataView")[0];
            let tr = xkkb.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
            console.log(tr);
            let length = tr.length;
            console.log(length);
            for(let i=1;i<=length;i++){
                // let xkBtn = tr[i-1].lastChild.firstChild;
                // let xkCodeOri = xkBtn.href;
                // let xkCode = xkCodeOri.slice(xkCodeOri.indexOf("'")+1,xkCodeOri.lastIndexOf("'"));
                // xkBtn.classId = xkCode;
                // xkBtn.setAttribute("href","javascript:0;");
                tr[i-1].children[1].addEventListener("click",xkAction);
            }
        }
        function xkAction(){
            let oriId = this.parentElement.lastChild.firstChild.href;
            let classId = oriId.slice(oriId.indexOf("'")+1,oriId.lastIndexOf("'"));
            let className = this.parentElement.children[1].innerText;
            xsxkOper(classId);
        }
    }
})();