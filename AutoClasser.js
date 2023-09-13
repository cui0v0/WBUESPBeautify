var schoolsList = getList("skyx");
var yearsList = getList("sknj");
//var classesList = getClasses();
function getClasses(schoolName,year){
    uniSearchAndSelect(schoolsList,"skyx",schoolName);
    uniSearchAndSelect(yearsList,"sknj",year);
    onchangeYxOrKsnd($("#sknj")[0]);
    let list = getList("skzy");
    return list;
}
function searchClasses(className){
    uniSearchAndSelect(classesList,"skzy",className);
    let buttons= $(".button");
    for(let i=1;i<=buttons.length;i++){
        if(buttons[i-1].getAttribute("onclick")!=-1){
            buttons[i-1].click();
        }
    }
}
function getClassSchedule(className){
    let tr = $("#fcenter")[0].contentWindow.document.getElementsByTagName("tr");
    let week = {};
    for(let i=1;i<=tr.length;i++){
        if(tr[i-1].children[0].children[0]){
            if(tr[i-1].children[0].children[0].innerText.indexOf("机器人工程(本科)(1)")!=-1){
                let td = tr[i-1].children;
                week["class"] = tr[i-1].children[0].children[0].innerText;
                let day = {};
                for(let o=2;o<=td.length;o++){
                    let section = new Array();
                    let part = new Array();
                    if(td[o-1].children[0].children.length>0){
                        let kbcontent = td[o-1].children[0].children;
                        for(let p=1;p<=kbcontent.length;p++){
                            part[p-1] = kbcontent[p-1].innerText;
                        }
                        section.push(part);
                    }
                    let classTime;
                    switch(tr[1].children[o-1].innerText){
                        case "0102":classTime = "第一大节";break;
                        case "0304":classTime = "第二大节";break;
                        case "0506":classTime = "第三大节";break;
                        case "0708":classTime = "第四大节";break;
                        case "0910":classTime = "第五大节";break;
                        case "1112":classTime = "第六大节";break;
                    }
                    if(tr[1].children[o-1].innerText!="13"){
                        day[classTime] = section;
                    }
                    if(Math.floor((o-1)/6)<=tr[0].children.length-1){
                        if(day["第六大节"]){
                            week[tr[0].children[Math.floor((o-1)/6)].innerText] = day;
                            day = {};
                        }
                    }
                }
            }
        }
    }
    console.log(week);
    // return week;
}

let videoCardClassName = "video-card--1404D";
let videoTitleClassName;

let allVideosInfo = {'data':[]};
let videoCard = $("."+videoCardClassName);
for(let i=1;i<=videoCard.length;i++){
    let videoDetails = {};
    let videoTitle = videoCard[i-1].getElementsByClassName("info-title-text--kEYth")[0].innerText;
    let videoInfo = videoCard[i-1].getElementsByClassName("info-figure-text--2K5OJ");
    let viewsNum = videoInfo[0].innerText;
    let likesNum = videoInfo[videoInfo.length-1].innerText;
    let videoImgPrefix = videoCard[i-1].getElementsByClassName("video-card-cover--2Y2HT")[0];
    let videoImg = videoImgPrefix.getAttribute("style").slice(videoImgPrefix.getAttribute("style").indexOf('("')+2,videoImgPrefix.getAttribute("style").indexOf('")'));
    let uploadTime = videoCard[i-1].getElementsByClassName("info-time--1PtPa")[0].innerText;

    videoDetails["视频标题"] = videoTitle;
    videoDetails["播放数"] = viewsNum;
    videoDetails["点赞数"] = likesNum;
    videoDetails["上传时间"] = uploadTime;
    videoDetails["缩略图链接"] = videoImg;
    allVideosInfo.data.push(videoDetails);
}
console.log(allVideosInfo);

function getList(id){
    let list = {};
    let options = $("#"+id)[0].options;
    for(let i=1;i<=options.length;i++){
        if(options[i-1].value){
            list[i-1] = options[i-1].innerText;
        }
    }
    console.log(list);
    return list;
}
function uniSearchAndSelect(listName,id,entry){
    for(let i=1;i<=listName.length;i++){
        if(listName[i-1].indexOf(entry)!=-1){
            $("#"+id)[0].options[i-1].selected = true;
        }
    }
}
