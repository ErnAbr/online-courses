var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BookService } from "./services.js";
import { RenderCards } from "./renderCards.js";
class BookApp {
    constructor(bookService) {
        this.bookService = bookService;
        this.renderCards = new RenderCards();
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield this.bookService.getAllBooks();
                console.log("Books:", books);
                this.renderCards.renderBooks(books);
            }
            catch (error) {
                console.error("Failed to load books:", error);
            }
        });
    }
}
const bookService = new BookService("https://freetestapi.com/api/v1/books");
const app = new BookApp(bookService);
app.run();
