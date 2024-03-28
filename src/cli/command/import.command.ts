import { TSVFileReader } from "../../shared/libs/file-reader/tsv-file-reader.js";
import { Command } from "./command.interface.js";

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public execute(...parametrs: string[]): void {
    const [filePath,type] = parametrs;
    const fileReader = new TSVFileReader(filePath.trim(),type.trim());

    try{
      fileReader.read();
      console.log(fileReader.toArray());
    }catch(err) {
      if(!(err instanceof Error)) {
        throw err;
      }

      console.error(`can't read file: ${filePath}`);
      console.error(`Details: ${err.message}`);
    }
  }
}