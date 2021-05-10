// new Date(datestring)
console.log(new Date());
console.log(new Date("2020-01-31"));

/**
 * new Date(year, month, date, hours, minutes, seconds, ms)
 * year 必须为4位数
 * （貌似也没报错 new Date(20, 0, 1, 0, 0, 0, 0) ）1920/1/1
 * month - (0-11)
 */
console.log(new Date(20, 0, 1, 0, 0, 0, 0).toLocaleDateString());

let now = new Date();
console.log(now.getFullYear()); // 2011
console.log(now.getMonth()); // 4(0-11)
console.log(now.getDate()); // 10(1-31)
console.log(now.getDay()); // (0-6)(星期日-星期六)
console.log(now.getTime()); //  从 1970-1-1 00:00:00 UTC+0 开始到现在所经过的毫秒数。
console.log(+now === now.getTime()); // true
// 自动校准
console.log(new Date(2023, 0, 45).toLocaleDateString()); // 2021/02/14

let date = new Date(2016, 0, 2);
// 设置为每个月的第一天
date.setDate(1);
console.log(date.toLocaleDateString()); // 2016/1/1
// 还是挺强的哈
date.setDate(0);
console.log(date.toLocaleDateString()); // 2015/12/31

console.log(new Date(2021, 1, 0).toLocaleDateString());
