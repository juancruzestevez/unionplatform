import { MongoId } from "./MongoId";

export type NewsArticle = {
  _id: MongoId;
  title: string;
  description: string;
  content: string;
  thumbnail: {
    fileName: string;
    fileKey: string;
    url: string;
  };
  createdAt: Date;
  scope: string;
};
