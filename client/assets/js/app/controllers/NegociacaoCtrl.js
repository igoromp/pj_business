class NegociacaoCtrl{

	constructor(){
		let $ = document.querySelector.bind(document);
		this._qtd = $("#qtd");
		this._data = $("#data");
		this._valor = $("#vlr");
	}

	adiciona(e){
		e.preventDefault();

		
		let negociacao = new Negociacao(
			new Date(... 
				this._data.value
					.split('-')
					.map((item,idx)=>item - idx % 2;)

				),this._qtd.value,this._valor.value
		);

		console.log(negociacao);
	}
}