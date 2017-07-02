// глобальный объект window к нему можно обращаться как к
// асициативному массиву
localStorage

// установить пару ключ/значение
localStorage.setItem('test', 123);
localStorage['test'] = 123;

// получить значение по ключу
localStorage.getItem('test');
localStorage['test'];


// удалить пару ключ/значение
localStorage.removeItem('test');

// полность очистить хранилище
localStorage.clear();

// получение общего количества значений в области хранения
localStorage.length;

// получение значения по ключу
localStorage.key(0);

function handle_storage(e) {
  if (!e) { e = window.event; }
  console.log('changes: ' + e);
}

if (window.addEventListener) {
  window.addEventListener("storage", handle_storage, false);
} else {
  window.attachEvent("onstorage", handle_storage);
};


localStorage.setItem("test", 123);