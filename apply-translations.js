// Script para aplicar traduções em elementos que não têm data-i18n
// Adicione este script no final do body, antes de </body>

document.addEventListener('DOMContentLoaded', function() {
    // Aplicar traduções baseadas em seletores específicos
    const elementsToTranslate = [
        // Header
        { selector: '.header-search-2 .section-title', key: 'headerTitle' },
        
        // Slides
        { selector: '.ltn__slide-item:nth-child(1) .slide-title', key: 'sliderTitle1' },
        { selector: '.ltn__slide-item:nth-child(1) .slide-sub-title', key: 'sliderSubtitle1' },
        { selector: '.ltn__slide-item:nth-child(1) .slide-brief p', key: 'sliderDesc1' },
        
        { selector: '.ltn__slide-item:nth-child(2) .slide-title', key: 'sliderTitle2' },
        { selector: '.ltn__slide-item:nth-child(2) .slide-sub-title', key: 'sliderSubtitle2' },
        { selector: '.ltn__slide-item:nth-child(2) .slide-brief p', key: 'sliderDesc2' },
        
        { selector: '.ltn__slide-item:nth-child(3) .slide-title', key: 'sliderTitle3' },
        { selector: '.ltn__slide-item:nth-child(3) .slide-sub-title', key: 'sliderSubtitle3' },
        { selector: '.ltn__slide-item:nth-child(3) .slide-brief p', key: 'sliderDesc3' },
        
        // Produtos
        { selector: '.ltn__product-item:nth-child(1) .product-title', key: 'productBuganvilias', section: '#comprar' },
        { selector: '.ltn__product-item:nth-child(2) .product-title', key: 'productEstrelicias', section: '#comprar' },
        { selector: '.ltn__product-item:nth-child(3) .product-title', key: 'productProtea', section: '#comprar' },
        { selector: '.ltn__product-item:nth-child(4) .product-title', key: 'productOrquideas', section: '#comprar' },
        { selector: '.ltn__product-item:nth-child(5) .product-title', key: 'productJarros', section: '#comprar' },
        { selector: '.ltn__product-item:nth-child(6) .product-title', key: 'productRosas', section: '#comprar' },
        { selector: '.ltn__product-item:nth-child(7) .product-title', key: 'productPeonias', section: '#comprar' },
        { selector: '.ltn__product-item:nth-child(8) .product-title', key: 'productSanseverias', section: '#comprar' },
    ];
    
    // Adicionar data-i18n attributes
    elementsToTranslate.forEach(item => {
        let element;
        if (item.section) {
            const section = document.querySelector(item.section);
            if (section) {
                element = section.querySelector(item.selector);
            }
        } else {
            element = document.querySelector(item.selector);
        }
        
        if (element && !element.hasAttribute('data-i18n')) {
            element.setAttribute('data-i18n', item.key);
        }
    });
    
    // Aplicar traduções imediatamente se já houver idioma salvo
    if (typeof applyTranslations === 'function') {
        applyTranslations();
    }
});
