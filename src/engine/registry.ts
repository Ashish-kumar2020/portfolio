import { help } from "../commands/help";
import { pwd } from "../commands/pwd";
import { ls } from "../commands/ls";
import { cd } from "../commands/cd";
import { cat } from "../commands/cat";
import { clear } from "../commands/clear";
import { mkdir } from "../commands/mkdir";
import { touch } from "../commands/touch";

export const registry = {
  help,
  pwd,
  ls,
  cd,
  cat,
  clear,
  mkdir,
  touch
};