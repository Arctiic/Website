var waitCount = '.';

function wait (elem) {
	elem.innerHTML = 'Working' + waitCount;
	waitCount += '.';
	if (waitCount.length > 3) waitCount = '.';
}

function getScriptPath (js) {
	return window.URL.createObjectURL(new Blob([js],{type:'text/javascript'}));
}

function work (func) {
	let respond = setInterval(() => { wait(document.getElementById('answer')); }, 1000);
	let input = document.getElementById('input').value;
	let input2 = document.getElementById('input2').value
	let payload;
	switch (func) {
		case 'EQU':
			payload = `equals(${input})`;
			break;
		case 'PRI':
			payload = `isPrime(equals(${input}))`;
			break;
		case 'FAC':
			payload = `factors(equals(${input}), false)`;
			break;
		case 'PFA':
			payload = `factors(equals(${input}), true)`;
			break;
		case 'PCM':
			payload = `pf(equals(${input}))`;
			break;
		case 'GCF':
			payload = `gcf(equals(${input}), equals(${input2}))`;
			break;
		case 'GCD':
			payload = `gcd(equals(${input}), equals(${input2}))`;
			break;
		case 'LCM':
			payload = `lcm(equals(${input}), equals(${input2}))`;
			break;
	}
	
	let url = getScriptPath(`
		// BEGINNING OF FUNCTIONS
		function equals (exp) {
			return eval(exp);
		}
		function isPrime (num) {
			if (num == 1) return false;
			for (let i = 2; i < Math.sqrt(num); i++) {
				if (num % i == 0) {
					return false;
				}
			}
			return true;
		}
		function factors (num, primeOnly) {
		  let f = [];
			if (!primeOnly) f = [1, num];
			let start = 2;
			let n;
			if (isPrime(num)) {
				f.push(num);
				f.sort((a, b) => {
					return a - b;
				});
				return f.join(', ');
			}
			(num % 2 == 0) ? (n = 1) : (n = 2, start = 3);
			for (let i = start; i < num; i += n) {
				if (num % i == 0) {
					if (primeOnly) {
						if (isPrime(i)) {
							f.push(i);
						}
						continue;
					}
					f.push(i);
				}
			}
			f.sort((a, b) => {
				return a - b;
			});
			return f.join(', ');
		}
		function pf (num) {
			let f = [];
			let n = num;
			if (isPrime(n)) return [n];
			while (n > 1) {
				if (isPrime(n)) {
					f.push(n);
					break;
				}
				for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
					if (n % i == 0 && isPrime(i)) {
						f.push(i);
						n = n / i;
						break;
					}
				}
			}
			f.sort((a, b) => {
				return a - b;
			});
			return f.join(', ');
		}
		function gcf (a, b) {
			a = Math.abs(a);
			b = Math.abs(b);
			let
				fA = factors(a, false).split(', '),
				fB = factors(b, false).split(', '),
				gcf = 0;
			fA.forEach((e) => {
				fB.forEach((e2) => {
					if (e == e2 && e > gcf) gcf = e;
				});
			});
			return gcf;
		}
		function gcd (a, b) {
			a = Math.abs(a);
			b = Math.abs(b);
			while (b) {

			}
			if (!b) {
				return a;
			}
			return gcd(b, a % b);
		}
		function lcm (a, b) {
			return (!a || !b) ? 0 : Math.abs((a * b) / gcd(a, b));
		}
		// END OF FUNCTIONS
		self.addEventListener('message',(e) => {
			self.postMessage('' + ${payload});
		}, false);
	`);
	let worker = new Worker(url);
	worker.addEventListener('message', (e) => {
		clearInterval(respond);
  	document.getElementById('answer').innerHTML = e.data;
	}, false);
	worker.postMessage('$');
}
