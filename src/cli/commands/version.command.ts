import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Command } from "./command.interface.js";


type PackegeJSONConfig = {
  version: string;
}

function isPackegeJSONConfig(value: unknown): value is PackegeJSONConfig {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.hasOwn(value, 'version')
  );
}

export class VersionCommand implements Command {
  constructor(
    private readonly filePath: string = './package.json'
  ) { }

  private readVersion(): string {
    const jsonContent = readFileSync(resolve(this.filePath), 'utf-8');
    const importedContent: unknown = JSON.parse(jsonContent);

    if (!isPackegeJSONConfig(importedContent)) {
      throw new Error('Invalid package.json');
    }

    return importedContent.version;
  }

  public getName(): string {
    return '--version';
  }

  public async execute(..._parametrs: string[]): Promise<void> {
    try {
      const version = this.readVersion();
      console.log(version);
    } catch (error: unknown) {
      console.log(`Failed to read version from ${this.filePath}`);

      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

}