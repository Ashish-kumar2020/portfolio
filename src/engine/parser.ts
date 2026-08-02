export interface ParsedCommand {
  command: string;
  args: string[];
}

export function parse(input: string): ParsedCommand {
    if(!input.trim()){
        return {
            command : "",
            args: []
        }
    }
    const [command,...args] = input.trim().split(/\s+/);
 
    return {command,args}
   
}
// parse(" cat resume.txt    abcd.txt");
console.log(parse(""))