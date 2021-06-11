import * as module from '../moduleTraitement/generate_synoptique.js';
class MyPageArbre {
    constructor() {
        this.type = "section";
        this.props = { id: "MyDivArbreld", class: "container-fluide mt-3 pt-3" };
    }
    children = [

        {
            type: "div", props: { id: "", class: "text-center" }, children: [
                {
                    type: "button", props: { id: "idDisplayArbre", class: "btn btn-outline-info m-2", onclick: () => { this.functionAffichageDiagram() } },
                    children: ["Cliquer pour afficher l'arbre"]
                },

                // {
                //     type: "button", props: { id: "idZoomToFit", class: "btn btn-outline-primary m-2" },
                //     children: ["Cliquer pour afficher l'apercu complet de l'arbre"]
                // },
                // {
                //     type: "button", props: { id: "idCenterZoom", class: "btn btn-outline-secondary m-2" },
                //     children: ["Cliquer pour afficher l'arbre initial"]
                // },
                // {
                //     type: "button", props: { id: "idMakeImage", class: "btn btn-outline-success m-2" },
                //     children: ["Cliquer pour céer l'image"]
                // },
            ]
        },
        // // Div Make Images
        // {
        //     type: "div", props: { id: "idDivImage", class: "container-fluide", style: "height: 600px;overflow: scroll;" }, children: [""]

        // },
        // Div global pour le diagram
        {
            type: "div", props: { id: "divGlobalDiagram", class: "container-fluid" },
            children: [
                { type: "input", props: { id: "", class: "m-2", type: "search", id: "mySearch", placeholder: "Chercher par Prenom" }, children: [""] },
                {
                    type: "button", props: {
                        id: "", class: "btn btn-primary m-2", onclick: () => { module.searchDiagram("mySearch", this.varDiagrame) }
                    }, children: ["Chercher"]
                },
                // { type: "button", props: { id: "svgButton3", class: "btn btn-primary m-2", onclick: () => { module.createImage(this.varDiagrame) } }, children: ["Télécharger l'arbre"] },
                { type: "div", props: { id: "myOverviewDiv", class: "" }, children: [] },
                {
                    type: "div", props: {
                        id: "myDiagramDiv", class: "mt-3", style: "background-color: white; border: 1px solid black; width: 100%; height: 100vh;--darkreader-inline-bgcolor:#181a1b; --darkreader-inline-border-top:#666666; --darkreader-inline-border-right:#666666; --darkreader-inline-border-bottom:#666666; --darkreader-inline-border-left:#666666; "
                        , "data-darkreader-inline-bgcolor": "", "data-darkreader-inline-border-top": "",
                        "data-darkreader-inline-border-right": "", "data-darkreader-inline-border-bottom": "",
                        "data-darkreader-inline-border-left": ""
                    }, children: []
                },
            ]
        },
    ]
    functionAffichageDiagram = () => {
        this.varDiagrame = module.generateSynoptique(module.nodeDataArray2, module.linkDataArray2, "myDiagramDiv", "myOverviewDiv", 'idZoomToFit', 'idCenterZoom');
        module.functionToggle("idDisplayArbre", "divGlobalDiagram");
    }
}

export { MyPageArbre };