class ProxyFactory{
	
	static create(obj,props,action){


		return new Proxy(obj,{

			/*O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.*/
			get(target,prop,receiver){				
				/*Se a prop estiver dentro do array e for uma função*/
				if(props.includes(prop) && ProxyFactory._isFunction(target[prop]) ){
					
					/*Retornando uma função que  executa a atualização da view
					e passa os parametros para  o objeto que esta sendo encapsulado
					pelo Proxy*/
					return function(){					
						Reflect.apply(target[prop],target,arguments);
						return action(target);
					}
				}

				return Reflect.get(target,prop,receiver);		
			},

			set(target,prop,value,receiver){			
				console.log(`interceptando ${prop}`);

				if(props.includes(prop)){					
					Reflect.set(target,prop,value,receiver);
					action(target);
					return true;
														
				}
				return Reflect.set(target,prop,value,receiver);								
			}

		});
	}

	static _isFunction(func){
		return typeof(func)== typeof(Function);
	}
}