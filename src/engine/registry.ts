import { help } from "../commands/help";
import { pwd } from "../commands/pwd";
import { ls } from "../commands/ls";
import { cd } from "../commands/cd";
import { cat } from "../commands/cat";
import { clear } from "../commands/clear";
import { mkdir } from "../commands/mkdir";
import { touch } from "../commands/touch";
import { rm } from "../commands/rm";
import { tree } from "../commands/tree";
import { projectsCommand } from "../commands/projectsCommand";
import { skillsCommand } from "../commands/skills";
import { experienceCommand } from "../commands/experience";

export const registry = {
  help,
  pwd,
  ls,
  cd,
  cat,
  clear,
  mkdir,
  touch,
  rm,
  tree,
  project: projectsCommand,
  skills: skillsCommand,
  experience: experienceCommand,
};