function truncate(str, maxlength) {
  // ваш код...
  let text = '';
  if (str.length > maxlength) {
   return text = str.slice(0, maxlength - 1) + '…';
  }

  return str;
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
truncate('Всем привет!', 20);
