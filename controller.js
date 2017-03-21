var inputChange = function() {
	// body...
	console.log('ffff');
}


//设置 观察着
function Observer(data) {
	this.data = data;
	// this.walk = function(){};
	this.walk(data)
}

let p = Observer.prototype;

p.walk = function(obj) {

	let val;
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			val = obj[key];

			if (typeof val === 'object') {
				new Observer(val);
			}

			this.convert(key, val);
		}
	}
}

p.convert = function(key, val) {
	Object.defineProperty(this.data, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			console.log("你访问了" + key);
			return val;
		},
		set: function(newVal) {
			console.log('设置了' + key);
			console.log('新值为' + newVal);
			if (val === newVal) return;
			return newVal;
		}
	})
}

let data = {
	user: {
		'name': 'zhj',
		'age': '24'
	},
	address: {
		city: 'go'
	}
};

let app = new Observer(data);