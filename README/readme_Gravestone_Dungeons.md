# INFO
Predicates use less recources aka computing power

# BUGS
✓ Item stats would re-apply on everyones main hand when a player would hold an item that didn't have stats yet
NOTE: This allowed for items such as food or blocks to have stats
FIX: Now executes as a player on itself + changed the item_modifier to replace the stat [This migh be useful for when you make an option to re-apply the stats]

✓ Ysembert talks to everyone on the server + it spawns multiple times in an area
FIX: Ysembert only spawns once per 32 blocks + only talks to the player that is talking to him [makes use of predicate looking_at]

✓ Ysembert leaves early
FIX: Now sets the timer back to 500t each time you ask a question

✓ Ysembert doesn't work in survival
FIX: Uses trigger instead of function so it is survival friendly + only executes as the player

✓ Rune will be consumed even if the player already has a rune active that is the same or greater
Fix: Now only executes if the player has a weaker version
        Also added a dynamic limit per player
        If the max_health rune has a max of 5, a player can combine 5x1 or 2x2 + 1x1 

✓ spell particles would only display on 1 spell at the time dispite multiple spells being placed
Check if mystical heart works (I could not find the item in the cheat room)

# TO-DO
✓ make all dialog into mine
✓ better rng system
✓ stat pitty system
 ┗ PITY based on usefullness
do all the entity stuff
✓ Nerf base mana regen
✓ Fix arcane = mana regen
Fix companions
 ┗ companions can be summoned by anyone, 1 at the time
 ┗ ?some companions are class exclusive but can be traded
✓ FIX STATS WITH BOW/CROSSBOW
FIX TELEPORT SPELL
● ADD BASE STATS ON WEAPONS AFTER STATS APPLY
● FIX PLAYER INIT STAT NOT WORKING
✓ horse says ardenari fix
fix the runes
 ┗ Can now go negative 
transofrming arrow make it work not work on player
✓ When entering a new dungeon, show title of the dungeon
tranform into a random passive animal
make it not work on bosses
bonfire doesnt work on color
boss enchantment on item, use item with click to enchant the item that is says in the description

# IDEAS
Make an enchantment that stores up node buffs
ability ["Respawn Point"] -> 1 time use spawn point
ability ["Short Range Teleport"] -> create a check point you can tp to when ability is re-casted
IMPORTANT IDEA: MAKE AN ICE CASTLE IN THE ICE BIOME ()
Bows with mage abilities
FOR EACH CLASS MAKE A BOSS FIGHT THAT GIVES/UPGRADES SOMETHING ABOUT YOUR CLASS

STATS -> same system as artifacts in genshin
        Random stats / low chance of being a bad/weak item / low chance of high stats / random every stat / max 4 stats

Buy/unlock ultimate abilities per class
Find trinkets in dungeons that you can sell
Make the stats thing into the black smith ability 
Change enchantment to blacksmith/mage with items that you can find in dungeons
Change some classes to mini classes
Regen only out of combat 


#       ENCHANTMENTS

✓ TESTING exp boost 
✓ TESTING bleeding
✓ TESTING magma walker
✓ TESTING lightning
✓ TESTING evoker fangs
✓ TESTING illumination
✓ TESTING quiver
✓ TESTING floating
✓ TESTING poisoning
✓ TESTING freezing
✓ TESTING knife pouch [now does damage based on the damage of the sword]
✓ TESTING potion bag
✓ TESTING deflect projectiles
✓ TESTING telekenesis
✓ TESTING levetation 
         ┗ (make the sound lower) ✓
✓ TESTING star shower
         ┗ (glowstone? sound is too much, particles of a summoning circle to item thing, summon more fire sparks?)
✓ TESTING star shard
         ┗ (maybe less damage, solo a wither) ✓ # rename to Vengence or Soul Flame or Something with Soul
✓ TESTING void sphere
✓ TESTING veil of shadows
✓ TESTING warpstrike || FINISHED
✓ TESTING tongue of fire
✓ TESTING blessing
         ┗ (particles don't work) ✓
? TESTING disarming
✓ TESTING withering
         ┗ (finger doesn't disapear) ✓
TESTING adreenaline boost
         ┗ (add a cooldown - lower duration - lower stats)

#       TODO:
replant
horse 1-3 
         ┗ Ice doesnt decay
Bonecaller
fire burst
light wave

#       SUGGESTIONS
        Custom damage
        Custom cooldowns
        Custom ability duration
        Announce cooldown complete in chat?
        Custom Mana ussage
        Custom amount of projectiles that spawn [example: star shower]
        New file error.mcfunction => for when the user tries to cast the spell but doesn't have the recources

#       FIX
        Disable for companions
        Disable for bosses




<!-- Scrapped stuff -->
SCRAPPED STUFF
save arrows in scoreboard switch between arrows in quiver (dont think this is possible)
        Damage immune tags