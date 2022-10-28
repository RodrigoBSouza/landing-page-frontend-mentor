const btnCloseMenu = document.getElementById('btn-close-menu-mobile');
const menuMobile = document.getElementById('menu-mobile-site');
const btnOpenMenu = document.getElementById('btn-open-menu-mobile');
const opacity = document.getElementById('opacity');
const features = document.getElementById('features-site');
const featuresExpand = document.getElementById('feature-expand');
const company = document.getElementById('company-site');
const companyExpand = document.getElementById('company-expand');

btnOpenMenu.addEventListener('click', () => {
    menuMobile.style.width = '55%';
    menuMobile.style.padding = '20px';
    menuMobile.style.paddingBottom = '150px';
    btnCloseMenu.style.display = 'flex';
    opacity.style.display = 'block';
});

btnCloseMenu.addEventListener('click', () => {
    menuMobile.style.width = '0%';
    btnCloseMenu.style.display = 'none';
    menuMobile.style.padding = '0px';
    opacity.style.display = 'none';
});

features.addEventListener('click', () => {
    if(featuresExpand.style.display === 'block') {
        featuresExpand.style.display = 'none';
        features.style.backgroundImage = 'url(images/icon-arrow-down.svg)';
    } else {
        features.style.backgroundImage = 'url(images/icon-arrow-up.svg)';
        featuresExpand.style.display = 'block';
    }    
});

company.addEventListener('click', () => {
    if(companyExpand.style.display === 'block') {
        companyExpand.style.display = 'none';
        company.style.backgroundImage = 'url(images/icon-arrow-down.svg)';
    } else {
        companyExpand.style.display = 'block';
        company.style.backgroundImage = 'url(images/icon-arrow-up.svg)';
    }    
});