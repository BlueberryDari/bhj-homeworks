const form = document.getElementById('form');
const progressEl = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.upload.onprogress = (e) => {
    if (e.lengthComputable) {
      progressEl.value = e.loaded / e.total;
    }
  };
  xhr.send(formData);
});