(function() {

	var id   = chrome.runtime.id;
	var href = 'chrome-extension://' + id + '/files/css/';

	if (document.readyState !== 'loading') {
		init();
	} else {
		document.addEventListener('DOMContentLoaded',init);
	}

	function init() {

		var link = '<link type="text/css" rel="stylesheet" href="' + href + 'style.css">';
		document.head.insertAdjacentHTML('beforeend',link);

		return false;
	};

})();
