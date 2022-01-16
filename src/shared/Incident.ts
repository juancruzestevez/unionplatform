import { MongoId } from "./MongoId";

export type Incident = {
  _id: MongoId;
  createdAt: Date;

  situation: string;
  role: string;
  company: string;
  place: string;
  description: string;
  reportedTo: string;
  image: string;
};
