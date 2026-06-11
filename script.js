(function() {
  const squadNumber = "2";
  const deviceName = "GOLD-Titan V2";
  const mineralPrice = "45₽";

  document.getElementById('squadDisplay').textContent = squadNumber;
  document.getElementById('deviceDisplay').textContent = deviceName;
  document.getElementById('priceDisplay').textContent = mineralPrice;
  document.getElementById('instrSquad').textContent = squadNumber;
  document.getElementById('instrDevice').textContent = deviceName;

  console.log('GOLD MOBILE загружен. Отряд 2 активен. Сервер №1 открытый.');
})();
