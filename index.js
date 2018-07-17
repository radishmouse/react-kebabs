
// Plain ol' DOM programming
// let hello = document.createElement('h1');
// hello.textContent = "Allo there";

// jQuery version
// let jqHello = $('<h1>', {
//   text: "Oi! Wasssap"
// });

// React version
// Please type this one!
let hello = React.createElement('h1', null, 'hello react!');
ReactDOM.render(hello, document.querySelector('[data-root]'));


