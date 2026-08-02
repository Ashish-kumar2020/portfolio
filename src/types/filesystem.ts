export interface FSNode {
  name: string;
  type: "file" | "directory";
  content?: string;
  children?: FSNode[];
}