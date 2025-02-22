import { BookService } from "./services.js";
import { RenderCards } from "./renderCards.js";

class BookApp {
  private bookService: BookService;
  private renderCards: RenderCards;

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.renderCards = new RenderCards();
  }

  public async run(): Promise<void> {
    try {
      const books = await this.bookService.getAllBooks();
      console.log("Books:", books);
      this.renderCards.renderBooks(books);
    } catch (error) {
      console.error("Failed to load books:", error);
    }
  }
}

const bookService = new BookService("https://freetestapi.com/api/v1/books");
const app = new BookApp(bookService);

app.run();
