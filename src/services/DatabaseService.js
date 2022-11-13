import { db } from "./FirebaseFunctions";

class DatabaseService {
  collection;

  constructor(collectionName) {
    this.collection = db.collection(collectionName);
  }

  getAll = async () => {
    const snapshot = await this.collection.get();
    return snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  };

  getOne = async ( queryKey ) => {
    const snapshot = await this.collection.doc(queryKey).get();
    return {status:200,data:snapshot.data()};
  };

  getReference = async (documentReference) => {
    const res = await documentReference.get();
    const data = res.data();

    if (data && documentReference.id) {
      data.uid = documentReference.id;
    }

    return data;
  };

  create = async (id, values) => {
    return await this.collection.doc(id).set(values);
  };

  update = async (id, values) => {
    return await this.collection.doc(id).update(values);
  };

  remove = async (id) => {
    return await this.collection.doc(id).delete();
  };
}

export const PageService = new DatabaseService("pages");
export const BlogService = new DatabaseService("news");
export const UserService = new DatabaseService("users");
export const BingoService = new DatabaseService("bingo_categories");