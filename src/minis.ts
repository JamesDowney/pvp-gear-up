/**
 * This minigame counts the total length (in "characters") of the names of all equipment worn (including familiar equipment). The largest total wins.
 */
export function verbosity(mini: string): boolean {
  return ["Verbosity Demonstration", "It's a Mystery, Also"].includes(mini);
}

/**
 * This minigame counts the total length (in "characters") of the names of all equipment worn. The lowest total wins. An empty equipment slot counts as 23 points.
 */
export function laconic(mini: string): boolean {
  return ["Laconic Dresser", "Dressed in Rrrags", "Outfit Compression"].includes(mini);
}

export function showingInitiative(mini: string): boolean {
  return ["Showing Initiative", "Early Shopper", "Motivated by Irony"].includes(mini);
}

export function peaceOnEarth(mini: string): boolean {
  return ["Peace on Earth", "Sooooper Sneaky", "Smellin' Like a Stinkin' Rose"].includes(mini);
}

export function eggHunt(mini: string): boolean {
  return ["The Egg Hunt", "The Optimal Stat"].includes(mini);
}

export function meatLover(mini: string): boolean {
  return ["Meat Lover"].includes(mini);
}

export function weaponDamage(mini: string): boolean {
  return ["Maul Power"].includes(mini);
}

export function boozeDrop(mini: string): boolean {
  return [
    "Moarrrrrr Booze!",
    "A Nice Cold One",
    "Holiday Spirit(s)!",
    "Thirrrsty forrr Booze",
  ].includes(mini);
}

export function foodDrop(mini: string): boolean {
  return ["New Tastes"].includes(mini);
}

export function allResistance(mini: string): boolean {
  return ["Broad Resistance Contest"].includes(mini);
}

export function coldResistance(mini: string): boolean {
  return ["All Bundled Up", "Hibernation Ready"].includes(mini);
}

// export function hotResistance(mini: string): boolean {
//   return [""].includes(mini);
// }

// export function sleazeResistance(mini: string): boolean {
//   return [""].includes(mini);
// }

export function stenchResistance(mini: string): boolean {
  return ["Hold Your Nose"].includes(mini);
}

// export function spookyResistance(mini: string): boolean {
//   return [""].includes(mini);
// }

// export function coldDamage(mini: string): boolean {
//   return [""].includes(mini);
// }

export function hotDamage(mini: string): boolean {
  return ["Ready to Melt", "Fahrenheit 451", "Hot for Teacher"].includes(mini);
}

export function sleazeDamage(mini: string): boolean {
  return ["Innuendo Master"].includes(mini);
}

// export function stenchDamage(mini: string): boolean {
//   return [""].includes(mini);
// }

// export function spookyDamage(mini: string): boolean {
//   return [""].includes(mini);
// }

/**
 * This minigame compares the total power of each player's hat, shirt and pants (lowest total wins).
 */
export function leastPower(mini: string): boolean {
  return ["Lightest Load", "Optimal Dresser", "Wardrobe Malfunction"].includes(mini);
}

/**
 * This minigame compares the total power of each player's hat, shirt and pants (highest total wins, ignores Tao of the Terrapin).
 */
export function mostPower(mini: string): boolean {
  return ["Fashion Show", "School Pride"].includes(mini);
}

export function barelyDressed(mini: string): boolean {
  return ["Barely Dressed"].includes(mini);
}

export function noel(mini: string): boolean {
  return ["Spirit of Noel"].includes(mini);
}

export function letterOfTheMoment(mini: string): boolean {
  return ["Letter of the Moment", "ASCII-7 of the moment", "Spirit Day"].includes(mini);
}

export function deface(mini: string): boolean {
  return ["DEFACE"].includes(mini);
}

export function nines(mini: string): boolean {
  return ["Dressed to the 9s"].includes(mini);
}

export function beastMaster(mini: string): boolean {
  return ["Beast Master"].includes(mini);
}

export function safariChic(mini: string): boolean {
  return ["Safarai Chic"].includes(mini);
}
