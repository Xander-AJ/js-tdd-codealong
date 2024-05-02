// Your code here
// utils.js

/**
 * Calculate the age of a person based on their birth year.
 * @param {number} birthYear The year the person was born.
 * @returns {number} The age of the person.
 */
export function currentAgeForBirthYear(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }
  