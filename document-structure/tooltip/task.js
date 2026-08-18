const hintedLinks = Array.from(document.getElementsByClassName('has-tooltip'));
const hint = document.createElement('div');
hint.classList.add('tooltip');
const body = document.getElementsByTagName('body')[0];

body.appendChild(hint);

hintedLinks.forEach(link => {
link.addEventListener('click', e => {
    e.preventDefault();

    hintedLinks.forEach(l => l.classList.remove('tooltip_active'));
    link.classList.add('tooltip_active');

    const titleText = link.getAttribute('title');

   if (titleText) {
    hint.innerText = titleText;
    } else {
        return;
    }

   hint.classList.add('tooltip_active');  

   const position = getLinkPosition(link);
   hint.style.left = position.left + 'px';
   hint.style.top = position.top + 'px';
 
  });
});

function getLinkPosition(link) {
    const linkSize = link.getBoundingClientRect();
    const hintSize = hint.getBoundingClientRect();
    const linkDataPosition = link.dataset.position;

    switch(linkDataPosition) {
        case 'right':
            return {
                left: linkSize.right + 5, 
                top: linkSize.top
            };
            break;

        case 'left':
            return {
                left: linkSize.left - hintSize.width - 5, 
                top: linkSize.top
            };
            break; 

        case 'top':
            return {
                left: linkSize.left, 
                top: linkSize.top - hintSize.height - 5
            };
            break;

        case 'bottom':
            return {
                left:linkSize.left, 
                top: linkSize.bottom + 5
            };
            break;
        default:
            return {
                left:linkSize.left, 
                top: linkSize.bottom + 5
            };
            break;
    }
} 