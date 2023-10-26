(() => {
	const $ = document.querySelector.bind(document);
	let times = 1;
	let timeRotate = 8100;
	let isRotating = false;
	const spin1 = $('.lucky-1');
	const spin2 = $('.lucky-2');
	const btnSpin = $('.btn-spin');
	const showMsg1 = $('.msg-result');
	const showMsg2 = $('.msg-1');

	const btnClose = $('.btnClose');
	const btnOff = function() {
		btnClose.innerHTML = `<button type="button" class="btn-close" data-bs-dismiss="modal" disabled ></button>`;
	}
	const btnOn = function() {
		btnClose.innerHTML = `<button type="button" class="btn-close" data-bs-dismiss="modal" enabled></button>`;
	}

	function getRandom(m, n) {
		return Math.floor(Math.random()*n + m);
	}
	const createSpan = function() {
		for(let i=0; i<6; i++) {
			for(let j=0; j<10; j++) {
				let elm = document.createElement('span');
				elm.className = `number${i*10+j}`;
				elm.innerHTML = j;
				spin1.appendChild(elm);
			}
		}
		for(let i=0; i<6; i++) {
			for(let j=0; j<10; j++) {
				let elm = document.createElement('span');
				elm.className = `number${i*10+j}`;
				elm.innerHTML = j;
				spin2.appendChild(elm);
			}
		}
	}
	const createResult = function(result,index) {
		let t, height;
		for(let i=50;i<59;i++) {
			t = $(`.number${i}`).innerText;
			if(result == t) {
				height = 100*(i+1);
				break;
			}
		}
		const transform = $(`.lucky-${index}`);
		transform.style.transform = `translate(0,-${height}px)`;
	}

	const start = () => {
		showMsg1.innerHTML = '';
		showMsg2.innerHTML = '';
		isRotating = true;
		btnOff();
		times--;
		const result1 = getRandom(0, 6);
		const result2 = getRandom(0, 9);
		createSpan();
		createResult(result1,1);
		createResult(result2,2);
		showResult(result1, result2);
		$('.times').innerText=times;
	};

	const showResult = function(result1, result2) {
		let timer = setTimeout(() => {
			isRotating = false;
			btnOn();
			if(result1==0) {
				showMsg2.innerHTML = 'Chúc mừng bạn được giảm:<br>';
				showMsg1.innerHTML = `${result2}%`;
			}
			else {
				showMsg2.innerHTML = 'Chúc mừng bạn được giảm:<br>';
				showMsg1.innerHTML = `${result1}${result2}%`;
			}
			clearTimeout(timer);
		}, timeRotate);
	};

	btnSpin.addEventListener('click', function() {
		if(!isRotating && times != 0) {
			start();
		}
	});
})();