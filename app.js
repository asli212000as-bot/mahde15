const packagesContainer = document.getElementById('packagesContainer');
const searchBox = document.getElementById('searchBox');

async function displayPackages(filterText = "") {
  packagesContainer.innerHTML = "";
  const snapshot = await db.collection('packages').get();

  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.name.includes(filterText) || data.ribbon.includes(filterText)) {
      const div = document.createElement('div');
      div.classList.add('package');
      div.innerHTML = `
        <img src="${data.imageUrl}" alt="${data.name}">
        <h3>${data.name}</h3>
        <p>السعر: ${data.price} د.ع</p>
        <p>الربون: ${data.ribbon}</p>
        <p>${data.details}</p>
      `;
      packagesContainer.appendChild(div);
    }
  });
}

searchBox.addEventListener('input', (e) => {
  displayPackages(e.target.value.trim());
});

displayPackages();
