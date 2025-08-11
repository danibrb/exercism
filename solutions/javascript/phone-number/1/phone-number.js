//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phone) => {
  console.log(phone)
  if (/[a-z]/i.test(phone)){
    throw new Error("Letters not permitted");
  }
  if (/[^0-9\s\-()\.+]/.test(phone)){
    throw new Error("Punctuations not permitted");
  }
  let num = phone.replace(/\D/g, '');
  const len = num.length;
  if (len < 10){
    throw new Error("Must not be fewer than 10 digits");
  }
  if (len === 11 && num[0] !== '1'){
    throw new Error("11 digits must start with 1");
  }
  if (len === 11 && num[0] === '1'){
    num = num.slice(1);
  }
  if (len > 11){
    throw new Error("Must not be greater than 11 digits");
  }
  if (len > 9 && num[0] === '0'){
    throw new Error("Area code cannot start with zero");
  }
  if (len > 9 && num[0] === '1'){
    throw new Error("Area code cannot start with one");
  }
  if (len > 9 && num[3] === '0'){
    throw new Error("Exchange code cannot start with zero");
  }
  if (len > 9 && num[3] === '1'){
    throw new Error("Exchange code cannot start with one");
  }
  return num
};
