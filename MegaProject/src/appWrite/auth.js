import congifuration from "../config/conf";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(congifuration.appWriteUrl)
      .setProject(congifuration.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique().email,
        password,
        name
      );
      if (userAccount) {
        return await this.login({ email, password });
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getAccount() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authServices = new AuthServices();

export default authServices;
