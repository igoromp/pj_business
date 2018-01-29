class NegociacaoCtrl{

	constructor(){
		let $ = document.querySelector.bind(document);
		this._qtd = $("#qtd");
		this._data = $("#data");
		this._valor = $("#vlr");

		this._listaNegociacoes = new Bind(
			new ListaNegociacoes(),
			new NegociacoesView($("#negociacoes-view")),
			'add','esvazia');

		this._mensagem = new Bind(new Mensagem(), new MensagemView($("#msg-alert")),'texto');
		
	}


	adiciona(e){
		e.preventDefault();
		
		this._listaNegociacoes.add(this.__criarNegociacao());
		this._mensagem.texto ='Negociação adicionada com sucesso.';		
		this.__limpaFormulario();
		//console.log(this._listaNegociacoes.negociacoes);

	}

	importBusiness(){
		let service = new NegociacaoService();

		service.getBusinessWeek((err,negociacoes)=>{
			if(err){
				this._mensagem.texto = err;
				return;
			}

			negociacoes.forEach(negociacao=>this._listaNegociacoes.add(negociacao));
			this._mensagem.texto ='Negociações impostadas com sucesso';
		});
	}

	apaga(){
		this._listaNegociacoes.esvazia();
		this._mensagem.texto ='Lista de negociações apagadas com sucesso.';
	}

	__criarNegociacao(){
		return new Negociacao(
			DateHelper.textoParaData(this._data.value),
			this._qtd.value,
			this._valor.value
		);
	}

	__limpaFormulario(){
		this._data.value ='';
		this._qtd.value ='1';
		this._valor.value ='0.0';
		this._data.focus();
	}
}