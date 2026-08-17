const hintedLinks = document.getElementsByClassName('has-tooltip');
const hint = document.createElement('div');
hint.classList.add('tooltip');
const body = document.getElementsByTagName('body')[0];

body.appendChild(hint);

hintedLinks.forEach(link => {
link.addEventListener('click', e => {
    e.preventDefault();

   if (link.getAttribute('title') === hint.innerText) {
    link.classList.toggle('tooltip_active');
   }

   link.classList.add('tooltip_active');
   hint.innerText = link.getAttribute('title');

   hint.style = `left: ${getLinkPosition.left}, top: ${getLinkPosition.top}`
  })
})

function getLinkPosition(link) {
    const linkSize = link.getBoundingClientRect();
    const linkDataPosition = link.dataset.position;
    const hintSize = hint.getBoundingClientRect();

    switch(linkDataPosition) {
        case 'right':
            return {left: linkSize.right + 5, top: linkSize.top};
            break;
        case 'left':
            return {left: linkSize.left - hintSize.width, top: linkSize.top};
            break; 
        case 'top':
            return {left: linkSize.left, top: linkSize.top - 30};
            break;
        default:
            return {left:linkSize.left, top: linkSize.top + 30};
            break;
    }
} 