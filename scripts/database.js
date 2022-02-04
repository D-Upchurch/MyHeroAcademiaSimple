const database = {
    students: [{
        id: 1,
        name: "Yuga Aoyama",
        heroName: "Can't Stop Twinkling",
        quirk: "Navel Laser",
        quirkDescription: "Navel Laser gives the user the ability to fire sparkly twinkling laser beams from their navel.",
        class: "1-A",
        image: "Aoyama.png"
    }, {
        id: 2,
        name: "Mina Ashido",
        heroName: "Pinky",
        quirk: "Acid",
        quirkDescription: "Acid allows the user to create corrosive liquid from their skin, with it being naturally resistant to the acid they produce.",
        class: "1-A",
        image: "mina.png"
    }, {
        id: 3,
        name: "Tsuyu Asui",
        heroName: "Froppy",
        quirk: "Frog",
        quirkDescription: "Frog includes frog-like anatomy, great leg strength, wall clinging, a powerful extending tongue, camouflaging, fast swimming, and secreting mucus with different effects like paralysis and hiding scent.",
        class: "1-A",
        image: "asui.png"
    }, {
        id: 4,
        name: "Tenya Ida",
        heroName: "Ingenium",
        quirk: "Engine",
        quirkDescription: "Engine grants the user engine-like protrusions somewhere on their bodies that allow them to move at extraordinary speeds.",
        class: "1-A",
        image: "tenya.png"
    }, {
        id: 5,
        name: "Ochaco Uraraka",
        heroName: "Uravity",
        quirk: "Zero Gravity",
        quirkDescription: "Zero Gravity allows the user to remove the effects of gravity from solid things upon touching them with the pads on their fingertips.",
        class: "1-A",
        image: "uraraka.png"
    }, {
        id: 6,
        name: "Mashirao Ojiro",
        heroName: "Tailman",
        quirk: "Tail",
        quirkDescription: "Tail grants the user a prehensile appendage that extends from their lower posterior.",
        class: "1-A",
        image: "ojiro.png"
    }, {
        id: 7,
        name: "Denki Kaminari",
        heroName: "Chargebolt",
        quirk: "Electrification",
        quirkDescription: "Electrification gives the user the ability to charge in electricity and emit it out of their body as a sort of protective aura that electrocutes anyone through contact.",
        class: "1-A",
        image: "kaminari.png"
    }, {
        id: 8,
        name: "Eijiro Kirishima",
        heroName: "Red Riot",
        quirk: "Hardening",
        quirkDescription: "Hardening gives the user the power to harden any part of their body. The Quirk protects them from most physical threats.",
        class: "1-A",
        image: "kirishima.png"
    }, {
        id: 9,
        name: "Koji Koda",
        heroName: "Anima",
        quirk: "Anivoice",
        quirkDescription: "Anivoice allows the user to communicate with and command animals through speech.",
        class: "1-A",
        image: "koda.png"
    }, {
        id: 10,
        name: "Rikido Sato",
        heroName: "Sugarman",
        quirk: "Sugar Rush",
        quirkDescription: "Sugar Rush allows the user to multiply their strength five-fold for three minutes for every ten grams of sugar they ingest.",
        class: "1-A",
        image: "sato.png"
    }, {
        id: 11,
        name: "Mezo Shoji",
        heroName: "Tentacole",
        quirk: "Dupli-Arms",
        quirkDescription: "Dupli-Arms grants the user a set of arm-like tentacles adjacent to their arms that can transform into duplicates of their other body parts.",
        class: "1-A",
        image: "shoji.png"
    }, {
        id: 12,
        name: "Kyoka Jiro",
        heroName: "Earphone Jack",
        quirk: "Earphone Jack",
        quirkDescription: "Earphone Jack grants its users long, controllable earlobes that work like headphone cables.",
        class: "1-A",
        image: "jiro.png"
    }, {
        id: 13,
        name: "Hanta Sero",
        heroName: "Cellophane",
        quirk: "Tape",
        quirkDescription: "Tape allows the user to eject adhesive tape from openings located on both of their elbows.",
        class: "1-A",
        image: "sero.png"
    }, {
        id: 14,
        name: "Fumikage Tokoyami",
        heroName: "Tsukuyomi",
        quirk: "Dark Shadow",
        quirkDescription: "Dark Shadow grants the user a shadowy, monster-like being from within his body that he can materialize and de-materialize at will.",
        class: "1-A",
        image: "tokoyami.png"
    }, {
        id: 15,
        name: "Shoto Todoroki",
        heroName: "Shoto",
        quirk: "Half-Cold Half-Hot",
        quirkDescription: "Half-Cold Half-Hot allows the user to generate ice, frost, and cold from the right side of their body and fire, flames, and heat from the left.",
        class: "1-A",
        image: "todoroki.png"
    }, {
        id: 16,
        name: "Toru Hagakure",
        heroName: "Invisible Girl",
        quirk: "Invisibility",
        quirkDescription: "Invisibility grants the user a completely invisible body.",
        class: "1-A",
        image: "hagakure.png"
    }, {
        id: 17,
        name: "Katsuki Bakugo",
        heroName: "Great Explosion Murder God Dynamight",
        quirk: "Explosion",
        quirkDescription: "Explosion allows the user to excrete nitroglycerin-like sweat from their palms and ignite it at will to create explosions of various sizes.",
        class: "1-A",
        image: "bakugo.png"
    }, {
        id: 18,
        name: "Izuku Midoriya",
        heroName: "Deku",
        quirk: "One For All",
        quirkDescription: "One For All is a transferable Quirk that can be passed on from one user to the next. One For All also allows the user to stockpile an enormous amount of raw power, allowing them to significantly enhance all of their physical abilities to a superhuman level.",
        class: "1-A",
        image: "deku.png"
    }, {
        id: 19,
        name: "Minoru Mineta",
        heroName: "Grape Juice",
        quirk: "Pop Off",
        quirkDescription: "Pop Off allows the user to produce sticky spheres from their head that they can pluck painlessly.",
        class: "1-A",
        image: "mineta.png"
    }, {
        id: 20,
        name: "Momo Yaoyorozu",
        heroName: "Creati",
        quirk: "Creation",
        quirkDescription: "Creation allows the user to materialize different objects, such as weapons and tools, from any part of their body.",
        class: "1-A",
        image: "yaoyorozu.png"
    }],
    pros: [{
        id: 1,
        name: "Toshinori Yagi",
        heroName: "All Might",
        quirk: "One For All",
        quirkDescription: "One For All is a transferable Quirk that can be passed on from one user to the next. One For All also allows the user to stockpile an enormous amount of raw power, allowing them to significantly enhance all of their physical abilities to a superhuman level.",
        image: "all-might.png"
    }, {
        id: 2,
        name: "Enji Todoroki",
        heroName: "Endeavor",
        quirk: "Hellflame",
        quirkDescription: "Hellflame is an extremely powerful Quirk that gives the user pyrokinetic abilities.",
        image: "endeavor.png"
    }, {
        id: 3,
        name: "Keigo Takami",
        heroName: "Hawks",
        quirk: "Fierce Wings",
        quirkDescription: "Fierce Wings grants the user two large, red wings made up of dozens of feathers. They can freely manipulate each individual feather using their mind.",
        image: "hawks.png"
    }, {
        id: 4,
        name: "Shota Aizawa",
        heroName: "Eraser Head",
        quirk: "Erasure",
        quirkDescription: "Erasure allows the user to cancel out the Quirk of anyone they look at.",
        image: "aizawa.png"
    }, {
        id: 5,
        name: "Hizashi Yamada",
        heroName: "Present Mic",
        quirk: "Voice",
        quirkDescription: "Voice allows the user to increase the volume of their voice, giving them the ability to create loud, high-pitched sounds.",
        image: "present-mic.png"
    }, {
        id: 6,
        name: "Tsunagu Hakamada",
        heroName: "Best Jeanist",
        quirk: "Fiber Master",
        quirkDescription: "Fiber Master allows the user to freely control fiber.",
        image: "jeanist.png"
    }, {
        id: 7,
        name: "Yu Takeyama",
        heroName: "Mt. Lady",
        quirk: "Gigantification",
        quirkDescription: "Gigantification allows its user to drastically increase their size to gigantic levels.",
        image: "mt-lady.png"
    }, {
        id: 8,
        name: "Shinji Nishiya",
        heroName: "Kamui Woods",
        quirk: "Arbor",
        quirkDescription: "Arbor allows the user to generate and control wood from any part of their body.",
        image: "kamui.png"
    }, {
        id: 9,
        name: "Ken Ishiyama",
        heroName: "Cementoss",
        quirk: "Cement",
        quirkDescription: "Cement gives the user the ability to manipulate cement-based material simply by being in contact with the surface.",
        image: "cementoss.png"
    }, {
        id: 10,
        name: "Anan Kurose",
        heroName: "Thirteen",
        quirk: "Black Hole",
        quirkDescription: "Black Hole allows the user to create small black holes through their fingers.",
        image: "thirteen.png"
    }],
    villains: [{
        id: 1,
        name: "Shigaraki",
        villainName: "All For One",
        quirk: "All For One",
        quirkDescription: "All For One allows the user to steal the Quirks of other people and wield those stolen powers as their own. It also allows the user to redistribute stolen Quirks to someone else.",
        image: "all-for-one.png"
    }, {
        id: 2,
        name: "Tenko Shimura",
        villainName: "Tomura Shigaraki",
        quirk: "Decay",
        quirkDescription: "Decay allows the user to destroy anything their hands touch, making it crumble to dust.",
        image: "shigaraki.png"
    }, {
        id: 3,
        name: "Toya Todoroki",
        villainName: "Dabi",
        quirk: "Cremation",
        quirkDescription: "The user can ignite blue fire anywhere on their body with minimal effort or movement almost instantaneously. ",
        image: "dabi.png"
    }, {
        id: 4,
        name: "Jin Bubaigawara",
        villainName: "Twice",
        quirk: "Double",
        quirkDescription: "Double allowed the user to create a copy of anything, two at a time, through touch.",
        image: "twice.png"
    }, {
        id: 5,
        name: "Oboro Shirakumo",
        villainName: "Kurogiri",
        quirk: "Warp Gate",
        quirkDescription: "Using this Quirk, the user can create and manipulate a dark fog that acts as a portal.",
        image: "Kurogiri.png"
    }, {
        id: 6,
        name: "Shuichi Iguchi",
        villainName: "Spinner",
        quirk: "Gecko",
        quirkDescription: "Gecko grants the user a reptilian appearance and the ability to cling onto walls and other sheer surfaces.",
        image: "spinner.png"
    }, {
        id: 7,
        name: "Atsuhiro Sako",
        villainName: "Mr. Compress",
        quirk: "Compress",
        quirkDescription: "Compress allows the user to shrink down anything inside a spherical area into a small marble without actually damaging it.",
        image: "compress.png"
    }, {
        id: 8,
        name: "Gigantomachia",
        villainName: "Gigantomachia",
        quirk: "Endurance, Pain Blocker, Gigantification, Dog, Energy Saver, Fierce Gains, Mole",
        quirkDescription: "Gigantomachia's third Quirk allows him to grow to gigantic sizes the more he is agitated or excited.",
        image: "Gigantomachia.png"
    }, {
        id: 9,
        name: "Chizome Akaguro",
        villainName: "Stain",
        quirk: "Bloodcurdle",
        quirkDescription: "Bloodcurdle allows the user to temporarily paralyze an opponent by ingesting samples of their blood.",
        image: "stain.png"
    }, {
        id: 10,
        name: "Kai Chisaki",
        villainName: "Overhaul",
        quirk: "Overhaul",
        quirkDescription: "Overhaul gives the user the ability to disassemble and then reassemble matter with their bare hands.",
        image: "overhaul.png"
    }]
}

export const getStudents = () => {
    return database.students.map(student => ({ ...student }))
};

export const getPros = () => {
    return database.pros.map(pro => ({ ...pro }))
};

export const getVillains = () => {
    return database.villains.map(villain => ({ ...villain }))
};