//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const isQuestion = /\?\s*$/.test(message);
  const isYelling = message.toUpperCase() === message && /[A-Z]/.test(message);
  const isSilence = /^\s*$/.test(message)
  if (isQuestion && isYelling) return "Calm down, I know what I'm doing!";
  if (isQuestion) return "Sure.";
  if (isYelling) return "Whoa, chill out!";
  if (isSilence) return "Fine. Be that way!";
  return "Whatever.";
};
