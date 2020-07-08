// 去除广告窗
document.querySelector("#fade").remove();
document.querySelector("#MyDiv").remove();
// 去除查询

// document.querySelector("#alertMsgBox").remove();

// 生成浮窗盒子
// body
let body = document.querySelector("body");
let divBox = document.createElement("div");
divBox.className = "frame";
divBox.innerHTML = `
<div class="self-box">
        <h1 class="title">
            当前预览课表
        </h1>
        <div class="current-table">

            <div class="show-date">
                <div class="date">周一</div>
                <div class="date">周二</div>
                <div class="date">周三</div>
                <div class="date">周四</div>
                <div class="date">周五</div>
                <div class="date">周六</div>
                <div class="date">周日</div>
            </div>

            <div class="show-count">
                <div class="count">一</div>
                <div class="count">二</div>
                <div class="count">三</div>
                <div class="count">四</div>
                <div class="count">五</div>
            </div>

            <div class="show-lesson">
                <div class="slist" id="place1">
                    <div class="lesson" id="place11"></div>
                    <div class="lesson" id="place12"></div>
                    <div class="lesson" id="place13"></div>
                    <div class="lesson" id="place14"></div>
                    <div class="lesson" id="place15"></div>
                </div>
                <div class="slist" id="place2">
                    <div class="lesson" id="place21"></div>
                    <div class="lesson" id="place22"></div>
                    <div class="lesson" id="place23"></div>
                    <div class="lesson" id="place24"></div>
                    <div class="lesson" id="place25"></div>
                </div>
                <div class="slist" id="place3">
                    <div class="lesson" id="place31"></div>
                    <div class="lesson" id="place32"></div>
                    <div class="lesson" id="place33"></div>
                    <div class="lesson" id="place34"></div>
                    <div class="lesson" id="place35"></div>
                </div>
                <div class="slist" id="place4">
                    <div class="lesson" id="place41"></div>
                    <div class="lesson" id="place42"></div>
                    <div class="lesson" id="place43"></div>
                    <div class="lesson" id="place44"></div>
                    <div class="lesson" id="place45"></div>
                </div>
                <div class="slist" id="place5">
                    <div class="lesson" id="place51"></div>
                    <div class="lesson" id="place52"></div>
                    <div class="lesson" id="place53"></div>
                    <div class="lesson" id="place54"></div>
                    <div class="lesson" id="place55"></div>
                </div>
                <div class="slist" id="place6">
                    <div class="lesson" id="place61"></div>
                    <div class="lesson" id="place62"></div>
                    <div class="lesson" id="place63"></div>
                    <div class="lesson" id="place64"></div>
                    <div class="lesson" id="place65"></div>
                </div>
                <div class="slist" id="place7">
                    <div class="lesson" id="place71"></div>
                    <div class="lesson" id="place72"></div>
                    <div class="lesson" id="place73"></div>
                    <div class="lesson" id="place74"></div>
                    <div class="lesson" id="place75"></div>
                </div>
            </div>


        </div>

    </div>
`;
body.appendChild(divBox);

// 循环生成

// 课程位置映射：
let dayToX = {
  周一: 1,
  周二: 2,
  周三: 3,
  周四: 4,
  周五: 5,
  周六: 6,
  周日: 7,
};
// 课程
let lessonToY = {
  "第1-2节": 1,
  "第3-4节": 2,
  "第3-5节": 2,
  "第6-7节": 3,
  "第6-8节": 3,
  "第9-10节": 4,
  "第11-12节": 5,
  "第11-13节": 5,
};
// 检查已选课程
setInterval(() => {
  // 匹配
  let selectedLesson = document.querySelectorAll(".gridTbody tr");
  let res = [];
  for (let i = 0; i < selectedLesson.length; i++) {
    // 去除空
    let current = String(selectedLesson[i].outerText)
      .trim()
      .replace(new RegExp(/\t/g), ",");
    current = current.split(",");
    // 用是否作为区分

    if (
      current.join("").match(/[是否]/g) != null &&
      current.join("").match(/[是否]/g).length > 0
    ) {
      let temp = {};
      console.log(current);
      temp["name"] = current[0].trim();
      temp["teacher"] = current[1].trim();
      temp["week"] = current[2].trim();

      // temp["time"] = current
      // 寻找位置
      temp["placeX"] = [];
      temp["placeY"] = [];

      //获取设置周数
      temp["time"] = [];
      // 只拿到下面的已选课程
      let currentTime = current[2]
        .trim()
        .split(";")
        .filter((item) => {
          if (item != "" || item != undefined) {
            return item;
          }
        });
      // 进行则匹配选择位置
      for (let timeString of currentTime) {
        // 进行x y 的寻找
        // 首先查找周*
        // console.log(timeString);
        let day = timeString.match(/周[一二三四五六日]/g);
        if (day != null) {
          for (let d of day) {
            let x = dayToX[d];
            temp["placeX"].push(x);
          }
        }

        // 查找y
        // 寻找上述
        let time = timeString.match(/第[\d]*-[\d]*节/g);
        // console.log(time);
        if (time != null) {
          for (let t of time) {
            let y = lessonToY[t];
            temp["placeY"].push(y);
          }
        }

        //时间周数
        let weeks = timeString.match(/第[\d]*-[\d]*周/g);
        if (weeks != null) {
          for (let w of weeks) {
            let t = w;
            temp["time"].push(t);
          }
        }
      }

      // 把temp放进res
      res.push(temp);
    }
  }
  // console.log(res);
  // 根据res进行div的写入
  // 每次写入前都应该进行清空

  for (let i = 1; i <= 7; i++){
    for (let j = 1; j <= 5; j++){
      let parent = document.querySelector(
        "#place" + i + j
      );
      // console.log(parent);
      parent.innerHTML = `
      <div></div>
      `;
    }
  }


  // 开始写入:
  res.forEach((item) => {
    // 写入开始
    if (item["placeX"].length > 0) {
      for (let i = 0; i < item["placeX"].length; i++) {
        let parent = document.querySelector(
          "#place" + item["placeX"][i] + item["placeY"][i]
        );
        // console.log(parent);
        parent.innerHTML = `
        <div class="content-name">${item["name"]}</div>
        <div class="content-name">${item["time"].join(",")}</div>
        `;
      }
    }
  });
}, 5000);
// 提取相关信息

// console.log(selectedLesson);
