function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=Array(r);n<r;n++)e[n]=t[n];return e}var r=function(r){if(Array.isArray(r))return t(r)}(i=document.querySelectorAll("span.population"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(r,n){if(r){if("string"==typeof r)return t(r,void 0);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,void 0)}}(i)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=[],e=[],o=[],a=!0,l=!1,u=void 0;try{for(var i,f,c=r[Symbol.iterator]();!(a=(f=c.next()).done);a=!0){var y=+f.value.textContent.replace(/,/g,"");n.push(y)}}catch(t){l=!0,u=t}finally{try{a||null==c.return||c.return()}finally{if(l)throw u}}var p=n.reduce(function(t,r){return t+r},0),s=p/n.length;e.push(p),e.push(s);var h=!0,v=!1,d=void 0;try{for(var m,g=e[Symbol.iterator]();!(h=(m=g.next()).done);h=!0){for(var b=m.value,S=String(b),A=[],x="",j=S.length-1;j>=0;j--)x=S[j]+x,3===x.length&&(A.unshift(x),x="");x.length>0&&A.unshift(x),o.push(A.join(","))}}catch(t){v=!0,d=t}finally{try{h||null==g.return||g.return()}finally{if(v)throw d}}var C=document.querySelector("span.total-population"),q=document.querySelector("span.average-population");C.textContent=o[0],q.textContent=o[1];
//# sourceMappingURL=index.7afd5bed.js.map
