class Negociacao{

	constructor($data,$qtd,$vlr){
		this._data = new Date($data.getTime());
		this._qtd =$qtd;
		this._vlr = $vlr;

		Object.freeze(this);
		
	}
	
	get volume() {
		return this._qtd * this._vlr;
	}

	get data(){
		return new Date(this._data.getTime());
	}
	get quantidade(){
		return this._qtd;
	}
	get valor(){
		return this._vlr;
	}
}