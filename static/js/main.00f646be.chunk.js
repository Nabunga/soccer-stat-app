(this["webpackJsonpsoccer-stat"]=this["webpackJsonpsoccer-stat"]||[]).push([[0],{34:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(28),c=a.n(s),r=a(15),i=a(2),l=a(12),d=a(3),o=(a(34),a(0)),j=function(){return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"header__header",children:"Soccer stat"})}),Object(o.jsx)("nav",{className:"nav",children:Object(o.jsxs)("ul",{className:"nav__list",children:[Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("li",{className:"nav__link",children:"List of leagues"})}),Object(o.jsx)(l.b,{to:"/teams",children:Object(o.jsx)("li",{className:"nav__link",children:"List of teams"})}),Object(o.jsx)(l.b,{to:"/league-calendar",children:Object(o.jsx)("li",{className:"nav__link",children:"Calendar of league"})}),Object(o.jsx)(l.b,{to:"/team-calendar",children:Object(o.jsx)("li",{className:"nav__link",children:"Calendar of team"})})]})})]})},u=a(5),m=a.n(u),b=a(10),h=a(11),f=a.n(h),O="29430422fe674f80a8ff145658658049",p=(a(63),function(e){var t=e.onChange,a=Object(n.useState)(""),s=Object(i.a)(a,2),c=s[0],r=s[1];return Object(o.jsxs)("div",{className:"search-bar",children:[Object(o.jsx)("label",{className:"search-bar__label",htmlFor:"search",children:"Search a particular item:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"search-bar__input",autoComplete:"off",type:"text",id:"search",placeholder:"e.g. Bundesliga",value:c,onChange:function(e){r(e.target.value),t(e.target.value)}})]})}),x=(a(64),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),r=Object(i.a)(c,2),d=r[0],j=r[1];Object(n.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.football-data.org/v2/competitions",{headers:{"X-Auth-Token":O},params:{areas:2077,plan:"TIER_ONE"}});case 2:t=e.sent,a=t.data,s(a.competitions),j(a.competitions);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=d.map((function(e){return Object(o.jsx)("li",{className:"leagues__item",children:Object(o.jsx)(l.b,{className:"leagues__link",to:"/teams/".concat(e.id),children:e.name})},e.id)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)(p,{onChange:function(e){return function(e){if(e.length){var t=a.filter((function(t){return t.name.includes(e)}));j(t)}else j(a)}(e)}}),Object(o.jsx)("div",{className:"leagues",children:Object(o.jsx)("ul",{className:"leagues__list",children:u})})]})}),_=(a(65),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),r=Object(i.a)(c,2),l=r[0],d=r[1];Object(n.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.football-data.org/v2/competitions/2016/teams",{headers:{"X-Auth-Token":O}});case 2:t=e.sent,a=t.data,s(a.teams),d(a.teams);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=l.map((function(e){return Object(o.jsx)("li",{className:"teams__item",children:e.name},e.id)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)(p,{onChange:function(e){return function(e){if(e.length){var t=a.filter((function(t){return t.name.includes(e)}));d(t)}else d(a)}(e)}}),Object(o.jsx)("div",{className:"teams",children:Object(o.jsx)("ul",{className:"teams__list",children:j})})]})}),v=function(e){var t=e.match,a=Object(n.useState)([]),s=Object(i.a)(a,2),c=s[0],r=s[1],l=Object(n.useState)([]),d=Object(i.a)(l,2),j=d[0],u=d[1];Object(n.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.football-data.org/v2/competitions/".concat(t.params.id,"/teams"),{headers:{"X-Auth-Token":O}});case 2:a=e.sent,n=a.data,r(n.teams),u(n.teams);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=j.map((function(e){return Object(o.jsx)("li",{className:"teams__item",children:e.name},e.id)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)(p,{onChange:function(e){return function(e){if(e.length){var t=c.filter((function(t){return t.name.includes(e)}));u(t)}else u(c)}(e)}}),Object(o.jsx)("div",{className:"teams",children:Object(o.jsx)("ul",{className:"teams__list",children:h})})]})},g=(a(66),function(e){var t=e.startDate,a=e.endDate,s=Object(n.useState)(""),c=Object(i.a)(s,2),r=c[0],l=c[1],d=Object(n.useState)([]),j=Object(i.a)(d,2),u=j[0],h=j[1],p=Object(n.useState)([]),x=Object(i.a)(p,2),_=x[0],v=x[1],g=[{name:"Championship",id:2016},{name:"Premier League",id:2021},{name:"UEFA Champions League",id:2001},{name:"European Championship",id:2018},{name:"Ligue 1",id:2015},{name:"Bundesliga",id:2002},{name:"Serie A",id:2019},{name:"Eredivisie",id:2003},{name:"Primeira Liga",id:2017},{name:"Primera Division",id:2014}].map((function(e){return Object(o.jsx)("option",{className:"select__option",value:e.id,children:e.name},e.id)}));Object(n.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var n,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.football-data.org/v2/competitions/".concat(r,"/matches"),{headers:{"X-Auth-Token":O},params:{dateFrom:t,dateTo:a}});case 2:n=e.sent,s=n.data,h(s.matches);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(n.useEffect)((function(){var e=u.slice(0,10);v(e)}),[u]);var N=_.map((function(e){return Object(o.jsxs)("div",{className:"rendered-info__item",children:[Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Start season: ",e.season.startDate]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["End season: ",e.season.endDate]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Stage: ",e.stage]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Status: ",e.status]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Away Team: ",e.awayTeam.name]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Home Team: ",e.homeTeam.name]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Goals by Away team: ",e.score.fullTime.awayTeam]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Goals by Home team: ",e.score.fullTime.homeTeam]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Winner: ",e.score.winner]})]},e.id)}));return _.length>=10?Object(o.jsxs)("div",{className:"select",children:[Object(o.jsx)("select",{className:"select__select",onChange:function(e){return l(e.target.value)},children:g}),Object(o.jsx)("div",{className:"rendered-info",children:N})]}):Object(o.jsxs)("div",{className:"select",children:[Object(o.jsx)("select",{className:"select__select",onChange:function(e){return l(e.target.value)},children:g}),Object(o.jsxs)("p",{className:"select__text",children:["Waiting for select a league. ",Object(o.jsx)("br",{}),"If refulsts is not appear, try to select another league or range of dates!"]})]})}),N=(a(67),function(e){var t=e.startDate,a=e.endDate,s=Object(n.useState)(""),c=Object(i.a)(s,2),r=c[0],l=c[1],d=Object(n.useState)([]),j=Object(i.a)(d,2),u=j[0],h=j[1],p=Object(n.useState)([]),x=Object(i.a)(p,2),_=x[0],v=x[1],g=[{name:"Arsenal",id:57},{name:"Aston Villa",id:58},{name:"Chelsea",id:61},{name:"Everton",id:62},{name:"Liverpool",id:64}].map((function(e){return Object(o.jsx)("option",{className:"select__option",value:e.id,children:e.name},e.id)}));Object(n.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var n,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.football-data.org/v2/teams/".concat(r,"/matches"),{headers:{"X-Auth-Token":O},params:{dateFrom:t,dateTo:a}});case 2:n=e.sent,s=n.data,h(s.matches);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(n.useEffect)((function(){var e=u.slice(0,10);v(e)}),[u]);var N=_.map((function(e){return Object(o.jsxs)("div",{className:"rendered-info__item",children:[Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Start season: ",e.season.startDate]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["End season: ",e.season.endDate]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Stage: ",e.stage]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Status: ",e.status]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Away Team: ",e.awayTeam.name]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Home Team: ",e.homeTeam.name]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Goals by Away team: ",e.score.fullTime.awayTeam]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Goals by Home team: ",e.score.fullTime.homeTeam]}),Object(o.jsxs)("p",{className:"rendered-info__item-detail",children:["Winner: ",e.score.winner]})]},e.id)}));return _.length>=10?Object(o.jsxs)("div",{className:"select",children:[Object(o.jsx)("select",{className:"select__select",value:r,onChange:function(e){return l(e.target.value)},children:g}),Object(o.jsx)("div",{className:"rendered-info",children:N})]}):Object(o.jsxs)("div",{className:"select",children:[Object(o.jsx)("select",{className:"select__select",value:r,onChange:function(e){return l(e.target.value)},children:g}),Object(o.jsxs)("p",{className:"select__text",children:["Waiting for select a league. ",Object(o.jsx)("br",{}),"If refulsts is not appear, try to select another league or range of dates!"]})]})}),y=(a(68),a(69),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),u=Object(i.a)(c,2),m=u[0],b=u[1];return Object(o.jsxs)(l.a,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)("main",{children:[Object(o.jsxs)("section",{className:"date-picker",children:[Object(o.jsx)("label",{className:"date-picker__label",htmlFor:"start-date",children:"Date from:"}),Object(o.jsx)("input",{className:"date-picker__input",type:"date",id:"start-date",value:a,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("label",{className:"date-picker__label",htmlFor:"end-date",children:"Date to:"}),Object(o.jsx)("input",{className:"date-picker__input",type:"date",id:"end-date",value:m,onChange:function(e){return b(e.target.value)}})]}),Object(o.jsx)("div",{children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"/",exact:!0,component:x}),Object(o.jsx)(d.a,{path:"/teams",exact:!0,component:_}),Object(o.jsx)(d.a,{path:"/teams/:id",component:v}),Object(o.jsx)(d.a,{path:"/league-calendar",render:function(e){return Object(o.jsx)(g,Object(r.a)(Object(r.a)({},e),{},{startDate:a,endDate:m}))}}),Object(o.jsx)(d.a,{path:"/team-calendar",render:function(e){return Object(o.jsx)(N,Object(r.a)(Object(r.a)({},e),{},{startDate:a,endDate:m}))}})]})})]}),Object(o.jsx)("footer",{className:"footer",children:"Created by Loginov Andrey for Simbirsoft"})]})});c.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.00f646be.chunk.js.map