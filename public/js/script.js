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
/* If given an empty drum array, fill it with LOOPSIZE occurances of 'false' 

			true = make a sound on that beat-number
			false = remain silent on that beat-number */
{
	const loopSize = 16;
	for ( let i = 0; i < loopSize; i++)
	{
		x[i] = false;
	}
};

const toggleDrum = (which, where)=>
/* Flip a single beat.  If it is on, turn it off, and vice versa. */
{
	which[where] = !which[where];
};

initializeArray(snares);
console.log(snares);
toggleDrum(snares, 3);
console.log(snares);


