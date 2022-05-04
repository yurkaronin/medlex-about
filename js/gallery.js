lightGallery(document.getElementById('lightgallery-list'), {
    selector: '.lightgallery-item',
	subHtmlSelectorRelative: true,
	hideBarsDelay: 0,
    mode: 'lg-fade',
    addClass: 'fixed-size',
    download: false,
    startClass: '',
	appendCounterTo: '.lg-sub-html'
});