ServerEvents.recipes(event => {
    
    // --- Antimony ---
    event.recipes.createoreexcavation.vein('{"text": "Antimony Vein"}', 'modern_industrialization:raw_antimony')
        .placement(128, 16, 10000001)
        .id("kubejs:vein_antimony");

    event.recipes.createoreexcavation.drilling('modern_industrialization:raw_antimony', 'kubejs:vein_antimony', 100)
        .id("kubejs:drilling_antimony");


    // --- Bauxite ---
    event.recipes.createoreexcavation.vein('{"text": "Bauxite Vein"}', 'modern_industrialization:bauxite_crushed_dust')
        .placement(128, 16, 10000002)
        .id("kubejs:vein_bauxite");

    event.recipes.createoreexcavation.drilling('modern_industrialization:bauxite_crushed_dust', 'kubejs:vein_bauxite', 100)
        .id("kubejs:drilling_bauxite");


    // --- Lead ---
    event.recipes.createoreexcavation.vein('{"text": "Lead Vein"}', 'modern_industrialization:raw_lead')
        .placement(128, 16, 10000003)
        .id("kubejs:vein_lead");

    event.recipes.createoreexcavation.drilling('modern_industrialization:raw_lead', 'kubejs:vein_lead', 100)
        .id("kubejs:drilling_lead");


    // --- Lignite Coal ---
    event.recipes.createoreexcavation.vein('{"text": "Lignite Coal Vein"}', 'modern_industrialization:lignite_coal')
        .placement(128, 16, 10000004)
        .id("kubejs:vein_lignite_coal");

    event.recipes.createoreexcavation.drilling('modern_industrialization:lignite_coal', 'kubejs:vein_lignite_coal', 100)
        .id("kubejs:drilling_lignite_coal");


    // --- Monazite ---
    event.recipes.createoreexcavation.vein('{"text": "Monazite Vein"}', 'modern_industrialization:monazite_crushed_dust')
        .placement(128, 16, 10000005)
        .id("kubejs:vein_monazite");

    event.recipes.createoreexcavation.drilling('modern_industrialization:monazite_crushed_dust', 'kubejs:vein_monazite', 100)
        .id("kubejs:drilling_monazite")
        .drill('modern_industrialization:stainless_steel_drill')
        .fluid('10x modern_industrialization:lubricant');


    // --- Nickel ---
    event.recipes.createoreexcavation.vein('{"text": "Nickel Vein"}', 'modern_industrialization:raw_nickel')
        .placement(128, 16, 10000006)
        .id("kubejs:vein_nickel");

    event.recipes.createoreexcavation.drilling('modern_industrialization:raw_nickel', 'kubejs:vein_nickel', 100)
        .id("kubejs:drilling_nickel");


    // --- Salt ---
    event.recipes.createoreexcavation.vein('{"text": "Salt Vein"}', 'modern_industrialization:salt_crushed_dust')
        .placement(128, 16, 10000007)
        .id("kubejs:vein_salt");

    event.recipes.createoreexcavation.drilling('modern_industrialization:salt_crushed_dust', 'kubejs:vein_salt', 100)
        .id("kubejs:drilling_salt");


    // --- Tin ---
    event.recipes.createoreexcavation.vein('{"text": "Tin Vein"}', 'modern_industrialization:raw_tin')
        .placement(128, 16, 10000008)
        .id("kubejs:vein_tin");

    event.recipes.createoreexcavation.drilling('modern_industrialization:raw_tin', 'kubejs:vein_tin', 100)
        .id("kubejs:drilling_tin");


    // --- Tungsten ---
    event.recipes.createoreexcavation.vein('{"text": "Tungsten Vein"}', 'modern_industrialization:raw_tungsten')
        .placement(128, 16, 10000009)
        .id("kubejs:vein_tungsten");

    event.recipes.createoreexcavation.drilling('modern_industrialization:raw_tungsten', 'kubejs:vein_tungsten', 100)
        .id("kubejs:drilling_tungsten")
        .drill('modern_industrialization:stainless_steel_drill')
        .fluid('10x modern_industrialization:lubricant');


    // --- Uranium ---
    event.recipes.createoreexcavation.vein('{"text": "Uranium Vein"}', 'modern_industrialization:raw_uranium')
        .placement(128, 16, 10000010)
        .id("kubejs:vein_uranium");

    event.recipes.createoreexcavation.drilling('modern_industrialization:raw_uranium', 'kubejs:vein_uranium', 100)
        .id("kubejs:drilling_uranium")
        .drill('#create_ore_excavation_plus:powerfull_drills')
        .fluid('10x modern_industrialization:lubricant');

    // --- Iridium ---
    event.recipes.createoreexcavation.vein('{"text": "Iridium Vein"}', 'modern_industrialization:raw_iridium')
        .placement(128, 16, 10000011)
        .id("kubejs:vein_iridium");

    event.recipes.createoreexcavation.drilling('modern_industrialization:raw_iridium', 'kubejs:vein_iridium', 100)
        .id("kubejs:drilling_iridium")
        .drill('modern_industrialization:titanium_drill')
        .fluid('10x modern_industrialization:lubricant');

    // --- Titanium ---
    event.recipes.createoreexcavation.vein('{"text": "Titanium Vein"}', 'modern_industrialization:raw_titanium')
        .placement(128, 16, 10000012)
        .id("kubejs:vein_titanium");

    event.recipes.createoreexcavation.drilling('modern_industrialization:raw_titanium', 'kubejs:vein_titanium', 100)
        .id("kubejs:drilling_titanium")
        .drill('modern_industrialization:stainless_steel_drill')
        .fluid('10x modern_industrialization:lubricant');


    // --- Platinum ---
    event.recipes.createoreexcavation.vein('{"text": "Platinum Vein"}', 'modern_industrialization:raw_platinum')
        .placement(128, 16, 10000013)
        .id("kubejs:vein_platinum");

    event.recipes.createoreexcavation.drilling('modern_industrialization:raw_platinum', 'kubejs:vein_platinum', 100)
        .id("kubejs:drilling_platinum")
        .drill('modern_industrialization:stainless_steel_drill')
        .fluid('10x modern_industrialization:lubricant');

    // --- Oil ---
    event.recipes.createoreexcavation.vein('{"text": "Oil Vein"}', 'modern_industrialization:crude_oil_bucket')
        .placement(128, 16, 10000014)
        .id("kubejs:vein_oil");

    event.recipes.createoreexcavation.extracting('1bx modern_industrialization:crude_oil', 'kubejs:vein_oil', 100)
        .id("kubejs:drilling_oil")
        .drill('modern_industrialization:aluminum_drill')
        .fluid('10x modern_industrialization:lubricant');

    // --- Shale Oil ---
    event.recipes.createoreexcavation.vein('{"text": "Shale Oil Vein"}', 'modern_industrialization:shale_oil_bucket')
        .placement(128, 16, 10000015)
        .id("kubejs:vein_shale_oil");

    event.recipes.createoreexcavation.extracting('1bx modern_industrialization:shale_oil', 'kubejs:vein_shale_oil', 100)
        .id("kubejs:drilling_shale_oil")
        .drill('modern_industrialization:stainless_steel_drill')
        .fluid('10x modern_industrialization:lubricant');
        
});

ServerEvents.tags('item', event => {
    event.add('createoreexcavation:drills', [
        'modern_industrialization:titanium_drill',
        'modern_industrialization:stainless_steel_drill',
        'modern_industrialization:aluminum_drill'
    ]);

});

function rmItem(item) {
    RecipeViewerEvents.removeEntries('item', event => {
        event.remove(item)
    })
    ServerEvents.recipes(event => {
        event.remove({input: item})
    })
    ServerEvents.tags('item', event => {
        event.removeAllTagsFrom(item)
    })
}

const targetOres = [
    'modern_industrialization:antimony_ore', 'modern_industrialization:deepslate_antimony_ore',
    'modern_industrialization:bauxite_ore', 'modern_industrialization:deepslate_bauxite_ore',
    'modern_industrialization:lead_ore', 'modern_industrialization:deepslate_lead_ore',
    'modern_industrialization:lignite_coal_ore', 'modern_industrialization:deepslate_lignite_coal_ore',
    'modern_industrialization:monazite_ore', 'modern_industrialization:deepslate_monazite_ore',
    'modern_industrialization:nickel_ore', 'modern_industrialization:deepslate_nickel_ore',
    'modern_industrialization:salt_ore', 'modern_industrialization:deepslate_salt_ore',
    'modern_industrialization:tin_ore', 'modern_industrialization:deepslate_tin_ore',
    'modern_industrialization:tungsten_ore', 'modern_industrialization:deepslate_tungsten_ore',
    'modern_industrialization:uranium_ore', 'modern_industrialization:deepslate_uranium_ore',
    'modern_industrialization:iridium_ore', 'modern_industrialization:titanium_ore', 'modern_industrialization:platinum_ore'
];

targetOres.forEach(ore => rmItem(ore));

