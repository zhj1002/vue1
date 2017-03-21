
//参考地址 
//https://segmentfault.com/a/1190000004384515 讲的特别好


import Dep form 'Dep.js'
//es6 class 语法糖
export default class Observer{
	constructor(value) {
		this.value = value
		this.walk(value)
	}


	//递归 调用 遍历 
	walk(value){
		Object.keys(value)
		      .forEach(

		      	key => this.convert(key, value[key])

		      	)
	}

	convert(key,value) {
		defineReactive(this.value, key, value)
	}


}



export function defineReactive(obj, key, val) {

    var dep = new Dep();
	var childOb = observe(val);

	Object.defineProperty(obj, key, {
		enumerable : true,
		configurable : true,
		get : () => {
		
            if(Dep.target） {
            	dep.addSub(Dep.target)
            }
			return val
		},
		set : newValue =>{

			var value = val
			if(newValue === val) {
				return
			}
			val = newValue

			childOb = observe(newValue)
			dep.notify()
		}
	})
}

export function observe (value, vm){
	if(!value || typeof value !== 'object'){
		return
	}
	return new Observer(value)
}