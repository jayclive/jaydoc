import { useState, useEffect, useRef, useContext } from "react";
import { MyApp } from "./App";
const TodoAdded = ({
  item,
  setItems,
  handleClick,
  setConfirmAllTodosSaved,
}) => {
  const [emptyNoteWarning, setEmptyNoteWarning] = useState(false);
  const AppValue = useContext(MyApp);
  const ItemAndTitle = () => {
    return (
      <>  
        <div className="itemDetailsDisp">
          <p>{item.content}</p>
        </div>
      </>
    );
  };

  const addTitle = (event) => {
    event.preventDefault();
    if (item.title !== "") {
      setItems((items) => {
        return items.map((itItem) => {
          if (itItem.id === item.id) {
            return {
              ...itItem,
              showTitle: true,
            };
          } else {
            return itItem;
          }
        });
      });
    }
  };

  const addContent = (event) => {
    event.preventDefault();
   
    if (item.content !== "") {
      setItems((items) => {
        return items.map((itItem) => {
          if (itItem.id === item.id) {
            return {
              ...itItem,
              details: [...itItem.details, <ItemAndTitle />],
              content: "",
            };
          } else {
            return itItem;
          }
        });
      });
    }
     document.getElementById("focu").focus();
  };

  const myToggleDone = () => {
    if (item.details.length == 0) {
      setEmptyNoteWarning(true);
      setTimeout(() => {
        setEmptyNoteWarning(false);
      }, 3000);
    }
    if (item.details.length !== 0) {
      setItems((items) => {
        return items.map((items) => {
          if (items.id === item.id) {
            return {
              ...items,
              isDone: !item.isDone,
            };
          } else {
            return items;
          }
        });
      });

      if (item.isDone == false) {
        setConfirmAllTodosSaved(true);
        setItems((items) => {
          return items.map((items) => {
            if (items.id === item.id) {
              return {
                ...items,
                dateModified: <DateModified />,
              };
            } else {
              return items;
            }
          });
        });
      } else {
        setConfirmAllTodosSaved(false);
      }
    }
  };

  const scheduledDateSaveButton = () => {
    if (item.dateOnchangeValue !== "") {
      setItems((items) => {
        return items.map((items) => {
          if (items.id === item.id) {
            return {
              ...items,
              scheduledDate: !item.scheduledDate,
            };
          } else {
            return items;
          }
        });
      });
    }
  };

  const itemTitle = (e) => {
    if (e.target.value !== "") {
      setItems((items) => {
        return items.map((items) => {
          if (items.id === item.id) {
            return {
              ...items,
              title: e.target.value,
            };
          } else {
            return items;
          }
        });
      });
    }
  };

  const updateInputContent = (e) => {
    setItems((items) => {
      return items.map((items) => {
        if (items.id === item.id) {
          return {
            ...items,
            content: e.target.value,
          };
        } else {
          return items;
        }
      });
    });
  };

  return (
    <>
      {/********dark Mode ***********/}
      {!AppValue.themeTrue && (
        <div id="entireNewTodoDarkMode">
          <div className="titleAndIconContainer">
            <div>
              {item.showTitle && <h3 id="titleDarkMode">{item.title}</h3>}
              {!item.showTitle && (
                <form
                  id="TitleAndSubmit"
                  onSubmit={addTitle}
                  autoComplete="off"
                >
                  <textarea
                    type="text"
                    id="itemTitleDarkMode"
                    maxLength="45"
                    onKeyUp={itemTitle}
                    placeholder="Title"
                  />
                  <button
                    type="submit"
                    className="submitTitleButton"
                    onClick={addTitle}
                  >
                    submit
                  </button>
                </form>
              )}
            </div>
            <div id="scheduledtimeSETAndDisp">
              {!item.scheduledDate && (
                <div>
                  Todo on:{" "}
                  <input
                    type="datetime-local"
                    id="myDate"
                    className="text-white"
                    onChange={(e) => {
                      setItems((items) => {
                        return items.map((items) => {
                          if (items.id === item.id) {
                            return {
                              ...items,
                              dateOnchangeValue: e.target.value,
                            };
                          } else {
                            return items;
                          }
                        });
                      });
                    }}
                  />{" "}
                  <button onClick={scheduledDateSaveButton}>save</button>
                </div>
              )}

              <div>
                {" "}
                {item.scheduledDate && (
                  <p id="TodoOnDarkMode">
                    <span id="TodoOn">Todo on :</span>{" "}
                    {item.dateOnchangeValue.replace("T", " " + " /" + " ")}
                  </p>
                )}
              </div>
            </div>
            {emptyNoteWarning && (
              <p id="emptyNoteWarning">Notes can't be empty</p>
            )}
            <div id="togglerAndDelete">
              {item.isDone && (
                <button
                  id="myToggleDoneDarkMode"
                  className="fas fa-pencil-alt"
                  onClick={myToggleDone}
                  title="Edit Todo"
                ></button>
              )}
              {!item.isDone && (
                <button
                  id="myToggleDoneDarkMode"
                  className="fas fa-check-circle"
                  onClick={myToggleDone}
                  title="Save Todo"
                ></button>
              )}
              <h3
                type="button"
                className=" fas fa-trash deleteTodoDarkMode"
                id="deleteButton"
                onClick={handleClick}
                title="Delete note"
              ></h3>
            </div>
          </div>

          <div id="SmallScreenScheduledtimeSETAndDisp">
            {!item.scheduledDate && (
              <div>
                <span className="text-light" id="TitleLabel">
                  {" "}
                  Todo On:{" "}
                </span>
                <input
                  type="datetime-local"
                  id="myDateSmallScreen"
                  className="text-white"
                  onChange={(e) => {
                    setItems((items) => {
                      return items.map((items) => {
                        if (items.id === item.id) {
                          return {
                            ...items,
                            dateOnchangeValue: e.target.value,
                          };
                        } else {
                          return items;
                        }
                      });
                    });
                  }}
                />{" "}
                <button onClick={scheduledDateSaveButton}>save</button>
              </div>
            )}

            <div>
              {" "}
              {item.scheduledDate && (
                <p id="TodoOnDarkMode">
                  <span id="TodoOn">Todo on :</span>{" "}
                  {item.dateOnchangeValue.replace("T", " " + " /" + " ")}
                </p>
              )}
            </div>
          </div>
          <div
            onClick={() => {
              document.getElementById("itemDetails").focus();
            }}
          >
            {!item.isDone && (
              <div>
                <ol id="newTodoSpaceMinimized">
                  {item.details.map((value, index) => (
                    <li key={index} className="text-white">
                      {value}
                    </li>
                  ))}
                  <input id="focu" type="submit" />
                </ol>
              </div>
            )}
          </div>
          {item.isDone && (
            <div>
              <ol id="newTodoSpaceMaximized">
                {item.details.map((value, index) => (
                  <li key={index} className="text-white">
                    {value}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div id="timeUploaded">
            <p></p>
          </div>

          {!item.isDone && (
            <div id="ContentInputs">
              <form
                className="theForm"
                onSubmit={addContent}
                autoComplete="off"
              >
                <textarea
                  type="text"
                  placeholder="Lists"
                  className="todoItemDetailsDarkMode"
                  id="itemDetails"
                  value={item.content}
                  onChange={updateInputContent}
                />

                <input
                  type="button"
                  className="submitItemButton"
                  onClick={addContent}
                  value="submit"
                />
              </form>
            </div>
          )}
          <div id="dateModifiedContainerDarkMode">
            {item.isDone && (
              <p>
                last modified :{" "}
                <span id="dateModifiedDarkMode"> {item.dateModified}</span>
              </p>
            )}
          </div>
        </div>
      )}

      {/************  light mode ***************/}
      {AppValue.themeTrue && (
        <div id="entireNewTodoLightMode">
          <div className="titleAndIconContainer">
            <div>
              {item.showTitle && <h3 id="titleLightMode">{item.title}</h3>}
              {!item.showTitle && (
                <form
                  id="TitleAndSubmit"
                  onSubmit={addTitle}
                  autoComplete="off"
                >
                  <textarea
                    type="text"
                    id="itemTitleLightMode"
                    maxLength="45"
                    onKeyUp={itemTitle}
                    placeholder="Title"
                  />
                  <button
                    type="submit"
                    className="submitTitleButton"
                    onClick={addTitle}
                  >
                    submit
                  </button>
                </form>
              )}
            </div>
            <div id="scheduledtimeSETAndDisp">
              {!item.scheduledDate && (
                <div>
                  <span className="text-dark" id="TitleLabel">
                    {" "}
                    Todo on:{" "}
                  </span>
                  <input
                    type="datetime-local"
                    id="myDate"
                    className="text-dark"
                    onChange={(e) => {
                      setItems((items) => {
                        return items.map((items) => {
                          if (items.id === item.id) {
                            return {
                              ...items,
                              dateOnchangeValue: e.target.value,
                            };
                          } else {
                            return items;
                          }
                        });
                      });
                    }}
                  />{" "}
                  <button onClick={scheduledDateSaveButton}>save</button>
                </div>
              )}

              <div>
                {" "}
                {item.scheduledDate && (
                  <p id="TodoOnLightMode">
                    <span id="TodoOn">Todo on :</span>{" "}
                    {item.dateOnchangeValue.replace("T", " " + " /" + " ")}
                  </p>
                )}
              </div>
            </div>
            {emptyNoteWarning && (
              <p id="emptyNoteWarning">Notes can't be empty</p>
            )}
            <div id="togglerAndDelete">
              {item.isDone && (
                <button
                  id="myToggleDoneLightMode"
                  className="fas fa-pencil-alt"
                  onClick={myToggleDone}
                  title="Edit Todo"
                ></button>
              )}
              {!item.isDone && (
                <button
                  id="myToggleDoneLightMode"
                  className="fas fa-check-circle"
                  onClick={myToggleDone}
                  title="Save Todo"
                ></button>
              )}
              <h3
                type="button"
                className=" fas fa-trash deleteTodoLightMode"
                id="deleteButton"
                onClick={handleClick}
                title="Delete note"
              ></h3>
            </div>
          </div>

          <div id="SmallScreenScheduledtimeSETAndDisp">
            {!item.scheduledDate && (
              <div>
                <span className="text-dark" id="TitleLabel">
                  {" "}
                  Todo On:{" "}
                </span>
                <input
                  type="datetime-local"
                  id="myDateSmallScreen"
                  className="text-dark"
                  onChange={(e) => {
                    setItems((items) => {
                      return items.map((items) => {
                        if (items.id === item.id) {
                          return {
                            ...items,
                            dateOnchangeValue: e.target.value,
                          };
                        } else {
                          return items;
                        }
                      });
                    });
                  }}
                />{" "}
                <button onClick={scheduledDateSaveButton}>save</button>
              </div>
            )}

            <div>
              {" "}
              {item.scheduledDate && (
                <p id="TodoOnLightMode">
                  <span id="TodoOn">Todo on :</span>{" "}
                  {item.dateOnchangeValue.replace("T", " " + " /" + " ")}
                </p>
              )}
            </div>
          </div>
          <div
            onClick={() => {
              document.getElementById("itemDetails").focus();
            }}
          >
            {!item.isDone && (
              <div>
                <ol id="newTodoSpaceMinimized">
                  {item.details.map((value, index) => (
                    <li key={index} className="text-black">
                      {value}
                    </li>
                  ))}
                  <input id="focu" type="submit" />
                </ol>
              </div>
            )}
          </div>
          {item.isDone && (
            <div>
              <ol id="newTodoSpaceMaximized">
                {item.details.map((value, index) => (
                  <li key={index} className="text-black">
                    {value}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div id="timeUploaded">
            <p></p>
          </div>

          {!item.isDone && (
            <div id="ContentInputs">
              <form
                className="theForm"
                onSubmit={addContent}
                autoComplete="off"
              >
                <textarea
                  type="text"
                  placeholder="Lists"
                  className="todoItemDetailsLightMode"
                  id="TodosItemDetails"
                  value={item.content}
                  onChange={updateInputContent}
                />

                <input
                  type="button"
                  className="submitItemButton"
                  onClick={addContent}
                  value="submit"
                />
              </form>
            </div>
          )}
          <div id="dateModifiedContainerLightMode">
            {item.isDone && (
              <p>
                last modified :{" "}
                <span id="dateModifiedLightMode"> {item.dateModified}</span>
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const DateModified = () => {
  let d = new Date();
  return (
    d.getMonth() +
    1 +
    "-" +
    d.getDate() +
    "-" +
    d.getFullYear() 
  );
};

export default TodoAdded;
