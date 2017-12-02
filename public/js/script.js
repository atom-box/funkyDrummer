/* 
PROJECT V1.0  FUNKY DRUMMER 
THIS FILE: script.js   
November 27, 2017 By Evan Genest
https://github.com/atom-box/funkyDrummer    
Twitter@MisterGenest 

DESCRIPTION:  In Funky Drummer you can rock out by setting a sequence of 16 beats, in four different drum sounds.  
This program was completed for the Codecademy course "Build Your Own API's"
Written by Evan Genest! November 23 to 28, 2017 */

/* Initialize four arrays that can hold true-or-false to represent sound-or-silent. */
const MAX_BEATS = 16;
let kicks = new Array(MAX_BEATS).fill(false);
let snares = new Array(MAX_BEATS).fill(false);
let hiHats = new Array(MAX_BEATS).fill(false);
let rideCymbals = new Array(MAX_BEATS).fill(false);

const notAnArray =(which)=>
{
	let w = which;
	if (w !== 'kicks' &&
		w !== 'snares' &&
		w !== 'hiHats' &&
		w !== 'rideCymbals') 
			return true;
		else 
		return false;
};

const notAnIndex =(where)=>
{
	if (where >= MAX_BEATS || where < 0 )
		return true;
	else 
		return false;
};

const toggleDrum = (which, where)=>
/* Flip a single beat.  If it is on, turn it off, and vice versa. */
{
	if (notAnArray(which)) return "Not an array !!!";
	if (notAnIndex(where)) return "Array out of index.";

	console.log(`Walking in [${which}] = = = = = = = = = = = = >`);
	switch (which){
		case 'kicks': 
			console.log(kicks[where]);
			kicks[where] = !kicks[where];
			console.log(kicks[where]);

			break;
		case 'snares': 
			console.log(snares[where]);
			snares[where] = !snares[where]; 
			console.log(snares[where]);
			break;
		case 'hiHats': 
			hiHats[where] = !hiHats[where]; 
			break;
		case 'rideCymbals': 
			rideCymbals[where] = !rideCymbals[where]; 
			break;
	};
};

const clear =(which)=>
{
/* Set all elements in the ARG to FALSE.  */
	for (let i = 0; i < which.length; i++)
	{
		which[i] = false;
	};
};


const invert = (which) =>
{

	console.log(`Passed in: [${which}] invertinvertinvertinvertinvertinvertinvert`);
	let newDrumsA;
	switch (which){
		case 'kicks': 
			console.log(`Before: <${kicks}>`);
			for (let i = 0; i < kicks.length; i++)
			{
				kicks[i] = !kicks[i];
			}
			console.log(`After: <${kicks}>`);
			break;

		case 'snares': 
			for (let i = 0; i < snares.length; i++)
			{
				snares[i] = !snares[i];
			}
			console.log(`Inverting done: <${snares}>`);
			break;
		case 'hiHats': 
			for (let i = 0; i < hiHats.length; i++)
			{
				hiHats[i] = !hiHats[i];
			}
			console.log(`Inverting done: <${hiHats}>`);
			break;
		case 'rideCymbals': 
			for (let i = 0; i < rideCymbals.length; i++)
			{
				rideCymbals[i] = !rideCymbals[i];
			}
			console.log(`Inverting done: <${rideCymbals}>`);
			break;
 		
		};
};

/*
console.log(toggleDrum('hiHats', 3));
console.log(toggleDrum('bongos', 3));
console.log(toggleDrum('hiHats', 0));
console.log(toggleDrum('kicks',-1));
*/

/*
console.log(
notAnIndex(-1),
notAnIndex(16),
notAnIndex(0),
notAnArray('cindy'),
notAnArray('cindy'),
notAnArray('hiHats')
);
*/
/* evTest!  
toggleDrum(snares, 7); toggleDrum(snares, 8);toggleDrum(snares, 9); toggleDrum(snares, 10);
toggleDrum(snares, 8); // SHOULD undo 8
toggleDrum(snares, 3);
toggleDrum(hiHats, 12);

console.log("Set 3, 7, 9, 10...");
console.log(snares);
invert(snares);
console.log("...invert...");
console.log(snares);
clear(snares); 
console.log("...clear!");
console.log(snares);

TRY */
