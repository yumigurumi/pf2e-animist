const moduleName = "pf2e-animist";

function isActiveGM() {
    return game.user === game.users.activeGM
}

const APPARITIONS = {
    'custodian-of-groves-and-gardens': ["Farming", "Herbalism"],
    'imposter-in-hidden-places': ["Fortune-Telling", "Underworld"],
    'reveler-in-lost-glee': ["Circus", "Fortune-Telling"],
    'stalker-in-darkened-boughs': ["Forest", "Herbalism"],
    'steward-of-stone-and-fire': ["Mountain", "Volcano"],
    'vanguard-of-roaring-waters': ["Mountain", "River"],
    'witness-to-ancient-battles': ["Battlegrounds", "Heraldry"],
}

const LORE_SKILL = {
    "_id": "",
    img: "systems/pf2e/icons/default-icons/lore.svg",
    "name": "",
    "flags": {},
    "system": {
        "proficient": {"value": 1}
    },
    "type": "lore"
}

const APPARITION_OPTIONS = ['primary-apparition:', 'secondary-apparition:', 'third-apparition:', 'fourth-apparition:']

Hooks.on("updateItem", async (item, data, options, userId) => {
    if (!item.actor) {
        return
    }
    if (item.name !== "Apparition Attunement") {
        return
    }
    if (!data?.system?.rules) {
        return
    }

    let ids = item.actor.itemTypes.lore
        .filter(l => l?.flags?.[moduleName]?.generated)
        .map(i => i.id);

    await item.actor.deleteEmbeddedDocuments("Item", ids);

    setTimeout(async function () {
        await createLores(item)
    }, 150)
});

async function createLores(item) {
    let lores = item.actor.getRollOptions()
        .filter(o => APPARITION_OPTIONS.some(a => o.startsWith(a)))
        .map(s => s.replace(new RegExp(`${APPARITION_OPTIONS.join('|')}`, 'i'), ''))
        .map(r => APPARITIONS[r] || [])
        .flat()

    let items = lores.map(lore => {
        let newEffect = foundry.utils.deepClone(LORE_SKILL);
        newEffect._id = foundry.utils.randomID()
        newEffect.name = `${lore} Lore`
        newEffect.flags[moduleName] = {
            generated: true
        }

        return newEffect
    })

    await item.actor.createEmbeddedDocuments("Item", items);
}