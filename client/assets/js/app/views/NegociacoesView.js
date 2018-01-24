class NegociacoesView extends View{

	constructor(elemento){
		super(elemento);
	}

	template(model){		
		return `
			<table class="table table-hover table-bordered">
				<thead>
					<th>Data</th>
					<th>Quantidade</th>
					<th>Valor</th>
					<th>Volume</th>
				</thead>
				<tbody>
					${model.negociacoes.map(n =>`
							<tr>
								<td>${DateHelper.dataParaTexto(n.data)}</td>
								<td>${n.quantidade}</td>
								<td>${n.valor}</td>
								<td>${n.volume}</td>
							</tr>
						`).join('')}
				</tbody>
				<tfoot>
					<tr>
						<td colspan="3"></td>
						<td>${model.negociacoes.reduce((total,n)=> total +n.volume,0.0)}</td>						
					</tr>
				</tfoot>
			</table>
			` ;
	}

}
/*
	
*/