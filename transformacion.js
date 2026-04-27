console.log("aqui comienza")
const xmlRecetas = fetch("./recetas.xml");
const xmlRecetasString = xmlRecetas.text;
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlRecetasString, "application/xml");


function xmlToJson(xmlDoc) {
    const obj= {};
    for (let node of xmlDoc.children) {
        obj[node.nodeName] = node.textContent;

    }
    return obj;
}

const json = xmlToJson(xmlDoc);


function main(){


    console.log(json)
}

main()
