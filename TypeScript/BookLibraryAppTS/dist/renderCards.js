export class RenderCards {
    renderBooks(books) {
        const container = document.querySelector(".books-container");
        if (!container) {
            console.error("Container not found");
            return;
        }
        container.innerHTML = "";
        books.forEach((book) => {
            const bookElement = document.createElement("div");
            bookElement.className = "card";
            const imgElement = document.createElement("img");
            imgElement.className = "card-img-top";
            imgElement.className = "img-fluid";
            imgElement.src = book.cover_image || "default-image.jpg";
            imgElement.alt = book.title || "Book image";
            const cardBodyElement = document.createElement("div");
            cardBodyElement.className = "card-body";
            const titleElement = document.createElement("h5");
            titleElement.className = "card-title";
            titleElement.textContent = book.title || "No Title Available";
            const authorElement = document.createElement("h6");
            authorElement.className = "card-subtitle mb-2 text-muted";
            authorElement.textContent = `Author: ${book.author || "Unknown"}`;
            const yearElement = document.createElement("p");
            yearElement.className = "card-text";
            yearElement.textContent = `Published: ${book.publication_year || "N/A"}`;
            const textElement = document.createElement("p");
            textElement.className = "card-text";
            textElement.textContent = book.description || "No Description Available";
            const linkElement = document.createElement("a");
            linkElement.className = "btn btn-primary";
            linkElement.href = "#"; // Placeholder for a future link
            linkElement.textContent = "Read More";
            cardBodyElement.appendChild(titleElement);
            cardBodyElement.appendChild(authorElement);
            cardBodyElement.appendChild(yearElement);
            cardBodyElement.appendChild(textElement);
            cardBodyElement.appendChild(linkElement);
            bookElement.appendChild(imgElement);
            bookElement.appendChild(cardBodyElement);
            container.appendChild(bookElement);
        });
    }
}
