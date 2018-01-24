class NegociacaoCtrl{

	constructor(){
		let $ = document.querySelector.bind(document);
		this._qtd = $("#qtd");
		this._data = $("#data");
		this._valor = $("#vlr");
		
		this._listaNegociacoes = new ListaNegociacoes();
		this._negociacoesView = new NegociacoesView($("#negociacoes-view"));
		this._negociacoesView.update(this._listaNegociacoes);
		
		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($("#msg-alert"));
		
	}


	adiciona(e){
		e.preventDefault();
		
		this._listaNegociacoes.add(this.__criarNegociacao());
		this._mensagem.texto ='Negociação adicionada com sucesso.';	
		this._negociacoesView.update(this._listaNegociacoes);
		this._mensagemView.update(this._mensagem);	
		
		this.__limpaFormulario();
		//console.log(this._listaNegociacoes.negociacoes);

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