```js
// 1.滚动到页面顶部
// 使用 window.scrollTo() 平滑滚动到页面顶部。
const scrollToTop = () => {
  // 滚动条滑动的 动画效果  behavior => 有三种状态 smooth是平滑
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

// 2.滚动到页面底部
const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
};

// 3.滚动元素到可见区域
const smoothScroll = (element) => {
  element.scrollIntoView({
    behavior: "smooth",
  });
};

// 4.全屏显示元素
const goToFullScreen = (element) => {
  element = element || document.body;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
};

// 5.退出浏览器全屏状态
const goExitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};


// 6.获取数据类型
const getType = (value) => {
  // 最严谨判断数据类型的方法
  const match = Object.prototype.toString.call(value).match(/ (\w+)]/)
  return match[1].toLocaleLowerCase()
}
getType() // undefined
getType({}}) // object
getType([]) // array
getType(1) // number
getType('fatfish') // string
getType(true) // boolean
getType(/fatfish/) // regexp


// 7.停止冒泡事件  一种适用于所有平台的防止事件冒泡的方法。
const stopPropagation = (event) => {
  event = event || window.event;
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
};


// 8. 深拷贝一个对象
const deepCopy = (obj, hash = new WeakMap()) => {
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    if (obj[key] && typeof obj[key] === "object") {
      cloneObj[key] = deepCopy(obj[key], hash);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
};


// 9. 确定设备类型
const isMobile = () => {
  return !!navigator.userAgent.match(
    /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
  );
};


// 10.判断设备是安卓还是IOS
const isAndroid = () => {
  return /android/i.test(navigator.userAgent.toLowerCase());
};
const isIOS = () => {
  let reg = /iPhone|iPad|iPod|iOS|Macintosh/i;
  return reg.test(navigator.userAgent.toLowerCase());
};


// 11.获取浏览器类型及其版本
const getExplorerInfo = () => {
  let t = navigator.userAgent.toLowerCase();
  return 0 <= t.indexOf("msie")
    ? {
        //ie < 11
        type: "IE",
        version: Number(t.match(/msie ([\d]+)/)[1]),
      }
    : !!t.match(/trident\/.+?rv:(([\d.]+))/)
    ? {
        // ie 11
        type: "IE",
        version: 11,
      }
    : 0 <= t.indexOf("edge")
    ? {
        type: "Edge",
        version: Number(t.match(/edge\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("firefox")
    ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("chrome")
    ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("opera")
    ? {
        type: "Opera",
        version: Number(t.match(/opera.([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("Safari")
    ? {
        type: "Safari",
        version: Number(t.match(/version\/([\d]+)/)[1]),
      }
    : {
        type: t,
        version: -1,
      };
};

// 12.设置cookies
const setCookie = (key, value, expire) => {
  const d = new Date();
  d.setDate(d.getDate() + expire);
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};


// 13. 获取 cookie
const getCookie = (key) => {
  const cookieStr = unescape(document.cookie);
  const arr = cookieStr.split("; ");
  let cookieValue = "";
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split("=");
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
};


// 14.删除cookies
const delCookie = (key) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};


// 15.生成随机字符串
const randomString = (len) => {
  let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
  let strLen = chars.length;
  let randomStr = "";
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
};

randomString(10) // pfkMfjEJ6x
randomString(20) // ce6tEx1km4idRNMtym2S


// 16. 字符串首字母大写
const fistLetterUpper = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

fistLetterUpper('fatfish') // Fatfish


// 17.生成指定范围内的随机数
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
randomNum(1, 10) // 6
randomNum(10, 20) // 11


// 18.打乱数组的顺序
const shuffleArray = (array) => {
  return array.sort(() => 0.5 - Math.random())
}
let arr = [ 1, -1, 10, 5 ]
shuffleArray(arr) // [5, -1, 10, 1]
shuffleArray(arr) // [1, 10, -1, 5]


// 19. 从数组中获取随机值
const getRandomValue = array => array[Math.floor(Math.random() * array.length)];
const prizes = [  '$100', '🍫', '🍔' ]

getRandomValue(prizes) // 🍫
getRandomValue(prizes) // 🍔
getRandomValue(prizes) // 🍫


// 20. 格式化货币
const formatMoney = (money) => {
  return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'), ',')
}
formatMoney('123456789') // '123,456,789'
formatMoney('123456789.123') // '123,456,789.123'
formatMoney('123') // '123'

// 正则表达式让我很头疼 换种更简单的方式
const formatMoney = (money) => {
  return money.toLocaleString()
}
formatMoney(123456789) // '123,456,789'
formatMoney(123456789.123) // '123,456,789.123'
formatMoney(123) // '123'


// 21、从url获取参数并转为对象
const getParameters = URL => JSON.parse(`{"${decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`
  )
getParameters("https://www.google.com.hk/search?q=js+md&newwindow=1"); // {q: 'js+md', newwindow: '1'}
// 22、检查对象是否为空
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
isEmpty({}) // true
isEmpty({a:"not empty"}) //false
// 23、反转字符串
const reverse = str => str.split('').reverse().join('');
reverse('this is reverse'); // esrever si siht
// 24、生成随机十六进制
const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
console.log(randomHexColor()); // #a2ce5b
// 25、检查当前选项卡是否在后台
const isTabActive = () => !document.hidden;
isTabActive() // true|false
// 26、检测元素是否处于焦点
const elementIsInFocus = (el) => (el === document.activeElement);
elementIsInFocus(anyElement) // 元素处于焦点返回true，反之返回false
// 27、判断是移动设备还是电脑设备
const judgeDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'PC';
judgeDeviceType()  // PC | Mobile
// 28、文字复制到剪贴板
const copyText = async (text) => await navigator.clipboard.writeText(text)
copyText('单行代码 前端世界')
// 29、获取选定的文本
const getSelectedText = () => window.getSelection().toString();
getSelectedText(); // 返回选中的内容
// 30、查询某天是否为工作日
const isWeekday = (date) => date.getDay() % 6 !== 0;
isWeekday(new Date(2022, 03, 11)) // true
// 31、转换华氏/摄氏  处理温度有时会晕头转向
// 将华氏温度转换为摄氏温度
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
fahrenheitToCelsius(50); // 10
// 将摄氏温度转华氏温度
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
celsiusToFahrenheit(100) // 212
// 32、两日期之间相差的天数
// 日常开发中经常遇到需要显示剩余天数， 一般我们就需要计算两日期之间相差天数
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
dayDiff(new Date("2021-10-21"), new Date("2022-02-12")) // Result: 114
// 33、将 RGB 转换为十六进制
const rgbToHex = (r, g, b) =>   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
rgbToHex(255, 255, 255);  // #ffffff
// 34、计算数组平均值
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;
average([1,9,18,36]) // 16
// 35、CSS 快速布局 超级居中（水平垂直居中）
/**
 * .box{
 *    display: grid;
 *    place-items: center;
 * }
 */
// 36、深拷贝一个值
/**
 * 深拷贝一个值。
 *
 * @param {*} val - 需要被拷贝的值。可以是任何类型。
 * @param {WeakMap} hash - 用于存储已经拷贝过的对象的引用，以避免循环拷贝。
 * @param {Set} seen - 用于记录在拷贝过程中已经处理过的对象，以检测循环引用。
 * @returns {*} - 返回一个与输入值相同但独立的对象或值。
 */
function deepCopy(val, hash = new WeakMap(), seen = new Set()) {
  // 检查是否已经处理过当前对象，以避免循环引用导致的无限递归。
  // 检查循环引用
  if (seen.has(val)) {
    return val;
  }

  // 如果值不是对象或为null，则直接返回，不需要深拷贝。
  // 对于非对象和数组类型，直接返回
  if (typeof val !== "object" || val === null) {
    return val;
  }

  // 检查当前对象是否已经在hash中，如果是，则直接返回其拷贝，避免重复拷贝。
  // 检查是否已经存在于哈希表中，是则直接返回引用
  if (hash.has(val)) {
    return hash.get(val);
  }

  // 添加当前对象到seen中，标记为已处理。
  // 记录当前对象，以处理循环引用
  seen.add(val);

  // 根据不同的类型创建对应的拷贝对象。
  // 根据不同的类型创建对应的拷贝
  let copy;
  if (Array.isArray(val)) {
    copy = [];
  } else if (val instanceof Date) {
    copy = new Date(val.getTime());
  } else if (val instanceof RegExp) {
    // 改进RegExp对象的深拷贝
    copy = new RegExp(val.source, val.flags);
  } else if (typeof val === "function") {
    // 函数直接返回引用，不进行深拷贝。
    // 处理函数的深拷贝，考虑函数内部可能的闭包引用问题
    // 对于函数，我们直接返回引用（浅拷贝）
    copy = val;
  } else {
    copy = {};
  }

  // 将拷贝的对象与原对象关联起来，存储在hash中。
  // 将新对象存入哈希表
  hash.set(val, copy);

  // 遍历原对象的所有属性，并递归深拷贝它们的值。
  // 递归复制对象的属性
  // 使用for...of循环代替Object.keys加forEach，提升性能
  for (let key in val) {
    if (Object.hasOwnProperty.call(val, key)) {
      copy[key] = deepCopy(val[key], hash, seen);
    }
  }

  // 清除seen中对当前对象的引用，避免内存泄漏。
  seen.delete(val);

  // 返回拷贝后的对象。
  return copy;
}

```
