(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),u=a.n(r),c=(a(26),a(20)),m=a(8),i=a(15),E=function(e){var t={id:1,firstname:"",lastname:"",street:"",city:"",phonenumber:"",gpa:""},a=Object(n.useState)(t),r=Object(m.a)(a,2),u=r[0],c=r[1],E=function(e){var t=e.target,a=t.name,n=t.value;c(Object(i.a)(Object(i.a)({},u),{},{[a]:n}))};return l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),console.log(u),u.firstname&&u.lastname&&(e.addUser(u),c(t))}},l.a.createElement("label",null,"First Name"),l.a.createElement("input",{type:"text",name:"firstname",value:u.firstname,onChange:E,required:!0}),l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{type:"text",name:"lastname",value:u.lastname,onChange:E,required:!0}),l.a.createElement("label",null,"Street Number/Name"),l.a.createElement("input",{type:"text",name:"street",value:u.street,onChange:E,required:!0}),l.a.createElement("label",null,"City"),l.a.createElement("input",{type:"text",name:"city",value:u.city,onChange:E,required:!0}),l.a.createElement("label",null,"Phone Number"),l.a.createElement("input",{type:"text",name:"phonenumber",value:u.phonenumber,onChange:E,required:!0}),l.a.createElement("label",null,"GPA"),l.a.createElement("input",{type:"text",name:"gpa",value:u.gpa,onChange:E,required:!0}),l.a.createElement("button",null,"Save"))},s=a(6),d=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Firstname"),l.a.createElement("th",null,"Lastname"),l.a.createElement("th",null,"Street Number/Name"),l.a.createElement("th",null,"City"),l.a.createElement("th",null,"Phonenumber"),l.a.createElement("th",null,"GPA"))),l.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",{onClick:function(){return e.selectUser(t)}}," ",l.a.createElement(s.b,{to:"/student"},t.firstname)),l.a.createElement("td",null,t.lastname),l.a.createElement("td",null,t.street),l.a.createElement("td",null,t.city),l.a.createElement("td",null,t.phonenumber),l.a.createElement("td",null,t.gpa),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.deleteUser(t.id)},className:"button muted-button"},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:0},"No users"))))},o=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Student Info"),l.a.createElement("div",{className:"student"},l.a.createElement("div",null,l.a.createElement("div",null,"Firstname:"),l.a.createElement("div",null,e.student.firstname)),l.a.createElement("div",null,l.a.createElement("div",null,"Lastname:"),l.a.createElement("div",null,e.student.lastname)),l.a.createElement("div",null,l.a.createElement("div",null,"Street:"),l.a.createElement("div",null,e.student.street)),l.a.createElement("div",null,l.a.createElement("div",null,"City:"),l.a.createElement("div",null,e.student.city)),l.a.createElement("div",null,l.a.createElement("div",null,"PhoneNumber:"),l.a.createElement("div",null,e.student.phonenumber)),l.a.createElement("div",null,l.a.createElement("div",null,"GPA:"),l.a.createElement("div",null,e.student.gpa))))},b=a(1),v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],u=Object(n.useState)({id:null,name:"",username:""}),i=Object(m.a)(u,2),v=(i[0],i[1],Object(n.useState)()),p=Object(m.a)(v,2),h=p[0],f=p[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Students Information"),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Add Student")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/table"},"Student Table")))),l.a.createElement("div",{className:"flex-row"},l.a.createElement(b.c,null,l.a.createElement(b.a,{path:"/table"},l.a.createElement(d,{users:a,selectUser:function(e){f(e)},deleteUser:function(e){r(a.filter((function(t){return t.id!==e})))}})),l.a.createElement(b.a,{exact:!0,path:"/"},l.a.createElement(E,{addUser:function(e){e.id=a.length+1,r([].concat(Object(c.a)(a),[e]))}})),l.a.createElement(b.a,{exact:!0,path:"/student"},l.a.createElement(o,{student:h})))))};u.a.render(l.a.createElement(s.a,null,l.a.createElement(v,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.dd64b4ec.chunk.js.map