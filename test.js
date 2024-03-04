let classSchedule = {"data":[]};
function numToChinese(num){
    let result;
    switch(num){
        case 1:
            result = "一";break;
        case 2:
            result = "二";break;
    }
    return result;
}

var total = {"data":[]};
document.querySelectorAll("#kbtable tr").forEach((tr)=>{
    let sections = {"sections":[]};
    if(tr.rowIndex!=0&&tr.rowIndex>0&&tr.rowIndex<3){
        sections["节次"] = tr.rowIndex;
    }else if(tr.rowIndex!=3&&(tr.rowIndex<6&&tr.rowIndex>3)){
        sections["节次"] = tr.rowIndex - 1;
    }else if(tr.rowIndex!=6&&(tr.rowIndex<9&&tr.rowIndex>6)){
        sections["节次"] = tr.rowIndex - 2;
    }
    if(tr.querySelector("td")){
        tr.querySelectorAll("td").forEach((td)=>{
            if(td.querySelector(".kbcontent")){
                if(td.querySelector(".kbcontent").innerText!=''){
                    let dayIndex = td.cellIndex;
                    let section = {"courses":[]};
                    section["星期"] = dayIndex;
                    td.querySelectorAll(".kbcontent").forEach((kbcontent)=>{
                        let course = {};
                        kbcontent.childNodes.forEach((e)=>{
                            if(e.nodeName == "#TEXT"|e.nodeName == "#text"){
                                let classTitle = e.nodeValue;
                                course["课程名"] = classTitle;
                            }else if(e.nodeName == "FONT"){
                                switch(e.title){
                                    case "教室":
                                        let classroom = e.innerText;
                                        course["教室"] = classroom;
                                        break;
                                    case "周次(节次)":
                                        let weeks = e.innerText;
                                        course["上课周数"] = weeks;
                                        break;
                                    case "老师":
                                        let teacher = e.innerText;
                                        course["老师"] = teacher;
                                        break;
                                }
                            }
                        });
                        section.courses.push(course);
                    });
                    sections.sections.push(section)
                }
            }
        })
    }
    // if(tr.rowIndex!==0|tr.rowIndex!==3|tr.rowIndex!==6){
    //     console.log(tr.rowIndex);
        total.data.push(sections);
    // }
})
console.log(total);

document.querySelectorAll("").forEach((kb)=>{
    
    kb.ariaRowSpan
    kb.forEach((e)=>{

    })
})