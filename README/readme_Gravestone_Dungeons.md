## REWORK

namespace
   enchantment
      *NAME*
         using_item        active enchant
         tick              passive enchant
         post_attack       on-hit enchant
         success           if player has the required resources
         fail              if the player does not ^
         result            if the applied effect is a DOT
         stat              Modify item
      
   tags
      entity_type
         * boss
         * ability_immune
         * magic_damage_immune
         * physical_damage_immune
         * fire_damage_immune
         * freeze_damage_immune
         * wither_damage_immune
         * bleeding_damage_immune
         * slow_immune
         * knock_up_immune
         * cc_immune

   function
      boss
      [INFO]
         marker.boss
         marker.grimgar
         marker.minion
         team [ENEMY]
         UUID [scoreboard]
         tag [true / false] (Defines if a boss is active or defeated)

### ENCHANTMENT
- [x] Bleeding             on hit
- [x] Blessing             on-hit
- [x] Freezing             on-hit
- [x] Lightning            on-hit
- [x] Floating             on-hit
- [x] Poisoning            on-hit
- [x] Tongue of Fire       on-hit
- [x] Adrenaline Boost     cooldown
- [x] Illumination         cooldown
- [x] Knife Pouch          cooldown
- [x] Light Wave           cooldown
- [x] Void Sphere          cooldown
- [x] Disarming            cooldown
- [x] Evoker Fangs         cooldown
- [x] Bonecaller           cooldown + duration
- [x] Deflect Projectiles  cooldown + duration
- [x] Star Shard           cooldown + duration
- [x] Star Shower          cooldown + duration
- [x] Levetation
- [x] Potionbag
- [x] Quiver
- [x] Telekinesis
- [x] Veil of Shadows
- [x] Warpsrike
- [x] Withering
- [x] Fireburst
- [ ] Replant
- [ ] Horse

### ARROW
- [x] Bonfire
- [x] Cursed
- [x] Fire
- [x] Freezing
- [x] Hypno
- [x] Thunder
- [x] Transform
- [x] Weaving
- [ ] Ender

### SPELL
- [x] Ember
- [x] Frost
- [x] Shield
- [x] Thunder
- [ ] Warp

## MULTIPLAYER BUGS
### BOSS
- [x] Boss fight would reset after 1 player would die in a boss fight
* FIX: Local player counter. If the counter = 0, the boss will reset
- [x] Boss would run functions (ticks) without the boss being active
* now only ticks boss functions if the boss fight is active

### STAT
- [x] Item stats would re-apply on everyones main hand when a player would hold an item that didn't have stats prior
* NOTE: This allowed for items such as food or blocks to have stats
* FIX: Now executes as a player on itself + changed the item_modifier to replace the stat [This migh be useful for when you make an option to re-apply the stats]
- [x] better rng system
- [x] stat pitty system
- [x] BUG: Bow and Cross bow would not get stats
- [x] Now shows and applies the base stats of each item (Post stats)

### ENCHANTMENT
### ARROW
- [x] transoforming arros places a structure on the target, this structure is made out of a few grass blocks and other nature blocks [Zacc change it to what you want, what I have is a placeholder]

### SPELL
- [x] spell particles would only display on 1 spell at the time dispite multiple spells being placed
- [x] Fix mana regen
- [x] Fix arcane = mana regen
- [x] Thunder/lightning spell only hits once per new target

### COMPANION
- [ ] companions can be summoned by anyone, 1 at the time
   
### INIT PLAYER
- [x] Ysembert talks to everyone on the server + it spawns multiple times in an area
* FIX: Ysembert only spawns once per 32 blocks + only talks to the player that is talking to him [makes use of predicate looking_at]

- [x] Ysembert leaves early
* FIX: Now sets the timer back to 500t each time you ask a question

- [ ] Make Ysembert leave is no players are near him

- [x] Ysembert doesn't work in survival
* FIX: Uses trigger instead of function so it is survival friendly + only executes as the player

- [x] Ysembert should only talk to the person that clicked him
- [x] Ysember "questions" should now be survival compatible

# RUNE
- [x] Rune will be consumed even if the player already has a rune active that is the same or greater
* Fix: Now only executes if the player has a weaker version
* Fix: Also added a dynamic limit per player
* Fix: If the max_health rune has a max of 5, a player can combine 5x1 or 2x2 + 1x1 

- [ ] Check if mystical heart works (I could not find the item in the cheat room)


- [x] make all dialog into mine
- [ ] do all the entity stuff

- [ ] init_players.mcfunction doesn't execute sometimes
- [x] horse tellraw wrong words fix



## OTHER
- [x] When entering a new dungeon, show title of the dungeon [can be toggled]
- [x] companions attack other companions
- [x] companions summon animation would break if you tried to summon multiple
- [x] companions duration would break if there are multiple players
- [x] companions now count as an individual
- [x] Created a mechanic that allowes for every villager to have a "passive" and "active" dialog

## OTHER FIXES
- [x] new players will run init_player.mcfunction that enables every stat that the player needs to function
- [x] remove my own class system
- [ ] build the class system that Zacc explained


## IDEAS
* Enchantment that stores up a Node buff that triggers when you take a large amout of damage
* ability "Respawn Point": One time use spawn point
* ability "Short Range Teleport": create a check point you can tp to when ability is re-casted. Checkpoint lasts a short time
* Make a castle/fortress in an ice style
* Bows that use magic spells
* boss drops "Item of Enchantment", use item with click to enchant the item that is mentions in the description
* Stats work the same as in Genshin (Get random stats + random value)
* Find trinkets in dungeons that you can sell (Trinkets are useless, only used to sell for currency)
* Make the stats into the black smith ability 
* Change the new enchantments to blacksmith/mage
* Regen mana only out of combat
* make custom music into disks

## SUGGESTIONS
        Custom damage [spells, arrow, companion, enchantment]
        Custom cooldowns [spells, arrow, companion, enchantment]
        Custom duration [spells, arrow, companion, enchantment]
        Announce cooldown complete in chat?
        Custom Mana ussage [spells, enchantment]
        Custom amount of projectiles that spawn [example: star shower]
        New file error.mcfunction => for when the user tries to cast the spell but doesn't have the recources


## SCRAPPED
save arrows in scoreboard switch between arrows in quiver (dont think this is possible)
        Damage immune tags

- [ ] tranforming arrow
   - [ ] on a player: Turn into a random passive animal for X amount of seconds
   - [ ] make it not work on bosses

How to fix runes
When you click a rune check how many bonus hearts the player already has = X
Set amount X + new amount
* Buy/unlock ultimate abilities per class
* Change some classes to mini classes
* A boss for each class that upgrades something about that cless specifically
