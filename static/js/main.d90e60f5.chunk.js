(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Hunt Duck","image":"Images/huntDuck.png","description":"Hunt Duck, the VR game! Join us for your favorite duck hunting adventure. Shoot some ducks to make some bucks. See if you can set the highest score!","skills":["C#","Blender","Unity","Oculus Developer Hub","Meta Quest 2"],"deployed":"https://www.oculus.com/experiences/quest/5021514357863510/?ranking_trace=108188674939965_5021514357863510_SKYLINEWEB_582eeb4b-28e8-49f8-980b-4ec1a8bc2aaf&utm_source=www.google.com&utm_medium=oculusredirect"},{"id":2,"name":"Standalone Whiteboard","image":"Images/sawb.png","description":"The Vue-based Standalone Whiteboard provides patients with critical information regarding their hospital stay.","skills":["Javascript","HTML","Vue","Vite","Pinia","CSS"],"deployed":"https://www.getwellnetwork.com/getwell-inpatient/"},{"id":3,"name":"GetWell Inpatient","image":"Images/inpatient.png","description":"The Angular-based GetWell Inpatient app allows patients to engage with and take charge of their health journey","skills":["Javascript","HTML","Angular","CSS"],"deployed":"https://www.getwellnetwork.com/getwell-inpatient/"},{"id":4,"name":"PupStop","image":"Images/pupstoplogo.png","description":"A backyard for every pup! Rent a yard for some quality puppy playtime, or make some new fur-iends by hosting your yard!","skills":["Javascript","HTML","React","MySQL","Node.js","CSS"],"deployed":"https://pupstop.herokuapp.com/","repo":"https://github.com/jenngreiner/Pup-Stop"}]')},function(e){e.exports=JSON.parse('[{"company":"Get Well","location":"Bethesda, MD","role":"UI Engineer","image":"Images/GetWell.jpeg","dates":"November 2021 - Present","duties":["Created and maintained developer process documentation, expediting the onboarding process for new UI Engineers.","Developed a Vue-based Standalone Whiteboard application, creating $10M in revenue."],"skills":["Javascript","Angular","HTML","CSS/SASS/SCSS","Vue","Vite","Pinia","jQuery","Agile Development"]}]')},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),s=t(15),c=t.n(s),r=(t(24),t(25),t(19)),o=t(8),l=(t(26),t(0)),d=function(){var e=Object(a.useState)(window.location.pathname),n=Object(r.a)(e,2),t=n[0],i=n[1];return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)(o.b,{to:"/",onClick:function(){return i("home")},children:Object(l.jsx)("h1",{children:"Jenn Greiner"})}),Object(l.jsxs)("div",{className:"nav-links",children:[Object(l.jsx)(o.b,{to:"/portfolio",className:"portfolio"===t?"active":"",onClick:function(){return i("portfolio")},children:"Projects"}),Object(l.jsx)(o.b,{to:"/jobs",className:"jobs"===t?"active":"",onClick:function(){return i("jobs")},children:"Experience"})]})]})},j=(t(33),function(){return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)("a",{href:"https://www.instagram.com/two.denver.dogs/",children:Object(l.jsx)("img",{src:"".concat("/react-portfolio","/icons/Instagram_201409.png"),className:"icon",id:"email",alt:"Instagram Logo"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/jennifer-greiner/",children:Object(l.jsx)("img",{src:"".concat("/react-portfolio","/icons/Linkedin_201409.png"),className:"icon",id:"linkedin",alt:"LinkeIn Logo"})}),Object(l.jsx)("a",{href:"https://github.com/jenngreiner",children:Object(l.jsx)("img",{src:"".concat("/react-portfolio","/icons/github_201409.png"),className:"icon",id:"github",alt:"GitHub Logo"})})]})}),m=function(e){var n=e.skillName,t=e.skillLevel;return Object(l.jsx)("div",{className:"skill",children:Object(l.jsxs)("div",{className:"bar",style:{width:"".concat(t,"%")},children:[Object(l.jsx)("div",{className:"skillDetails",children:n}),Object(l.jsxs)("div",{className:"skillDetails skillLevel",children:[t,"%"]})]})})},p=(t(34),function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"bio",children:[Object(l.jsx)("img",{src:"".concat("/react-portfolio","/Images/headshot.jpg"),className:"img",alt:"Jenn Greiner headshot"}),Object(l.jsx)("h1",{children:"Hi, I'm Jenn"}),Object(l.jsx)("p",{children:"I'm a User Interface Engineer with 1+ years of experience creating user-friendly interfaces for web and mobile apps. I have a strong understanding of user experience principles and a talent for creating intuitive and visually appealing designs. I'm well-versed in HTML, CSS, JavaScript, and front-end frameworks like React and Angular. I've conducted user research and testing, and I'm familiar with agile development methodologies. I have a proven track record of delivering high-quality, responsive, and accessible interfaces that meet both business and user needs. I work well with cross-functional teams, including designers, developers, and product managers, and I love collaborating to bring great ideas to life."})]}),Object(l.jsxs)("div",{className:"skills",children:[Object(l.jsx)("h4",{children:"Skills"}),Object(l.jsx)("hr",{}),[{name:"HTML",level:100},{name:"Javascript",level:100},{name:"CSS",level:100},{name:"CSS Preprocessors",level:100},{name:"React",level:80},{name:"Angular",level:100},{name:"Vue",level:90},{name:"Vite",level:50},{name:"Webpack",level:50},{name:"Node.js",level:100},{name:"MySQL",level:75},{name:"C#",level:75},{name:"Unity",level:90}].map((function(e){return Object(l.jsx)(m,{skillName:e.name,skillLevel:e.level})}))]})]})}),u=function(e){var n=e.btnName,t=e.btnHref;if(void 0!==t)return Object(l.jsx)("a",{href:t,className:"btn btn-primary",children:n})};var b=function(e){return console.log(e),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"card-container",children:e.projects.map((function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:e.image,className:"card-img-top",alt:e.name}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("div",{className:"card-title",children:e.name}),Object(l.jsx)("p",{className:"card-text",children:e.description}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)(u,{btnName:"View the App",btnHref:e.deployed}),e.repo?Object(l.jsx)(u,{btnName:"Source Code",btnHref:e.repo}):null]})]})]},e.id)}))})})},h=t(17);t(35);var g=function(){return Object(l.jsx)(b,{projects:h})},v=function(e){var n=e.chipName;return Object(l.jsx)("div",{className:"chip",children:n})};var f=function(e){return console.log(e),Object(l.jsx)("div",{className:"container",id:"portfolio",children:e.jobs.map((function(e){return Object(l.jsxs)("div",{className:"job-container",children:[Object(l.jsxs)("div",{className:"job-header",children:[Object(l.jsxs)("div",{className:"image-role-dates",children:[Object(l.jsx)("img",{src:e.image,className:"job-image",alt:e.company}),Object(l.jsxs)("div",{className:"role-dates",children:[Object(l.jsx)("div",{className:"role",children:e.role}),Object(l.jsx)("div",{className:"dates",children:e.dates})]})]}),Object(l.jsxs)("div",{className:"company-location",children:[Object(l.jsx)("div",{className:"company",children:e.company}),Object(l.jsx)("div",{className:"location",children:e.location})]})]}),Object(l.jsx)("ul",{className:"duties-container",children:e.duties.map((function(e){return Object(l.jsx)("li",{children:e})}))}),Object(l.jsx)("div",{className:"chip-container",children:e.skills.map((function(e){return Object(l.jsx)(v,{chipName:e})}))})]})}))})},x=t(18);t(36);var O=function(){return Object(l.jsx)(f,{jobs:x})},N=t(2);var k=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)("main",{children:[Object(l.jsx)(d,{}),Object(l.jsx)(N.a,{exact:!0,path:"/",component:p}),Object(l.jsx)(N.a,{exact:!0,path:"/portfolio",component:g}),Object(l.jsx)(N.a,{exact:!0,path:"/jobs",component:O}),Object(l.jsx)(j,{})]})})};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.d90e60f5.chunk.js.map