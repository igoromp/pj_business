class DateHelper{

	constructor(){
		throw new Error('Esta classe não pode ser instanciada.');
	}

	static textoParaData(text){
		if(!/\d{4}-\d{2}-\d{2}/.test(text))
			 throw new Error('A data deve estar no formato yyyy-mm-dd');
			
		return new Date(...text.split('-').map((item,idx)=>item -idx %2));
	}

	static dataParaTexto(data){
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`; 		
	}
}