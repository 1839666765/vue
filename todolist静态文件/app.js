// let list =[
// 	            {
// 					title:"aaaaa",
// 					isCompleted:false
// 				},
// 				{
// 					title:"bbbbb",
// 					isCompleted:true
// 				}
// ]

var app = new Vue({
	el:"#todolist",
	data:{
		isShow:false,
       //添加文本框的数据
		addInp:"",
		listItems:[]
	},
	methods:{
		add:function () {
		  this.listItems.push({title:this.addInp,isCompleted:false});
		  this.addInp = "";
		},
		
		//删除列表
		del:function(index){
			this.listItems.splice(index,1);
		},

		//双击修改
		doubleClick:function(){
          this.isShow = !this.isShow;
		}
	}
})