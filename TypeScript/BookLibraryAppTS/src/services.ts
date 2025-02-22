export class BookService {
  apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  public async getAllBooks(): Promise<any> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error("Unable to get Data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Some Error Occurred:", error);
      throw error;
    }
  }
}
