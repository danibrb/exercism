//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dict = {G:'C', C:'G', T:'A', A:'U'};

export const toRna = (dna) => {
  if (!dna.length){return '';}
  if (dna.length === 1){return dict[dna];}
  let rna = '';
  for( let nucleotide of dna){rna += dict[nucleotide];}
 return rna;
};
