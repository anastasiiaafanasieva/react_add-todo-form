(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n),s=a(2),r=a(6),o=a(1),c=(a(11),a(5)),l=a.n(c),d=(a(12),a(0)),u=function(e){var t=e.todos;return Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)("div",{className:"todo_item",children:Object(d.jsx)("li",{children:e.user?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Name: ".concat(e.user.name)}),Object(d.jsx)("p",{children:"Email: ".concat(e.user.email)}),Object(d.jsx)("p",{className:l()(e.completed?"completed":"active"),children:"To do: ".concat(e.title)})]}):null},e.id)})}))})},m=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],h=[];[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].forEach((function(e){var t=m.find((function(t){return e.userId===t.id})),a=Object(r.a)({user:t||null},e);h.push(a)}));var b=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(!1),r=Object(s.a)(i,2),c=r[0],l=r[1],b=Object(o.useState)("Choose a user"),p=Object(s.a)(b,2),j=p[0],g=p[1],y=Object(o.useState)({}),f=Object(s.a)(y,2)[1],x=Object(o.useState)(!1),O=Object(s.a)(x,2),v=O[0],C=O[1],S=a.length>0,w="Choose a user"!==j,k=S&&w;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"form",children:Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),k){var t=m.find((function(e){return e.name===j})),i=[].concat(h).sort((function(e,t){return t.id-e.id}))[0].id,s={user:t||null,userId:null===t||void 0===t?void 0:t.id,id:i,title:a.replaceAll(/[^a-zA-Z \u0401\u0451\u0410-\u044f \u042f\u0404I \u044f\u0454\u0456 0-9]/g,""),completed:c};h.push(s),f(s),n(""),l(!1),g("Choose a user"),C(!1)}},children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("textarea",{className:"input_title",contentEditable:!0,value:a,placeholder:"Title",onChange:function(e){n(e.target.value)}}),!S&&v&&Object(d.jsx)("p",{className:"error",children:"Please, enter the title!"})]}),Object(d.jsx)("label",{children:Object(d.jsxs)("select",{onChange:function(e){return function(e){l("Completed"===e)}(e.target.value)},value:c?"Completed":"In progress",children:[Object(d.jsx)("option",{value:"Completed",children:"Completed"}),Object(d.jsx)("option",{value:"In progress",children:"In progress"})]})}),Object(d.jsx)("label",{children:Object(d.jsxs)("select",{id:j,value:j,onChange:function(e){g(e.target.value)},children:[Object(d.jsx)("option",{children:"Choose a user"}),m.map((function(e){return Object(d.jsx)("option",{value:e.name,children:e.name},e.id)}))]})}),!w&&v&&Object(d.jsx)("p",{className:"error",children:"Please, choose a user!"}),Object(d.jsx)("button",{type:"submit",onClick:function(){return C(!0)},children:"Add new todo"})]})}),Object(d.jsx)("div",{className:"todo_list",children:Object(d.jsx)(u,{todos:h})})]})};i.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.676cccea.chunk.js.map