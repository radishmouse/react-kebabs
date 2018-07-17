
// Plain ol' DOM programming
let hello = document.createElement('h1');
// hello.textContent = "Allo there";
// document.querySelector('[data-root]').appendChild(hello);

// jQuery version
// let jqHello = $('<h1>', {
//   text: "Oi! Wasssap"
// });
// jqHello.appendTo('[data-root]');
// let item = h('li', null, 'chicken hearts');
// let item2 = h('li', null, 'marinated mushrooms');

const h = React.createElement;

let kebabs = [
  'chicken hearts',
  'marianted mushrooms',
  'beef'
];

// let items = kebabs.map((k) => {
//   let vItem = h('li', null, k);
//   return vItem;
// });

// React version
// Please type this one!
// let title = h('h1', null, 'Kebabs!');
// let list = h('ul', null, items);
let main = h('div', null, [
  h('h1', { className: 'header' }, 'Kebabs!'),
  h('ul', null,  kebabs.map((k) => h('li', null, k))),
  h('img', { src: 'image.png', className: 'kebab-image' })
]);

// JSX (shorthand equivalent of the above)
// Needs a build tool to translate into function calls
// let main2 = <div>
//   <h1 className='header'>Kebabs!</h1>
//   <ul>
//     {items}
//   </ul>
//   <img src='image.png' className='kebab-image' />
// </div>


ReactDOM.render(main, document.querySelector('[data-root]'));

