// ==UserScript==
// @name         WBUJWPlus
// @namespace    http://tampermonkey.net/
// @version      0.9.900
// @description  WBU教务平台Plus
// @author       Simprole
// @match        http://jw.wbu.edu.cn/jsxsd/*
// @match        http://jw-wbu-edu-cn.webvpn.wbu.edu.cn:8118/jsxsd/*
// @icon         https://www.wbu.edu.cn/_upload/tpl/00/a9/169/template169/images/favicon.ico
// @run-at       document-start
// @resource css https://s1.hdslb.com/bfs/static/jinkela/long/font/medium.css
// @resource icon https://gitee.com/dmaker/simpage/raw/master/iconfont.css
// @require      https://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @require      https://gitee.com/dmaker/simpage/raw/master/js.cookie.min.js
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function(){
    $(document).ready(function(){
    //import HarmonyOS font
    GM_addStyle(GM_getResourceText("css"));
    //root css
    $("body").append($('<style id="SimRootCSS">:root{--primary-theme-color: hsl(216.99deg 99.1% 56.67%);--secondary-theme-color: hsl(214.55deg 98.8% 67.25%);;--tertiary-theme-color:hsl(207 90% 60%);--hover_darken_color:brightness(0.75);--sidebar_width:10rem;--title-extra-length:20rem;}body,div,dl,dt,p,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,select,blockquote,th,td,a,span,div {padding:0;margin:0;font-size: 1rem;font-family: "HarmonyOS_Medium"!important;}html{scroll-behavior: smooth;}.display_none{display: none!important;}.mobile{padding: 0!important;}</style>'));
    //universal buttons css
    $("body").append($('<style id="SimUniButtonsCSS">.button,center a[style][href],#dataView.dataTable td[class] a[style]{width: unset!important;font-size: 1rem;background-image: none;color: #fff!important;;background-color: var(--primary-theme-color);border: var(--primary-theme-color);border-radius: 20px;box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);padding: 5px;position: relative;letter-spacing: 5px;text-indent: 5px;text-align: center;text-decoration:none!important;height: min-content;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;&.disabled,&.disabled:hover{box-shadow: none;cursor: no-drop;filter: brightness(0.6);transform: none;}&.centerButton{left: 50%;translate: -50%;margin: -0.5rem 0 0.5rem 0;}&.SimScale{text-indent: 0;}&.icon_btn,&.calc_ui_btn{display: inline-flex;font-size: 1rem;margin-left: 0.5rem;align-items: center;}}div .buttons{display: flex;justify-content: center;}.Nsb_r_title div .button{left:0;margin: 0.5rem 0.5rem 0;}.Nsb_r_title button{left: 50%;transform: translateX(-50%);}form .buttons{left: 50%;transform: translateX(-50%);position: relative;display: inline-block;}.Nsb_r_list a[href]{background-color: var(--primary-theme-color);border: var(--primary-theme-color);border-radius: 20px;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);padding: 3px 0;position: relative;text-align: center;color: #fff;display: list-item;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;}.Nsb_r_list a:hover, .button:hover, center a[style][href]:hover,#dataView.dataTable td[class] a[style]:hover{text-decoration:none;filter: brightness(0.8);box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.7);transform: translateY(0.5px);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;}.Nsb_r_list_fy4 {background: none;& a {width: 3em;text-align: center;background: var(--primary-theme-color);margin: 0 0.1em;border-radius: 2em;color: #fff;font-weight: bold;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);-webkit-user-select: none;user-select: none;}& .disabled {filter: brightness(0.6);box-shadow: none;cursor: no-drop;}&.dataTable .button#button1,&.dataTable .button#button2{left: 27%;}}.SimScale{font-size: 1.8rem;height: 1.6rem;width: 1.6rem!important;line-height: 0;border-radius: 100%;display: flex;align-items: center;justify-content: center;margin: 0.25rem;}input#SimBtn{width: unset!important;font-size: 1rem;background-image: none;color: #fff!important;;background-color: hsl(216.99deg 99.1% 56.67%);border: hsl(216.99deg 99.1% 56.67%);border-radius: 20px;box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);padding: 5px 10px 5px 15px;position: relative;letter-spacing: 5px;text-indent: 5px;text-align: center;text-decoration:none!important;height: min-content;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;&:hover{text-decoration:none;filter: brightness(0.8);box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.7);transform: translateY(0.5px);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;}}</style>'));
    //universal charts css
    $("body").append($('<style id="SimUniChartsCSS">#dataList{margin-top: 0.5rem;border-collapse: separate;position: relative;transform-origin: top!important;padding: 0 2rem;& th{background: var(--secondary-theme-color);border: none;color: #fff;width: min-content;line-height: initial;font-size: 1rem;padding: 0 0.5rem;}& td{border: solid 0.05rem var(--secondary-theme-color);color: #000;text-align: center;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);font-size: 1rem;word-break: keep-all;}& .Nsb_r_list_thb{box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);border: none;background: var(--secondary-theme-color);font-size: 1.125rem;color: #fff;height: 2rem;font-weight: normal;text-align: center;word-break: keep-all;}}#kbtable{border-collapse: separate;transform-origin: 0 0;display: inline-flex;flex-direction: column;& th{background: var(--secondary-theme-color);border: none;color: #fff;max-width: min-content;line-height: initial;font-size: 1rem;padding: 0.5rem;box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);word-break: keep-all;}& th[width="70"][height="28"]{word-break: break-all;width: 1.25rem;}& th[width="124"][height="28"]{word-break: keep-all;}& td{border: solid 0.05rem var(--secondary-theme-color);color: #000;text-align: center;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);font-size: 1rem;word-break: keep-all;line-height: normal;}}body{& #kbtable{align-items: flex-start;}& .Nsb_layout_r #kbtable{align-items: center;}}#kbtable.vertical{-webkit-writing-mode: vertical-lr;-moz-writing-mode: vertical-lr;-ms-writing-mode: tb-lr;writing-mode: vertical-lr;& td{writing-mode: horizontal-tb;;}}[id].kbcontent,[id].kbcontent1{background: var(--secondary-theme-color);border-radius: 1rem;color: #fff;padding: 0.2rem 0.8rem;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);margin-bottom: 5px;min-width: max-content;}.classLists[style]{border-radius: 1rem;padding: 3px 5px;}table.display{& thead th{cursor:default;box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);border: none;background: var(--secondary-theme-color);font-size: 1.125rem;color: #fff;text-align: center;font-weight: normal;}& tbody th{background: var(--secondary-theme-color);border: none;color: #fff;width: min-content;line-height: initial;font-size: 1rem;padding: 0 0.5rem;}& td, td.center{padding: 0.5rem 0;border: solid 0.05rem var(--secondary-theme-color);color: #000;text-align: center;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);font-size: 1rem;word-break: keep-all;}& tr.odd{background-color: #fff;}& tr.even{background-color: var(--tertiary-theme-color);}}table#Table2[width]{padding:0 6rem;}.Nsb_table,.display{.thb_t_l{border-radius: 1rem 0 0 0;}.thb_t_r{border-radius: 0 1rem 0 0;}.thb_t_l.thb_t_r{border-radius: 1rem 1rem 0 0;}.thb_b_l{border-radius: 0 0 0 1rem;}.thb_b_r{border-radius: 0 0 1rem 0;}.thb_b_l.thb_b_r{border-radius: 0 0 1rem 1rem;}}</style>'));
    //universal pages css
    $("body").append($('<style id="SimUniPagesCSS">.Nsb_pw, .Nsb_pw_main {width: inherit;.Nsb_r_title {font-size: 1.4rem;font-weight: bold;color: #000;height: max-content;line-height: 1.5em;letter-spacing: 0.1rem;margin: 0.5rem 0 0.5rem 0;text-align: center;}}.Nsb_pw{& .Nsb_top{height: 6rem;}}.Nsb_pw_main{display: flex;flex-direction: row;align-items: baseline;justify-content: center;margin: 0.5rem auto;height: inherit;max-width: 1280px;&.mobile{margin: 1rem auto!important;}}.Nsb_pw_page {width: inherit;display: flex;flex-direction: row;align-items: flex-start;justify-content: space-evenly;}#SimInfo{position: relative;left: 50%;transform: translateX(-50%);margin-top: 0.5rem;text-align: center;}.SimStack{transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: opacity;&[stacked=true]{opacity: 0%;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: opacity;}&[stacked=false]{opacity: 100%;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: opacity;}}#SimStackTop{cursor: pointer;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: filter,transform,margin,margin-right,box-shadow;&:hover{transform: translateY(0.75px);filter: brightness(0.7);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: filter,transform,margin,margin-right,box-shadow;}&[stacked=true]{margin: 0px 7px 12px 0;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: filter,transform,margin,margin-right,box-shadow;}&[stacked=false]{margin-right: 0;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: filter,transform,margin,margin-right,box-shadow;}}.hidden{display: none;}.SimScalePanel{display: flex;position: fixed;align-items: center;justify-content: center;flex-direction: row;right: 0;bottom: 0;opacity: 0.2;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1) 1s;transition-property: opacity,transform;&.rightPage{opacity: 1;position: relative;margin-top: -1rem;.SimScaleText{opacity: 1;transform: 0;font-size:1rem;transform: none;}}.SimScaleText{opacity: 0;user-select: none;font-size: 1.3rem;transform: translateX(50%);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1) 1s;transition-property: opacity,transform;}&:hover{opacity: 1.0;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: opacity,transform;.SimScaleText{opacity: 1;transform: translateX(0%);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: opacity,transform;}}}.SimSelect{text-align: center;font-size: 1rem;border: 2px solid var(--secondary-theme-color);border-radius: 1rem;height: 1.7rem;width: 203px!important;margin: 0.125rem 0;box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: border,box-shadow;&.Slim{width: 125px!important;}&:hover,&:focus-visible{outline:none;border: 2px solid var(--primary-theme-color);box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3),inset 0px 2px 6px 0px var(--secondary-theme-color);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: border,box-shadow;}}input.SimScaleInput.SimInput{width: 4.5rem!important;font-size: 1.3rem;height: 1.4rem;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);}input.SimInput,.inputnormal{width: 200px!important;text-align: center;border: 2px solid var(--primary-theme-color);border-radius: 1.5em;background-color: var(--tertiary-theme-color);text-shadow: 0px 0px 4px rgba(0,0,0,0.7);color: #fff;font-size: 1rem;height: 1.5rem;margin: 0.125rem 0;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: transform,background-color,border,color;}.SimInput.Slim{width: 130px!important;}input.SimInput{&:hover,&:focus-visible{outline: none;border: 2px solid var(--primary-theme-color);background-color:var(--secondary-theme-color);transform: scale(1.02);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: transform,background-color,border,color;}&.disabled,.disabled:hover{background-color: var(--secondary-theme-color);border: 2px solid var(--primary-theme-color);text-shadow: none;outline: none;cursor: no-drop;transform: none;filter: brightness(0.5);}&[readonly]{&:hover{outline: 0px;}&:focus-visible{outline: 0px;}}}#SimTop{position: fixed;right: 0.5rem;bottom: 0.5rem;font-size: 1rem;background-image: none;background-color: var(--primary-theme-color);border-radius: 20px;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);color: #fff;}.SimGrid{display: grid;grid-template-columns: repeat(3, 1fr);margin-top: 0.5rem;position: relative;padding: 0 2rem;gap: 0.8rem;font-size: 1rem!important;color: white;justify-content: center;grid-auto-flow: dense;&.mobile{grid-template-columns: repeat(2, 1fr);justify-content: start;}& .grid{background-color: var(--secondary-theme-color);box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);border-radius: 1rem;padding: 0.5rem 1rem;transition-duration: 0.3s;transition-property: transform,background-color,box-shadow;transition-timing-function: ease-out;& .top{display: inline-flex;flex-direction: row;justify-content: space-between;align-items: center;width: -webkit-fill-available;margin-bottom: 0.5rem;font-size: 1.3rem!important;overflow: hidden;& .title{font-size: 1.3rem;white-space: nowrap;max-width: 20rem;&.wide{position: relative;transition-duration: 0.5s;transform: translateX(0px);transition-property: transform,margin-left;transition-timing-function: linear;margin-left: 0;}}& .score{font-size: 1.3rem;z-index: 2;padding-left: 0.5rem;background-color: var(--secondary-theme-color);transition-property: background-color;transition-duration: 0.3s;transition-timing-function: ease-out;}}&.hover,&:hover{cursor: pointer;transform: scale(1.035);background-color: var(--primary-theme-color);box-shadow: 0px 3px 8px 1px rgb(0 0 0 / 35%);& .top .title.wide{transform: translateX(var(--title-extra-length));margin-left:-100%;}& .top .score{background-color: var(--primary-theme-color);}}& .bottom{display: inline-grid;justify-content: space-between;align-items: center;width: -webkit-fill-available;align-content: center;grid-template-columns: repeat(2, 1fr);justify-items: stretch;gap: 0.3rem 1rem;& div.sub{display: inline-grid;align-items: center;width: -webkit-fill-available;grid-template-columns: repeat(2, 1fr);& .text{font-size: 1rem;word-break: keep-all;&:last-child{text-align: right;margin-left: 0.5rem;}}}}}}</style>'));
    //footer css
    $("body").append($('<style id="SimFooterCSS">.Nsb_rights {height: max-content;line-height: normal;width: inherit;}.info{text-align: center;color: #000;& .heart{color: #ff0081;}}#Footer1_divCopyright{text-align: center;display: inline-flex;width: inherit;bottom: 0;flex-direction: column;}</style>'));
    //home page css
    $("body").append($('<style id="SimHomePageCSS">.iconfont {position: absolute;font-size: 75px;left: 50%;transform: translateX(-50%);top: 15px;}.icon-xuanke,.icon-yonghu {font-size: 75px;top: 80px;}.icon-yonghu{left: 22.5%!important;position: absolute;transform: translateX(-240%);cursor: pointer;transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);&:hover{filter: brightness(0.75);transform: translate(-240%,1px);transition-duration: 0.3s;transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);}}.block1,.block2,.block3,.block4,.block5,.block6,.block7,.block8,.block9,.block10,.block11,.block12{box-shadow: 0px 4px 4px rgba(0,0,0,0.3);border-radius: 0.5rem;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,transform,box-shadow;}.block1text{width:auto;height: auto;position: relative;text-align: center;left: 50%;top: 42%;color:#fff;transform: translate(-30%,-90%);}.block1tex,.block2tex{-webkit-user-select: none;user-select: none;left:0px;position: relative;top: 75%;text-align: center;color:#fff;}.block3tex,.block4tex,.block5tex,.block6tex{left:50%;position: absolute;top: 75%;text-align: center;transform: translateX(-50%);}.block7tex,.block8tex,.block9tex,.block10tex,.block11tex,.block12tex{left:50%;transform: translateX(-50%);position: absolute;top: 75%;text-align: center;width: max-content;}.block2:hover,.block3:hover,.block4:hover,.block5:hover,.block6:hover,.block7:hover,.block8:hover,.block9:hover,.block10:hover,.block11:hover,.block12:hover{box-shadow: 0px 1px 2px rgba(0,0,0,0.7);transform: translateY(2px);filter: brightness(0.75);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,transform,box-shadow;}.block1 img,.block2 img,.block3 img,.block4 img,.block5 img,.block6 img,.block7 img,.block8 img,.block9 img,.block10 img,.block11 img,.block12 img,.block1app,.block1pc{visibility: hidden;}</style>'));
    //iframe css
    $("body").append($('<style id="SimIframeCSS">div#SimPageOutline{width: 68rem;height: 51.1rem;border: 0.5rem solid var(--primary-theme-color);background-color: var(--primary-theme-color);border-top: 0;border-radius: 1rem;box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);left: 50%;position: relative;transform: translateX(-50%);}iframe#SimPage{display: block;width: 68rem;height: 48.8rem;position: relative;left: 50%;transform: translateX(-50%);border-radius: 0 0 1rem 1rem;background-color: #fff;}.Nsb_pw{#fcenter{margin-top:1rem;display: block;height: 52.5rem!important;position: relative;left: 50%;transform: translateX(-50%);border: 0.5rem solid var(--primary-theme-color);border-radius: 1rem;box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);}.Nsb_layout_r #fcenter{margin-top:1rem;display: block;height: 52.5rem!important;position: relative;left: 50%;transform: translateX(-50%);border: 0.5rem solid var(--primary-theme-color);border-radius: 1rem;box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);width: 68rem!important;}}.toolbar{background: var(--primary-theme-color)!important;border-radius: 0 0 1rem 1rem;box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);height: 2.5rem;}a.closeButton{float: right;display: block;left: 0.5rem;position: relative;cursor: pointer;user-select: none;-webkit-user-select: none;}div.closeButton{font-size: 2.2rem;height: 2rem;line-height: 1.95rem;padding: 0rem 1.4rem 0 1.3rem;background: #FF513A;width: inherit;color: #fff;border-radius: 0 1rem 0 0;font-weight: bold;box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);-webkit-user-select: none;user-select: none;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;&:hover{transform: translateY(0.75px);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);filter: brightness(0.7);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: filter,box-shadow,transform;}}.toolstitle {height: 2rem;line-height: 2rem;color: #FFF;font-size: 1.15rem;background: var(--secondary-theme-color);font-weight: normal;text-align: center;box-shadow: 0 4px 7px 0px rgba(0, 0, 0, 0.3);}table.textform{width: 100%;padding-left: 0!important;}font.tips{float: right;position: relative;font-size: 1.5rem;margin: 0.5rem 2.25rem 0 0;font-family: "HarmonyOS_Medium";}textarea#xmms {width: 93.5%!important;position: relative;margin: 0 2rem;border: 0.2rem solid var(--secondary-theme-color);border-radius: 1rem;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: box-shadow,outline;&:focus-visible {outline: 0.2rem solid var(--primary-theme-color);box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: box-shadow,outline;}}textarea[style],textarea[type=text]{position: relative;border: 0.2rem solid var(--secondary-theme-color);border-radius: 1rem;box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: box-shadow,outline;&:hover{outline: 0.2rem solid var(--primary-theme-color);box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: box-shadow,outline;}}</style>'));
    //left sidebar css
    $("body").append($('<style id="SimLeftSidebarCSS">:root{--sidebar-shrink-width: -7.1rem；}.Nsb_r_list_tdfy {border: none;}.Nsb_layout_l {height: max-content;border-radius: 1rem;box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);border: none;padding-bottom: 0.5rem;flex-grow: 0.1;align-items: center;min-width: max-content;display: inline-flex;flex-direction: column;flex-wrap: nowrap;max-width: 15%;&.sidebar{z-index: 100;background-color: white;left: 0;align-items: center;position: fixed;max-width: 7rem;transform: translateY(-50%);top: 50%;transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: left, filter, box-shadow;border-radius: 0 1rem 1rem 0;& h4{border-radius: 0 1rem 0 0;}&.folded{left: var(--sidebar-shrink-width);}& .arrow{position: absolute;left: 7rem;top: 50%;transform: translateY(-50%);padding: 1rem 0.5rem;background-color: var(--primary-theme-color);border-radius: 0 0.8rem 0.8rem 0;color: #ffffff;font-weight: bolder;box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);font-size: 1rem;cursor: pointer;transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: border-radius, transform, filter, box-shadow;&:hover{filter: brightness(0.7);transform: translateY(-48%);}& div.text{transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: transform;font-size: 1.2rem;user-select: none;&.reverted{transform: rotateZ(180deg);}}}}}.Nsb_l_list {& ul {padding-bottom: 0.5em;width: inherit;border-bottom: none;}& h4 {margin: 0;padding: 6px 0;font-size: 17px;font-weight: bold;background-color: var(--primary-theme-color);border-radius: 1rem 1rem 0 0;box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);color: #fff;background-image: none;width: inherit;text-align: center;height: max-content;}& li {margin: 0;width: inherit;}& a {color: #000;padding: 4px 0;text-align: center;position: relative;width: inherit;transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: border-radius,background,color,transform,box-shadow;&:hover {border-radius: 1em;background: var(--tertiary-theme-color);box-shadow: inset 0px 2px 6px 1px rgb(0 0 0 / 30%);color: #fff;transform: translateY(0.5px);transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: border-radius,background,color,transform,box-shadow;}}& .Nsb_l_list_now {background: var(--secondary-theme-color);color: #fff;padding: 4px 0;box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: border-radius,background,box-shadow,transform;&:hover {border-radius: 15px;background: var(--tertiary-theme-color);transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: border-radius,background,box-shadow,transform;}}}.Nsb_l_list.narrow_patch{min-width:max-content;& a{padding: 4px 1rem;}}.Nsb_l_list h4, .Nsb_l_list ul, .Nsb_l_list li, .Nsb_l_list a {display: inline-flex;justify-content: center;flex-direction: column;align-items: center;width: -webkit-fill-available;min-width: max-content;}.Nsb_l_list_top {height: 0;}</style>'));
    //right page css
    $("body").append($('<style id="SimRightPageCSS">.Nsb_layout_r {flex-grow: 0.7;margin-left:0px!important;padding: 0 1.5rem;max-width: inherit;.Nsb_table{border-collapse: separate;position: relative;transform-origin: top!important;width: -webkit-fill-available!important;}.Nsb_r_list{.Nsb_r_list_thb{box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);border: none;background: var(--secondary-theme-color);font-size: 1.125rem;color: #fff;height: 2rem;text-align: center;font-weight: normal;}& th{background: var(--secondary-theme-color);border: none;color: #fff;line-height: initial;font-size: 1rem;padding: 0 0.5rem;}& td{border: solid 0.05rem var(--secondary-theme-color);color: #000;text-align: center;box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);font-size: 1rem;word-break: keep-all;}}& div[align=center] center{display: inline-flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: space-evenly;width: -webkit-fill-available;}}.Nsb_r_list_fy2 input {width: 2em;height: 1em;text-align: center;border: 2px solid var(--secondary-theme-color);border-radius: 1.5em;background-color: var(--tertiary-theme-color);text-shadow: 0px 0px 4px rgba(0,0,0,0.7);color: #fff;font-size: 1rem;border-radius: 1.5em;background-image: none;transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: transform,background-color,border;&:hover,&:focus-visible{outline: none;border: 2px solid var(--primary-theme-color);background-color:var(--secondary-theme-color);transform: scale(1.02);transition: 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);transition-property: transform,background-color,border;}}.Nsb_r_list_fy{div,span,a{height: 1.5em;line-height: 1.5em;}}#Form1[action] div{text-align: center!important;}td[width][align=right]{width:7rem;}td b font[face]{font-family: "HarmonyOS_Medium";}td[style="background-color:#E5F3FE"]{background-color: #A6D3FE!important;color: #fff!important;text-shadow: 0 0 3px black;}font[color=blue]{color: var(--secondary-theme-color);}</style>'));
    //top bar css
    $("body").append($('<style id="SimTopBarCSS">.Nsb_menu.Nsb_menu_pw,.Nsb_menu {height: 41px;line-height: 41px;background-color: var(--primary-theme-color);background-image:none;left: 50%;position: relative;transform: translateX(-50%);}.Nsb_menu li,.Nsb_menu a{display: inline-flex;width: inherit;justify-content: center;}.Nsb_menu a {color: #fff;font-weight: normal;border-radius: 2px;word-break: keep-all;transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: border-radius,transform,filter,background-color,box-shadow;&:hover{background-position: none;background-color: var(--primary-theme-color);background-image:none;height: 40px;filter: brightness(0.7);transform: translateY(0.75px);border-radius: 20px;box-shadow: inset 0px 3px 5px 0px rgba(0, 0, 0, 0.3);transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);transition-property: box-shadow,border-radius,transform,filter,background-color,;}}.Nsb_menu_pw {box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);}.Nsb_pw {&.top{background-color: var(--secondary-theme-color);display: flex;justify-content: center;}.Nsb_top{background-color: var(--secondary-theme-color);display: flex;justify-content: space-between;align-items: center;width: inherit;max-width: 1280px;}.Nsb_top_menu {background-color: var(--tertiary-theme-color);border-radius: 20px;box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);right: auto;top: auto;min-width: max-content;& ul{border:none;background: var(--primary-theme-color);border-radius: 20px;padding: 3px;box-shadow: -1px 0px 3px rgba(0, 0, 0, 0.3);}}.Nsb_top_logo, .Nsb_top_menu {position: relative;left: 0;}#divFirstMenuClass{background-color: var(--primary-theme-color);background-image: none;display: flex;align-items: center;flex-direction: row;justify-content: space-evenly;width: inherit;height: inherit;}}.Nsb_top_menu_nc {height: inherit;font-size: 1em;line-height: 2em;padding: 0 0.75em 0 1em;color: #fff;-webkit-user-select: none;user-select: none;cursor: pointer;transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: transform,filter;&:hover{filter: brightness(0.8);transform: translateY(1px);transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);transition-property: transform,filter;}}.Nsb_menu{& a {font-size: 1rem;}& ul {display: inline-flex;flex-direction: row;width: -webkit-fill-available;margin: 0 auto;min-width: max-content;max-width: 1280px;&.mobile{margin: 0;}}}.Nsb_menu_li_now{background: none;}.Nsb_menu_li_h span {background: url(../framework/images/Nsb_menu_h.gif) 0 -15px}.Nsb_top_menu span, .Nsb_top_menu_id img{visibility: hidden;}</style>'));
    //SimUI css
    $("body").append($('<style id="SimUICSS">#SimUI{display: flex;z-index: 100;position: absolute;top: 50%;background-color: var(--secondary-theme-color);border-radius: 1rem;width: inherit;color: white;padding: 1rem 2rem;max-width: 20rem;left: 50%;transform: translate(-50%, -50%);justify-content: center;align-items: center;flex-direction: column;& .top{display: inline-flex;width: -webkit-fill-available;align-items: center;& .title{letter-spacing: 0.1rem;font-size: 1.6rem;margin: 0.5rem 0;width: -webkit-fill-available;text-align: center;}& .close_btn{position: absolute;right: 0;margin-top: -1.71rem;padding: 0 0.3rem;padding-bottom: 0.4rem;font-size: 3rem;border-radius: 0 1rem 1rem 0;line-height: 3rem;background-color: #ff3939;border-radius: 0 1rem;box-shadow: none;user-select: none;font-weight: bold;}}& .pickPanel, .scorePanel{display: inline-flex;margin-top: 2rem;flex-direction: column;text-align: center;align-items: center;font-size: 1.2rem;& span{text-align: center;margin-bottom: 0.3rem;}& .semester_pick{flex-direction: row;justify-content: center;align-items: center;font-size: 1.2rem;display: inline-flex;& .semester{font-size: 1.2rem;margin-left: 0.5rem;}& svg.icon{cursor:pointer;}}}& .scorePanel{margin-bottom: 2rem;& span{font-size: 1.2rem;}& .score{font-size: 1.5rem;font-weight: bold;}}& .button{margin-top: 2rem;font-size: 1.2rem;padding: 0.3rem 0.5rem;}}.mask{width: 100%;height: 100%;position: fixed;background: #000;left: 0;top: 0;z-index: 99;opacity: .85 !important;}</style>'));
    //iframe code
    $("body").append($(`<script>    function JsMod(htmlurl,tmpWidth,tmpHeight){
        let inPage = document.createElement("iframe");
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
                dataList.classList.add("display_none");
            }
            if(document.querySelector(".SimGrid")){
                document.querySelector(".SimGrid").classList.add("display_none");
            }
            if(document.getElementsByClassName("Nsb_r_list Nsb_table")[0].id!="dataList"){
                let table = document.getElementsByClassName("Nsb_r_list Nsb_table")[0];
                table.after(SimPage);
                table.classList.add("display_none");
            }
            htmlurl=getRandomUrl(htmlurl);
            inPage.src = htmlurl;
            inPage.addEventListener('load',()=>{
                let SimPageContent = document.querySelector("#SimPage").contentWindow;
                if(SimPageContent.document.getElementsByClassName("button")[0]){
                    let button = SimPageContent.document.querySelectorAll("button");
                    button.forEach((e)=>{
                        if(e.attributes.onclick.value == "window.close();"){
                            e.attributes.removeNamedItem("onclick");
                            e.addEventListener("click", closeIframe);
                        }
                    })
                }
            })
        }
    }</script>`));
    //closeIframe code
    $("body").append($(`<script>function closeIframe(){
        if(!document.getElementById("SimPage")&&window.parent.document.getElementById("SimPage")){
            let parent = window.parent;
            if(parent.document.getElementById("dataList")&&parent.document.querySelector(".icon_btn span").innerText=="列表显示"){
                parent.document.getElementById("dataList").classList.remove("display_none");
            }
            if(parent.document.querySelector(".SimGrid")&&parent.document.querySelector(".icon_btn span").innerText=="网格显示"){
                parent.document.querySelector(".SimGrid").classList.remove("display_none");
            }
            if(parent.document.getElementsByClassName("Nsb_r_list Nsb_table")[0].id!="dataList"){
                parent.document.getElementsByClassName("Nsb_r_list Nsb_table")[0].classList.remove("display_none");
            }
            parent.document.getElementById("SimPageOutline").remove();
        }else if(document.getElementsByClassName("Nsb_r_list Nsb_table")[0]&&document.getElementById("SimPage")){
            if(document.getElementById("dataList")&&document.querySelector(".icon_btn span").innerText=="列表显示"){
                document.getElementById("dataList").classList.remove("display_none");
            }
            if(document.querySelector(".SimGrid")&&document.querySelector(".icon_btn span").innerText=="网格显示"){
                document.querySelector(".SimGrid").classList.remove("display_none");
            }
            if(document.getElementsByClassName("Nsb_r_list Nsb_table")[0].id!="dataList"){
                document.getElementsByClassName("Nsb_r_list Nsb_table")[0].classList.remove("display_none");
            }
            document.getElementById("SimPageOutline").remove();
        }
    }</script>`));

    if(document.getElementById("kc")){
        document.getElementById("kc").remove();
    }
    if(document.querySelector(".Nsb_r_title")){
        if(document.querySelector(".Nsb_r_title").parentElement.classList.contains("Nsb_pw")){
            document.querySelector(".Nsb_r_title").parentElement.style.setProperty("max-width","1280px");
        }
    }
    if(document.querySelector("#LeftMenu1_divChildMenu")){
        let leftMenu = document.querySelector("#LeftMenu1_divChildMenu");
        leftMenu.parentElement.classList.replace("Nsb_pw","Nsb_pw_main");
        if(leftMenu.clientWidth<=90){
            leftMenuWidthOptimize();
        }
    }
    if(document.querySelector(".Nsb_menu_pw")){
        document.querySelectorAll(".Nsb_pw")[document.querySelectorAll(".Nsb_pw").length-1].style.setProperty("max-width","1280px");
    }
    if(document.querySelector("div#divFirstMenuClass")){
        globalResize();
        window.addEventListener("resize",globalResize);
    }
    function mobile_adjust(selector){
        if(document.querySelector(selector)){
            document.querySelector(selector).classList.add("mobile");
        }
    }
    function mobile_recover(selector){
        if(document.querySelector(selector)){
            document.querySelector(selector).classList.remove("mobile");
        }
    }
    function globalResize(){
        if(document.querySelector("div#divFirstMenuClass").clientWidth<=1000){
            document.querySelector("div#divFirstMenuClass ul").classList.add("mobile");
            if(document.querySelector("#LeftMenu1_divChildMenu")){
                leftMenuWidthOptimize();
                document.querySelector(".Nsb_pw_main").classList.add("mobile");
            }else{
                mobile_adjust("table#dataList");
            };
            mobile_adjust(".SimGrid");  
        }else{
            document.querySelector("div#divFirstMenuClass ul").classList.remove("mobile");
            if(document.querySelector("#LeftMenu1_divChildMenu")){
                document.querySelector(".Nsb_pw_main").classList.remove("mobile");
            }else{
                mobile_recover("table#dataList");
            }
            mobile_recover(".SimGrid");
        }
        if(document.querySelector("#LeftMenu1_divChildMenu")){
            if(document.querySelector("#LeftMenu1_divChildMenu").clientWidth<=100){
                leftMenuWidthOptimize();
            }
        }
    }
    function sidebarActions(){
        let arrow_text = document.querySelector("#LeftMenu1_divChildMenu.sidebar .arrow .text");
        let sidebar = document.querySelector("#LeftMenu1_divChildMenu.sidebar");
        sidebar.classList.toggle("folded");
        arrow_text.classList.toggle("reverted")
    }
    function leftMenuWidthOptimize(){
        const leftMenu = document.querySelector("#LeftMenu1_divChildMenu");
        leftMenu.classList.add("sidebar");
        if(!document.querySelector("div.arrow")){
            let arrow = document.createElement("div");
            let arrow_text = document.createElement("div");
            arrow.classList.add("arrow");
            arrow_text.innerText = "<";
            arrow_text.classList.add("text");
            arrow.appendChild(arrow_text);
            arrow.style.left = document.querySelector("#LeftMenu1_divChildMenu.sidebar").clientWidth+"px";
            document.documentElement.style.setProperty("--sidebar-shrink-width",-leftMenu.clientWidth+"px")
            leftMenu.appendChild(arrow);
            arrow.addEventListener("click",sidebarActions);
        }
        document.querySelector(".Nsb_pw_main").style["justify-content"] = "center";
    }
    function svgReplacement(table){
        if(table.querySelector("img[src='../framework/images/rq.png']")){
            let imgRq = table.querySelector("img[src='../framework/images/rq.png']");
            imgRq.parentElement.innerHTML += `<svg width="290" height="195" style="zoom: 0.15;">
                <g>
                    <path stroke="#ffffff" d="m288.05409,190.21429l-288.42856,-189.85714" opacity="undefined" stroke-linecap="undefined" stroke-linejoin="undefined" stroke-width="8" fill="#ffffff"></path>
                    <text transform="matrix(2.91303 0 0 2.95454 -511.662 -850.012)" stroke="#000" xml:space="preserve" text-anchor="start" font-family="" font-size="24" y="349.22051" x="175.81206" stroke-width="0" fill="#ffffff">周次</text>
                    <text transform="matrix(3.33333 0 0 3.33333 -581 -986.627)" stroke="#ffffff" xml:space="preserve" text-anchor="start" font-size="24" y="316.28818" x="213.39049" stroke-width="0" fill="#ffffff">星期</text>
                </g>
            </svg>`;
            table.querySelector("img[src='../framework/images/rq.png']").style.display = "none";
        }
    }
    function rateOptimize(){
        let actualWidth = document.querySelector("#kbtable tbody").clientWidth;
        let kbtableWidth = document.querySelector("#kbtable").clientWidth;
        let rate = kbtableWidth/actualWidth;
        if(rate<1){
            if(rate<=0.65){
                document.querySelector("#kbtable").style.zoom = 0.6;
            }else{
                document.querySelector("#kbtable").style.zoom = rate.toFixed(2)-0.05;
            }
        }
        console.log(rate);
    }
    if(document.querySelector(".Nsb_top_logo")){
        document.querySelector(".Nsb_top").parentElement.classList.add("top");
        document.querySelector(".Nsb_top_logo td img").style.display="none";
        document.querySelector(".Nsb_top_logo td").innerHTML += `<?xml version="1.0" encoding="UTF-8"?><svg id="logoSvg" data-name="图层 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.33 36.89" style="height: 80%;user-select: none;"><defs><style>.cls-1 {stroke-width: 0px;}.cls-1, .cls-2 {fill: white;}rect.cls-1{fill: var(--primary-theme-color);}</style></defs><g id="_图层_1-2" data-name="图层 1"><g><g><g><g><path class="cls-1" d="m129.97,8.93s-.09-.09-.14-.13h0s0,0,0,0c-.07-.41-.34-.67-.67-.88h0c-.08-.19-.26-.27-.42-.36-.41-.21-.83-.31-1.14.13-.3.44,0,.74.34,1,.06.21.23.4.14.65-.65.48-1.39.81-2.12,1.14h0c-.33.02-.71-.2-.98.16-.18.09-.27.24-.28.44-.34.69-.04,1.33.15,1.98h0c.23.3.47.59.71,0h0s.08-.08.12-.12h0c.22-.05.24-.25.18-.38-.15-.38.04-.61.28-.85.45-.1.83-.34,1.2-.59.02,0,.04-.02.06-.04.57-.28,1.15-.58,1.8-.57.73,0,1.45.09,2.18-.01h0s0,0,0,0c.09.06.18.13.27.19h0,0c.27.48-.24.66-.38.98h0s0,0,0,0c-.11.08-.22.16-.33.24-.23.19-.37.38.04.52.2,0,.4.01.51-.21h0,0c.06-.05.12-.1.18-.16h0s0,0,0,0c.23-.03.47-.1.7-.09.59.03,1.17-.11,1.37-.66.21-.58-.39-.89-.77-1.22-.03-.03-.09-.03-.13-.04h0c-.44-.4-.98-.63-1.54-.83m0,0c-.4-.31-.89-.17-1.33-.27"/><path class="cls-1" d="m127.14,18.78c.59-.67,1.1-1.39,1.58-2.14h0s0,0,0,0h0c.32-.25.59-.56.97-.72h0s0,0,0,0h0c.09,0,.18,0,.27,0,.18.03.33-.05.36-.23.04-.23-.17-.22-.32-.25.02-.05.01-.08-.04-.1-.57-.23-1.13-.18-1.7,0h0c-.44.35-.84.75-1.43.86h0c-.74.43-.77.69-.15,1.33h0s0,0,0,0v.04s.03.02.03.02c-.02.2-.03.4-.05.6h0s0,0,0,0c-.38.61-.99,1.01-1.42,1.57-.08.06-.17.11-.26.17-.31.2-.63.37-.87.66h0c-.58.23-1.04.65-1.53,1.01-.23.17-.25.4-.09.62.16.22.34.09.49-.02.4-.3.87-.48,1.2-.86h0c.07-.04.14-.09.21-.13h0c.19-.15.38-.3.58-.44h0c.36-.16.75-.27.88-.7h0c.61-.25.93-.77,1.26-1.29,0,0-.02-.02-.02-.03h0s.02.03.02.03Z"/><path class="cls-1" d="m123.47,14.93h0c.21-.16.41-.33.51-.59.04-.02.05-.05.03-.09.3-.15.43-.33.12-.6,0-.27-.18-.4-.41-.48h0c-.05-.03-.11-.07-.16-.1h0,0c-.42-.29-.85-.58-1.27-.86-.22-.52.38-.72.43-1.14h0s0,0,0,0c.14-.15.28-.3.42-.45h0c.3-.16.59-.33.72-.66h0c.13-.06.14-.17.14-.29.2-.03.34-.17.45-.32.14-.2.54-.24.45-.57-.09-.34-.41-.42-.73-.44h0c-.75-.27-1.46-.13-2.15.19-.3.03-.61.08-.91.08-.9,0-1.27.41-1.15,1.26,0,.09.02.18.05.27.03.7-.13,1.42.14,2.11h0c0,.08,0,.17,0,.25h0c-.04,2.09.17,4.17-.01,6.26-.21.35-.12.75-.14,1.12-.03.1-.04.2-.05.29-.15.73-.46,1.46.05,2.19h0s0,0,0,0h0s0,0,0,0c.17.41.38.79.91.66.53-.12.7-.51.64-1.03-.02-.16,0-.33,0-.5h0s0,0,0,0c.14-.39.16-.78-.01-1.17-.01,0-.02,0-.03,0h0s.02,0,.03,0c.01-.33.04-.66-.08-.98-.05-.37-.13-.74-.13-1.11-.01-.68-.31-1.41.3-2h0s0,0,0,0c.17-.06.35-.13.52-.19h0c.59-.19,1.01-.58,1.33-1.1Zm-3.32-4.15h0s0,0,0,0h0Zm-.16,10.29s.01-.01.02-.02h0s0,.02,0,.03c0,0-.01,0-.02-.01Zm.27-11.68s.02-.02.03-.03c0,.02.01.04.02.06-.02,0-.04-.02-.06-.03Zm.89,9.55s0-.01,0-.02h0s.01.01.02.02c0,0-.01,0-.02,0Zm.11-9.15s.02,0,.02,0c0,0,0,0,0,.01,0,0-.02,0-.02,0Zm.26.73c.02-.3.22-.49.35-.72h0c.23-.02.42-.19.67-.12.17.13.18.3.17.47-.03.03-.06.05-.09.07-.25.17-.44.42-.71.58-.1.06-.2.07-.3.08-.02-.03-.04-.06-.06-.1,0-.09,0-.18-.02-.27Zm1.04,3.89c0,.22-.07.41-.17.6,0,.01,0,.02,0,.03h0c-.28,0-.41.18-.49.4-.11-.06-.23-.1-.35-.11,0-.02.02-.03.03-.04.07-.15.02-.3-.01-.44,0-.05,0-.09.01-.14.14-.26.09-.55.08-.84.03-.1.06-.19.12-.28.03-.06.05-.11.07-.17.01-.04.03-.08.04-.11.1-.06.2-.09.32-.07,0,.01,0,.03,0,.04.15.37.5.68.36,1.14Z"/><path class="cls-1" d="m127.11,14.18c-.21.7-.16.77.59.71.03-.03.07-.04.11-.05-.04.02-.07.03-.11.05.49-.12,1.08.38,1.48-.25.13-.05.11-.17.12-.27h.05s.04-.03.04-.03c.28-.08.25-.35.33-.55h0s.09-.1.14-.14c.35-.19.25-.4.02-.6-.36-.32-.71-.24-1.06.02h0c-.05.03-.11.07-.16.1-.04.05-.08.11-.12.16-.33.25-.73.3-1.1.45h0s0,0,0,0c-.1,0-.16.06-.18.16h0s0,0,0,0c-.12.04-.15.14-.15.24Zm2.27-.58s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Z"/><path class="cls-1" d="m135.28,20.74c-.07-.29-.07-.63-.44-.74h0c0-.22,0-.45,0-.67,0-.31-.1-.58-.29-.82h0c-.15,0,0-.4-.28-.22h0c-.29.43-.13.87-.05,1.31-.04.24-.07.47-.11.71h0c-.05.08-.09.16-.14.24-.14.12-.28.24-.42.36h0s0,0,0,0c-.31.2-.62.37-.99.43-.35-.02-.7-.07-1.02.11-.49-.14-1.03-.07-1.46-.42-.17-.24-.33-.47-.5-.71.17-.46-.4-.82-.16-1.28h0s0,0,0,0c.07-.26.08-.53,0-.77-.16-.43-.39-.63-.7-.09h0c-.04.07-.06.14-.07.22-.26.83-.32,1.67-.15,2.52,0,.1.01.19.06.29.31,1.07,1.17,1.32,2.13,1.43h0s0,0,0,0h0c.16.19.37.15.58.13h0,0c.89.3,1.8.13,2.7.09.34-.01.68-.19.89-.5.76-.37.6-.99.43-1.61Zm-5.86-.41s0,0,0,0c0,0,0,0,.01,0,0,0,0,0-.01,0Zm.12.02h0s-.02,0-.03,0c.02,0,.04-.02.06-.03l-.04.03Zm5.7.42h0s0,0,0,0c0,0,.04-.03.05-.04-.02.01-.03.02-.05.04Z"/></g><g><path class="cls-1" d="m98.82,8.91c-.16-.42-.41-.71-.91-.66-.21-.06-.39,0-.57.1-.58-.02-1.09.24-1.62.41h0c-.43-.02-.84.02-1.24.17-.02.03-.05.05-.08.06.03-.02.05-.04.08-.06-.19.04-.38.08-.57.12-.67.12-1.29.49-1.99.47h0c-.35-.27-.31-.78-.67-1.04-.09-.25-.25-.44-.47-.57h0s0,0,0,0c-.03-.13-.12-.16-.24-.14-.07-.09-.14-.18-.21-.26-.09-.27-.29-.39-.56-.42-.07-.06-.14-.12-.21-.17-.26-.22-.53-.31-.79,0h0,0c-.56.54-.62,1.39-.13,1.99h0s0,0,0,0c.04.02.08.03.12.03h0c.5.69.45.81-.36,1.1-.26.09-.51.21-.77.31h0s0,0,0,0c-.17.06-.36.08-.47.26-.24,0-.5-.08-.67.17h0c-.19,0-.37,0-.56,0-.28.04-.56.08-.84.12-.29.03-.58.07-.88.1h0c-.19-.03-.38-.05-.55.07-.54.11-1.15-.04-1.58.44-.82.48-.96.94-.43,1.41.08,0,.17.01.25.02h0,0c.59.26,1.09-.08,1.61-.23.07,0,.13-.03.2-.05,1.18-.07,2.38,0,3.51-.43.05.01.09,0,.12-.06.34-.09.69-.17,1.03-.27.53-.16,1.12-.14,1.57-.53.04,0,.08,0,.11-.02.24.06.47.12.71.18h0s0,0,0,0c.39.23.74.21,1.04-.15h0c.31-.1.55-.51.96-.22h0c-.19.31-.38.62-.57.93h0,0c-.14.13-.28.27-.43.4-.64.35-1.02.98-1.57,1.43h0s0,0,0,0c-.27.19-.55.39-.82.58-.22-.03-.16.23-.3.29h0c-.33.08-.67.3-.99-.03,0-.04,0-.08-.03-.11.02-.29-.04-.55-.26-.76h0c-.05-.08-.1-.15-.15-.23h0s0,0,0,0c.01-.21-.23-.17-.3-.31h0s0,0,0,0c.02-.12.02-.23-.12-.27-.23-.28-.46-.17-.67.01-.26.23-.45.49-.21.85,0,0,0,0,0,0,.04.45.41.54.73.68h0s.04.06.08.04h0,0c.12.14.25.28.37.42.11.5.22,1.01.33,1.51.01.1.04.2.06.3h0s0,0,0,0c.21.31.46.22.72.07h0c.21-.21.36-.46.23-.75-.24-.53.04-.74.49-.86.26.07.44-.09.63-.22.14-.1.27-.18.45-.09.26.13.06.32.07.48h0,0c-.01.27-.37.4-.28.71-.05.06-.1.12-.15.18-.25.22-.5.43-.75.65h0s0,0,0,0c-.16.06-.33.12-.39.31-.41.3-.9.5-1.17.97-.34.06-.37.34-.41.6h0s-.03.04-.03.04l.02.05h0c-.14.3-.21.6.02.9h0c.4.82,1.17.67,1.86.71.14,0,.28,0,.42,0h0s0,0,0,0c.35.03.7.07,1.02-.14h0s0,0,0,0c.41-.14.46-.51.55-.86.26-.34.57-.66.44-1.15h0s0,0,0,0c.06-.09.1-.18,0-.27.12-.3-.03-.53-.2-.75-.03-.14-.13-.21-.25-.25-.33-.35-.42-.72-.16-1.15l.02-.02h0s0,0,0,0c.14-.08.25-.2.29-.36.06-.07.15-.12.19-.2.41-.73.63-.72,1.11-.03.38.55.12,1.21.38,1.78-.06.33-.06.66.02.99h0,0c.13.86-.43,1.71-.02,2.57-.02.35-.1.68-.24.99h0s-.04.05-.03.09h0c-.39.23-.79.42-1.27.35.03.02.06.03.08.05-.03,0-.06-.02-.08-.05-.33-.2-.65-.4-.98-.6-.19-.16-.35-.06-.44.11-.11.23.08.31.26.38h0c.36.34.85.44,1.26.7.21.21.45.38.74.45h0c.15.11.29.23.45.32.86.49,1.44.43,1.86-.19.32-.76.18-1.48-.13-2.2h0s0,0,0,0c0-.09-.01-.17-.02-.26h0,0c0-.42,0-.85,0-1.27.07-.27-.04-.5-.13-.74h0c-.22-.19-.08-.48-.17-.7-.02-.16-.04-.32-.06-.48,0-.13,0-.26-.05-.39-.01-.09-.02-.18-.04-.27,0-.33,0-.66.01-.99.4-.43.71-.85.01-1.29h0s0,0,0,0c-.05-.05-.1-.1-.16-.16h0s0,0,0,0c0-.08-.05-.13-.13-.12-.28-.39-.78-.34-1.14-.57h0s0,0,0,0c-.02-.22.12-.37.21-.55h0c.21-.09.43-.18.64-.27h0s0,0,0,0c.42-.46.36-.97.17-1.5,0-.17,0-.35,0-.52h0c.25-.17.53-.24.82-.29h0s0,0,0,0c1.22-.17,2.44-.34,3.66-.52.28-.04.52-.19.67-.46h0c.27-.3.39-.59,0-.9Zm-8.84,10.56s0,.01,0,.02c-.16.01-.32.02-.48.04h0s0,0,0,0c-.14-.01-.27-.03-.41-.04-.07-.11-.14-.23-.21-.34,0-.01.01-.03.02-.04.08-.23.34-.35.38-.61.4.1.81-.18,1.2.02.01,0,.03.01.04.02-.05.15-.03.3.06.44-.27.07-.49.21-.59.49Zm3.23-2.28h0s0,0,0,0h0s0,0,0,0c0,0,0,0-.01,0,0,0,0,0,.01,0Z"/><path class="cls-1" d="m86.81,15.82c-.32-.14-.49.11-.61.37h0c-.59.23-.72.72-.71,1.28h0s0,0,0,0c-.18.26-.29.54-.24.87-.01.33-.13.66-.04,1,0,.08,0,.17,0,.25h0c-.17.67-.71,1.13-1,1.74h0,0c-.14.09-.15.23-.14.38-.19.46-.27.92.02,1.37.15.15.29.18.41-.04h0s0,0,0,0c.04-.02.05-.05.03-.09h0c.09-.09.18-.18.27-.27.31-.23.44-.55.44-.92h0s0,0,0,0c.63-.5.74-1.27,1-1.95.22-.23.35-.52.37-.82.07-.92.1-1.84.15-2.76.1-.13.22-.32.04-.4Zm-1.44,4.23h0s0,0,0,0c0,0,0,0,0,0Zm.28-2.56h0s0,0,0,0h0Zm.45-.97s-.01,0-.02,0c0,0,.01-.01.02-.02,0,0,0,0,0,.01Zm.16-.28s-.04-.03-.06-.04h.04s.03.02.03.02c0,0,0,.01,0,.02Z"/></g><path class="cls-1" d="m80.5,20.71c-.58-.47-1.24-.73-1.93-.96-.62-.3-1.25-.6-1.87-.9-.33-.18-.49-.58-.88-.67h0s0,0,0,0c-.12-.1-.24-.19-.36-.29-.02-.3-.25-.44-.47-.58-.09-.19-.24-.32-.41-.44-.25-.17-.34-.38-.14-.66.36-.25.63-.56.66-1.02h0s0,0,0,0c.04-.02.04-.05.02-.09h0c.4-.1.52-.44.66-.77h0,0s.07-.05.05-.1c.33-.33.5-.75.73-1.14.04-.05.08-.1.12-.15.22-.15.31-.38.19-.61-.28-.53-.52-1.11-1.19-1.28-.75-.2-1.47-.13-2.14.28-.52.23-.98.54-1.33,1-.15.04-.26.1-.25.28-.1.18,0,.26.15.32h0s0,0,0,0c.24.24.48.15.72-.01.23-.02.44-.11.61-.26h0c.15,0,.29.02.41-.1h0c.24-.02.47-.04.71-.06.67-.05.89.22.65.83-.15.4-.34.78-.51,1.17-.26.37-.51.75-.77,1.12h0,0s-.08.07-.12.11c-.66.35-.8-.43-1.23-.57-.06-.13-.16-.22-.3-.26h0,0c-.43-.53-.98-.79-1.67-.75-.25.02-.47.08-.58.33-.12.26,0,.47.18.64.34.33.69.64,1.04.96.04.04.07.09.11.13.16.28.47.32.72.45.01.23.03.46.04.69h0s0,0,0,0c-.04.04-.09.08-.14.12h0c-.35.1-.61.34-.87.57h0c-.54.33-1.09.65-1.63.98h0c-.07.05-.14.1-.21.15-.41.16-.86.25-1.19.58h0,0c-.07.05-.15.1-.22.15-.28-.03-.4.14-.36.37.04.22.21.37.45.32.25-.05.48-.13.72-.19.26-.04.55.02.77-.18.12,0,.22-.01.26-.15.29-.07.52-.22.69-.46.38-.17.71-.41,1.02-.68.3-.17.75-.09.87-.54h0s0,0,0,0c.41-.16.82-.44,1.23-.02h0c.72.46,1.05,1.34,1.86,1.71h0c.12.16.21.34.42.41-.01.22.09.36.3.42.19.25.45.41.72.56h0s0,0,0,0l.04.04h.06c.18.13.4.11.6.12.03.02.06.03.09.04.19.09.39.11.6.12h0s0,0,0,0c.73.12,1.46.14,2.19,0h0s0,0,0,0h0s0,0,0,0c.78-.42.78-.52.1-1.07Zm-9.24-5.94h0s0,0,0,0h0s0,0,0,0h0s0,0,0,0c0,0,0,0,0,0h0s0,0,0,0h0Zm1.57,1.15s0,0,0-.01c0,0,0,0,.01,0,0,0,0,0-.01,0Zm3.28,2.84h0s0,0,0,0h0Z"/><path class="cls-1" d="m66.56,9.8c.16.32.45.5.71.71,0,.09.05.13.14.12.29.14.5.45.87.43.09,0,.18,0,.27,0h0c.52-.13.9-.36.69-1-.03-.26-.17-.44-.41-.54h0s0,0,0,0c-.28-.23-.5-.57-.91-.6-.42-.48-.85-.44-1.37.11-.23.26-.22.51.01.76h0Z"/><path class="cls-1" d="m67.6,17.28c-.28-.27-.57.02-.8.2-.23.18-.55.26-.66.58h0s0,0,0,0c-.31.2-.64.38-.86.69-.48.38-1.02.68-1.41,1.16h0c-.53.59-.07,1,.26,1.43.2.33.39.68.87.42h0c.23-.12.37-.31.43-.56.05-.1.1-.2.15-.3h0s0,0,0,0c.24-.28.34-.63.47-.97h0c.56-.32.76-.94,1.13-1.42.1-.13.23-.24.3-.38.12-.27.39-.59.13-.84Z"/><path class="cls-1" d="m64.87,14.45h0s.04.05.04.05h.06c.29.19.57.39.86.59.26.17.51.3.62-.15.17-.35,0-.67-.08-1.01h0s0,0,0,0c-.02-.15-.07-.27-.25-.28h0s0,0,0,0l-.03-.03h-.04c.01-.31-.32-.27-.47-.43-.23-.12-.47-.14-.69.02h0c-.54.47-.54.71,0,1.25h0Z"/><g><path class="cls-1" d="m116.48,10.74c-.38-.31-.77-.63-1.29-.71-.16-.18-.34-.33-.61-.23h0s0,0,0,0c-.04-.02-.08-.03-.12-.03-.14-.34-.36-.61-.73-.71-.38-.29-.77-.53-1.27-.37-.06,0-.11,0-.17,0-.59-.09-.67-.4-.4-.88.34-.29.69-.58,1.03-.87.01,0,.03-.01.05-.04h0s0,0,0,0c.09-.15.34-.04.39-.26.03-.04.07-.08.1-.12h0c.28-.27.2-.56-.02-.79-.26-.27-.51-.63-.98-.39-.24.05-.38.2-.42.44h0c-.3.87-1.06,1.43-1.45,2.25-.17.13-.37.23-.41.47h0,0s-.09.09-.14.13c-.34.17-.73.28-.9.68,0,0,0,0,0,0,0,0,0,0,0,0-.74.11-1.36.49-1.98.87h0c-.42.03-.77.24-1.12.43-.15,0-.27.04-.36.15h0s0,0,0,0c-.32.13-.74.04-.95.42-.09.01-.18.02-.27.03-.2-.04-.39-.01-.56.11-.34.08-.65.21-.92.43h0c-.51.28-1.05.53-1.23,1.16h0s0,0,0,0c-.19.3-.24.63-.14.98-.04.26.05.46.29.58h0s0,0,0,0c.13.18.26.25.4.02.06-.06.11-.12.17-.18h0s0,0,0,0c.16-.41.32-.82.48-1.23h0s0,0,0,0c.45-.25.91-.5,1.36-.75h0c.16.02.23-.1.31-.21.36-.25.79-.04,1.17-.18h0s0,0,0,0c.26.05.32-.24.51-.3h0s0,0,0,0c.35-.03.46-.31.6-.56h0s0,0,0,0h-.02c.52-.26,1.05-.51,1.57-.76.49-.33,1.16-.34,1.58-.81.16-.13.35-.16.55-.17h0c.33,0,.66.01,1,.02h0c.17.11.36.15.57.13.17.11.35.19.56.13.06,0,.11,0,.17,0,.09,0,.18,0,.26,0,.18.06.35.12.53.18.15.15.3.29.46.44.03.2-.07.36-.15.53h0c-.18.13-.37.27-.55.4h0c-.14.11-.28.21-.42.32-.2.06-.35.2-.29.41.08.25.32.17.49.14.81-.18,1.61-.31,2.45-.3.23,0,.47-.08.68-.18.41-.2.52-.51.14-.82Zm-3.61-1.81s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Z"/><path class="cls-1" d="m107.88,8.41h0s0,0,0,0c.05.04.09.07.14.11.3.24.59.44.87-.02h0,0c.05-.14.1-.27.14-.41-.03-.03-.04-.06-.06-.1.02.03.04.07.06.1.01-.16,0-.33.04-.49.06-.24.27-.59-.08-.66-.4-.08-.78-.66-1.24-.12h0s0,0,0,0c-.22.23-.4.48-.3.83-.02.35.17.58.43.77Z"/><path class="cls-1" d="m104.63,9.78c.31.37.64.68,1.15.3h0,0s.07-.09.11-.13h0c.25-.17.46-.36.44-.7h0c.33-1,.2-1.68-.44-2.21h0s0,0,0,0c-.04-.04-.08-.07-.13-.11-.34-.38-.67-.3-1,.02h0c-.76.73-.47,1.6-.32,2.45-.04.18.06.28.19.38Zm1.26-.85h0s0,0,0,0h0s0,0,0,0Zm-1.06-.3s0,.05-.02.08c0-.03,0-.05,0-.08,0,0,.01,0,.02,0Zm-.03-1.65s0,0,0,.01c0-.01-.02-.03-.02-.04l.03.03Z"/><path class="cls-1" d="m113.87,16.51c-.16-.13-.35-.04-.52-.04-.12-.29-.47-.03-.62-.27-.55-.3-1.1-.18-1.66-.04-.42.1-.82.34-1.28.16-.12-.22-.09-.44-.02-.67.14-.15.28-.29.42-.44h0,0c.39-.26.7-.6.99-.97.23-.2.45-.4.68-.6.22-.19.26-.38.03-.59h0,0c-.54-.59-1.23-.9-1.98-1.1-.38-.1-.75-.05-1.02.29h0c-.35.21-.59.53-.86.82h0c-.37.19-.57.58-.88.84-.43,0-.88-.03-1.12.45h0,0c-.05.07-.11.14-.16.22h0c-.27.31-.22.6.05.87.26.26.54.22.83.04.42-.26.84-.26,1.25.05.01.12.04.22.16.28h0c.46.75.43.9-.27,1.27-1.22-.13-2.38.21-3.56.44-.21-.01-.42-.1-.59.1h0c-.37.1-.56.33-.44.72.11.36.43.39.74.37.29-.02.61,0,.86-.22h0c.13.02.25.03.32-.11h0s0,0,0,0l.05.02.04-.03c.67-.07,1.33-.13,2-.2h0c.53-.03,1.14-.59,1.55.22h0c-.03.32-.08.63,0,.95-.11.38-.18.76-.14,1.15-.12.11-.14.25-.14.4h0s0,0,0,0c-.2.29-.39.57-.59.86-.47.31-.97.33-1.5.19-.17-.05-.41-.16-.52.05-.11.22.06.39.22.55.63.63,1.39,1.03,2.25,1.23.39.16.68.07.86-.32h0s0,0,0,0c.34-.32.4-.73.4-1.16,0-1.27,0-2.55,0-3.82,0-.82.26-1.03,1.09-.92.74.1,1.49.19,2.23-.03h0s0,0,0,0c.15,0,.31.02.41-.14.06-.03.11-.05.17-.08h0s0,0,0,0c.12-.02.23-.06.29-.18.31-.2.34-.4-.01-.59Zm-9.89,1.95s.03-.02.04-.03c0,.01.01.02.02.04-.02,0-.04,0-.06,0Zm5.25-3.29s0,0,0,0c-.08-.14-.2-.26-.35-.33-.16-.39-.6-.75-.09-1.2.15-.04.14-.16.16-.28h0c.26.05.19-.27.37-.32.97.1,1.13.3.84,1.19-.02,0-.04.01-.05.02-.14.08-.21.22-.25.37,0,0,0,0,0,.01-.25.12-.41.36-.62.53Z"/></g><g><path class="cls-1" d="m54.15,9.34s.03-.02.04-.04h0s-.05.04-.05.04c.24.42.58.52,1.01.31.09,0,.19-.02.28-.03h0s0,0,0,0c.33.03.57-.1.7-.42.01-.07.02-.15.04-.22.52-.23.44-.57.16-.94-.09-.21-.2-.4-.47-.39h0s0,0,0,0c-.09-.05-.19-.1-.28-.15-.35-.35-.8-.22-1.21-.25-.21-.01-.39.11-.38.34.02.58-.16,1.19.15,1.74Z"/><path class="cls-1" d="m60.16,20.46h0s0,0,0,0c0-.28.08-.59-.31-.7h0s0,0,0,0c-.04-.03-.08-.02-.12,0h0c-.51.26-.23.74-.31,1.12-.66.8-.7.8-1.32.01-.2-.25-.41-.49-.61-.74-.21-.37-.43-.72-.74-1.01-.2-.36-.42-.71-.72-1h0s0,0,0,0l-.28-.39c-.35-1.04-.75-2.06-1.37-2.98-.15-.23-.23-.45-.17-.72.27-.25.54-.49.82-.74.23-.11.52-.06.71-.27h0s0,0,0,0c.21-.06.32-.2.29-.43h0s0,0,0,0c0-.09.01-.18.02-.27h0c.44-.3.34-.57-.03-.84h0s0,0,0,0c-.9-.51-1.54-.36-2.32.53h0,0s-.08.08-.12.11c-.09.02-.17.05-.26.07-.63-.3-.59-.81-.43-1.35,0,0,.02-.02.02-.04.24-.41.24-.83,0-1.25h0c-.18-.32-.48-.23-.74-.21-.37.03-.68-.07-.94-.32h0c-.15-.25-.25-.56-.61-.61h0s0-.06-.02-.08h0c.01-.12.02-.24-.12-.31-.09-.24-.22-.45-.42-.61h0s0,0,0,0c-.07-.35-.19-.69-.43-.97h0c-.43-.39-.73-.36-.84.13-.14.62-.01,1.13.69,1.34h0s.08.09.12.14c.02.04.04.08.05.12h0s0,0,0,0c.13.15.25.3.38.45h0s0,0,0,0h0s0,0,0,0c.08.1.15.19.23.29.13.26.3.51.16.83h0c-.16.1-.15.26-.16.42h0s-.06.08-.09.13h0l-.27.02c-.42.13-.85.25-1.27.38-.06,0-.12.02-.17.05h0c-.3-.06-.58.04-.86.13-.24.01-.49.01-.7.17h0c-.05.03-.11.07-.16.1h0c-.31.21-.54.47-.45.87,0,.02,0,.03.01.06.09.68.5.96,1.17.93h0c.16.05.31.05.44-.08h0s0,0,0,0c.52-.01,1.05.06,1.56-.08h0s0,0,0,0c.5-.08,1.02-.11,1.41-.51.1-.01.21-.03.31-.04h0s0,0,0,0c.25.06.33.21.26.45-.76.48-1.52.96-2.28,1.44-.28,0-.52.09-.74.25-.54.06-1.07.14-1.54.43-.37-.02-.71.06-1.01.28-.37.13-.72.3-.99.59-.42.28-.92.44-1.28.81h0c-.26.11-.45.26-.35.58.16.52.98.93,1.51.74.42-.16.81-.37,1.14-.68.36-.15.72-.3,1.01-.56.61-.1,1.15-.6,1.82-.29.55.41,1.02.87.85,1.66-.03.16.04.32.16.45.05.2.1.4.14.59h0s0,0,0,0c-.06.23-.07.47,0,.71,0,.19,0,.37,0,.56,0,.05,0,.1,0,.15-.05.42-.14.82-.54,1.07h0c-.43.02-.86.05-1.29.07-.37-.36.04-.9-.31-1.27h0s0,0,0,0c-.02-.04-.06-.06-.1-.06-.01-.13-.02-.25-.03-.38.02-.38.02-.75.07-1.13.04-.33.21-.71-.2-.86-.4-.13-.46.32-.63.55-.08.1-.07.26-.1.4-.28.35-.3.73-.13,1.12.16.34.17.68.09,1.04-.08.03-.12.08-.08.16h0,0c-.05.05-.1.11-.14.16-.28.1-.45.31-.6.54h0c-.13.11-.26.21-.39.32-.2.07-.36.19-.47.37h0s0,0,0,0h0s0,0,0,0c-.91.56-1.06,1.1-.39,1.54.64.42.91-.19,1.28-.5.35-.08.72-.1,1.05-.29h0,0s.04.02.04.02l.03-.03c.46-.06.9-.18,1.32-.4h0s0,0,0,0h0s0,0,0,0h0c.69,0,1.37-.06,1.98-.44.59-.1,1.07-.38,1.41-.87h0,0c.29-.24.59-.48.88-.73.23-.19.44-.42.23-.71-.21-.3-.5-.15-.74.01-.14.1-.37.12-.37.36-.4.13-.78.41-1.23.19h0s0,0,0,0c0-.23,0-.45,0-.68h0c.12-.31.06-.67.27-.95.55-.36,1.34-.24,1.73-.9h0c.22-.13.42-.27.37-.58.32-.2.2-.45.03-.64-.34-.38-.75-.31-1.15-.09-.01.03-.03.04-.06.06l.06-.06c-.25,0-.45.08-.58.29h0s-.09.08-.13.13c-.16.06-.33.27-.5.11-.14-.13-.11-.35-.06-.53.1-.33.32-.62.28-.99.04-.03.04-.07.01-.11l.25-.61c.25-.14.5-.27.74-.41h0s0,0,0,0c.36-.14.69-.63,1.13-.14h0c.18.43.36.85.54,1.28.3.75.93,1.29,1.31,1.99h0c.36.48.39,1.14.86,1.56h0l.08.16c.15.23.31.47.46.7h0,0c.03.35.15.65.45.87h0s0,0,0,0c.01.08.06.13.14.12.67.25.62,1.05,1.12,1.43.2.2.39.39.59.59h0s0,0,0,0c.04.04.08.08.12.12.08.19.17.37.39.43.16.22.36.35.64.25h0s0,0,0,0c.29-.03.44-.25.43-.48-.03-.8.16-1.57.28-2.35.04-.3.07-.6-.13-.87Zm-4.16-8.53h0s0,0,0,0h0Zm-10.13,5.24s.01,0,.02,0h0s.01.04.01.04c-.01-.01-.02-.02-.03-.04Zm3.87,4.87h0s-.02,0-.03,0c.01-.05.03-.07.05-.08,0,.02-.01.05-.02.08Zm.28-6.69s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Zm.7-.02s0,0,0,0h0s0,0,0,0Zm3-.7h0s0,0,0,0h0s0,0,0,0c-.02-.02-.06-.04-.09-.06.02,0,.05-.01.09-.02v.08Zm1.01,2.85s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Zm4.62,6.41s0-.04,0-.06c.02.02.05.04.07.06-.02,0-.05,0-.07,0Z"/></g><g><path class="cls-1" d="m48.37,27.79v.1c-.1,0-.17.02-.23.05-.06.03-.12.1-.17.19-.04.06-.09.21-.17.45l-1.03,2.97h-.11l-.84-2.35-.83,2.35h-.1l-1.09-3.06c-.08-.23-.13-.36-.15-.4-.04-.07-.09-.12-.15-.15-.06-.03-.15-.05-.25-.05v-.1h1.36v.1h-.07c-.1,0-.17.02-.22.07-.05.04-.08.1-.08.16s.04.21.12.44l.73,2.07.61-1.76-.11-.31-.09-.25c-.04-.09-.08-.17-.13-.24-.02-.03-.05-.06-.09-.09-.05-.03-.09-.06-.14-.07-.03-.01-.09-.02-.16-.02v-.1h1.43v.1h-.1c-.1,0-.18.02-.22.07-.05.04-.07.1-.07.18,0,.09.04.25.12.48l.71,2,.7-2.03c.08-.22.12-.38.12-.47,0-.04-.01-.08-.04-.12-.03-.04-.06-.06-.1-.08-.07-.03-.16-.04-.27-.04v-.1h1.1Z"/><path class="cls-1" d="m50.84,27.89v-.1h1.3v.1h-.14c-.14,0-.26.06-.33.18-.04.06-.06.19-.06.39v1.49c0,.37-.04.66-.11.86-.07.2-.22.38-.43.52-.21.15-.51.22-.88.22-.4,0-.71-.07-.92-.21-.21-.14-.36-.33-.44-.56-.06-.16-.09-.46-.09-.91v-1.44c0-.23-.03-.37-.09-.45-.06-.07-.16-.11-.3-.11h-.14v-.1h1.59v.1h-.14c-.15,0-.26.05-.33.14-.05.07-.07.2-.07.41v1.61c0,.14.01.31.04.49.03.18.07.33.14.43.07.1.17.19.3.26.13.07.29.1.48.1.24,0,.46-.05.65-.16.19-.11.32-.24.39-.4s.1-.44.1-.83v-1.49c0-.23-.03-.37-.08-.43-.07-.08-.18-.12-.32-.12h-.14Z"/><path class="cls-1" d="m53.13,29.49h1.71v-1.05c0-.19-.01-.31-.04-.37-.02-.05-.06-.08-.11-.12-.08-.04-.16-.07-.25-.07h-.13v-.1h1.58v.1h-.13c-.09,0-.17.02-.25.06-.06.03-.1.07-.12.13-.02.06-.03.18-.03.36v2.38c0,.19.01.31.04.37.02.05.06.08.11.12.08.04.16.07.25.07h.13v.1h-1.58v-.1h.13c.15,0,.26-.04.33-.13.05-.06.07-.2.07-.42v-1.12h-1.71v1.12c0,.19.01.31.04.37.02.05.06.08.11.12.08.04.16.07.25.07h.13v.1h-1.58v-.1h.13c.15,0,.26-.04.33-.13.04-.06.07-.2.07-.42v-2.38c0-.19-.01-.31-.04-.37-.02-.05-.06-.08-.11-.12-.08-.04-.16-.07-.25-.07h-.13v-.1h1.58v.1h-.13c-.09,0-.17.02-.25.06-.06.03-.1.07-.12.13-.02.06-.03.18-.03.36v1.05Z"/><path class="cls-1" d="m58.32,30.24h-1.43l-.25.58c-.06.14-.09.25-.09.32,0,.06.03.11.08.15.05.04.17.07.35.08v.1h-1.16v-.1c.15-.03.25-.06.3-.11.09-.09.19-.26.31-.53l1.3-3.03h.1l1.28,3.06c.1.25.2.41.28.48.08.07.2.11.35.12v.1h-1.45v-.1c.15,0,.25-.03.3-.07.05-.04.08-.09.08-.15,0-.08-.04-.21-.11-.38l-.22-.53Zm-.08-.2l-.62-1.49-.64,1.49h1.27Z"/><path class="cls-1" d="m59.5,27.79h1l2.25,2.76v-2.12c0-.23-.03-.37-.08-.42-.07-.08-.17-.11-.32-.11h-.13v-.1h1.28v.1h-.13c-.16,0-.27.05-.33.14-.04.06-.06.19-.06.4v3.1h-.1l-2.43-2.97v2.27c0,.23.02.37.07.42.07.08.17.11.32.11h.13v.1h-1.28v-.1h.13c.16,0,.27-.05.33-.14.04-.06.06-.19.06-.4v-2.56c-.11-.13-.19-.21-.24-.25s-.14-.08-.24-.11c-.05-.02-.13-.02-.24-.02v-.1Z"/><path class="cls-1" d="m67.74,29.59c.26.05.45.14.57.26.18.17.26.37.26.61,0,.18-.06.36-.17.53-.12.17-.27.29-.48.37-.2.08-.51.12-.92.12h-1.74v-.1h.14c.15,0,.26-.05.33-.15.04-.06.06-.2.06-.4v-2.38c0-.23-.03-.37-.08-.43-.07-.08-.18-.12-.32-.12h-.14v-.1h1.59c.3,0,.54.02.71.07.27.07.48.18.62.35.14.17.21.36.21.57,0,.18-.06.35-.17.5-.11.15-.28.25-.5.32Zm-1.42-.15c.07.01.14.02.23.03.09,0,.18,0,.28,0,.26,0,.46-.03.6-.09.13-.06.23-.14.31-.26.07-.12.11-.25.11-.39,0-.22-.09-.4-.26-.55-.18-.15-.43-.23-.77-.23-.18,0-.34.02-.49.06v1.42Zm0,1.76c.21.05.42.07.62.07.33,0,.58-.07.75-.22.17-.15.26-.33.26-.55,0-.14-.04-.28-.12-.41-.08-.13-.2-.24-.38-.31-.18-.08-.39-.11-.65-.11-.11,0-.21,0-.29,0-.08,0-.14,0-.19.02v1.51Z"/><path class="cls-1" d="m71.53,27.89v-.1h1.3v.1h-.14c-.14,0-.26.06-.33.18-.04.06-.06.19-.06.39v1.49c0,.37-.04.66-.11.86-.07.2-.22.38-.43.52-.21.15-.51.22-.88.22-.4,0-.71-.07-.92-.21-.21-.14-.36-.33-.44-.56-.06-.16-.09-.46-.09-.91v-1.44c0-.23-.03-.37-.09-.45-.06-.07-.16-.11-.3-.11h-.14v-.1h1.59v.1h-.14c-.15,0-.26.05-.33.14-.05.07-.07.2-.07.41v1.61c0,.14.01.31.04.49.03.18.07.33.14.43.07.1.17.19.3.26.13.07.29.1.48.1.24,0,.46-.05.65-.16.19-.11.32-.24.39-.4.07-.16.1-.44.1-.83v-1.49c0-.23-.03-.37-.08-.43-.07-.08-.18-.12-.32-.12h-.14Z"/><path class="cls-1" d="m75.45,27.7v1.27h-.1c-.03-.24-.09-.44-.18-.58-.08-.14-.2-.26-.36-.34-.16-.09-.32-.13-.48-.13-.19,0-.34.06-.47.17-.12.12-.18.25-.18.39,0,.11.04.21.12.31.11.14.38.32.8.54.34.18.58.33.7.43.13.1.22.21.29.35.07.13.1.27.1.42,0,.28-.11.52-.32.72-.22.2-.49.3-.84.3-.11,0-.21,0-.3-.02-.06,0-.17-.04-.35-.1-.18-.06-.29-.09-.34-.09s-.08.01-.11.04c-.03.03-.05.08-.06.17h-.1v-1.26h.1c.05.26.11.46.19.59.08.13.2.24.37.33.16.09.34.13.54.13.23,0,.41-.06.54-.18.13-.12.2-.26.2-.42,0-.09-.02-.18-.07-.27-.05-.09-.13-.18-.23-.26-.07-.05-.26-.17-.58-.35-.32-.18-.54-.32-.67-.42-.13-.1-.23-.22-.3-.35-.07-.13-.1-.27-.1-.42,0-.26.1-.49.3-.68.2-.19.46-.29.77-.29.2,0,.4.05.62.14.1.05.17.07.21.07.05,0,.09-.01.12-.04.03-.03.05-.08.07-.17h.1Z"/><path class="cls-1" d="m78.38,31.37v.1h-1.58v-.1h.13c.15,0,.26-.04.33-.13.04-.06.07-.2.07-.42v-2.38c0-.19-.01-.31-.04-.37-.02-.05-.06-.08-.11-.12-.08-.04-.16-.07-.25-.07h-.13v-.1h1.58v.1h-.13c-.15,0-.26.04-.33.13-.05.06-.07.2-.07.42v2.38c0,.19.01.31.04.37.02.05.06.08.11.12.08.04.16.07.25.07h.13Z"/><path class="cls-1" d="m79.11,27.79h1l2.25,2.76v-2.12c0-.23-.03-.37-.08-.42-.07-.08-.17-.11-.32-.11h-.13v-.1h1.28v.1h-.13c-.16,0-.27.05-.33.14-.04.06-.06.19-.06.4v3.1h-.1l-2.43-2.97v2.27c0,.23.02.37.07.42.07.08.17.11.32.11h.13v.1h-1.28v-.1h.13c.16,0,.27-.05.33-.14.04-.06.06-.19.06-.4v-2.56c-.11-.13-.19-.21-.24-.25-.06-.04-.14-.08-.24-.11-.05-.02-.13-.02-.24-.02v-.1Z"/><path class="cls-1" d="m85.03,27.99v1.46h.81c.21,0,.35-.03.42-.1.09-.08.15-.23.16-.44h.1v1.28h-.1c-.03-.18-.05-.29-.08-.34-.03-.06-.09-.11-.16-.15-.07-.04-.19-.05-.34-.05h-.81v1.21c0,.16,0,.26.02.3s.04.06.08.08c.04.02.1.03.21.03h.62c.21,0,.36-.01.45-.04.09-.03.18-.09.27-.17.11-.11.23-.28.34-.51h.11l-.32.92h-2.84v-.1h.13c.09,0,.17-.02.25-.06.06-.03.1-.07.12-.13.02-.06.03-.18.03-.36v-2.39c0-.23-.02-.38-.07-.43-.07-.07-.17-.11-.33-.11h-.13v-.1h2.84l.04.81h-.11c-.04-.19-.08-.33-.13-.4-.05-.07-.11-.13-.21-.17-.07-.03-.2-.04-.38-.04h-1.01Z"/><path class="cls-1" d="m89.81,27.7v1.27h-.1c-.03-.24-.09-.44-.18-.58-.08-.14-.2-.26-.36-.34-.16-.09-.32-.13-.48-.13-.19,0-.34.06-.47.17-.12.12-.18.25-.18.39,0,.11.04.21.12.31.11.14.38.32.8.54.34.18.58.33.7.43.13.1.22.21.29.35.07.13.1.27.1.42,0,.28-.11.52-.32.72-.22.2-.49.3-.84.3-.11,0-.21,0-.3-.02-.06,0-.17-.04-.35-.1-.18-.06-.29-.09-.34-.09s-.08.01-.11.04c-.03.03-.05.08-.06.17h-.1v-1.26h.1c.05.26.11.46.19.59.08.13.2.24.37.33.16.09.34.13.54.13.23,0,.41-.06.54-.18.13-.12.2-.26.2-.42,0-.09-.02-.18-.07-.27-.05-.09-.13-.18-.23-.26-.07-.05-.26-.17-.58-.35-.32-.18-.54-.32-.67-.42-.13-.1-.23-.22-.3-.35-.07-.13-.1-.27-.1-.42,0-.26.1-.49.3-.68.2-.19.46-.29.77-.29.2,0,.4.05.62.14.1.05.17.07.21.07.05,0,.09-.01.12-.04.03-.03.05-.08.07-.17h.1Z"/><path class="cls-1" d="m92.91,27.7v1.27h-.1c-.03-.24-.09-.44-.18-.58-.08-.14-.2-.26-.36-.34-.16-.09-.32-.13-.48-.13-.19,0-.34.06-.47.17-.12.12-.18.25-.18.39,0,.11.04.21.12.31.11.14.38.32.8.54.34.18.58.33.7.43.13.1.22.21.29.35.07.13.1.27.1.42,0,.28-.11.52-.32.72-.22.2-.49.3-.84.3-.11,0-.21,0-.3-.02-.06,0-.17-.04-.35-.1-.18-.06-.29-.09-.34-.09s-.08.01-.11.04c-.03.03-.05.08-.06.17h-.1v-1.26h.1c.05.26.11.46.19.59.08.13.2.24.37.33.16.09.34.13.54.13.23,0,.41-.06.54-.18.13-.12.2-.26.2-.42,0-.09-.02-.18-.07-.27-.05-.09-.13-.18-.23-.26-.07-.05-.26-.17-.58-.35-.32-.18-.54-.32-.67-.42-.13-.1-.23-.22-.3-.35-.07-.13-.1-.27-.1-.42,0-.26.1-.49.3-.68.2-.19.46-.29.77-.29.2,0,.4.05.62.14.1.05.17.07.21.07.05,0,.09-.01.12-.04.03-.03.05-.08.07-.17h.1Z"/><path class="cls-1" d="m99.33,27.89v-.1h1.3v.1h-.14c-.14,0-.26.06-.33.18-.04.06-.06.19-.06.39v1.49c0,.37-.04.66-.11.86-.07.2-.22.38-.43.52-.21.15-.51.22-.88.22-.4,0-.71-.07-.92-.21-.21-.14-.36-.33-.44-.56-.06-.16-.09-.46-.09-.91v-1.44c0-.23-.03-.37-.09-.45-.06-.07-.16-.11-.3-.11h-.14v-.1h1.59v.1h-.14c-.15,0-.26.05-.33.14-.05.07-.07.2-.07.41v1.61c0,.14.01.31.04.49.03.18.07.33.14.43.07.1.17.19.3.26.13.07.29.1.48.1.24,0,.46-.05.65-.16.19-.11.32-.24.39-.4s.1-.44.1-.83v-1.49c0-.23-.03-.37-.08-.43-.07-.08-.18-.12-.32-.12h-.14Z"/><path class="cls-1" d="m100.62,27.79h1l2.25,2.76v-2.12c0-.23-.03-.37-.08-.42-.07-.08-.17-.11-.32-.11h-.13v-.1h1.28v.1h-.13c-.16,0-.27.05-.33.14-.04.06-.06.19-.06.4v3.1h-.1l-2.43-2.97v2.27c0,.23.02.37.07.42.07.08.17.11.32.11h.13v.1h-1.28v-.1h.13c.16,0,.27-.05.33-.14.04-.06.06-.19.06-.4v-2.56c-.11-.13-.19-.21-.24-.25-.06-.04-.14-.08-.24-.11-.05-.02-.13-.02-.24-.02v-.1Z"/><path class="cls-1" d="m107.09,31.37v.1h-1.58v-.1h.13c.15,0,.26-.04.33-.13.04-.06.07-.2.07-.42v-2.38c0-.19-.01-.31-.04-.37-.02-.05-.06-.08-.11-.12-.08-.04-.16-.07-.25-.07h-.13v-.1h1.58v.1h-.13c-.15,0-.26.04-.33.13-.05.06-.07.2-.07.42v2.38c0,.19.01.31.04.37.02.05.06.08.11.12.08.04.16.07.25.07h.13Z"/><path class="cls-1" d="m111.85,27.79v.1c-.13.02-.23.07-.3.12-.1.09-.18.22-.26.41l-1.28,3.13h-.1l-1.38-3.18c-.07-.16-.12-.26-.15-.3-.05-.06-.1-.1-.17-.13-.07-.03-.16-.05-.27-.06v-.1h1.5v.1c-.17.02-.28.05-.33.09-.05.04-.08.1-.08.16,0,.09.04.23.13.42l.94,2.16.87-2.13c.09-.21.13-.36.13-.44,0-.05-.03-.1-.08-.15-.05-.05-.14-.08-.27-.1,0,0-.02,0-.05,0v-.1h1.14Z"/><path class="cls-1" d="m113.74,27.99v1.46h.81c.21,0,.35-.03.42-.1.09-.08.15-.23.16-.44h.1v1.28h-.1c-.03-.18-.05-.29-.08-.34-.03-.06-.09-.11-.16-.15-.07-.04-.19-.05-.34-.05h-.81v1.21c0,.16,0,.26.02.3s.04.06.08.08c.04.02.1.03.21.03h.62c.21,0,.36-.01.45-.04.09-.03.18-.09.27-.17.11-.11.23-.28.34-.51h.11l-.32.92h-2.84v-.1h.13c.09,0,.17-.02.25-.06.06-.03.1-.07.12-.13.02-.06.03-.18.03-.36v-2.39c0-.23-.02-.38-.07-.43-.07-.07-.17-.11-.33-.11h-.13v-.1h2.84l.04.81h-.11c-.04-.19-.08-.33-.13-.4-.05-.07-.11-.13-.21-.17-.07-.03-.2-.04-.38-.04h-1.01Z"/><path class="cls-1" d="m119.74,31.47h-.98l-1.25-1.72c-.09,0-.17,0-.23,0-.02,0-.05,0-.08,0-.03,0-.06,0-.08,0v1.07c0,.23.03.38.08.43.07.08.17.12.31.12h.14v.1h-1.58v-.1h.14c.16,0,.27-.05.33-.15.04-.06.06-.19.06-.4v-2.38c0-.23-.03-.38-.08-.43-.07-.08-.18-.12-.32-.12h-.14v-.1h1.34c.39,0,.68.03.87.09.19.06.34.16.47.31.13.15.19.34.19.55,0,.23-.07.42-.22.59-.15.17-.38.28-.69.35l.76,1.06c.17.24.32.4.45.48.12.08.29.13.49.15v.1Zm-2.62-1.89s.06,0,.09,0c.03,0,.05,0,.06,0,.35,0,.62-.08.79-.23.18-.15.27-.35.27-.58s-.07-.42-.22-.56c-.14-.14-.33-.22-.57-.22-.1,0-.25.02-.43.05v1.53Z"/><path class="cls-1" d="m122.24,27.7v1.27h-.1c-.03-.24-.09-.44-.18-.58-.08-.14-.2-.26-.36-.34-.16-.09-.32-.13-.48-.13-.19,0-.34.06-.47.17-.12.12-.18.25-.18.39,0,.11.04.21.12.31.11.14.38.32.8.54.34.18.58.33.7.43.13.1.22.21.29.35.07.13.1.27.1.42,0,.28-.11.52-.32.72-.22.2-.49.3-.84.3-.11,0-.21,0-.3-.02-.06,0-.17-.04-.35-.1-.18-.06-.29-.09-.34-.09s-.08.01-.11.04c-.03.03-.05.08-.06.17h-.1v-1.26h.1c.05.26.11.46.19.59.08.13.2.24.37.33.16.09.34.13.54.13.23,0,.41-.06.54-.18.13-.12.2-.26.2-.42,0-.09-.02-.18-.07-.27-.05-.09-.13-.18-.23-.26-.07-.05-.26-.17-.58-.35-.32-.18-.54-.32-.67-.42-.13-.1-.23-.22-.3-.35-.07-.13-.1-.27-.1-.42,0-.26.1-.49.3-.68.2-.19.46-.29.77-.29.2,0,.4.05.62.14.1.05.17.07.21.07.05,0,.09-.01.12-.04.03-.03.05-.08.07-.17h.1Z"/><path class="cls-1" d="m125.39,31.37v.1h-1.58v-.1h.13c.15,0,.26-.04.33-.13.04-.06.07-.2.07-.42v-2.38c0-.19-.01-.31-.04-.37-.02-.05-.06-.08-.11-.12-.08-.04-.16-.07-.25-.07h-.13v-.1h1.58v.1h-.13c-.15,0-.26.04-.33.13-.05.06-.07.2-.07.42v2.38c0,.19.01.31.04.37.02.05.06.08.11.12.08.04.16.07.25.07h.13Z"/><path class="cls-1" d="m129.63,27.79l.04.86h-.1c-.02-.15-.05-.26-.08-.33-.06-.1-.13-.18-.22-.23-.09-.05-.22-.07-.37-.07h-.52v2.81c0,.23.02.37.07.42.07.08.17.11.32.11h.13v.1h-1.56v-.1h.13c.16,0,.27-.05.33-.14.04-.06.06-.19.06-.4v-2.81h-.44c-.17,0-.29.01-.37.04-.09.03-.17.1-.24.2-.07.1-.11.23-.12.4h-.1l.04-.86h3.01Z"/><path class="cls-1" d="m133.36,27.79h1.28v.1h-.07s-.12.02-.21.06c-.09.04-.17.1-.25.18-.07.08-.17.2-.27.38l-.89,1.4v.92c0,.23.03.37.08.42.07.08.18.11.33.11h.12v.1h-1.56v-.1h.13c.16,0,.27-.05.33-.14.04-.06.06-.19.06-.4v-.87l-1.01-1.54c-.12-.18-.2-.29-.24-.34-.04-.05-.13-.1-.26-.16-.04-.02-.09-.03-.16-.03v-.1h1.58v.1h-.08c-.09,0-.16.02-.23.06-.07.04-.11.1-.11.18,0,.07.06.18.17.35l.77,1.19.72-1.14c.11-.17.16-.3.16-.38,0-.05-.01-.1-.04-.14s-.06-.07-.11-.09c-.05-.02-.12-.03-.22-.03v-.1Z"/></g></g><g><g><polygon class="cls-1" points="20.31 14.12 20.08 14.12 20.08 15.48 18.82 15.48 18.82 14.36 19.59 14.36 19.59 14.81 19.09 14.81 19.09 15.04 19.83 15.04 19.83 14.13 18.58 14.13 18.58 15.72 20.31 15.72 20.31 14.12"/><polygon class="cls-1" points="18.41 14.13 17.16 14.13 17.16 15.04 17.89 15.04 17.89 14.81 17.4 14.81 17.4 14.36 18.17 14.36 18.17 15.48 16.91 15.48 16.91 14.12 16.68 14.12 16.68 15.72 18.41 15.72 18.41 14.13"/><polygon class="cls-1" points="19.83 12.97 19.09 12.97 19.09 13.21 19.59 13.21 19.59 13.65 18.82 13.65 18.82 12.53 20.08 12.53 20.08 13.9 20.31 13.9 20.31 12.29 18.58 12.29 18.58 13.89 19.83 13.89 19.83 12.97"/><polygon class="cls-1" points="16.91 12.53 18.17 12.53 18.17 13.65 17.4 13.65 17.4 13.21 17.89 13.21 17.89 12.97 17.16 12.97 17.16 13.89 18.41 13.89 18.41 12.29 16.68 12.29 16.68 13.9 16.91 13.9 16.91 12.53"/></g><g><path class="cls-1" d="m4.21,17l.06.77h-.13s0-.07,0-.07c0-.05-.01-.09-.02-.11-.02-.03-.04-.04-.08-.04-.02,0-.06.01-.11.03l-1.4.55,1.21.29.27-.11c.07-.03.11-.06.14-.11.02-.03.02-.08.02-.14h.13s.06.75.06.75h-.13s0-.06,0-.06c0-.06-.02-.1-.03-.12-.02-.02-.04-.03-.07-.03-.02,0-.06.01-.11.03l-1.41.56,1.48.33c.05.01.09.02.12.01.03,0,.05-.01.06-.04.01-.02.02-.06.01-.12v-.08s.12-.01.12-.01l.05.66h-.13s-.01-.09-.03-.11c-.01-.03-.03-.05-.06-.06-.02-.02-.07-.03-.14-.05l-1.86-.45-.02-.22,1.26-.51-1.32-.32-.02-.22,1.77-.73c.09-.03.14-.07.17-.12.02-.03.02-.08.02-.15h.13Z"/><path class="cls-1" d="m4.46,19.96l.16.82-.13.02v-.05c-.02-.07-.04-.11-.06-.14-.01-.02-.04-.03-.06-.04-.03,0-.08,0-.15.01l-.95.19c-.17.03-.29.08-.37.14-.07.06-.13.14-.17.25-.04.11-.04.22-.02.33.02.12.07.22.15.31.08.09.17.15.25.18.09.03.22.02.4-.01l.92-.18c.07-.01.11-.03.14-.05.03-.02.04-.04.05-.07,0-.03,0-.07,0-.13v-.06s.12-.02.12-.02l.14.71-.13.02v-.05c-.03-.08-.05-.13-.09-.16-.04-.02-.1-.03-.18-.01l-.98.19c-.18.03-.33.03-.47-.01-.13-.04-.24-.12-.34-.24-.09-.11-.16-.26-.19-.42-.03-.16-.02-.31.02-.46.04-.15.11-.26.21-.34.09-.08.22-.14.38-.17l1.04-.2c.07-.01.11-.03.14-.05.02-.02.04-.04.05-.06,0-.03,0-.07,0-.12v-.08s.11-.02.11-.02Z"/><path class="cls-1" d="m4.91,22.28l.26.79-.12.04-.02-.05c-.02-.06-.04-.11-.06-.13-.02-.02-.05-.04-.08-.04-.02,0-.07,0-.14.03l-.57.18.34,1.06.56-.18c.08-.02.12-.04.14-.05.03-.02.05-.04.06-.07,0-.03,0-.07-.01-.13l-.03-.08.12-.04.25.79-.12.04-.02-.07c-.02-.05-.04-.09-.06-.11-.02-.02-.04-.03-.07-.03-.02,0-.07,0-.14.03l-1.4.45c-.08.03-.13.05-.14.06-.02.02-.03.04-.03.07,0,.02.02.08.05.18l-.12.04-.25-.79.12-.04.02.06c.02.07.04.12.06.14.02.02.04.03.06.03.02,0,.07-.01.16-.04l.64-.21-.34-1.06-.66.21c-.08.02-.13.05-.14.06-.02.02-.03.04-.02.07,0,.02.02.09.05.19l-.12.04-.26-.79.12-.04.02.05c.02.08.04.12.06.14.01.02.04.03.06.03.03,0,.07,0,.13-.02l1.41-.46c.06-.02.11-.04.13-.06.02-.02.03-.04.04-.07,0-.03,0-.06-.02-.12l-.03-.08.12-.04Z"/><path class="cls-1" d="m6,25.26l.11.23-1.34,1.38c-.07.07-.11.12-.12.17-.01.04,0,.09.02.14v.03s-.1.06-.1.06l-.33-.69.12-.06s.02.04.03.06c.02.04.04.07.06.08.03.02.06.02.09,0,.02,0,.06-.04.13-.11l.32-.31-.33-.71-.49.05c-.05,0-.09.01-.1.02-.02,0-.03.02-.04.04,0,.02-.01.03-.01.05,0,.02.01.05.03.09.01.03.02.05.03.06l-.12.06-.28-.58.12-.05c.03.05.05.09.07.11.02.02.05.03.08.04.03,0,.09,0,.18,0l1.9-.15Zm-1.21.27l.28.6.7-.7-.98.09Z"/><path class="cls-1" d="m6.5,26.33l.37.55-.8,1.71,1.03-.68c.06-.04.1-.08.12-.11.02-.03.03-.06.02-.09,0-.03-.02-.07-.05-.12l-.03-.05.11-.07.4.6-.11.07-.02-.03c-.04-.05-.06-.09-.08-.1-.03-.02-.07-.02-.11-.02-.04,0-.09.03-.15.07l-1.47.98-.1-.16.96-2.06-1.28.85c-.07.05-.11.08-.13.09-.02.02-.03.04-.03.07,0,.03,0,.05,0,.08,0,.03.03.07.08.14l-.11.07-.4-.61.11-.07.02.03c.04.06.07.1.1.11.03.01.06.02.1,0,.04,0,.09-.03.16-.08l1.14-.76c.07-.05.11-.08.13-.09.02-.03.04-.06.03-.09,0-.03-.02-.08-.07-.14l-.03-.05.11-.07Z"/><path class="cls-1" d="m8.29,28.8l.76.69c.19.17.31.29.36.37.08.12.12.23.12.35,0,.12-.04.22-.12.31-.06.07-.13.11-.21.13-.08.02-.16.03-.26,0-.06-.01-.13-.04-.21-.08.07.09.12.17.14.23.04.09.05.18.03.28-.02.09-.06.18-.13.25-.07.07-.15.12-.24.15-.09.03-.19.03-.3,0-.1-.02-.21-.07-.31-.14-.1-.07-.2-.15-.3-.24l-.8-.73.09-.1.05.05c.05.05.09.07.13.07.05,0,.09-.02.14-.07l1.01-1.11c.05-.05.08-.09.08-.12,0-.03,0-.05,0-.08,0-.02-.04-.06-.09-.1l-.05-.05.09-.1Zm-.33,1.2l-.47.53c-.05.05-.07.09-.08.1,0,.02,0,.04.01.06,0,.02.04.05.11.11l.16.14c.15.14.27.23.35.27.08.04.17.06.27.04.1-.01.18-.06.25-.14.06-.07.09-.14.1-.23,0-.09-.01-.17-.06-.25-.05-.08-.16-.2-.33-.36l-.31-.28Zm.63-.7l-.53.59.29.26c.14.12.24.2.3.23.1.05.19.07.28.06s.17-.06.24-.14c.06-.07.09-.14.09-.22,0-.08-.02-.15-.07-.23-.03-.05-.11-.13-.24-.25l-.35-.32Z"/><path class="cls-1" d="m9.87,30.24l.71.43-.07.11-.05-.03c-.06-.04-.1-.06-.13-.06-.02,0-.05,0-.07.02s-.05.05-.09.12l-.5.83c-.09.15-.14.27-.15.36,0,.09.02.19.07.29.05.1.13.18.23.24.1.06.21.09.33.1.12,0,.22-.02.3-.07.08-.05.17-.15.26-.31l.49-.8c.04-.06.06-.1.06-.14,0-.03,0-.06-.02-.09-.02-.03-.05-.06-.1-.08l-.05-.03.07-.11.62.37-.07.11-.04-.03c-.07-.04-.13-.06-.17-.05-.04.01-.09.05-.13.13l-.52.85c-.09.16-.2.27-.32.34-.12.07-.26.1-.4.09-.15,0-.3-.06-.44-.14-.14-.08-.25-.19-.33-.32-.08-.13-.12-.26-.11-.39,0-.12.04-.26.13-.4l.55-.9c.04-.06.06-.1.06-.13,0-.03,0-.06-.02-.08-.01-.02-.05-.05-.1-.08l-.07-.04.07-.11Z"/><path class="cls-1" d="m13.22,31.95l.1.04-.09.68h-.15c-.02-.22-.07-.4-.17-.56-.08-.13-.19-.22-.33-.28-.08-.03-.17-.05-.24-.04-.08,0-.14.02-.2.06-.05.03-.09.08-.11.13-.02.04-.02.09-.01.15,0,.05.03.11.07.16.04.05.11.12.22.2l.33.26s.1.08.17.16c.07.07.12.14.16.2.03.06.05.13.05.2,0,.07,0,.14-.04.22-.06.16-.19.27-.37.34-.19.06-.39.05-.61-.03-.11-.05-.21-.1-.29-.17-.08-.07-.15-.17-.22-.29l-.14.17-.1-.04.15-.77.14.03c0,.15.02.29.06.42.04.12.11.23.19.32.08.09.17.15.27.19.14.05.28.06.41.02.11-.04.19-.1.23-.2.03-.09.03-.17,0-.25-.04-.08-.13-.18-.28-.29l-.32-.25c-.18-.14-.29-.27-.34-.39-.05-.12-.05-.24,0-.36.04-.09.1-.17.18-.22.08-.06.19-.09.32-.1.13,0,.26.01.4.06.11.04.21.11.3.18.06.05.11.12.15.19l.11-.11Z"/><path class="cls-1" d="m13.68,32.09l.8.22-.03.12-.06-.02c-.06-.02-.1-.02-.13-.01-.03,0-.06.03-.08.05-.02.03-.04.08-.07.17l-.37,1.34c-.02.07-.03.12-.02.15,0,.03.02.06.04.08.02.02.06.04.12.05l.06.02-.03.12-.8-.22.03-.13.07.02c.06.02.1.02.13.01.03,0,.05-.02.07-.04.02-.02.04-.07.06-.14l.38-1.37c.02-.08.03-.13.03-.16,0-.03-.02-.05-.04-.07-.02-.02-.06-.04-.12-.05l-.07-.02.03-.13Z"/><path class="cls-1" d="m14.6,32.37l.65.11.69,1.76.21-1.21c.01-.07.01-.13,0-.16,0-.03-.03-.06-.05-.08-.03-.02-.07-.04-.12-.05h-.05s.02-.14.02-.14l.71.12-.02.13h-.04c-.06-.02-.11-.02-.13-.01-.03,0-.06.03-.08.07-.02.04-.04.09-.05.16l-.3,1.75-.18-.03-.83-2.12-.26,1.52c-.01.08-.02.14-.02.16,0,.02.01.05.03.07.02.02.04.04.06.05.02.01.07.02.15.04l-.02.13-.72-.12.02-.13h.04c.07.02.12.02.15.01.03,0,.05-.03.07-.06.02-.03.04-.09.05-.17l.23-1.35c.01-.08.02-.14.02-.16,0-.04-.02-.06-.04-.08-.02-.02-.07-.04-.15-.05h-.05s.02-.14.02-.14Z"/><path class="cls-1" d="m16.78,32.74l1.75.1.17.58-.14.04c-.03-.09-.06-.17-.1-.23-.04-.05-.08-.1-.14-.14-.05-.04-.11-.07-.17-.08-.06-.02-.16-.03-.31-.04l-.52-.03-.04.79h.26c.1.02.17,0,.22-.02.05-.03.09-.07.11-.12.02-.04.03-.1.03-.19v-.04s.15,0,.15,0l-.05.95h-.15s0-.09,0-.09c0-.07,0-.12,0-.16,0-.03-.03-.06-.05-.09-.03-.03-.06-.05-.09-.06-.03-.01-.09-.02-.17-.03h-.26s-.04.69-.04.69c0,.07,0,.12,0,.13,0,.02.02.03.03.04.01,0,.06.01.13.02l.32.02c.18.01.32,0,.43-.04.1-.04.2-.1.28-.18.06-.07.13-.16.19-.29l.14.06-.28.66-1.82-.1v-.13s.07,0,.07,0c.07,0,.12,0,.13,0,.03-.01.05-.03.07-.06.01-.02.02-.06.02-.13l.08-1.48c0-.07,0-.11-.01-.14-.01-.02-.03-.04-.07-.06-.02,0-.08-.02-.18-.02v-.13Z"/><path class="cls-1" d="m20.33,32.73h.11s.22.64.22.64l-.14.05c-.11-.18-.24-.32-.4-.41-.13-.08-.27-.11-.42-.1-.09,0-.17.03-.24.07-.07.04-.12.08-.15.14-.03.05-.05.11-.04.16,0,.05.02.09.05.14.03.04.08.08.14.11.06.03.15.06.29.09l.41.09c.05.01.12.03.22.07.1.03.17.07.23.11.06.04.1.09.14.16.04.06.06.13.06.21.01.17-.05.33-.19.47-.14.14-.33.22-.56.24-.12.01-.23,0-.33-.03-.1-.03-.21-.08-.33-.16l-.05.21h-.11s-.21-.75-.21-.75l.14-.04c.06.14.14.25.24.35.1.09.2.16.31.2.11.04.22.06.33.05.15-.01.27-.07.38-.17.09-.08.13-.17.12-.28,0-.09-.05-.17-.12-.22-.07-.05-.2-.1-.38-.14l-.39-.08c-.22-.04-.38-.11-.48-.2-.1-.09-.15-.2-.16-.32,0-.1.01-.19.06-.28.05-.09.13-.17.25-.23.11-.07.24-.11.38-.12.12,0,.23,0,.35.03.08.02.15.06.22.11l.05-.15Z"/><path class="cls-1" d="m22.23,32.37l.11-.02.31.61-.13.07c-.13-.16-.28-.28-.45-.35-.14-.06-.28-.07-.43-.04-.09.02-.16.05-.23.1-.06.05-.11.1-.13.16-.02.06-.03.11-.02.17.01.05.03.09.07.13.04.04.09.07.15.09.06.02.16.04.3.05l.42.03c.05,0,.13.01.23.03.1.02.18.05.24.08.06.03.11.08.16.14.04.06.07.13.09.2.04.17,0,.33-.12.49-.12.16-.29.26-.53.31-.12.03-.23.03-.33.02-.1-.01-.22-.05-.35-.12l-.02.22-.11.02-.31-.73.13-.06c.08.13.18.23.28.31.11.08.22.13.33.16.11.03.22.03.33,0,.14-.03.26-.1.35-.22.07-.09.1-.19.08-.29-.02-.09-.07-.16-.15-.2-.08-.04-.21-.07-.39-.08l-.4-.02c-.22-.01-.39-.06-.5-.14-.11-.08-.18-.18-.2-.3-.02-.1-.01-.19.03-.29.04-.09.11-.18.21-.26.1-.08.23-.14.37-.17.12-.03.23-.03.35-.01.08.01.16.04.24.08l.03-.16Z"/><path class="cls-1" d="m23.52,32l.75-.36.06.12-.05.02c-.06.03-.1.06-.12.08-.02.02-.02.04-.02.07,0,.03.02.07.05.14l.42.88c.08.16.15.26.22.32.07.06.17.09.28.1.11,0,.22-.01.33-.06.11-.05.19-.13.26-.23.07-.1.1-.2.11-.29,0-.09-.04-.22-.11-.38l-.41-.84c-.03-.06-.06-.1-.08-.12-.03-.02-.05-.03-.08-.03-.03,0-.07.01-.12.04l-.05.03-.06-.12.65-.31.06.12-.04.02c-.07.04-.12.07-.13.12-.01.04,0,.1.04.18l.43.9c.08.16.11.31.1.45s-.06.27-.14.39c-.09.12-.21.22-.36.29-.15.07-.3.1-.45.1-.15,0-.28-.04-.39-.11-.1-.07-.19-.18-.26-.32l-.46-.95c-.03-.06-.06-.1-.08-.12-.02-.02-.05-.03-.07-.03-.03,0-.07.01-.12.04l-.07.03-.06-.12Z"/><path class="cls-1" d="m25.59,30.98l.54-.38,1.74.74-.72-1c-.04-.06-.08-.1-.11-.12-.03-.02-.06-.03-.1-.02-.03,0-.07.02-.12.05l-.05.03-.08-.11.59-.42.08.11-.03.02c-.05.04-.08.07-.1.09-.02.03-.02.07-.01.11,0,.04.03.09.07.15l1.03,1.44-.15.11-2.09-.89.9,1.25c.05.07.08.11.1.12.02.01.04.03.07.03.03,0,.05,0,.08,0,.03,0,.07-.04.13-.08l.08.11-.59.43-.08-.11.03-.02c.06-.04.1-.08.11-.11.01-.03.02-.06,0-.1,0-.04-.04-.09-.09-.16l-.8-1.11c-.05-.07-.08-.11-.1-.12-.03-.02-.06-.03-.09-.03-.03,0-.08.03-.14.07l-.05.03-.08-.11Z"/><path class="cls-1" d="m27.35,29.67l.61-.56.09.1-.05.04s-.07.08-.08.11c0,.03,0,.06,0,.09.01.03.05.08.11.14l.94,1.03c.05.05.09.08.12.1.03.01.06.02.09,0,.03,0,.06-.03.11-.07l.05-.04.09.1-.61.56-.09-.1.05-.05s.07-.08.08-.1c0-.03,0-.05,0-.08,0-.03-.04-.07-.09-.12l-.96-1.05c-.05-.06-.09-.1-.12-.11-.03-.01-.05-.01-.08,0-.03,0-.06.03-.11.07l-.05.05-.09-.1Z"/><path class="cls-1" d="m27.97,29.15l.52-.59.1.09-.04.05s-.06.07-.06.08c0,.02-.01.04,0,.06,0,.02.01.03.02.04.02.02.06.04.11.06l1.5.56-.74-1.42c-.03-.05-.05-.08-.07-.1-.02-.02-.05-.03-.07-.02-.02,0-.06.03-.1.08l-.05.05-.1-.09.44-.5.1.09s-.06.08-.07.11c0,.03-.01.06,0,.08,0,.03.03.08.06.15l.88,1.76-.14.16-1.85-.66c-.06-.02-.1-.03-.12-.04-.03,0-.05,0-.07,0-.02,0-.04.01-.07.03-.02.01-.05.04-.08.07l-.1-.09Z"/><path class="cls-1" d="m29.42,27.5l.96-1.47.59.14-.03.14c-.1-.02-.18-.03-.24-.03-.07,0-.13.02-.19.05-.06.03-.11.06-.16.1-.04.04-.1.12-.19.25l-.29.44.66.43.14-.22c.05-.08.08-.15.08-.21,0-.06-.02-.11-.05-.15-.02-.03-.07-.07-.15-.12l-.03-.02.08-.13.79.52-.08.13-.07-.04c-.06-.04-.11-.06-.14-.07-.03,0-.07,0-.11,0-.04,0-.07.02-.1.05-.03.02-.06.07-.11.13l-.14.22.59.38c.06.04.1.06.12.06.02,0,.03,0,.05,0,.01,0,.04-.04.08-.1l.18-.27c.1-.15.16-.28.18-.39.02-.11.01-.22-.02-.33-.03-.09-.08-.19-.15-.31l.12-.09.43.57-1,1.52-.11-.07.03-.05c.04-.06.06-.1.06-.12,0-.03,0-.06-.02-.09-.01-.02-.05-.05-.1-.09l-1.24-.82c-.06-.04-.1-.06-.12-.06-.03,0-.05,0-.08.03-.02.01-.05.06-.11.15l-.11-.07Z"/><path class="cls-1" d="m30.58,25.71l.48-1.01c.09-.19.18-.33.27-.41.09-.08.18-.13.28-.14.1-.02.2,0,.3.04.1.05.18.12.23.21.05.09.08.19.08.31,0,.12-.04.26-.11.42l.87-.22c.07-.02.12-.03.14-.04.04-.02.08-.04.11-.07.03-.03.06-.07.08-.11l.02-.03.12.06-.21.44-1.27.27-.12.25.6.29c.07.03.11.05.13.05.04,0,.07,0,.09-.02.02-.02.05-.06.08-.12l.02-.05.12.06-.35.75-.12-.06.03-.07c.02-.05.04-.09.04-.11,0-.02,0-.04-.01-.06,0-.02-.03-.04-.05-.06,0,0-.06-.03-.14-.07l-1.27-.61c-.06-.03-.1-.04-.13-.04-.03,0-.05,0-.08.02-.02.01-.04.05-.07.1l-.04.08-.12-.06Zm.39-.43l.73.35.19-.4c.06-.14.1-.24.11-.3.01-.09,0-.17-.03-.24-.04-.07-.1-.13-.2-.18-.08-.04-.15-.05-.22-.05-.07,0-.13.03-.18.08-.05.04-.11.12-.16.23l-.24.51Z"/><path class="cls-1" d="m31.93,22.41l.03-.11.68.05v.15c-.21.03-.39.1-.54.21-.12.09-.21.21-.26.35-.03.09-.04.17-.03.25,0,.08.03.14.07.19.04.05.08.08.13.1.05.02.09.02.15,0,.05-.01.1-.04.15-.08.05-.04.11-.12.19-.23l.24-.35s.08-.1.15-.18c.07-.08.13-.13.19-.17.06-.04.13-.06.2-.06.07,0,.15,0,.22.02.16.05.28.17.36.35.08.18.08.39,0,.61-.04.12-.09.22-.15.3-.06.08-.16.16-.28.24l.17.13-.03.1-.78-.11.02-.15c.15,0,.29-.03.41-.08s.22-.12.31-.2c.08-.08.14-.18.17-.28.05-.14.04-.28,0-.41-.04-.11-.11-.18-.21-.22-.09-.03-.17-.02-.25.02-.08.05-.17.14-.27.29l-.23.33c-.13.19-.25.31-.37.36s-.24.06-.36.02c-.09-.03-.17-.09-.23-.17s-.1-.19-.12-.32c-.02-.13,0-.26.04-.4.04-.11.09-.22.17-.31.05-.06.11-.12.18-.16l-.12-.11Z"/><path class="cls-1" d="m32.06,21.94l.19-.8.13.03v.06c-.03.06-.03.1-.02.13.01.03.03.05.06.07.03.02.08.04.17.06l1.35.31c.07.02.12.02.15.01.03,0,.06-.02.08-.04.02-.02.03-.06.05-.12v-.06s.14.03.14.03l-.19.8-.13-.03.02-.07c.01-.06.02-.1,0-.13s-.02-.05-.05-.07c-.02-.02-.07-.03-.14-.05l-1.39-.32c-.08-.02-.13-.02-.16-.02-.03,0-.05.02-.07.04-.02.02-.03.06-.05.12l-.02.07-.13-.03Z"/><path class="cls-1" d="m32.23,20.93l.02-.11h.07s.18-1.32.18-1.32l-.07-.02.02-.11.66-.14.03.14c-.18.04-.31.1-.39.19-.08.08-.13.19-.15.33,0,.06-.01.09,0,.11,0,.01,0,.02.02.03.01,0,.05.01.11.02l1.48.21c.07.01.12.01.14,0,.03,0,.05-.01.06-.02.02-.01.03-.03.04-.05,0-.02.02-.08.03-.17l.13.02-.12.82-.13-.02c.01-.09.02-.15.01-.17,0-.04-.02-.07-.05-.08-.03-.02-.08-.03-.16-.05l-1.51-.21s-.08,0-.09,0-.02.01-.03.02c0,.01-.01.04-.02.08-.02.11-.01.2,0,.27.02.07.06.14.12.21.06.07.14.13.25.19l-.07.13-.6-.31Z"/><path class="cls-1" d="m32.54,19.34v-.81s.14,0,.14,0v.09c0,.06,0,.09.01.11.01.02.03.02.05.02.02,0,.05,0,.08-.03,0,0,.02-.01.04-.02l.79-.41-.8-.48s-.05-.03-.06-.03c-.01,0-.02,0-.03,0-.01,0-.03,0-.04.01-.01,0-.02.02-.02.04,0,.01,0,.04,0,.09v.08s-.13,0-.13,0v-.67s.14,0,.14,0c0,.06,0,.1,0,.13,0,.03.02.05.04.07s.05.04.11.08l.96.6h.54c.08.01.13,0,.15,0,.02-.01.04-.03.05-.06.01-.03.02-.09.02-.19h.13s-.01.85-.01.85h-.13s0-.07,0-.07c0-.07,0-.12-.02-.14-.01-.02-.03-.04-.06-.06-.02,0-.07-.02-.14-.02h-.49s-1.02.54-1.02.54c-.08.04-.13.08-.15.11-.02.03-.03.09-.03.17h-.13Z"/></g><path class="cls-1" d="m18.42,36.84C8.26,36.84,0,28.58,0,18.42S8.26,0,18.42,0s18.42,8.26,18.42,18.42-8.26,18.42-18.42,18.42ZM18.42.44C8.51.44.44,8.51.44,18.42s8.07,17.98,17.98,17.98,17.98-8.07,17.98-17.98S28.33.44,18.42.44Z"/><g><path class="cls-1" d="m5.02,9.03s.06-.24.2-.39c.14-.16.3-.27.21-.44-.09-.17-.37-.15-.41-.15s-.16-.03-.18-.1c-.03-.07-.07-.27.05-.22.12.06.44.22.58.27.14.05.19.03.25-.05.06-.07.14-.12.22-.04s.14.28.14.28c0,0,.17.09.2.03.04-.06.03-.27.07-.29.05-.03.21-.16.26-.16s.12.04.14.1c.02.06,0,.26-.05.32-.05.06-.09.23-.05.27.04.04.4.2.47.24.06.04.52.23.72.28.2.05.46.19.49.05.04-.15.02-.38-.38-.68,0,0-.07-.14.07-.05.33.38.49.46.57.54.07.08.06.17.16.29.09.12.1.3-.05.29-.16,0-.6-.16-.72-.15-.12,0-1.23-.47-1.31-.53-.08-.06-.27-.15-.31-.02s-.1.28-.1.28c0,0,.02.12.07.22.05.1.06.24.13.19.06-.05.19-.32.23-.34.04-.02.19-.04.19.14s-.18.38-.18.44.13.33.18.34.2-.24.2-.32.11-.1.12-.05-.11.57-.12.65c0,.08-.42.4-.42.44s-.23.27-.22.32-.06.24-.09.25c-.03,0-.25-.06-.25-.06,0,0,.06-.38.09-.42.03-.05.1-.25.03-.36-.07-.11-.25-.22-.24-.32s0-.26.04-.25c.05,0,.13.2.22.3.09.1.24.22.24.25s.09.04.17-.06c.07-.1.18-.13.11-.24s-.44-.65-.49-.64c-.05.01-.26-.1-.32,0-.06.1-.35.66-.39.76s-.27.16-.35.03c-.07-.13.05-.26.08-.38.04-.13.28-.52.35-.57.06-.05.38-.48.39-.75,0,0,0-.17-.09-.1-.09.07-.2.41-.48.6-.27.19-.43-.01-.41-.06Z"/><path class="cls-1" d="m5.78,7.33c0-.08.49-.27.58-.08.09.19.05.19-.05.27s-.13.21-.22.15-.32-.21-.31-.34Z"/></g><g><path class="cls-1" d="m9.99,3.77c.06-.03.07-.2.16-.21s.26.07.35.11c.08.04.33.04.31.2s-.15.21-.25.22c-.1.01-.47-.09-.47-.09l-.09-.22Z"/><path class="cls-1" d="m9.99,5.02c.09-.08.35-.23.5,0,.15.23.09.31,0,.29s-.37-.07-.41-.05c-.04.02-.16-.18-.09-.23Z"/><path class="cls-1" d="m10.45,6.76s.05-.24.2-.51c.15-.26.41-.67.41-.67,0,0,.14.15,0,.73s-.13.74-.18.74-.41-.15-.43-.3Z"/><path class="cls-1" d="m11.63,4.08s.38-.76.69-.79c.32-.03.46.13.52.2.06.07-.1.42-.1.59s-.13.55-.11.58c.02.03.08.11.23.15.15.04.38.14.48.16.09.02,1.28.05,1.34.05s.05.16-.09.28c-.14.12-.64.25-.81.27-.17.02-1.17-.39-1.2-.38s-.08-.03-.11.02c-.03.05-.43.63-.47.7-.04.07-.56.51-.66.47-.1-.04.23-.37.31-.46.07-.09.56-.73.56-.83s-.06-.09-.3-.14-.51-.12-.5-.24c.01-.12.27-.22.46-.19.18.03.54.21.54.16s.21-.81.1-1c-.05-.12-.23.05-.23.05l-.42.35s-.19.1-.21,0Z"/></g><g><path class="cls-1" d="m24.64,3.29s-.07-.31.19-.47c.27-.16.28,0,.28,0,0,0,.08.13,0,.32-.08.19-.24.3-.31.3s-.16-.02-.17-.16Z"/><path class="cls-1" d="m25.48,3.1s.14-.04.14,0,.05.16.05.16h.16s-.16.09-.21.18c-.05.09-.17.21-.24.08-.07-.13-.06-.33,0-.35.05-.02.09-.08.09-.08Z"/><path class="cls-1" d="m23.59,3.77s-.04-.37.35-.43c.28,0,.49.16.62.18s.65.13.82.17c.17.04.6.03.89-.13,0,0,.24-.18.3-.06.06.12,0,.27,0,.27,0,0-.43.04-.5.06-.07.03-.08.12-.04.15.05.03.25.14.25.21s.25.6.27.61c.03.02,0,.19,0,.19,0,0-.21-.02-.41-.15s-.4-.19-.43-.19-.02-.06-.02-.06c0,0,.49.05.49-.05s.05-.3-.49-.64c0,0-.72-.15-.8-.15s-.14,0-.14,0c0,0-.28-.11-.37-.11s-.28-.05-.28-.05c0,0-.14-.05-.2,0-.06.05-.21.19-.21.19h-.09Z"/><path class="cls-1" d="m24.97,5.13c-.1-.05-.18-.07-.23-.13s.05-.09.05-.09l.72-.14s-.03-.17-.13-.32c-.1-.15-.26-.27-.33-.28-.07-.02-.27.09-.35.09-.08,0-.27-.03-.27-.03v-.06c-.24,0-.3.19-.3.19,0,0,.12.12.17.1s.12.05.18.12,0,.38,0,.38c0,0-.16-.03-.21-.04-.05-.01-.17-.14-.2-.17-.04-.03-.4-.21-.4-.21,0,0-.2-.14-.28-.04-.08.1.11.23.17.24.05,0,.56.27.66.33.1.06.13.12.11.2-.02.08-.25.28-.29.35-.05.06-.25.12-.3.15-.06.03-.22-.15-.26-.2-.04-.05-.11-.27-.11-.27-.04.04,0,.31,0,.31.04.26.28.53.34.57.05.04.25-.06.29-.13.05-.06.19-.27.23-.32.04-.05.28-.45.33-.49.05-.05.19.08.28.13s.32.27.32.27h.27c.06,0-.06-.18-.09-.21-.02-.03-.27-.24-.37-.29Zm-.17-.69s.26-.06.3-.03c.05.03.05.17.05.17,0,0-.04.1-.1.15s-.26.09-.26.09c0,0-.07-.16-.05-.21.02-.04.05-.17.05-.17Z"/></g><g><path class="cls-1" d="m31.12,7.25c-.05-.03-.16-.27-.22-.29-.06-.02-.15-.03-.26-.2-.11-.17-.25-.14-.28-.11-.04.03-.25.25-.58.48-.3.38-1.19,1-1.26,1.05-.07.06-.33.21-.43.33s-.1.29-.1.29c0,.05.26.1.26.1,0,0,.15-.12.23-.19.09-.08.56-.57.61-.62.05-.05.18-.11.25-.13.07-.01.18.13.18.13l.67.08s.07-.22.02-.34c-.05-.12-.04-.4-.04-.4,0,0,.71.05.88.07s.14-.23.08-.25Zm-1.18.63c-.09.03-.27.08-.27.08,0,0-.12-.04-.15-.02-.04.02-.13-.01-.13-.01,0,0,.31-.27.49-.36,0,0,.09.1.08.13,0,.03.07.15-.02.18Zm.67-.6l-.4-.05.25-.2s.14.1.16.13c.02.03-.01.11-.01.11Z"/><path class="cls-1" d="m30.41,8.24s0-.17.08-.25c.08-.08.16-.15.21-.18.05-.04.14.02.21.02.07,0,.07.07.07.07,0,0,.51.27.58.28.08,0,.15-.28.15-.28,0,0,.17-.14.24.03.07.17,0,.49,0,.49,0,0-.03.14.04.16.06.02.26.74.16.85-.1.11-.18.06-.21.03-.03-.03-.15-.06-.18-.14-.03-.08-.32-.2-.32-.2l.4-.03s.1-.13,0-.23-.24-.31-.42-.43c-.18-.12-.56-.27-.59-.28-.03,0-.08-.03-.08-.03,0,0,0,.09-.05.13-.05.04-.26,0-.26,0Z"/><path class="cls-1" d="m30.43,8.8s.12-.1.22-.08c.1.01.11.12.11.12,0,0,.26-.06.35.04.09.1.14.27.14.27,0,0-.45.01-.51,0-.06-.02-.12-.13-.15-.16s-.17-.08-.15-.18Z"/><path class="cls-1" d="m28.38,9.07s.04-.12.14-.08c.1.04.62.24.75.23.13,0,.4.08.43.05s.17-.05.17-.05l.1-.31s.29-.08.29.03c0,.11.23.16.29.17.05,0,.23.18.24.23s-.02.18-.02.18h-.04s-.12-.13-.15-.13c-.03,0-.31-.01-.31-.01l-.33-.02s-.72-.03-.78-.02c-.06,0-.83-.22-.79-.27Z"/><path class="cls-1" d="m30.04,9.62l.21.02-.12.12s-.23.26-.27.32c-.04.06-.15.32.17.61.32.29.52.29.58.25.06-.04.41-.37.41-.37,0,0-.25.49-.35.63-.09.14-.53.19-.62.09-.09-.1-.55-.8-.56-.89-.01-.09.03-.38.13-.44.09-.06.41-.36.41-.36Z"/></g><g><path class="cls-1" d="m16.39,2.64s-.01-.13,0-.19c.01-.06.13-.12.16-.21.15-.04.3-.02.38,0,.08.02.6-.09.71-.1s.39-.19.48-.19c0,0-.14-.19-.21-.17,0,0-.03-.19.04-.29.07-.1.14-.17.17-.17s.34.31.42.35c.07.04.11.32.11.31s.29-.08.37-.1.64-.05.69-.05.54-.19.56.1c.02.29-.64.26-.64.26l-.55.07-.07.07h-.08l-.16-.02s-.18.09-.22.09-.17-.02-.17-.02c0,0-.54.02-.68.11,0,0-.2.09-.27.07-.07-.02-.67-.02-.69.01-.02.03-.29.15-.34.07Z"/><path class="cls-1" d="m19.21,3.22s-.27-.26-.27-.26h-.16s0-.12.03-.13c.03-.01.24-.08.24-.08,0,0,.04-.33,0-.35-.04-.02-.28,0-.28,0v.1s-.08.08-.15.15c-.07.07-.29.24-.36.28-.06.04-.19.12-.23.16-.04.04-.11,0-.17,0s-.05-.09-.05-.16-.13-.18-.16-.26c-.03-.07-.18.05-.18.05v.22s.2.09.2.17-.18.13-.18.13c0,0-.19.17-.22.2-.03.03-.11.37-.14.59-.03.21-.15.24-.25.49-.1.24,0,.38,0,.38,0,0,.21-.23.22-.27.01-.04.08-.15.08-.15,0,0,.12-.21.12-.25s.17-.19.17-.19c0,0,.02-.63.05-.71.03-.08.21-.07.21-.07v.3s.07.05.16.01c.09-.04.04-.23.04-.23l-.03-.11.24-.04s.11-.08.19-.09c.07-.01-.02.24-.06.26s-.11.12-.17.16c-.06.04-.38.28-.49.43-.1.14.07.26.13.34.06.08.64.05.64.01,0-.04.08-.19.08-.19.12-.08.11-.29.09-.37-.02-.08-.1-.1-.13-.19s-.01-.19.08-.24c.09-.05.11-.19.11-.19.12-.11.23.15.23.15,0,0-.03,1.3-.04,1.35-.01.05-.14.13-.25.12-.11-.01-.19-.13-.28-.15-.09-.02-.04.1-.04.1.27.06.34.26.58.36.24.1.34-.04.34-.12s-.05-1.56-.05-1.56c0,0,.13-.11.11-.15Zm-.94.81c-.05.02-.33.14-.37,0-.04-.15.22-.21.37-.17v.17Z"/></g><g><path class="cls-1" d="m23.85,17.97h.14v-.24h-.25c.03.25.07.48.11.71v-.47Z"/><path class="cls-1" d="m12.69,17.74l-.6,3.55-.59-3.3h.25v-.25h-1.33v.26h.28l.85,3.7h.91c.33-1.42.58-2.76.75-3.96h-.52Z"/><path class="cls-1" d="m24.57,21.17c-.05,0-.14-.01-.23-.04.04.21.09.41.13.61.03,0,.06,0,.09,0,.6,0,1.05-.15,1.34-.46.38-.39.36-.91.36-.91v-2.4s.19,0,.19,0v-.24h-1.32v.24h.13v2.39c0,.64-.44.81-.69.81Z"/><path class="cls-1" d="m18.42,5.69c-7.03,0-12.73,5.7-12.73,12.73s5.7,12.73,12.73,12.73,12.73-5.7,12.73-12.73-5.7-12.73-12.73-12.73Zm8.35,12.6h-.19v2.08s.02.65-.45,1.14c-.36.37-.88.56-1.57.56,0,0,0,0-.01,0,.63,2.71,1.26,4.21,1.26,4.21h-5.08c-.72-1.32-.98-3.57-.98-3.57h-2.62c-.26,2.47-.93,3.56-.93,3.56h-5.05c.52-1.47.93-2.9,1.25-4.25h-1.09l-.85-3.7h-.35v-.89h1.96v.89h-.19l.2,1.14.34-2.02h.84c.49-3.51.4-5.84.4-5.84h2.83l-.36-2.65h4.64l-.36,2.65h2.85c.05,2.16.23,4.1.46,5.83h.61v.87h-.14v2.02c.02.13.05.24.07.37.03.05.05.09.09.12.09.06.19.06.21.06.14,0,.4-.05.4-.49v-2.08h-.13v-.87h1.95v.87Z"/></g><path class="cls-1" d="m20.79,19.59c.2-.11.47-.37.45-.93-.04-1.06-1.16-1.09-1.18-1.09h-3.12v1.2h.5v1.9h-.5v1.17h3.14s1.25-.1,1.25-1.26c0-.59-.33-.88-.54-1Zm-.81-.6c0,.15-.03.27-.11.35-.08.09-.19.09-.22.09h-.89v-.88h.86s.34.01.35.44Zm-.02,1.78c-.09.09-.21.1-.24.1h-.95v-.88h.93s.36.01.37.44c0,.15-.03.26-.11.34Z"/><polygon class="cls-1" points="10.26 17.58 10.26 18.16 10.58 18.16 11.43 21.85 12.62 21.85 13.03 19.88 13.47 21.85 14.64 21.85 15.52 18.16 15.81 18.16 15.81 17.58 14.14 17.58 14.14 18.14 14.38 18.14 13.98 20.35 13.55 17.58 12.56 17.58 12.08 20.36 11.69 18.15 11.91 18.15 11.91 17.58 10.26 17.58"/><path class="cls-1" d="m26.61,18.13v-.55h-1.64v.55h.13v2.24c0,.68-.55.65-.55.65,0,0-.55.03-.55-.65v-2.24h.14v-.55h-1.64v.55h.17v2.24s-.06,1.54,1.87,1.54,1.87-1.54,1.87-1.54v-2.24h.19Z"/></g></g><text class="cls-2" transform="translate(152.33 23.91)"><tspan x="0" y="0">教学一体化服务平台</tspan></text><rect class="cls-1" x="142.12" y=".05" width="3.53" height="36.84"/></g></g></svg>`;
    }
    //成绩查询
    if(document.location.href.includes("cjcx_list")){
        const list_display_icon = `<path d="M781.8 283.8H408.3c-11.5 0-20.8 9.3-20.8 20.8s9.3 20.8 20.8 20.8h373.5c11.5 0 20.8-9.3 20.8-20.8-0.1-11.6-9.4-20.8-20.8-20.8z" p-id="1899" fill="#ffffff"></path><path d="M802.5 97h-581C153 97 97 153 97 221.5v581C97 871 153 927 221.5 927h581C871 927 927 871 927 802.5v-581C927 153 871 97 802.5 97z m83 705.5c0 45.8-37.2 83-83 83h-581c-45.8 0-83-37.2-83-83v-581c0-45.8 37.2-83 83-83h581c45.8 0 83 37.2 83 83v581z" p-id="1900" fill="#ffffff"></path><path d="M263 304.5m-41.5 0a41.5 41.5 0 1 0 83 0 41.5 41.5 0 1 0-83 0Z" p-id="1901" fill="#ffffff"></path><path d="M781.8 491.3H408.3c-11.5 0-20.8 9.3-20.8 20.8s9.3 20.8 20.8 20.8h373.5c11.5 0 20.8-9.3 20.8-20.8-0.1-11.6-9.4-20.8-20.8-20.8z" p-id="1902" fill="#ffffff"></path><path d="M263 512m-41.5 0a41.5 41.5 0 1 0 83 0 41.5 41.5 0 1 0-83 0Z" p-id="1903" fill="#ffffff"></path><path d="M781.8 698.8H408.3c-11.5 0-20.8 9.3-20.8 20.8s9.3 20.8 20.8 20.8h373.5c11.5 0 20.8-9.3 20.8-20.8-0.1-11.6-9.4-20.8-20.8-20.8z" p-id="1904" fill="#ffffff"></path><path d="M263 719.5m-41.5 0a41.5 41.5 0 1 0 83 0 41.5 41.5 0 1 0-83 0Z" p-id="1905" fill="#ffffff"></path>`;
        var subject_info = [];
        var semester_list = [];
        var selected_semesters = [];
        let simGrid = document.createElement("div");
        simGrid.className = "SimGrid";
        let buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");
        buttonsDiv.appendChild(document.querySelector(".button#btn_back"));
        let icon_btn = document.createElement("button");
        icon_btn.innerHTML = `<svg t="1720352304894" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6160" width="22" height="22" style="margin-left: 5px;">`+list_display_icon+`</svg><span style="font-size: 1rem;">列表显示</span>`;
        icon_btn.classList.add("icon_btn");
        icon_btn.classList.add("button");
        icon_btn.addEventListener("click",()=>{
            if(icon_btn.querySelector("span").innerText == "网格显示"){
                if(!document.querySelector("#SimPage")){
                    document.querySelector(".SimGrid").classList.add("display_none");
                    document.querySelector("#dataList").classList.remove("display_none");
                }
                icon_btn.querySelector("svg").innerHTML = list_display_icon;
                icon_btn.querySelector("span").innerText = "列表显示";
            }else{
                if(!document.querySelector("#SimPage")){
                    document.querySelector(".SimGrid").classList.remove("display_none");
                    document.querySelector("#dataList").classList.add("display_none");
                }
                icon_btn.querySelector("svg").innerHTML=`<path d="M454.4 102.4H160a57.664 57.664 0 0 0-57.6 57.6v294.4a57.664 57.664 0 0 0 57.6 57.6h294.4a57.664 57.664 0 0 0 57.6-57.6V160a57.664 57.664 0 0 0-57.6-57.6z m6.4 352a6.4 6.4 0 0 1-6.4 6.4H160a6.4 6.4 0 0 1-6.4-6.4V160a6.4 6.4 0 0 1 6.4-6.4h294.4a6.4 6.4 0 0 1 6.4 6.4z m454.4-352H620.8a57.664 57.664 0 0 0-57.6 57.6v294.4a57.664 57.664 0 0 0 57.6 57.6h294.4a57.664 57.664 0 0 0 57.6-57.6V160a57.664 57.664 0 0 0-57.6-57.6z m6.4 352a6.4 6.4 0 0 1-6.4 6.4H620.8a6.4 6.4 0 0 1-6.4-6.4V160a6.4 6.4 0 0 1 6.4-6.4h294.4a6.4 6.4 0 0 1 6.4 6.4zM454.4 563.2H160a57.664 57.664 0 0 0-57.6 57.6v294.4a57.664 57.664 0 0 0 57.6 57.6h294.4a57.664 57.664 0 0 0 57.6-57.6V620.8a57.664 57.664 0 0 0-57.6-57.6z m6.4 352a6.4 6.4 0 0 1-6.4 6.4H160a6.4 6.4 0 0 1-6.4-6.4V620.8a6.4 6.4 0 0 1 6.4-6.4h294.4a6.4 6.4 0 0 1 6.4 6.4z m454.4-352H620.8a57.664 57.664 0 0 0-57.6 57.6v294.4a57.664 57.664 0 0 0 57.6 57.6h294.4a57.664 57.664 0 0 0 57.6-57.6V620.8a57.664 57.664 0 0 0-57.6-57.6z m6.4 352a6.4 6.4 0 0 1-6.4 6.4H620.8a6.4 6.4 0 0 1-6.4-6.4V620.8a6.4 6.4 0 0 1 6.4-6.4h294.4a6.4 6.4 0 0 1 6.4 6.4z" fill="#ffffff" p-id="4919"></path>`;
                icon_btn.querySelector("span").innerText = "网格显示";
            }
        });
        let calc_ui_btn = document.createElement("button");
        calc_ui_btn.innerHTML=`<svg t="1720522001969" class="icon" style="margin-left: 5px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10291" width="19" height="19"><path d="M800.581818 1024H223.418182C97.745455 1024 0 926.254545 0 800.581818V223.418182C0 97.745455 97.745455 0 223.418182 0h581.818182C926.254545 0 1024 97.745455 1024 223.418182v581.818182c0 121.018182-97.745455 218.763636-223.418182 218.763636zM223.418182 69.818182C139.636364 69.818182 69.818182 139.636364 69.818182 223.418182v581.818182c0 83.781818 69.818182 148.945455 148.945454 148.945454h581.818182c83.781818 0 148.945455-69.818182 148.945455-148.945454V223.418182c0-83.781818-69.818182-148.945455-148.945455-148.945455H223.418182z" fill="#ffffff" p-id="10292"></path><path d="M423.563636 330.472727H335.127273V246.690909c0-13.963636-9.309091-27.927273-23.272728-27.927273h-4.654545c-13.963636 0-27.927273 13.963636-27.927273 27.927273v83.781818H195.490909c-13.963636 0-23.272727 9.309091-23.272727 23.272728v4.654545c0 13.963636 9.309091 23.272727 23.272727 23.272727H279.272727V465.454545c0 13.963636 9.309091 23.272727 23.272728 23.272728h4.654545c13.963636 0 23.272727-9.309091 23.272727-23.272728V386.327273h83.781818c13.963636 0 23.272727-9.309091 23.272728-23.272728v-4.654545c9.309091-13.963636 0-27.927273-13.963637-27.927273zM418.909091 586.472727c-13.963636-13.963636-27.927273-13.963636-37.236364-4.654545l-60.509091 60.509091-60.509091-60.509091c-9.309091-9.309091-27.927273-9.309091-37.236363 0l-4.654546 4.654545c-9.309091 9.309091-9.309091 27.927273 0 37.236364L279.272727 684.218182 218.763636 744.727273c-9.309091 9.309091-9.309091 27.927273 0 37.236363l4.654546 4.654546c9.309091 9.309091 27.927273 9.309091 37.236363 0l60.509091-60.509091 60.509091 60.509091c9.309091 9.309091 27.927273 9.309091 37.236364 0v-4.654546c9.309091-9.309091 9.309091-27.927273 0-37.236363l-60.509091-60.509091L418.909091 623.709091c13.963636-9.309091 13.963636-23.272727 0-37.236364zM823.854545 311.854545h-228.072727c-13.963636 0-23.272727 9.309091-23.272727 23.272728v4.654545c0 13.963636 9.309091 23.272727 23.272727 23.272727h228.072727c13.963636 0 23.272727-9.309091 23.272728-23.272727v-4.654545c0-13.963636-9.309091-23.272727-23.272728-23.272728zM823.854545 665.6h-228.072727c-13.963636 0-23.272727 9.309091-23.272727 23.272727v9.309091c0 13.963636 9.309091 23.272727 23.272727 23.272727h228.072727c13.963636 0 23.272727-9.309091 23.272728-23.272727v-4.654545c0-13.963636-9.309091-27.927273-23.272728-27.927273zM660.945455 614.4c0 18.618182 18.618182 37.236364 37.236363 37.236364s37.236364-18.618182 37.236364-37.236364-18.618182-37.236364-37.236364-37.236364c-23.272727 0-37.236364 18.618182-37.236363 37.236364zM660.945455 791.272727c0 18.618182 18.618182 37.236364 37.236363 37.236364s37.236364-18.618182 37.236364-37.236364-18.618182-37.236364-37.236364-37.236363c-23.272727 4.654545-37.236364 18.618182-37.236363 37.236363z" fill="#ffffff" p-id="10293"></path></svg><span style="font-size: 1rem;">综测成绩计算器</span>`;
        calc_ui_btn.classList.add("button");
        calc_ui_btn.classList.add("calc_ui_btn");
        calc_ui_btn.addEventListener("click",()=>{
            document.querySelector(".mask").classList.remove("display_none");
            document.querySelector("#SimUI").classList.remove("display_none");
            document.body.style.setProperty("overflow","hidden");
        });
        buttonsDiv.appendChild(icon_btn);
        buttonsDiv.appendChild(calc_ui_btn);
        document.querySelector(".Nsb_r_title").after(buttonsDiv);
        document.querySelectorAll("td a[style][href]").forEach((e)=>{
            let subject = {};
            e.addEventListener("click",()=>{
                window.sessionStorage.setItem("targetSubject",e.parentElement.previousElementSibling.innerText);
                window.sessionStorage.setItem("subjectStatus",e.innerText);
            })
            subject.title = e.parentElement.previousElementSibling.innerText;
            subject.id = e.parentElement.previousElementSibling.previousElementSibling.innerText;
            subject.score = e.innerText;
            subject.credit = e.parentElement.nextElementSibling.innerText;
            subject.time = e.parentElement.nextElementSibling.nextElementSibling.innerText;
            subject.type = e.parentElement.parentElement.lastElementChild.previousElementSibling.innerText;
            subject.semester = e.parentElement.parentElement.children[1].innerText;
            let JsModData = e.href.slice(e.href.indexOf("JsMod")+7,e.href.indexOf("%27"));
            if(!semester_list.includes(subject.semester)){
                semester_list.push(subject.semester);
            }
            subject_info.push(subject);
            simGrid.appendChild(create_grid(subject.title,subject.score,subject.time,subject.id,subject.credit,subject.type,JsModData));
        });
        //debug info
            // console.log(subject_info);
            // console.log(semester_list);
        document.querySelector("table#dataList").after(simGrid);
        if(document.querySelector(".icon_btn span").innerText=="列表显示"){
            simGrid.classList.add("display_none");
        }
        setup_SimUI();
    }
    //setup table round corner
    if(document.getElementsByClassName("Nsb_table")[0]){
        let table = document.getElementsByClassName("Nsb_table");
        let length = table.length;
        if(!document.getElementById("kbtable")){
            for(let i=1;i<=length;i++){
                if(table[i-1].border == '1'){
                    table[i-1].border = '0';
                }
                let tr = table[i-1].getElementsByTagName("tr");
                let th = tr[0].children;
                if(!document.getElementsByClassName("Nsb_r_list_thb")[0]&&th.legnth==1){
                    th[0].classList.add("Nsb_r_list_thb");
                }
                th[0].classList.add("thb_t_l");
                th[th.length-1].classList.add("thb_t_r");

                let tr_c = tr[tr.length-1].children;
                if(tr_c[0].tagName == "TD"){
                    tr_c[0].classList.add("thb_b_l");
                    tr_c[tr_c.length-1].classList.add("thb_b_r");
                }
            }
        }
    }
    if(document.location.href.includes("pscj_list.do")){
        document.querySelector(".toolstitle").innerText = "《"+window.sessionStorage.getItem("targetSubject") +"》"+ document.querySelector(".toolstitle").innerText;
        if(isNaN(window.sessionStorage.getItem("subjectStatus"))){
            document.querySelector(".thb_b_r").innerText = window.sessionStorage.getItem("subjectStatus");
        } 
    }
    function create_grid(title,score,time,id,credit,type,JsModData){
        let grid_item = document.createElement("div");
        grid_item.className = "grid";
        let top = document.createElement("div");
        let bottom = document.createElement("div");
        top.innerHTML = `<div class="top"><div class="title">`+title+`</div><div class="score">`+score+`</div></div>`;
        bottom.innerHTML = `<div class="bottom">
                        <div class="credit sub">
                            <div class="text">学分</div>
                            <div class="text">`+credit+`</div>
                        </div>
                        <div class="id sub">
                            <div class="text">课程编号</div>
                            <div class="text">`+id+`</div>
                        </div>
                        <div class="time sub">
                            <div class="text">总学时</div>
                            <div class="text">`+time+`</div>
                        </div>
                        <div class="type sub">
                            <div class="text">类型</div>
                            <div class="text">`+type+`</div>
                        </div>
                    </div>`;
        if(title.length>=15){
            top.querySelector(".top .title").classList.add("wide");
            grid_item.onmouseenter=function(){
                const extra = 20 - (title.length-15-2);
                document.documentElement.style.setProperty("--title-extra-length",extra+"rem");
                grid_item.classList.add("hover");
            };
            grid_item.onmouseleave=function(){
                grid_item.classList.remove("hover");
            };
        }
        grid_item.appendChild(top);
        grid_item.appendChild(bottom);
        grid_item.addEventListener("click",()=>{
            window.sessionStorage.setItem("targetSubject",grid_item.querySelector(".title").innerText);
            window.sessionStorage.setItem("subjectStatus",grid_item.querySelector(".score").innerText);
            JsMod(JsModData);
        });
        return grid_item;
    }
    function setup_SimUI(){
        let SimUI = document.createElement("div");
        SimUI.id = "SimUI";
        SimUI.classList.add("display_none");
        SimUI.innerHTML = `<div class="top"><div class="title">综测成绩计算器</div><button class="close_btn button">×</button></div><div class="desc">用于计算选定学期的综测分数</div>`;
        let pickPanel = special_div_create("pickPanel","<span>请勾选需要进行计算的学期</span>");
        SimUI.appendChild(pickPanel);
        semester_list.forEach((e)=>{
            pickPanel.appendChild(create_semester_pick(e));
        });
        let mask = document.createElement("div");
        mask.className = "mask";
        mask.classList.add("display_none");
        let scorePanel = document.createElement("div");
        scorePanel.className = "scorePanel";
        let calc_btn = document.createElement("button");
        calc_btn.innerText = "计算";
        calc_btn.className = "button";
        calc_btn.addEventListener("click",()=>{
            if(!pickPanel.querySelector("svg.checked")){
                window.alert("请选择要计算的学期！");
            }else{
                selected_semesters = [];
                pickPanel.querySelectorAll("svg.checked").forEach((e)=>{
                    selected_semesters.push(e.parentElement.querySelector(".semester").innerText);
                });
                console.log(selected_semesters);
                const filtered_subjects = subject_info.filter((e)=>{
                    return selected_semesters.includes(e.semester);
                });
                console.log(filtered_subjects);
                let semesters_text = "";
                for(let i=1;i<=selected_semesters.length;i++){
                    semesters_text += selected_semesters[i-1];
                    if(i<selected_semesters.length){
                        semesters_text += "，";
                    }
                }
                console.log(semesters_text+"学期综测分数："+calculate(filtered_subjects));
                scorePanel.innerHTML = "<span>"+semesters_text+"</span><span>学期综测分数：</span><div class='score'>"+calculate(filtered_subjects).toFixed(2)+"</div>";
                calc_btn.classList.add("display_none");
                pickPanel.classList.add("display_none");
                SimUI.appendChild(scorePanel);
            }
        });
        SimUI.appendChild(calc_btn);
        SimUI.querySelector(".close_btn").addEventListener("click",()=>{
            SimUI.classList.add("display_none");
            mask.classList.add("display_none");
            document.body.style.removeProperty("overflow");
            if(calc_btn.classList.contains("display_none")||pickPanel.classList.contains("display_none")){
                calc_btn.classList.remove("display_none");
                pickPanel.classList.remove("display_none");
                scorePanel.remove();
            }
        });
        document.querySelector(".SimGrid").after(SimUI);
        SimUI.after(mask);
    }
    function special_div_create(className,innerHTML){
        let div = document.createElement("div");
        div.className = className;
        div.innerHTML = innerHTML;
        return div;
    }
    function create_semester_pick(semester){
        const checkbox_icon = `<path d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-85.333334a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z" p-id="4942" fill="#ffffff"></path>`;
        let semester_pick = document.createElement("div");
        semester_pick.className = "semester_pick";
        let semester_text = document.createElement("div");
        semester_text.className = "semester";
        semester_text.innerText = semester;
        semester_pick.innerHTML = `<svg t="1720512177671" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4233" width="30" height="30">`+checkbox_icon+`</svg>`;
        semester_pick.appendChild(semester_text);
        semester_pick.querySelector("svg").addEventListener("click",(s)=>{
            if(s.target.classList.contains("checked")){
                s.target.innerHTML = checkbox_icon;
                s.target.classList.remove("checked");
            }else{
                s.target.innerHTML = `<path d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-85.333334a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m-42.538667-170.666666L288.426667 501.632l60.330666-60.330667 120.704 120.704 241.322667-241.365333 60.373333 60.330667L469.461333 682.666667z" p-id="4628" fill="#ffffff"></path>`;
                s.target.classList.add("checked");
            }
        });
        return semester_pick;
    }
    function scoreProcess(score){
        if(parseFloat(score)){
            score = parseFloat(score);
        }else{
            switch(score){
                case "优": score = 90; break;
                case "良": score = 80; break;
                case "中": score = 70; break;
                case "及格": score = 60; break;
                case "不及格": score = 40; break;
                case "0": score = 0; break;
            }
        }
        return score;
    }
    function calculate(data){
        let temp = 0,gpa = 0,totalCredits= 0;
        for(var num in data){
            if(parseFloat(data[num].credit)!=0){
                totalCredits += parseFloat(data[num].credit);
                temp += parseFloat(data[num].credit)*scoreProcess(data[num].score);
            }
        }
        gpa=(temp/totalCredits)*0.7;
        return gpa;
    }
    //修复评教页面宽度不为100%
    document.body.style.width = "-webkit-fill-available";
    //去除前后方括号
    if(document.querySelector("td a[href]")){
        document.querySelectorAll("td a[href]").forEach(function(e){
            if(e.previousSibling){
                if(e.previousSibling.nodeValue){
                    let value = e.previousSibling.nodeValue.replaceAll("\t","");
                    value = value.replaceAll("\n","");
                    value = value.replaceAll(" ","");
                    if(value=="["){
                        e.previousSibling.remove();
                    }
                }
            }
            if(e.nextSibling){
                if(e.nextSibling.nodeValue){
                    let value = e.nextSibling.nodeValue.replaceAll("\t","");
                    value = value.replaceAll("\n","");
                    value = value.replaceAll(" ","");
                    if(value=="]["){
                        e.nextSibling.after(document.createElement("br"));
                        e.nextSibling.remove();
                    }
                    if(value=="]"||e.nextSibling.nodeValue=="]\n\t\t\t\t\n\t\t\t\t"){
                        e.nextSibling.remove();
                    }
                }
            }
        })
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
    function foolsdayFunc(){
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth()+1;
        const day = now.getDay();
        const studentNum = "2"+year.toString()+"0401";
        if(month==4&&day==1){
            document.querySelector("div#Top1_divLoginName").innerText = "喻仁洁("+studentNum+")";
            if(document.querySelector(".block1text")){
                document.querySelector(".block1text").innerText = "姓名：喻仁洁\n学号："+studentNum+"\n";
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
        while(hue_list.includes(hue)){
            hue = getRandomIntInclusive(0,360);
            if(!hue_list.includes(hue)) break;
        }
        hue_list.push(hue);
        let sat = getRandomIntInclusive(85,100);
        let light = getRandomIntInclusive(38,42);
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
                kbcontent[kbcontent.length-1].style.margin = "0px";
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
                SimStacked(SimStack[i-1]);
            }else if(this.getAttribute('stacked')=='false'){
                this.style.cssText += "box-shadow: 3px 3px 0px 1px "+hslDarker+", 7px 7px 0px 1px "+hslDarker2;
                SimStack[i-1].setAttribute('stacked','true');
                SimStacked(SimStack[i-1]);
            }
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
        SimScaleInput.value='0.9';
        SimScaleInput.addEventListener("change", valueSync);
        $("#kbtable")[0].style.setProperty('transform','scale(0.9)');
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
    function scheduleDaysDivision(){
        let colSpan = 0;
        document.querySelectorAll("#kbtable th").forEach((e)=>{
            if(e.cellIndex<e.parentElement.childElementCount-1){
                colSpan += e.colSpan;
            }
            document.querySelectorAll("tr").forEach((tr)=>{
                if(tr.rowIndex>0&&colSpan>1){
                    tr.children[colSpan-1].style["border-right"] = "dotted 0.2rem var(--primary-theme-color)";
                }
            });
        })
    }
    function ctrlButtonSetup(){
        document.querySelectorAll("#kbtable th").forEach((e)=>{
            if(e.innerText.includes("星期")){
                e.addEventListener("click",((day)=>{
                    day = day.currentTarget;
                    if(day.cellIndex>=1){
                        let startIndex = (day.cellIndex-1)*day.colSpan + 1;
                        let endIndex = startIndex + day.colSpan - 1;
                        day.classList.toggle("display_none");
                        document.querySelectorAll("#kbtable tr").forEach((tr)=>{
                            for(let i = startIndex;i<=endIndex;i++){
                                if(tr.children[i].nodeName == "TD"){
                                    tr.children[i].classList.toggle("display_none");
                                }
                            }
                        });
                    }
                }));
            }
        });
    }
    if($(".kbcontent1")[0]){
        let kbcontent,kbcontent1;
        var kbsort = new Array();
        var hue_list = [];
        if(!$(".Nsb_layout_r")[0]){
            let classLists_eg = document.createElement("div");
            classLists_eg.className = "classLists";
            let classLists,tempJson,hslDarker;
            let tr = $("#kbtable")[0].getElementsByTagName("tr");
            let th = tr[0].children;
            let length = th.length;
            let tr_length = tr.length;
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
                    if(similarity>2){
                        if(!kbsort[kbc1Children[initalIndex].childNodes[0].data]){
                            kbsort[kbc1Children[initalIndex].childNodes[0].data] = randomColorPick();
                        }
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
            scheduleDaysDivision();
            // ctrlButtonSetup();
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
        for(let i=1;i<length;i++){
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
            //main page info fix
    if(document.getElementsByClassName("Nsb_pw")[2]&&document.getElementById("btn_back")&&document.location.href.includes("cjcx_list")){
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
        document.querySelector("div.buttons").after(div);
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
        let button = document.getElementsByClassName("button");
        if(button[0].attributes.onclick){
            if((button[0].attributes.onclick.value.includes("JsMod"))&&(button.length==1)){
                button[0].classList.add("centerButton");
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
    document.querySelectorAll("head script[language=javascript]").forEach((e)=>{
        if(e.innerHTML.search("window.close()") != -1&&e.id==''){
            console.log("window.close() func detected!");
            closeIframe();
        }
    });
    if(!$("head")[0]){
        window.parent.$("#fcenter")[0].remove();
    }
    //SimPage iframe
    if($(".toolbar")[0]){
        $(".toolbar")[0].remove();
        if($("textarea").length<2&&$("textarea")[0]){
            $("table")[0].className = "textform";
        }
    }
    if(document.querySelector(".toolstitle")){
        if(!document.querySelector("table#dataList")){
            if(document.querySelector("input")){
                waitForLoading(".button").then(()=>{
                    let button = document.querySelectorAll(".button");
                    button.forEach((e)=>{
                        if(e.attributes.onclick.value.indexOf("window.close()")!=-1){
                            e.attributes.removeNamedItem("onclick");
                            e.addEventListener("click", closeIframe);
                        }
                    })
                });
            }
        }
    }
    async function waitForLoading(targetSelector){
        while(true){
            if(document.querySelector(targetSelector)) break;
        }
    }
    function homePageSizeOptimizer(){
        window.addEventListener("resize",resizeRate);
    }
    function resizeRate(){
        let scale = document.querySelector("div#divFirstMenuClass ul").clientWidth/document.querySelector("body div.wap").clientWidth;
        if(scale>1.35){
            scale = 1.35;
        }
        document.querySelector("body div.wap").style.zoom = scale;
    }
    //setup homepage icons
    if(document.getElementsByClassName("block1")[0]){
        GM_addStyle(GM_getResourceText("icon"));
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
        resizeRate();
        homePageSizeOptimizer();
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
    foolsdayFunc();
    //add title for hide names func
    if(document.getElementById("Footer1_divCopyright")){
        let footer = document.getElementById("Footer1_divCopyright");
        footer.className = "";
        footer.style = "";
        // let info = document.createElement("div");
        // info.innerHTML = "Beautified with <span class='heart'>❤</span><span class='info'> by Simprole</span>"
        // info.className = "info";
        // footer.appendChild(info);
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
        if(table.parentElement.tagName!=="BODY"){
            rateOptimize();
        } 
        svgReplacement(table);
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