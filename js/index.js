const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// Nav Items
let navItems = document.querySelectorAll("nav a")
navItems.forEach((el, index) => {
  el.textContent = siteContent['nav'][`nav-item-${(index+1)}`]
});

// CTA Content
let ctaHeading1 = document.querySelector('.cta h1')
ctaHeading1.textContent = siteContent['cta']['h1']

let ctaButton = document.querySelector('.cta button')
ctaButton.textContent = siteContent['cta']['button']

// Contact Content
let contactHeading4 = document.querySelector('.contact h4')
contactHeading4.textContent = siteContent['contact']['contact-h4']

let contactAddress = document.querySelectorAll('.contact p')
let contactContentOrder = ['address', 'phone','email']
contactAddress.forEach((el, index) => {
  el.textContent = siteContent['contact'][contactContentOrder[index]]
});


// footer
let footerCopy = document.querySelector('footer p')
footerCopy.textContent = siteContent['footer']['copyright']

// Main Content
let mainHeading4 = document.querySelectorAll('.text-content h4')
let mainSectionContent = document.querySelectorAll('.text-content p')

mainContentOrder = ['features', 'about', 'services', 'product', 'vision']

mainHeading4.forEach((el, index) => {
  el.textContent = siteContent['main-content'][`${mainContentOrder[index]}-h4`]
});
mainSectionContent.forEach((el, index) => {
  el.textContent = siteContent['main-content'][`${mainContentOrder[index]}-content`]
});
