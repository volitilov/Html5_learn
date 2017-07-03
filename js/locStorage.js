// глобальный объект window к нему можно обращаться как к
// асициативному массиву
localStorage

// установить пару ключ/значение
localStorage.setItem('test', 123);
localStorage['test'] = 123;
localStorage.test = 123;

// получить значение по ключу
localStorage.getItem('test');
localStorage['test'];
localStorage.test;


// удалить пару ключ/значение
localStorage.removeItem('test');

// полность очистить хранилище
localStorage.clear();

// получение общего количества значений в области хранения
localStorage.length;

// получение значения по ключу
localStorage.key(0);

window.addEventListener('storage', function(e) {  
  document.querySelector('.my-key').textContent = e.key;
  document.querySelector('.my-old').textContent = e.oldValue;
  document.querySelector('.my-new').textContent = e.newValue;
  document.querySelector('.my-url').textContent = e.url;
  document.querySelector('.my-storage').textContent = e.storageArea;
});


localStorage.setItem("test", 123);