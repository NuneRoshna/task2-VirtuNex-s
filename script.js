const results = {
  React: 0,
  Vue: 0,
  Angular: 0,
  Svelte: 0,
};

const form = document.getElementById('pollForm');
const resultsList = document.getElementById('resultsList');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const selected = form.vote.value;
  if (selected) {
    results[selected]++;
    updateResults();
  } else {
    alert("Please select an option before voting.");
  }
});

function updateResults() {
  resultsList.innerHTML = '';
  for (const option in results) {
    const li = document.createElement('li');
    li.textContent = `${option}: ${results[option]} vote(s)`;
    resultsList.appendChild(li);
  }
}

// Initial render
updateResults();
