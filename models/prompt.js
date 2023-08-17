import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  statement: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  source: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
 
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;