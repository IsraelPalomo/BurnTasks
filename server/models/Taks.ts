import { Schema, model } from 'mongoose';

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
      unique: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

export default model('Task', TaskSchema);
