import React from "react";
import "./TodoList.css";

function TodoList() {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form>
        <input type="text" placeholder="Adicione uma tarefa" />

        <button className="add" type="submit">
          {" "}
          Add{" "}
        </button>
      </form>
      <div className="ListaTarefas">
        <div className="item">
          <span>Tarefas de exemplo</span>
          <button className="del">Deletar</button>
        </div>
        <div className="item completo">
          <span>Tarefas de exemplo</span>
          <button className="del">Deletar</button>
        </div>
        <button className="deleteAll">Deletar Todas</button>
      </div>
    </div>
  );
}

export default TodoList;
