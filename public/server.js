const express = require('express')
const bodyParser = require('body-parser')
// console.log(bodyParser)
const app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
let cla=[
		{   
			name:'热菜',
			icon:'f08d;',
			foods:[
				{
					ve:'红烧肉',
					price:16,
					n:'img01.jpeg',
					recommend:true
				},
				{
					ve:'猪心',
					price:55,
					n:'img05.jpeg',
					recommend:false
				}
			]
		},
		{
			name:'凉菜',
			icon:'f08e;',
			foods:[
				{
					ve:'豇豆',
					price:22,
					n:'img06.jpeg',
					recommend:true
				}
			]
		},
		{
			name:'荤菜',
			icon:'f08e;',
			foods:[]
		}
]
let Table=[
	{
		n:1,
		str:'空闲中',
		people:0,
		state:'busy',
		shopped:'noshopped'
	},
	{
		n:2,
		str:'空闲中',
		people:0,
		state:'busy',
		shopped:'noshopped'
	},
	{
		n:3,
		str:'空闲中',
		people:0,
		state:'busy',
		shopped:'noshopped'
	},
	{
		n:4,
		str:'空闲中',
		people:0,
		state:'busy',
		shopped:'noshopped'
	},
	{
		n:5,
		str:'空闲中',
		people:0,
		state:'busy',
		shopped:'noshopped'
	},
	{
		n:6,
		str:'空闲中',
		people:0,
		state:'busy',
		shopped:'noshopped'
	},
]
let ns=[]
let ordered = []
let ordering = 0
var lis = 0
var orderings = 0
var eating = 0
for(var i in Table){
	if(Table[i].state == 'busy'){
		lis++
	}
	if(Table[i].state == 'ordering'){
		orderings++
	}
	if(Table[i].state == 'eating'){
		eating++
	}
}
let message = {
	lis:lis,
	orderings:orderings,
	eating:eating
}
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/server',urlencodedParser,function (req,res) {
	cla=req.body
	console.log(req.body)
    res.end()
})
app.post('/server2',urlencodedParser,function (req,res) {
	Table=req.body
	console.log(req.body)
    res.end()
})
app.post('/server3',urlencodedParser,function (req,res) {
	ns = req.body
	console.log(ns)
    res.end()
})
app.post('/server4',urlencodedParser,function (req,res) {
	ordered = req.body
	console.log(ordered)
    res.end()
})
app.post('/server5',urlencodedParser,function (req,res) {
	ordering = req.body.ordering
	console.log(ordering)
    res.end()
})
app.post('/server6',urlencodedParser,function (req,res) {
	message = req.body
	console.log(message)
    res.end()
})
app.all('/server', (request, response)=>{
	const data = {
		cla,
		Table,
		ns,
		ordered,
		ordering,
		message
	};
	//将数据转换为字符串
	let str = JSON.stringify(data);
	//接收callback参数
	let cb = request.query.callback;
	//返回结果
	//response.send(`${cb}(${str})`);//等价于'handle(data)',,,函数必须提前声明
	//response.send(`(${str})`);//等价于'handle(data)',,,函数必须提前声明
	response.send(str);
});
app.listen(8000, ()=>{
	console.log('服务已经启动,8000端口监听中');
})
