"use strict";
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.completed = false;
    }
    TodoItem.prototype.toggleCompleted = function () {
        this.completed = !this.completed;
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.todoList = this.loadFromLocalStorage() || [];
    }
    TodoList.prototype.addTodo = function (todo) {
        this.todoList.push(todo);
        this.saveToLocalStorage();
    };
    TodoList.prototype.removeTodo = function (index) {
        this.todoList.splice(index, 1);
        this.saveToLocalStorage();
    };
    TodoList.prototype.getTodos = function () {
        return this.todoList;
    };
    TodoList.prototype.saveToLocalStorage = function () {
        var serializedTodos = JSON.stringify(this.todoList.map(function (todo) { return ({
            title: todo.title,
            completed: todo.completed,
        }); }));
        localStorage.setItem("todoList", serializedTodos);
    };
    TodoList.prototype.loadFromLocalStorage = function () {
        var serializedTodos = localStorage.getItem("todoList");
        if (serializedTodos) {
            var todos = JSON.parse(serializedTodos);
            return todos.map(function (todo) {
                var todoItem = new TodoItem(todo.title);
                todoItem.completed = todo.completed;
                return todoItem;
            });
        }
        return null;
    };
    return TodoList;
}());
var App = (function () {
    function App() {
        this.todoList = new TodoList();
        this.todoListContainer = document.querySelector(".todo-list");
    }
    App.prototype.init = function () {
        var _this = this;
        var addButton = document.querySelector(".add-todo-button");
        var inputField = document.querySelector(".todo-input");
        if (addButton && inputField) {
            addButton.addEventListener("click", function () {
                var todoTitle = inputField.value;
                if (todoTitle) {
                    var todo = new TodoItem(todoTitle);
                    _this.todoList.addTodo(todo);
                    inputField.value = "";
                    _this.renderTodos();
                }
            });
        }
        this.renderTodos();
    };
    App.prototype.renderTodos = function () {
        var _this = this;
        if (!this.todoListContainer)
            return;
        this.todoListContainer.innerHTML = "";
        this.todoList.getTodos().forEach(function (todo, index) {
            var _a;
            var todoItem = document.createElement("li");
            var todoItemButtonBox = document.createElement("div");
            var todoItemBox = document.createElement("div");
            todoItem.textContent = todo.title;
            if (todo.completed) {
                todoItem.classList.add("completed");
            }
            var toggleButton = document.createElement("button");
            toggleButton.textContent = todo.completed ? "Undo" : "Complete";
            toggleButton.addEventListener("click", function () {
                todo.toggleCompleted();
                _this.todoList.saveToLocalStorage();
                _this.renderTodos();
            });
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                _this.todoList.removeTodo(index);
                _this.renderTodos();
            });
            todoItemButtonBox.appendChild(toggleButton);
            todoItemButtonBox.appendChild(deleteButton);
            todoItemBox.appendChild(todoItem);
            todoItemBox.appendChild(todoItemButtonBox);
            (_a = _this.todoListContainer) === null || _a === void 0 ? void 0 : _a.appendChild(todoItemBox);
        });
    };
    return App;
}());
var app = new App();
app.init();
//# sourceMappingURL=index.js.map