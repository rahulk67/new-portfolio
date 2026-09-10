const Todo = require("../models/Todo");


// GET all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find()
      .sort({ createdAt: -1 });

    res.json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch todos",
    });
  }
};

// CREATE todo
const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const todo = await Todo.create({
      title,
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create todo",
    });
  }
};

// UPDATE todo
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    todo.completed = !todo.completed;

    await todo.save();

    res.json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update todo",
    });
  }
};

// DELETE todo
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(
      req.params.id
    );

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete todo",
    });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};