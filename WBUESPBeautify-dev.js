// ==UserScript==
// @name         WBUESPBeautify
// @namespace    http://tampermonkey.net/
// @version      0.8.105
// @description  WBUESP美化
// @author       Simprole
// @match        http://jw.wbu.edu.cn/jsxsd/*
// @match        http://jw-wbu-edu-cn.webvpn.wbu.edu.cn:8118/jsxsd/*
// @icon         https://www.wbu.edu.cn/_upload/tpl/00/a9/169/template169/images/favicon.ico
// @run-at       document-start
// @resource css https://s1.hdslb.com/bfs/static/jinkela/long/font/medium.css
// @resource icon https://gitee.com/dmaker/simpage/raw/master/iconfont.css
// @require      https://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @require      https://gitee.com/dmaker/simpage/raw/master/js.cookie.min.js
// @require      https://html2canvas.hertzen.com/dist/html2canvas.min.js
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function(){
    $(document).ready(function(){
    //import HarmonyOS font
    GM_addStyle(GM_getResourceText("css"));
    //external icons
    GM_addStyle(GM_getResourceText("icon"));
    //root css
    $("body").append($('<style id="SimRootCSS">:root{--primary-theme-color: hsl(216.99deg 99.1% 56.67%);--secondary-theme-color: hsl(214.55deg 98.8% 67.25%);;--tertiary-theme-color:hsl(209 98% 70%);--hover_darken_color:brightness(0.75);}body,div,dl,dt,p,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,select,blockquote,th,td,a,span,div {padding:0;margin:0;font-size: 15px;font-family: "HarmonyOS_Medium"!important;}html{scroll-behavior: smooth;}</style>'));
    //universal buttons css
    $("body").append($('<style id="SimUniButtonsCSS">.button,center a[style][href],#dataView.dataTable td[class] a[style]{width: unset!important;font-size: 1rem;background-image: none;color: #fff!important;;background-color: var(--primary-theme-color);border: var(--primary-theme-color);border-radius: 20px;box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);padding: 5px 10px 5px 15px;position: relative;letter-spacing: 5px;text-align: center;text-decoration:none!important;height: min-content;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;&.disabled,&.disabled:hover{box-shadow: none;cursor: no-drop;filter: brightness(0.6);transform: none;}&#btn_back{left: 50%;translate: -50%;}&.centerButton{left: 50%;translate: -50%;margin: -0.5rem 0 0.5rem 0;}}.Nsb_r_title div .button{left:0;margin: 0.5rem 0.5rem 0;}.Nsb_r_title button{left: 50%;transform: translateX(-50%);}form .buttons{left: 50%;transform: translateX(-50%);position: relative;display: inline-block;}.Nsb_r_list a{background-color: var(--primary-theme-color);border: var(--primary-theme-color);border-radius: 20px;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);padding: 3px 0;position: relative;text-align: center;color: #fff;display: list-item;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;}.Nsb_r_list a:hover, .button:hover, center a[style][href]:hover,#dataView.dataTable td[class] a[style]:hover{text-decoration:none;filter: brightness(0.8);box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.7);transform: translateY(0.5px);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;}.Nsb_r_list_fy4 {background: none;& a {width: 3em;text-align: center;background: var(--primary-theme-color);margin: 0 0.1em;border-radius: 2em;color: #fff;font-weight: bold;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);-webkit-user-select: none;user-select: none;}& .disabled {filter: brightness(0.6);box-shadow: none;cursor: no-drop;}&.dataTable .button#button1,&.dataTable .button#button2{left: 27%;}}.SimScale{font-size: 1.8rem;height: 1.6rem;width: 1.6rem!important;line-height: 0;border-radius: 100%;display: flex;align-items: center;justify-content: center;margin: 0.25rem;}</style>'));
    //universal charts css
    $("body").append($('<style id="SimUniChartsCSS">#dataList{margin-top: 0.5rem;border-collapse: separate;position: relative;transform-origin: top!important;& th{background: var(--secondary-theme-color);border: none;color: #fff;width: min-content;line-height: initial;font-size: 1rem;padding: 0 0.5rem;}& td{border: solid 0.05rem var(--secondary-theme-color);color: #000;text-align: center;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);font-size: 1rem;word-break: keep-all;}& .Nsb_r_list_thb{box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);border: none;background: var(--secondary-theme-color);font-size: 1.125rem;color: #fff;height: 2rem;font-weight: normal;text-align: center;}}#kbtable{border-collapse: separate;transform-origin: 0 0;& th{background: var(--secondary-theme-color);border: none;color: #fff;width: min-content;line-height: initial;font-size: 1rem;padding: 0.5rem;box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);}& td{border: solid 0.05rem var(--secondary-theme-color);color: #000;text-align: center;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);font-size: 1rem;word-break: keep-all;line-height: normal;}}[id].kbcontent,[id].kbcontent1{background: var(--secondary-theme-color);border-radius: 1rem;color: #fff;padding: 0.2rem 0.8rem;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);margin-bottom: 5px;}.classLists[style]{border-radius: 1rem;padding: 3px 5px;}table.display{& thead th{cursor:default;box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);border: none;background: var(--secondary-theme-color);font-size: 1.125rem;color: #fff;text-align: center;font-weight: normal;}& tbody th{background: var(--secondary-theme-color);border: none;color: #fff;width: min-content;line-height: initial;font-size: 1rem;padding: 0 0.5rem;}& td, td.center{padding: 0.5rem 0;border: solid 0.05rem var(--secondary-theme-color);color: #000;text-align: center;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);font-size: 1rem;word-break: keep-all;}& tr.odd{background-color: #fff;}& tr.even{background-color: var(--tertiary-theme-color);}}.Nsb_table,.display{.thb_t_l{border-radius: 1rem 0 0 0;}.thb_t_r{border-radius: 0 1rem 0 0;}.thb_t_l.thb_t_r{border-radius: 1rem 1rem 0 0;}.thb_b_l{border-radius: 0 0 0 1rem;}.thb_b_r{border-radius: 0 0 1rem 0;}.thb_b_l.thb_b_r{border-radius: 0 0 1rem 1rem;}}</style>'));
    //universal pages css
    $("body").append($('<style id="SimUniPagesCSS">.Nsb_pw {width: auto;margin: 0 2rem;.Nsb_r_title {font-size: 1.25rem;font-weight: bold;color: #000;height: max-content;line-height: 1.5em;text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);letter-spacing: 1px;margin: 0.5rem 0 0.5rem 0;text-align: center;}.Nsb_layout_r .Nsb_r_title {font-size: 1.25rem;font-weight: bold;color: #000;height: max-content;line-height: 1.5em;text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);letter-spacing: 1px;margin: 0 0 0.5em 0;text-align: center;}}#SimInfo{position: relative;left: 50%;transform: translateX(-50%);margin-top: 0.5rem;text-align: center;}.SimStack{transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: opacity;&[stacked=true]{opacity: 0%;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: opacity;}&[stacked=false]{opacity: 100%;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: opacity;}}#SimStackTop{cursor: pointer;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: filter,transform,margin,margin-right,box-shadow;&:hover{transform: translateY(0.75px);filter: brightness(0.7);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: filter,transform,margin,margin-right,box-shadow;}&[stacked=true]{margin: 0px 7px 12px 0;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: filter,transform,margin,margin-right,box-shadow;}&[stacked=false]{margin-right: 0;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: filter,transform,margin,margin-right,box-shadow;}}.hidden{display: none;}.SimScalePanel{display: flex;position: fixed;align-items: center;justify-content: center;flex-direction: row;right: 0;bottom: 0;opacity: 0.2;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1) 1s;transition-property: opacity,transform;&.rightPage{opacity: 1;position: relative;.SimScaleText{opacity: 1;transform: 0;font-size:1rem;transform: none;}}.SimScaleText{opacity: 0;user-select: none;font-size: 1.3rem;transform: translateX(50%);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1) 1s;transition-property: opacity,transform;}&:hover{opacity: 1.0;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: opacity,transform;.SimScaleText{opacity: 1;transform: translateX(0%);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: opacity,transform;}}}.SimSelect{text-align: center;font-size: 1rem;border: 2px solid var(--secondary-theme-color);border-radius: 1rem;height: 1.7rem;width: 203px!important;margin: 0.125rem 0;box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: border,box-shadow;&.Slim{width: 125px!important;}&:hover,&:focus-visible{outline:none;border: 2px solid var(--primary-theme-color);box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3),inset 0px 2px 6px 0px var(--secondary-theme-color);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: border,box-shadow;}}input.SimScaleInput.SimInput{width: 4.5rem!important;font-size: 1.3rem;height: 1.4rem;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);}input.SimInput,.inputnormal{width: 200px!important;text-align: center;border: 2px solid var(--primary-theme-color);border-radius: 1.5em;background-color: var(--tertiary-theme-color);text-shadow: 0px 0px 4px rgba(0,0,0,0.7);color: #fff;font-size: 1rem;height: 1.5rem;margin: 0.125rem 0;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: transform,background-color,border,color;}.SimInput.Slim{width: 130px!important;}input.SimInput{&:hover,&:focus-visible{outline: none;border: 2px solid var(--primary-theme-color);background-color:var(--secondary-theme-color);transform: scale(1.02);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: transform,background-color,border,color;}&.disabled,.disabled:hover{background-color: var(--secondary-theme-color);border: 2px solid var(--primary-theme-color);text-shadow: none;outline: none;cursor: no-drop;transform: none;filter: brightness(0.5);}&[readonly]{&:hover{outline: 0px;}&:focus-visible{outline: 0px;}}}#SimTop{position: fixed;right: 0.5rem;bottom: 0.5rem;font-size: 1rem;background-image: none;background-color: var(--primary-theme-color);border-radius: 20px;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);color: #fff;}</style>'));
    //footer css
    $("body").append($('<style id="SimFooterCSS">.Nsb_rights {height: max-content;line-height: normal;}.info{text-align: center;color: #000;& .heart{color: #ff0081;}}</style>'));
    //home page css
    $("body").append($('<style id="SimHomePageCSS">.iconfont {position: absolute;font-size: 75px;left: 50%;transform: translateX(-50%);top: 15px;}.icon-xuanke,.icon-yonghu {font-size: 75px;top: 80px;}.icon-yonghu{left: 22.5%!important;position: absolute;transform: translateX(-240%);cursor: pointer;transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);&:hover{filter: brightness(0.75);transform: translate(-240%,1px);transition-duration: 0.3s;transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);}}.block1,.block2,.block3,.block4,.block5,.block6,.block7,.block8,.block9,.block10,.block11,.block12{box-shadow: 0px 4px 4px rgba(0,0,0,0.3);border-radius: 0.5rem;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,transform,box-shadow;}.block1text{width:auto;height: auto;position: relative;text-align: center;left: 50%;top: 42%;color:#fff;transform: translate(-30%,-90%);}.block1tex,.block2tex{-webkit-user-select: none;user-select: none;left:0px;position: relative;top: 12.5rem;text-align: center;color:#fff;}.block3tex,.block4tex,.block5tex,.block6tex{left:50%;position: absolute;top: 6.25rem;text-align: center;transform: translateX(-50%);}.block7tex,.block8tex,.block9tex,.block10tex,.block11tex,.block12tex{left:50%;transform: translateX(-50%);position: absolute;top: 6rem;text-align: center;width: max-content;}.block2:hover,.block3:hover,.block4:hover,.block5:hover,.block6:hover,.block7:hover,.block8:hover,.block9:hover,.block10:hover,.block11:hover,.block12:hover{box-shadow: 0px 1px 2px rgba(0,0,0,0.7);transform: translateY(2px);filter: brightness(0.75);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,transform,box-shadow;}.block1 img,.block2 img,.block3 img,.block4 img,.block5 img,.block6 img,.block7 img,.block8 img,.block9 img,.block10 img,.block11 img,.block12 img,.block1app,.block1pc{visibility: hidden;}</style>'));
    //iframe css
    $("body").append($('<style id="SimIframeCSS">div#SimPageOutline{display: block;width: 68rem;height: 51.1rem;position: relative;left: 50%;transform: translateX(-50%);border: 0.5rem solid var(--primary-theme-color);background-color: var(--primary-theme-color);border-top: 0;border-radius: 1rem;box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);}iframe#SimPage{display: block;width: 68rem;height: 48.8rem;position: relative;left: 50%;transform: translateX(-50%);border-radius: 0 0 1rem 1rem;background-color: #fff;}.Nsb_pw{#fcenter{margin-top:1rem;display: block;height: 52.5rem!important;position: relative;left: 50%;transform: translateX(-50%);border: 0.5rem solid var(--primary-theme-color);border-radius: 1rem;box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);}.Nsb_layout_r #fcenter{margin-top:1rem;display: block;height: 52.5rem!important;position: relative;left: 50%;transform: translateX(-50%);border: 0.5rem solid var(--primary-theme-color);border-radius: 1rem;box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);width: 68rem!important;}}.toolbar{background: var(--primary-theme-color)!important;border-radius: 0 0 1rem 1rem;box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);height: 2.5rem;}a.closeButton{float: right;display: block;left: 0.5rem;position: relative;cursor: pointer;}div.closeButton{font-size: 2.2rem;height: 2rem;line-height: 1.95rem;padding: 0rem 1.4rem 0 1.3rem;background: #FF513A;width: inherit;color: #fff;border-radius: 0 1rem 0 0;font-weight: bold;box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);-webkit-user-select: none;user-select: none;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;&:hover{transform: translateY(0.75px);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);filter: brightness(0.7);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;}}.toolstitle {height: 2rem;line-height: 2rem;color: #FFF;font-size: 1.15rem;background: var(--secondary-theme-color);font-weight: normal;text-align: center;box-shadow: 0 4px 7px 0px rgba(0, 0, 0, 0.3);}table.textform{width: 100%;padding-left: 0!important;}font.tips{float: right;position: relative;font-size: 1.5rem;margin: 0.5rem 2.25rem 0 0;font-family: "HarmonyOS_Medium";}textarea#xmms {width: 93.5%!important;position: relative;margin: 0 2rem;border: 0.2rem solid var(--secondary-theme-color);border-radius: 1rem;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: box-shadow,outline;&:focus-visible {outline: 0.2rem solid var(--primary-theme-color);box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: box-shadow,outline;}}textarea[style],textarea[type=text]{position: relative;border: 0.2rem solid var(--secondary-theme-color);border-radius: 1rem;box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: box-shadow,outline;&:hover{outline: 0.2rem solid var(--primary-theme-color);box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: box-shadow,outline;}}</style>'));
    //left sidebar css
    $("body").append($('<style id="SimLeftSidebarCSS">.Nsb_r_list_tdfy {border: none;}.Nsb_layout_l {float: left;width: 11.25rem;height: max-content;margin-top: 2rem;border-radius: 1rem;box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);border:none;padding-bottom: 0.5rem;margin-bottom: 3rem;}.Nsb_l_list {& ul {padding-bottom: 0.5em;width: inherit;border-bottom: none;}& h4 {margin: 0;padding: 6px 0;font-size: 17px;font-weight: bold;background-color: var(--primary-theme-color);border-radius: 1rem 1rem 0 0;box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);color: #fff;background-image: none;width: inherit;text-align: center;}& li {margin: 0;width: inherit;}& a {color: #000;padding: 4px 0px;text-align: center;position: relative;width: inherit;transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: border-radius,background,color,transform,box-shadow;&:hover {border-radius: 1em;background: var(--tertiary-theme-color);box-shadow: inset 0px 2px 6px 1px rgb(0 0 0 / 30%);color: #fff;transform: translateY(0.5px);transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: border-radius,background,color,transform,box-shadow;}}& .Nsb_l_list_now {background: var(--secondary-theme-color);color: #fff;padding: 4px 0;box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: border-radius,background,box-shadow,transform;&:hover {border-radius: 15px;background: var(--tertiary-theme-color);transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: border-radius,background,box-shadow,transform;}}}.Nsb_l_list_top {height: 0;}</style>'));
    //right page css
    $("body").append($('<style id="SimRightPageCSS">.Nsb_layout_r {padding: 2rem 0 0rem 0rem;margin: 0 0 3rem -11.25rem!important;left: 57%;transform: translateX(-50%);float: left;position: relative;.Nsb_table{border-collapse: separate;position: relative;transform-origin: top!important;}.Nsb_r_list{.Nsb_r_list_thb{box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);border: none;background: var(--secondary-theme-color);font-size: 1.125rem;color: #fff;height: 2rem;text-align: center;font-weight: normal;}& th{background: var(--secondary-theme-color);border: none;color: #fff;width: min-content;line-height: initial;font-size: 1rem;padding: 0 0.5rem;}& td{border: solid 0.05rem var(--secondary-theme-color);color: #000;text-align: center;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);font-size: 1rem;word-break: keep-all;}&.Nsb_table{width: 68rem!important;}}}.Nsb_r_list_fy2 input {width: 2em;height: 1em;text-align: center;border: 2px solid var(--secondary-theme-color);border-radius: 1.5em;background-color: var(--tertiary-theme-color);text-shadow: 0px 0px 4px rgba(0,0,0,0.7);color: #fff;font-size: 1rem;border-radius: 1.5em;background-image: none;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: transform,background-color,border;&:hover,&:focus-visible{outline: none;border: 2px solid var(--primary-theme-color);background-color:var(--secondary-theme-color);transform: scale(1.02);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: transform,background-color,border;}}.Nsb_r_list_fy{div,span,a{height: 1.5em;line-height: 1.5em;}}#Form1[action] div{text-align: center!important;}td[width][align=right]{width:7rem;}td b font[face]{font-family: "HarmonyOS_Medium";}td[style="background-color:#E5F3FE"]{background-color: #A6D3FE!important;color: #fff!important;text-shadow: 0 0 3px black;}font[color=blue]{color: var(--secondary-theme-color);}</style>'));
    //top bar css
    $("body").append($('<style id="SimTopBarCSS">.Nsb_menu_pw,.Nsb_menu {height: 41px;line-height: 41px;background-color: var(--primary-theme-color);background-image:none;left: 50%;position: relative;transform: translateX(-50%);}.Nsb_menu a {color: #fff;font-weight: normal;border-radius: 2px;transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: border-radius,transform,filter,background-color,box-shadow;&:hover{background-position: none;background-color: var(--primary-theme-color);background-image:none;height: 40px;filter: brightness(0.7);transform: translateY(0.75px);border-radius: 20px;box-shadow: inset 0px 3px 5px 0px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: box-shadow,border-radius,transform,filter,background-color,;}}.Nsb_menu_pw {box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);}.Nsb_top{display: flex;justify-content: flex-end;flex-direction: row;align-items: center;}.Nsb_top_menu {position: relative;background-color: var(--secondary-theme-color);border-radius: 20px;box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);& ul{border:none;background: var(--primary-theme-color);border-radius: 20px;padding: 3px;box-shadow: -1px 0px 3px rgba(0, 0, 0, 0.3);}}.Nsb_top_menu_nc {height: inherit;font-size: 1em;line-height: 2em;padding: 0 0.75em 0 1em;color: #fff;-webkit-user-select: none;user-select: none;cursor: pointer;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: transform,filter;&:hover{filter: brightness(0.8);transform: translateY(1px);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: transform,filter;}}.menu_cn{& a {padding: 0 2em;font-size: 1.0625em;}& ul{left: 50%;position: relative;transform: translateX(-50%);width: max-content;}}.Nsb_top_logo {left: 0px;}.Nsb_menu_li_now{background: none;}.Nsb_menu_li_h span {background: url(../framework/images/Nsb_menu_h.gif) 0 -15px}.Nsb_top_menu span, .Nsb_top_menu_id img{visibility: hidden;}</style>'));
    //dark mode
    $("body").append($('<style id="SimDarkModeCSS">@media (prefers-color-scheme: dark) {:root{--primary-theme-color: hsl(217 99% 40%);--secondary-theme-color: hsl(215 99% 50%);--tertiary-theme-color:hsl(212 85% 60%);--background-gray:#333;--dark-background-gray:hsl(0 0% 10% / 1);--gray: hsl(0 0% 80%);--lighter-gray: hsl(0 0% 90%);}body{background-color: #111111;}.button,.Nsb_l_list h4,.Nsb_menu_pw, .Nsb_menu,.Nsb_top_menu ul,.Nsb_menu a:hover {background-color: var(--primary-theme-color);}.Nsb_layout_r .Nsb_r_list td, #dataList td {border: solid 0.05rem var(--primary-theme-color);color: var(--gray);box-shadow: 0px 3px 3px rgb(255 255 255 / 20%);}.Nsb_r_title {color: var(--lighter-gray)!important;text-shadow: 0px 2px 3px rgb(255 255 255 / 40%)!important;}body,.Nsb_l_list a{color: var(--gray);}.Nsb_r_list a,.button,#kbtable td,#kbtable th,[id].kbcontent,[id].kbcontent1{box-shadow: 0px 3px 3px rgb(255 255 255 / 20%);color: var(--lighter-gray);}[id].kbcontent, [id].kbcontent1 {color: #fff;background: var(--secondary-theme-color);}.Nsb_layout_r .Nsb_r_list .Nsb_r_list_thb, #dataList .Nsb_r_list_thb {background: var(--primary-theme-color);box-shadow: 0px 4px 5px rgb(255 255 255 / 30%);color:var(--lighter-gray);}.Nsb_r_list_fy2 input {border: 2px solid var(--primary-theme-color);background-color: var(--tertiary-theme-color);color:var(--lighter-gray);&:hover,&:focus-visible{outline:2px solid var(--primary-theme-color);background-color: var(--secondary-theme-color);}&:focus-visible{outline:3px solid var(--primary-theme-color);}}.Nsb_r_list a,.Nsb_r_list a:hover,.button,.button:hover{border: var(--primary-theme-color);background: var(--primary-theme-color);}.Nsb_l_list .Nsb_l_list_now,.Nsb_top_menu,#kbtable th{background-color: var(--secondary-theme-color);}.Nsb_l_list a:hover{background: var(--tertiary-theme-color);color:#fff;}.Nsb_l_list .Nsb_l_list_now:hover{background: hsl(209 98% 65%);color:#fff;}.Nsb_menu a span:hover{filter: brightness(0.8);}.Nsb_menu_pw{box-shadow: 0px 5px 6px rgb(255 255 255 / 20%)}.Nsb_top_menu {box-shadow: 0px 3px 5px rgb(255 255 255 / 30%)}#kbtable td {border: solid 0.05rem var(--secondary-theme-color);color: var(--gray);}.SimSelect {border: 2px solid var(--secondary-theme-color);background-color: var(--background-gray);color: var(--gray);}.SimSelect:hover{outline: 0;background-color: var(--dark-background-gray);color: var(--lighter-gray);}.SimSelect:focus-visible {color: var(--lighter-gray);background-color: var(--dark-background-gray);outline: 0;}input.SimScaleInput.SimInput {box-shadow: 0px 2px 4px rgb(255 255 255 / 30%);}input.SimInput, .inputnormal {background-color: var(--secondary-theme-color);border: 2px solid var(--primary-theme-color);color: var(--lighter-gray);&:focus-visible{outline: 3px solid var(--primary-theme-color);background-color: var(--secondary-theme-color);}&:hover{outline: 2px solid var(--primary-theme-color);background-color: var(--secondary-theme-color);}}.Nsb_pw #fcenter {border: 0.5rem solid var(--primary-theme-color);box-shadow: 0px 3px 5px 2px rgb(255 255 255 / 30%);}.Nsb_layout_l {background-color: var(--background-gray);box-shadow: 0px 2px 5px rgb(255 255 255 / 30%);}.block1,.block2,.block3,.block4,.block5,.block6,.block7,.block8,.block9,.block10,.block11,.block12{box-shadow: 0px 4px 4px rgba(255 255 255 / 0.2);}}</style>'));
    //iframe code
    $("body").append($('<script>function JsMod(htmlurl,tmpWidth,tmpHeight){let inPage = document.createElement("iframe");;inPage.id = "SimPage";let SimPage = document.createElement("div");SimPage.id = "SimPageOutline";let toolbar = document.createElement("div");toolbar.innerHTML=\'<a href="javascript:closeIframe();" class="closeButton"><div class="closeButton">×</div></a>\';SimPage.appendChild(toolbar);SimPage.appendChild(inPage);if(!document.getElementById("SimPage")){if(document.getElementById("dataList")){let dataList = document.getElementById("dataList");dataList.after(SimPage);dataList.style = "display:none;";}if(document.getElementsByClassName("Nsb_r_list Nsb_table")[0].id!="dataList"){let table = document.getElementsByClassName("Nsb_r_list Nsb_table")[0];table.after(SimPage);table.style = "display:none;";}htmlurl=getRandomUrl(htmlurl);inPage.src = htmlurl;}}</script>'));
    //closeIframe
    $("body").append($('<script>function closeIframe(){if(!document.getElementById("SimPage")&&window.parent.document.getElementById("SimPage")){let parent = window.parent;if(parent.document.getElementById("dataList")){parent.document.getElementById("dataList").style = "";}if(parent.document.getElementsByClassName("Nsb_r_list Nsb_table")[0].id!="dataList"){parent.document.getElementsByClassName("Nsb_r_list Nsb_table")[0].style = "";}parent.document.getElementById("SimPageOutline").remove();}else if(document.getElementsByClassName("Nsb_r_list Nsb_table")[0]&&document.getElementById("SimPage")){if(document.getElementById("dataList")){document.getElementById("dataList").style = "";}if(document.getElementsByClassName("Nsb_r_list Nsb_table")[0].id!="dataList"){document.getElementsByClassName("Nsb_r_list Nsb_table")[0].style = "";}document.getElementById("SimPageOutline").remove();}}</script>'));

    //iframe former lib
    function JsMod(htmlurl,tmpWidth,tmpHeight){
        let inPage = document.createElement("iframe");;
        inPage.id = "SimPage";
        let SimPage = document.createElement("div");
        SimPage.id = "SimPageOutline";
        let toolbar = document.createElement("div");
        toolbar.innerHTML='<a href="javascript:closeIframe();" class="closeButton"><div class="closeButton">×</div></a>';
        SimPage.appendChild(toolbar);
        SimPage.appendChild(inPage);
        if(!document.getElementById("SimPage")){
            if(document.getElementById("dataList")){
                let dataList = document.getElementById("dataList");
                dataList.after(SimPage);
                dataList.style = "display:none;";
            }
            if(document.getElementsByClassName("Nsb_r_list Nsb_table")[0].id!="dataList"){
                let table = document.getElementsByClassName("Nsb_r_list Nsb_table")[0];
                table.after(SimPage);
                table.style = "display:none;";
            }
            htmlurl=getRandomUrl(htmlurl);
            inPage.src = htmlurl;
        }
    }

    function closeIframe(){
        if(!document.getElementById("SimPage")&&window.parent.document.getElementById("SimPage")){
            let parent = window.parent;
            if(parent.document.getElementById("dataList")){
                parent.document.getElementById("dataList").style = "";
            }
            if(parent.document.getElementsByClassName("Nsb_r_list Nsb_table")[0].id!="dataList"){
                parent.document.getElementsByClassName("Nsb_r_list Nsb_table")[0].style = "";
            }
            parent.document.getElementById("SimPageOutline").remove();
        }else if(document.getElementsByClassName("Nsb_r_list Nsb_table")[0]&&document.getElementById("SimPage")){
            if(document.getElementById("dataList")){
                document.getElementById("dataList").style = "";
            }
            if(document.getElementsByClassName("Nsb_r_list Nsb_table")[0].id!="dataList"){
                document.getElementsByClassName("Nsb_r_list Nsb_table")[0].style = "";
            }
            document.getElementById("SimPageOutline").remove();
        }
    }
        // experimental code
        if($(".Nsb_layout_r")[0]){
            let SimTop = document.createElement("a");
            SimTop.innerHTML = "^";
            SimTop.href = "#";
            SimTop.id = "SimTop";
            $(".Nsb_layout_r")[0].after(SimTop);
        }

            //fix checkbox position
        function loadjs(){
            if($("#sfFD")[0]){
                $("#xnxq01id")[0].parentElement.lastChild.before($("#sfFD")[0]);
            }
        }
        // experimental code
        
        //experimental codes
        if($("title")[0].innerHTML=='学生个人考试成绩'){
            let subjects = [];
            let score = $("#dataList")[0].getElementsByTagName("a");
            let length = score.length;
            let temp = 0,gpa = 0,totalCredits= 0;
            for(let i =1;i<=length;i++){
                if(score[i-1].parentElement.nextElementSibling.innerHTML!=0){
                    let subjectJson = {};
                    subjectJson.subject = score[i-1].parentElement.previousElementSibling.innerText;
                    if(parseFloat(score[i-1].innerHTML)){
                        subjectJson.score = parseFloat(score[i-1].innerText);
                    }else{
                        switch(score[i-1].innerText){
                            case "优": subjectJson.score = 100; break;
                            case "良": subjectJson.score = 75; break;
                        }
                    }
                    subjectJson.credit = parseFloat(score[i-1].parentElement.nextElementSibling.innerText);
                    subjectJson.grade = subjectJson.score/10 - 5;
                    subjects.push(subjectJson);
                }
            }
            console.log("subjects:");
            console.log(subjects);
            for(var num in subjects){
                totalCredits += subjects[num].credit;
                temp += subjects[num].credit*subjects[num].grade;
            }
            console.log(totalCredits);
            gpa=temp/totalCredits;
            console.log("平均学分绩点GPA: "+gpa);
        }
            // if(subjectJson.score>=90&&subjectJson.score<=100){
            //     subjectJson.grade = 4;
            // }else if(subjectJson.score>=85&&subjectJson.score<90){
            //     subjectJson.grade = 3.7;
            // }else if(subjectJson.score>=82&&subjectJson.score<85){
            //     subjectJson.grade = 3.3;
            // }else if(subjectJson.score>=78&&subjectJson.score<82){
            //     subjectJson.grade = 3;
            // }else if(subjectJson.score>=75&&subjectJson.score<78){
            //     subjectJson.grade = 2.7;
            // }else if(subjectJson.score>=72&&subjectJson.score<75){
            //     subjectJson.grade = 2.3;
            // }else if(subjectJson.score>=68&&subjectJson.score<72){
            //     subjectJson.grade = 2;
            // }else if(subjectJson.score>=64&&subjectJson.score<68){
            //     subjectJson.grade = 1.5;
            // }else if(subjectJson.score>=60&&subjectJson.score<64){
            //     subjectJson.grade = 1;
            // }

                        // if(parseFloat(score[i-1].innerHTML)){
                //     let subjectJson = {};
                //     subjectJson.subject = score[i-1].parentElement.previousElementSibling.innerText;
                //     subjectJson.score = parseFloat(score[i-1].innerText);
                //     subjectJson.credit = parseFloat(score[i-1].parentElement.nextElementSibling.innerText);
                //     subjectJson.grade = subjectJson.score/10 - 5;
                //     subjects.push(subjectJson);
                // }
        //experimental codes
    
    function dreaming(){
        if($("title")[0].innerHTML=='学生个人考试成绩'){
            let score = $("#dataList")[0].getElementsByTagName("a");
            let length = score.length;
            for(let i =1;i<=length;i++){
                if(parseFloat(score[i-1].innerHTML)){
                    score[i-1].innerHTML = 100;
                }else{
                    score[i-1].innerHTML = '优';
                }
            }
        }
    }
    if(document.getElementById("kc")){
        document.getElementById("kc").remove();
    }
    //reset preset width
    if($("#dataList")[0]){
        let thb = $("#dataList")[0].getElementsByClassName("Nsb_r_list_thb");
        let length = thb.length;
        for(let i=1;i<=length;i++){
            if(thb[i-1].style.width!=''){
                thb[i-1].style.width = '';
            }
        }
    }
    //class schedule random color
    function getRandomIntInclusive(min, max) {
        return (Math.random() * (max - min + 1) + min).toFixed(2);
    }
    function randomColorPick(){
        let json = {};
        let hue = getRandomIntInclusive(0,360);
        let sat = getRandomIntInclusive(90,100);
        let light = getRandomIntInclusive(40,43);
        let hsl = "hsl(" + hue + ", " + sat + "%, " + light + "%)";
        json.hsl=hsl;
        json.hue=hue;
        json.sat=sat;
        json.light=light;
        return json;
    }
    function fixKBBottom(type){
        let td = $("#kbtable")[0].getElementsByTagName("td");
        let length = td.length;
        for(let i=1;i<=length;i++){
            let kbcontent = td[i-1].getElementsByClassName(type);
            if(kbcontent.length!=0){
                if(kbcontent[kbcontent.length-1].classList.contains('SimStack')){
                    kbcontent[kbcontent.length-1].style.margin = "0px";
                }else{
                    kbcontent[kbcontent.length-1].style.margin = "0px";
                }
            }
        }
    }
    function SimStacked(input){
        switch(input.getAttribute('stacked')){ 
            case 'true':{
                setTimeout(function(){
                    input.classList.add('hidden');
                }, 200);
                break;
            }
            case 'false':{
                input.classList.remove('hidden');
                break;
            }
        }
    }
    function SimStackActions(){
        let SimStack = this.parentElement.getElementsByClassName('SimStack');
        let length = SimStack.length;
        let tempJson;
        if(!this.childNodes[0].data){
            tempJson = kbsort[kbsort[this.firstChild.innerHTML]];
        }else{
            tempJson = kbsort[this.childNodes[0].data];
        }
        let hslDarker = "hsl(" + tempJson.hue + ", " + tempJson.sat + "%, " + (tempJson.light - 8) + "%)";
        let hslDarker2 = "hsl(" + tempJson.hue + ", " + tempJson.sat + "%, " + (tempJson.light - 16) + "%)";
        for(let i=1;i<=length;i++){
            if(this.getAttribute('stacked')=='true'){
                this.style.removeProperty('box-shadow');
                SimStack[i-1].setAttribute('stacked','false');
            }else if(this.getAttribute('stacked')=='false'){
                this.style.cssText += "box-shadow: 3px 3px 0px 1px "+hslDarker+", 7px 7px 0px 1px "+hslDarker2;
                SimStack[i-1].setAttribute('stacked','true');
            }
                SimStacked(SimStack[i-1]);
            if(i==length){
                if(SimStack[length-1].getAttribute('stacked')=='true'){
                    this.setAttribute('stacked','true');
                }else if(SimStack[length-1].getAttribute('stacked')=='false'){
                    this.setAttribute('stacked','false');
                }
            }
        }
    }
    function setupScalingPanel(){
        let panel = document.createElement('div');
        panel.classList.add('SimScalePanel');
        let text = document.createElement('div');
        text.innerText = "缩放倍率";
        text.classList.add("SimScaleText");
        let zoomIn = document.createElement('input');
        let SimScaleInput = document.createElement('input');
        SimScaleInput.type='text';
        SimScaleInput.id='SimScaleInput';
        SimScaleInput.className = 'SimScaleInput SimInput';
        SimScaleInput.value='0.8';
        SimScaleInput.addEventListener("change", valueSync);
        $("#kbtable")[0].style.setProperty('transform','scale(0.8)');
        $("#kbtable")[0].style.setProperty('transition','transform 0.4s cubic-bezier(0, 0, 0.22, 0.9)');
        zoomIn.type='button';
        zoomIn.className = 'button SimScale';
        let zoomOut = zoomIn.cloneNode(false);
        zoomIn.value='+';
        zoomIn.id='zoomIn';
        zoomOut.value='–';
        zoomOut.id='zoomOut';
        zoomIn.addEventListener("click", SimScale);
        zoomOut.addEventListener("click", SimScale);
        panel.appendChild(text);
        panel.appendChild(zoomOut);
        panel.appendChild(SimScaleInput);
        panel.appendChild(zoomIn);
        if(!$(".Nsb_layout_r")[0]){
            $("#kbtable")[0].parentElement.appendChild(panel);
        }else{
            panel.classList.add("rightPage");
            $("#kbtable")[0].before(panel);
        }
    }
    function universalScaleCtrl(zoomData){
        if(zoomData<0.6){
            zoomData = 0.5;
            $("#zoomIn")[0].classList.remove('disabled');
            $("#zoomIn")[0].addEventListener("click", SimScale);
            $("#zoomOut")[0].classList.add('disabled');
            $("#zoomOut")[0].removeEventListener("click", SimScale);
        }else if(zoomData>0.9){
            zoomData = 1.0;
            $("#zoomOut")[0].classList.remove('disabled');
            $("#zoomOut")[0].addEventListener("click", SimScale);
            $("#zoomIn")[0].classList.add('disabled');
            $("#zoomIn")[0].removeEventListener("click", SimScale);
        }else{
            $("#zoomIn")[0].classList.remove('disabled');
            $("#zoomOut")[0].classList.remove('disabled');
            $("#zoomIn")[0].addEventListener("click", SimScale);
            $("#zoomOut")[0].addEventListener("click", SimScale);
        }
        zoomData = zoomData.toFixed(1);
        $("#SimScaleInput")[0].value = zoomData;
        $("#kbtable")[0].style.setProperty('transform','scale('+zoomData+')');
        if(!$(".Nsb_layout_r")[0]){
            let bodyStyle = $("#kbtable")[0].parentElement.style;
            if(bodyStyle.length==1){
                bodyStyle.removeProperty('width');
            }else{
                bodyStyle.setProperty("width","100%");
            }
        }
    }
    function valueSync(){
        let zoomData = this.value;
        let zoomValue = parseFloat(zoomData);
        universalScaleCtrl(zoomValue);
    }
    function SimScale(){
        let zoomData = $("#SimScaleInput")[0].value;
        let zoomValue = parseFloat(zoomData);
        if(this.value=='+'){
            zoomData = zoomValue+0.1;
        }else if(this.value=='–'){
            zoomData = zoomValue-0.1;
            this.value='–';
            this.id='zoomOut';
        }
        universalScaleCtrl(zoomData);
    }
                        // if(kbc1Children[0].childNodes[2].data.slice(kbc1Children[0].childNodes[2].data.lastIndexOf("("))==kbc1Children[kbc1Children.length-1].childNodes[2].data.slice(kbc1Children[kbc1Children.length-1].childNodes[2].data.lastIndexOf("("))){
                    //     kbc1Children[0].id = "SimStackTop";
                    //     hslDarker = "hsl(" + tempJson.hue + ", " + tempJson.sat + "%, " + (tempJson.light - 8) + "%)";
                    //     let hslDarker2 = "hsl(" + tempJson.hue + ", " + tempJson.sat + "%, " + (tempJson.light - 16) + "%)";
                    //     for(let o=2;o<=kbc1Children.length;o++){
                    //         kbc1Children[o-1].classList.add('SimStack');
                    //         kbc1Children[o-1].setAttribute("stacked","true");
                    //         kbc1Children[0].setAttribute("stacked","true");
                    //         kbc1Children[0].style.cssText += "box-shadow: 3px 3px 0px 1px "+hslDarker+", 7px 7px 0px 1px "+hslDarker2;
                    //     }
                    //     kbc1Children[0].addEventListener("click", SimStackActions);
                    // }
    if($(".kbcontent1")[0]){
        let kbcontent,kbcontent1;
        var kbsort = new Array();
        if(!$(".Nsb_layout_r")[0]){
            let classLists_eg = document.createElement("div");
            classLists_eg.className = "classLists";
            let classLists,tempJson,hslDarker;
            let tr = $("#kbtable")[0].getElementsByTagName("tr");
            let tr_length = tr.length;
            let th = tr[0].children;
            let length = th.length;
            for(let i=1;i<=length;i++){
                if(th[i-1].colSpan==7){
                    th[i-1].colSpan = 6;
                }
            }
            let td = tr[1].children;
            length = td.length;
            for(let i=1;i<=length;i++){
                if(td[i-1].innerHTML=='13'){
                    length--;
                    for(let o=2;o<=tr_length;o++){
                        tr[o-1].children[i-1].remove();
                    }
                }
            }
            length = $(".kbcontent1").length;
            for(let i=1;i<=length;i++){
                classLists = classLists_eg.cloneNode(true);
                kbcontent1 = $(".kbcontent1")[i-1];
                if(!kbsort[kbcontent1.childNodes[0].data]){
                    kbsort[kbcontent1.childNodes[0].data] = randomColorPick();
                }
                let kbc1Children = kbcontent1.parentElement.children;
                if(kbcontent1 == kbc1Children[0]){
                    let similarity = 0;
                    let similarClass,initalIndex;
                    for(let o=1;o<kbc1Children.length;o++){
                        if(kbc1Children[o-1].firstChild.data==kbc1Children[o].firstChild.data&&kbc1Children[o-1].childNodes[2].data.slice(kbc1Children[o-1].childNodes[2].data.lastIndexOf("("))==kbc1Children[o].childNodes[2].data.slice(kbc1Children[o].childNodes[2].data.lastIndexOf("("))){       
                            if(similarity==0){
                                similarClass = kbc1Children[o-1].childNodes[0].data;
                                initalIndex = o-1;
                            }
                            similarity++;
                        }
                    }
                    if(similarity>4){
                        tempJson = kbsort[kbc1Children[initalIndex].childNodes[0].data];
                        kbc1Children[initalIndex].id = "SimStackTop";
                        hslDarker = "hsl(" + tempJson.hue + ", " + tempJson.sat + "%, " + (tempJson.light - 8) + "%)";
                        let hslDarker2 = "hsl(" + tempJson.hue + ", " + tempJson.sat + "%, " + (tempJson.light - 16) + "%)";
                        for(let o=initalIndex+2;o<=kbc1Children.length;o++){
                            if(similarClass==kbc1Children[o-1].firstChild.data){
                                kbc1Children[o-1].classList.add('SimStack');
                                kbc1Children[o-1].setAttribute("stacked","true");
                                SimStacked(kbc1Children[o-1]);
                            }
                        }
                        kbc1Children[initalIndex].setAttribute("stacked","true");
                        kbc1Children[initalIndex].style.cssText += "box-shadow: 3px 3px 0px 1px "+hslDarker+", 7px 7px 0px 1px "+hslDarker2;
                        kbc1Children[initalIndex].addEventListener("click", SimStackActions);
                    }
                }
                tempJson = kbsort[kbcontent1.childNodes[0].data];
                let tempData = kbcontent1.childNodes[0].data;
                if(kbcontent1.lastChild.data.search(",")!=-1){
                    classLists.innerHTML = kbcontent1.lastChild.data;
                }else if(kbcontent1.firstChild.data.search(",")!=-1){
                    classLists.innerHTML = kbcontent1.firstChild.data;
                }else if(kbcontent1.childNodes[2].data.search(",")!=-1){
                    classLists.innerHTML = kbcontent1.childNodes[2].data;
                }
                if(classLists.innerHTML.search(",")!=-1){
                    if(classLists.innerHTML.lastIndexOf(",")>classLists.innerHTML.lastIndexOf("(")&&classLists.innerHTML.slice(classLists.innerHTML.indexOf(","),classLists.innerHTML.lastIndexOf(",")+1).indexOf(")")==-1){
                    }else{
                        if(classLists.innerHTML.slice(0,classLists.innerHTML.lastIndexOf("(")).search(/[0-9]/)==-1){
                            classLists.className = '';
                        }else{
                            if(classLists.innerHTML.lastIndexOf(",")>classLists.innerHTML.lastIndexOf("(")){
                                let replaced = classLists.innerHTML.slice(0,classLists.innerHTML.lastIndexOf("(")).replaceAll(",","<br>");
                                replaced += classLists.innerHTML.slice(classLists.innerHTML.lastIndexOf("("));
                                classLists.innerHTML = replaced;
                            }else{
                                classLists.innerHTML = classLists.innerHTML.replaceAll(",","<br>");
                            }
                            hslDarker = "hsl(" + tempJson.hue + ", " + tempJson.sat + "%, " + (tempJson.light - 10) + "%)";
                            classLists.style = " background-color:"+hslDarker;
                        }
                      }
                   }
                if(kbcontent1.lastChild.data.search(",")!=-1){
                    kbcontent1.lastChild.remove();
                    kbcontent1.lastChild.after(classLists);
                }else if(kbcontent1.firstChild.data.search(",")!=-1){
                    kbcontent1.firstChild.remove();
                    kbcontent1.firstChild.before(classLists);
                    classLists.nextSibling.remove();
                    kbsort[kbcontent1.firstChild.innerHTML]=tempData;
                }else if(kbcontent1.childNodes[2].data.search(",")!=-1){
                    kbcontent1.childNodes[2].remove();
                    kbcontent1.childNodes[2].before(classLists);
                    classLists.nextSibling.remove();
                }
                kbcontent1.style.cssText += "background-color:"+tempJson.hsl;
            }
            fixKBBottom("kbcontent1");
            setupScalingPanel();
        }else{
            //remove zoom button and text
            $("#sfFD")[0].style.display = "none";
            $("#xnxq01id")[0].parentElement.lastChild.remove();
            let kblength = $(".kbcontent").length;
            let length = $(".kbcontent1").length;
            for(let i=1;i<=length;i++){
                kbcontent1 = $(".kbcontent1")[i-1];
                kbcontent1.style.display = "none";
            }
            for(let i=1;i<=kblength;i++){
                let childNodes;
                kbcontent = $(".kbcontent")[i-1];
                childNodes = kbcontent.childNodes;
                length = childNodes.length;
                let kbdiv_eg = document.createElement("div");
                kbdiv_eg.className = "kbcontent";
                kbdiv_eg.id = "SimKB";
                let kbdiv;
                function cut_judge(node){
                    if(node.nodeName != 'BR'){
                        if(node.data=='---------------------'){
                            return true;
                        }
                    }
                }
                function append_kbdiv(){
                    kbdiv.firstChild.remove();
                    kbcontent.parentElement.appendChild(kbdiv);
                    kblength++;
                }
                if(kbcontent.innerHTML=='&nbsp;'){
                    kbcontent.style.visibility = "hidden";
                }else if(!kbsort[kbcontent.childNodes[0].data]){
                    kbsort[kbcontent.childNodes[0].data] = randomColorPick().hsl;
                }
                kbcontent.style.background = kbsort[kbcontent.childNodes[0].data];
                if(kbcontent.id != 'SimKB'&&kbcontent.innerHTML!='&nbsp;'){
                    let cut_times = 0;
                    let o=0;
                    while(o<length-1){
                        if(cut_judge(childNodes[o])==true){
                            break;
                        }
                        o++;
                    }
                    while(o<length-1){
                        if(cut_judge(childNodes[o])==true){
                            if(cut_times!=0){
                                append_kbdiv();
                            }
                            kbdiv = kbdiv_eg.cloneNode(true);
                            childNodes[o].remove();
                            length--;
                            cut_times++;
                        }
                        kbdiv.appendChild(childNodes[o]);
                        length--;
                        if(o==length-1){
                            append_kbdiv();
                            kbcontent.lastChild.remove();
                        }
                    }
                }
            }
            let th,second,fourth,noon,evening;
            length = $("th").length;
            for(let i=1;i<=length;i++){
                th = $("th")[i-1];
                if(th.innerHTML.search("&nbsp;")!=-1){
                    th.innerHTML = th.innerHTML.replace("&nbsp;","");
                }
                if(th.innerHTML.search("第二大节")!=-1){
                    second = th.parentElement;
                }
                if(th.innerHTML.search("中午")!=-1){
                    th.innerHTML = th.innerHTML.replace("中午","晚间");
                    th.style.padding = '0px';
                    noon = th.parentElement;
                    noon.style.background = "#599FFE";
                    evening = noon.cloneNode(true);
                    th.innerHTML = th.innerHTML.replace("晚间","午间");           
                }
                if(th.innerHTML.search("第四大节")!=-1){
                    fourth = th.parentElement;
                }
                if(th.innerHTML.search("备注:")!=-1){
                    th.innerHTML = th.innerHTML.replace(":","");
                    th.style.padding = '0px';
                }
                if(i==length){
                    fourth.after(evening);
                    second.after(noon);
                }
            }
            fixKBBottom("kbcontent");
            setupScalingPanel();
        }
    }
            // for(let i=1;i<=length;i++){
            //     // classLists = classLists_eg.cloneNode(true);
            //     kbcontent1 = $(".kbcontent1")[i-1];
            //     if(!kbsort[kbcontent1.childNodes[0].data]){
            //         kbsort[kbcontent1.childNodes[0].data] = randomColorPick();
            //     }
            //     tempJson = kbsort[kbcontent1.childNodes[0].data];
            //     for(let o=1;o<=kbcontent1.childNodes.length;o++){
            //         if(kbcontent1.childNodes[o-1].nodeName!='BR'){
            //             if(kbcontent1.childNodes[o-1].data.search(",")!=-1){
            //                 let classLists = classLists_eg.cloneNode(true);
            //                 classLists.innerHTML = kbcontent1.childNodes[o-1].data;
            //                 if(classLists.innerHTML.search(",")!=-1){
            //                     if(classLists.innerHTML.lastIndexOf(",")>classLists.innerHTML.lastIndexOf("(")&&classLists.innerHTML.slice(classLists.innerHTML.indexOf(","),classLists.innerHTML.lastIndexOf(",")+1).indexOf(")")==-1){
            //                         // classLists.innerHTML = classLists.innerHTML.replaceAll(",","、");
            //                     }else{
            //                         if(classLists.innerHTML.lastIndexOf(",")>classLists.innerHTML.lastIndexOf("(")){
            //                             let replaced = classLists.innerHTML.slice(0,classLists.innerHTML.lastIndexOf("(")).replaceAll(",","<br>");
            //                             replaced += classLists.innerHTML.slice(classLists.innerHTML.lastIndexOf("(")).replaceAll(",","、");
            //                             classLists.innerHTML = replaced;
            //                         }else if(classLists.innerHTML.slice(0,classLists.innerHTML.lastIndexOf("(")).search(/[0-9]/)!=-1){
            //                             classLists.innerHTML = classLists.innerHTML.replaceAll(",","<br>");
            //                         }
            //                         hslDarker = "hsl(" + tempJson.hue + ", " + tempJson.sat + "%, " + (tempJson.light - 10) + "%)";
            //                         classLists.style = "background-color:"+hslDarker;
            //                     }
            //                     if(o-1 == 0){
            //                         kbcontent1.firstChild.remove();
            //                         kbcontent1.firstChild.before(classLists);
            //                         // classLists.nextSibling.remove();
            //                     }
            //                     if(0-1 == 2){
            //                         kbcontent1.childNodes[2].remove();
            //                         kbcontent1.childNodes[2].before(classLists);
            //                         // classLists.nextSibling.remove();
            //                     }
            //                     if(o-1 == kbcontent1.childNodes.length-1){
            //                         kbcontent1.lastChild.remove();
            //                         kbcontent1.lastChild.after(classLists);
            //                     }
            //                 }
            //             }
            //         }
            //     }
            //     kbcontent1.style = "background-color:"+tempJson.hsl;
            // }
    //change sub page title
    if(document.getElementsByClassName("Nsb_r_title")[0]){
        let title = document.getElementsByClassName("Nsb_r_title")[0];
        if(title.innerText.search(">>")!=-1){
            title.innerHTML = title.innerText.slice(title.innerText.lastIndexOf(">>")+2);
        }else{
            title.innerHTML = title.innerText.slice(title.innerText.lastIndexOf("» ")+2);
        }
        if(document.getElementsByClassName("Nsb_r_title")[0].previousElementSibling){
            document.getElementsByClassName("Nsb_r_title")[0].previousElementSibling.remove();
        }
    }
    if($(".Nsb_layout_r")[0]&&!$(".Nsb_l_list_now")[0]){
        let length = $("a[href]").length;
        for(let i=1;i<=length;i++){
            if($("a[href]")[i-1].innerText == $(".Nsb_r_title")[0].innerText){
                $("a[href]")[i-1].className += " Nsb_l_list_now";
            }  
        }
    }
    if($(".Nsb_layout_l")[0]){
        if($(".Nsb_layout_l")[0].childElementCount <=1){
            $(".Nsb_layout_l")[0].style.display = "none";
        }
    }
    //top banner decoration
    if($(".Nsb_pw")[0]){
        $(".Nsb_pw")[0].classList.add("SimTopBanner");
    }
    //main page info fix
    if(document.getElementsByClassName("Nsb_pw")[2]&&document.getElementById("btn_back")){
        let childNodes = document.getElementsByClassName("Nsb_pw")[2].childNodes;
        let length = childNodes.length;
        let div = document.createElement("div");
        div.id = "SimInfo";
        for(let i=5;i<=length;i++){
            if(childNodes[i-2].nodeName == 'BR'&&childNodes[i].nodeName == 'BR'){
                let line1 = document.createElement("div");
                line1.innerHTML = childNodes[i-1].data;
                div.appendChild(line1);
            }
            if((childNodes[i-2].nodeName == 'BR'&&childNodes[i].nodeName == 'SPAN')||(childNodes[i-2].nodeName == 'SPAN'&&childNodes[i].nodeName == 'SPAN')){
                div.innerHTML += childNodes[i-1].data;
            }
            if(childNodes[i-1].nodeName == 'SPAN'){
                let span = childNodes[i-1].cloneNode(true);
                div.appendChild(span);
            }
        }
        document.getElementById("btn_back").after(div);
        for(let i=1;i<=length;i++){
            if((childNodes[i-1].nodeName == 'BR'||childNodes[i-1].nodeName == '#text'||childNodes[i-1].nodeName == 'SPAN')&&(childNodes[i-1].parentElement.id!="SimInfo")){
                childNodes[i-1].remove();
                i-=1;
            }
            length = childNodes.length;
        }
    }
    //fix pattern
    if(document.getElementsByClassName("button").namedItem("selectJg0101JS")){
        document.getElementsByClassName("button").namedItem("selectJg0101JS").parentElement.style = "display: inline-flex;";
    }
    if(document.getElementById("button2")&&!document.getElementById("button1")){
        document.getElementById("button2").style = "left:0;";
    }
    //button input difference & disabled things marker
    if(document.getElementsByTagName("input").length>1){
        let input = document.getElementsByTagName("input");
        let length = input.length;
        for(let i=1;i<=length;i++){
            if((input[i-1].type == "text"||input[i-1].type == "password")&&input[i-1].parentElement.tagName=="TD"){
                input[i-1].className += " SimInput";
            }
            //marker for disabled input
            if(input[i-1].disabled == true){
                input[i-1].className += " disabled";
            }
        }
    }
    //select
    if(document.getElementsByTagName("select")[0]){
        let select = document.getElementsByTagName("select");
        let length = select.length;
        for(let i=1;i<=length;i++){
            select[i-1].className = "SimSelect";
        }
    }
    if(document.getElementsByClassName("button")[0]){
        let button = document.getElementsByClassName("button")[0];
        if(button.attributes.onclick){
            if(button.attributes.onclick.value.includes("JsMod")){
                button.className += " centerButton";
            }
        }
    }
    //Slim select
    if($("form")[0]){
        if($("form")[0].action=="http://jw.wbu.edu.cn/jsxsd/kbxx/jsjy_query2"){
            let select = document.getElementsByTagName("select");
            let length = select.length;
            for(let i=1;i<=length;i++){
                select[i-1].className += " Slim";
            }
            let input = document.getElementsByTagName("input");
            length = input.length;
            for(let i=1;i<=length;i++){
                if(input[i-1].type == "text"||input[i-1].type == "password"&&input[i-1].parentElement.tagName=="TD"){
                    input[i-1].className += " Slim";
                }
            }
        }
    }
    //SimPage
    //patch an added blank page
    let script = document.getElementsByTagName("script");
    let length = script.length;
    for(let i=1;i<=length;i++){
        if(script[i-1].innerHTML.search("window.close()") != -1){
            closeIframe();
        }
    }
    if(!$("head")[0]){
        window.parent.$("#fcenter")[0].remove();
    }
    //SimPage iframe
    if($(".toolbar")[0]){
        $(".toolbar")[0].remove();
        if($("textarea").length<2&&$("textarea")[0]){
            $("table")[0].className = "textform";
        }
        if(document.getElementsByClassName("button")[0]){
            let button = document.getElementsByClassName("button");
            let length = button.length;
            for(let i=1;i<=length;i++){
                if(button[i-1].attributes.onclick.value == "window.close();"){
                    button[i-1].attributes.removeNamedItem("onclick");
                    button[i-1].addEventListener("click", closeIframe);
                }
            }
        }
    }
    //setup homepage icons
    if(document.getElementsByClassName("block1")[0]){
        let icon1 = document.createElement("span");
        let icon2 = document.createElement("span");
        let icon3 = document.createElement("span");
        let icon4 = document.createElement("span");
        let icon5 = document.createElement("span");
        let icon6 = document.createElement("span");
        let icon7 = document.createElement("span");
        let icon8 = document.createElement("span");
        let icon9 = document.createElement("span");
        let icon10 = document.createElement("span");
        let icon11 = document.createElement("span");
        let icon12 = document.createElement("span");

        icon1.className = "iconfont icon-yonghu";
        icon2.className = "iconfont icon-xuanke";
        icon3.className = "iconfont icon-pingjiao";
        icon4.className = "iconfont icon-jiejuefangan";
        icon5.className = "iconfont icon-icon-test";
        icon6.className = "iconfont icon-gonggao-xianxing";
        icon7.className = "iconfont icon-chengji";
        icon8.className = "iconfont icon-rili";
        icon9.className = "iconfont icon-jihua";
        icon10.className = "iconfont icon-chengji";
        icon11.className = "iconfont icon-xuejiyidongguanli";
        icon12.className = "iconfont icon-zaixianbaoming";

    //fix missing block6
        if(!document.getElementsByClassName("block6")[0]){
            let block6 = document.createElement("div");
            block6.innerHTML = document.getElementsByClassName("wap")[0].getElementsByTagName("a")[4].innerHTML;
            block6.className = "block6";
            document.getElementsByClassName("wap")[0].getElementsByTagName("a")[4].innerHTML = "";
            document.getElementsByClassName("wap")[0].getElementsByTagName("a")[4].appendChild(block6);
        }
        function apply_icons(b,i){
            document.getElementsByClassName(b)[0].appendChild(i);
        }
        apply_icons("block1",icon1);
        apply_icons("block2",icon2);
        apply_icons("block3",icon3);
        apply_icons("block4",icon4);
        apply_icons("block5",icon5);
        apply_icons("block6",icon6);
        apply_icons("block7",icon7);
        apply_icons("block8",icon8);
        apply_icons("block9",icon9);
        apply_icons("block10",icon10);
        apply_icons("block11",icon11);
        apply_icons("block12",icon12);
        //add title for hide names func
        document.getElementsByClassName("icon-yonghu")[0].title="点击切换个人信息展示";
    }
    //hide personal info
    if(document.getElementById("Top1_divLoginName")){
        //name color reset
        document.getElementById("Top1_divLoginName").style="";
        document.getElementById("Top1_divLoginName").title = "点击切换个人信息展示";
        let name_top = document.getElementById("Top1_divLoginName");
        let origin_name_top = name_top.innerHTML;
        if(Cookies.get("name_top")=="hidden"){
            name_top.innerHTML = "个人信息已隐藏";
        }
        let name_inner;
        let origin_name_inner;
        if(document.getElementsByClassName("block1text")[0]){
            name_inner = document.getElementsByClassName("block1text")[0];
            origin_name_inner= name_inner.innerHTML;
            if(Cookies.get("name_inner")=="hidden"){
                name_inner.innerHTML = "个人信息已隐藏";
            }
            document.getElementsByClassName("icon-yonghu")[0].addEventListener("click", name_hide);
        }
        function name_hide_top(){
            if(origin_name_top==name_top.innerHTML){
                name_top.innerHTML = "个人信息已隐藏";
                Cookies.set('name_top', 'hidden', {path:'/'});
                Cookies.set('name_inner', 'hidden', {path:'/'});
            }else{
                name_top.innerHTML = origin_name_top;
                Cookies.remove('name_top', {path:'/'});
                Cookies.remove('name_inner', {path:'/'});
            }
        }
        function name_hide_inner(){
            if(origin_name_inner==name_inner.innerHTML){
                name_inner.innerHTML = "个人信息已隐藏";
                Cookies.set('name_top', 'hidden', {path:'/'});
                Cookies.set('name_inner', 'hidden', {path:'/'});
            }else{
                name_inner.innerHTML = origin_name_inner;
                Cookies.remove('name_top', {path:'/'});
                Cookies.remove('name_inner', {path:'/'});
            }
        }
        function name_hide(){
            if(document.getElementsByClassName("block1text")[0]){
                name_hide_top();
                name_hide_inner();
            }else{
                name_hide_top();
            }
        }
        name_top.addEventListener("click", name_hide);
    }
    //add title for hide names func
    if(document.getElementById("Footer1_divCopyright")){
        let footer = document.getElementById("Footer1_divCopyright");
        footer.className = "";
        footer.style = "text-align: center;"
        let info = document.createElement("div");
        info.innerHTML = "Beautified with <span class='heart'>❤</span><span class='info'> by Simprole</span>"
        info.className = "info";
        footer.appendChild(info);
    }
    //form btn style
    if(document.getElementsByTagName("Form")[1]&&document.getElementsByTagName("input")[0]){
        let buttons = document.createElement("div");
        let form=document.getElementsByTagName("Form");
        if(form[form.length-1].getElementsByClassName("Nsb_r_title")[0]){
            form[form.length-1].getElementsByClassName("Nsb_r_title")[0].appendChild(buttons);
            let btn = form[form.length-1].getElementsByTagName("input");
            let btn_len = btn.length;
            let validLength = 0;
            if($(".Nsb_layout_r")[0]){
                for(let i=1;i<=btn_len;i++){
                    if(btn[i-1].getAttribute("onclick")){
                        validLength++;
                    }
                }
                if(validLength>=3){
                    for(let i=1;i<=btn_len;i++){
                        if(btn[i-1].getAttribute("onclick")){
                            buttons.appendChild(btn[i-1]);
                        }
                    }
                }
            }else{
                for(let i=1;i<=btn_len;i++){
                    buttons.appendChild(btn[i-1]);
                }
            }
        }
    }
    //setup table round corner
    if(document.getElementsByClassName("Nsb_table")[0]){
        let table = document.getElementsByClassName("Nsb_table");
        let length = table.length;
        if(document.getElementsByClassName("Nsb_r_list_thb")[0]){
            for(let i=1;i<=length;i++){
                if(table[i-1].border == '1'){
                    table[i-1].border = '0';
                }
                let tr = table[i-1].getElementsByTagName("tr");
                let th = tr[0].children;
                th[0].className += " thb_t_l";
                th[th.length-1].className += " thb_t_r";

                let tr_c = tr[tr.length-1].children;
                if(tr_c[0].tagName == "TD"){
                    tr_c[0].className += " thb_b_l";
                    tr_c[tr_c.length-1].className += " thb_b_r";
                }
            }
        }
    }
    if(document.getElementById("kbtable")){
        let table = document.getElementById("kbtable");
        if(table.border == '1'){
            table.border = '0';
        }
        let tr = table.getElementsByTagName("tr");
        let th = tr[0].getElementsByTagName("th");
        th[0].className += " thb_t_l";
        th[th.length-1].className += " thb_t_r";

        let tr_c = tr[tr.length-1].children;
        tr_c[0].className += " thb_b_l";
        tr_c[tr_c.length-1].className += " thb_b_r";
    }
    //fix a width
    if($("*[name='zyxzForm']")[0]){
        $("*[name='zyxzForm']")[0].getElementsByTagName("div")[0].style="width:100%";
    }
    //setup page flip btn style
    if(document.getElementById("PagingControl1_btnPrevPage")){
        let prevbtn = document.getElementById("PagingControl1_btnPrevPage");
        let nextbtn = document.getElementById("PagingControl1_btnNextPage");
        prevbtn.innerHTML = "<";
        nextbtn.innerHTML = ">";
        if(prevbtn.attributes.disabled){
            prevbtn.className = "disabled";
            nextbtn.className = "disabled";
        }
    }

    });
})();