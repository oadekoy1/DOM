// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// grab the main element
const mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
mainEl.classList.add('flex-ctr')

// task2
const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')


menuLinks.forEach((linkObj) => {
    // create a new element
    const a = document.createElement('a')

    // set the href attribute
    a.setAttribute('href', linkObj.href)

    // set the text content
    a.textContent = linkObj.text

    //addend the anchor tag to the parent element
    topMenuEl.appendChild(a)

    console.log(a);
})



