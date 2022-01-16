import { MongoId } from "./MongoId";

export type NewsArticle = {
  _id: MongoId;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  createdAt: Date;
};
