import { db, storage } from './firebase-config.js';

const form = document.getElementById('addPackageForm');
const packagesList = document.getElementById('packagesList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const ribbon = document.getElementById('ribbon').value;
  const details = document.getElementById('details').value;
  const imageFile = document.getElementById('image').files[0];

  const storageRef = storage.ref('images/' + imageFile.name);
  await storageRef.put(imageFile);
  const imageUrl = await storageRef.getDownloadURL();

  await db.collection('packages').add({ name, price, ribbon, details, imageUrl });
  alert('✅ تم إضافة الباقة بنجاح!');
  form.reset();
  loadPackages();
});

async function loadPackages() {
  packagesList.innerHTML = "";
  const snapshot = await db.collection('packages').get();

  snapshot.forEach(doc => {
    const data = doc.data();
    const div = document.createElement('div');
    div.classList.add('package');
    div.innerHTML = `
      <img src="${data.imageUrl}" width="100%">
      <h3>${data.name}</h3>
      <p>السعر: ${data.price} د.ع</p>
      <p>${data.ribbon}</p>
      <p>${data.details}</p>
    `;
    packagesList.appendChild(div);
  });
}

loadPackages();
