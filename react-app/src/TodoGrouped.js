import { useState, useEffect, useContext } from "react";
import TodoAdded from "./TodoAdded";
import { MyApp } from "./App";
const TodoGrouped = () => {

  const AppValue = useContext(MyApp);
  const [errorMessage, setErrorMessage] = useState(false);


  

  const addNewTodoGroup = () => {
    AppValue.setConfirmAllTodosSaved(false);
    AppValue.setTodoItems((prevItems) => [
      ...prevItems,
      {
        title: `item ${prevItems.length + 1}`,
        content: "",
        isDone: false,
        id: Math.random(10) * Math.random(5) * 3,
        details: [],
        dateOnchangeValue: "",
        showTitle: false,
        scheduledDate: false,
        dateModified: "",
      },
    ]);
  };

  const deleteAll = () => {
    const newItems = AppValue.todoItems.filter((value) => {
      return (value.id = "");
    });

    console.log(newItems);
    AppValue.setTodoItems(newItems);
  };

  const handleDelete = (id) => {
    console.log("id", id);
    const newItems = AppValue.todoItems.filter((value) => {
      return value.id != id;
    });

    console.log(newItems);
    AppValue.setTodoItems(newItems);
  };

  return (
    <>
      <div id="entireNoteGroupedContainer">
        <div id="wrapNewNoteAndAdder">
          <div id="addNewNoteAndNumberOfNotes">
            <p>
              <span id="numberOfTodos_Texts">No of Todos :</span>{" "}
              <span >{AppValue.todoItems.length}</span>
              <button
                onClick={() => {
                  if (
                    AppValue.confirmAllTodosSaved !== false ||
                    AppValue.todoItems.length == 0
                  ) {
                    addNewTodoGroup();
                    setErrorMessage(false);
                  } else {
                    setErrorMessage(true);
                    setTimeout(() => setErrorMessage(false), 10000);
                  }
                }}
                id="addNote"
              >
                add new Todo
              </button>
              {AppValue.todoItems.length > 1 && (
                <button onClick={deleteAll} id="deleteAllNotes">
                  delete all Todos
                </button>
              )}
            </p>
          </div>
          <div id="subTabSmallScreen">
            <div id="smallscreenNotesAndNumberOfNotes">
              <span id="numberOfNotes">No of Todos :</span>{" "}
              <span id="numberOfNoteNumbers">{AppValue.todoItems.length}</span>
            </div>
            <div className="mb-4">
              <button
                onClick={() => {
                  if (
                    AppValue.confirmAllTodosSaved !== false ||
                    AppValue.todoItems.length == 0
                  ) {
                    addNewTodoGroup();
                    setErrorMessage(false);
                  } else {
                    setErrorMessage(true);
                    setTimeout(() => setErrorMessage(false), 10000);
                  }
                }}
                id="addNote"
              >
                add new Todo
              </button>
              {AppValue.todoItems.length > 1 && (
                <button onClick={deleteAll} id="deleteAllNotes">
                  delete all Todos
                </button>
              )}
            </div>
          </div>
        </div>
        {errorMessage && (
          <p className="pl-3 pr-3 text-danger" id="errorMessage">
            {" "}
            To add new Todos please save all previous and current Todos, to save
            Todos click on the checked icon{" "}
            <span
              className=" fas fa-check-circle"
              id="errorMessageIcon"
            ></span>{" "}
            , available on each Todo lists
          </p>
        )}
        <div id="allMyNoteSpace">
          {AppValue.todoItems.map((item, index) => (
            <div key={index} className="allMyNotes">
              <TodoArranged
                handleDelete={handleDelete}
                item={item}
                setItems={AppValue.setTodoItems}
                setConfirmAllTodosSaved={AppValue.setConfirmAllTodosSaved}
              />
            </div>
          ))}
        </div>
        {AppValue.todoItems.length == 0 && (
          <div id="emptyListImageContainer">
            <h3>No Todos found</h3>
            <img
              id="emptyListImage"
              src={require("./pages/image/emptyItemImage.jpg")}
              onClick={addNewTodoGroup}
              style={{ cursor: "pointer" }}
            />
            <button
              onClick={addNewTodoGroup}
              id="addNote"
              className="	fas fa-plus "
              title="add Todo"
            ></button>
          </div>
        )}
      </div>
    </>
  );
};

const TodoArranged = ({ handleDelete, item, setItems, setConfirmAllTodosSaved }) => {
  const handleClick = () => {
    setConfirmAllTodosSaved(true);
    handleDelete(item.id);
  };
  return (
    <>
      <div>
        <div className="NoteAddedAndDelete">
          <TodoAdded
            item={item}
            setItems={setItems}
            handleClick={handleClick}
            setConfirmAllTodosSaved={setConfirmAllTodosSaved}
          />
        </div>
      </div>
    </>
  );
};

export default TodoGrouped;
