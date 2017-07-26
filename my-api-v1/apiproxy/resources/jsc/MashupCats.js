var catsResponse = context.getVariable("response.content");
var kittenResponse = context.getVariable("KittensResponse.content");

var catsResponseObject = JSON.parse(catsResponse);
var kittenResponseObject = JSON.parse(kittenResponse);

/*
kittenResponseObject.entities.forEach(function(entity){
	catsResponseObject.cats.push({
		"name":entity.name,
		"age":entity.age
	});
});
*/

for(var i = 0; i < kittenResponseObject.entities.length; i++) {
	catsResponseObject.cats.push({
		"name": kittenResponseObject.entities[i].name,
		"age": kittenResponseObject.entities[i].age
	});
}

context.setVariable("response.content", JSON.stringify(catsResponseObject));
