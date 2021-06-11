class MyPageLivret {
    constructor() {
        this.type = "section";
        this.props = { id: "MyDivLivretld", class: "container-fluide mt-3 pt-3 mb-3 pb-3" };
    }
    children = [
        {
            type: "div", props: { id: "", class: "" },
            children: [
                { type: "h1", props: { id: "", class: "h1 text-center" }, children: ["Livret famille Enfants et Petits-Enfants"] },
                { type: "h1", props: { id: "", class: "h1 text-center" }, children: ["De Babacar FASSA & Khoudia THIAM"] },
                { type: "h1", props: { id: "", class: "h1 text-center mb-5" }, children: ["ROSSO-Médine-Mauritanie"] },
                {
                    type: "div", props: { id: "", class: "row" }, children: [
                        // Babacar FASSA
                        {
                            type: "div", props: { id: "", class: "card text-center col-sm-6", style: "" }, children: [
                                {
                                    type: "img", props: {
                                        id: "", class: "card-img-top rounded-circle", alt: "Card image", src: 'mesImages/df1.png'
                                    }, children: []
                                },
                                {
                                    type: "div", props: { id: "", class: "card-body text-justify" }, children: [
                                        { type: "h4", props: { id: "", class: "card-title text-center" }, children: ["Babacar FASSA"] },
                                        {
                                            type: "div", props: { id: "", class: "card-text" }, children: [
                                                { type: "h6", props: { id: "", class: "" }, children: ["Né en 1900"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Décédé en 1971"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Fonctions occupées :"] },
                                                {
                                                    type: "ul", props: { id: "", class: "" }, children: [
                                                        { type: "li", props: { id: "", class: "" }, children: ["Agriculteur"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Eleveur de Moutons et de Chevaux de Race"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Cordonnier- Sellier"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Maréchal ferrant pour les Familles Royales"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Dresseur de Chevaux de Race"] },
                                                    ]
                                                },
                                                {
                                                    type: "div", props: { id: "", class: "" }, children: [
                                                        { type: "p", props: { id: "", class: "" }, children: ["Papi Babacar FASSA était avant tout, un Agriculteur-Eleveur en même temps, un Cordonnier-Sellier pour tout le monde et aussi, un Maréchal ferrant pour les Familles Royales. Il était aussi un Excellent Conseiller - Négociateur Familial."] },
                                                        { type: "p", props: { id: "", class: "" }, children: ["Son activité principale d’agro-pastoralisme lui permettait d’entretenir et de nourrir sa famille au sens large et, l’élevage des chevaux était une passion personnelle en dehors de ses déplacements."] },
                                                        { type: "p", props: { id: "", class: "" }, children: ["Le cheptel de moutons qu’il élevait chez lui, en plus de ses chevaux de race lui permettait d’avoir une organisation rigoureuse et une disponibilité permanente."] },
                                                        { type: "p", props: { id: "", class: "" }, children: ["Le respect et le travail bien fait étaient sa devise Il contrôlait au quotidien l’état de santé de son cheptel et de ses des chevaux et il lui arrivait de pratiquer des soins courants (pansage, traitements antiparasitaires…) de son bétail."] },
                                                        { type: "p", props: { id: "", class: "" }, children: ["Il accordait une bienveillance quasi parfaite à toute la famille, réglait les différents dans sa famille, dans le quartier et dans les villages où vivaient les autres membres de la grande famille. Sa Rigueur, son Sens de la Bonne éducation à donner coute que coute à ses enfants, neveux, nièces fut l’essence même de sa vie. Il veillait particulièrement sur toute la famille dans les différents quartiers et, savait à tout instant qui ne respectait pas les règles familiales et en cas de manquement, il réagissait vigoureusement avec force au quart de tour."] },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // Koudia Thiam
                        {
                            type: "div", props: { id: "", class: "card text-center col-sm-6", style: "" }, children: [
                                {
                                    type: "img", props: {
                                        id: "", class: "card-img-top rounded-circle", alt: "Card image", src: 'mesImages/df2.png'
                                    }, children: []
                                },
                                {
                                    type: "div", props: { id: "", class: "card-body text-justify" }, children: [
                                        { type: "h4", props: { id: "", class: "card-title text-center" }, children: ["Khoudia THIAM"] },
                                        {
                                            type: "div", props: { id: "", class: "card-text" }, children: [
                                                { type: "h6", props: { id: "", class: "" }, children: ["Né en 1912"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Décédée en 2000"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Fonctions occupées :"] },
                                                {
                                                    type: "ul", props: { id: "", class: "" }, children: [
                                                        { type: "li", props: { id: "", class: "" }, children: ["Tisseuse"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Tresseuse (Nattes, coiffures traditionnelles)"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Eleveuse de moutons, elle avait hérité de son père des troupeaux de vaches"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Marchande de fruits et légumes"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Marchande d’encens, Thiouraye"] },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        { type: "h1", props: { id: "", class: "h1 text-center border border-dark rounded col-sm-12 mt-5 mb-5" }, children: ["Les enfants de Khoudia THIAM & Babacar FASSA"] },
                        // Penda FASSA
                        {
                            type: "div", props: { id: "", class: "card text-center col-sm-4", style: "" }, children: [
                                {
                                    type: "img", props: {
                                        id: "", class: "card-img-top rounded-circle", alt: "Card image", src: 'mesImages/df3.png'
                                    }, children: []
                                },
                                {
                                    type: "div", props: { id: "", class: "card-body text-justify" }, children: [
                                        { type: "h4", props: { id: "", class: "card-title text-center" }, children: ["Penda FASSA"] },
                                        {
                                            type: "div", props: { id: "", class: "card-text" }, children: [
                                                { type: "h6", props: { id: "", class: "" }, children: ["Né en 1934"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Fonctions occupées :"] },
                                                {
                                                    type: "ul", props: { id: "", class: "" }, children: [
                                                        { type: "li", props: { id: "", class: "" }, children: ["Femme au foyer"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Marchande encens artisanal : Thiouraye- Gawé"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Femme de ménage"] },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // Mamadou FASSA
                        {
                            type: "div", props: { id: "", class: "card text-center col-sm-4", style: "" }, children: [
                                {
                                    type: "img", props: {
                                        id: "", class: "card-img-top rounded-circle", alt: "Card image", src: 'mesImages/df4.png'
                                    }, children: []
                                },
                                {
                                    type: "div", props: { id: "", class: "card-body text-justify" }, children: [
                                        { type: "h4", props: { id: "", class: "card-title text-center" }, children: ["Mamadou FASSA"] },
                                        {
                                            type: "div", props: { id: "", class: "card-text" }, children: [
                                                { type: "h6", props: { id: "", class: "" }, children: ["Né en 1937"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Diplômé de l’Ecole Normale de Wiliam Ponty Dakar Sénégal"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Fonctions occupées : Enseignant- Chef d’établissement"] },
                                                {
                                                    type: "ul", props: { id: "", class: "" }, children: [
                                                        { type: "li", props: { id: "", class: "" }, children: ["Instituteur"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Professeur Anglais- Français/Histoire Géographie"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Chef d’Établissement Directeur /Principal Collège Rosso"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Proviseur Adjoint Lycée Rosso"] },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // Fat sellé Fassa
                        {
                            type: "div", props: { id: "", class: "card text-center col-sm-4", style: "" }, children: [
                                {
                                    type: "img", props: {
                                        id: "", class: "card-img-top rounded-circle", alt: "Card image", src: 'mesImages/img_avatar1.png'
                                    }, children: []
                                },
                                {
                                    type: "div", props: { id: "", class: "card-body text-justify" }, children: [
                                        { type: "h4", props: { id: "", class: "card-title text-center" }, children: ["Fat sellé FASSA"] },
                                        {
                                            type: "div", props: { id: "", class: "card-text" }, children: [
                                                { type: "h6", props: { id: "", class: "" }, children: ["Né en 1939"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Décédée en 1958 et sans enfants"] },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // Saer Fassa
                        {
                            type: "div", props: { id: "", class: "card text-center col-sm-4", style: "" }, children: [
                                {
                                    type: "img", props: {
                                        id: "", class: "card-img-top rounded-circle", alt: "Card image", src: 'mesImages/df6.png'
                                    }, children: []
                                },
                                {
                                    type: "div", props: { id: "", class: "card-body text-justify" }, children: [
                                        { type: "h4", props: { id: "", class: "card-title text-center" }, children: ["Saer FASSA"] },
                                        {
                                            type: "div", props: { id: "", class: "card-text" }, children: [
                                                { type: "h6", props: { id: "", class: "" }, children: ["Né en 1942"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Décédé en 1995"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Fonctions occupées :"] },
                                                {
                                                    type: "ul", props: { id: "", class: "" }, children: [
                                                        { type: "li", props: { id: "", class: "" }, children: ["Soudeur à la CSS/SAED"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Agent administratif-Facteur à la CSS"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Artisan ferrailleur à Rosso"] },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // Amineta Fassa
                        {
                            type: "div", props: { id: "", class: "card text-center col-sm-4", style: "" }, children: [
                                {
                                    type: "img", props: {
                                        id: "", class: "card-img-top rounded-circle", alt: "Card image", src: 'mesImages/img_avatar1.png'
                                    }, children: []
                                },
                                {
                                    type: "div", props: { id: "", class: "card-body text-justify" }, children: [
                                        { type: "h4", props: { id: "", class: "card-title text-center" }, children: ["Amineta FASSA"] },
                                        {
                                            type: "div", props: { id: "", class: "card-text" }, children: [
                                                { type: "h6", props: { id: "", class: "" }, children: ["Né en 1944"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Décédée trés jeune et sans enfants"] },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // Yerim Fassa
                        {
                            type: "div", props: { id: "", class: "card text-center col-sm-4", style: "" }, children: [
                                {
                                    type: "img", props: {
                                        id: "", class: "card-img-top rounded-circle", alt: "Card image", src: 'mesImages/df7.png'
                                    }, children: []
                                },
                                {
                                    type: "div", props: { id: "", class: "card-body text-justify" }, children: [
                                        { type: "h4", props: { id: "", class: "card-title text-center" }, children: ["Yerim FASSA"] },
                                        {
                                            type: "div", props: { id: "", class: "card-text" }, children: [
                                                { type: "h6", props: { id: "", class: "" }, children: ["Né en 1946"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Diplômé de l’Ecole de Santé Militaire de Dakar SENEGAL et du Val de Grace FRANCE, des Universités Paris 5 et 6"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Fonctions occupées : Médecin militaire Cardiologue-Pneumologue"] },
                                                {
                                                    type: "ul", props: { id: "", class: "" }, children: [
                                                        { type: "li", props: { id: "", class: "" }, children: ["Médecin-chef Infirmerie militaire"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Directeur santé hôpital Militaire"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Professeur Agrégé Médecine Hôpital Militaire du Val-De-Grace Paris"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Maire de Rosso"] },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // Abdou Fassa
                        {
                            type: "div", props: { id: "", class: "card text-center col-sm-4", style: "" }, children: [
                                {
                                    type: "img", props: {
                                        id: "", class: "card-img-top rounded-circle", alt: "Card image", src: 'mesImages/df8.png'
                                    }, children: []
                                },
                                {
                                    type: "div", props: { id: "", class: "card-body text-justify" }, children: [
                                        { type: "h4", props: { id: "", class: "card-title text-center" }, children: ["Abdou FASSA"] },
                                        {
                                            type: "div", props: { id: "", class: "card-text" }, children: [
                                                { type: "h6", props: { id: "", class: "" }, children: ["Né en 1950"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Diplômé de l’Ecole de Santé Militaire de Rabat MAROC, des Universités Paris 5 et 6"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Fonctions occupées : Médecin militaire Radiologue"] },
                                                {
                                                    type: "ul", props: { id: "", class: "" }, children: [
                                                        { type: "li", props: { id: "", class: "" }, children: ["Médecin Militaire Hôpital Militaire de Rabat"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Médecin chef hôpital militaire"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Radiologue hôpital militaire"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Spécialiste Imagerie Médicale"] },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // Oumar Fassa
                        {
                            type: "div", props: { id: "", class: "card text-center col-sm-4", style: "" }, children: [
                                {
                                    type: "img", props: {
                                        id: "", class: "card-img-top rounded-circle", alt: "Card image", src: 'mesImages/img_avatar1.png'
                                    }, children: []
                                },
                                {
                                    type: "div", props: { id: "", class: "card-body text-justify" }, children: [
                                        { type: "h4", props: { id: "", class: "card-title text-center" }, children: ["Oumar FASSA"] },
                                        {
                                            type: "div", props: { id: "", class: "card-text" }, children: [
                                                { type: "h6", props: { id: "", class: "" }, children: ["Né en 1952"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Décédé en 1964 à l’âge de 12 ans à Thiès au Sénégal des séquelles de méningite cérébrospinale compliquées d’une hydrocéphalie"] },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // Maniane Fassa
                        {
                            type: "div", props: { id: "", class: "card text-center col-sm-4", style: "" }, children: [
                                {
                                    type: "img", props: {
                                        id: "", class: "card-img-top rounded-circle", alt: "Card image", src: 'mesImages/df10.png'
                                    }, children: []
                                },
                                {
                                    type: "div", props: { id: "", class: "card-body text-justify" }, children: [
                                        { type: "h4", props: { id: "", class: "card-title text-center" }, children: ["Maniane FASSA"] },
                                        {
                                            type: "div", props: { id: "", class: "card-text" }, children: [
                                                { type: "h6", props: { id: "", class: "" }, children: ["Né en 1957"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Diplômé Institut Agronomique et Vétérinaire de Rabat MAROC, des Universités Paris 7 et 11"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Fonctions occupées : Ingénieur  Génie Rural/Civil- Docteur Ingénieur en Physique Théorique"] },
                                                { type: "h6", props: { id: "", class: "" }, children: ["Docteur mathématiques Option Statistiques. Mater 2  Epidémiologie"] },
                                                {
                                                    type: "ul", props: { id: "", class: "" }, children: [
                                                        { type: "li", props: { id: "", class: "" }, children: ["Ingénieur  Génie Rural/Civil"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Professeur et Chef de Filière Mathématiques à l’ISS"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Statisticien biomédical"] },
                                                        { type: "li", props: { id: "", class: "" }, children: ["Epidémiologiste pour le les Nations Unies (UNICEF, PNUD, Fonds Mondial et UNESCO)"] },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },

                        { type: "h1", props: { id: "", class: "h1 text-center border border-dark rounded col-sm-12 mt-5 mb-5" }, children: ["Les petits enfants de Khoudia THIAM & Babacar FASSA"] },
                        // Les petits enfants
                        // EUTOU KEUR Penda FASSA
                        {
                            type: "div", props: { id: "", class: "table-responsive" }, children: [
                                { type: "h3", props: { id: "", class: "" }, children: ["1.EUTOU KEUR Penda FASSA"] },
                                {
                                    type: "table", props: { id: "", class: "table table-striped table-bordered table-hover" }, children: [
                                        // Header Table
                                        { type: "thead", props: { id: "", class: "thead-dark" }, children: [] },
                                        {
                                            type: "tr", props: { id: "", class: "" }, children: [
                                                { type: "th", props: { id: "", class: "" }, children: ["Epoux"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Assane Sogue"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Alioune Mar"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Medou Dièye"] },
                                            ]
                                        },
                                        // Body table
                                        {
                                            type: "tbody", props: { id: "", class: "" }, children: [
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["Enfants (10) + Domiciliation"] },
                                                        { type: "td", props: { id: "", class: "" }, children: [" Alioune SOGUE (SOGO), Denver-USA"] },
                                                        {
                                                            type: "td", props: { id: "", class: "" }, children: [
                                                                { type: "div", props: { id: "", class: "" }, children: ["Yoni MAR, Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Seyni MAR, Paris-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Ndèye Khoudia MAR, Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Amadou Thiam MAR (Ndiol), Paris-France"] },
                                                            ]
                                                        },
                                                        {
                                                            type: "td", props: { id: "", class: "" }, children: [
                                                                { type: "div", props: { id: "", class: "" }, children: ["Seynabou DIEYE, Rosso Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Sokhna DIEYE (Mao), Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Mamadou DIEYE, Baltimore-USA"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Fathiam DIEYE (Thioya), Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Babacar DIEYE (Baye DIEYE), Baltimore-USA"] },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // EUTOU KEUR Mamadou FASSA
                        {
                            type: "div", props: { id: "", class: "table-responsive mt-5" }, children: [
                                { type: "h3", props: { id: "", class: "" }, children: ["2.EUTOU KEUR Mamadou FASSA"] },
                                {
                                    type: "table", props: { id: "", class: "table table-striped table-bordered table-hover" }, children: [
                                        // Header Table
                                        { type: "thead", props: { id: "", class: "thead-dark" }, children: [] },
                                        {
                                            type: "tr", props: { id: "", class: "" }, children: [
                                                { type: "th", props: { id: "", class: "" }, children: ["Epoux"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Marie Lopy FASSA, Rosso-Mauritanie"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Astou Mar GAYE, Rosso-Mauritanie"] },
                                            ]
                                        },
                                        // Body table
                                        {
                                            type: "tbody", props: { id: "", class: "" }, children: [
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["Enfants (20) + Domiciliation"] },
                                                        {
                                                            type: "td", props: { id: "", class: "" }, children: [
                                                                { type: "div", props: { id: "", class: "" }, children: ["Cheikh Tidiane FASSA, Campremy-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Samba FASSA, Madrid-Espagne"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Fatou Selé FASSA, Rosso-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Oumar FASSA, Paris-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Penda FASSA, Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Marèma FASSA, Paris-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Abderrahmane FASSA, Paris-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Mawdo FASSA, Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Amar FASSA, Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Sekhane FASSA, Minéapolis-USA"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Fama FASSA (Fama tall), Nktt-Mauritanie"] },
                                                            ]
                                                        },
                                                        {
                                                            type: "td", props: { id: "", class: "" }, children: [
                                                                { type: "div", props: { id: "", class: "" }, children: ["Babacar FASSA (Ndiass), Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Khoudia FASSA, Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Marie FASSA, Paris-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Amineta FASSA (Amineta Mar),  Paris-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Ndeye FASSA (Ndeye Gaye), Rosso-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Maniane FASSA, Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Fatouyatma FASSA, Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Abdou FASSA, Paris-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Aicha FASSA, Dakar-Senegal"] },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // EUTOU KEUR Saer FASSA
                        {
                            type: "div", props: { id: "", class: "table-responsive mt-5" }, children: [
                                { type: "h3", props: { id: "", class: "" }, children: ["3.EUTOU KEUR Saer FASSA"] },
                                {
                                    type: "table", props: { id: "", class: "table table-striped table-bordered table-hover" }, children: [
                                        // Header Table
                                        { type: "thead", props: { id: "", class: "thead-dark" }, children: [] },
                                        {
                                            type: "tr", props: { id: "", class: "" }, children: [
                                                { type: "th", props: { id: "", class: "" }, children: ["Epoux"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Dior DIEYE, Rosso-Mauritanie"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Coumba Nor Diassé, Nktt-Mauritanie"] },
                                            ]
                                        },
                                        // Body table
                                        {
                                            type: "tbody", props: { id: "", class: "" }, children: [
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["Enfants (10) + Domiciliation"] },
                                                        {
                                                            type: "td", props: { id: "", class: "" }, children: [
                                                                { type: "div", props: { id: "", class: "" }, children: ["Rokhaya FASSA, Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Alioune FASSA (Diaks), Rosso-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Amineta FASSA, Rosso-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Awa FASSA, Dakar-Senegal"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Atta FASSA (Atta Mar), Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Babacar FASSA (Baye Fassa), Lyon-France"] },
                                                            ]
                                                        },
                                                        {
                                                            type: "td", props: { id: "", class: "" }, children: [
                                                                { type: "div", props: { id: "", class: "" }, children: ["Dior FASSA, Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Mbenda FASSA, Riachartol-Senegal"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Maguette FASSA, Riachartol-Senegal"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Goumba FASSA,  Nktt-Mauritaniee"] },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // EUTOU KEUR Yerim FASSA
                        {
                            type: "div", props: { id: "", class: "table-responsive mt-5" }, children: [
                                { type: "h3", props: { id: "", class: "" }, children: ["4.EUTOU KEUR Yerim FASSA"] },
                                {
                                    type: "table", props: { id: "", class: "table table-striped table-bordered table-hover" }, children: [
                                        // Header Table
                                        { type: "thead", props: { id: "", class: "thead-dark" }, children: [] },
                                        {
                                            type: "tr", props: { id: "", class: "" }, children: [
                                                { type: "th", props: { id: "", class: "" }, children: ["Epoux"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Oumy Kaloga, Nktt-Mauritanie"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Ndèye Ouley Diop, Paris-France"] },
                                            ]
                                        },
                                        // Body table
                                        {
                                            type: "tbody", props: { id: "", class: "" }, children: [
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["Enfants (7) + Domiciliation"] },
                                                        {
                                                            type: "td", props: { id: "", class: "" }, children: [
                                                                { type: "div", props: { id: "", class: "" }, children: ["Cheikh FASSA, Ohio-USA"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Bacar FASSA (Ndiass), Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Saer FASSA, Nktt-Mauritanie"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Khoudia FASSA (Mame), Nktt-Mauritanie"] },
                                                            ]
                                                        },
                                                        {
                                                            type: "td", props: { id: "", class: "" }, children: [
                                                                { type: "div", props: { id: "", class: "" }, children: ["Anta FASSA, Paris-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Mame Touti FASSA, Paris-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Mohamed FASSA, Paris-France"] },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // EUTOU KEUR Abdou FASSA
                        {
                            type: "div", props: { id: "", class: "table-responsive mt-5" }, children: [
                                { type: "h3", props: { id: "", class: "" }, children: ["5.EUTOU KEUR Abdou FASSA"] },
                                {
                                    type: "table", props: { id: "", class: "table table-striped table-bordered table-hover" }, children: [
                                        // Header Table
                                        { type: "thead", props: { id: "", class: "thead-dark" }, children: [] },
                                        {
                                            type: "tr", props: { id: "", class: "" }, children: [
                                                { type: "th", props: { id: "", class: "" }, children: ["Epoux"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Hakima, Paris-France"] },
                                            ]
                                        },
                                        // Body table
                                        {
                                            type: "tbody", props: { id: "", class: "" }, children: [
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["Enfants (2) + Domiciliation"] },
                                                        {
                                                            type: "td", props: { id: "", class: "" }, children: [
                                                                { type: "div", props: { id: "", class: "" }, children: ["Yerim FASSA (Yerim Arabe), Montréal-Canada"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Hanane FASSA, Paris-France"] },

                                                            ]
                                                        },

                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        // EUTOU KEUR Maniane FASSA
                        {
                            type: "div", props: { id: "", class: "table-responsive mt-5" }, children: [
                                { type: "h3", props: { id: "", class: "" }, children: ["6.EUTOU KEUR Maniane FASSA"] },
                                {
                                    type: "table", props: { id: "", class: "table table-striped table-bordered table-hover" }, children: [
                                        // Header Table
                                        { type: "thead", props: { id: "", class: "thead-dark" }, children: [] },
                                        {
                                            type: "tr", props: { id: "", class: "" }, children: [
                                                { type: "th", props: { id: "", class: "" }, children: ["Epoux"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Rose SALL, Paris-France"] },
                                            ]
                                        },
                                        // Body table
                                        {
                                            type: "tbody", props: { id: "", class: "" }, children: [
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["Enfants (3) + Domiciliation"] },
                                                        {
                                                            type: "td", props: { id: "", class: "" }, children: [
                                                                { type: "div", props: { id: "", class: "" }, children: ["Mamadou FASSA, Paris-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Penda FASSA, Paris-France"] },
                                                                { type: "div", props: { id: "", class: "" }, children: ["Samba Lamsar FASSA, Paris-France"] },

                                                            ]
                                                        },

                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },

                        { type: "h1", props: { id: "", class: "h1 text-center border border-dark rounded col-sm-12 mt-5 mb-5" }, children: ["Les Tokoros de khoudia THIAME à compléter"] },
                        {
                            type: "div", props: { id: "", class: "table-responsive mt-5" }, children: [
                                {
                                    type: "table", props: { id: "", class: "table table-striped table-bordered table-hover" }, children: [
                                        // Header Table
                                        { type: "thead", props: { id: "", class: "thead-dark" }, children: [] },
                                        {
                                            type: "tr", props: { id: "", class: "" }, children: [
                                                { type: "th", props: { id: "", class: "" }, children: ["Tokoro"] },
                                                { type: "th", props: { id: "", class: "" }, children: ["Parent"] },
                                            ]
                                        },
                                        // Body table
                                        {
                                            type: "tbody", props: { id: "", class: "" }, children: [
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["1. Khoudia FASSA"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Feu Samba FASSA"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["2. Khoudia MAR"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Penda Fassa"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["3. Khoudia FASSA"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Mamadou FASSA"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["4. Khoudia FASSA"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Yerim FASSA"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["5. Khoudia DIEYE"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Babacar DIEYE"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["6. Khoudia THIAM"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Medièye THIAM"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["7. Khoudia MBODJ"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Aziz MBODJ"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["8. Khoudia SARR"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Makha SARR"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["9. Khoudia BA"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Coumba et Samba BA"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["10. Khoudia FALL"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Feu Babacar FALL"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["11. Khoudia"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Keur dièry ?????"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["12. Khoudia THIAM"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Mame fatou DIOUM et Doud THIAM"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["13. Khoudia"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Samba Peul"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["14. Khoudia BOYE"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Mor BOYE"] },

                                                    ]
                                                },
                                                {
                                                    type: "tr", props: { id: "", class: "" }, children: [
                                                        { type: "td", props: { id: "", class: "" }, children: ["15. Khoudia"] },
                                                        { type: "td", props: { id: "", class: "" }, children: ["Keur Niadanne ?????"] },

                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
    ]
}

export { MyPageLivret };