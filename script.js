const grid = document.getElementById('grid');

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.className = 'grid-item';
  grid.appendChild(cell);
}
