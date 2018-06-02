// Variables
var hero = {
  name: "CriCri",
  heroic: true,
  inventory:[
    {type:"fire", damage:1},
    {type:"MegaSword", damage: 10}
  ],
  health: 10,
  weapon: {
    type:"sharp",
    damage: 2}
  }

  var ogre = {
    name: "BadAss",
    heroic: false,
    inventory:[],
    health: 5,
    weapon: {
      type:"fire",
      damage: 1}
    }



// Game logic


function rest (creature) {
  creature.health = 10;
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

function displayStats () {
  
}
