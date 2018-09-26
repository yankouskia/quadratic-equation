module.exports = function solveEquation(equation) {
	var arr=equation.match(/([\-]?[\s]?\d+)/g)
  var a = arr[0].replace(/\s/g,'');
  var b = arr[2].replace(/\s/g,'');
  var c = arr[3].replace(/\s/g,'');
  var B2 = Math.pow(b,2);
  var Dex=(B2-(4*a*c));
  var DD= Math.pow(Dex,0.5);
  var P =2*a;
  var res = []
if (Dex < 0)  {return (null)}
else
{
  var x1 = (((-b)+DD)/(P));
  var x2 = (((-b)-DD)/(P));
}
 var y1 =Math.round(x1)
 var y2 =Math.round(x2)
if (y1 > y2) 
{res[0]=y2, res[1]=y1}
else
{res[0]=y1, res[1]=y2}
return ( res );
}
