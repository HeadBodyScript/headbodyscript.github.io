index will be a list of cards like pinterest
    each card will contain the following
        - image / images [optional]
        - title
        - description
        - version (version of the datapack / how many releases)
        - type datapack, texturepack, map, modpack
        - type version / supported versions (version of the datapack or modpack)


download link

each version will be stored on the main page


https://github.com/uisual/freebies/tree/master/curve
each section will be a component where data will be passed into it

this way I can change a component everywhere at once if I want to add additional support


with the map function it will display sections top to bottom from index 0 (0 being at the top) based on a switch function that checks which type of component will be loaded

Right now the data for the components will be static.
Later these will be fetched from an api or database idk yet


To do create a card component
create a component for each section type from uisual

Components I want
    A top component that is a TLDR + image / video about the project

    A contributions tab that shows who all contributed to the pack finacially
    
    A collaberations section that shows who all contributed to the pack with code, textures or other ways

    A download section that has a slider where the user can select which version they want to download

    A feature section that shows off features about the pack

    A tab that links to an optional Wiki to the pack

    A section where it shows what the pack is (data pack, texture pack, map, Fabric mod, Forge mod, )
    
    A tags section that shows what the pack changes (generation, items, CTM, ect...)


Set css file from uisual
