var config = {
  "default_update_time": "1s", 
  "default_break_grace_period": "1000d", 
  "default_return_rate": 0.5, 
  "disable_nether": false, 
  "log_inventories": true, 
  "recipes": {
    "make_mushroom_brown": {
      "production_time": "10s", 
      "input": {
        "brown_mushroom": {
          "amount": 64, 
          "material": "BROWN_MUSHROOM"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Brown Mushroom Blocks", 
      "output": {
        "brown_mushroom_block": {
          "amount": 16, 
          "material": "HUGE_MUSHROOM_1", 
          "durability": 14
        }
      }
    }, 
    "repair_diamond_shovel_factory": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 5, 
          "material": "DIAMOND"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_shears": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 16, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Shears", 
      "output": {
        "shears": {
          "amount": 16, 
          "material": "SHEARS"
        }
      }
    }, 
    "make_red_sand": {
      "production_time": "10s", 
      "input": {
        "sand": {
          "amount": 64, 
          "material": "SAND"
        }, 
        "flesh": {
          "amount": 8, 
          "material": "ROTTEN_FLESH"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Red SAND", 
      "output": {
        "red_sand": {
          "amount": 64, 
          "material": "SAND", 
          "durability": 1
        }
      }
    }, 
    "repair_aesthetics": {
      "production_time": "10s", 
      "input": {
        "stone": {
          "amount": 16, 
          "material": "STONE"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_diamond_shovel": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 5, 
          "material": "DIAMOND"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Diamond Shovel", 
      "output": {
        "diamond_shovel": {
          "amount": 15, 
          "material": "DIAMOND_SPADE"
        }
      }
    }, 
    "dye_glass_lime": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "lime_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 10
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Lime", 
      "output": {
        "lime_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 5
        }
      }
    }, 
    "dye_wool_black": {
      "production_time": "5s", 
      "input": {
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }, 
        "black_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 0
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Black", 
      "output": {
        "black_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 15
        }
      }
    }, 
    "repair_diamond_axe_factory": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 6, 
          "material": "DIAMOND"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "dye_clay_white": {
      "production_time": "5s", 
      "input": {
        "white_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 15
        }, 
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay White", 
      "output": {
        "white_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 0
        }
      }
    }, 
    "make_iron_shovel": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 5, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Shovel", 
      "output": {
        "iron_shovel": {
          "amount": 15, 
          "material": "IRON_SPADE"
        }
      }
    }, 
    "sapling_to_dark_oak": {
      "production_time": "10s", 
      "input": {
        "sapling": {
          "amount": 32, 
          "material": "SAPLING", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Convert Sapling to Dark Oak", 
      "output": {
        "dark_oak_sapling": {
          "amount": 32, 
          "material": "SAPLING", 
          "durability": 5
        }
      }
    }, 
    "adv_xp_4": {
      "production_time": "10s", 
      "input": {
        "spider_eye": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 32, 
          "material": "SPIDER_EYE"
        }, 
        "sugar_cane": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "SUGAR_CANE"
        }, 
        "pumpkin": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "PUMPKIN"
        }, 
        "nether_wart": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 64, 
          "material": "NETHER_WART_BLOCK"
        }, 
        "yellow_flower": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 16, 
          "material": "YELLOW_FLOWER"
        }, 
        "steak": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 32, 
          "material": "COOKED_BEEF"
        }, 
        "cookie": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 256, 
          "material": "COOKIE"
        }, 
        "glass_bottle": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "GLASS_BOTTLE"
        }, 
        "grass": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 64, 
          "material": "LONG_GRASS", 
          "durability": 1
        }, 
        "brown_mushroom": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 64, 
          "material": "BROWN_MUSHROOM"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 4", 
      "output": {
        "exp": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 2, 
          "material": "EMERALD_BLOCK"
        }
      }
    }, 
    "make_diamond_chest": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 40, 
          "material": "DIAMOND"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Diamond Chestplates", 
      "output": {
        "diamond_chest": {
          "amount": 15, 
          "material": "DIAMOND_CHESTPLATE"
        }
      }
    }, 
    "compact": {
      "production_time": "5s", 
      "compact_lore": "Compacted Item", 
      "name": "Compact", 
      "excluded_materials": [
        "BOOK"
      ], 
      "input": {
        "crate": {
          "lore": [
            "Crate"
          ], 
          "material": "CHEST"
        }
      }, 
      "type": "COMPACT"
    }, 
    "upgrade_to_wool_dye": {
      "production_time": "10s", 
      "input": {
        "wool": {
          "amount": 32, 
          "material": "WOOL", 
          "durability": -1
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Wool Dying Factory", 
      "factory": "Wool Dying Factory"
    }, 
    "bake_potatoes": {
      "production_time": "10s", 
      "input": {
        "potato": {
          "amount": 32, 
          "material": "POTATO_ITEM"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Bake Potatoes", 
      "output": {
        "baked_potato": {
          "amount": 48, 
          "material": "BAKED_POTATO"
        }
      }
    }, 
    "make_iron_helm": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 25, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Helmets", 
      "output": {
        "iron_helm": {
          "amount": 15, 
          "material": "IRON_HELMET"
        }
      }
    }, 
    "repair_diamond_pick_factory": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 9, 
          "material": "DIAMOND"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "dye_wool_gray": {
      "production_time": "5s", 
      "input": {
        "gray_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 8
        }, 
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Gray", 
      "output": {
        "gray_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 7
        }
      }
    }, 
    "make_tripwire": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 16, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Tripwire Hooks", 
      "output": {
        "tripwire_hook": {
          "amount": 64, 
          "material": "TRIPWIRE_HOOK"
        }
      }
    }, 
    "repair_diamond_sword_factory": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 8, 
          "material": "DIAMOND"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "smelt_iron_ore": {
      "production_time": "10s", 
      "input": {
        "iron_ore": {
          "amount": 64, 
          "material": "IRON_ORE"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Smelt Iron Ore", 
      "output": {
        "iron": {
          "amount": 96, 
          "material": "IRON_INGOT"
        }
      }
    }, 
    "upgrade_to_iron_tool_smith": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 64, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Iron Tool Smith", 
      "factory": "Iron Tool Smith"
    }, 
    "make_diamond_sword": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 10, 
          "material": "DIAMOND"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Diamond Sword", 
      "output": {
        "diamond_sword": {
          "amount": 15, 
          "material": "DIAMOND_SWORD"
        }
      }
    }, 
    "make_purpur": {
      "production_time": "10s", 
      "input": {
        "dye": {
          "amount": 8, 
          "material": "INK_SACK", 
          "durability": 5
        }, 
        "stone": {
          "amount": 64, 
          "material": "STONE", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Purpur", 
      "output": {
        "purpur": {
          "amount": 64, 
          "material": "PURPUR_BLOCK"
        }
      }
    }, 
    "upgrade_to_grill": {
      "production_time": "10s", 
      "input": {
        "stone": {
          "amount": 128, 
          "material": "STONE"
        }, 
        "iron": {
          "amount": 16, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Grill", 
      "factory": "Grill"
    }, 
    "make_iron_chest": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 40, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Chestplates", 
      "output": {
        "iron_chest": {
          "amount": 15, 
          "material": "IRON_CHESTPLATE"
        }
      }
    }, 
    "dye_clay_cyan": {
      "production_time": "5s", 
      "input": {
        "cyan_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 6
        }, 
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Cyan", 
      "output": {
        "cyan_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 9
        }
      }
    }, 
    "dye_clay_brown": {
      "production_time": "5s", 
      "input": {
        "brown_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 3
        }, 
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Brown", 
      "output": {
        "brown_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 12
        }
      }
    }, 
    "dye_wool_cyan": {
      "production_time": "5s", 
      "input": {
        "cyan_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 6
        }, 
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Cyan", 
      "output": {
        "cyan_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 9
        }
      }
    }, 
    "repair_dirt_factory": {
      "production_time": "10s", 
      "input": {
        "Dirt!": {
          "amount": 1, 
          "material": "DIRT", 
          "name": "Dirt!"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "dye_wool_light_gray": {
      "production_time": "5s", 
      "input": {
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }, 
        "light_gray_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 7
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Light Gray", 
      "output": {
        "light_gray_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 8
        }
      }
    }, 
    "repair_carpentry": {
      "production_time": "10s", 
      "input": {
        "chest": {
          "amount": 2, 
          "material": "CHEST"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "upgrade_to_diamond_boots": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 160, 
          "material": "DIAMOND"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Diamond Boots Smith", 
      "factory": "Diamond Boots Smith"
    }, 
    "repair_bastion": {
      "production_time": "10s", 
      "input": {
        "radar": {
          "lore": [
            "Radar for detecting pearls"
          ], 
          "amount": 3, 
          "material": "COMPASS"
        }, 
        "casing": {
          "lore": [
            "Casing for a bastion"
          ], 
          "amount": 4, 
          "material": "ENDER_CHEST"
        }, 
        "energizer": {
          "lore": [
            "Power source for bastion"
          ], 
          "amount": 3, 
          "material": "EMERALD"
        }, 
        "gearbox": {
          "lore": [
            "Gear mechanism for a bastion"
          ], 
          "amount": 4, 
          "material": "WATCH"
        }, 
        "bio_component": {
          "lore": [
            "Bio-Component for bastion"
          ], 
          "amount": 1, 
          "material": "MAGMA_CREAM"
        }, 
        "refractor": {
          "lore": [
            "Refractor for bastion"
          ], 
          "amount": 3, 
          "material": "DIAMOND"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "cook_pork": {
      "production_time": "10s", 
      "input": {
        "raw_pork": {
          "amount": 32, 
          "material": "PORK"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Cook Pork", 
      "output": {
        "cooked_pork": {
          "amount": 48, 
          "material": "GRILLED_PORK"
        }
      }
    }, 
    "make_comparator": {
      "production_time": "10s", 
      "input": {
        "stone": {
          "amount": 128, 
          "material": "STONE"
        }, 
        "quartz": {
          "material": "QUARTZ"
        }, 
        "redstone": {
          "amount": 32, 
          "material": "REDSTONE"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Comparators", 
      "output": {
        "comparator": {
          "amount": 32, 
          "material": "REDSTONE_COMPARATOR"
        }
      }
    }, 
    "repair_diamond_chest_factory": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 32, 
          "material": "DIAMOND"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_iron_boots": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 20, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Boots", 
      "output": {
        "iron_boots": {
          "amount": 15, 
          "material": "IRON_BOOTS"
        }
      }
    }, 
    "sapling_to_birch": {
      "production_time": "10s", 
      "input": {
        "sapling": {
          "amount": 32, 
          "material": "SAPLING", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Convert Sapling to Birch", 
      "output": {
        "birch_sapling": {
          "amount": 32, 
          "material": "SAPLING", 
          "durability": 2
        }
      }
    }, 
    "make_wood_doors": {
      "production_time": "10s", 
      "input": {
        "chest": {
          "amount": 16, 
          "material": "CHEST"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Wood Doors", 
      "output": {
        "door": {
          "amount": 32, 
          "material": "WOOD_DOOR"
        }
      }
    }, 
    "dye_clay_light_blue": {
      "production_time": "5s", 
      "input": {
        "light_blue_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 12
        }, 
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Light Blue", 
      "output": {
        "light_blue_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 3
        }
      }
    }, 
    "repair_diamond_boots_factory": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 16, 
          "material": "DIAMOND"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_minecart": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 64, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Minecarts", 
      "output": {
        "minecart": {
          "amount": 27, 
          "material": "MINECART"
        }
      }
    }, 
    "dye_glass_yellow": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "yellow_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 11
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Yellow", 
      "output": {
        "yellow_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 4
        }
      }
    }, 
    "make_saddle": {
      "production_time": "10s", 
      "input": {
        "leather": {
          "amount": 32, 
          "material": "LEATHER"
        }, 
        "wool": {
          "amount": 16, 
          "material": "WOOL", 
          "durability": -1
        }, 
        "iron": {
          "amount": 16, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Saddles", 
      "output": {
        "saddle": {
          "amount": 8, 
          "material": "SADDLE"
        }
      }
    }, 
    "dye_glass_green": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "green_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 2
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Green", 
      "output": {
        "green_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 13
        }
      }
    }, 
    "make_mushroom_stem": {
      "production_time": "10s", 
      "input": {
        "brown_mushroom": {
          "amount": 64, 
          "material": "BROWN_MUSHROOM"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Stem Mushroom Blocks", 
      "output": {
        "stem_mushroom_block": {
          "amount": 16, 
          "material": "HUGE_MUSHROOM_1", 
          "durability": 10
        }
      }
    }, 
    "dye_clay_orange": {
      "production_time": "5s", 
      "input": {
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }, 
        "orange_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 14
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Orange", 
      "output": {
        "orange_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 1
        }
      }
    }, 
    "smelt_hard_clay": {
      "production_time": "10s", 
      "input": {
        "clay_block": {
          "amount": 128, 
          "material": "CLAY"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Hard Clay", 
      "output": {
        "hard_clay": {
          "amount": 256, 
          "material": "HARD_CLAY"
        }
      }
    }, 
    "make_bastion": {
      "production_time": "10s", 
      "input": {
        "radar": {
          "lore": [
            "Radar for detecting pearls"
          ], 
          "amount": 16, 
          "material": "COMPASS"
        }, 
        "bio_compoent": {
          "lore": [
            "Bio-Component for bastion"
          ], 
          "amount": 16, 
          "material": "MAGMA_CREAM", 
          "name": "Bio-Component"
        }, 
        "casing": {
          "lore": [
            "Casing for a bastion"
          ], 
          "amount": 16, 
          "material": "ENDER_CHEST", 
          "name": "Casing"
        }, 
        "energizer": {
          "lore": [
            "Power source for bastion"
          ], 
          "amount": 16, 
          "material": "EMERALD", 
          "name": "Energizer"
        }, 
        "gearbox": {
          "lore": [
            "Gear mechanism for a bastion"
          ], 
          "amount": 16, 
          "material": "WATCH", 
          "name": "Gearbox"
        }, 
        "refractor": {
          "lore": [
            "Refractor for bastion"
          ], 
          "amount": 16, 
          "material": "DIAMOND", 
          "name": "Refractor"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Bastion", 
      "output": {
        "bastion": {
          "lore": [
            "This bastion will protect you from grief", 
            "It will also block pearls when they land", 
            "As well as stop elytra"
          ], 
          "amount": 16, 
          "material": "SPONGE", 
          "name": "Bastion"
        }
      }
    }, 
    "smelt_diamond_ore": {
      "production_time": "10s", 
      "input": {
        "diamond_ore": {
          "amount": 16, 
          "material": "DIAMOND_ORE"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Smelt Diamond Ore", 
      "output": {
        "diamond": {
          "amount": 48, 
          "material": "DIAMOND"
        }
      }
    }, 
    "make_diamond_hoe": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 10, 
          "material": "DIAMOND"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Diamond Hoe", 
      "output": {
        "diamond_hoe": {
          "amount": 30, 
          "material": "DIAMOND_HOE"
        }
      }
    }, 
    "make_bookshelves": {
      "production_time": "10s", 
      "input": {
        "chest": {
          "amount": 8, 
          "material": "CHEST"
        }, 
        "paper": {
          "amount": 64, 
          "material": "PAPER"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Bookshelves", 
      "output": {
        "bookshelves": {
          "amount": 64, 
          "material": "BOOKSHELF"
        }
      }
    }, 
    "cook_mutton": {
      "production_time": "10s", 
      "input": {
        "raw_mutton": {
          "amount": 32, 
          "material": "MUTTON"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Cook Mutton", 
      "output": {
        "cooked_mutton": {
          "amount": 48, 
          "material": "COOKED_MUTTON"
        }
      }
    }, 
    "upgrade_to_diamond_hoe": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 32, 
          "material": "DIAMOND"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Diamond Hoe Smith", 
      "factory": "Diamond Hoe Smith"
    }, 
    "sapling_to_oak": {
      "production_time": "10s", 
      "input": {
        "sapling": {
          "amount": 32, 
          "material": "SAPLING", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Convert Sapling to Oak", 
      "output": {
        "oak_sapling": {
          "amount": 32, 
          "material": "SAPLING"
        }
      }
    }, 
    "int_xp_4": {
      "production_time": "10s", 
      "input": {
        "spider_eye": {
          "amount": 32, 
          "material": "SPIDER_EYE"
        }, 
        "sugar_cane": {
          "amount": 128, 
          "material": "SUGAR_CANE"
        }, 
        "pumpkin": {
          "amount": 128, 
          "material": "PUMPKIN"
        }, 
        "nether_wart": {
          "amount": 64, 
          "material": "NETHER_WART_BLOCK"
        }, 
        "yellow_flower": {
          "amount": 16, 
          "material": "YELLOW_FLOWER"
        }, 
        "steak": {
          "amount": 32, 
          "material": "COOKED_BEEF"
        }, 
        "cookie": {
          "amount": 256, 
          "material": "COOKIE"
        }, 
        "glass_bottle": {
          "amount": 128, 
          "material": "GLASS_BOTTLE"
        }, 
        "grass": {
          "amount": 64, 
          "material": "LONG_GRASS", 
          "durability": 1
        }, 
        "brown_mushroom": {
          "amount": 64, 
          "material": "BROWN_MUSHROOM"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 4", 
      "output": {
        "exp": {
          "amount": 128, 
          "material": "EXP_BOTTLE"
        }
      }
    }, 
    "cook_chicken": {
      "production_time": "10s", 
      "input": {
        "raw_chicken": {
          "amount": 32, 
          "material": "RAW_CHICKEN"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Cook Chicken", 
      "output": {
        "cooked_chicken": {
          "amount": 48, 
          "material": "COOKED_CHICKEN"
        }
      }
    }, 
    "int_xp_2": {
      "production_time": "10s", 
      "input": {
        "cooked_chicken": {
          "amount": 16, 
          "material": "COOKED_CHICKEN"
        }, 
        "rotten_flesh": {
          "amount": 128, 
          "material": "ROTTEN_FLESH"
        }, 
        "sugar_cane": {
          "amount": 128, 
          "material": "SUGAR_CANE"
        }, 
        "nether_wart": {
          "amount": 64, 
          "material": "NETHER_WART_BLOCK"
        }, 
        "vine": {
          "amount": 32, 
          "material": "VINE"
        }, 
        "yellow_flower": {
          "amount": 16, 
          "material": "YELLOW_FLOWER"
        }, 
        "baked_potato": {
          "amount": 256, 
          "material": "BAKED_POTATO"
        }, 
        "melon": {
          "amount": 32, 
          "material": "MELON_BLOCK"
        }, 
        "glass_bottle": {
          "amount": 128, 
          "material": "GLASS_BOTTLE"
        }, 
        "brown_mushroom": {
          "amount": 64, 
          "material": "BROWN_MUSHROOM"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 2", 
      "output": {
        "exp": {
          "amount": 128, 
          "material": "EXP_BOTTLE"
        }
      }
    }, 
    "int_xp_1": {
      "production_time": "10s", 
      "input": {
        "glass_bottle": {
          "amount": 128, 
          "material": "GLASS_BOTTLE"
        }, 
        "rotten_flesh": {
          "amount": 128, 
          "material": "ROTTEN_FLESH"
        }, 
        "rose": {
          "amount": 8, 
          "material": "RED_ROSE"
        }, 
        "red_mushroom": {
          "amount": 32, 
          "material": "RED_MUSHROOM"
        }, 
        "vine": {
          "amount": 32, 
          "material": "VINE"
        }, 
        "melon": {
          "amount": 32, 
          "material": "MELON_BLOCK"
        }, 
        "carrot": {
          "amount": 96, 
          "material": "CARROT_ITEM"
        }, 
        "grilled_pork": {
          "amount": 32, 
          "material": "GRILLED_PORK"
        }, 
        "cactus": {
          "amount": 256, 
          "material": "CACTUS"
        }, 
        "bread": {
          "amount": 128, 
          "material": "BREAD"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 1", 
      "output": {
        "exp": {
          "amount": 128, 
          "material": "EXP_BOTTLE"
        }
      }
    }, 
    "dye_wool_lime": {
      "production_time": "5s", 
      "input": {
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }, 
        "lime_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 10
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Lime", 
      "output": {
        "lime_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 5
        }
      }
    }, 
    "make_quartz": {
      "production_time": "10s", 
      "input": {
        "dye": {
          "material": "INK_SACK", 
          "durability": 15
        }, 
        "stone": {
          "amount": 64, 
          "material": "STONE", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Quartz", 
      "output": {
        "quartz": {
          "amount": 64, 
          "material": "QUARTZ_BLOCK"
        }
      }
    }, 
    "dye_glass_orange": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "orange_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 14
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Orange", 
      "output": {
        "orange_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 1
        }
      }
    }, 
    "make_iron_trapdoor": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 48, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Trapdoors", 
      "output": {
        "iron_trapdoor": {
          "amount": 16, 
          "material": "IRON_TRAPDOOR"
        }
      }
    }, 
    "dye_clay_lime": {
      "production_time": "5s", 
      "input": {
        "lime_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 10
        }, 
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Lime", 
      "output": {
        "lime_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 5
        }
      }
    }, 
    "upgrade_to_clay_dye": {
      "production_time": "10s", 
      "input": {
        "clay": {
          "amount": 32, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Clay Dying Factory", 
      "factory": "Clay Dying Factory"
    }, 
    "dye_glass_light_gray": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "light_gray_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 7
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Light Gray", 
      "output": {
        "light_gray_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 8
        }
      }
    }, 
    "dye_clay_blue": {
      "production_time": "5s", 
      "input": {
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }, 
        "blue_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 4
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Blue", 
      "output": {
        "blue_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 11
        }
      }
    }, 
    "make_energizer": {
      "production_time": "10s", 
      "input": {
        "charcoal": {
          "amount": 64, 
          "material": "COAL", 
          "durability": 1
        }, 
        "gunpowder": {
          "amount": 8, 
          "material": "SULPHUR"
        }, 
        "emerald": {
          "amount": 32, 
          "material": "EMERALD"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Energizer", 
      "output": {
        "energizer": {
          "lore": [
            "Power source for bastion"
          ], 
          "amount": 1, 
          "material": "EMERALD", 
          "name": "Energizer"
        }
      }
    }, 
    "upgrade_to_stone_smelter": {
      "production_time": "10s", 
      "input": {
        "stone": {
          "amount": 512, 
          "material": "STONE"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Basic Smelter", 
      "factory": "Basic Smelter"
    }, 
    "dye_wool_pink": {
      "production_time": "5s", 
      "input": {
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }, 
        "pink_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 9
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Pink", 
      "output": {
        "pink_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 6
        }
      }
    }, 
    "cook_salmon": {
      "production_time": "10s", 
      "input": {
        "raw_salmon": {
          "amount": 32, 
          "material": "RAW_FISH", 
          "durability": 1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Cook Salmon", 
      "output": {
        "cooked_salmon": {
          "amount": 48, 
          "material": "COOKED_FISH", 
          "durability": 1
        }
      }
    }, 
    "dye_glass_white": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "white_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 15
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass White", 
      "output": {
        "white_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 0
        }
      }
    }, 
    "make_iron_axe": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 15, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Axe", 
      "output": {
        "iron_axe": {
          "amount": 30, 
          "material": "IRON_AXE"
        }
      }
    }, 
    "crack_fossil": {
      "production_time": "1s", 
      "name": "Crack Fossil", 
      "fuel_consumption_intervall": "1s", 
      "input": {
        "fossil": {
          "lore": [
            "Crack me in a factory for a prize!"
          ], 
          "amount": 1, 
          "material": "PRISMARINE_SHARD", 
          "name": "\u00a73Fossil"
        }
      }, 
      "outputs": {
        "ghast": {
          "chance": 3.7036999999999998e-05, 
          "ghast": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 56
          }
        }, 
        "skeleton": {
          "chance": 3.7036999999999998e-05, 
          "skeleton": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 51
          }
        }, 
        "minecart": {
          "chance": 0.00062352939000000001, 
          "minecart": {
            "amount": 1, 
            "material": "MINECART"
          }
        }, 
        "iron_horse_armor": {
          "iron_horse_armor": {
            "amount": 1, 
            "material": "IRON_BARDING"
          }, 
          "chance": 0.00029411763999999998
        }, 
        "cavespider": {
          "chance": 3.7036999999999998e-05, 
          "cavespider": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 59
          }
        }, 
        "record_ward": {
          "chance": 2.9411764e-05, 
          "record_ward": {
            "amount": 64, 
            "material": "RECORD_10"
          }
        }, 
        "slime": {
          "chance": 3.7036999999999998e-05, 
          "slime": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 55
          }
        }, 
        "ocelot": {
          "chance": 0.00029411763999999998, 
          "ocelot": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 98
          }
        }, 
        "diamond_boots": {
          "chance": 3.7036999999999998e-05, 
          "diamond_boots": {
            "amount": 1, 
            "material": "DIAMOND_BOOTS"
          }
        }, 
        "horse": {
          "chance": 0.00029411763999999998, 
          "horse": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 100
          }
        }, 
        "iron_ingots": {
          "chance": 3.7036999999999998e-05, 
          "iron_ingots": {
            "amount": 64, 
            "material": "IRON_INGOT"
          }
        }, 
        "bastion": {
          "chance": 3.7036999999999998e-05, 
          "bastion": {
            "lore": [
              "This bastion will protect you from grief", 
              "It will also block pearls when they land", 
              "As well as stop elytra"
            ], 
            "amount": 1, 
            "material": "SPONGE", 
            "name": "Bastion"
          }
        }, 
        "gezo": {
          "chance": 4.0909000000000001e-06, 
          "gezo": {
            "lore": [
              "Gezo was here !!!"
            ], 
            "amount": 1, 
            "material": "PAPER"
          }
        }, 
        "record_wait": {
          "chance": 2.9411764e-05, 
          "record_wait": {
            "amount": 1, 
            "material": "RECORD_12"
          }
        }, 
        "jukebox": {
          "chance": 0.00029411763999999998, 
          "jukebox": {
            "amount": 1, 
            "material": "JUKEBOX"
          }
        }, 
        "blaze": {
          "chance": 3.7036999999999998e-05, 
          "blaze": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 61
          }
        }, 
        "charcoal": {
          "charcoal": {
            "amount": 2048, 
            "material": "COAL", 
            "durability": 1
          }, 
          "chance": 3.7036999999999998e-05
        }, 
        "diamond": {
          "chance": 0.00029411763999999998, 
          "diamond": {
            "amount": 1, 
            "material": "DIAMOND"
          }
        }, 
        "villager": {
          "chance": 3.7036999999999998e-05, 
          "villager": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 120
          }
        }, 
        "power_5_book": {
          "chance": 1.20909e-05, 
          "power_5_book": {
            "amount": 1, 
            "material": "BOOK", 
            "stored_enchants": {
              "power5": {
                "enchant": "ARROW_DAMAGE", 
                "level": 5
              }
            }
          }
        }, 
        "spider": {
          "chance": 3.7036999999999998e-05, 
          "spider": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 52
          }
        }, 
        "record_far": {
          "chance": 2.9411764e-05, 
          "record_far": {
            "amount": 1, 
            "material": "RECORD_5"
          }
        }, 
        "record_blocks": {
          "chance": 2.9411764e-05, 
          "record_blocks": {
            "amount": 1, 
            "material": "RECORD_3"
          }
        }, 
        "rabbit": {
          "chance": 0.00029411763999999998, 
          "rabbit": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 101
          }
        }, 
        "emerald": {
          "chance": 0.00029411763999999998, 
          "emerald": {
            "amount": 1, 
            "material": "EMERALD"
          }
        }, 
        "dragon_egg": {
          "dragon_egg": {
            "lore": [
              "Egg of Creation"
            ], 
            "amount": 1, 
            "material": "DRAGON_EGG"
          }, 
          "chance": 1e-10
        }, 
        "record_mall": {
          "chance": 2.9411764e-05, 
          "record_mall": {
            "amount": 1, 
            "material": "RECORD_6"
          }
        }, 
        "silk_touch_book": {
          "chance": 1.1090900000000001e-05, 
          "silk_touch_book": {
            "amount": 1, 
            "material": "BOOK", 
            "stored_enchants": {
              "silktouch": {
                "enchant": "SILK_TOUCH", 
                "level": 1
              }
            }
          }
        }, 
        "record_11": {
          "chance": 2.9411764e-05, 
          "record_11": {
            "amount": 1, 
            "material": "RECORD_11"
          }
        }, 
        "diamond_leggings": {
          "chance": 3.7036999999999998e-05, 
          "diamond_leggings": {
            "amount": 1, 
            "material": "DIAMOND_LEGGINGS"
          }
        }, 
        "record_13": {
          "chance": 2.9411765999999999e-05, 
          "record_13": {
            "amount": 1, 
            "material": "GOLD_RECORD"
          }
        }, 
        "bucket": {
          "chance": 0.00029411763999999998, 
          "bucket": {
            "amount": 1, 
            "material": "BUCKET"
          }
        }, 
        "iron_axe": {
          "chance": 0.00029411763999999998, 
          "iron_axe": {
            "amount": 1, 
            "material": "IRON_AXE"
          }
        }, 
        "prismarine_crystals": {
          "prismarine_crystals": {
            "amount": 3, 
            "material": "PRISMARINE_CRYSTALS"
          }, 
          "chance": 0.00029411788
        }, 
        "record_chirp": {
          "chance": 2.9411764e-05, 
          "record_chirp": {
            "amount": 1, 
            "material": "RECORD_4"
          }
        }, 
        "diamond_pickaxe": {
          "chance": 3.7036999999999998e-05, 
          "diamond_pickaxe": {
            "amount": 1, 
            "material": "DIAMOND_PICKAXE"
          }
        }, 
        "efficiency_5_book": {
          "efficiency_5_book": {
            "amount": 1, 
            "material": "BOOK", 
            "stored_enchants": {
              "eff5": {
                "enchant": "DIG_SPEED", 
                "level": 5
              }
            }
          }, 
          "chance": 1.20909e-05
        }, 
        "squid": {
          "chance": 0.00029411763999999998, 
          "squid": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 94
          }
        }, 
        "unbreaking_3_book": {
          "chance": 1.20909e-05, 
          "unbreaking_3_book": {
            "amount": 1, 
            "material": "BOOK", 
            "stored_enchants": {
              "ub3": {
                "enchant": "DURABILITY", 
                "level": 3
              }
            }
          }
        }, 
        "record_mellohi": {
          "chance": 2.9411764e-05, 
          "record_mellohi": {
            "amount": 1, 
            "material": "RECORD_7"
          }
        }, 
        "iron_pickaxe": {
          "chance": 0.0029411763999999999, 
          "iron_pickaxe": {
            "amount": 1, 
            "material": "IRON_PICKAXE"
          }
        }, 
        "lapis_block": {
          "chance": 0.00029411763999999998, 
          "lapis_block": {
            "amount": 1, 
            "material": "LAPIS_BLOCK"
          }
        }, 
        "diamond_shovel": {
          "diamond_shovel": {
            "amount": 1, 
            "material": "DIAMOND_SPADE"
          }, 
          "chance": 3.7036999999999998e-05
        }, 
        "infinity_book": {
          "infinity_book": {
            "amount": 1, 
            "material": "BOOK", 
            "stored_enchants": {
              "infinity": {
                "enchant": "ARROW_INFINITE", 
                "level": 1
              }
            }
          }, 
          "chance": 1.20909e-05
        }, 
        "enderman": {
          "chance": 3.7036999999999998e-05, 
          "enderman": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 58
          }
        }, 
        "protection_4_book": {
          "protection_4_book": {
            "amount": 1, 
            "material": "BOOK", 
            "stored_enchants": {
              "protection4": {
                "enchant": "PROTECTION_ENVIRONMENTAL", 
                "level": 4
              }
            }
          }, 
          "chance": 1.20909e-05
        }, 
        "mooshroom": {
          "chance": 0.00029411763999999998, 
          "mooshroom": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 96
          }
        }, 
        "prismarine_shards": {
          "prismarine_shards": {
            "amount": 5, 
            "material": "PRISMARINE_SHARD"
          }, 
          "chance": 0.00029411763999999998
        }, 
        "iron_sword": {
          "chance": 0.00029411763999999998, 
          "iron_sword": {
            "amount": 1, 
            "material": "IRON_SWORD"
          }
        }, 
        "guardian": {
          "guardian": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 68
          }, 
          "chance": 3.7036999999999998e-05
        }, 
        "record_strad": {
          "record_strad": {
            "amount": 1, 
            "material": "RECORD_9"
          }, 
          "chance": 2.9411764e-05
        }, 
        "zombiepigman": {
          "chance": 3.7036999999999998e-05, 
          "zombiepigman": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 57
          }
        }, 
        "diamond_helmet": {
          "chance": 3.7036999999999998e-05, 
          "diamond_helmet": {
            "amount": 1, 
            "material": "DIAMOND_HELMET"
          }
        }, 
        "apollo_bow": {
          "chance": 4.0909000000000001e-06, 
          "apollo_bow": {
            "lore": [
              "Apollo's Bow"
            ], 
            "amount": 1, 
            "material": "BOW", 
            "enchants": {
              "flame": {
                "enchant": "ARROW_FIRE", 
                "level": 1
              }, 
              "infinity": {
                "enchant": "ARROW_INFINITE", 
                "level": 1
              }, 
              "power": {
                "enchant": "ARROW_DAMAGE", 
                "level": 5
              }, 
              "ub": {
                "enchant": "DURABILITY", 
                "level": 3
              }
            }
          }
        }, 
        "iron_spade": {
          "chance": 0.00029411763999999998, 
          "iron_spade": {
            "amount": 1, 
            "material": "IRON_SPADE"
          }
        }, 
        "imcando_pick": {
          "chance": 4.0909000000000001e-06, 
          "imcando_pick": {
            "lore": [
              "Imcando Pickaxe"
            ], 
            "amount": 1, 
            "material": "DIAMOND_PICKAXE", 
            "enchants": {
              "efficiency": {
                "enchant": "DIG_SPEED", 
                "level": 5
              }, 
              "ub": {
                "enchant": "DURABILITY", 
                "level": 3
              }
            }
          }
        }, 
        "iron_block": {
          "chance": 0.00029411763999999998, 
          "iron_block": {
            "amount": 1, 
            "material": "IRON_BLOCK"
          }
        }, 
        "dirt": {
          "chance": 0.9889, 
          "dirt": {
            "amount": 1, 
            "material": "DIRT", 
            "name": "Dirt!"
          }
        }, 
        "magmacube": {
          "magmacube": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 62
          }, 
          "chance": 3.7036999999999998e-05
        }, 
        "record_cats": {
          "chance": 2.9411764e-05, 
          "record_cats": {
            "amount": 1, 
            "material": "GREEN_RECORD"
          }
        }, 
        "clockback": {
          "chance": 4.0909000000000001e-06, 
          "clockback": {
            "lore": [
              "Clockback"
            ], 
            "amount": 1, 
            "material": "WATCH", 
            "enchants": {
              "kb": {
                "enchant": "KNOCKBACK", 
                "level": 3
              }
            }
          }
        }, 
        "zombie": {
          "zombie": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 54
          }, 
          "chance": 3.7036999999999998e-05
        }, 
        "beacon": {
          "chance": 3.7036999999999998e-05, 
          "beacon": {
            "amount": 1, 
            "material": "BEACON"
          }
        }, 
        "witch": {
          "chance": 3.7036999999999998e-05, 
          "witch": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 66
          }
        }, 
        "note_blocks": {
          "chance": 0.00029411763999999998, 
          "note_blocks": {
            "amount": 5, 
            "material": "NOTE_BLOCK"
          }
        }, 
        "sharpness_5_book": {
          "chance": 1.20909e-05, 
          "sharpness_5_book": {
            "amount": 1, 
            "material": "BOOK", 
            "stored_enchants": {
              "sharpness5": {
                "enchant": "DAMAGE_ALL", 
                "level": 5
              }
            }
          }
        }, 
        "diamond_horse_armor": {
          "diamond_horse_armor": {
            "amount": 1, 
            "material": "DIAMOND_BARDING"
          }, 
          "chance": 3.7038e-05
        }, 
        "diamond_block": {
          "chance": 3.7036999999999998e-05, 
          "diamond_block": {
            "amount": 1, 
            "material": "DIAMOND_BLOCK"
          }
        }, 
        "wolf": {
          "chance": 0.00029411763999999998, 
          "wolf": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 95
          }
        }, 
        "creeper": {
          "creeper": {
            "amount": 1, 
            "material": "MONSTER_EGG", 
            "durability": 50
          }, 
          "chance": 3.7036999999999998e-05
        }, 
        "redstone_block": {
          "chance": 0.00029411763999999998, 
          "redstone_block": {
            "amount": 1, 
            "material": "REDSTONE_BLOCK"
          }
        }, 
        "diamond_chestplate": {
          "chance": 3.7036999999999998e-05, 
          "diamond_chestplate": {
            "amount": 1, 
            "material": "DIAMOND_CHESTPLATE"
          }
        }, 
        "diamond_axe": {
          "chance": 3.7036999999999998e-05, 
          "diamond_axe": {
            "amount": 1, 
            "material": "DIAMOND_AXE"
          }
        }, 
        "record_stal": {
          "chance": 2.9411764e-05, 
          "record_stal": {
            "amount": 1, 
            "material": "RECORD_8"
          }
        }
      }, 
      "type": "RANDOM"
    }, 
    "make_gearbox": {
      "production_time": "10s", 
      "input": {
        "redstone": {
          "amount": 32, 
          "material": "REDSTONE"
        }, 
        "gold": {
          "amount": 16, 
          "material": "GOLD_INGOT"
        }, 
        "iron_block": {
          "amount": 4, 
          "material": "IRON_BLOCK"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Gearbox", 
      "output": {
        "gearbox": {
          "lore": [
            "Gear mechanism for bastion"
          ], 
          "amount": 1, 
          "material": "WATCH", 
          "name": "Gearbox"
        }
      }
    }, 
    "dye_clay_gray": {
      "production_time": "5s", 
      "input": {
        "gray_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 8
        }, 
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Gray", 
      "output": {
        "gray_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 7
        }
      }
    }, 
    "cook_fish": {
      "production_time": "10s", 
      "input": {
        "raw_fish": {
          "amount": 32, 
          "material": "RAW_FISH"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Cook Fish", 
      "output": {
        "cooked_fish": {
          "amount": 48, 
          "material": "COOKED_FISH"
        }
      }
    }, 
    "dye_clay_pink": {
      "production_time": "5s", 
      "input": {
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }, 
        "pink_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 9
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Pink", 
      "output": {
        "pink_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 6
        }
      }
    }, 
    "upgrade_to_rails": {
      "production_time": "10s", 
      "input": {
        "redstone": {
          "amount": 32, 
          "material": "REDSTONE"
        }, 
        "iron": {
          "amount": 64, 
          "material": "IRON_INGOT"
        }, 
        "gold": {
          "amount": 8, 
          "material": "GOLD_INGOT"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Rail Factory", 
      "factory": "Rail Factory"
    }, 
    "upgrade_to_carpentry": {
      "production_time": "10s", 
      "input": {
        "chest": {
          "amount": 32, 
          "material": "CHEST"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Carpentry Factory", 
      "factory": "Carpentry Factory"
    }, 
    "dye_glass_cyan": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "cyan_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 6
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Cyan", 
      "output": {
        "cyan_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 9
        }
      }
    }, 
    "make_crates": {
      "production_time": "10s", 
      "input": {
        "wood": {
          "amount": 128, 
          "material": "WOOD"
        }, 
        "iron": {
          "amount": 64, 
          "material": "IRON_INGOT"
        }, 
        "obsidian": {
          "amount": 32, 
          "material": "OBSIDIAN"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Crates", 
      "output": {
        "crate": {
          "lore": [
            "Crate"
          ], 
          "amount": 32, 
          "material": "CHEST"
        }
      }
    }, 
    "repair_iron_armor_factory": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 9, 
          "material": "IRON_INGOT"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "smelt_glass": {
      "production_time": "10s", 
      "input": {
        "sand": {
          "amount": 64, 
          "material": "SAND"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Smelt Glass", 
      "output": {
        "glass": {
          "amount": 128, 
          "material": "GLASS"
        }
      }
    }, 
    "dye_wool_light_blue": {
      "production_time": "5s", 
      "input": {
        "light_blue_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 12
        }, 
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Light Blue", 
      "output": {
        "light_blue_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 3
        }
      }
    }, 
    "dirt": {
      "production_time": "2s", 
      "input": {
        "dirt": {
          "amount": 1, 
          "material": "DIRT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dirt!", 
      "output": {
        "dirt": {
          "amount": 1, 
          "material": "DIRT", 
          "name": "Dirt!"
        }
      }
    }, 
    "dirt_to_podzol": {
      "production_time": "10s", 
      "input": {
        "dirt": {
          "amount": 64, 
          "material": "DIRT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Convert Dirt to Podzol", 
      "output": {
        "podzol": {
          "amount": 64, 
          "material": "DIRT", 
          "durability": 2
        }
      }
    }, 
    "repair_charcoal_factory": {
      "production_time": "10s", 
      "input": {
        "charcoal": {
          "amount": 16, 
          "material": "COAL", 
          "durability": 1
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "cook_beef": {
      "production_time": "10s", 
      "input": {
        "raw_beef": {
          "amount": 32, 
          "material": "RAW_BEEF"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Cook Beef", 
      "output": {
        "cooked_beef": {
          "amount": 48, 
          "material": "COOKED_BEEF"
        }
      }
    }, 
    "dye_wool_magenta": {
      "production_time": "5s", 
      "input": {
        "magenta_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 13
        }, 
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Magenta", 
      "output": {
        "magenta_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 2
        }
      }
    }, 
    "upgrade_to_bakery": {
      "production_time": "10s", 
      "input": {
        "brick": {
          "amount": 64, 
          "material": "CLAY_BRICK"
        }, 
        "log": {
          "amount": 12, 
          "material": "LOG", 
          "durability": -1
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Bakery", 
      "factory": "Bakery"
    }, 
    "upgrade_to_glass_dye": {
      "production_time": "10s", 
      "input": {
        "glass": {
          "amount": 32, 
          "material": "GLASS"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Glass Dying Factory", 
      "factory": "Glass Dying Factory"
    }, 
    "smelt_coal_ore": {
      "production_time": "10s", 
      "input": {
        "coal_ore": {
          "amount": 64, 
          "material": "COAL_ORE"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Smelt Coal Ore", 
      "output": {
        "coal": {
          "amount": 256, 
          "material": "COAL"
        }
      }
    }, 
    "dye_wool_blue": {
      "production_time": "5s", 
      "input": {
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }, 
        "blue_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 4
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Blue", 
      "output": {
        "blue_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 11
        }
      }
    }, 
    "make_mossy_cobble": {
      "production_time": "10s", 
      "input": {
        "cobblestone": {
          "amount": 64, 
          "material": "COBBLESTONE"
        }, 
        "vine": {
          "amount": 8, 
          "material": "VINE"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Mossy Cobble", 
      "output": {
        "mossy_cobble": {
          "amount": 64, 
          "material": "MOSSY_COBBLESTONE"
        }
      }
    }, 
    "make_bucket": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 96, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Buckets", 
      "output": {
        "bucket": {
          "amount": 64, 
          "material": "BUCKET"
        }
      }
    }, 
    "dye_clay_magenta": {
      "production_time": "5s", 
      "input": {
        "magenta_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 13
        }, 
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Magenta", 
      "output": {
        "magenta_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 2
        }
      }
    }, 
    "repair_redstone": {
      "production_time": "10s", 
      "input": {
        "redstone": {
          "amount": 25, 
          "material": "REDSTONE"
        }, 
        "iron": {
          "amount": 6, 
          "material": "IRON_INGOT"
        }, 
        "gold": {
          "amount": 3, 
          "material": "GOLD_INGOT"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "upgrade_to_aesthetics": {
      "production_time": "10s", 
      "input": {
        "dye": {
          "amount": 32, 
          "material": "INK_SACK", 
          "durability": -1
        }, 
        "stone": {
          "amount": 256, 
          "material": "STONE"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Aesthetics Factory", 
      "factory": "Aesthetics Factory"
    }, 
    "smelt_bricks": {
      "production_time": "10s", 
      "input": {
        "clay": {
          "amount": 128, 
          "material": "CLAY_BALL"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Bake Bricks", 
      "output": {
        "bricks": {
          "amount": 256, 
          "material": "CLAY_BRICK"
        }
      }
    }, 
    "dye_glass_blue": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "blue_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 4
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Blue", 
      "output": {
        "blue_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 11
        }
      }
    }, 
    "charcoal_from_logs_2": {
      "production_time": "10s", 
      "input": {
        "log": {
          "amount": 64, 
          "material": "LOG_2", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Charcoal from Logs 2", 
      "output": {
        "charcoal": {
          "amount": 128, 
          "material": "COAL", 
          "durability": 1
        }
      }
    }, 
    "make_iron_sword": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 10, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Sword", 
      "output": {
        "iron_sword": {
          "amount": 15, 
          "material": "IRON_SWORD"
        }
      }
    }, 
    "dye_glass_pink": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "pink_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 9
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Pink", 
      "output": {
        "pink_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 6
        }
      }
    }, 
    "make_mushroom_pores": {
      "production_time": "10s", 
      "input": {
        "brown_mushroom": {
          "amount": 64, 
          "material": "BROWN_MUSHROOM"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Pore Mushroom Blocks", 
      "output": {
        "pore_mushroom_block": {
          "amount": 16, 
          "material": "HUGE_MUSHROOM_1"
        }
      }
    }, 
    "upgrade_to_iron_armor_smith": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 96, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Iron Armor Smith", 
      "factory": "Iron Armor Smith"
    }, 
    "dye_glass_black": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "black_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 0
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Black", 
      "output": {
        "black_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 15
        }
      }
    }, 
    "make_lead": {
      "production_time": "10s", 
      "input": {
        "string": {
          "amount": 16, 
          "material": "STRING"
        }, 
        "slime": {
          "amount": 4, 
          "material": "SLIME_BALL"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Leads", 
      "output": {
        "leads": {
          "amount": 8, 
          "material": "LEASH"
        }
      }
    }, 
    "dye_clay_green": {
      "production_time": "5s", 
      "input": {
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }, 
        "green_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 2
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Green", 
      "output": {
        "green_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 13
        }
      }
    }, 
    "dye_wool_orange": {
      "production_time": "5s", 
      "input": {
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }, 
        "orange_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 14
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Orange", 
      "output": {
        "orange_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 1
        }
      }
    }, 
    "dye_wool_green": {
      "production_time": "5s", 
      "input": {
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }, 
        "green_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 2
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Green", 
      "output": {
        "green_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 13
        }
      }
    }, 
    "repair_ore_smelter": {
      "production_time": "10s", 
      "input": {
        "coal": {
          "amount": 48, 
          "material": "COAL"
        }, 
        "diamond": {
          "amount": 6, 
          "material": "DIAMOND"
        }, 
        "iron": {
          "amount": 24, 
          "material": "IRON_INGOT"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_diamond_helm": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 25, 
          "material": "DIAMOND"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Diamond Helmets", 
      "output": {
        "diamond_helm": {
          "amount": 15, 
          "material": "DIAMOND_HELMET"
        }
      }
    }, 
    "charcoal_from_coal": {
      "production_time": "10s", 
      "input": {
        "coal": {
          "amount": 64, 
          "material": "COAL"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Charcoal from Coal", 
      "output": {
        "charcoal": {
          "amount": 64, 
          "material": "COAL", 
          "durability": 1
        }
      }
    }, 
    "dye_glass_light_blue": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "light_blue_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 12
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Light Blue", 
      "output": {
        "light_blue_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 3
        }
      }
    }, 
    "make_iron_door": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 54, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Doors", 
      "output": {
        "iron_door": {
          "amount": 18, 
          "material": "IRON_DOOR"
        }
      }
    }, 
    "make_prismarine_bricks": {
      "production_time": "10s", 
      "input": {
        "lapis": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 4
        }, 
        "stone_brick": {
          "amount": 64, 
          "material": "SMOOTH_BRICK"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Prismarine Bricks", 
      "output": {
        "prismarine_bricks": {
          "amount": 64, 
          "material": "PRISMARINE", 
          "durability": 1
        }
      }
    }, 
    "charcoal_from_logs": {
      "production_time": "10s", 
      "input": {
        "log": {
          "amount": 64, 
          "material": "LOG", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Charcoal from Logs", 
      "output": {
        "charcoal": {
          "amount": 128, 
          "material": "COAL", 
          "durability": 1
        }
      }
    }, 
    "upgrade_to_compactor": {
      "production_time": "10s", 
      "input": {
        "redstone_block": {
          "amount": 16, 
          "material": "REDSTONE_BLOCK"
        }, 
        "crate": {
          "lore": [
            "Crate"
          ], 
          "amount": 32, 
          "material": "CHEST"
        }, 
        "iron_block": {
          "amount": 32, 
          "material": "IRON_BLOCK"
        }, 
        "sticky_piston": {
          "amount": 64, 
          "material": "PISTON_STICKY_BASE"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Compactor", 
      "factory": "Compactor"
    }, 
    "make_iron_fence": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 24, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Bars", 
      "output": {
        "iron_bars": {
          "amount": 256, 
          "material": "IRON_FENCE"
        }
      }
    }, 
    "upgrade_to_redstone": {
      "production_time": "10s", 
      "input": {
        "redstone": {
          "amount": 256, 
          "material": "REDSTONE"
        }, 
        "iron": {
          "amount": 64, 
          "material": "IRON_INGOT"
        }, 
        "gold": {
          "amount": 32, 
          "material": "GOLD_INGOT"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Redstone Mechanics Factory", 
      "factory": "Redstone Mechanics Factory"
    }, 
    "upgrade_to_diamond_helm": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 192, 
          "material": "DIAMOND"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Diamond Helmet Smith", 
      "factory": "Diamond Helmet Smith"
    }, 
    "repair_compactor": {
      "production_time": "10s", 
      "input": {
        "redstone_block": {
          "amount": 2, 
          "material": "REDSTONE_BLOCK"
        }, 
        "stick_piston": {
          "amount": 6, 
          "material": "PISTON_STICKY_BASE"
        }, 
        "iron_block": {
          "amount": 4, 
          "material": "IRON_BLOCK"
        }, 
        "crate": {
          "lore": [
            "Crate"
          ], 
          "amount": 3, 
          "material": "CHEST"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "upgrade_to_charcoal_maker": {
      "production_time": "10s", 
      "input": {
        "charcoal": {
          "amount": 512, 
          "material": "COAL", 
          "durability": 1
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Charcoal Maker", 
      "factory": "Charcoal Maker"
    }, 
    "make_torch": {
      "production_time": "10s", 
      "input": {
        "redstone": {
          "amount": 64, 
          "material": "REDSTONE"
        }, 
        "stick": {
          "amount": 64, 
          "material": "STICK"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Redstone Torches", 
      "output": {
        "redstone_torch": {
          "amount": 128, 
          "material": "REDSTONE_TORCH_ON"
        }
      }
    }, 
    "upgrade_to_intermediate_cauldron": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 64, 
          "material": "DIAMOND"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Intermediate Cauldron", 
      "factory": "Intermediate Cauldron"
    }, 
    "dye_wool_white": {
      "production_time": "5s", 
      "input": {
        "white_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 15
        }, 
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool White", 
      "output": {
        "white_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 0
        }
      }
    }, 
    "dye_glass_magenta": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "magenta_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 13
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Magenta", 
      "output": {
        "magenta_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 2
        }
      }
    }, 
    "dye_glass_purple": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "purple_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 5
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Purple", 
      "output": {
        "purple_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 10
        }
      }
    }, 
    "smelt_redstone_ore": {
      "production_time": "10s", 
      "input": {
        "redstone_ore": {
          "amount": 64, 
          "material": "REDSTONE_ORE"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Smelt Redstone Ore", 
      "output": {
        "redstone": {
          "amount": 48, 
          "material": "REDSTONE_BLOCK"
        }
      }
    }, 
    "smelt_lapis_ore": {
      "production_time": "10s", 
      "input": {
        "lapis_ore": {
          "amount": 64, 
          "material": "LAPIS_ORE"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Smelt Lapis Ore", 
      "output": {
        "lapis": {
          "amount": 48, 
          "material": "LAPIS_BLOCK"
        }
      }
    }, 
    "make_iron_pick": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 15, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Pick", 
      "output": {
        "iron_pick": {
          "amount": 15, 
          "material": "IRON_PICKAXE"
        }
      }
    }, 
    "repair_glass": {
      "production_time": "10s", 
      "input": {
        "glass": {
          "amount": 16, 
          "material": "GLASS"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "upgrade_to_diamond_sword": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 80, 
          "material": "DIAMOND"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Diamond Sword Smith", 
      "factory": "Diamond Sword Smith"
    }, 
    "upgrade_to_diamond_shovel": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 48, 
          "material": "DIAMOND"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Diamond Shovel Smith", 
      "factory": "Diamond Shovel Smith"
    }, 
    "decompact": {
      "production_time": "5s", 
      "input": null, 
      "compact_lore": "Compacted Item", 
      "type": "DECOMPACT", 
      "name": "Decompact"
    }, 
    "upgrade_to_bio_lab": {
      "production_time": "10s", 
      "input": {
        "sapling": {
          "amount": 32, 
          "material": "SAPLING"
        }, 
        "Dirt!": {
          "amount": 256, 
          "material": "DIRT", 
          "name": "Dirt!"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Bio Lab", 
      "factory": "Bio Lab"
    }, 
    "bake_bread": {
      "production_time": "10s", 
      "input": {
        "wheat": {
          "amount": 64, 
          "material": "WHEAT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Bake Bread", 
      "output": {
        "bread": {
          "amount": 48, 
          "material": "BREAD"
        }
      }
    }, 
    "dye_wool_red": {
      "production_time": "5s", 
      "input": {
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }, 
        "red_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Red", 
      "output": {
        "red_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 14
        }
      }
    }, 
    "make_trapdoors": {
      "production_time": "10s", 
      "input": {
        "chest": {
          "amount": 48, 
          "material": "CHEST"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Trap Doors", 
      "output": {
        "trapdoor": {
          "amount": 256, 
          "material": "TRAP_DOOR"
        }
      }
    }, 
    "repair_intermediate_cauldron": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 6, 
          "material": "DIAMOND"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "dye_clay_red": {
      "production_time": "5s", 
      "input": {
        "red_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 1
        }, 
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Red", 
      "output": {
        "red_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 14
        }
      }
    }, 
    "cook_rabbit": {
      "production_time": "10s", 
      "input": {
        "raw_rabbit": {
          "amount": 32, 
          "material": "RABBIT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Cook Rabbit", 
      "output": {
        "cooked_rabbit": {
          "amount": 48, 
          "material": "COOKED_RABBIT"
        }
      }
    }, 
    "int_xp_3": {
      "production_time": "10s", 
      "input": {
        "grass": {
          "amount": 32, 
          "material": "LONG_GRASS", 
          "durability": 1
        }, 
        "wheat": {
          "amount": 128, 
          "material": "WHEAT"
        }, 
        "rose": {
          "amount": 8, 
          "material": "RED_ROSE"
        }, 
        "red_mushroom": {
          "amount": 16, 
          "material": "RED_MUSHROOM"
        }, 
        "cocoa": {
          "amount": 16, 
          "material": "INK_SACK", 
          "durability": 3
        }, 
        "spider_eye": {
          "amount": 32, 
          "material": "SPIDER_EYE"
        }, 
        "glass_bottle": {
          "amount": 128, 
          "material": "GLASS_BOTTLE"
        }, 
        "cactus": {
          "amount": 256, 
          "material": "CACTUS"
        }, 
        "cooked_fish": {
          "amount": 16, 
          "material": "COOKED_FISH"
        }, 
        "pumpkin": {
          "amount": 128, 
          "material": "PUMPKIN"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 3", 
      "output": {
        "exp": {
          "amount": 128, 
          "material": "EXP_BOTTLE"
        }
      }
    }, 
    "repair_rails": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 4, 
          "material": "IRON_INGOT"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_refractor": {
      "production_time": "10s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "diamond": {
          "amount": 16, 
          "material": "DIAMOND"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Refractor", 
      "output": {
        "refractor": {
          "lore": [
            "Refractor for bastion"
          ], 
          "amount": 2, 
          "material": "DIAMOND", 
          "name": "Refractor"
        }
      }
    }, 
    "make_repeater": {
      "production_time": "10s", 
      "input": {
        "stone": {
          "amount": 128, 
          "material": "STONE"
        }, 
        "redstone": {
          "amount": 128, 
          "material": "REDSTONE"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Repeaters", 
      "output": {
        "repeater": {
          "amount": 96, 
          "material": "DIODE"
        }
      }
    }, 
    "dye_clay_yellow": {
      "production_time": "5s", 
      "input": {
        "yellow_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 11
        }, 
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Yellow", 
      "output": {
        "yellow_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 4
        }
      }
    }, 
    "make_circle_stone_brick": {
      "production_time": "10s", 
      "input": {
        "flint": {
          "amount": 8, 
          "material": "FLINT"
        }, 
        "stone_brick": {
          "amount": 64, 
          "material": "SMOOTH_BRICK"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Chiseled Stone Brick", 
      "output": {
        "circle_stone_brick": {
          "amount": 64, 
          "material": "SMOOTH_BRICK", 
          "durability": 3
        }
      }
    }, 
    "make_anvil": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 256, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Anvils", 
      "output": {
        "anvil": {
          "amount": 16, 
          "material": "ANVIL"
        }
      }
    }, 
    "adv_xp_3": {
      "production_time": "10s", 
      "input": {
        "grass": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 32, 
          "material": "LONG_GRASS", 
          "durability": 1
        }, 
        "wheat": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "WHEAT"
        }, 
        "rose": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 8, 
          "material": "RED_ROSE"
        }, 
        "red_mushroom": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 16, 
          "material": "RED_MUSHROOM"
        }, 
        "cocoa": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 16, 
          "material": "INK_SACK", 
          "durability": 3
        }, 
        "spider_eye": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 32, 
          "material": "SPIDER_EYE"
        }, 
        "glass_bottle": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "GLASS_BOTTLE"
        }, 
        "cactus": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 256, 
          "material": "CACTUS"
        }, 
        "cooked_fish": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 16, 
          "material": "COOKED_FISH"
        }, 
        "pumpkin": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "PUMPKIN"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 3", 
      "output": {
        "exp": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 2, 
          "material": "EMERALD_BLOCK"
        }
      }
    }, 
    "adv_xp_2": {
      "production_time": "10s", 
      "input": {
        "cooked_chicken": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 16, 
          "material": "COOKED_CHICKEN"
        }, 
        "rotten_flesh": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "ROTTEN_FLESH"
        }, 
        "sugar_cane": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "SUGAR_CANE"
        }, 
        "nether_wart": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 64, 
          "material": "NETHER_WART_BLOCK"
        }, 
        "vine": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 32, 
          "material": "VINE"
        }, 
        "yellow_flower": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 16, 
          "material": "YELLOW_FLOWER"
        }, 
        "baked_potato": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 256, 
          "material": "BAKED_POTATO"
        }, 
        "melon": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 32, 
          "material": "MELON_BLOCK"
        }, 
        "glass_bottle": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "GLASS_BOTTLE"
        }, 
        "brown_mushroom": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 64, 
          "material": "BROWN_MUSHROOM"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 2", 
      "output": {
        "exp": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 2, 
          "material": "EMERALD_BLOCK"
        }
      }
    }, 
    "adv_xp_1": {
      "production_time": "10s", 
      "input": {
        "glass_bottle": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "GLASS_BOTTLE"
        }, 
        "rotten_flesh": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "ROTTEN_FLESH"
        }, 
        "rose": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 8, 
          "material": "RED_ROSE"
        }, 
        "red_mushroom": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 32, 
          "material": "RED_MUSHROOM"
        }, 
        "vine": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 32, 
          "material": "VINE"
        }, 
        "melon": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 32, 
          "material": "MELON_BLOCK"
        }, 
        "carrot": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 96, 
          "material": "CARROT_ITEM"
        }, 
        "grilled_pork": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 32, 
          "material": "GRILLED_PORK"
        }, 
        "cactus": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 256, 
          "material": "CACTUS"
        }, 
        "bread": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 128, 
          "material": "BREAD"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 1", 
      "output": {
        "exp": {
          "lore": [
            "Compacted item"
          ], 
          "amount": 2, 
          "material": "EMERALD_BLOCK"
        }
      }
    }, 
    "make_casing": {
      "production_time": "10s", 
      "input": {
        "chest": {
          "amount": 64, 
          "material": "CHEST"
        }, 
        "iron_block": {
          "amount": 4, 
          "material": "IRON_BLOCK"
        }, 
        "obsidian": {
          "amount": 16, 
          "material": "OBSIDIAN"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Casings", 
      "output": {
        "casing": {
          "lore": [
            "Casing for bastion"
          ], 
          "amount": 4, 
          "material": "ENDER_CHEST", 
          "name": "Casing"
        }
      }
    }, 
    "upgrade_to_diamond_axe": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 64, 
          "material": "DIAMOND"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Diamond Axe Smith", 
      "factory": "Diamond Axe Smith"
    }, 
    "make_cracked_stone_brick": {
      "production_time": "10s", 
      "input": {
        "gravel": {
          "amount": 8, 
          "material": "GRAVEL"
        }, 
        "stone_brick": {
          "amount": 64, 
          "material": "SMOOTH_BRICK"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Cracked Stone Brick", 
      "output": {
        "cracked_stone_brick": {
          "amount": 64, 
          "material": "SMOOTH_BRICK", 
          "durability": 2
        }
      }
    }, 
    "dye_glass_gray": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "gray_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 8
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Gray", 
      "output": {
        "gray_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 7
        }
      }
    }, 
    "dye_glass_brown": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "brown_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 3
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Brown", 
      "output": {
        "brown_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 12
        }
      }
    }, 
    "dye_glass_red": {
      "production_time": "5s", 
      "input": {
        "glass": {
          "amount": 64, 
          "material": "GLASS"
        }, 
        "red_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Glass Red", 
      "output": {
        "red_glass": {
          "amount": 64, 
          "material": "STAINED_GLASS", 
          "durability": 14
        }
      }
    }, 
    "make_prismarine": {
      "production_time": "10s", 
      "input": {
        "stone": {
          "amount": 64, 
          "material": "STONE"
        }, 
        "lapis": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 4
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Prismarine", 
      "output": {
        "prismarine": {
          "amount": 64, 
          "material": "PRISMARINE"
        }
      }
    }, 
    "make_dark_prismarine": {
      "production_time": "10s", 
      "input": {
        "stone": {
          "amount": 64, 
          "material": "STONE"
        }, 
        "lapis": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 4
        }, 
        "ink": {
          "amount": 4, 
          "material": "INK_SACK"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Dark Prismarine", 
      "output": {
        "dark_prismarine": {
          "amount": 64, 
          "material": "PRISMARINE", 
          "durability": 2
        }
      }
    }, 
    "smelt_stone": {
      "production_time": "10s", 
      "input": {
        "cobblestone": {
          "amount": 64, 
          "material": "COBBLESTONE"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Smelt Stone", 
      "output": {
        "stone": {
          "amount": 96, 
          "material": "STONE"
        }
      }
    }, 
    "make_radar": {
      "production_time": "10s", 
      "input": {
        "redstone": {
          "amount": 16, 
          "material": "REDSTONE"
        }, 
        "ender_eye": {
          "amount": 8, 
          "material": "EYE_OF_ENDER"
        }, 
        "iron": {
          "amount": 32, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Radar", 
      "output": {
        "radar": {
          "lore": [
            "Radar for detecting pearls"
          ], 
          "amount": 8, 
          "material": "COMPASS", 
          "name": "Radar"
        }
      }
    }, 
    "basic_xp_4": {
      "production_time": "10s", 
      "input": {
        "grilled_pork": {
          "amount": 32, 
          "material": "GRILLED_PORK"
        }, 
        "cookie": {
          "amount": 512, 
          "material": "COOKIE"
        }, 
        "melon": {
          "amount": 64, 
          "material": "MELON_BLOCK"
        }, 
        "sugar_cane": {
          "amount": 64, 
          "material": "SUGAR_CANE"
        }, 
        "baked_potato": {
          "amount": 64, 
          "material": "BAKED_POTATO"
        }, 
        "glass_bottle": {
          "amount": 42, 
          "material": "GLASS_BOTTLE"
        }, 
        "nether_wart": {
          "amount": 256, 
          "material": "NETHER_WART_BLOCK"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 4", 
      "output": {
        "exp": {
          "amount": 42, 
          "material": "EXP_BOTTLE"
        }
      }
    }, 
    "dye_wool_yellow": {
      "production_time": "5s", 
      "input": {
        "yellow_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 11
        }, 
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Yellow", 
      "output": {
        "yellow_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 4
        }
      }
    }, 
    "repair_diamond_helm_factory": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 19, 
          "material": "DIAMOND"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_iron_legs": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 35, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Leggings", 
      "output": {
        "iron_legs": {
          "amount": 15, 
          "material": "IRON_LEGGINGS"
        }
      }
    }, 
    "upgrade_to_ore_smelter": {
      "production_time": "30s", 
      "input": {
        "coal": {
          "amount": 512, 
          "material": "COAL"
        }, 
        "diamond": {
          "amount": 64, 
          "material": "DIAMOND"
        }, 
        "iron": {
          "amount": 256, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Ore Smelter", 
      "factory": "Ore Smelter"
    }, 
    "repair_advanced_cauldron": {
      "production_time": "10s", 
      "input": {
        "emerald_block": {
          "amount": 16, 
          "material": "EMERALD_BLOCK"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "dye_clay_purple": {
      "production_time": "5s", 
      "input": {
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }, 
        "purple_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 5
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Purple", 
      "output": {
        "purple_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 10
        }
      }
    }, 
    "repair_clay": {
      "production_time": "10s", 
      "input": {
        "clay": {
          "amount": 16, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "upgrade_to_bastion": {
      "production_time": "10s", 
      "input": {
        "radar": {
          "lore": [
            "Radar for detecting pearls"
          ], 
          "amount": 32, 
          "material": "COMPASS"
        }, 
        "refractor": {
          "lore": [
            "Refractor for bastion"
          ], 
          "amount": 32, 
          "material": "DIAMOND"
        }, 
        "gearbox": {
          "lore": [
            "Gear mechanism for a bastion"
          ], 
          "amount": 48, 
          "material": "WATCH"
        }, 
        "energizer": {
          "lore": [
            "Power source for bastion"
          ], 
          "amount": 32, 
          "material": "EMERALD"
        }, 
        "casing": {
          "lore": [
            "Casing for a bastion"
          ], 
          "amount": 48, 
          "material": "ENDER_CHEST"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Bastion Factory", 
      "factory": "Bastion Factory"
    }, 
    "make_ladders": {
      "production_time": "10s", 
      "input": {
        "chest": {
          "amount": 8, 
          "material": "CHEST"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Ladders", 
      "output": {
        "ladder": {
          "amount": 256, 
          "material": "LADDER"
        }
      }
    }, 
    "upgrade_to_iron_forge": {
      "production_time": "10s", 
      "input": {
        "lava_bucket": {
          "amount": 1, 
          "material": "LAVA_BUCKET"
        }, 
        "iron": {
          "amount": 128, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Iron Forge", 
      "factory": "Iron Forge"
    }, 
    "repair_iron_tools_factory": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 6, 
          "material": "IRON_INGOT"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_powered_rail": {
      "production_time": "10s", 
      "input": {
        "redstone": {
          "amount": 8, 
          "material": "REDSTONE"
        }, 
        "gold": {
          "amount": 64, 
          "material": "GOLD_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Powered Rails", 
      "output": {
        "powered_rail": {
          "amount": 128, 
          "material": "POWERED_RAIL"
        }
      }
    }, 
    "make_sea_lantern": {
      "production_time": "10s", 
      "input": {
        "lapis": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 4
        }, 
        "glowstone": {
          "amount": 32, 
          "material": "GLOWSTONE"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Sea Lantern", 
      "output": {
        "sea_lantern": {
          "amount": 32, 
          "material": "SEA_LANTERN"
        }
      }
    }, 
    "upgrade_to_diamond_legs": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 256, 
          "material": "DIAMOND"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Diamond Leggings Smith", 
      "factory": "Diamond Leggings Smith"
    }, 
    "make_rail": {
      "production_time": "10s", 
      "input": {
        "stick": {
          "amount": 16, 
          "material": "STICK"
        }, 
        "iron": {
          "amount": 128, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Rails", 
      "output": {
        "rails": {
          "amount": 576, 
          "material": "RAILS"
        }
      }
    }, 
    "repair_husbandry": {
      "production_time": "10s", 
      "input": {
        "leather": {
          "amount": 3, 
          "material": "LEATHER"
        }, 
        "slime": {
          "amount": 2, 
          "material": "SLIME_BALL"
        }, 
        "iron": {
          "amount": 3, 
          "material": "IRON_BLOCK"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "upgrade_to_diamond_pick": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 96, 
          "material": "DIAMOND"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Diamond Pickaxe Smith", 
      "factory": "Diamond Pickaxe Smith"
    }, 
    "sapling_to_jungle": {
      "production_time": "10s", 
      "input": {
        "sapling": {
          "amount": 32, 
          "material": "SAPLING", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Convert Sapling to Jungle", 
      "output": {
        "jungle_sapling": {
          "amount": 32, 
          "material": "SAPLING", 
          "durability": 3
        }
      }
    }, 
    "repair_forge": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 12, 
          "material": "IRON_INGOT"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "dye_clay_light_gray": {
      "production_time": "5s", 
      "input": {
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }, 
        "light_gray_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 7
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Light Gray", 
      "output": {
        "light_gray_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 8
        }
      }
    }, 
    "make_detector_rail": {
      "production_time": "10s", 
      "input": {
        "redstone": {
          "amount": 2, 
          "material": "REDSTONE"
        }, 
        "iron": {
          "amount": 18, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Detector Rails", 
      "output": {
        "detector_rail": {
          "amount": 32, 
          "material": "DETECTOR_RAIL"
        }
      }
    }, 
    "smelt_gold_ore": {
      "production_time": "10s", 
      "input": {
        "gold_ore": {
          "amount": 32, 
          "material": "GOLD_ORE"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Smelt Gold Ore", 
      "output": {
        "gold": {
          "amount": 48, 
          "material": "GOLD_INGOT"
        }
      }
    }, 
    "upgrade_to_advanced_cauldron": {
      "production_time": "10s", 
      "input": {
        "emerald_block": {
          "amount": 128, 
          "material": "EMERALD_BLOCK"
        }, 
        "wither_skull": {
          "amount": 1, 
          "material": "SKULL_ITEM", 
          "durability": 1
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Advanced Cauldron", 
      "factory": "Advanced Cauldron"
    }, 
    "make_diamond_axe": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 15, 
          "material": "DIAMOND"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Diamond Axe", 
      "output": {
        "diamond_axe": {
          "amount": 30, 
          "material": "DIAMOND_AXE"
        }
      }
    }, 
    "make_signs": {
      "production_time": "10s", 
      "input": {
        "chest": {
          "amount": 8, 
          "material": "CHEST"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Signs", 
      "output": {
        "sign": {
          "amount": 64, 
          "material": "SIGN"
        }
      }
    }, 
    "make_bio_component": {
      "production_time": "10s", 
      "input": {
        "grass": {
          "amount": 16, 
          "material": "GRASS"
        }, 
        "slime": {
          "amount": 8, 
          "material": "SLIME_BALL"
        }, 
        "ice": {
          "amount": 32, 
          "material": "ICE"
        }, 
        "lava": {
          "amount": 2, 
          "material": "LAVA_BUCKET"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Bio-Component", 
      "output": {
        "bio_component": {
          "lore": [
            "Bio-Component for bastion"
          ], 
          "amount": 1, 
          "material": "MAGMA_CREAM", 
          "name": "Bio-Component"
        }
      }
    }, 
    "repair_bakery": {
      "production_time": "10s", 
      "input": {
        "brick": {
          "amount": 16, 
          "material": "CLAY_BRICK"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "sapling_to_spruce": {
      "production_time": "10s", 
      "input": {
        "sapling": {
          "amount": 32, 
          "material": "SAPLING", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Convert Sapling to Spruce", 
      "output": {
        "spruce_sapling": {
          "amount": 32, 
          "material": "SAPLING", 
          "durability": 1
        }
      }
    }, 
    "make_diamond_pick": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 15, 
          "material": "DIAMOND"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Diamond Pick", 
      "output": {
        "diamond_pick": {
          "amount": 15, 
          "material": "DIAMOND_PICKAXE"
        }
      }
    }, 
    "repair_bio_lab": {
      "production_time": "10s", 
      "input": {
        "Dirt!": {
          "amount": 8, 
          "material": "DIRT"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_iron_hoe": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 10, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Iron Hoe", 
      "output": {
        "iron_hoe": {
          "amount": 30, 
          "material": "IRON_HOE"
        }
      }
    }, 
    "basic_xp_2": {
      "production_time": "10s", 
      "input": {
        "carrot": {
          "amount": 256, 
          "material": "CARROT_ITEM"
        }, 
        "glass_bottle": {
          "amount": 14, 
          "material": "GLASS_BOTTLE"
        }, 
        "nether_wart": {
          "amount": 256, 
          "material": "NETHER_WART_BLOCK"
        }, 
        "baked_potato": {
          "amount": 256, 
          "material": "BAKED_POTATO"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 2", 
      "output": {
        "exp": {
          "amount": 14, 
          "material": "EXP_BOTTLE"
        }
      }
    }, 
    "basic_xp_3": {
      "production_time": "10s", 
      "input": {
        "cocoa": {
          "amount": 64, 
          "material": "INK_SACK", 
          "durability": 3
        }, 
        "steak": {
          "amount": 32, 
          "material": "COOKED_BEEF"
        }, 
        "bread": {
          "amount": 64, 
          "material": "BREAD"
        }, 
        "glass_bottle": {
          "amount": 42, 
          "material": "GLASS_BOTTLE"
        }, 
        "cactus": {
          "amount": 64, 
          "material": "CACTUS"
        }, 
        "carrot": {
          "amount": 128, 
          "material": "CARROT_ITEM"
        }, 
        "pumpkin": {
          "amount": 64, 
          "material": "PUMPKIN"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 3", 
      "output": {
        "exp": {
          "amount": 42, 
          "material": "EXP_BOTTLE"
        }
      }
    }, 
    "basic_xp_1": {
      "production_time": "10s", 
      "input": {
        "glass_bottle": {
          "amount": 24, 
          "material": "GLASS_BOTTLE"
        }, 
        "carrot": {
          "amount": 256, 
          "material": "CARROT_ITEM"
        }, 
        "cactus": {
          "amount": 256, 
          "material": "CACTUS"
        }, 
        "bread": {
          "amount": 256, 
          "material": "BREAD"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Exp 1", 
      "output": {
        "exp": {
          "amount": 24, 
          "material": "EXP_BOTTLE"
        }
      }
    }, 
    "repair_stone_smelter": {
      "production_time": "10s", 
      "input": {
        "stone": {
          "amount": 24, 
          "material": "STONE"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_mushroom_red": {
      "production_time": "10s", 
      "input": {
        "red_mushroom": {
          "amount": 64, 
          "material": "RED_MUSHROOM"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Red Mushroom Blocks", 
      "output": {
        "red_mushroom_block": {
          "amount": 16, 
          "material": "HUGE_MUSHROOM_2", 
          "durability": 14
        }
      }
    }, 
    "make_hopper": {
      "production_time": "10s", 
      "input": {
        "chests": {
          "amount": 32, 
          "material": "CHEST"
        }, 
        "iron": {
          "amount": 192, 
          "material": "IRON_INGOT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Hoppers", 
      "output": {
        "hopper": {
          "amount": 64, 
          "material": "HOPPER"
        }
      }
    }, 
    "make_fences": {
      "production_time": "10s", 
      "input": {
        "chest": {
          "amount": 12, 
          "material": "CHEST"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Fences", 
      "output": {
        "fence": {
          "amount": 256, 
          "material": "FENCE"
        }
      }
    }, 
    "sapling_to_acacia": {
      "production_time": "10s", 
      "input": {
        "sapling": {
          "amount": 32, 
          "material": "SAPLING", 
          "durability": -1
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Convert Sapling to Acacia", 
      "output": {
        "acacia_sapling": {
          "amount": 32, 
          "material": "SAPLING", 
          "durability": 4
        }
      }
    }, 
    "make_mossy_stone_brick": {
      "production_time": "10s", 
      "input": {
        "vine": {
          "amount": 8, 
          "material": "VINE"
        }, 
        "stone_brick": {
          "amount": 64, 
          "material": "SMOOTH_BRICK"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Mossy Stone Brick", 
      "output": {
        "moss_stone_brick": {
          "amount": 64, 
          "material": "SMOOTH_BRICK", 
          "durability": 1
        }
      }
    }, 
    "upgrade_to_diamond_chest": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 320, 
          "material": "DIAMOND"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Diamond Chestplate Smith", 
      "factory": "Diamond Chestplate Smith"
    }, 
    "dye_wool_purple": {
      "production_time": "5s", 
      "input": {
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }, 
        "purple_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 5
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Purple", 
      "output": {
        "purple_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 10
        }
      }
    }, 
    "repair_wool": {
      "production_time": "10s", 
      "input": {
        "wool": {
          "amount": 16, 
          "material": "WOOL", 
          "durability": -1
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_diamond_legs": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 35, 
          "material": "DIAMOND"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Diamond Leggings", 
      "output": {
        "diamond_legs": {
          "amount": 15, 
          "material": "DIAMOND_LEGGINGS"
        }
      }
    }, 
    "repair_diamond_legs_factory": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 25, 
          "material": "DIAMOND"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "repair_basic_cauldron": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 12, 
          "material": "IRON_INGOT"
        }, 
        "gold": {
          "amount": 3, 
          "material": "GOLD_INGOT"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "upgrade_to_basic_cauldron": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 128, 
          "material": "IRON_INGOT"
        }, 
        "gold": {
          "amount": 32, 
          "material": "GOLD_INGOT"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Basic Cauldron", 
      "factory": "Basic Cauldron"
    }, 
    "dirt_to_grass": {
      "production_time": "10s", 
      "input": {
        "dirt": {
          "amount": 64, 
          "material": "DIRT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Convert Dirt to Grass", 
      "output": {
        "grass": {
          "amount": 64, 
          "material": "GRASS"
        }
      }
    }, 
    "repair_diamond_hoe_factory": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 3, 
          "material": "DIAMOND"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "make_diamond_boots": {
      "production_time": "10s", 
      "input": {
        "diamond": {
          "amount": 20, 
          "material": "DIAMOND"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Make Diamond Boots", 
      "output": {
        "diamond_boots": {
          "amount": 15, 
          "material": "DIAMOND_BOOTS"
        }
      }
    }, 
    "dye_wool_brown": {
      "production_time": "5s", 
      "input": {
        "wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": -1
        }, 
        "brown_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 3
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Wool Brown", 
      "output": {
        "brown_wool": {
          "amount": 64, 
          "material": "WOOL", 
          "durability": 12
        }
      }
    }, 
    "smelt_netherrack": {
      "production_time": "10s", 
      "input": {
        "netherrack": {
          "amount": 64, 
          "material": "NETHERRACK"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Smelt Netherrack", 
      "output": {
        "netherbrick": {
          "amount": 64, 
          "material": "NETHER_BRICK"
        }
      }
    }, 
    "dirt_to_mycelium": {
      "production_time": "10s", 
      "input": {
        "dirt": {
          "amount": 64, 
          "material": "DIRT"
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Convert Dirt to Mycelium", 
      "output": {
        "mycelium": {
          "amount": 64, 
          "material": "MYCEL"
        }
      }
    }, 
    "upgrade_to_husbandry": {
      "production_time": "10s", 
      "input": {
        "leather": {
          "amount": 32, 
          "material": "LEATHER"
        }, 
        "slime": {
          "amount": 16, 
          "material": "SLIME_BALL"
        }, 
        "iron_block": {
          "amount": 32, 
          "material": "IRON_BLOCK"
        }
      }, 
      "type": "UPGRADE", 
      "name": "Upgrade to Animal Husbandry", 
      "factory": "Animal Husbandry"
    }, 
    "repair_grill": {
      "production_time": "10s", 
      "input": {
        "iron": {
          "amount": 8, 
          "material": "IRON_INGOT"
        }
      }, 
      "health_gained": 10000, 
      "type": "REPAIR", 
      "name": "Repair Factory"
    }, 
    "dye_clay_black": {
      "production_time": "5s", 
      "input": {
        "clay": {
          "amount": 64, 
          "material": "HARD_CLAY", 
          "durability": -1
        }, 
        "black_dye": {
          "amount": 4, 
          "material": "INK_SACK", 
          "durability": 0
        }
      }, 
      "type": "PRODUCTION", 
      "name": "Dye Clay Black", 
      "output": {
        "black_clay": {
          "amount": 64, 
          "material": "STAINED_CLAY", 
          "durability": 15
        }
      }
    }
  }, 
  "default_health": 10000, 
  "decay_intervall": "1h", 
  "use_recipe_yamlidentifiers": true, 
  "default_menu_factory": "Dirt Factory", 
  "decay_amount": 21, 
  "factories": {
    "dirt_factory": {
      "setupcost": {
        "Dirt": {
          "amount": 1, 
          "material": "DIRT"
        }
      }, 
      "recipes": [
        "dirt", 
        "upgrade_to_stone_smelter", 
        "upgrade_to_ore_smelter", 
        "upgrade_to_aesthetics", 
        "upgrade_to_bakery", 
        "upgrade_to_grill", 
        "upgrade_to_charcoal_maker", 
        "upgrade_to_iron_armor_smith", 
        "upgrade_to_iron_tool_smith", 
        "upgrade_to_iron_forge", 
        "upgrade_to_wool_dye", 
        "upgrade_to_glass_dye", 
        "upgrade_to_clay_dye", 
        "upgrade_to_bio_lab", 
        "upgrade_to_carpentry", 
        "upgrade_to_rails", 
        "upgrade_to_diamond_helm", 
        "upgrade_to_diamond_chest", 
        "upgrade_to_diamond_legs", 
        "upgrade_to_diamond_boots", 
        "upgrade_to_diamond_pick", 
        "upgrade_to_diamond_shovel", 
        "upgrade_to_diamond_axe", 
        "upgrade_to_diamond_sword", 
        "upgrade_to_diamond_hoe", 
        "upgrade_to_husbandry", 
        "upgrade_to_redstone", 
        "upgrade_to_bastion", 
        "upgrade_to_basic_cauldron", 
        "upgrade_to_compactor", 
        "repair_dirt_factory"
      ], 
      "type": "FCC", 
      "name": "Dirt Factory", 
      "citadelBreakReduction": 1.0
    }, 
    "aesthetics": {
      "setupcost": {
        "dye": {
          "amount": 32, 
          "material": "INK_SACK", 
          "durability": -1
        }, 
        "stone": {
          "amount": 256, 
          "material": "STONE"
        }
      }, 
      "recipes": [
        "make_cracked_stone_brick", 
        "make_mossy_stone_brick", 
        "make_circle_stone_brick", 
        "make_mossy_cobble", 
        "make_quartz", 
        "make_red_sand", 
        "make_purpur", 
        "make_prismarine", 
        "make_prismarine_bricks", 
        "make_dark_prismarine", 
        "make_sea_lantern", 
        "repair_aesthetics"
      ], 
      "type": "FCC", 
      "name": "Aesthetics Factory", 
      "citadelBreakReduction": 1.0
    }, 
    "diamond_sword": {
      "setupcost": {
        "diamond": {
          "amount": 80, 
          "material": "DIAMOND"
        }
      }, 
      "recipes": [
        "make_diamond_sword", 
        "repair_diamond_sword_factory"
      ], 
      "type": "FCC", 
      "name": "Diamond Sword Smith", 
      "citadelBreakReduction": 1.0
    }, 
    "dye_clay": {
      "setupcost": {
        "clay": {
          "amount": 32, 
          "material": "HARD_CLAY", 
          "durability": -1
        }
      }, 
      "recipes": [
        "dye_clay_white", 
        "dye_clay_orange", 
        "dye_clay_magenta", 
        "dye_clay_light_blue", 
        "dye_clay_yellow", 
        "dye_clay_lime", 
        "dye_clay_pink", 
        "dye_clay_gray", 
        "dye_clay_light_gray", 
        "dye_clay_cyan", 
        "dye_clay_purple", 
        "dye_clay_blue", 
        "dye_clay_brown", 
        "dye_clay_green", 
        "dye_clay_red", 
        "dye_clay_black", 
        "repair_clay"
      ], 
      "type": "FCC", 
      "name": "Clay Dying Factory", 
      "citadelBreakReduction": 1.0
    }, 
    "redstone_mechanics": {
      "setupcost": {
        "redstone": {
          "amount": 256, 
          "material": "REDSTONE"
        }, 
        "iron": {
          "amount": 64, 
          "material": "IRON_INGOT"
        }, 
        "gold": {
          "amount": 32, 
          "material": "GOLD_INGOT"
        }
      }, 
      "recipes": [
        "make_torch", 
        "make_hopper", 
        "make_comparator", 
        "make_repeater", 
        "make_gearbox", 
        "repair_redstone"
      ], 
      "type": "FCC", 
      "name": "Redstone Mechanics Factory", 
      "citadelBreakReduction": 1.0
    }, 
    "diamond_chest": {
      "setupcost": {
        "diamond": {
          "amount": 320, 
          "material": "DIAMOND"
        }
      }, 
      "recipes": [
        "make_diamond_chest", 
        "repair_diamond_chest_factory"
      ], 
      "type": "FCC", 
      "name": "Diamond Chestplate Smith", 
      "citadelBreakReduction": 1.0
    }, 
    "iron_tools": {
      "setupcost": {
        "iron": {
          "amount": 64, 
          "material": "IRON_INGOT"
        }
      }, 
      "recipes": [
        "make_iron_pick", 
        "make_iron_sword", 
        "make_iron_shovel", 
        "make_iron_axe", 
        "make_iron_hoe", 
        "repair_iron_tools_factory"
      ], 
      "type": "FCC", 
      "name": "Iron Tool Smith", 
      "citadelBreakReduction": 1.0
    }, 
    "basic_cauldron": {
      "setupcost": {
        "iron": {
          "amount": 128, 
          "material": "IRON_INGOT"
        }, 
        "gold": {
          "amount": 32, 
          "material": "GOLD_INGOT"
        }
      }, 
      "recipes": [
        "basic_xp_1", 
        "basic_xp_2", 
        "basic_xp_3", 
        "basic_xp_4", 
        "upgrade_to_intermediate_cauldron", 
        "repair_basic_cauldron"
      ], 
      "type": "FCC", 
      "name": "Basic Cauldron", 
      "citadelBreakReduction": 1.0
    }, 
    "diamond_boots": {
      "setupcost": {
        "diamond": {
          "amount": 160, 
          "material": "DIAMOND"
        }
      }, 
      "recipes": [
        "make_diamond_boots", 
        "repair_diamond_boots_factory"
      ], 
      "type": "FCC", 
      "name": "Diamond Boots Smith", 
      "citadelBreakReduction": 1.0
    }, 
    "diamond_shovel": {
      "setupcost": {
        "diamond": {
          "amount": 48, 
          "material": "DIAMOND"
        }
      }, 
      "recipes": [
        "make_diamond_shovel", 
        "repair_diamond_shovel_factory"
      ], 
      "type": "FCC", 
      "name": "Diamond Shovel Smith", 
      "citadelBreakReduction": 1.0
    }, 
    "stone_smelter": {
      "setupcost": {
        "stone": {
          "amount": 512, 
          "material": "STONE"
        }
      }, 
      "recipes": [
        "smelt_stone", 
        "smelt_glass", 
        "smelt_netherrack", 
        "smelt_bricks", 
        "smelt_hard_clay", 
        "repair_stone_smelter"
      ], 
      "type": "FCC", 
      "name": "Basic Smelter", 
      "citadelBreakReduction": 1.0
    }, 
    "ore_smelter": {
      "setupcost": {
        "coal": {
          "amount": 512, 
          "material": "COAL"
        }, 
        "diamond": {
          "amount": 64, 
          "material": "DIAMOND"
        }, 
        "iron": {
          "amount": 256, 
          "material": "IRON_INGOT"
        }
      }, 
      "recipes": [
        "smelt_coal_ore", 
        "smelt_iron_ore", 
        "smelt_diamond_ore", 
        "smelt_gold_ore", 
        "smelt_redstone_ore", 
        "smelt_lapis_ore", 
        "make_refractor", 
        "crack_fossil", 
        "repair_ore_smelter"
      ], 
      "type": "FCC", 
      "name": "Ore Smelter", 
      "citadelBreakReduction": 1.0
    }, 
    "iron_armor": {
      "setupcost": {
        "iron": {
          "amount": 96, 
          "material": "IRON_INGOT"
        }
      }, 
      "recipes": [
        "make_iron_helm", 
        "make_iron_chest", 
        "make_iron_legs", 
        "make_iron_boots", 
        "repair_iron_armor_factory"
      ], 
      "type": "FCC", 
      "name": "Iron Armor Smith", 
      "citadelBreakReduction": 1.0
    }, 
    "dye_wool": {
      "setupcost": {
        "wool": {
          "amount": 32, 
          "material": "WOOL", 
          "durability": -1
        }
      }, 
      "recipes": [
        "dye_wool_white", 
        "dye_wool_orange", 
        "dye_wool_magenta", 
        "dye_wool_light_blue", 
        "dye_wool_yellow", 
        "dye_wool_lime", 
        "dye_wool_pink", 
        "dye_wool_gray", 
        "dye_wool_light_gray", 
        "dye_wool_cyan", 
        "dye_wool_purple", 
        "dye_wool_blue", 
        "dye_wool_brown", 
        "dye_wool_green", 
        "dye_wool_red", 
        "dye_wool_black", 
        "repair_wool"
      ], 
      "type": "FCC", 
      "name": "Wool Dying Factory", 
      "citadelBreakReduction": 1.0
    }, 
    "dye_glass": {
      "setupcost": {
        "glass": {
          "amount": 32, 
          "material": "GLASS"
        }
      }, 
      "recipes": [
        "dye_glass_white", 
        "dye_glass_orange", 
        "dye_glass_magenta", 
        "dye_glass_light_blue", 
        "dye_glass_yellow", 
        "dye_glass_lime", 
        "dye_glass_pink", 
        "dye_glass_gray", 
        "dye_glass_light_gray", 
        "dye_glass_cyan", 
        "dye_glass_purple", 
        "dye_glass_blue", 
        "dye_glass_brown", 
        "dye_glass_green", 
        "dye_glass_red", 
        "dye_glass_black", 
        "repair_glass"
      ], 
      "type": "FCC", 
      "name": "Glass Dying Factory", 
      "citadelBreakReduction": 1.0
    }, 
    "husbandry": {
      "setupcost": {
        "leather": {
          "amount": 32, 
          "material": "LEATHER"
        }, 
        "slime": {
          "amount": 16, 
          "material": "SLIME_BALL"
        }, 
        "iron_block": {
          "amount": 32, 
          "material": "IRON_BLOCK"
        }
      }, 
      "recipes": [
        "make_saddle", 
        "make_lead", 
        "make_bio_component", 
        "repair_husbandry"
      ], 
      "type": "FCC", 
      "name": "Animal Husbandry", 
      "citadelBreakReduction": 1.0
    }, 
    "carpentry": {
      "setupcost": {
        "chest": {
          "amount": 32, 
          "material": "CHEST"
        }
      }, 
      "recipes": [
        "make_fences", 
        "make_signs", 
        "make_ladders", 
        "make_bookshelves", 
        "make_trapdoors", 
        "make_wood_doors", 
        "make_casing", 
        "make_crates", 
        "repair_carpentry"
      ], 
      "type": "FCC", 
      "name": "Carpentry Factory", 
      "citadelBreakReduction": 1.0
    }, 
    "diamond_legs": {
      "setupcost": {
        "diamond": {
          "amount": 256, 
          "material": "DIAMOND"
        }
      }, 
      "recipes": [
        "make_diamond_legs", 
        "repair_diamond_legs_factory"
      ], 
      "type": "FCC", 
      "name": "Diamond Leggings Smith", 
      "citadelBreakReduction": 1.0
    }, 
    "rails": {
      "setupcost": {
        "redstone": {
          "amount": 32, 
          "material": "REDSTONE"
        }, 
        "iron": {
          "amount": 64, 
          "material": "IRON_INGOT"
        }, 
        "gold": {
          "amount": 8, 
          "material": "GOLD_INGOT"
        }
      }, 
      "recipes": [
        "make_rail", 
        "make_powered_rail", 
        "make_detector_rail", 
        "make_minecart", 
        "repair_rails"
      ], 
      "type": "FCC", 
      "name": "Rail Factory", 
      "citadelBreakReduction": 1.0
    }, 
    "bastion_factory": {
      "setupcost": {
        "radar": {
          "lore": [
            "Radar for detecting pearls"
          ], 
          "amount": 32, 
          "material": "COMPASS"
        }, 
        "bio_compoent": {
          "lore": [
            "Bio-Component for bastion"
          ], 
          "amount": 16, 
          "material": "MAGMA_CREAM"
        }, 
        "casing": {
          "lore": [
            "Casing for a bastion"
          ], 
          "amount": 48, 
          "material": "ENDER_CHEST"
        }, 
        "energizer": {
          "lore": [
            "Power source for bastion"
          ], 
          "amount": 32, 
          "material": "EMERALD"
        }, 
        "gearbox": {
          "lore": [
            "Gear mechanism for a bastion"
          ], 
          "amount": 48, 
          "material": "WATCH"
        }, 
        "refractor": {
          "lore": [
            "Refractor for bastion"
          ], 
          "amount": 32, 
          "material": "DIAMOND"
        }
      }, 
      "recipes": [
        "make_bastion", 
        "repair_bastion"
      ], 
      "type": "FCC", 
      "name": "Bastion Factory", 
      "citadelBreakReduction": 1.0
    }, 
    "bio_lab": {
      "setupcost": {
        "sapling": {
          "amount": 32, 
          "material": "SAPLING"
        }, 
        "Dirt!": {
          "amount": 256, 
          "material": "DIRT", 
          "name": "Dirt!"
        }
      }, 
      "recipes": [
        "dirt_to_grass", 
        "dirt_to_podzol", 
        "dirt_to_mycelium", 
        "sapling_to_oak", 
        "sapling_to_spruce", 
        "sapling_to_birch", 
        "sapling_to_jungle", 
        "sapling_to_acacia", 
        "sapling_to_dark_oak", 
        "make_mushroom_brown", 
        "make_mushroom_red", 
        "make_mushroom_stem", 
        "make_mushroom_pores", 
        "repair_bio_lab"
      ], 
      "type": "FCC", 
      "name": "Bio Lab", 
      "citadelBreakReduction": 1.0
    }, 
    "diamond_hoe": {
      "setupcost": {
        "diamond": {
          "amount": 32, 
          "material": "DIAMOND"
        }
      }, 
      "recipes": [
        "make_diamond_hoe", 
        "repair_diamond_hoe_factory"
      ], 
      "type": "FCC", 
      "name": "Diamond Hoe Smith", 
      "citadelBreakReduction": 1.0
    }, 
    "charcoal_factory": {
      "setupcost": {
        "charcoal": {
          "amount": 512, 
          "material": "COAL", 
          "durability": 1
        }
      }, 
      "recipes": [
        "charcoal_from_logs", 
        "charcoal_from_logs_2", 
        "charcoal_from_coal", 
        "repair_charcoal_factory"
      ], 
      "type": "FCC", 
      "name": "Charcoal Maker", 
      "citadelBreakReduction": 1.0
    }, 
    "grill": {
      "setupcost": {
        "stone": {
          "amount": 128, 
          "material": "STONE"
        }, 
        "iron": {
          "amount": 16, 
          "material": "IRON_INGOT"
        }
      }, 
      "recipes": [
        "cook_beef", 
        "cook_pork", 
        "cook_chicken", 
        "cook_mutton", 
        "cook_rabbit", 
        "cook_fish", 
        "cook_salmon", 
        "repair_grill"
      ], 
      "type": "FCC", 
      "name": "Grill", 
      "citadelBreakReduction": 1.0
    }, 
    "intermediate_cauldron": {
      "recipes": [
        "int_xp_1", 
        "int_xp_2", 
        "int_xp_3", 
        "int_xp_4", 
        "make_energizer", 
        "upgrade_to_advanced_cauldron", 
        "repair_intermediate_cauldron"
      ], 
      "type": "FCCUPGRADE", 
      "name": "Intermediate Cauldron", 
      "citadelBreakReduction": 1.0
    }, 
    "advanced_cauldron": {
      "recipes": [
        "adv_xp_1", 
        "adv_xp_2", 
        "adv_xp_3", 
        "adv_xp_4", 
        "make_energizer", 
        "repair_advanced_cauldron"
      ], 
      "type": "FCCUPGRADE", 
      "name": "Advanced Cauldron", 
      "citadelBreakReduction": 1.0
    }, 
    "diamond_helm": {
      "setupcost": {
        "diamond": {
          "amount": 192, 
          "material": "DIAMOND"
        }
      }, 
      "recipes": [
        "make_diamond_helm", 
        "repair_diamond_helm_factory"
      ], 
      "type": "FCC", 
      "name": "Diamond Helmet Smith", 
      "citadelBreakReduction": 1.0
    }, 
    "bakery": {
      "setupcost": {
        "brick": {
          "amount": 64, 
          "material": "CLAY_BRICK"
        }, 
        "log": {
          "amount": 12, 
          "material": "LOG", 
          "durability": -1
        }
      }, 
      "recipes": [
        "bake_bread", 
        "bake_potatoes", 
        "repair_bakery"
      ], 
      "type": "FCC", 
      "name": "Bakery", 
      "citadelBreakReduction": 1.0
    }, 
    "iron_forge": {
      "setupcost": {
        "lava_bucket": {
          "amount": 1, 
          "material": "LAVA_BUCKET"
        }, 
        "iron": {
          "amount": 128, 
          "material": "IRON_INGOT"
        }
      }, 
      "recipes": [
        "make_iron_fence", 
        "make_anvil", 
        "make_bucket", 
        "make_iron_trapdoor", 
        "make_iron_door", 
        "make_tripwire", 
        "make_shears", 
        "make_radar", 
        "repair_forge"
      ], 
      "type": "FCC", 
      "name": "Iron Forge", 
      "citadelBreakReduction": 1.0
    }, 
    "compactor": {
      "setupcost": {
        "redstone_block": {
          "amount": 16, 
          "material": "REDSTONE_BLOCK"
        }, 
        "crate": {
          "lore": [
            "Crate"
          ], 
          "amount": 32, 
          "material": "CHEST"
        }, 
        "iron_block": {
          "amount": 32, 
          "material": "IRON_BLOCK"
        }, 
        "sticky_piston": {
          "amount": 64, 
          "material": "PISTON_STICKY_BASE"
        }
      }, 
      "recipes": [
        "compact", 
        "decompact", 
        "repair_compactor"
      ], 
      "type": "FCC", 
      "name": "Compactor", 
      "citadelBreakReduction": 0.80000000000000004
    }, 
    "diamond_pick": {
      "setupcost": {
        "diamond": {
          "amount": 96, 
          "material": "DIAMOND"
        }
      }, 
      "recipes": [
        "make_diamond_pick", 
        "repair_diamond_pick_factory"
      ], 
      "type": "FCC", 
      "name": "Diamond Pickaxe Smith", 
      "citadelBreakReduction": 1.0
    }, 
    "diamond_axe": {
      "setupcost": {
        "diamond": {
          "amount": 64, 
          "material": "DIAMOND"
        }
      }, 
      "recipes": [
        "make_diamond_axe", 
        "repair_diamond_axe_factory"
      ], 
      "type": "FCC", 
      "name": "Diamond Axe Smith", 
      "citadelBreakReduction": 1.0
    }
  }, 
  "default_fuel_consumption_intervall": "2s", 
  "default_fuel": {
    "charcoal": {
      "material": "COAL", 
      "durability": 1
    }
  }
}
