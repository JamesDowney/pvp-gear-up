import { print, visitUrl } from "kolmafia";
import * as minis from "./minis";

interface minigame {
  name: string;
  description: string;
  score: number;
  scoreHC: number;
}

const minisRegex = /<tr class="small">(.*?)<\/tr>/g;
const miniNameRegex = /<td valign="top" nowrap><b>(.*?)<\/b>/;
const miniDescRegex = /<td valign="top">(.*?)<\/td>/
const miniScoreRegex = /<td valign="top" align="center" colspan="1>(.*?)<\/td>/
const miniScoreHCRegex = /<td valign="top" align="center">(.*?)<\/td>/

let minimizeEquipPower = false

export default function main(): void {
  const minisPage = visitUrl(`/peevpee.php?place=rules`);
  const minisArrayRaw = Array.from(minisPage.matchAll(minisRegex));

  const minisArray: minigame[] = minisArrayRaw.map((miniString) => {
    return {
      name: miniString[1].match(miniNameRegex)?.[1] ?? "",
      description: miniString[1].match(miniDescRegex)?.[1] ?? "",
      score: parseInt(miniString[1].match(miniScoreRegex)?.[1] ?? "0"),
      scoreHC: parseInt(miniString[1].match(miniScoreHCRegex)?.[1] ?? "0"),
    };
  });

  if (minisArray.some(mini => minis.lightestLoadMini.includes(mini.name))) {
    minimizeEquipPower = true
  }

  if (minimizeEquipPower)
    print("I love you")

}
