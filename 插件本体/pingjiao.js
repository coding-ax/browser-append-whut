// list = document.querySelectorAll(".btnInfo");
list = document.querySelectorAll(
  "tbody tr td div .btnInfo,tbody tr td div .btnEdit"
);
let i = 0;

var t1 = setInterval(() => {
  //点击一下
  console.log(list[i]);
  if (list[i] != null) {
    list[i].click();
      i++;
      console.log(i);
      console.log(list[i])
    console.log(list);
    if (i == list.length) {
      clearInterval(t1);
    }
    //等待3秒进入评教如果可以评教
    setTimeout(() => {
      if (document.querySelector(".pageFormContent div") != null) {
        let point = document.querySelectorAll(".unit input");
        // console.log(point)
        //目标A值
        let target = [];
        point.forEach((item) => {
          //将A的都拖进来
          if (item.value == "A" && target.length < 10) target.push(item);
        });
        // console.log(target)
        //都点上
        // target.forEach((item) => {
        //   item.click();
        // });
        let count = 0;
        t2 = setInterval(() => {
          target[count++].click();
            if (count == target.length)
                clearInterval(t2);
        }, 100);

        setTimeout(() => {
          document.querySelectorAll("#bt_div button")[1].click();
          setTimeout(() => {
            //这傻逼教务处的傻逼设计
            document.querySelectorAll(".buttonContent button")[2].click();
            console.log(document.querySelectorAll(".buttonContent button")[2]);
            console.log(document.querySelectorAll("#bt_div button")[2]);
          }, 200);
        }, 3000);
      }
      //不可以则点击离开
      else {
        setTimeout(() => {
          document.querySelector(".buttonContent button").click();
        }, 1000);

        // console.log(document.querySelector("buttonContent button"));
      }
    }, 3000);
  }
}, 10000);

// 9F418A5F65672689E053FD02A8C06C57
