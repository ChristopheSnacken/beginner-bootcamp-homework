// Variables
var hero = {
  name: "",
  heroic: true,
  inventory:[

  ],
  health: 10,
  weapon: {
    type:"",
    damage: 0}
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

  var dragon = {
    name: "Dragon",
    heroic: false,
    inventory:[],
    health: 100,
    weapon: {
      type:"Fire",
      damage: 9}
      }



// Game logic


function rest (creature) {
  creature.health = 10;
  updateStats ()
  console.log(creature)
  return creature
}

function pickUpItem (creature, item) {
  creature.inventory.push(item);
  updateStats ()
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
  updateStats ()
  return creature
}

function doBattle (heroicCreature, creature) {
  if (!heroicCreature.heroic) {
    return null
  }

  while (heroicCreature.health>0 && creature.health>0) {
    dealDamage(heroicCreature, creature)
    updateStats ()
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

var inventoryListString

function displayInventory () {
  for (var i = 0; i < hero.inventory.length; i++) {
    var inventoryListUpdate = []
    inventoryListUpdate.push(hero.inventory[i].type)
    inventoryListString = inventoryListUpdate.join()
    console.log(inventoryListString)
  }
}


function displayStats () {

  var newStatListContent = [`Name: ${hero.name}`,`Health: ${hero.health}`, `Weapon: ${hero.weapon.type}`, `Damage points: ${hero.weapon.damage}`, `Inventory: ${inventoryListString}`]
  listElement.innerHTML =''
  for (var i = 0; i < newStatListContent.length; i++) {
  var newStatListItem = document.createElement("li");
  var newContentList = document.createTextNode(newStatListContent[i]);
  newStatListItem.appendChild(newContentList);
  listElement.appendChild(newStatListItem);
  }
}

function updateStats () {
  displayStats ()
  displayInventory ()
}

updateStats ()

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("buttonId").click();
  }
});

//submit input field value
function mySubmitFunction() {
  const input = document.getElementById('input')


    if(input.value ===""){
      alert("Moron! Enter at least a 1 character");
    } else {
      var x = document.getElementById("input").value;

      hero.name = x ;
      updateStats ()
      input.value= ''

    }
}
