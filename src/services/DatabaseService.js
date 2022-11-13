import { db } from "./FirebaseFunctions";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

class DatabaseService {
  collection;

  constructor(collectionName) {
    this.collection = collection(db,collectionName);
    this.collectionName = collectionName;
  }

  getAll = async () => {
    const snapshot = await getDocs(this.collection);
    return snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  };

  getOne = async ( queryKey ) => {
    const docRef = doc(db,this.collectionName,queryKey);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {status:200,data:docSnap.data()};
    } else {
        return {status:404}
    }
    
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
export const PageBuilderService = new DatabaseService("pagebuilder");