var FunctionClassOnLoadSecond = async () => {
    const { Render } = await import('./PageRenderHtml.js');
    const { MyContainer } = await import('./PageTemplate.js')
    var container = new MyContainer();
    var myBody = document.getElementById("MyIdBody");
    myBody.append(Render(container));
}
FunctionClassOnLoadSecond()



