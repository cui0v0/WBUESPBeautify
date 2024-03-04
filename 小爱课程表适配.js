/**
 * ====================================================
 * 项目：小爱课程表导入适配
 * by：QQ76884259
 * Copyright 2020-2021 Pzd
 * ====================================================
 */

/**
 * @param {Object} iframeContent
 * @param {Object} frameContent
 * @param {Object} dom
 * 小爱课程表获取页面HTML入口。
 */
function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document){
	let html = "";
	
	html = getData(dom);
	
	//小一个版本添加HTML方式解析。
	//html = getHtml();
	
	return html;
};

/**
 * 通过请求获取数据。
 */
function getData(dom = document){
	if(!dom)
		return "";
	let kbtable = dom.querySelector("#kbtable");
	if(!kbtable)
		return "";
	if(!kbtable.rows)
		return "";
	let rows = kbtable.rows;
	let arr = [];
	for(let i=0;i<rows.length;i++){
		if(!rows[i] || !rows[i].cells || rows[i].cells.length > 8)
			continue;
		let cells = rows[i].cells;
		let sections;//当前节
		for(let j=0;j<cells.length;j++){
			if(!cells[j])
				continue;
			if(cells[j].nodeName == "TH"){
				sections = getSection(cells[j].innerText);
				continue;
			}
			if(!sections)
				continue;
			let jx0415zbdiv_2 = cells[j].querySelector('[name="jx0415zbdiv_2"]');
			if(!jx0415zbdiv_2 || !jx0415zbdiv_2.value)
				continue;
			let div2Value = jx0415zbdiv_2.value;
			let kbcontent = dom.getElementById(div2Value);
			if(!kbcontent)
				continue;
			conCourseInfos(arr,kbcontent.innerHTML,j,sections);
		}
		
	}
	return JSON.stringify(arr);
}
/**
 * @param {Object} str
 * 删除HTML标签->删除所有空格。
 */
function delHtmlAndTrimAll(str){
	return trimAll(delHtml(str));
};
/**
 * @param {Object} str
 * 删除全部空格。
 */
function trimAll(str){
	if(!str)
		return "";
	if(typeof str !== "string")
		str = str + "";
	return str.replace(/[\s\n\t]+/gim,"");
};
/**
 * @param {Object} str
 * 删除所有HTML标签。
 */
function delHtml(str){
	if(!str)
		return "";
	if(typeof str !== "string")
		str = str + "";
	return htmlDecode(str.replace(/<[^>]+>/gim,""));
};

/**
 * @param {Object} str
 * 删除书名号。
 */
function delBookTitle(str){
	if(!str)
		return "";
	if(typeof str !== "string")
		str = str + "";
    return str.replace(/&lt;/gim,"")
				.replace(/&gt;/gim,"")
				.replace(/</gim,"")
				.replace(/>/gim,"");
};

/**
 * @param {Object} str
 * HTML反转义。
 */
function htmlDecode(str){
	if(!str)
		return "";
	if(typeof str !== "string")
		str = str + "";
	return str.replace(/&lt;/gim,"<")
				.replace(/&gt;/gim,">")
				.replace(/&quot;/gim,"\"")
				.replace(/&amp;/gim,"&")
				.replace(/&nbsp;/gim,"");
				
};

/**
 * @param {Object} range
 * 通过一个字符串描述生成对应的范围数组。
 */
function strRangeToArr(range){
	let arr = [];
	if(!range)
		return arr;
	//替换掉一些中文符号，方便处理。
	range = range.replace(/、/gim,",");
	//全角符转半角符
	range = toSBC(range);
	//可能的范围的分割符号
	let sp = [',','|','\\','/',';'];
	let arrTemp = [];
	for(let i=0;i<sp.length;i++){
		let rangeArr = range.split(sp[i]);
		for(let j=0;j<rangeArr.length;j++){
			if(!indexOfArr(rangeArr[j],sp))
				addRange(rangeArr[j],arrTemp);
		};
	};
	//去了重复的
	arrTemp = intUnique(arrTemp);
	//排序
	arrTemp = arrTemp.sort(function(a,b){ return a-b; });
	for(let i=0;i<arrTemp.length;i++){
		arr.push(arrTemp[i]);
	};
	return arr;
};

/**
 * @param {Object} week
 * @param {Object} arr
 * 添加一个范围。
 */
function addRange(range,arr){
	if(!arr)
		arr = [];
	if(!range)
		return arr;
	let spArr = [];
	range = getText(range);
	if(range.indexOf("--") != -1){
		spArr = range.split("--");
	}else if(range.indexOf("~~") != -1){
		spArr = range.split("~~");
	}else if(range.indexOf("至") != -1){
		spArr = range.split("至");
	}else if(range.indexOf("到") != -1){
		spArr = range.split("到");
	}else if(range.indexOf("-") != -1){
		spArr = range.split("-");
	}else if(range.indexOf("~") != -1){
		spArr = range.split("~");
	}else{
		spArr = null;
	};
	if(spArr && spArr.length > 1){
		let parity = 0;
		if(range.indexOf("单") != -1){
			parity = -1;
		}else if(range.indexOf("双") != -1){
			parity = 1;
		};
		
		let startT = spArr[0];
		let endT = spArr[1];
		if(startT && endT)
			addRangeStartEnd(startT,endT,parity,arr);
	}else{
		if(range.indexOf("单") != -1){
			//这里要拿到本学期最大周才能处理，下一个版本优化
			
		}else if(range.indexOf("双") != -1){
			//这里要拿到本学期最大周才能处理，下一个版本优化
			
		}else{
			let tempNu = getInt(range);
			if(tempNu)
				arr.push(tempNu);
		};
	};
	return arr;
};

/**
 * @param {Object} str
 * 获取整数
 * 删除所有HTML标签->删除所有空格->转整数。
 */
function getInt(str){
	return strParseInt(delHtmlAndTrimAll(str));
};

/**
 * @param {Object} str
 * @param {Object} p
 * 取字符串中整数。
 */
function strParseInt(str,p){
	if(!str)
		return null;
	let s = str.match(/([0-9]+)/gim);
	if(!s)
		return null;
	let k = parseInt(p);
	if(!k || k > s.length)
		k = 1;
	for(let i=0;i<s.length;i++){
		let j = parseInt(s[i]);
		if(j && i==k-1)
			return j;
	};
	return null;
};

/**
 * @param {Object} start
 * @param {Object} end
 * @param {Object} parity
 * -1:奇数
 * 0:全部
 * 1:偶数
 * @param {Object} arr
 */
function addRangeStartEnd(start,end,parity,arr){
	if(!arr)
		arr = [];
	start = getInt(start);
	end = getInt(end);
	if(!start || !end)
		return arr;
	for(let i=start;i<end+1;i++){
		if(parity == -1 && i % 2 !=0){
			arr.push(i);
		}else if(parity == 1 && i % 2 ==0){
			arr.push(i);
		}else if(parity == 0){
			arr.push(i);
		};
	};
	return arr;
};

/**
 * @param {Object} arr
 * 整数数组去重复。
 */
function intUnique(arr){
	if(!arr)
		return [];
	let tempArr = [];
	for(let i=0;i<arr.length;i++){
		if(-1 == tempArr.indexOf(arr[i]))
			tempArr.push(arr[i]);
	};
	return tempArr;
};

/**
 * @param {Object} str
 * @param {Object} arr
 * 判断一组字符串数组是否在某个字符串中存在。
 */
function indexOfArr(str,arr){
	if(!str || !arr)
		return false;
	for(let i =0;i<arr.length;i++){
		if(-1 != str.indexOf(arr[i]))
			return true;
	};
	return false;
};

/**
 * @param {Object} str
 * 字符串全角符转换半角符。
 */
function toSBC(str){
	if(!str)
		return "";
	let result = "";
	let len = str.length;
	for(let i=0;i<len;i++){
		let charCode = str.charCodeAt(i);
		//全角与半角相差（除空格外）相差0xFEE0（十进制65248）
		charCode = (charCode>=0xFF01 && charCode<=0xFF5E)? (charCode - 0xFEE0) : charCode;
		//处理空格
		//charCode = (charCode==0x03000)? 0x0020 : charCode;
		//result += String.fromCharCode(charCode);
		//这里删除所有空格
		result += (charCode==0x03000 || charCode==0x0020)? '' : String.fromCharCode(charCode);
	};
	return result;
};

/**
 * @param {Object} str
 * 处理文本。
 */
function getText(str){
	return delHtmlAndTrimAll(str);
};

function conCourseInfos(arr,str,j,sections){
	if(!str)
		return null;
	let splitStr = str.split("---------------------<br>");
	if(!splitStr)
		return null;
	for(let i=0;i<splitStr.length;i++){
		if(!splitStr[i])
			continue;
		let splitTemp = splitStr[i].split("<br>");
		if(!splitTemp || splitTemp.length < 4)
			continue;
		let name = delHtmlAndTrimAll(splitTemp[0]);
		if(!name)
			continue;
		let teacher = delHtmlAndTrimAll(splitTemp[1]);
		let weekStr = delHtmlAndTrimAll(splitTemp[2]);
		let weeks = strRangeToArr(weekStr);
		if(!weeks)
			continue;
		let position = delHtmlAndTrimAll(splitTemp[3]);
		
		arr.push({
			name:name,
			position:position,
			teacher:teacher,
			weeks:weeks,
			day:j,
			sections:sections
		});
	}
	
	return arr;
}

function getSection(str){
	if(!str)
		return null;
	if(str.indexOf("第十大节") != -1){
		return [{
			section:21
		},{
			section:22
		}];
	}else if(str.indexOf("第九大节") != -1){
		return [{
			section:19
		},{
			section:20
		}];
	}else if(str.indexOf("第八大节") != -1){
		return [{
			section:17
		},{
			section:18
		}];
	}else if(str.indexOf("第七大节") != -1){
		return [{
			section:15
		},{
			section:16
		}];
	}else if(str.indexOf("第六大节") != -1){
		return [{
			section:11
		}];
	}else if(str.indexOf("第五大节") != -1){
		return [{
			section:9
		},{
			section:10
		}];
	}else if(str.indexOf("第四大节") != -1){
		return [{
			section:7
		},{
			section:8
		}];
	}else if(str.indexOf("第三大节") != -1){
		return [{
			section:5
		},{
			section:6
		}];
	}else if(str.indexOf("第二大节") != -1){
		return [{
			section:3
		},{
			section:4
		}];
	}else if(str.indexOf("第一大节") != -1){
		return [{
			section:1
		},{
			section:2
		}];
	}else{
		return null;
	}
	return null;
}

/**
 * 获取XMLHttpRequest 对象。
 */
function getXHR(){
	//兼容不同浏览器和版本得创建函数数组
	let XHR = [
		function(){ return new XMLHttpRequest(); },
		function(){ return new ActiveXObject("Msxml2.XMLHTTP"); },
		function(){ return new ActiveXObject("Msxml3.XMLHTTP"); },
		function(){ return new ActiveXObject("Microsoft.XMLHTTP"); }
	];
	let xhr = null;
	//尝试调用函数，如果成功则返回XMLHttpRequest对象，否则继续尝试
	for (let i = 0; i < XHR.length; i ++) {
		try {
			xhr = XHR[i]();
		} catch(e) {
			//如果发生异常，则继续下一个函数调用
			continue;
		};
		//如果成功，则中止循环
		break;
	};
	//返回对象实例
	return xhr;
};

/**
 * @param {Object} url
 * 通过POST获取。
 */
function getRes(url){
	let xhr = getXHR();
	if(!xhr)
		return "";
	//同步请求
	xhr.open("GET", url, false);
	//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xhr.send();
	return xhr.responseText || "";
};

/**
 * @param {Object} iframeContent
 * @param {Object} frameContent
 * @param {Object} dom
 * 使用默认提供的代码获取页面HTML。
 */
function getHtml(iframeContent = "", frameContent = "", dom = document){
	
	const ifrs = dom.getElementsByTagName("iframe");
	const frs = dom.getElementsByTagName("frame");
	
	if (ifrs && ifrs.length) {
		for (let i = 0; i < ifrs.length; i++) {
			if(!ifrs[i])
				continue;
			const dom = ifrs[i].contentWindow.document;
			iframeContent += getHtml(iframeContent, frameContent, dom);
		};
	};
	
	if (frs && frs.length) {
		for (let i = 0; i < frs.length; i++) {
			if(!frs[i])
				continue;
			const dom = frs[i].contentDocument.body.parentElement;
			frameContent += getHtml(iframeContent, frameContent, dom);
		};
	};
	
	if(!ifrs.length && !frs.length){
		return dom.querySelector('body').outerHTML;
	};
	
	if(dom.getElementsByTagName('html')[0])
		return dom.getElementsByTagName('html')[0].innerHTML + iframeContent + frameContent;
	return iframeContent + frameContent;
};
