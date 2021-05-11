var array=[];
function myfunc()
{
	if(localStorage.array1)
	{
		array=JSON.parse(localStorage.array1);
		for(var i=0;i<array.length;i++)
		{
			var table=document.getElementById("tableid");
			var row=table.insertRow();
			var nname=row.insertCell(0);
			nname.innerHTML=array[i].name;
			var nskill=row.insertCell(1);
			nskill.innerHTML=array[i].skill;
			var nlevel=row.insertCell(2);
			nlevel.innerHTML=array[i].level;
			var ncomment=row.insertCell(3);
			ncomment.innerHTML=array[i].comment;
		}
	}
}
function SaveItem() {
	var name = document.getElementById("name").value;
	var skill = document.getElementById("skill").value;
	var level = document.getElementById("level").value;
	var comment = document.getElementById("comment").value;
	var object = {name:name, skill:skill, level:level , comment:comment};
	var table=document.getElementById("tableid");
	var row=table.insertRow(-1);
	var nname=row.insertCell(0);
	nname.innerHTML=name;
	var nskill=row.insertCell(1);
	nskill.innerHTML=skill;
	var nlevel=row.insertCell(2);
	nlevel.innerHTML=level;
	var ncomment=row.insertCell(3);
	ncomment.innerHTML=comment;
	array.push(object);
	localStorage.array1=JSON.stringify(array);
}