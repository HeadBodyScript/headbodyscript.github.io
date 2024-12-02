## INFO
Predicates use less recources aka computing power

## MULTIPLAYER BUGS
- [x] Item stats would re-apply on everyones main hand when a player would hold an item that didn't have stats prior
* NOTE: This allowed for items such as food or blocks to have stats
* FIX: Now executes as a player on itself + changed the item_modifier to replace the stat [This migh be useful for when you make an option to re-apply the stats]

- [x] Ysembert talks to everyone on the server + it spawns multiple times in an area
* FIX: Ysembert only spawns once per 32 blocks + only talks to the player that is talking to him [makes use of predicate looking_at]

- [x] Ysembert leaves early
* FIX: Now sets the timer back to 500t each time you ask a question

- [x] Ysembert doesn't work in survival
* FIX: Uses trigger instead of function so it is survival friendly + only executes as the player

- [x] Rune will be consumed even if the player already has a rune active that is the same or greater
* Fix: Now only executes if the player has a weaker version
* Fix: Also added a dynamic limit per player
* Fix: If the max_health rune has a max of 5, a player can combine 5x1 or 2x2 + 1x1 

- [x] spell particles would only display on 1 spell at the time dispite multiple spells being placed
- [ ] Check if mystical heart works (I could not find the item in the cheat room)


- [x] make all dialog into mine
- [x] better rng system
- [x] stat pitty system
- [] do all the entity stuff
- [x] Nerf base mana regen
- [x] Fix arcane = mana regen

- [ ] Companions
        - [ ] companions can be summoned by anyone, 1 at the time
        - [ ] some companions are class exclusive but can be traded
- [x] BUG Bow and Cross bow would not get stats
- [ ] Teleportation spell
- [x] Now shows and applies the base stats of each item (Post stats)
- [ ] init_players.mcfunction doesn't execute sometimes
- [x] horse tellraw wrong words fix
- [ ] fix the runes
        - [ ] Can now go negative 

- [x] When entering a new dungeon, show title of the dungeon
- [ ] tranforming arrow
        - [ ] on a player: Turn into a random passive animal for X amount of seconds
        - [ ] make it not work on bosses

# ENCHANTMENTS
- [x] TESTING exp boost 
- [x] TESTING bleeding
- [x] TESTING magma walker
- [x] TESTING lightning
- [x] TESTING evoker fangs
- [x] TESTING illumination
- [x] TESTING quiver
- [x] TESTING floating
- [x] TESTING poisoning
- [x] TESTING freezing
- [x] TESTING knife pouch [now does damage based on the damage of the sword]
- [x] TESTING potion bag
- [x] TESTING deflect projectiles
- [x] TESTING telekenesis
- [x] TESTING levetation 
        - [ ] (make the sound lower)
- [x] TESTING star shower
        - [ ] (glowstone? sound is too much, particles of a summoning circle to item thing, summon more fire sparks?)
- [x] TESTING star shard
        - [ ] (maybe less damage, solo a wither) - [x] # rename to Vengence or Soul Flame or Something with Soul
- [x] TESTING void sphere
- [x] TESTING veil of shadows
- [x] TESTING warpstrike || FINISHED
- [x] TESTING tongue of fire
- [x] TESTING blessing
        - [ ] (particles don't work)
- [x] TESTING disarming
- [x] TESTING withering
        - [ ] (finger doesn't disapear)
TESTING adreenaline boost
        - [ ] (add a cooldown - lower duration - lower stats)

#       TODO:
* replant
* horse 1-3 - Ice doesnt decay
* Bonecaller
* fire burst
* light wave

# IDEAS
* Enchantment that stores up a Node buff that triggers when you take a large amout of damage
* ability "Respawn Point": One time use spawn point
* ability "Short Range Teleport": create a check point you can tp to when ability is re-casted. Checkpoint lasts a short time
* Make a castle/fortress in an ice style
* Bows that use magic spells
* A boss for each class that upgrades something about that cless specifically
* boss drops "Item of Enchantment", use item with click to enchant the item that is mentions in the description
* Stats work the same as in Genshin (Get random stats + random value)
* Buy/unlock ultimate abilities per class
* Find trinkets in dungeons that you can sell (Trinkets are useless, only used to sell for currency)
* Make the stats into the black smith ability 
* Change the new enchantments to blacksmith/mage
* Change some classes to mini classes
* Regen only out of combat 

# SUGGESTIONS
        Custom damage
        Custom cooldowns
        Custom ability duration
        Announce cooldown complete in chat?
        Custom Mana ussage
        Custom amount of projectiles that spawn [example: star shower]
        New file error.mcfunction => for when the user tries to cast the spell but doesn't have the recources

# FIX
        Disable for companions
        Disable for bosses

<!-- Scrapped stuff -->
SCRAPPED STUFF
save arrows in scoreboard switch between arrows in quiver (dont think this is possible)
        Damage immune tags