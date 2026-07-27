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
        // event.remove({input: item})
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

titaniumItems.forEach(item => rmItem(item))

ServerEvents.recipes(event => {
    event.replaceInput({ output: 'rocketnautics:hologram_block'}, 'rocketnautics:titanium_block', 'modern_industrialization:titanium_block')
})

// Duplicate sheets
rmTagViewer('create:copper_sheet', 'modern_industrialization:copper_plate')
rmTagViewer('create:iron_sheet', 'modern_industrialization:iron_plate')
rmTagViewer('create:golden_sheet', 'modern_industrialization:gold_plate')