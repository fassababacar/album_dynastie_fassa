function Render(Node) {
    if (typeof Node === "undefined") {
        return document.createTextNode("");
    }
    if (typeof Node === "string") {
        return document.createTextNode(Node);
    }
    if (Node.tagName) {
        return Node;
    }

    var var_element = document.createElement(Node.type);
    if (Node.props) {
        for (var prop in Node.props) {
            if (typeof Node.props[prop] === "function"
                || typeof Node.props[prop] === "object") {
                var_element[prop] = Node.props[prop];
            } else {
                var_element.setAttribute(prop, Node.props[prop]);
            }
        }
    }
    if (Node.children) {
        Node.children.map(Render).forEach(element => {
            var_element.appendChild(element);
        });
    }
    return var_element;
}
export { Render };