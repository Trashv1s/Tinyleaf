!function t(e,i,r){function a(n,s){if(!i[n]){if(!e[n]){var h="function"==typeof require&&require;if(!s&&h)return h(n,!0);if(l)return l(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var o=i[n]={exports:{}};e[n][0].call(o.exports,function(t){var i=e[n][1][t];return a(i||t)},o,o.exports,t,e,i,r)}return i[n].exports}for(var l="function"==typeof require&&require,n=0;n<r.length;n++)a(r[n]);return a}({1:[function(t,e,i){var r,a,l,n,s,h=[].slice,d={}.toString;function o(t,e){var i={}.hasOwnProperty;for(var r in e)i.call(e,r)&&(t[r]=e[r]);return t}r=t("./presets").presets,a=function(t){return"data:image/svg+xml;base64,"+btoa(t)},l={head:function(t){return'<?xml version="1.0" encoding="utf-8"?>\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="'+t+'">'},gradient:function(t,e){var i,r,l,n,s,d,o,u,f,c;for(null==t&&(t=45),null==e&&(e=1),i=h.call(arguments,2),r=[this.head("0 0 100 100")],l=4*i.length+1,t=t*Math.PI/180,n=Math.pow(Math.cos(t),2),s=Math.sqrt(n-Math.pow(n,2)),t>.25*Math.PI&&(s=Math.pow(Math.sin(t),2),n=Math.sqrt(s-Math.pow(s,2))),d=100*n,o=100*s,r.push('<defs><linearGradient id="gradient" x1="0" x2="'+n+'" y1="0" y2="'+s+'">'),u=0;u<l;++u)c=100*(f=u)/(l-1),r.push('<stop offset="'+c+'%" stop-color="'+i[f%i.length]+'"/>');return r.push('</linearGradient></defs>\n<rect x="0" y="0" width="400" height="400" fill="url(#gradient)">\n<animateTransform attributeName="transform" type="translate" from="-'+d+",-"+o+'"\nto="0,0" dur="'+e+'s" repeatCount="indefinite"/></rect></svg>'),a(r.join(""))},stripe:function(t,e,i){var r,l;return null==t&&(t="#b4b4b4"),null==e&&(e="#e6e6e6"),null==i&&(i=1),r=(r=[this.head("0 0 100 100")]).concat(['<rect fill="'+e+'" width="100" height="100"/>',"<g><g>",function(){var e,i=[];for(e=0;e<13;++e)l=e,i.push('<polygon fill="'+t+'" points="'+(20*l-90)+",100 "+(20*l-100)+",100 "+(20*l-60)+",0 "+(20*l-50)+',0 "/>');return i}().join(""),'</g><animateTransform attributeName="transform" type="translate" ','from="0,0" to="20,0" dur="'+i+'s" repeatCount="indefinite"/></g></svg>'].join("")),a(r)},bubble:function(t,e,i,r,l,n){var s,h,d,o,u,f;for(null==t&&(t="#39d"),null==e&&(e="#9cf"),null==i&&(i=15),null==r&&(r=1),null==l&&(l=6),null==n&&(n=1),s=[this.head("0 0 200 200"),'<rect x="0" y="0" width="200" height="200" fill="'+t+'"/>'],h=0;h<i;++h)d=-h/i*r,o=184*Math.random()+8,u=(.7*Math.random()+.3)*l,f=r*(1+.5*Math.random()),s.push(['<circle cx="'+o+'" cy="0" r="'+u+'" fill="none" stroke="'+e+'" stroke-width="'+n+'">','<animate attributeName="cy" values="190;-10" times="0;1" ','dur="'+f+'s" begin="'+d+'s" repeatCount="indefinite"/>',"</circle>",'<circle cx="'+o+'" cy="0" r="'+u+'" fill="none" stroke="'+e+'" stroke-width="'+n+'">','<animate attributeName="cy" values="390;190" times="0;1" ','dur="'+f+'s" begin="'+d+'s" repeatCount="indefinite"/>',"</circle>"].join(""));return a(s.join("")+"</svg>")}},n={queue:{},running:!1,main:function(t){var e,i,r,a,l,n,s=this;e=!1,i=[];for(r in a=this.queue)(n=(l=a[r])(t))||i.push(l),e=e||n;for(r in a=this.queue)l=a[r],i.indexOf(l)>=0&&delete this.queue[r];return e?requestAnimationFrame(function(t){return s.main(t)}):this.running=!1},add:function(t,e){var i=this;if(this.queue[t]||(this.queue[t]=e),!this.running)return this.running=!0,requestAnimationFrame(function(t){return i.main(t)})}},window.ldBar=s=function(t,e){var i,a,s,h,u,f,c,g,p,m,w,k,b,x,y,v,M,q,A,B,C,S,_,L,N=this;if(null==e&&(e={}),i={xlink:"http://www.w3.org/1999/xlink"},(a="String"===d.call(t).slice(8,-1)?document.querySelector(t):t).ldBar)return a.ldBar;a.ldBar=this,~(s=a.getAttribute("class")||"").indexOf("ldBar")||a.setAttribute("class",s+" ldBar"),h="ldBar-"+Math.random().toString(16).substring(2),u={key:h,clip:h+"-clip",filter:h+"-filter",pattern:h+"-pattern",mask:h+"-mask",maskPath:h+"-mask-path"},f=function(t,e){var i,r;t=c(t);for(i in e)r=e[i],"attr"!==i&&t.appendChild(f(i,r||{}));return t.attrs(e.attr||{}),t},c=function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)},(g=document.body.__proto__.__proto__.__proto__).text=function(t){return this.appendChild(document.createTextNode(t))},g.attrs=function(t){var e,r,a,l=[];for(e in t)r=t[e],(a=/([^:]+):([^:]+)/.exec(e))&&i[a[1]]?l.push(this.setAttributeNS(i[a[1]],e,r)):l.push(this.setAttribute(e,r));return l},g.styles=function(t){var e,i,r=[];for(e in t)i=t[e],r.push(this.style[e]=i);return r},g.append=function(t){return this.appendChild(document.createElementNS("http://www.w3.og/2000/svg",t))},g.attr=function(t,e){return null!=e?this.setAttribute(t,e):this.getAttribute(t)},(p={type:"stroke",img:"",path:"M10 10L90 10M90 8M90 12","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"pattern-size":null,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,duration:1,easing:"linear",value:0,"img-size":null,bbox:null,"set-dim":!0,"aspect-ratio":"xMidYMid",min:0,max:100}).preset=a.attr("data-preset")||e.preset,null!=p.preset&&o(p,r[p.preset]);for(m in p)(w=w=a.attr("data-"+m))&&(p[m]=w);return o(p,e),p.img&&(p.path=null),k="stroke"===p.type,b=function(t){var e;return(e=/data:ldbar\/res,([^()]+)\(([^)]+)\)/.exec(t))?l[e[1]].apply(l,e[2].split(",")):t},p.fill=b(p.fill),p.stroke=b(p.stroke),"false"===p["set-dim"]&&(p["set-dim"]=!1),x={attr:{"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:p["aspect-ratio"],width:"100%",height:"100%"},defs:{filter:{attr:{id:u.filter,x:-1,y:-1,width:3,height:3},feMorphology:{attr:{operator:+p["fill-background-extrude"]>=0?"dilate":"erode",radius:Math.abs(+p["fill-background-extrude"])}},feColorMatrix:{attr:{values:"0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0",result:"cm"}}},mask:{attr:{id:u.mask},image:{attr:{"xlink:href":p.img,filter:"url(#"+u.filter+")",x:0,y:0,width:100,height:100,preserveAspectRatio:p["aspect-ratio"]}}},g:{mask:{attr:{id:u.maskPath},path:{attr:{d:p.path||"",fill:"#fff",stroke:"#fff",filter:"url(#"+u.filter+")"}}}},clipPath:{attr:{id:u.clip},rect:{attr:{class:"mask",fill:"#000"}}},pattern:{attr:{id:u.pattern,patternUnits:"userSpaceOnUse",x:0,y:0,width:300,height:300},image:{attr:{x:0,y:0,width:300,height:300}}}}},y=f("svg",x),(v=document.createElement("div")).setAttribute("class","ldBar-label"),a.appendChild(y),a.appendChild(v),M=[0,0],q=0,this.fit=function(){var t,e,i,r;if((e=(t=p.bbox)?{x:(e=t.split(" ").map(function(t){return+t.trim()}))[0],y:e[1],width:e[2],height:e[3]}:M[1].getBBox())&&0!==e.width&&0!==e.height||(e={x:0,y:0,width:100,height:100}),i=1.5*Math.max.apply(null,["stroke-width","stroke-trail-width","fill-background-extrude"].map(function(t){return p[t]})),y.attrs({viewBox:[e.x-i,e.y-i,e.width+2*i,e.height+2*i].join(" ")}),p["set-dim"]&&["width","height"].map(function(t){if(!a.style[t]||N.fit[t])return a.style[t]=e[t]+2*i+"px",N.fit[t]=!0}),r=M[0].querySelector("rect"))return r.attrs({x:e.x-i,y:e.y-i,width:e.width+2*i,height:e.height+2*i})},p.path?(M[0]=f("g",k?{path:{attr:{d:p.path,fill:"none",class:"baseline"}}}:{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+u.maskPath+")",fill:p["fill-background"],class:"frame"}}}),y.appendChild(M[0]),M[1]=f("g",{path:{attr:{d:p.path,class:k?"mainline":"solid","clip-path":"fill"===p.type?"url(#"+u.clip+")":""}}}),y.appendChild(M[1]),A=M[0].querySelector(k?"path":"rect"),B=M[1].querySelector("path"),k&&B.attrs({fill:"none"}),C=y.querySelector("pattern image"),(S=new Image).addEventListener("load",function(){var t,e;return t=(e=p["pattern-size"])?{width:+e,height:+e}:S.width&&S.height?{width:S.width,height:S.height}:{width:300,height:300},y.querySelector("pattern").attrs({width:t.width,height:t.height}),C.attrs({width:t.width,height:t.height})}),/.+\..+|^data:/.exec(k?p.stroke:p.fill)&&(S.src=k?p.stroke:p.fill,C.attrs({"xlink:href":S.src})),k&&(A.attrs({stroke:p["stroke-trail"],"stroke-width":p["stroke-trail-width"]}),B.attrs({"stroke-width":p["stroke-width"],stroke:/.+\..+|^data:/.exec(p.stroke)?"url(#"+u.pattern+")":p.stroke})),p.fill&&!k&&B.attrs({fill:/.+\..+|^data:/.exec(p.fill)?"url(#"+u.pattern+")":p.fill}),q=B.getTotalLength(),this.fit(),this.inited=!0):p.img&&(L=p["img-size"]?{width:+(_=p["img-size"].split(","))[0],height:+_[1]}:{width:100,height:100},M[0]=f("g",{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+u.mask+")",fill:p["fill-background"]}}}),y.querySelector("mask image").attrs({width:L.width,height:L.height}),M[1]=f("g",{image:{attr:{width:L.width,height:L.height,x:0,y:0,preserveAspectRatio:p["aspect-ratio"],"clip-path":"fill"===p.type?"url(#"+u.clip+")":"","xlink:href":p.img,class:"solid"}}}),(S=new Image).addEventListener("load",function(){var t,e;return e=p["img-size"]?{width:+(t=p["img-size"].split(","))[0],height:+t[1]}:S.width&&S.height?{width:S.width,height:S.height}:{width:100,height:100},y.querySelector("mask image").attrs({width:e.width,height:e.height}),M[1].querySelector("image").attrs({width:e.width,height:e.height}),N.fit(),N.set(void 0,!1),N.inited=!0}),S.src=p.img,y.appendChild(M[0]),y.appendChild(M[1])),y.attrs({width:"100%",height:"100%"}),this.transition={value:{src:0,des:0},time:{},ease:function(t,e,i,r){return(t/=.5*r)<1?.5*i*t*t+e:.5*-i*((t-=1)*(t-2)-1)+e},handler:function(t,e){var i,r,a,l,n,s,h,d,o,u,f,c;return null==e&&(e=!0),null==this.time.src&&(this.time.src=t),r=(i=[p.min,p.max])[0],a=i[1],l=(i=[this.value.des-this.value.src,.001*(t-this.time.src),+p.duration||1])[0],n=i[1],s=i[2],(h=e?Math.round(this.ease(n,this.value.src,l,s)):this.value.des)>=r||(h=r),h<=a||(h=a),v.textContent=h,d=100*(h-r)/(a-r),k?(o=B,u={"stroke-dasharray":"reverse"===p["stroke-dir"]?"0 "+q*(100-d)*.01+" "+q*d*.01+" 0":.01*d*q+" "+(.01*(100-d)*q+1)}):(f=M[1].getBBox(),u="btt"!==(c=p["fill-dir"])&&c?"ttb"===c?{y:f.y,height:f.height*d*.01,x:f.x,width:f.width}:"ltr"===c?{y:f.y,height:f.height,x:f.x,width:f.width*d*.01}:"rtl"===c?{y:f.y,height:f.height,x:f.x+f.width*(100-d)*.01,width:f.width*d*.01}:void 0:{y:f.y+f.height*(100-d)*.01,height:f.height*d*.01,x:f.x,width:f.width},o=y.querySelector("rect")),o.attrs(u),!(n>=s&&(delete this.time.src,1))},start:function(t,e,i){var r,l=this;return(r=this.value).src=t,r.des=e,a.offsetWidth||a.offsetHeight||a.getClientRects().length,i&&(a.offsetWidth||a.offsetHeight||a.getClientRects().length)?n.add(u.key,function(t){return l.handler(t)}):(this.time.src=0,void this.handler(1e3,!1))}},this.set=function(t,e){var i,r;return null==e&&(e=!0),i=this.value||0,null!=t?this.value=t:t=this.value,r=this.value,this.transition.start(i,r,e)},this.set(+p.value||0,!1),this},window.addEventListener("load",function(){var t,e,i,r,a=[];for(t=0,i=(e=document.querySelectorAll(".ldBar")).length;t<i;++t)(r=e[t]).ldBar||a.push(r.ldBar=new s(r));return a},!1),e.exports=ldBar},{"./presets":2}],2:[function(t,e,i){(void 0!==i&&i||this).presets={rainbow:{type:"stroke",path:"M10 10L90 10",stroke:"data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)",bbox:"10 10 80 10"},energy:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)","fill-dir":"ltr","fill-background":"#444","fill-background-extrude":1,bbox:"10 5 80 10"},stripe:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,stripe(#25b,#58e,1)","fill-dir":"ltr","fill-background":"#ddd","fill-background-extrude":1,bbox:"10 5 80 10"},text:{type:"fill",img:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 70 20"><text x="35" y="10" text-anchor="middle" dominant-baseline="central" font-family="arial">LOADING</text></svg>',"fill-background-extrude":1.3,"pattern-size":100,"fill-dir":"ltr","img-size":"70,20",bbox:"0 0 70 20"},line:{type:"stroke",path:"M10 10L90 10",stroke:"#25b","stroke-width":3,"stroke-trail":"#ddd","stroke-trail-width":1,bbox:"10 10 80 10"},fan:{type:"stroke",path:"M10 90A40 40 0 0 1 90 90","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 50 80 40"},circle:{type:"stroke",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"},bubble:{type:"fill",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"data:ldbar/res,bubble(#39d,#cef)","pattern-size":"150","fill-background":"#ddd","fill-background-extrude":2,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"}}},{}]},{},[1]);