import { print, visitUrl } from "kolmafia";

import * as minis from "./minis";

/**
 * Stores data from the active PVP minigames.
 */
interface minigame {
  name: string;
  description: string;
  score: number;
  scoreHC: number;
}

const minisRegex = /<tr class="small">(.*?)<\/tr>/g;
const miniNameRegex = /<td valign="top" nowrap><b>(.*?)<\/b>/;
const miniDescRegex = /<td valign="top">(.*?)<\/td>/;
const miniScoreRegex = /<td valign="top" align="center" colspan="1>(.*?)<\/td>/;
const miniScoreHCRegex = /<td valign="top" align="center">(.*?)<\/td>/;

export default function main(): void {
  // Let's hit the pvp rules page and generate our minigames.
  // Maybe in the future we could store the date/data and only generate these when they're out of date? Not sure how safe that is though.
  const minisPage = visitUrl(`/peevpee.php?place=rules`);

  // Match the lines for the specific minigames.
  const miniArrayRaw = Array.from(minisPage.matchAll(minisRegex));

  // Match the names, descriptions, and scores for each minigame and store them nicely in an array.
  const miniArray: minigame[] = miniArrayRaw.map((miniString) => {
    return {
      name: miniString[1].match(miniNameRegex)?.[1] ?? "",
      description: miniString[1].match(miniDescRegex)?.[1] ?? "",
      score: parseInt(miniString[1].match(miniScoreRegex)?.[1] ?? "0"),
      scoreHC: parseInt(miniString[1].match(miniScoreHCRegex)?.[1] ?? "0"),
    };
  });

  // Maybe later we'll print each minigame to the CLI all pretty-like.
  // miniArray.forEach(mini => print(`${mini.name} - ${mini.description} - ${mini.score} - ${mini.scoreHC}`))

  // Now that we've got out minigames, we can match them against our minis.ts to see what we've got maybe?
  // I'm not sure what the best way to optimize this stuff lmao but a bunch of if statements that flip flags
  // we use to do the optimization calculations at the end feels.... like not the best option.

  miniArray.forEach((mini) => {
    if (minis.verbosity(mini.name)) {
      print("verbosity");
    }
    if (minis.laconic(mini.name)) {
      print("laconic");
    }
    if (minis.showingInitiative(mini.name)) {
      print("showingInitiative");
    }
    if (minis.peaceOnEarth(mini.name)) {
      print("peaceOnEarth");
    }
    if (minis.eggHunt(mini.name)) {
      print("eggHunt");
    }
    if (minis.meatLover(mini.name)) {
      print("meatLover");
    }
    if (minis.weaponDamage(mini.name)) {
      print("weaponDamage");
    }
    if (minis.boozeDrop(mini.name)) {
      print("boozeDrop");
    }
    if (minis.foodDrop(mini.name)) {
      print("foodDrop");
    }
    if (minis.allResistance(mini.name)) {
      print("allResistance");
    }
    if (minis.coldResistance(mini.name)) {
      print("coldResistance");
    }
    // if (minis.hotResistance(mini.name)) {
    //   print("hotResistance");
    // }
    // if (minis.sleazeResistance(mini.name)) {
    //   print("sleazeResistance");
    // }
    if (minis.stenchResistance(mini.name)) {
      print("stenchResistance");
    }
    // if (minis.spookyResistance(mini.name)) {
    //   print("spookyResistance");
    // }
    // if (minis.coldDamage(mini.name)) {
    //   print("coldDamage");
    // }
    if (minis.hotDamage(mini.name)) {
      print("hotDamage");
    }
    if (minis.sleazeDamage(mini.name)) {
      print("sleazeDamage");
    }
    // if (minis.stenchDamage(mini.name)) {
    //   print("stenchDamage");
    // }
    // if (minis.spookyDamage(mini.name)) {
    //   print("spookyDamage");
    // }
    if (minis.leastPower(mini.name)) {
      print("leastPower");
    }
    if (minis.mostPower(mini.name)) {
      print("mostPower");
    }
    if (minis.barelyDressed(mini.name)) {
      print("barelyDressed");
    }
    if (minis.noel(mini.name)) {
      print("noel");
    }
    if (minis.letterOfTheMoment(mini.name)) {
      print("letterOfTheMoment");
    }
    if (minis.deface(mini.name)) {
      print("deface");
    }
    if (minis.nines(mini.name)) {
      print("nines");
    }
    if (minis.beastMaster(mini.name)) {
      print("beastMaster");
    }
    if (minis.safariChic(mini.name)) {
      print("safariChic");
    }
  });
}
