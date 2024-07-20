import config from "../config/config";
import { Client, ID, Databases } from "appwrite";

export class Service {
	client = new Client();
	databases;
	storage;

	constructor() {
		this.client
			.setEndpoint(config.appwriteURL)
			.setProject(config.appwriteProjectID);
		this.databases = new Databases(this.client);
		this.storage = new Storage(this.client);
	}

	async createPost({ title, slug, content, featuredImage, status, userID }) {
		try {
			return await this.databases.createDocument(
				config.appwriteDatabaseID,
				config.appwriteCollectionID,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
					userID,
				}
			);
		} catch (error) {
			throw error;
		}
	}

	async updatePost(slug, { title, content, featuredImage, status }) {
		try {
			return await this.databases.updateDocument(
				config.appwriteDatabaseID,
				config.appwriteCollectionID,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
				}
			);
		} catch (error) {
			throw error;
		}
	}

	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				config.appwriteDatabaseID,
				config.appwriteCollectionID,
				slug
			);
			return true;
		} catch (error) {
			console.log("Appwrite service :: deletePost :: error", error);
			return false;
		}
	}

	async getPost(slug) {
		try {
			return await this.Databases(
				config.appwriteDatabaseID,
				config.appwriteCollectionID,
				slug
			);
		} catch (error) {
			console.log("Appwrite service :: getPost :: error", error);
			return false;
		}
	}

	async getAllPost() {
		try {
			return await this.databases.listDocuments(
				config.appwriteDatabaseID,
				config.appwriteCollectionID,
				[Query.equal("ststus", "active")]
			);
		} catch (error) {
			console.log("Appwrite service :: getAllPost :: error", error);
			return false;
		}
	}

	//File upload service
	async uploadFile(file) {
		try {
			return await this.storage.createFile(
				config.appwriteBucketID,
				ID.unique(),
				file
			);
		} catch (error) {
			console.log("Appwrite service :: uploadFile :: error", error);
			return false;
		}
	}

	//File delete service
	async deleteFile(fileId) {
		try {
			await this.storage.deleteFile(config.appwriteBucketID, fileId);
		} catch (error) {
			console.log("Appwrite service :: deleteFile :: error", error);
			return false;
		}
	}

	getFilePreview(fileId) {
		return this.storage.getFilePreview(config.appwriteBucketID, fileId);
	}
}

const service = new Service();
export default service;
