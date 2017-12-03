// Use this presets array inside your presetHandler
const presets = require('./presets');
const INDEXLIMIT = 15; // highest index allowed


const createOrUpdatePreset = (index, array) => {
// NOT MINE.  
// WRITTEN BY UDACITY IN ANSWER KEY
  if (!presets[index]) {
    return;
  }
  presets[index] = array;
  return presets[index];
};


// Complete this function:
const presetHandler = (requestS,indexN,	newPresetA) =>  	// Array 
{
	console.log(`Someone wants ${requestS},${indexN}, and ${newPresetA}  = + = + = + = ` );
	let outGoing = [];

	// GET begin
	if (indexN < 0 || indexN > INDEXLIMIT)
	{
		outGoing[0] = 404; // PUT ERROR INTO RETURNARRAY
	}
	else if (requestS !== 'GET' && requestS !== 'PUT' )
		outGoing[0] = 400;  // PUT ERROR INTO RETURNARRAY
	else
	{
		outGoing[0] = 200;
	}
	if (outGoing[0] === 200 && requestS === 'GET') //RETURN FRESH BEATS
	{
		outGoing[1] = presets[indexN];
	}
	// end GET

	// PUT begin
	if (outGoing[0] === 200 && requestS === 'PUT') //STORE INCOMING BEATS
	{
		const array1 = createOrUpdatePreset(indexN, newPresetA);
		outGoing[1] = array1;
	}
	//outgoing[1] = 'pangloss';  // WHEN I UNCOMMENT THIS LINE, IT CRASHES.  
	console.log(`I will give them ${outGoing}  = + = + = + = ` );
	return outGoing;
};


/*evTest!
let testArray = presetHandler("Joy_Division", 50);
console.log(testArray);
testArray = presetHandler("New_Order", 5);
console.log(testArray);
testArray = presetHandler("PUT", 1, teams);
console.log(testArray);
*/


// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
