import Watcher from "Watch.js"
import {observe} from "Observer.js"
 export default class Vue {
 	constructor(options={}){


 		this.$options = options

 		let data = this._data = this.$options.data
 		Object.keys(data)
 		      .forEach(

 		      		key => this._proxy(key)
 		      	)

 		      observe(data, this)

 	}

    $Watch(expOrFn, cb, options) {
    	new Watcher(this, expOrFn, cb);
    }

    _proxy(key) {
    	var self = this
    	Object.defineProperty(self, key , {
    		configurable : true,
    		enumerable : true,
    		get : function proxyGetter () {
    			return self._data[key]
    		},
    		set : function proxySetter (val) {
    			self._data[key] = val
    		}

    	})
    }


 }