var ACCENT='#e85d7a';
var LIGHT='#f5b8ca';
var M=['\u042f\u043d\u0432','\u0424\u0435\u0432','\u041c\u0430\u0440','\u0410\u043f\u0440','\u041c\u0430\u0439','\u0418\u044e\u043d'];
function chart(id,vals){
  var el=document.getElementById(id);
  if(!el)return;
  var max=0;
  for(var i=0;i<vals.length;i++){if(vals[i]>max)max=vals[i];}
  el.innerHTML='';
  for(var j=0;j<vals.length;j++){
    var pct=max>0?Math.round(vals[j]/max*82+10):10;
    var col=(j===vals.length-1)?ACCENT:LIGHT;
    var item=document.createElement('div');item.className='bi';
    var v=document.createElement('div');v.className='bv';v.textContent=vals[j];
    var b=document.createElement('div');b.className='bb';b.style.height=pct+'%';b.style.background=col;
    var l=document.createElement('div');l.className='bl';l.textContent=M[j];
    item.appendChild(v);item.appendChild(b);item.appendChild(l);el.appendChild(item);
  }
}
chart('ynd-profile',[2583,3816,6916,3881,4294,4558]);
chart('ynd-routes',[101,138,128,99,95,96]);
chart('ynd-calls',[56,61,69,38,97,25]);
chart('ynd-site',[81,100,152,73,78,91]);
chart('gis-shows',[58,61,86,94,70,49]);
chart('gis-pos',[3,17,15,11,13,11]);
chart('ggl-views',[437,393,690,449,404,268]);
chart('ggl-routes',[41,47,53,48,43,48]);
chart('ggl-site',[13,15,25,15,32,16]);
