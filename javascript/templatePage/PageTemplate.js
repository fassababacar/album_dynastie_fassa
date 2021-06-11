import { Render } from './PageRenderHtml.js';
class DomClass {
    constructor() {
        this.myHostName = 'http://' + window.location.host;
    }
    NavForm = []
    async FunctionNavigate(ObjNav, id) {
        var MyContainerId = document.querySelector("#MyDivId");
        var nodes = MyContainerId.querySelectorAll("section");
        nodes.forEach(VarNode => {
            if (VarNode.id != id) {
                this.NavForm[VarNode.id] = VarNode;
                MyContainerId.removeChild(VarNode);
            }
        });
        if (typeof this.NavForm[id] !== "undefined") {
            MyContainerId.append(this.NavForm[id]);
            return;
        }
        const ObjNavAwait = await import(ObjNav);
        const ObjNavInstance = new ObjNavAwait[id]();
        const MyForm = Render(ObjNavInstance);
        this.NavForm[id] = MyForm;
        MyContainerId.append(MyForm);
        return;
    }
}

class MyContainer extends DomClass {
    constructor() {
        super();
        this.type = "div";
        this.nav = new MyNav();
        this.footer = new MyFooter();
        this.props = { id: "MyDivId", class: "containter mt-5 pt-5 ml-3 pr-3 text-justify" };
        this.children = [this.nav, this.footer];
    }
}


class MyNav extends DomClass {
    constructor() {
        super();
        this.type = "nav";
        this.props = { id: "MyNavBarId", class: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top" };
        this.children = [
            // Button pour collaps Menu NavBar
            {
                type: "button", props: {
                    id: "NavBarButton", class: "navbar-toggler",
                    "data-toggle": "collapse",
                    "data-target": "#NavBarCollaps",
                    "aria-controls": "navbar",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                }, children: [
                    { type: "span", props: { id: "", class: "navbar-toggler-icon" }, children: [""] },
                ]
            },
            // Div pour collaps Menu NavBar
            {
                type: "div", props: { id: "NavBarCollaps", class: "collapse navbar-collapse justify-content-between" },
                children: [
                    {
                        type: "a", props: {
                            id: "MyDivHomeId", class: "navbar-brand", href: "#Livret",
                            "data-toggle": "collapse", "data-target": ".navbar-collapse.show",
                        },
                        children: [// Menu Livret
                            { type: "span", props: { onclick: () => { this.FunctionNavigate("../myPages/pageLivret.js", "MyPageLivret") }, id: "", class: "" }, children: ["Cliquer pour afficher le Livret de Famille"] },
                        ]
                    },
                    {
                        type: "a", props: {
                            id: "MyDivArbreId", class: "navbar-brand", href: "#Arbre",
                            "data-toggle": "collapse", "data-target": ".navbar-collapse.show",
                        },
                        children: [// Menu Arbre
                            { type: "span", props: { onclick: () => { this.FunctionNavigate("../myPages/pageArbre.js", "MyPageArbre") }, id: "", class: "" }, children: ["Cliquer pour afficher l'Arbre de la Famille"] },
                        ]
                    },
                ]
            },
        ]
    }
}


class MyFooter extends DomClass {
    constructor() {
        super();
        this.type = "footer";
        this.props = { id: "MyFotterId", class: "footer text-center fixed-bottom bg-white" };
        this.children = [
            {
                type: "span", props: { id: "", class: "" }, children: ["Company © All rights reserved by "]
            },
            {
                type: "a", props: { id: "", class: "", href: "https://fassababacar.github.io/curriculum_babacar_fassa/" },
                children: ["Babacar FASSA"]
            },
        ]

    }
}

export { MyContainer };