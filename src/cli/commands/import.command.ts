import { getErrorMessage } from "../../shared/helpers/common.js";
import { createEntity } from "../../shared/helpers/entity.js";
import { TSVFileReader } from "../../shared/libs/file-reader/tsv-file-reader.js";
import { Command } from "./command.interface.js";

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  private onImportedLine(line: string,type:string) {
    const entity = createEntity(line,type);
    console.info(entity);
  }

  private onCompleteImport(count: number) {
    console.info(`${count} rows imported.`);
  }

  public async execute(...parametrs: string[]): Promise<void> {
    const [filePath] = parametrs;
    const fileReader = new TSVFileReader(filePath.trim());


    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompleteImport);

    try{
      await fileReader.read();
    }catch(error) {
      console.error(`can't read file: ${filePath}`);
      console.error(getErrorMessage(error));
    }
  }
}