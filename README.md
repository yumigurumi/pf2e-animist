[Wiki](https://github.com/reyzor1991/pf2e-wiki/wiki/PF2e Animist)

Add rules to Apparition Attunement

```json
{
  "key": "RollOption",
  "option": "primary-apparition",
  "suboptions": [
    {
      "label": "Crafter in the Vault",
      "value": "crafter-in-the-vault"
    },
    {
      "label": "Custodian of Groves and Gardens",
      "value": "custodian-of-groves-and-gardens"
    },
    {
      "label": "Echo of Lost Moments",
      "value": "echo-of-lost-moments"
    },
    {
      "label": "Impostor in Hidden Places",
      "value": "impostor-in-hidden-places"
    },
    {
      "label": "Lurker in Devouring Dark",
      "value": "lurker-in-devouring-dark"
    },
    {
      "label": "Monarch of the Fey Courts",
      "value": "monarch-of-the-fey-courts"
    },
    {
      "label": "Reveler in Lost Glee",
      "value": "reveler-in-lost-glee"
    },
    {
      "label": "Stalker in Darkened Boughs",
      "value": "stalker-in-darkened-boughs"
    },
    {
      "label": "Steward of Stone and Fire",
      "value": "steward-of-stone-and-fire"
    },
    {
      "label": "Vanguard of Roaring Waters",
      "value": "vanguard-of-roaring-waters"
    },
    {
      "label": "Witness to Ancient Battles",
      "value": "witness-to-ancient-battles"
    },
    {
      "label": "Dispersed",
      "value": "dispersed"
    }
  ],
  "toggleable": true,
  "alwaysActive": true,
  "label": "Primary Apparition",
  "value": true,
  "selection": "dispersed"
}
```


```json
{
  "key": "RollOption",
  "option": "secondary-apparition",
  "suboptions": [
    {
      "label": "Crafter in the Vault",
      "value": "crafter-in-the-vault",
      "predicate": [
        {
          "not": "primary-apparition:crafter-in-the-vault"
        }
      ]
    },
    {
      "label": "Custodian of Groves and Gardens",
      "value": "custodian-of-groves-and-gardens",
      "predicate": [
        {
          "not": "primary-apparition:custodian-of-groves-and-gardens"
        }
      ]
    },
    {
      "label": "Echo of Lost Moments",
      "value": "echo-of-lost-moments",
      "predicate": [
        {
          "not": "primary-apparition:echo-of-lost-moments"
        }
      ]
    },
    {
      "label": "Impostor in Hidden Places",
      "value": "impostor-in-hidden-places",
      "predicate": [
        {
          "not": "primary-apparition:impostor-in-hidden-places"
        }
      ]
    },
    {
      "label": "Lurker in Devouring Dark",
      "value": "lurker-in-devouring-dark",
      "predicate": [
        {
          "not": "primary-apparition:lurker-in-devouring-dark"
        }
      ]
    },
    {
      "label": "Monarch of the Fey Courts",
      "value": "monarch-of-the-fey-courts",
      "predicate": [
        {
          "not": "primary-apparition:monarch-of-the-fey-courts"
        }
      ]
    },
    {
      "label": "Reveler in Lost Glee",
      "value": "reveler-in-lost-glee",
      "predicate": [
        {
          "not": "primary-apparition:reveler-in-lost-glee"
        }
      ]
    },
    {
      "label": "Stalker in Darkened Boughs",
      "value": "stalker-in-darkened-boughs",
      "predicate": [
        {
          "not": "primary-apparition:stalker-in-darkened-boughs"
        }
      ]
    },
    {
      "label": "Steward of Stone and Fire",
      "value": "steward-of-stone-and-fire",
      "predicate": [
        {
          "not": "primary-apparition:steward-of-stone-and-fire"
        }
      ]
    },
    {
      "label": "Vanguard of Roaring Waters",
      "value": "vanguard-of-roaring-waters",
      "predicate": [
        {
          "not": "primary-apparition:vanguard-of-roaring-waters"
        }
      ]
    },
    {
      "label": "Witness to Ancient Battles",
      "value": "witness-to-ancient-battles",
      "predicate": [
        {
          "not": "primary-apparition:witness-to-ancient-battles"
        }
      ]
    },
    {
      "label": "Dispersed",
      "value": "dispersed"
    }
  ],
  "toggleable": true,
  "alwaysActive": true,
  "label": "Secondary Apparition",
  "value": true,
  "selection": "dispersed"
}
```


