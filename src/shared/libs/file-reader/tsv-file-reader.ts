import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string,
    private readonly type: string
  ) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): any {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    if (this.type === 'user') {
      return this.rawData
        .split('\n')
        .filter((row) => row.trim().length > 0)
        .map((line) => line.trimEnd().split('\t'))
        .map(([  
          name,
          email,
          avatar,
          password,
          gender,
          birthdate,
          role,
          description,
          location,
          image,
          createdAt,
          trainingLevel,
          trainingTypes,
          trainingDuration,
          caloriesPerDay,
          caloriesPerWorkout,
          isAvailableForTraining,
          certificates,
          achievements,
          privateTraining
        ]) => ({
          name,
          email,
          avatar,
          password,
          gender,
          birthdate,
          role,
          description,
          location,
          image,
          createdAt,
          trainingLevel,
          trainingTypes,
          trainingDuration,
          caloriesPerDay,
          caloriesPerWorkout,
          isAvailableForTraining,
          certificates,
          achievements,
          privateTraining,
        }));
    }

    if (this.type === 'train') {
      return this.rawData
        .split('\n')
        .filter((row) => row.trim().length > 0)
        .map((line) => line.split('\t'))
        .map(([
          title,
          backgroundImage,
          level,
          trainingType,
          duration,
          price,
          calories,
          description,
          gender,
          video,
          rating,
          trainer,
          specialOffer
        ]) => ({
          title,
          backgroundImage,
          level,
          trainingType,
          duration,
          price,
          calories,
          description,
          gender,
          video,
          rating,
          trainer,
          specialOffer
        }));

    }

    if (this.type === 'review') {
      return this.rawData
        .split('\n')
        .filter((row) => row.trim().length > 0)
        .map((line) => line.split('\t'))
        .map(([
          author,
          training,
          rating,
          text,
          createdAt
        ]) => ({
          author,
          training,
          rating,
          text,
          createdAt
        }));
    }

    if (this.type === 'order') {
      return this.rawData
        .split('\n')
        .filter((row) => row.trim().length > 0)
        .map((line) => line.split('\t'))
        .map(([
          viewOrder,
          service,
          price,
          quantity,
          orderPrice,
          payMethod,
          createdOrderDate
        ]) => ({
          viewOrder,
          service,
          price,
          quantity,
          orderPrice,
          payMethod,
          createdOrderDate
        }));
    }

    if (this.type === 'notification') {
      return this.rawData
        .split('\n')
        .filter((row) => row.trim().length > 0)
        .map((line) => line.split('\t'))
        .map(([
          date,
          user,
          message
        ]) => ({
          date,
          user,
          message
        }));
    }

    if (this.type === 'balance') {
      return this.rawData
        .split('\n')
        .filter((row) => row.trim().length > 0)
        .map((line) => line.split('\t'))
        .map(([
          training,
          quantityTraining
        ]) => ({
          training,
          quantityTraining
        }));
      
    }

    if (this.type === 'personal-training-request') {
      return this.rawData
        .split('\n')
        .filter((row) => row.trim().length > 0)
        .map((line) => line.split('\t'))
        .map(([
          Initiator,
          User,
          DateCreated,
          DateStatusChanged,
          RequestStatus
        ]) => ({
          Initiator,
          User,
          DateCreated,
          DateStatusChanged,
          RequestStatus
        }));
    }
  }
}
