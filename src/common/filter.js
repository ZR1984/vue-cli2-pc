//保留两位小数
let fixedTwo = value=>{
    return Number(value).toFixed(2)
}

//转换电话号码
let changeTel = value=>{
    let val = String(value).split('');
    val.splice(3,4,"****");
    return val.join('')
}

//豪秒数转为年月日时分秒
let DateFomate = value=>{
    let day = parseInt(value / 86400000);
    let hour = parseInt(value / 3600000 % 24);
    let minute = parseInt(value / 60000 % 60);
    let seconds = parseInt(value / 1000 % 60);

    return `${day}天${hour}时${minute}分${seconds}秒`
}

//全部转大写字母
let upperCase = value=>{
    return value.toUpperCase()
}

export {fixedTwo,changeTel,DateFomate,upperCase}