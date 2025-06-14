import congifuration from "../config/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(congifuration.appWriteUrl)
      .setProject(congifuration.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, featureImage, content, status, userId }) {
    try {
      return await this.databases.createDocument(
        congifuration.appWriteDataBaseId,
        congifuration.appWriteCollectionId,
        slug,
        { title, featureImage, content, status, userId }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, featureImage, content, status }) {
    try {
      await this.databases.updateDocument(
        congifuration.appWriteDataBaseId,
        congifuration.appWriteCollectionId,
        slug,
        { title, featureImage, content, status }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases(
        congifuration.appWriteDataBaseId,
        congifuration.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        congifuration.appWriteDataBaseId,
        congifuration.appWriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases(
        congifuration.appWriteDataBaseId,
        congifuration.appWriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        congifuration.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(congifuration.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      throw error;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(congifuration.appWriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
