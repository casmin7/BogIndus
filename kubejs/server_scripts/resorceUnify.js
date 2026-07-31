function rmTagViewer(item, replacement) {

    ServerEvents.tags('item', event => {
        event.removeAllTagsFrom(item)
    })
    ServerEvents.recipes(event => {
        event.replaceInput({}, item, Ingredient.of(replacement))
        event.replaceOutput({}, item, Ingredient.of(replacement).first)
    })
    RecipeViewerEvents.removeEntries('item', event => {
        event.remove(item)
})
}


// Double Ingots from MI
const doubleIngots = /^modern_industrialization:.*_double_ingot$/
ServerEvents.recipes(event => {
    event.remove({ input: doubleIngots })
    event.remove({ output: doubleIngots})
})
RecipeViewerEvents.removeEntries('item', event => {
    event.remove(doubleIngots)
    event.remove('modern_industrialization:packer_double_ingot_template')
})


function rmItem(item){
    ServerEvents.tags('item', event => {
        event.removeAllTagsFrom(item)
    })
    ServerEvents.recipes(event => {
        event.remove({input: item})
        event.remove({output: item})
    })
    RecipeViewerEvents.removeEntries('item', event => {
        event.remove(item)
    })
}

// Cosmonautics 
// Duplicate titanium
const titaniumItems = [
    'rocketnautics:raw_titanium_block',
    'rocketnautics:titanium_block',
    'rocketnautics:titanium_ingot',
    'rocketnautics:raw_titanium',
    'rocketnautics:crushed_raw_titanium',
    'rocketnautics:titanium_nugget',
    'rocketnautics:titanium_sheet'

]

ServerEvents.recipes(event => {
    event.replaceInput({ output: 'rocketnautics:hologram_block'}, 'rocketnautics:titanium_block', 'modern_industrialization:titanium_block')
})
titaniumItems.forEach(item => rmItem(item))



// Duplicate sheets
rmTagViewer('create:copper_sheet', 'modern_industrialization:copper_plate')
rmTagViewer('create:iron_sheet', 'modern_industrialization:iron_plate')
rmTagViewer('create:golden_sheet', 'modern_industrialization:gold_plate')

//Uranium
rmTagViewer('crowns:uranium_ingot', 'modern_industrialization:uranium_ingot')
rmItem('crowns:natural_uranium_nugget')
rmItem('crowns:raw_uranium')
rmItem('crowns:uranium_ore')
rmItem('crowns:deepslate_uranium_ore')

//Tungsten
const tungstenItems = [
    'createmetallurgy:raw_wolframite_block',
    'createmetallurgy:wolframite_ore',
    'createmetallurgy:raw_tungsten',
    'createmetallurgy:crushed_raw_tungsten',
    'createmetallurgy:tungsten_dust',
    'createmetallurgy:dirty_tungsten_dust',
    'createmetallurgy:tungsten_ingot',
    'createmetallurgy:tungsten_sheet',
    'createmetallurgy:tungsten_block',
    'createmetallurgy:tungsten_nugget'
]

tungstenItems.forEach(item => rmItem(item))

//Bronze
const bronzeItems = [
    'createbigcannons:bronze_scrap',
    'createbigcannons:bronze_ingot'
]

bronzeItems.forEach(item => rmItem(item))
rmTagViewer('createbigcannons:bronze_block', 'modern_industrialization:bronze_block')

//Steel
rmTagViewer('createbigcannons:steel_block', 'modern_industrialization:steel_block')
rmTagViewer('createmetallurgy:steel_block', 'modern_industrialization:steel_block')

rmTagViewer('createbigcannons:steel_ingot', 'modern_industrialization:steel_ingot')
rmTagViewer('createmetallurgy:steel_ingot', 'modern_industrialization:steel_ingot')

rmTagViewer('createbigcannons:steel_scrap', 'modern_industrialization:steel_nugget')


//Drills
rmItem('modern_industrialization:steel_drill')
rmItem('modern_industrialization:steel_drill_head')

rmItem('modern_industrialization:bronze_drill')
rmItem('modern_industrialization:bronze_drill_head')

rmItem('modern_industrialization:gold_drill')
rmItem('modern_industrialization:gold_drill_head')

rmItem('modern_industrialization:copper_drill')
rmItem('modern_industrialization:copper_drill_head')

rmItem('modern_industrialization:steam_quarry')
rmItem('modern_industrialization:electric_quarry')
rmItem('modern_industrialization:oil_drilling_rig')

ServerEvents.recipes(event => {
    event.remove({type: 'modern_industrialization:quarry'})
    event.remove({type: 'modern_industrialization:oil_drilling_rig'})

})


