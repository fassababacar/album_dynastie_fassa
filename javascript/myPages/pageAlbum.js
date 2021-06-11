class MyPageAlbum {
    constructor() {
        this.type = "section";
        this.props = {
            id: "", class: "container-fluid"
        };
    }
    children = [
        {
            type: "div", props: { id: "containerId", class: "text-center" },
            children: [

                { type: "h1", props: { id: "", class: "h1 text-center border border-dark rounded-circle col-sm-12 mt-0 mb-5" }, children: ["Album de la famille FASSA"] },
                {
                    type: "button", props: { id: "idPlayAlbum", class: "btn btn-outline-info m-2", onclick: () => { this.functionPlayAlbum() } },
                    children: ["Cliquer pour afficher l'album"]
                },
            ]
        },
        { type: "div", props: { id: "MyDivAlbumld", class: "container-fluid" }, children: [] },

    ]

    functionPlayAlbum = () => {
        ;
        var nbr = 20;
        var getContainerAlbum = document.getElementById("MyDivAlbumld");
        var images = ["mesImages/df1.png", "mesImages/df2.png", "mesImages/df3.png", "mesImages/df2.png", "mesImages/df3.png"];
        var im = 0;
        this.functionInitAlbum(nbr, getContainerAlbum, images, im);

    }
    functionInitAlbum = (varNbr, varDiv, varImages, varIm) => {
        for (let indexInit = 0; indexInit < varNbr; indexInit++) {
            var createDiv = document.createElement("div");
            createDiv.style.width = (varDiv.clientWidth / varNbr) + "px";
            createDiv.style.height = varDiv.clientHeight + "px";
            createDiv.className = "maClasse";
            createDiv.style.backgroundImage = "url('" + varImages[varIm] + "')";
            createDiv.style.backgroundSize = varDiv.clientWidth + "px auto";
            createDiv.style.backgroundPosition = (indexInit * 100 / (varNbr - 1)) + "% 50%";
            varDiv.appendChild(createDiv);
        }
    }
}

export { MyPageAlbum };