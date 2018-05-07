/*\
 * CreateObjectsFromDB
 * Takes data of tagName from DBname and returns them as an object of the same structure:
 * e.g.: all records of tagName "character" from database of characters.XML to a object with properties corresponding to those from database.
\*/

function TestFunction() {
   test = objectsFromDB.getInstance();
        console.log("Instance hook created.");
        console.log(test.characters());
        for (let i = 0; i < test.characters.getData.length; i++) {
            console.log(test.Characters.values());
        }
    
}

var objectsFromDB = (function () {
    var instance;
    function createData() {
        CreateObjectsFromDB('CharactersDB.xml', 'character')
                .then(function (data) {
                    characters = data;
                })
                .catch(function () {
                   console.log("error loading file");
                });
        
        var getCharacters = function () {
            console.log("Getting character data.");
            return characters;
        };
        return {
            characters: getCharacters
        };
    }
    return {
        getInstance: function () {
            if (!instance) {
                console.log("Creating new instance.");
                instance = createData();
            }
            return instance;
        }
    };

});
function CreateObjectsFromDB(DBname, tagName) {
    return new Promise(function (resolve, reject) {
        var charFactory = new Factory();
        var xmlDocument = new XMLHttpRequest();
        var allObjects = [];
        xmlDocument.onload = function () {
            resolve(this.responseText);
            console.log("Opened db.");
            var xmlDoc = xmlDocument.responseXML;
            var myObj = xmlDoc.getElementsByTagName(tagName);
            allObjects = charFactory.createObject(myObj);
            console.log("Returning: " + allObjects[0].name);
        };
        xmlDocument.onerror = reject;
        xmlDocument.open("GET", DBname, true);
        xmlDocument.send();
        return allObjects;
    });
}

function Factory() {

    this.createObject = function (data) {
        var allObjects = [];
        for (let i = 0; i < data.length; i++) {
            var newObject = {};
            for (let j = 0; j < data[i].attributes.length; j++) {
                newObject[data[i].attributes[j].nodeName] = data[i].attributes[j].nodeValue;
            }
            allObjects.push(newObject);
        }
        return allObjects;
    };
}