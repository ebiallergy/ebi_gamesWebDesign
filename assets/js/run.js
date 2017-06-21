javascript: (function () {

	var myInfo = {
		date: '',
		title: document.title,
		description: document.getElementsByName('description').item(0).content,
		url: document.location.href,
		ogImg: ''
	}

	date()
	ogImg();

	function date() {
		var myDate = new Date(),
			myYear = myDate.getFullYear(),
			myMonth = myDate.getMonth() + 1,
			myDate = myDate.getDate();

		myInfo.date = myYear + '.' + myMonth + '.' + myDate;
	}

	function ogImg() {
		var trg = document.getElementsByTagName('meta'),
			trgLen = trg.length;

		for (var i = 0; i < trgLen; i++) {
			if (trg[i].getAttribute('property') === 'og:image') {
				myInfo.ogImg = trg[i].content;
			}
		}
	}

	var parth = '{\n"id": 0,\n"date": "' + myInfo.date + '",\n"title": "' + myInfo.title + '",\n"caption": "' + myInfo.description + '",\n"publisher": "",\n"category": "",\n"model": "",\n"url": "' + myInfo.url + '",\n"bgUrl": "' + myInfo.ogImg + '",\n"scoreDesign": 0,\n"scoreUsability": 0,\n"scoreSpeed": 0,\n"scoreHart": 0,\n"comment": ""\n}';

	prompt('コピー', parth);
})();