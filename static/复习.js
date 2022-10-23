
小知识点

类数组转化为数组：

var oRadioArr = Array.prototype.slice.call(document.getElementsByClassName('btn'), 0);


后是前的一部分
sexStr.indexOf(ele.sex) != -1


forEach(element,index,a)
filter(function(currentValue,index,array))
reduce(function(previousValue,currentValue, Index,array){
},initialValue)




parseFloat() 函数可解析一个字符串，并返回一个浮点数
parseInt() 函数可解析一个字符串，并返回一个整数。
parseInt(string, radix)  //以radix进制进行解析


Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数
Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数
Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数（数学课规则）


bind() 是返回对应函数，便于稍后调用
apply() call() 则是立即调用 


解决跨域问题的几种办法

1.Flash （不做讨论）
2.服务器代理中转
3.Jsonp  //动态创建script
4.document.domain(针对基础域名相同的情况)
// bj.hello.com  document.domain = 'hello.com'
// tj.hello.com  document.domain = 'hello.com'
// 当一个站点（b.a.com）被攻击后，另一个站点（c.a.com）会引起安全漏洞。
// 如果一个页面中引入多个iframe，要想能够操作所有iframe，必须都得设置相同domain。
5.H5 PostMessage 
6 、利用iframe和location.hash  window.name实现的跨域数据传输


当你在浏览器里输入一个url发生了什么

1.浏览器通过DNS域名解析到服务IP（ping www.baidu.com）
2.客户端(浏览器)通过TCP协议建立到服务器的TCP连接  (三次握手)
3.客户端（浏览器）向web服务器端（HTTP服务器）发送HTTP协议包，请求服务器里的资源文档 （telnet 模拟）
4.服务器向客户端发送HTTP协议应答包
5.客户端和服务器断开（四次挥手），客户端开始解释处理HTML文档


var a = window.prompt() 弹出框 


margin border padding centext 

borde --> background-color

BFC block formatting context

typeof null "object" ///true
null instanceof Object //false


Object

__proto__是每个对象都有的一个属性 
而prototype是函数才会有的属性

a.__proto__ = {   对象原型上定义方法
  abc:123
}

Object.keys方法只返回可枚举的属性名
Object.values  返回属性值
返回数组中的排序与for..in是一致的，区别在于for..in循环还可以枚举原型链上的属性

Object.getOwnPropertyNames方法还能返回不可枚举的属性名

Object.getOwnPropertyDescriptor(obj, prop) 返回一个指定对象上的自有属性对应的属性描述
 （自由属性指，直接赋值的属性，不需要从原型上查找的属性） obj 需要查找的目标对象 prop 目标对象内的属性名称
// 返回
// configurable:true
// enumerable:true
// value:1
// writable:true

Object.defineProperty( obj, prop, decriptor)  直接在一个对象上定义一个新属性，或修改一个对象的现有属性，
并返回这个对象，默认情况下使用此方法添加的属性值是不能被修改的　　
obj 要在其上定义属性的对象  prop 要定义或修改的属性名称  decriptor 将被定义或修改的属性描述符

// Object.defineProperty(o, "a", {
//     value : 37,
//     writable : true,
//     enumerable : true,
//     configurable : true
// });
 
Object.creat() 可以指定原型对象和属性，返回一个新的对象

Object.getPrototypeOf() 获取对的的Prototype对象

// 创建一个原型为null的空对象
o = Object.create(null);

// 以字面量方式创建的空对象就相当于:
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: { 
    writable:true,
    configurable:true,
    value: "hello" 
  },
}
Object.prototype上的方法
valueOf()返回当前对象所有的值
toString()返回当前对象对应的字符串形式,用来判断一个值的类型
toLocaleString()返回当前对象对应的本地字符串形式
hasOwnProperty()判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性
isPrototypeOf()判断当前对象是否为另一个对象的原型
propertyIsEnumerable()判断某个属性是否可枚举


// 
// 
// 
// 
// 



微信小程序 --> css3 --> html5

明天上午学习微信小程序及基础知识，下午拍摄证件照。

javascript
html       
css






// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

js 语法分析 预编译 解释执行

function fn (){
           var a =10; //局部变量
           c = 20;   //暗示全局变量
       }
       fn()


(function(){   //立即执行函数 执行完立即释放 w3c建议这种
               //只有表达式才能被执行符号执行
           }())  


(function(){

})()


立即执行函数只有一个作用：创建一个独立的作用域。
这个作用域里面的变量，外面访问不到（即避免「变量污染」）。


var test = function(){

}()


!function(){

}()


function test(a,b){
	console.log(a,b)
}(1,2)    不执行不报错



function test(){
	var arr = [];
	for(var i=0;i<10;i++){
		(function(j){
			arr[j] = function(){
				console.log(j)
			}
		}(i))
	}

	return arr;
}

var myArr = test();
for(var j=0;j<10;j++){
	myArr[j]()
}


function person(size){
	this.name = 1;

	switch(size){
		case 'small':
		this.age = 2;
		break;
		case 'big';
		this.age = 2;
		break;
	}

	return this;
}
   var oPerson = new person(small);   //构造函数创建对象


   包装类
   new String(123)  临时对象 只在这一行起作用

   var str = 'cst'
   str.name = 'ccc'
console.log(str.name+'aaa') //'undefinedaaa'


原型  prototype
是function对象的一个属性，它定义了构造函数制造出的对象的公共"祖先"。
通过该构造函数产生的对象，可以集成该原型的属性和方法。
原型也是对象。

function person(){

}

person.prototype.lastName = 'deng';
__proto__:person.prototype


Person.prototype.name = 'sunny';
function Person (){
}
var oPerson = new Person()
console.log(oPerson.name);   //sunny

Person.prototype.name = 'cherry';
console.log(oPerson.name); //cherry

任何对象，沿着原型链一直往上找 找到头都是Object.prototype->{} (有一种对象除外)


var pro = {
	name:cst
}
var obj = Object.create(pro); //创建对象 obj.prototype = pro

var obj = Object.create(null)  //没有原型链



call/apply 改变this指向  传参方式不同

function test(){
	console.log(this) //谁调用this指向谁 window
} 

test()

var obj = {
	name:'mly';
}
test.call(obj);  //obj
test.call(null); //null


function test(a,b,c){
	console.log(this,a,b)
}
test.apply({name:cst},[1,2]);
test.call({name:cst},1,2)



应用
var numObj = {
	x:1,
	y:2
}
function add(a,b){
	console.log(this.x + a + this.y + b)
}
add.call(numObj,1,2)  //6


function Person(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}
function Student(name,age,sex,grade,clas){
	Person.call(this,name,age,sex);
	this.grade = grade;
	this.cals = clas;
}
var oStudent = new Student('cst',18,'male',1,1);

继承--圣杯模式 下游不会影响上游
Father.prototype.lastName = 'meng';
function Father(){

}
function Son(){

}
var inherit = (funciton(){
	var Cache = function(){   //永生

	};
	return function(Target,Origin){
		Cache.prototype = Origin.prototype;
		Target.prototype = new Cache();
		Target.prototype.constructor = Target;
	}
}
})();
inherit(Son,Father);

命名空间   
global.ls{  //过时了 现在使用立即执行函数
	......
}


with(global.ls){  //性能比较低 作用域方式和函数相同  
	console.log(message);
	console.log(global);
}

//封闭作用域
(function(){
	var a = '123'
})()


Object

对象查看属性
obj.prop
obj['prop']

对象的枚举
hasOwnproperty
in    'name' in obj
instanceof   obj instanceof Object 查看原型链上是否有原型  可以判断一个引用值是对象还是数组
obj instanceof Array  --false
arr instanceof Object --true


Object.prototype.toString.call(1)  ==> "[object Number]"
Object.prototype.toString.call(function) ==> "[object Function]"


判断对象还是数组：
1 arr instanceof Array
2 Object.prototype.toString
3 arr.constructor === Array 

只有 obj.function() this指向obj 其他window


var name = 222;
var a = {
	name:111,
	say:function(){
		console.log(this.name)
	}
}
a.say();
var b = {
	name:333,
	say:function(fun){
		fun()    //直接执行
	}
}
b.say(a.say);    //window 222
b.say = a.say;
b.say();

var a = 111;
function b (){
	this.a = 222;
			console.log(a); //111 AO{this:{foo:222,__proto__:print.prototype}}
			console.log(this.a); ///222
		}
		new b();
		



		浅层克隆

		var person = {
			name: 'nihao',
			age: "15",
			height: 176,
			sex: '24k man',

		}
		var obj = {};
		function clone(target, origin) {
			for (var prop in origin) {
				target[prop] = origin[prop];
			}
		}
		clone(obj, person);

		深度克隆
		1 判断是不是原始值
		2 判断是数组还是对象
		3 如果建立了数组或对象，对此我们再次深度拷贝，反之copy


		var person = {
			name: 'nihao',
			age: "15",
			height: 176,
			sex: '24k man', j
			wife:{
				name:'hhh',
				age:16
			}
		}
		var obj = {};


		function clone(target, origin) {

  var str = '[object Array]';                    //数组类型
  var toString = Object.prototype.toString;      //判断类型

  for (var prop in origin) {
    if (origin.hasOwnProperty(prop))           //判断是否是自己属性
    {
      if (typeof origin[prop] == 'object')       //如果是对象类型
      {
        if (toString.call(origin[prop]) == str)  //判断是数组还是对象
        {
          target[prop] = [];                  //数组
      }
      else {
          target[prop] = {};                  //对象
      }
      clone(target[prop], origin[prop]);
  }
  else {
        target[prop] = origin[prop]             //是原始值
    }}

}
}

clone(obj, person);

obj.wife.name = 'nihao';


数组
var arr = new Array('a',2,3)
var arr = new Array(8) //8 undefined

数组常用的方法

改变原数组

reverse() 逆转
sort() 小到大排序 
push(1,2,3) 后面插入 
pop() 最后一位去掉
unshift(1,2) 插入前面 
shift() 第一位去掉
splice(1,1,'a') 去掉并插入
1.切口的位置
2.选择的个数
3.新的值


不改变原数组

forEach(element,index,a)
从头至尾遍历数组，为每个元素调用指定的函数。
回调有三个参数：
第一个参数是遍历的数组内容
第二个参数是对应的数组索引
第三个参数是数组本身

filter()
创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
filter(function(currentValue, index,arr){
	return currentValue > 18
})
currentValue	必须。当前元素的值
index	        可选。当前元素的索引值
arr	            可选。当前元素属于的数组对象


map(function(x){
	return x
})
将调用的数组的每个元素传递给指定的函数，并返回一个数组，它包含该数组的返回值。

reduce() 左开始
reduceRight() 右开始
使用指定函数将元素进行组合，生成单个值。
reduce(function(previousValue,currentValue, currentIndex,array){
	return previousValue+currentValue; 计算和
	return (previousValue>currentValue) :previousValue ? currentValue 最大值

},initialValue)

previousValue	        必需。初始值, 或者计算结束后的返回值。
currentValue	必需。当前元素
currentIndex	可选。当前元素的索引
array	            可选。当前元素所属的数组对象。
initialValue	可选。传递给函数的初始值

reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，
接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。

回调函数第一次执行时，previousValue 和 currentValue 可以是一个值，如果 initialValue 在调用 reduce 时被提供，
那么第一个 previousValue 等于 initialValue ，并且currentValue 等于数组中的第一个值；如果initialValue 未被提供
，那么previousValue 等于数组中的第一个值，currentValue等于数组中的第二个值。

如果数组为空并且没有提供initialValue， 会
抛出TypeError 。如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 
或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。

// arr.reduce(callback,[initialValue])
// callback （执行数组中每个值的函数，包含四个参数）

// previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
// currentValue （数组中当前被处理的元素）
// index （当前元素在数组中的索引）
// array （调用 reduce 的数组）
// initialValue （作为第一次调用 callback 的第一个参数。）

slice(0,1)
slice(从该位开始截取, 截取到该位,取出截取到的)

concat() 后面的数组拼接到前面的数组上
a.concat(b)

join('123') 数组合并成字符串
toString() 转化为字符串

split('123')字符串拆成数组






// push                         //加在后 
// var arr = [1];
// var num = arr.push(2, 3);
// console.log(arr, num)        //[1,2,3],3

// pop
// var arr = [1, 2, 3, 4, 5];
// var num = arr.pop()
// console.log(arr, num)         //[1,2,3,4],5       


// push 源码
// Array.prototype.mypush = function () {
// 	for (var i = 0; i < arguments.length; i++) {
// 		this[this.length] = arguments[i];
// 	}
// 	return this.length
// }


// shift
// var arr = [1, 2, 3];
// var num = arr.shift();
// console.log(arr, num)       //[2,3],1

// unshift                    //加于前 
// var arr = [1, 2, 3];
// var num = arr.unshift(4, 5);
// console.log(arr, num)       //[4,5,1,2,3],5


// sort                       //
// 排序（内部是优化的冒泡排序）
// var arr = [101, 31, 223, 142, 2,];
// arr.sort();
// console.log(arr);           //(5)[101, 142, 2, 223, 31]    

// a.sort(function (a, b) {       //从小到大   
//   return a - b;             // b - a;  从大到小    Math.random() - 0.5l;  乱序



//   splice
//   1.切口的位置
//   2.选择的个数
//   3.新的值

//   var arr = [1, 2, 3, 4, 5, 6, 7]
//   arr.splice(2, 0, a)          //[1,2,a,4,5,6,7]


//   forEach()

//   var data = [1, 2, 3, 4, 5];

//   计算元素的和值
//   var sum = 0;
//   data.forEach(funciton(value){
//   	sum += value;
//   });                   //console.log(sum)  ==> 15

//   每个数组元素的值自加1
//   data.forEach(function (v, i, a) {
//   	a[i] = v + 1;
//   });                         //console.log(data)  ==>[2,3,4,5]




//   map()
//   将调用的数组的每个元素传递给指定的函数，并返回一个数组，它包含该数组的返回值。

//   a = [1, 2, 3];
//   b = a.map(function (x) {
//   	return x * x;
//   });                  //console.log(b)   ==> [1,4,9]





//   redece()   reduceRight()     //reduceRight 从右遍历数组
//   使用指定函数将元素进行组合，生成单个值。

//   var a = [1, 2, 3, 4, 5]
//   var sum = a.reduce(function (x, y) {    //数组求和
//   	return x + y
//   }, 0);

//   var product = a.reduce(function (x, y) {  //数组求积
//   	return x * y
//   }, 0);

//   var max = a.reduce(function (x, y) {
//   	return (x > y) ? x : y;
//   });         //求最大值





//   join()
//   数组合并成字符串

//   var arr = [1, 2, 3]
//   var a = arr.join('?');        //a = '1?2?3'       

//   源码
//   Array.prototype.join = function (reg) {
//   	var str = '';
//   	for (var i = 0; i < this.length - 1; i++) {
//   		str += this[i] + reg;
//   	}
//   	str += this[this.length - 1];
//   	return str;
//   }


//   split()-- - string
//   字符串拆成数组


//   concat()
//   后面的数组拼接到前面的数组上
//   var a = [1, 2, 3]
//   var b = [3, 4, 5]
//   a.concat(b);      //123345


//   slice()
//   slice(从该位开始截取, 截取到该位)
//   var arr = [1, 2, 3, 4, 5, 6]
//   newArr = arr.slice(1, 3)


类数组  -->对象
1.可以利用属性名模拟数组的特性
2.可以动态的增长length属性
3.如果强行让类数组调用push方法，则会根据length属性值的位置进行属性的扩充。

var obj = {
	"0": 'a',
	"1": 'b',
	"2": 'c',
	"length": 3,
	"push": Array.prototype.push
	"splice": Array.prototype.splice
}
属性要为索引(数字)属性，必须要有length属性，最好加上push

数组去重的方法
var arr = [1,2,3,1,2,3,4,5];
Array.prototype.unique = function(){
	var memory = {};
	var newArr = [];
	for(var i =0; i<this.length;i++){
		if(!memory[this[i]]){
			newArr.push(this[i]);
			memory[this[i]] = true;
		}
	}
	return newArr;
}
var a = arr.unique();


parseCookie()
var cookieStr = 'key1=value1;key2=value2;key3=value3';
var cookieObj = {

}

function parseCookie(str,obj){
	var cookieArr = str.split(';');
	cookieArr.reduce(function(prevEle,ele,index){
		var arr = ele.split('=');
		obj[arr[0]] = arr[1];
		return obj;
	},obj);    //没有obj会少一次 why?
}

parseCookie(cookieStr,cookieObj);
console.log(cookieObj);


如何知道一串字符串中每个字母出现的次数？

var arrString = 'abbccc';  

var b = arrString.split('').reduce(function(res, cur,index,arr) {

	if(res[cur]){

		res[cur]++    //[].a++ --> [a:2]
	}else{

		res[cur] = 1;   // [].a =1  --> [a:1]

	}

	return res; //res--下行[]
},[])

// [] "a" undefined
// [a: 1] "b" undefined
// [a: 1, b: 1] "b" 1
// [a: 1, b: 2] "c" undefined
// [a: 1, b: 2, c: 1] "c" 1
// [a: 1, b: 2, c: 2] "c" 2



类数组转化为数组：

var oRadioArr = Array.prototype.slice.call(document.getElementsByClassName('btn'), 0);


后是前的一部分
sexStr.indexOf(ele.sex) != -1


forEach(element,index,a)
filter(function(currentValue,index,array))
reduce(function(previousValue,currentValue, Index,array){
},initialValue)










try {

} catch (e) {
	console.log(e.name, e.message);
} finally {

}

Error.name的六种值对应的信息：
1. EvalError：eval()的使用与定义不一致
2. RangeError：数值越界
3. ReferenceError：非法或不能识别的引用数值
4. SyntaxError：发生语法解析错误
5. TypeError：操作数类型错误
6. URIError：URI处理函数使用不当


'use strict' ES5严格模式
不兼容ES3不规则的方法 只使用ES5新规范
全局严格模式
局部严格模式（推荐）

不支持with arguments callee func caller 
变量赋值前必须声明，
局部this必须被赋值（person.call(null/undefined)赋值什么就是什么）
拒绝重复属性和参数




DOM -->Document Object Model
DOM对象即为素质对象，由浏览器厂商定义，用来操作html和css功能的一类对象的集合。
也有人称DOM是对HTML以及XML的标准编程接口。



DOM基本操作

查
document 代表整个文档
document.getElementById()           //元素id 在Ie8以下的浏览器，不区分id大小写，而且也返回匹配name属性的元素
document.getElementsByTagName()     // 标签名
document.getElementsByName();       //IE不支持需注意，只有部分标签name可生效（表单，表单元素，img，iframe）
document.getElementsByClassName()   // 类名 -> ie8和ie8以下的ie版本中没有，可以多个class一起

.querySelector()                    // css选择器   在ie7和ie7以下的版本中没有
.querySelectorAll()                 // css选择器 在ie7和ie7以下的版本中没有

增
document.createElement();           //元素节点
document.createTextNode();          //文本节点
document.createComment();           //注释节点
document.createDocumentFragment();  //文档碎片节点

插----剪切操作
PARENTNODE.appendChild();
PARENTNODE.insertBefore(a, b)       //insert a before b

删
parent.removeChild();
child.remove();                      //删自己

替换
parent.replaceChild(new, origin);


封装函数insertAfter()；功能类似insertBefore();

Element.prototype.insertAfter = function (targetNode,afterNode){

	var beforeNode = afterNode.nextElementSibling;
	if(beforeNode = null;){
		this.appendChild(targetNode);
	}else{
		this.insertBefore(targetNode, beforeNode);
	}
}

var div = document.getElementsByTagName('div')[0];

遍历节点树：
parentNode                --> 父节点（最顶端的parentNode为#document）  
childNodes                --> 子节点们
firstChild                --> 第一个子节点
lastChild                 -->最后一个子节点
nextSibling               -->后一个兄弟节点 
previousSibling           -->前一个兄弟节点

基于元素节点树的遍历
parentElement             --> 返回当前元素的父元素节点（IE不兼容）
children                  --> 只返回当前元素的元素子节点
firstElementChild         --> 返回的是第一个元素节点（IE不兼容）
lastElementChild          --> 返回的是最后一个元素节点（IE不兼容）
nextElementSibling        -->返回的是后一个兄弟元素节点（IE不兼容）
previousElementSibling    -->前一个兄弟元素节点（IE不兼容）
node.childElementCount === node.children.length 当前元素节点的子元素节点个数（IE不兼容）

节点的类型
元素节点   —— 1
属性节点   —— 2
文本节点   —— 3
注释节点   —— 8
document  —— 9
DocumentFragment  ——  11 
获取节点类型   nodeType 

节点的四个属性
nodeName        -->元素的标签名，以大写形式表示,只读
nodeValue       -->Text节点或Comment节点的文本内容,可读写
nodeType        -->该节点的类型，只读
attributes      -->Element节点的属性集合

节点的一个方法 
Node.hasChildNodes();


Element节点的一些属性
innerHTML()
innerText     (老版本火狐不兼容)
textContent   (老版本IE不好使)


Element节点的一些方法
ele.setAttribute();       //设置id class等  .setAttribute('id','only');
ele.getAttribute();

1.getElementById方法定义在Document.prototype上，即Element节点上不能使用。
2.getElementsByName方法定义在HTMLDocument.prototype上，即非html中的document以外不能使用(xml document,Element)
3.getElementsByTagName方法定义在Document.prototype 和 Element.prototype上
4.HTMLDocument.prototype定义了一些常用的属性，body,head,分别指代HTML文档中的<body><head>标签。
5.Document.prototype上定义了documentElement属性，指代文档的根元素，在HTML文档中，他总是指代<html>元素
6.getElementsByClassName、querySelectorAll、querySelector在Document,Element类中均有定义





var a = new Date()
日期对象 Date()
getDate()  几号
getDay()   星期几
getFullyear() 年
getTime()   1970 年 1 月 1 日至今的毫秒数。



setInterval();   每隔一段时间去执行
setTimeout();  隔一段时间去执行
setTimeout(function{alert(abc)},1000)

clearInterval();      清理定时器
clearTimeout();
全局对象window上的方法，内部函数this指向window
注意 ：setInterval(“func()”,1000);


练习题：计时器，到一分钟停止

var minutesNode = document.getElementsByTagName('input')[0];
var secondsNode = document.getElementsByTagName('input')[1];

var minutes = 0, seconds = 0;

setInterval(function(){
	seconds++;
	if (seconds == 60){

		seconds = 0;
		minutes ++;

	}

	secondsNode.value = seconds;
	minutesNode.value = minutes;


},1);

防抖
函数防抖就是在函数需要频繁触发的情况时，只有足够空闲的时间，才执行一次。
（公交司机等人都上车才出站一样）

场景：
实时搜索 (keyup)
拖拽 (mousemove)

function debounce(handler,delay){    
	var timer = null;
	
	return function(e){
		var _self = this;
		var _arg = arguments;
		clearTimeout(timer);
		timer = setTimeout(function(){
			handler.apply(_self,_arg); 	 // 通过 ‘this’ 和 ‘arguments’ 获取函数的作用域和变量
			handler()   //错误方法
		},delay)
	}
}

function getDataByAjax(){
	// console.log(e);
	var keyWords = this.value;
	var data = '' + new Date().getTime();
	console.log(keyWords,data)
} 
inp.oninput = debounce(getDataByAjax,1000);



其实Javascript并没有重载函数的功能，但是Arguments对象能够模拟重载。
Javascrip中国每个函数都会有一个Arguments对象实例arguments，它引用着函数的实参，
可以用数组下标的方式"[]"引用arguments的元素。
arguments.length为函数实参个数，arguments.callee引用函数自身。



节流
函数节流就是预定一个函数只有在大于等于执行周期时才执行，周期内调用不执行。
好像水滴攒到一定重量才会下落一样。

场景
窗口调整(resize)
页面滚动(scroll)
抢购疯狂点击(mousedown)

function throttle(handler,wait){
	vas lastTime = 0;
	return function(){
		var curTime = new Date().getTime();
		if(curTime - lastTime >= wait){
			handler.apply(this,arguments);
			lastTime = curTime;
		}
	}
}







查看滚动条的滚动距离

window.pageXOffset    IE8及IE8以下不兼容
window.pageYOffset

document.body.scrollLeft
document.body.scrollTop
document.documentElement.scrollLeft
document.documentElement.scrollTop
兼容性比较混乱，用时取两个值相加，因为不可能存在两个同时有值


封装兼容性方法，g求滚动轮滚动距离getScrollOffset()
function getScrollOffset(){
	if(window.pageXOffset){
		return {
			x : window.pageXOffset,
			y : window.pageYOffset
		}
	}else{
		return {
			x : document.body.scrollLeft + document.documentElement.scrollLeft,
			y : document.body.scrollTop + document.documentElement.scrollTop
		}
	}
}



查看视口的尺寸

window.innerWidth        IE8及IE8以下不兼容（加上 滚动条宽度 / 高度）
window.innerHeight

document.documentElement.clientWidth    标准模式下，任意浏览器都兼容
document.documentElement.clientHeight

document.body.clientWidth                适用于怪异模式下的浏览器
document.body.clientHeight



封装兼容性方法，返回浏览器视口尺寸getViewportOffset()

function getViewSize(){
	if(document.compatMode == 'BackComPat'){
		return:{
			w:document.body.clientWidth;
			h:document.body.height;
		}
	}else{
		return{
			w:document.documentElement.clientWidth;
			h:document.documentElement.clientHeight;
		}
	}
}



查看元素的几何尺寸

dom.getBoundingClientRect()    兼容性很好
该方法返回一个对象，对象里面有left,top,right,bottom等属性。
left和top代表该元素左上角的X和Y坐标，
right和bottom代表元素右下角的X和Y坐标
height和width属性老版本IE并未实现
返回的结果并不是“实时的”


查看元素的尺寸

dom.offsetWidth  //视觉上的尺寸 包含padding
dom.offsetHeight   

查看元素的位置

dom.offsetLeft   //包含margin
dom.offsetTop
对于无定位父级的元素，返回相对文档的坐标。
对于有定位父级的元素，返回相对于最近的有定位的父级的坐标。
(无论是 left 还是margin-left等都是距离。)


dom.offsetParent
返回最近的有定位的父级，如无，返回body, body.offsetParent 返回null
eg：求元素相对于文档的坐标 getElementPosition()


封装得到元素位置

function getDomPosition(dom){

	var pos = {left:dom.offsetLeft,top:dom.offsetTop}

	dom = dom.offsetParent;

	while(dom != document.body){

		pos.left += dom.offsetLeft;
		pos.top += dom.offsetTop;
		dom = dom.offsetParent;
	}
	return pos
}


让滚动条滚动
window上有三个方法
scroll(),scrollTo(),   scrollBy();   // window.scroll(x,y);
三个方法功能类似，用法都是将x,y坐标传入。即实现让滚动轮滚动到当前位置。

区别：scrollBy()会在之前的数据基础之上做累加。
eg：利用scrollBy() 快速阅读的功能



查找，操作样式表
document.styleSheets
该属性存储了一个html文档里面的所有css样式表的集合




脚本化CSS

读写元素css属性
dom.style.prop
可读写行间样式，没有兼容性问题，碰到float这样的关键字属性，前面应加css
eg:float — > cssFloat
符合属性必须拆解，组合单词变成小驼峰式写法
写入的值必须是字符串格式

查询计算样式
window.getComputedStyle(ele,null);
计算样式只读
返回的计算样式的值都是绝对值，没有相对单位
IE8 及 IE8以下不兼容

查询样式
ele.currentStyle
计算样式只读
返回的计算样式的值不是经过转换的绝对值
IE独有的属性

查找，操作样式表
document.styleSheets
该属性存储了一个html文档里面的所有css样式表的集合


封装兼容性方法getStyle(obj,prop)

function getStyle (dom,sttr,ab){
	if(dom.currentStyle){
		return dom.currentStyle[attr]
	}else{
		return window.getComputedStyle(dom,ab == undefined ? null : ab)[attr];
         //ab查询伪类 不查询的时候null
     }
 }


 如何绑定事件

 1.ele.onxxx = function (event) {}
 兼容性很好，但是一个元素只能绑定一个处理程序
 基本等同于写在HTML行间上
 2.ele.addEventListener(type, fn, false);
 IE9以下不兼容，可以为一个事件绑定多个处理程序
 true - 事件句柄在捕获阶段执行
 false- 默认。事件句柄在冒泡阶段执行
 3.ele.attachEvent('on' + type, fn);
 IE独有，一个事件同样可以绑定多个处理程序

 事件处理程序的运行环境

 1.ele.onxxx = function (event) {}
 程序this指向是dom元素本身
 2.obj.addEventListener(type, fn, false);
 程序this指向是dom元素本身
 3.obj.attachEvent(‘on’ + type, fn);
 程序this指向window

 封装兼容性的 addEvent(element, type, handler)


 解除事件处理程序

 ele.onclick = false/null; 
 ele.removeEventListener(type, fn, false);
 ele.detachEvent('on' + type, fn);
 注:若绑定匿名函数，则无法解除




 事件冒泡
 结构上（非视觉上）嵌套关系的元素，会存在事件冒泡的功能，
 即同一事件，自子元素冒泡向父元素。（自底向上）
 事件捕获
 结构上（非视觉上）嵌套关系的元素，会存在事件捕获的功能，
 即同一事件，自父元素捕获至子元素（事件源元素）。（自底向上）
 IE没有捕获事件
 触发顺序，先捕获，后冒泡
 focus，blur，change，submit，reset，select 等事件不冒泡

 
 取消冒泡

 W3C标准 event.stopPropagation() 但不支持ie9以下版本
 IE独有 event.cancelBubble = true

 封装取消冒泡的函数 stoppropagation(event)

 阻止默认事件

 默认事件 — 表单提交，a标签跳转，右键菜单等
 1.return false;  以对象属性的方式注册的事件才生效
 2.event.preventDefault(); W3C标注，IE9以下不兼容
 3.event.returnValue = false; 兼容IE

 封装阻止默认事件的函数 preventDefault(event);

 事件对象

 event || window.event 用于IE
 事件源对象:
 event.target   火狐独有的
 event.srcElement  Ie独有的
 这俩chrome都有
 兼容性写法

 事件委托 --触发事件的元素与被监听的元素不一定是一个元素
 利用事件冒泡，和事件源对象进行处理
 优点：
 1. 性能 不需要循环所有的元素一个个绑定事件
 2. 灵活 当有新的子元素时不需要重新绑定事件

 var ul=document.querySelector('ul')
 ul.addEventListener('click',function(e){
 	var el = e.target

 	while(el.tagName !== 'LI'){

 		if(el === ul){
 			el = false
 			break;
 		}

 		el=el.parentNode
 	}

 	if(el.tagName&&el.tagName == 'LI'){
 		console.log('ok')
 	}else{
 		console.log('你点击的不是li')
 	} 
 })


 鼠标事件

 click（只能左键） contextmenu（鼠标右键） mousemove（移动）
 mousedown（左右都行） mouseup（抬起）
 mouseover  mouseout      //从子元素进入目标或目标进入子元素都会再次触发
 mouseenter mouseleave   //视目标元素和子元素为整体
 不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件。对应mouseout
 只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。对应mouseleave
 用button来区分鼠标的按键，0/1/2
 DOM3标准规定:click事件只能监听左键,只能通过mousedown 和 mouseup来判断鼠标键
 oBox.onmouseup = function(e){
 	console.log(e.button)
 }
 如何解决mousedown和click的冲突  -->通过mousedown模拟clink 放弃使用click

 键盘事件
 keydown keyup keypress
 keydown > keypress > keyup
 keydown和keypress的区别
 keydown 可以响应任意键盘按键，keypress只可以相应字符类键盘按键
 keypress返回ASCII码，可以转换成相应字符

 文本操作事件
 input,focus,blur,change

 function addHandler(element,type,handler){
 	if(element.addEventListener){
 		element.addEventListener(type,handler,false)
 	}else if(element.attachEvent){
 		element.attachEvent('on' + type ,handler)
 	}else{
 		element['on'+type] = handler;
 	}
 }

 function removeHandler(element,type,handler){
 	if(element.removeEventListener){
 		element.removeEventListener(type,handler,false)
 	}else if(element.detachEvent){
 		element.detachEvent('on' + type,handler)
 	}else{
 		element['on' + type ] = null;

 	}
 }

 function getEvent (event){
 	return event ? event : window.event;
 }
 function getTarget(event){  //目标对象
 	return event.target || event.srcElement
 }
 function preventDefault (event){
 	if(event.preventDefault){
 		event.preventDefault()
 	} else{
 		event.returnValue = false;
 	}
 }
 function stoppropagation(event){
 	if(event.stopPropagation){
 		event.stopPropagation()
 	}else{
 		evenvt.cancelBubble = true;
 	}
 }

 拖拽

 　　var div = document.getElementById("div")
 　　div.onmousedown = function(ev){
 	　　　　var oevent = ev || event;
 	　　　　var distanceX = oevent.clientX - div.offsetLeft;
 	　　　　var distanceY = oevent.clientY - div.offsetTop;
 	　　　　document.onmousemove = function(ev){
 		　　　　　　var oevent = ev || event;
 		　　　　　　div.style.left = oevent.clientX - distanceX + 'px';
 		　　　　　　div.style.top = oevent.clientY - distanceY + 'px'; 
 	　　　　}
 	　　　　document.onmouseup = function(){
 		　　　　　　document.onmousemove = null;
 		　　　　　　document.onmouseup = null;
 	　　　　}
 　　}



 解决onmousedown和click冲突

 var downTime = 0;
 var upTime = 0;
 var timer = null;

 oImg.onmousedown = function(e){
 	downTime = e.timeStamp;
 	var _self = this;
 	setTimeout(function(){
 		_self.className = 'active';
 	},300)
 }

 oImg.onmouseup = function(e){
 	upTime = e.timeStamp;
 	if( upTime - downTime < 300){
 		window.open('www.hao123.com')
 		clearTimeout(timer);
 	}else{
 		this.className = '';
 	}
 }



JSON: JavaScript Object Notation




 JSON是一种传输数据的格式（以对象为样板，本质上就是对象，但用途有区别，对象就是本地用的，json是用来传输的）

 JSON.parse();  string — > json
 JSON.stringify(); json — > string



 js加载的缺点：加载工具方法没必要阻塞文档，过得js加载会影响页面效率，一旦网速不好，那么整个网站将等待js加载而不进行后续渲染等工作。
 有些工具方法需要按需加载，用到再加载，不用不加载，。

 异步加载js
 javascript 异步加载 的 三种方案
 1.defer 异步加载，但要等到dom文档全部解析完才会被执行。 IE也能用。
 2.async 异步加载，加载完就执行，async只能加载外部脚本，不能把js写在script 标签里 
 1 2 执行时也不堵塞页面
 3.创建script，插入到DOM中，加载完毕后callBack （最常用）

 <script src=""  async></script> /
 <script src=""  defer></script> /

 var oScript = document.createElemtn('script');
 oScript.src = './index.js';
 document.body.appendChlid(oScript);
 oScript.onload = function(){
 	console.log(a)
 }


 兼容性写法

 oDiv.onclick = function(){
 	loadScript('index.js','init')
 }
//inde.js
var obj = {
	init:function(){
		console.log(12)
	}
}

function loadScript(url,callback){
	var oScript = document.createElement('script');
	oScript.src = url;
			if(oScript.readyState){  //IE
				oScript.onreadystatechange = function(){
					if(oScript.readyState == 'complete'||oScript.readyState =='loaded'){
						oScript.onreadystatechange = null;
						obj[callback]()
					}
				}
			}else{
				oScript.onload = function(){  //非IE
					oScript.onload = null;
					obj[callback]()
				}
			}
			document.body.appendChild(oScript);
		}




		js时间线

		1、创建Document对象，开始解析web页面。
		解析HTML元素和他们的文本内容后添加Element对象和Text节点到文档中。
		这个阶段 document.readyState = 'loading'。

		2、遇到link外部css，创建线程加载（异步加载），并继续解析文档。
		3、遇到script外部js，并且没有设置async、defer，浏览器加载，并阻塞，等待js加载完成并执行该脚本，然后继续解析文档。
		4、遇到script外部js，并且设置有async、defer，浏览器创建线程加载，并继续解析文档。
		对于async属性的脚本，脚本加载完成后立即执行。（异步禁止使用document.write()）

		5、遇到img等，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档。

		6、当文档解析完成，document.readyState = 'interactive'
		7、文档解析完成后，所有设置有defer的脚本会按照顺序执行。（注意与async的不同,但同样禁止使用document.write()）;
		8、document对象触发DOMContentLoaded事件，这也标志着程序执行从同步脚本执行阶段，转化为事件驱动阶段。

        9、当所有async的脚本加载完成并执行后、img等加载完成后，document.readyState = 'complete'，window对象触发load事件。//window.onload

        10、从此，以异步响应方式处理用户输入、网络事件等。

//DOMcontentloaded 只能用 addEventListener 绑定
document.addEventListener('DOMContentLoaded',function(){
	console.log('')
})



BOM

定义：Browser Object Model，定义了操作浏览器的接口
BOM对象: Window, History,Navigator,Screen, Location等
由于浏览器厂商的不同，Bom对象的兼容性极低。一般情况下，我只用其中的部分功能。

Window
window.open() - 打开新窗口
window.close() - 关闭当前窗口
window.moveTo() - 移动当前窗口
window.resizeTo() - 调整当前窗口的尺寸

History对象
history.back() - 与在浏览器点击后退按钮相同
history.forward() - 与在浏览器中点击按钮向前相同

Navigator对象 
包含有关访问者浏览器的信息

screen对象
screen.availWidth - 可用的屏幕宽度
screen.availHeight - 可用的屏幕高度

Location对象
location.hostname 返回 web 主机的域名
location.pathname 返回当前页面的路径和文件名
location.port 返回 web 主机的端口 （80 或 443）
location.protocol 返回所使用的 web 协议（http:// 或 https://）
location.href 属性返回当前页面的 URL。
location.pathname 属性返回 URL 的路径名。（url后一部分）
location.assign() 方法加载新的文档。

location.hash
“#”后是对浏览器操作的，对服务器无效，实际发出的请求也不包含”#”后面的部分
“#”被算作历史记录




三种标准模式的写法
1.<!DOCTYPE html>
2.<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
3.<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
其他都是怪异模式


<label>   for 属性  —  > js中表示htmlFor
<input type="text" id="btn">
<label for="btn"></label>    / 
绑定到一起 可以一起选中



<a href="javascript:void(0)">单击此处什么也不会发生</a> /
阻止默认事件 renturn false  e.preventDefault()

img图片预加载 懒加载
btn.onclick = function(){
	var oImg = new Image();
	oImg.src = ''
	oImg.onload = function(){
		document.body.appendChild(oImg)
	}
}




文档碎片
createDocumentFragment()　创建文档碎片节点
var oFrag = document.createDocumentFragment();
for(var i=0;i<1000;i++){
	var oLi = document.createElement('li');
	oli.innerText = i;
	oFrag.appendChild(oLi)
}
oUl.appendChild(oFrag);

断点调试
debugger
console.log()


bind() 是返回对应函数，便于稍后调用
apply() call() 则是立即调用 




自己编写getByClassName
Document.prototype.getByClassName(cn){
	var oDom = Array.prototype.slice.call(document.getElementsByTagName('*'));

	var allArr = {
		length:0
	};

	function dealClass(str){
		var regExp = /\s+/g; //匹配空格
		return str.replace(RegExp,' ').trim().split(' ');
	}

	oDom.forEach(function(ele,index){
		var itemClass = ele.className;
		var itemArr = dealClass(itemClass);
		for(var i=0;i<itemArr.length;i++){
			if(itemArr[i]==cn){
				allArr[allArr.length] = ele;
				allArr.length++;
				break;
			}
		}
	})
	return allArr;
}



正则表达式
var reg = /pattern/
var reg = new regExp('pattern')

RegExp 对象方法

compile	编译正则表达式。	
exec	//返回的是数组
检索字符串中指定的值。返回找到的值，并确定其位置。
test  //返回 true 或 false。
检索字符串中指定的值。


支持正则表达式的 String 对象的方法

search	//返回的是index
检索与正则表达式相匹配的值。 
match	//返回的是数组
找到一个或多个正则表达式的匹配。
replace(reg,123)	//返回的是替换后的值
替换与正则表达式匹配的子串。	
split	//返回的是按照reg分割后的数组
把字符串分割为字符串数组。


修饰符	描述
i	执行对大小写不敏感的匹配。
g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
m	执行多行匹配。

方括号
方括号用于查找某个范围内的字符：
[abc]	查找方括号之间的任何字符。
[^abc]	查找任何不在方括号之间的字符。
[0-9]	查找任何从 0 至 9 的数字。
[a-z]	查找任何从小写 a 到小写 z 的字符。
[A-Z]	查找任何从大写 A 到大写 Z 的字符。
[A-z]	查找任何从大写 A 到小写 z 的字符。
(red|blue|green)	查找任何指定的选项。

元字符
元字符（Metacharacter）是拥有特殊含义的字符：
.	查找单个字符，除了换行和行结束符。
\w	查找单词字符。==[a-zA-Z0-9]
\W	查找非单词字符。 ==[^a-zA-Z0-9]
\d	查找数字。   ==[0-9]
\D	查找非数字字符。==[^0-9]
\s	查找空白字符。
\S	查找非空白字符。
\b	匹配单词边界。
\B	匹配非单词边界。
\0	查找 NUL 字符。
\n	查找换行符。
\f	查找换页符。
\r	查找回车符。
\t	查找制表符。
\v	查找垂直制表符。
\xxx	查找以八进制数 xxx 规定的字符。
\xdd	查找以十六进制数 dd 规定的字符。
\uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。

量词
n+	匹配任何包含至少一个 n 的字符串。
n*	匹配任何包含零个或多个 n 的字符串。
n?	匹配任何包含零个或一个 n 的字符串。
n{X}	匹配包含 X 个 n 的序列的字符串。
n{X,Y}	匹配包含 X 或 Y 个 n 的序列的字符串。
n{X,}	匹配包含至少 X 个 n 的序列的字符串。
n$	匹配任何结尾为 n 的字符串。
^n	匹配任何开头为 n 的字符串。
?=n	匹配任何其后紧接指定字符串 n 的字符串       /123(?=h)/g;
?!n	匹配任何其后没有紧接指定字符串 n 的字符串。  /123(?!h)/g;

RegExp 对象属性

global	RegExp 对象是否具有标志 g。	
ignoreCase	RegExp 对象是否具有标志 i。	
lastIndex	一个整数，标示开始下一次匹配的字符位置。	
multiline	RegExp 对象是否具有标志 m。	
source	正则表达式的源文本。	




parseFloat() 函数可解析一个字符串，并返回一个浮点数
parseInt() 函数可解析一个字符串，并返回一个整数。
parseInt(string, radix)  //以radix进制进行解析


Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数
Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数
Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数（数学课规则）


运动

var oDivArray = document.getElementsByTagName('div');

var timer = null;
var targetObj = {
	width:400,
	height:400,
	opacity: 50,
	left: 300,
	top: 200,
	borderWidth:151

}
oDivArray[0].onclick = function(){
	startMove(this,targetObj,function(){
		startMove(this,{width:100,height:100,opacity:100,left:0,top:100,borderWidth:1},function(){
			startMove(oDivArray[1],targetObj,function(){
				startMove(this,{width:100,height:100,opacity:100,left:0,top:300,borderWidth:1},function(){
					alert('over');
				})
			})
		})
	})

}
function getStyle (obj,attr){
	if(window.getComputedStyle){
		return window.getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}

function startMove (obj,targetObj,cb){

	clearInterval(obj.timer);
	var iSpeed,iCur;


	obj.timer = setInterval(function(){

				var bStop = true;    //锁

				for (var attr in targetObj){
					if(attr != 'opacity'){
						iCur = parseInt(getStyle(obj,attr));

					}else{
						iCur = parseFloat(getStyle(obj,attr)) * 100;
					}     

					iSpeed = (targetObj[attr] - iCur) / 10;    
					iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);  //0.2 floor 0
					if(attr == 'opacity'){
						obj.style.opacity = (iCur + iSpeed) / 100;

					}else{
						obj.style[attr] = iCur + iSpeed + 'px';
					}    
					if(targetObj[attr] !== iCur){
						bStop = false;   //锁
					}
				}
				if(bStop){    //执行回调函数
					clearInterval(obj.timer); 
					(typeof cb) === 'function' && cb.apply(obj);

				}
			},50);
}




// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 


网络


当你在浏览器里输入一个url发生了什么

1.浏览器通过DNS域名解析到服务IP（ping www.baidu.com）
2.客户端(浏览器)通过TCP协议建立到服务器的TCP连接  (三次握手)
3.客户端（浏览器）向web服务器端（HTTP服务器）发送HTTP协议包，请求服务器里的资源文档 （telnet 模拟）
4.服务器向客户端发送HTTP协议应答包
5.客户端和服务器断开（四次挥手），客户端开始解释处理HTML文档



Asynchronous javascript and xml 
Ajax：一种不用刷新整个页面便可与服务器通讯的办法
Web的传统模型。客户端向服务器发送一个请求，服务器返回整个页面，如此反复
在Ajax模型中，数据在客户端与服务器之间独立传输。服务器不再返回整个页面

ajax过程
1 浏览器
2 ajax对象
3 open('GET','url',true)
4 send()
5 onreadystatechange
6 处理

Method：GET  POST等
action：address
enctype: 规定在发送表单数据之前如何对其进行编码
application/x-www-form-urlencoded	      在发送前编码所有字符（默认）       
multipart/form-data	(<input type='file'>) 不对字符编码。在使用包含文件上传控件的表单时，必须使用该值。

重要的两个对象
new XMLHttpRequest() 
new ActiveXObject('Microsoft.XMLHttp')

Ajax 对象方法

abort()  停止当前请求
getAllResponseHeaders()     把http请求的所有响应首部作为键/值对返回
getResponseHeader('server') 返回值指定首部的串值
open('method', 'url', true) 建立对服务器的调用，method参数可以是GET,POST或PUT。url参数可以是相对URL或绝对URL。这个方法还包括3个可选参数
send(content)               向服务器发送请求
setRequestHeader('laber','value') 把指定首部设置为所提供的值。在设置任何首部之前必须先调用 open()

属性

onreadystatechange 状态改变的事件触发器
readyState  
对象状态（integer），状态值
0 = 未初始化，未调用send()方法
1 = 读取中，已调用send()，正在发送请求
2 = 已读取，send方法执行完成，接收到全部响应内容
3 = 交互中，正在解析响应内容
4 = 完成，响应内容解析完成

statusText服务器返回的状态文本信息
responseText 获得字符串形式的响应数据
respstatus 服务器返回的状态码 
404 = “文件未找到”
200 = “成功”
500 = “服务器内部错误” 
304 = “资源未被修改”


function ajax(method,url,callback,data,flag){
	var xml = null;
	if(window.XMLHttpRequest){
		var xml = new XMLHttpRequest();
	}else{
		xml = new ActiveXObject('Microsoft.XMLHttp');
	}

	if(method == 'GET'){
		xml.open('GET',url + '?' + data,true);
		xml.send();
	}else if(method == 'POST'){
		xml.open('POST',url,flag);
		xml.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xml.send(data);
	}
	xml.onreadystatechange = function(){
		if(xml.readyState == 4){
			if(xml.status == 200){
				callback(xml.responseText);
			}
		}
	}
}

// btn.onclick = function(){
//     ajax('GET','./getNews.php',dealData,'',true);
// }
// submit.onclick = function(e){
//     e.preventDefault();
//     var userVal = user.value;
//     var ageVal = age.value;
//     ajax('POST','./post.php',showData,'username=' + userVal + '&age=' + ageVal,true );
// }


浏览器有一个很重要的概念——同源策略(Same-Origin Policy)。
所谓同源是指，域名，协议，端口相同。
不同源的客户端脚本(javascript、ActionScript)在没明确授权的情况下，不能读写对方的资源。
简单的来说，浏览器不允许包含在腾讯页面的脚本访问阿里巴巴页面的数据资源，会受到同源策略的限制

url(资源定位器)的构成 
协议:http / https   //http 80 https 403
域名: zhidao.baidu.com
端口: 80/ 90 / 3000  等
这里的同源指的是：同协议，同域名和同端口

域名是倒着解析的
.com 顶级域名
baidu.com （一）二级域名 
zhidao.baidu.com  （二）三级域名
www 二级域名前缀  表示万维网维护的
www.baidu.com  属于特殊的三级域名
zhidao.baidu.com 属于 百度自己维护的网络地址

www拓展
最开始，Internet提供的主要服务有万维网（WWW）、文件传输（FTP）、电子邮件（E-mail）、远程登录（Telnet）等。
也就是说，那个时候的www（World Wide Web）是标识这是一个需要你用浏览器来访问的网页服务，而不是需要你用telnet访问的bbs，或者ftp工具访问的文件传输服务。
所以那个时候，网站主页的域名前面要用www。
baidu有多个服务区为他服务。不同的子域名对应处理不同服务的服务器现在，把任务分配到多台服务器，不需要通过子域名来区分了。
http:goole.com一个地址背后有多台服务器支持运作。还猜用www只是尊重用户习惯，方便用户看。国外其实已经不用写www了。

com org net 属于顶级域名，是在全世界范围内解析的，cn hk 是在一个地区解析的，
如cn 中国
.com （商业机构）； 
.net（从事互联网服务的机构）； 
.org （非赢利性组织）； 
.com.cn （国内商业机构）； 
.net.cn （国内互联网机构）； 
.org.cn （国内非赢利性组织）；
dns 先根据顶级域名判断网络范围在根据域名查找主机ip地址
前缀就不管了，理论上www开头相当于占位用的 在国外一般不写www 国内风气就是写www

如果把IP地址比作一间房子 ，端口就是出入这间房子的门。真正的房子只有几个门，但是一个IP地址的端口可以有多个
浏览网页服务默认的端口号都是80，因此只需输入网址即可，不用输入“:80



TCP/UDP（传输层协议）

面向连接的TCP
TCP（Transmission Control Protocol，传输控制协议）是基于连接的协议，也就是说，在正式收发数据前，必须和对方建立可靠的连接。
一个TCP连接必须要经过三次“对话”才能建立起来，其中的过程非常复杂，我们这里只做简单、形象的介绍，你只要做到能够理解这个过程即可。
面向非连接的UDP协议
“面向非连接”就是在正式通信前不必与对方先建立连接，不管对方状态就直接发送。与手机短信非常相似：你在发短信的时候，只需要输入对方手机号就OK了。
UDP（User Data Protocol，用户数据报协议）是与TCP相对应的协议。它是面向非连接的协议，它不与对方建立连接，而是直接就把数据包发送过去！


三次握手

1.先Client端发送连接、请求报文。
2.Server端接受连接后回复ACK报文，并为这次连接分配资源。
3.Client端接收到ACK报文后也向Server端发送ACK报文，并分配资源，这样TCP连接就建立了。

四次挥手

1.Client端发起中断连接请求，也就是发送FIN报文。Server端接到FIN报文后，
意思是说"我Client端没有数据要发给你了"，但是如果你还有数据没有发送完成，则不必急着关闭（Socket），可以继续发送数据。
2.server发送ACK，"告诉Client端，你的请求我收到了，但是我还没准备好，请继续等我的消息"。
wait:这个时候Client端就进入FIN_WAIT状态，继续等待Server端的FIN报文。
3.当Server端确定数据已发送完成，则向Client端发送FIN报文，"告诉Client端，好了，我这边数据发完了，准备好关闭连接了"。
4.Client端收到FIN报文后，就知道可以关闭连接了，但是他还是不相信网络，怕Server端不知道要关闭，
所以发送ACK后进入TIME_WAIT状态，如果Server端没有收到ACK则可以重传。“，Server端收到ACK后，"就知道可以断开连接了"。
Client端等待了2MSL后依然没有收到回复，则证明Server端已正常关闭，那好，我Client端也可以关闭连接了。Ok，TCP连接就这样关闭了！


应用层协议: http https等
超文本传输协议（HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议。
HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer），是以安全为目标的HTTP通道，简单讲是HTTP的安全版。
上面的协议为了建立客户端与服务器端的连接，此协议为了让两者进行沟通。
为什么要有此协议呢，让计算机之间按照规矩说话，你问我答，你怎么问我怎么答，否则计算机各说各话，没办法沟通。

如何沟通呢？  让我们来了解一下http报文吧


http （请求报文，响应报文） 通过报文进行沟通

请求报文：
请求行：
请求方法（GET POST DELETE HEAD TRACE OPTION） 请求资源 (URL)    请求协议版本（HTTP/1.1）
请求头：
http://tools.jb51.net/table/http_header
请求主体：
表单提交数据如：name=aimee&age=18;

响应报文：
响应行
响应协议版本号（HTTP/1.1） 响应状态码（200） 响应状态文字（ok）
http://tool.oschina.net/commons?type=5
（响应状态码）
响应头
http://tools.jb51.net/table/http_header
响应主体
‘sign success’ (注册成功)

状态码
1** 信息        接到请求继续处理
2** 成功        成功的收到，理解，接受
3** 重定向      为了完成请求需要进行另一部措施（如直接重浏览器缓存获取资源，或跳转到其他页面）
4** 客户端错误  请求语法有错误，不能完全符合要求
5** 服务器错误  服务器无法完成明显有效的请求


常见的http状态码

成功状态码：
200 服务器成功返回内容
301/2 临时/永久重定向
304 资源未被修改过

失败状态码：
404 请求内容不存在
500 服务器暂时不可用
503 服务器内部错误


请求方方法  GET  POST  的区别

常规理解：
1.GET 使用URL 或Cookie 传参，而POST将数据，放在BODY中。 ? NAME = ‘CST’&AGE=18
2.GET 的URL会有长度上的限制， POST可以传输很多数据。
3.POST比GET安全。


但其实HTTP协议里没有规定POST数据就要放在BODY里， 也没有要求GET数据就一定要放在URL中而不能放在BODY中。
HTTP协议对GET和POST 都没有对数据的长度进行限制，两方面原因造成数据限制的原因
1.早起浏览器会对URL长度进行限制（浏览器URL输入框）
2.浏览器会对Content-length进行限制，这是为了服务器安全和稳定。
安全问题呢，看你怎么想了，对于纯小白什么都是安全的，对于黑客什么都是不安全的


浏览器缓存机制（http）
304 上次缓存的资源没有改变
浏览器如何知道是否直接取缓存的内容？
理解部分 请求头 响应头
请求头：
If-None-Match: 匹配etag  如果它修改了 不取缓存
If-Modified-Since：将先前服务器端发过来的最后修改时间戳发送回去
响应头：
etag --->标记图片资源 //IE里面有 chrome没有
last-Modified (服务器最后修改的时间)和 etag 配合使用
ETags和If-None-Match的工作原理是在HTTP Response中添加ETags信息。当客户端再次请求该资源时，将在HTTP Request中加入If-None-Match信息（ETags的值）。
如果服务器验证资源的ETags没有改变（该资源没有改变），将返回一个304状态；否则，服务器将返回200状态，并返回该资源和新的ETags。

浏览器缓存机制（http）
Date： 服务器响应内容日期
Cache-control：内容缓存时间
no-cache   不被缓存的，只不过每次在向客户端（浏览器）提供响应数据时，缓存都要向服务器评估缓存响应的有效性。 
no-store 用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存。 根据缓存超时 
max-age 指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应。 
min-fresh 指示客户机可以接收响应时间小于当前时间加上指定时间的响应。 
max-stale 指示客户机可以接收超出超时期间的响应消息。如果指定max-stale消息的值，那么客户机可以 接收超出超时期指定值之内的响应消息。 
Expires：内容保质期，表示存在时间，允许客户端在这个时间之前不去检查（发请求），等同max-age的效果。但是如果同时存在，则被cache-control的max-age覆盖。


网站如何统计用户从何点击而来
referer：如果从浏览器地址栏里直接输入地址请求头没有referer //IE




解决跨域问题的几种办法

1.Flash （不做讨论）
2.服务器代理中转
3.Jsonp  //动态创建script
4.document.domain(针对基础域名相同的情况)
// bj.hello.com  document.domain = 'hello.com'
// tj.hello.com  document.domain = 'hello.com'
5.H5 PostMessage 
6 、利用iframe和location.hash
7 、window.name实现的跨域数据传输


JSONP原理

1.Web页面上用<script> 引入 js文件时则不受是否跨域的影响
（不仅如此，我们还发现凡是拥有"src"这个属性的标签都拥有跨域的能力，比如<script>、<img>、<iframe>）
2.于是我们把数据放到服务器上，并且数据为json形式（因为js可以轻松处理json数据）
3.因为我们无法监控通过<script>的src属性是否把数据获取完成，所以我们需要做一个处理。
4.实现定义好处理跨域获取数据的函数，如 function doJSON（data）{}。
5.用src获取数据的时候添加一个参数cb=‘doJSON’ (服务端会根据参数cb的值返回 对应的内容)   此内容为以cb对应的值doJSON为函数真实要传递的数据为函数的参数的一串字符 如 doJSON（’数据’）

var oScript = document.createElement('script');
oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ value +'&&cb=callback';
document.body.appendChild(oScript)

function callback(data){
	console.log(data)
}


什么是cookie？

Cookie是由服务器端生成，发送给User-Agent（一般是浏览器），（服务器告诉浏览器设置一下cookie），浏览器会将Cookie以key/value保存到某个目录下的文本文件内，
下次请求同一网站时就发送该Cookie给服务器（前提是浏览器设置为启用cookie）。
Cookie就是一个小型文件（浏览器对cookie的内存大小是有限制的-------用来记录一些信息）

为什么会有cookie？

Web应用程序是使用HTTP协议传输数据的。
HTTP协议是无状态的协议。
一旦数据交换完毕，客户端与服务器端的连接就会关闭，再次交换数据需要建立新的连接。
这就意味着服务器无法从连接上跟踪会话。


Cookie的特点：

满足同源策略：
虽然网站images.google.com与网站www.google.com同属于Google，但是域名不一样，二者同样不能互相操作彼此的Cookie。

问题来了 举个例子：
访问完zhidao.baidu.com 再访问wenku.baidu.com还需要重新登陆百度账号吗？
设置document.domain = ‘baidu.com’;
让页面属于这个基础域名下（那么此页面和任何二级域名为baidu.com的）

设置限制----页面确实属于该基础域名之下
那么资源公用了（ajax） cookie 共用了


Cookie有个数和大小的限制，大小一般是4k

Cookie 在本地 可以被更改文件 敏感的数据不要放在cookie里

Cookie实际上主要是web服务器开发人员设置的，前端开发人员较少使用cookie。

但是我们得学会简单操作cookie （大概流程如下）

var oDate = new Date()
增 document.cookie='key=value;expires='+oDate;(精确时间)
删 document.cookie = 'age=18;max-age = -1000'
改 查  document.cookie

不标记时间 则为session 临时存储

封装使用cookie函数

var manage = {
	setCookie:function(key,value,date){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+date);
		document.cookie = key + '=' + value+';expires=' + oDate;
		return this;
	},
	removeCookie:function(key){
		return this.setCookie(key,'',-1);
	},
	getCookie:function(key,callback){
		var allCookieStr = document.cookie;
		var allCookieArr = allCookieStr.split(';');
		var len = allCookieArr.length;
		for(var i = 0;i<len;i++){
			var itemCookieArr = allCookieStr[i].split('=');
			if(itemCookieArr[0] == key){
				callback(itemCookieArr[1]);
				break;
			}
		}
		return this;
	}
}


iframe
iframe就是一个标签dom元素
可以一个网页里嵌入另一个网页
导航栏tab切换页（古老的做法）、在线编辑器、广告植入

iframes 阻塞页面加载
触发 window 的 onload 事件是非常重要的。
onload 事件触发使浏览器的 “忙” 指示器停止，告诉用户当前网页已经加载完毕。当 onload 事件加载延迟后，它给用户的感觉就是这个网页非常慢。
window 的 onload 事件需要在所有 iframe 加载完毕后(包含里面的元素)才会触发。通过 JavaScript 动态设置 iframe 的 SRC 可以避免这种阻塞情况

获取子窗口
1.document.getElementsByTagName('iframe')[0].contentWindow
2.document.getElementsById('id').contentWindow
简易写法 
window.frames['iframe的name']

IE专用
3.document.iframes[name].contentWindow
4.document.iframes[i].contentWindow

window.self
就是自己
window.parent
父级窗口对象
window.top
顶级窗口对象

非ie下使用onload事件
iframe(dom元素).onload = function () {}
ie下使用onreadystatechange或者设定计时器
iframe.onreadystatechange = function(){ 
	if (iframe.readyState == "complete" || iframe.readyState == ''loaded”){
		alert("Local iframe is now loaded.");
	} 
} 

1.document.domain: 解决跨域限制最好的办法

2.通过window.location.hash传递值 
解决子页面访问父页面数据问题(window.location.href)

通过锚点#传递数据。利用定时器实时监测
锚点特性#不刷新页面 
定时器耗性能方法比较笨！

location.hash缺点
1、传递数据量有限
2、不太安全

3.通过window.name传递值 需要通过服务器
解决父页面访问子页面的数据问题
有三个页面：
window.name 特点 页面重载刷新 name值不变 即使换了一个页面
a.com/app.html：应用页面。
a.com/proxy.html：代理文件，一般是一个没有任何内容的html文件，需要和应用页面在同一域下。
b.com/data.html：应用页面需要获取数据的页面，可称为数据页面。

4.H5 PostMessage 





// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
模块化
require.js 解决了
1 实现js文件的异步加载
2 管理模块之间的依赖性

模块特点： 独立 完整 依赖关系

前端规范CommonJs和CMD

CommonJS的核心思想就是通过require方法来同步加载所要依赖的其他模块，
然后通过exports 或者 module.exports 来导出需要暴露的接口

//index.js
var module = require('module.js');
module.aa('hello');

//module.js
module.exports = {
	aa:function(str){
		console.log(str)
	}
}

浏览器不兼容CommonJs，原因是浏览器缺少module、exports、require、global四个环境变量。
如要使用需要工具转换。

CommonJs采用同步加载不同模块文件，适用于服务器端。
因为模块文件都存放在服务器各个硬盘上，读取加载时间快，适合服务器端，不适应浏览器。


AMD规范则是异步加载模块，允许指定回调函数。
等模块异步完成后即可调用回调函数。
AMD得意的产出就是 require.js  

使用 require.js 提前加载所有依赖，方可使用

//index.html
<script src = 'require.js' data-main=".main.js" async = "true" defer></script>  / 

//main.js 入口文件
require.config({   
	baseUrl:'js.tool', //重复的路径名
	path:{
		"jquery":"jquery",
		"math":"math"
	}	 
})

require(["jquery","math"],function($,math){
	console.log($())
	console.log(math.add(1,2))
})

//math.js
define(['myLib'],function(myLib){
	console.log(myLib.a);
	function add(x,y){
		return x + y;
	}
	return {
		add:add
	}
})

//myLib.js
define(function(){
	return {
		a:1232
	}
})

CMD异步加载和AMD的主要区别在于，AMD依赖前置，提前加载依赖，而CMD就近加载，按需加载。
产物seaJs和requireJs使用有些相似

<script src="sea.js"></script> /

//index.html
seajs.use('main.js');

//main.js
define(function(require,exports,module){
	var module1 = require('module1.js');
	console.log(module1);
})
//module1.js
define(function(require,exports,module){
	var arr = [1,2,3];
	export.module1 = arr;
})



ES6自带模块化，可以使用import关键字引入模块，通过export关键字导出模块，功能较之前几个方案更为强大，也是我们所推崇的。
但由于ES6目前无法在浏览器中执行，所以我们只能通过babel将不被支持的impo编译当前受到广泛支持的require

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

webpack

requireJS是一款伟大的模块加载器，它的出现让javascript制作多人维护的大型项目变成了事实
grunt是一款javascript构建工具，主要完成编译、压缩、合并等一系列工作
后续又推出了yeoman、Gulp、webpack等构建工具

webpack具有grunt、gulp对静态资源自动化构建的能力，更重要的是，webpack弥补了requirejs在模块化方面的缺陷，
同事兼容AMD与CMD的模块加载规范，具有更强大的JS模块化的功能。

开发模式
主要就是监听文件变化，自动进行打包、合并的操作。

生产模式
静态文件都要发布到cdn上，而且必须要有MD5版本号，方便快速发布。
主要增加了文件压缩、文件MD5名修改，替换html等操作。
这样的好处是上线非常方便，一个命令即可更新上线，而且不存在缓存问题。

CDN是构建在网络之上的内容分发网络，关键技术主要有内容储存和分发技术。
CDN的基本原理是广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对集中的地区或网络中，
在用户访问防止是，利用全局负载技术将用户的访问指向距离最近的工作正常的缓存服务器上，由缓存服务器直接相应用户请求。
CDN网络是在用户和服务器之间增加Cache层，如何将用户的请求引导到cache上获得源服务器的数据，主要是通过接管dns实现，这就是cdn的基本原理

webpack处理后，输出的静态文件只剩下js与png，而css less jade 其他的的文件都合并到了js中
在webpack中，所有的资源都是模块，模块都需要通过AMD或CMD规范加载，就像CSS样式文件，不再HTML中以<link>标签加载


默认入口文件 src/index.js
默认出口文件 dist/main.js

命令
webpack 
npm init  //初始化
webpack -w 开启监听状态
npm install webpack --save-dev  下载到当前目录 开发环境
npm install style-loader css-loader --save-dev
npm install webpack-dev-server-g 
webpack-dev-server 开启本地服务器
less-loader
less

插件
压缩JS代码 uglifyjs-webpack-plugin
抽离CSS样式 防止样式打包在js中引起页面样式加载错乱
var extract = require('extract-text-webpack-plugin')







//webpack.config.js

var uglifyjs =  require('uglifyjs-webpack-plugin')

module.exports = {
	entry:{
		demo:'./src/demo.js',        //入口文件
		index:'./src/index.js'
	},
	output:{
		path:__dirname + '/out',   //输出文件夹
		filename:'[name].bundle.js',  //输出名字
		publicPath:'./out'          //静态文件输出地址
	},
	module:{
		rules:[
		{test:/.less$/,use:['style-loader','css-loader','less-loader']},  //LESS转CSS转STYLE
		{test:/.jpg|.png$/,use:['url-loader']}                             //URL模块
		// {test:/.jpg|.png$/,use:['url-loader?limt=10&name=./[name].[ext]']}
		]
	},
	plugins:[
	new uglifyjs()
	],

	mode:'development',   //production生产模式

}

引入模块
//index.js
var module = require('module.js');
module.aa('hello');

//module.js
module.exports = {
	aa:function(str){
		console.log(str)
	}}

//引入图片模块
var img = new Image()
img.src =  require('./img/123.png')

document.body.appendChild(img)


less
简易版CSS



// 
// 
// 
// 
// 
// 
// 
// 

gulp

1 安装插件 



// 
// 
// 
// 
// 
// 
// 
// 






















