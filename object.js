
var user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@amela.vn'
};
// bài 1
function listKey(Obj){
   return Object.keys(Obj);
}
// console.log(listKey(user))

// bài 2
function listValues(Obj){
    return Object.values(Obj);
}
// console.log(listValues(user))

// bài 3
function checkKey(str, obj){
    return obj.hasOwnProperty(str);
}
// console.log(checkKey('study', user));

// bài 4
function getLengthObject(obj){
    return Object.keys(obj).length;
}

// console.log(getLengthObject(user));

// bài 5

function getUser(arr){
    const users =  arr.filter((user, index)=>{
        return (user.age > 25 && user.isStatus == true);  
     }) 
     return users;
  }
// console.log(getUser(user))
