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
let kicks = [];
let snares = []; 
hiHats = []; 
rideCymbals  = [];

const initializeArray = (x) =>
/* If given an empty drum array, fill it with HOWMANYBEATS 
occurances of 'false' 

	true = make a sound on that beat-number
	false = remain silent on that beat-number */
{
	const howManyBeats = 16;
	x.fill
	for ( let i = 0; i < howManyBeats; i++)
	{
		x[i] = false;
	}
	console.log("Inside the array: ");
	console.log( x);

/*
	let drums = Array(howManyBeats);
	drums.fill(false);
	x = drums;
	*/
};

const toggleDrum = (which, where)=>
/* Flip a single beat.  If it is on, turn it off, and vice versa. */
{
	which[where] = !which[where];
};

const clear =(a)=>
{
/* Set all elements in the ARG to FALSE.  */
	for (let i = 0; i < a.length; i++)
	{
		a[i] = false;
	};
};


const invert = (n) =>
{
	for (let i = 0; i < n.length; i++)
	{
		n[i] = !n[i];
	}
};

initializeArray(snares);
	console.log("Outside the array: ");
	console.log(snares);

toggleDrum(snares, 3);
toggleDrum(snares, 7);
toggleDrum(rideCymbals, 3);
invert(snares);
console.log(snares);
clear(snares);
