import { RouterPaths } from "../Router";

export function setParam(path: RouterPaths, param: string, value: string): string {
  return path.replace(param[0] === ":" ? param : `:${param}`, value);
}