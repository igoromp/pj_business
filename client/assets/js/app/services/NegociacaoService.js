class NegociacaoService{

	getBusinessWeek(callBack){
		let xhr = new XMLHttpRequest();

		xhr.open('GET','negociacoes/semana');
		
		/*Configuracoes*/
		xhr.onreadystatechange = ()=>{
			/*
				0: requisição ainda não iniciada
				1: conexão com o servidor estabelecida
				2: requisição recebida
				3: processando requisição
				4: requisição concluída e a resposta esta pronta
			*/

			if(xhr.readyState == 4){
				if(xhr.status == 200){
					console.log('Obtendo as negociações do servidor');
					callBack(null,
						JSON.parse(xhr.responseText)
						.map(obj=>new Negociacao(new Date(obj.data),obj.quantidade,obj.valor)));
				}else{
					console.log(xhr.responseText);
					callBack("Não foi possivel obter as negociações");
				}
			}

		};

		xhr.send();
	}
}