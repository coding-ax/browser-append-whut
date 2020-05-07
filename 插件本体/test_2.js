list = document.querySelectorAll(
  "tbody tr td div .btnInfo,tbody tr td div .btnEdit"
);
aList = [];
list.forEach((element) => {
  aList.push(
    element.href.substr(element.href.indexOf("pjrwdm="), element.href.length)
  );
});
let i = 0;
t1 = setInterval(() => {
  let temp = fetch("http://202.114.50.130/EOT/rwpjUpdate.do", {
    headers: {
      accept: "application/json, text/javascript, */*; q=0.01",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
      "proxy-connection": "keep-alive",
      "x-requested-with": "XMLHttpRequest",
    },
    referrer:
      "http://202.114.50.130/EOT/login.do?msg=LBTDjwClT1FoNoVgzCTjasxYDcc71HchulEEEpnlqbMCkJYPv9AzC8rfUkn3J6tTe2%2BGHmwGYbpQ%0AYpMl3p7v9OSOvXkorCXTCJpQc6KF7Lgu%2FdzU7xv7%2B1BifK6%2BA19NLhgLVVKZvXR%2Blz95pGbOVIq9%0AgAJc%2BiMU18%2FNtSKWey4%3D%0A%23OMIeU3bt0SQUYtkKgMaqMKybIALVeAbeZXNn1CNfQqXBItWdJjWH1QtphxApyZimtZvdvBtuF%2BDx%0A6z0YzNAZR4SFjr14SyybwA%2FbfNGgu7swQalWz4nIR1Izz1Hhkg9BS5EVf8J2xUkUZYFR4YcfYPjV%0AN9GC6LdledcUcGg1smY%3D%0A%23WaZR%2BbNWUaW5niridrORZT3gcC8DZEo5s5OwCkdAD1iZLAWjuqXyB%2FgOE8jhnQAflrqwCnW9t7lA%0AdpI9t97zPvgJHz2UtPnnH3LD1KPE%2BHad0%2B4rbGfJ3pmvQHzasablPADLK%2FlO3K4e59Tj7PpsHfVl%0AOkt8beS85xpFkbeYIfw%3D%0A%23ThxYmpq9bORsBYQHvOr4hbIwTUAC%2BU7AHrn7gOGeY5aTkM9ousndz1P580%2BTFJJB6MsXdsv3EXTa%0AS6ryFTfU%2FoWCqBARDOKgzo4lV%2B0lCCTvXiKpLS9gwlsu%2B9WUwMo4hnijU5VT8FXeapgCt1qiVTZL%0A16lhboyV93euqlT6LHw%3D%0A%23CCL00aUZ%2FN5PTEUMceGq5glcvMrstzPpriFOKVGjXvW7v%2FTheAg2njhXpIMU1FLLQgM8T1pVuy6H%0A6H9QokrhZ3Oy%2FDVO%2F7p%2BAJt7Ab%2BYF30HhD8clkLiEgqqsoB5stzol5iMYLzzE%2BU5429SUONNnGBf%0AZK9T%2Bku7Eiu33Ylz50o%3D%0A%23",
    referrerPolicy: "no-referrer-when-downgrade",
    body:
      aList[i] +
      "&cpdxdm=&zbtmdm=1&zb1=A&zbtmdm=10&zb10=A&zbtmdm=2&zb2=A&zbtmdm=3&zb3=A&zbtmdm=4&zb4=A&zbtmdm=5&zb5=A&zbtmdm=6&zb6=A&zbtmdm=7&zb7=A&zbtmdm=8&zb8=A&zbtmdm=9&zb9=A&py=&wjwtdm=1&xzwdt=&xzwdttm=1&xzwdtxx=E&wjwtdm=2&wjwtdm=3&wjwtdm=4&wjwtdm=5&wjwtdm=6&wjwtdm=7&wjwtdm=8&wjwtdm=9&xzwdt=&xzwdttm=9&xzwdtxx=G&wdttm=10&wdt=",
    method: "POST",
    mode: "cors",
    credentials: "include",
  }).then((res) => {
    console.log(res);
  });
    i++;
    console.log(i)
  if (i == aList.length) {
    clearInterval(t1);
  }
}, 100);
