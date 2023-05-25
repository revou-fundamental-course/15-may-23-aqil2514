function kelilingPersegi(a) {
  const kPersegi = document.getElementById("nilai-keliling");
  const hKPersegi = document.getElementById("hasil-keliling");
  a = kPersegi.value;
  const hasil = 4 * a;

  return (hKPersegi.innerHTML = `Keliling persegi dengan sisi ${a} adalah ${hasil}`);
}

function luasPersegi(a) {
  const lPersegi = document.getElementById("nilai-luas");
  const hLPersegi = document.getElementById("hasil-luas");
  a = lPersegi.value;
  const hasil = a * a;

  return (hLPersegi.innerHTML = `Luas persegi dengan sisi ${a} adalah ${hasil}`);
}
