var FunctionClassOnLoadSecond = async () => {
    // window.onload = function () {
    //     alert('Source BAse');
    //     console.log('Source BAs');
    // }
    const { Render } = await import('./PageRenderHtml.js');
    const { MyContainer } = await import('./PageTemplate.js')
    var container = new MyContainer();
    var myBody = document.getElementById("MyIdBody");
    myBody.append(Render(container));
}
FunctionClassOnLoadSecond()



