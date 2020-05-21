import { IsMongoId, IsString } from 'class-validator';
import * as mongoose from 'mongoose';
export class Todo extends mongoose.Document {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsString()
  name: string;
  @IsString()
  description: string;
}
