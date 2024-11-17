<img width="448" alt="image" src="https://github.com/user-attachments/assets/e0c23c9f-9a1e-4bc9-a234-661eac652164">

After adding RE you could change apparitions and click ghost btn to apply new spells/lores

<img width="106" alt="image1111" src="https://github.com/user-attachments/assets/c3aafc34-0b0b-4724-8162-f16c5c62b694">

Add RE to Apparition Attunement feat

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

Add RE to Third Apparition

```json
{
  "key": "RollOption",
  "option": "third-apparition",
  "suboptions": [
    {
      "label": "Crafter in the Vault",
      "value": "crafter-in-the-vault",
      "predicate": [
        {
          "nor": [
            "primary-apparition:crafter-in-the-vault",
            "secondary-apparition:crafter-in-the-vault"
          ]
        }
      ]
    },
    {
      "label": "Custodian of Groves and Gardens",
      "value": "custodian-of-groves-and-gardens",
      "predicate": [
        {
          "nor": [
            "primary-apparition:custodian-of-groves-and-gardens",
            "secondary-apparition:custodian-of-groves-and-gardens"
          ]
        }
      ]
    },
    {
      "label": "Echo of Lost Moments",
      "value": "echo-of-lost-moments",
      "predicate": [
        {
          "nor": [
            "primary-apparition:apparition:echo-of-lost-moments",
            "secondary-apparition:apparition:echo-of-lost-moments"
          ]
        }
      ]
    },
    {
      "label": "Impostor in Hidden Places",
      "value": "impostor-in-hidden-places",
      "predicate": [
        {
          "nor": [
            "primary-apparition:impostor-in-hidden-places",
            "secondary-apparition:impostor-in-hidden-places"
          ]
        }
      ]
    },
    {
      "label": "Lurker in Devouring Dark",
      "value": "lurker-in-devouring-dark",
      "predicate": [
        {
          "nor": [
            "primary-apparition:lurker-in-devouring-dark",
            "secondary-apparition:lurker-in-devouring-dark"
          ]
        }
      ]
    },
    {
      "label": "Monarch of the Fey Courts",
      "value": "monarch-of-the-fey-courts",
      "predicate": [
        {
          "nor": [
            "primary-apparition:monarch-of-the-fey-courts",
            "secondary-apparition:monarch-of-the-fey-courts"
          ]
        }
      ]
    },
    {
      "label": "Reveler in Lost Glee",
      "value": "reveler-in-lost-glee",
      "predicate": [
        {
          "nor": [
            "primary-apparition:reveler-in-lost-glee",
            "secondary-apparition:reveler-in-lost-glee"
          ]
        }
      ]
    },
    {
      "label": "Stalker in Darkened Boughs",
      "value": "stalker-in-darkened-boughs",
      "predicate": [
        {
          "nor": [
            "primary-apparition:stalker-in-darkened-boughs",
            "secondary-apparition:stalker-in-darkened-boughs"
          ]
        }
      ]
    },
    {
      "label": "Steward of Stone and Fire",
      "value": "steward-of-stone-and-fire",
      "predicate": [
        {
          "nor": [
            "primary-apparition:steward-of-stone-and-fire",
            "secondary-apparition:steward-of-stone-and-fire"
          ]
        }
      ]
    },
    {
      "label": "Vanguard of Roaring Waters",
      "value": "vanguard-of-roaring-waters",
      "predicate": [
        {
          "nor": [
            "primary-apparition:vanguard-of-roaring-waters",
            "secondary-apparition:vanguard-of-roaring-waters"
          ]
        }
      ]
    },
    {
      "label": "Witness to Ancient Battles",
      "value": "witness-to-ancient-battles",
      "predicate": [
        {
          "nor": [
            "primary-apparition:witness-to-ancient-battles",
            "secondary-apparition:witness-to-ancient-battles"
          ]
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
  "label": "Third Apparition",
  "value": true,
  "selection": "dispersed"
}
```

Add RE to Fourth Apparition

```json
{
  "key": "RollOption",
  "option": "fourth-apparition",
  "suboptions": [
    {
      "label": "Crafter in the Vault",
      "value": "crafter-in-the-vault",
      "predicate": [
        {
          "nor": [
            "primary-apparition:crafter-in-the-vault",
            "secondary-apparition:crafter-in-the-vault",
            "third-apparition:crafter-in-the-vault"
          ]
        }
      ]
    },
    {
      "label": "Custodian of Groves and Gardens",
      "value": "custodian-of-groves-and-gardens",
      "predicate": [
        {
          "nor": [
            "primary-apparition:custodian-of-groves-and-gardens",
            "secondary-apparition:custodian-of-groves-and-gardens",
            "third-apparition:custodian-of-groves-and-gardens"
          ]
        }
      ]
    },
    {
      "label": "Echo of Lost Moments",
      "value": "echo-of-lost-moments",
      "predicate": [
        {
          "nor": [
            "primary-apparition:apparition:echo-of-lost-moments",
            "secondary-apparition:apparition:echo-of-lost-moments",
            "third-apparition:apparition:echo-of-lost-moments"
          ]
        }
      ]
    },
    {
      "label": "Impostor in Hidden Places",
      "value": "impostor-in-hidden-places",
      "predicate": [
        {
          "nor": [
            "primary-apparition:impostor-in-hidden-places",
            "secondary-apparition:impostor-in-hidden-places",
            "third-apparition:impostor-in-hidden-places"
          ]
        }
      ]
    },
    {
      "label": "Lurker in Devouring Dark",
      "value": "lurker-in-devouring-dark",
      "predicate": [
        {
          "nor": [
            "primary-apparition:lurker-in-devouring-dark",
            "secondary-apparition:lurker-in-devouring-dark",
            "third-apparition:lurker-in-devouring-dark"
          ]
        }
      ]
    },
    {
      "label": "Monarch of the Fey Courts",
      "value": "monarch-of-the-fey-courts",
      "predicate": [
        {
          "nor": [
            "primary-apparition:monarch-of-the-fey-courts",
            "secondary-apparition:monarch-of-the-fey-courts",
            "third-apparition:monarch-of-the-fey-courts"
          ]
        }
      ]
    },
    {
      "label": "Reveler in Lost Glee",
      "value": "reveler-in-lost-glee",
      "predicate": [
        {
          "nor": [
            "primary-apparition:reveler-in-lost-glee",
            "secondary-apparition:reveler-in-lost-glee",
            "third-apparition:reveler-in-lost-glee"
          ]
        }
      ]
    },
    {
      "label": "Stalker in Darkened Boughs",
      "value": "stalker-in-darkened-boughs",
      "predicate": [
        {
          "nor": [
            "primary-apparition:stalker-in-darkened-boughs",
            "secondary-apparition:stalker-in-darkened-boughs",
            "third-apparition:stalker-in-darkened-boughs"
          ]
        }
      ]
    },
    {
      "label": "Steward of Stone and Fire",
      "value": "steward-of-stone-and-fire",
      "predicate": [
        {
          "nor": [
            "primary-apparition:steward-of-stone-and-fire",
            "secondary-apparition:steward-of-stone-and-fire",
            "third-apparition:steward-of-stone-and-fire"
          ]
        }
      ]
    },
    {
      "label": "Vanguard of Roaring Waters",
      "value": "vanguard-of-roaring-waters",
      "predicate": [
        {
          "nor": [
            "primary-apparition:vanguard-of-roaring-waters",
            "secondary-apparition:vanguard-of-roaring-waters",
            "third-apparition:vanguard-of-roaring-waters"
          ]
        }
      ]
    },
    {
      "label": "Witness to Ancient Battles",
      "value": "witness-to-ancient-battles",
      "predicate": [
        {
          "nor": [
            "primary-apparition:witness-to-ancient-battles",
            "secondary-apparition:witness-to-ancient-battles",
            "third-apparition:witness-to-ancient-battles"
          ]
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
  "label": "Fourth Apparition",
  "value": true,
  "selection": "dispersed"
}
```
