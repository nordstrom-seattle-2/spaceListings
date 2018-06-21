// def createBear(address, description, size){
// 	console.log("Bear Created");
// }

// def getBear(bearID){
// 	return {
// 				address : "14263 SE 38th ST, Bellevue, WA, 98006"
// 				,description: "Some Sample description"
// 				,size: "1234 sqft"
// 		};
// }



function getSpace(spaceID) {
	return {
				 ID: spaceID
				,address : "263 SE 40th ST, Bellevue, WA, 98006"
				,description: "Some Sample description"
				,size: "1234 sqft"
		   };
}

module.exports.getSpace = getSpace;
