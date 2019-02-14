 /**
 * @desc 时间戳转时间格式
 * @param {String} data 时间戳
 * @returns {String} 时间日期格式
 */
export const format = function(data){
    let unixtime = data
    let unixTimestamp = new Date(unixtime * 1000)
    let Y = unixTimestamp.getFullYear()
    let M = ((unixTimestamp.getMonth() + 1) >= 10 ? (unixTimestamp.getMonth() + 1) : '0' + (unixTimestamp.getMonth() + 1))
    let D = (unixTimestamp.getDate() >= 10 ? unixTimestamp.getDate() : '0' + unixTimestamp.getDate())
    let h = (unixTimestamp.getHours() >= 10 ? unixTimestamp.getHours() : '0'+ unixTimestamp.getHours());
    let min = (unixTimestamp.getMinutes() >= 10 ? unixTimestamp.getMinutes():'0'+unixTimestamp.getMinutes());
    let s = (unixTimestamp.getSeconds() >= 10 ? unixTimestamp.getSeconds():'0'+unixTimestamp.getSeconds());
    let time = `${Y}-${M}-${D}`
    return time;
}


 /**
 * @desc 字符串截取,超出长度拼接"..."
 * @param {String} str 原始字符串
 * @param {int} len 截取长度
 * @returns {String} 截取后数据
 */
export const strFormat = function(str, len){
    var str_length = 0;
    var str_len = 0;
    let str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
      let a = str.charAt(i);
      str_length++;
      if (escape(a).length > 4) {
        //中文字符的长度经编码之后大于4 
        str_length++;
      }
      str_cut = str_cut.concat(a);
      if (str_length >= len) {
        str_cut = str_cut.concat("...");
        return str_cut;
      }
    }
    //如果给定字符串小于指定长度，则返回原始符串； 
    if (str_length < len) {
      return str;
    }
}

/**
 * @desc 获取当前时间
*/
export const getNowFormatDate = function() {
  var date = new Date();
  var seperator1 = '/';
  var seperator2 = ':';
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
      + " " + date.getHours() + seperator2 + date.getMinutes()
      + seperator2 + date.getSeconds();
  return currentdate;
}

/**
 * 
 * @desc 生成指定范围随机数
 * @param  {Number} min 
 * @param  {Number} max 
 * @return {Number} 
 */
export const randomNum = function(){
  return Math.floor(min + Math.random() * (max - min));
}

/**
 * 
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
export const parseQueryString = function(url){
    url = url == null ? window.location.href : url
    var search = url.substring(url.lastIndexOf('?') + 1)
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

/**
 * 
 * @desc 随机生成颜色
 * @return {String} 
 */
export const randomColor = function(url){
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

/**
 * 
 * @desc 获取浏览器类型和版本
 * @return {String} 
 */
export const getExplore = function(){
      var sys = {},
      ua = navigator.userAgent.toLowerCase(),
      s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
      (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
      (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
      (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
      (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
      (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
      (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) return ('IE: ' + sys.ie)
    if (sys.edge) return ('EDGE: ' + sys.edge)
    if (sys.firefox) return ('Firefox: ' + sys.firefox)
    if (sys.chrome) return ('Chrome: ' + sys.chrome)
    if (sys.opera) return ('Opera: ' + sys.opera)
    if (sys.safari) return ('Safari: ' + sys.safari)
    return 'Unkonwn'
}

/**
 * 
 * @desc 获取操作系统类型
 * @return {String} 
 */
export const getOS = function(){
  var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
  var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
  var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

  if (/mac/i.test(appVersion)) return 'MacOSX'
  if (/win/i.test(appVersion)) return 'windows'
  if (/linux/i.test(appVersion)) return 'linux'
  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios'
  if (/android/i.test(userAgent)) return 'android'
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
}

/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 */
export const deepClone = function(){
  var copy;

  // Handle the 3 simple types, and null or undefined
  if (null == values || "object" != typeof values) return values;
  // Handle Date
  if (values instanceof Date) {
      copy = new Date();
      copy.setTime(values.getTime());
      return copy;
  }
  // Handle Array
  if (values instanceof Array) {
      copy = [];
      for (var i = 0, len = values.length; i < len; i++) {
          copy[i] = deepClone(values[i]);
      }
      return copy;
  }
  // Handle Object
  if (values instanceof Object) {
      copy = {};
      for (var attr in values) {
          if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
      }
      return copy;
  }
  throw new Error("Unable to copy values! Its type isn't supported.");
}

/**
 *  @desc 设置  本地缓存
 */
export const setStorage = function(key, obj) {
  if (typeof obj === 'string') {
      localStorage.setItem(key, obj);
  } else {
      localStorage.setItem(key, JSON.stringify(obj));
  }
}

/**
 *  @desc 获取 本地缓存
 */
export const getStorage = function(key) {
  let val = localStorage.getItem(key);
  try {
      return JSON.parse(val);
  } catch (e) {
      return val;
  }
}

/**
 *  @desc 删除, 如果不传值, 删除所有
 */
export const clearStorage = function(key) {
  if (key) {
      localStorage.removeItem(key);
  } else {
      localStorage.clear();
  }
}

/**
 * @desc 判断是否是 null, '', undefined
 * @returns {Boolean}
 */
export const isNot = function(val) {
  if (val === null || val === '' || val === undefined) {
      return true;
  } else {
      return false;
  }
}

/**
 * @desc js实现php ksort方法
 * @param {Array} inputArr 排序数据
 * @param {String} sort_flags 排序方式
 * @returns {String}
 */
export const ksort = function(inputArr, sort_flags){
    var tmp_arr = {},
    keys = [],
    sorter, i, k, that = this,
    strictForIn = false,
    populateArr = {};
 
  switch (sort_flags) {
  case 'SORT_STRING':
    // compare items as strings
    sorter = function (a, b) {
      return that.strnatcmp(a, b);
    };
    break;
  case 'SORT_LOCALE_STRING':
    // compare items as strings, original by the current locale (set with  i18n_loc_set_default() as of PHP6)
    var loc = this.i18n_loc_get_default();
    sorter = this.php_js.i18nLocales[loc].sorting;
    break;
  case 'SORT_NUMERIC':
    // compare items numerically
    sorter = function (a, b) {
      return ((a + 0) - (b + 0));
    };
    break;
    // case 'SORT_REGULAR': // compare items normally (don't change types)
  default:
    sorter = function (a, b) {
      var aFloat = parseFloat(a),
        bFloat = parseFloat(b),
        aNumeric = aFloat + '' === a,
        bNumeric = bFloat + '' === b;
      if (aNumeric && bNumeric) {
        return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
      } else if (aNumeric && !bNumeric) {
        return 1;
      } else if (!aNumeric && bNumeric) {
        return -1;
      }
      return a > b ? 1 : a < b ? -1 : 0;
    };
    break;
  }
 
  // Make a list of key names
  for (k in inputArr) {
    if (inputArr.hasOwnProperty(k)) {
      keys.push(k);
    }
  }
  keys.sort(sorter);
 
  // BEGIN REDUNDANT
  this.php_js = this.php_js || {};
  this.php_js.ini = this.php_js.ini || {};
  // END REDUNDANT
  strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js
    .ini['phpjs.strictForIn'].local_value !== 'off';
  populateArr = strictForIn ? inputArr : populateArr;
 
  // Rebuild array with sorted key names
  for (i = 0; i < keys.length; i++) {
    k = keys[i];
    tmp_arr[k] = inputArr[k];
    if (strictForIn) {
      delete inputArr[k];
    }
  }
  for (i in tmp_arr) {
    if (tmp_arr.hasOwnProperty(i)) {
      populateArr[i] = tmp_arr[i];
    }
  }
 
  return strictForIn || populateArr;
}




