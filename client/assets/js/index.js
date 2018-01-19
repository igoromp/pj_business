var $campos=
[
	document.querySelector("#data"),
	document.querySelector("#qtd"),
	document.querySelector("#vlr")
];

console.log($campos);

var $tbody = document.querySelector('table tbody');

document.querySelector(".form").addEventListener("submit",function(e){
	e.preventDefault();
	
	var $tr = document.createElement('tr');
	
	$campos.forEach(function(campo){
		var $td = document.createElement('td');
		$td.textContent = campo.value;
		$tr.appendChild($td);
	});

	$td_vlr= document.createElement('td');
	$td_vlr.textContent = $campos[1].value * $campos[2].value;
	$tr.appendChild($td_vlr);

	$tbody.appendChild($tr);

	
	campos[0].value='';
	campos[1].value=1;
	campos[2].value=0.0;
	campos[0].focus();
});