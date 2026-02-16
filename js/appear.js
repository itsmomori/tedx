function initOradoresAppear() {
	const firstSection = document.querySelector('.oradores-section');
	if (!firstSection) return;

	const revealTargets = firstSection.querySelectorAll('h3, h4');
	revealTargets.forEach(function (element, index) {
		element.classList.add('appear-on-load');
		element.style.opacity = '0';
		element.style.transition = 'opacity 0.7s ease, transform 0.7s ease, filter 0.7s ease';
		element.style.transform = 'translate3d(0, 20px, 0)';

		window.setTimeout(function () {
			element.classList.add('is-visible');
			element.style.opacity = '1';
			element.style.transform = 'translate3d(0, 0, 0)';
		}, 120 + index * 120);
	});

	const scrollTargets = document.querySelectorAll('.orador-detalhe .orador-detalhe-img, .orador-detalhe .orador-detalhe-titulo, .orador-detalhe .orador-detalhe-texto, .orador-detalhe .orador-social');

	if (!scrollTargets.length) return;

	// Define estado inicial escondido diretamente
	scrollTargets.forEach(function (element) {
		element.style.opacity = '0';
		element.style.transform = 'translate3d(0, 30px, 0)';
		element.style.transition = 'none';
	});

	// Força reflow para aplicar estilos iniciais
	void document.body.offsetHeight;

	// Adiciona transição após estado inicial
	scrollTargets.forEach(function (element) {
		element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
	});

	const pending = new Set(scrollTargets);

	function revealElement(el) {
		if (!pending.has(el)) return;
		el.style.opacity = '1';
		el.style.transform = 'translate3d(0, 0, 0)';
		pending.delete(el);
	}

	function checkVisibility() {
		var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
		pending.forEach(function (element) {
			var rect = element.getBoundingClientRect();
			if (rect.top < viewportHeight * 0.9) {
				revealElement(element);
			}
		});

		if (!pending.size) {
			window.removeEventListener('scroll', checkVisibility);
			window.removeEventListener('resize', checkVisibility);
		}
	}

	// Aguarda um frame antes de começar a verificar
	requestAnimationFrame(function () {
		window.addEventListener('scroll', checkVisibility, { passive: true });
		window.addEventListener('resize', checkVisibility);
		checkVisibility();
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initOradoresAppear);
} else {
	initOradoresAppear();
}
