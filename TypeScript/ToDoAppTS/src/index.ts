interface ITodo {
  title: string;
  completed: boolean;
  toggleCompleted(): void;
}

interface ITodoList {
  todoList: TodoItem[];
  addTodo(todo: TodoItem): void;
  removeTodo(index: number): void;
  getTodos(): TodoItem[];
}

class TodoItem implements ITodo {
  title: string;
  completed: boolean;

  constructor(title: string) {
    this.title = title;
    this.completed = false;
  }

  toggleCompleted(): void {
    this.completed = !this.completed;
  }
}

class TodoList implements ITodoList {
  todoList: TodoItem[];

  constructor() {
    this.todoList = this.loadFromLocalStorage() || [];
  }

  addTodo(todo: TodoItem): void {
    this.todoList.push(todo);
    this.saveToLocalStorage();
  }

  removeTodo(index: number): void {
    this.todoList.splice(index, 1);
    this.saveToLocalStorage();
  }

  getTodos(): TodoItem[] {
    return this.todoList;
  }

  saveToLocalStorage() {
    const serializedTodos = JSON.stringify(
      this.todoList.map((todo) => ({
        title: todo.title,
        completed: todo.completed,
      }))
    );
    localStorage.setItem("todoList", serializedTodos);
  }

  loadFromLocalStorage(): TodoItem[] | null {
    const serializedTodos = localStorage.getItem("todoList");
    if (serializedTodos) {
      const todos = JSON.parse(serializedTodos);
      return todos.map((todo: { title: string; completed: boolean }) => {
        const todoItem = new TodoItem(todo.title);
        todoItem.completed = todo.completed;
        return todoItem;
      });
    }
    return null;
  }
}

class App {
  todoList: TodoList;
  todoListContainer: Element | null;

  constructor() {
    this.todoList = new TodoList();
    this.todoListContainer = document.querySelector(".todo-list") as Element;
  }

  init(): void {
    const addButton = document.querySelector(".add-todo-button");
    const inputField = document.querySelector(".todo-input");

    if (addButton && inputField) {
      addButton.addEventListener("click", () => {
        const todoTitle = (inputField as HTMLInputElement).value;
        if (todoTitle) {
          const todo = new TodoItem(todoTitle);
          this.todoList.addTodo(todo);
          (inputField as HTMLInputElement).value = "";
          this.renderTodos();
        }
      });
    }
    this.renderTodos();
  }

  renderTodos(): void {
    if (!this.todoListContainer) return;
    this.todoListContainer.innerHTML = "";

    this.todoList.getTodos().forEach((todo, index) => {
      const todoItem = document.createElement("li");
      const todoItemButtonBox = document.createElement("div");
      const todoItemBox = document.createElement("div");
      todoItem.textContent = todo.title;
      if (todo.completed) {
        todoItem.classList.add("completed");
      }

      const toggleButton = document.createElement("button");
      toggleButton.textContent = todo.completed ? "Undo" : "Complete";
      toggleButton.addEventListener("click", () => {
        todo.toggleCompleted();
        this.todoList.saveToLocalStorage();
        this.renderTodos();
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        this.todoList.removeTodo(index);
        this.renderTodos();
      });

      todoItemButtonBox.appendChild(toggleButton);
      todoItemButtonBox.appendChild(deleteButton);
      todoItemBox.appendChild(todoItem);
      todoItemBox.appendChild(todoItemButtonBox);
      this.todoListContainer?.appendChild(todoItemBox);
    });
  }
}

const app = new App();
app.init();
