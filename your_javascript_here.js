// Variables
var hero = {
  name: "Chrisforius",
  heroic: true,
  inventory:[
    {type:"Fire", damage:1},
    {type:"MegaSword", damage: 10}
  ],
  health: 10,
  weapon: {
    type:"Knife",
    damage: 2}
  }

  var ogre = {
    name: "BadAss",
    heroic: false,
    inventory:[],
    health: 5,
    weapon: {
      type:"Fire",
      damage: 1}
    }



// Game logic


function rest (creature) {
  creature.health = 10;
  displayStats ()
  console.log(creature)
  return creature
}

function pickUpItem (creature, item) {
  creature.inventory.push(item);
  console.log(item)
  return creature
}

function dealDamage (attacker, defender) {
  defender.health = defender.health - attacker.weapon.damage;
  return defender
}

function equipWeapon (creature, index) {
  creature.weapon = creature.inventory[index];
  creature.inventory.splice(index, 1);
  return creature
}

function doBattle (heroicCreature, creature) {
  if (!heroicCreature.heroic) {
    return null
  }

  while (heroicCreature.health>0 && creature.health>0) {
    dealDamage(heroicCreature, creature)
    displayStats ()
    if (creature.health >0) {
      dealDamage(creature, heroicCreature)
    }
  }
  if (heroicCreature.health>0) {
    console.log(hero.weapon)
    console.log(hero.health)
    return heroicCreature
  }
  else {
    alert("Hero is DEAD!")
  }

}

// UI
var listElement = document.getElementById('hero');

function displayStats () {

  var newStatListContent = [`Name: ${hero.name}`,`Health: ${hero.health}`, `Weapon: ${hero.weapon.type}`, `Damage points: ${hero.weapon.damage}`]
  listElement.innerHTML ='<h3>Hero stats:</h3>'
  for (var i = 0; i < newStatListContent.length; i++) {
  var newStatListItem = document.createElement("li");
  var newContentList = document.createTextNode(newStatListContent[i]);
  newStatListItem.appendChild(newContentList);
  listElement.appendChild(newStatListItem);
  }
}

displayStats ()
