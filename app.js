const fighterList = document.getElementById('fightersList');
const battleResults = document.getElementById('battleResults');

const fighters = [
  { name: 'Кира', health: 150, attack: 25   },
  { name: 'Лект', health: 150, attack: 25 },
  { name: 'Кендрик', health: 150, attack: 25 }
];

let selectedFighters = [];

const createFighterListItem = (fighter) => {
  const li = document.createElement('li');
  li.innerHTML = fighter.name;
  return li;
};

const handleFighterSelect = (e) => {
  const checkbox = e.target;
  const fighter = fighters.find((f) => f.name === checkbox.value);
  
  if (checkbox.checked) {
    selectedFighters.push(fighter);
  } else {
    selectedFighters = selectedFighters.filter((f) => f.name !== fighter.name);
  }
};

const startBattle = () => {
  if (selectedFighters.length !== 2) {
    alert('Выберите двух бойцов!');
    return;
  }
  
  let fighter1 = selectedFighters[0];
  let fighter2 = selectedFighters[1]; 

  while (fighter1.health > 0 && fighter2.health > 0) {
    const attack1 = Math.floor(Math.random() * fighter1.attack);
    const attack2 = Math.floor(Math.random() * fighter2.attack);

    fighter1.health -= attack2;
    fighter2.health -= attack1;
  }
  
  let winner;
  if (fighter1.health > fighter2.health) {
    winner = fighter1;
  } else {
    winner = fighter2;
  }
  
  battleResults.innerHTML = `Победитель: <b>${winner.name}</b>`;
};

fighters.forEach((fighter) => {
  fighterList.appendChild(createFighterListItem(fighter));
});

document.querySelectorAll('input[name=fighter1]').forEach((checkbox) => {
  checkbox.addEventListener('change', handleFighterSelect);
});
document.querySelectorAll('input[name=fighter2]').forEach((checkbox) => {
  checkbox.addEventListener('change', handleFighterSelect);
});
document.getElementById('startBattle').addEventListener('click', startBattle);