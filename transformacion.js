console.log("aqui comienza")
const xmlRecetas = fetch("./recetas.xml");
const xmlRecetasString = xmlRecetas.text;
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlRecetasString, "application/xml");

function xmlToJson(xml) {
    const obj = {};
    for (let node of xml.children) {
        obj[node.nodeName] = node.textContent;
    }
    return obj;
}

console.log(xmlToJson(xmlDoc.documentElement));
