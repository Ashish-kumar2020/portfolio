import type { FSNode } from "../types/filesystem";

export const root: FSNode = {
  name: "/",
  type: "directory",
  children: [
    {
      name: "about",
      type: "directory",
      children: [
        {
          name: "bio.txt",
          type: "file",
          content: "Hi, I'm Ashish Singh.",
        },
      ],
    },
    {
      name: "projects",
      type: "directory",
      children: [
        {
          name: "retro-terminal.txt",
          type: "file",
          content: "Retro Terminal Portfolio Project",
        },
      ],
    },
    {
      name: "resume.txt",
      type: "file",
      content: "Ashish Singh Resume",
    },
  ],
};