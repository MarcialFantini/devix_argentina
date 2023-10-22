import { Document, Model, model, Schema } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  text: string;
}

const contactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  text: { type: String, required: true },
});

const ContactModel: Model<IContact> = model<IContact>("Contact", contactSchema);

export default ContactModel;
