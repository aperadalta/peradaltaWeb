var assignatures = [
    {
        nom: "Imatge i llenguatge visual",
        pacs: [
            {
                titol: "PAC 1: Comparison",
                link: "https://drive.google.com/file/d/1BUWhGoOgEcDSHpAloE6Hd_ygIS_nxZgT/view?usp=sharing"
            },
            {
                titol: "PAC 2: Mail PCR",
                link: "https://drive.google.com/file/d/1pYwVQcNkAmIKcWsSMN9xMAb3sb0av73C/view?usp=sharing"
            },
            {
                titol: "PAC 3: Fotos amb màscara",
                link: "https://drive.google.com/file/d/1wZpRJjggqT7FB_DEHp8gCavnJhDljqmg/view?usp=sharing"
            },
            {
                titol: "Practica",
                link: "https://drive.google.com/file/d/1wZpRJjggqT7FB_DEHp8gCavnJhDljqmg/view?usp=sharing" //not finished
            }
        ]
    },
    {
        nom: "Arquitectura de la informació",
        pacs: [
            {
                titol: "PAC 1: UX/UI",
                link: "https://drive.google.com/file/d/1bjqn49rAM_NC_9SDJ3cGyD_CmZaLiS63/view?usp=sharing"
            },
            {
                titol: "PAC 2: Arquitecture and Benchmarking",
                link: "https://drive.google.com/file/d/1AnNGaa3pWNMK327YmroJ1op8Kbkw0_wc/view?usp=sharing"
            },
            {
                titol: "PAC 3: Content tree",
                link: "https://drive.google.com/file/d/1q36Ln2NUCkHcvdPJPYaADZoxUKdl9bFO/view?usp=sharing"
            },
            {
                titol: "Pràctica",
                link: "https://drive.google.com/file/d/1PlmN_thLgw60NBNJa5ttNcABoxZHKeOy/view?usp=sharing"
            },
            {
                titol: "PAC 4: Conclusion",
                link: "https://drive.google.com/file/d/1wZpRJjggqT7FB_DEHp8gCavnJhDljqmg/view?usp=sharing" //not finished
            }
        ]
    },
    {
        nom: "Multimèdia",
        pacs: [
            {
                titol: "PAC 1: History of webs and multimedia",
                link: "https://drive.google.com/file/d/1UAmlKUFIDwt7bzal-JTCbOVJmeqHXi6f/view?usp=sharing"
            },
            {
                titol: "PAC 2: Analizing Wikiloc and Word",
                link: "https://drive.google.com/file/d/1czrd7lajPdKmOcCDRIcSHjypkozhquoO/view?usp=sharing"
            },
            {
                titol: "PAC 3: Discussion",
                link: "https://drive.google.com/file/d/1iGJJt1YpQ8hPzQsbMxVV3Ru5veP3Rb-N/view?usp=sharing"
            }
        ]
    },{
        nom: "Narrativa interactiva",
        pacs: [
            {
                titol: "PAC 1: algo",
                link: "https://drive.google.com/file/d/1wZpRJjggqT7FB_DEHp8gCavnJhDljqmg/view?usp=sharing"
            },
            {
                titol: "PAC 2: algo",
                link: "https://drive.google.com/file/d/1wZpRJjggqT7FB_DEHp8gCavnJhDljqmg/view?usp=sharing"
            },
            {
                titol: "PAC 3: algo",
                link: "https://drive.google.com/file/d/1wZpRJjggqT7FB_DEHp8gCavnJhDljqmg/view?usp=sharing"
            },
            {
                titol: "Pràctica",
                link: "https://drive.google.com/file/d/1wZpRJjggqT7FB_DEHp8gCavnJhDljqmg/view?usp=sharing"
            }
        ]
    },{
        nom: "Vídeo",
        pacs: [
            {
                titol: "PAC 1: Ready to start",
                link: "https://www.youtube.com/watch?v=HXEB5AYO8jg"
            },
            {
                titol: "PAC 2: Magic cooking",
                link: "https://youtu.be/aUQmzu-OcYU"
            },
            {
                titol: "PAC 3: Travel (lights)",
                link: "https://youtu.be/eFIyuZ5QDKk"
            },
            {
                titol: "PAC 4: Board gaming",
                link: "https://youtu.be/5BWsmHjWQG0"
            },
            {
                titol: "Pràctica 1: Feelings",
                link: "https://youtu.be/gqNcy-_0D8I"
            },
            {
                titol: "Pràctica 2: Sweet persecution",
                link: "https://youtu.be/t-k6eQkBhcM"
            }
        ]
    },{
        nom: "Anglès I",
        pacs: [
            {
                titol: "C1 Certificate",
                link: "https://drive.google.com/file/d/1LkpPkHS9LnRJljuSEa1ldwYfirtQUiG8/view?usp=sharing"
            }
        ]
    },{
        nom: "Anglès II",
        pacs: [
            {
                titol: "C1 Certificate",
                link: "https://drive.google.com/file/d/1LkpPkHS9LnRJljuSEa1ldwYfirtQUiG8/view?usp=sharing"
            }
        ]
    }
];

var main = document.getElementById("main");

for(let i = 0; i<assignatures.length; i++){
    main.innerHTML += `<section class="square">
                            <h3>${assignatures[i].nom}</h3>
                        </section>`
}

var classes = document.getElementsByClassName("square");

for(let j = 0; j<assignatures.length; j++){
    for(let i = 0; i<assignatures[j].pacs.length; i++){
        classes[j].innerHTML += `<a href="${assignatures[j].pacs[i].link}" target="_#blank"><p>${assignatures[j].pacs[i].titol}</p></a>`
    }
}




