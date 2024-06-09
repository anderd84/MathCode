const mf = document.querySelector('.math');
const latexBox = document.querySelector('.latex');
const mjsonBox = document.querySelector('.mjson');

let lastUpdate = 0;

mf.addEventListener('input', () => {
    lastUpdate = 0;
    updateFields();
});

latexBox.addEventListener('input', () => {
    lastUpdate = 1;
    updateFields();
});

function updateFields() {
    lastUpdate === 0 ? 0 : mf.value = latexBox.value;
    lastUpdate === 1 ? 0 : latexBox.value = mf.value;
    mjsonBox.value = mf.getValue('math-json');
}