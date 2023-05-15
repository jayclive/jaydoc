import { useState, useEffect, useContext, createContext } from "react";

import NoteAdded from "./NoteAdded";
import { MyApp } from "./App";
export const MyTodoArranged = createContext();
const NoteGrouped = () => {
  const AppValue = useContext(MyApp);
  const [errorMessage, setErrorMessage] = useState(false);

  const addNewNoteGroup = () => {
    console.log(AppValue.items);
    AppValue.setConfirmAllNoteSaved(false);
    AppValue.setItems((prevItems) => [
      ...prevItems,
      {
        title: `item ${prevItems.length + 1}`,
        subTitle: "",
        content: "",
        isDone: false,
        isDoneIcon: "",
        dateModified: "",
        id: Math.random(10) * Math.random(5) * 3,
        details: [],
        dateModified: false,
        showTitle: false,
        inputSubtitle: "",
        inputContent: "",
        contentImage: false,
        deleteContentImg: false,
        selectedImage: null,
        addedToFavourite: false,
      },
    ]);
  };

  const deleteAll = () => {
    AppValue.setItems((prevItems) => [...prevItems, { emptyListIcon: true }]);
    const newItems = AppValue.items.filter((value) => {
      return (value.id = "");
    });
    setErrorMessage(false);
    console.log(newItems);
    AppValue.setItems(newItems);
    AppValue.setFavourite(() => {
      const newItems = AppValue.Favourite.filter((value) => {
        return value == "";
      });

      return newItems;
    });
  };

  const handleDelete = (id) => {
    const newItems = AppValue.items.filter((value) => {
      return value.id != id;
    });

    AppValue.setItems(newItems);

    AppValue.setFavourite(() => {
      const newItems = AppValue.Favourite.filter((value) => {
        return value == "";
      });

      return newItems;
    });
    AppValue.setItems((items) => {
      return items.map((itItem) => {
        return {
          ...itItem,
          addedToFavourite: false,
        };
      });
    });
  };

  return (
    <>
      <div id="entireNoteGroupedContainer">
        {AppValue.pageToDisp == "defaultPage" && (
          <div id="wrapNewNoteAndAdder">
            <div id="addNewNoteAndNumberOfNotes">
              <p>
                <span id="numberOfNote_Texts">No of notes :</span>{" "}
                <span>{AppValue.items.length}</span>
                <button
                  onClick={() => {
                    if (
                      AppValue.confirmAllNoteSaved !== false ||
                      AppValue.items.length == 0
                    ) {
                      addNewNoteGroup();
                      setErrorMessage(false);
                    } else {
                      setErrorMessage(true);
                      setTimeout(() => setErrorMessage(false), 10000);
                    }
                  }}
                  id="addNote"
                >
                  add new note
                </button>
                {AppValue.items.length > 1 && (
                  <button onClick={deleteAll} id="deleteAllNotes">
                    delete all Notes
                  </button>
                )}
              </p>
            </div>

            <div id="subTabSmallScreen">
              <div id="smallscreenNotesAndNumberOfNotes">
                <span id="numberOfNotes">No of notes :</span>{" "}
                <span id="numberOfNoteNumbers">{AppValue.items.length}</span>
              </div>
              <div className="mb-4">
                <button
                  onClick={() => {
                    if (
                      AppValue.confirmAllNoteSaved !== false ||
                      AppValue.items.length == 0
                    ) {
                      addNewNoteGroup();
                      setErrorMessage(false);
                    } else {
                      setErrorMessage(true);
                      setTimeout(() => setErrorMessage(false), 10000);
                    }
                  }}
                  id="addNote"
                >
                  add new Note
                </button>

                {AppValue.items.length > 1 && (
                  <button onClick={deleteAll} id="deleteAllNotes">
                    delete all Notes
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        <div id="noteDisplayContentContainer">
          {errorMessage && (
            <p className="pl-3 pr-3 text-danger" id="errorMessage">
              {" "}
              To add new Note please save all previous and current Notes, to
              save Notes click on the checked icon{" "}
              <span
                className=" fas fa-check-circle"
                id="errorMessageIcon"
              ></span>{" "}
              , available on each Note
            </p>
          )}
          <div id="allMyNoteSpace">
            {AppValue.items.map((item, index) => (
              <div key={index} className="allMyNotes">
                <NoteArranged
                  handleDelete={handleDelete}
                  setConfirmAllNoteSaved={AppValue.setConfirmAllNoteSaved}
                  item={item}
                />
              </div>
            ))}
          </div>

          {AppValue.items.length == 0 && (
            <div id="emptyListImageContainer">
              <h3>No Note found</h3>
              <img
                id="emptyListImage"
                src={require("./pages/image/emptyItemImage.jpg")}
                onClick={addNewNoteGroup}
                style={{ cursor: "pointer" }}
              />
              <button
                onClick={addNewNoteGroup}
                id="addNote"
                className="	fas fa-plus "
                title="add note"
              ></button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const NoteArranged = ({ handleDelete, setConfirmAllNoteSaved, item }) => {
  const AppValue = useContext(MyApp);
  const handleClick = () => {
    setConfirmAllNoteSaved(true);
    handleDelete(item.id);
    AppValue.setFavourite(() => {
      const newItems = AppValue.Favourite.filter((value) => {
        return value.id != item.id;
      });

      return newItems;
    });
  };
  return (
    <>
      {AppValue.zoomToFill == "default" && (
        <div>
          <div className="NoteAddedAndDelete">
            <NoteAdded
              item={item}
              setItems={AppValue.setItems}
              handleClick={handleClick}
              setConfirmAllNoteSaved={setConfirmAllNoteSaved}
              items={AppValue.items}
              Favourite={AppValue.Favourite}
              setFavourite={AppValue.setFavourite}
            />
          </div>
        </div>
      )}

      {AppValue.zoomToFill == item.id && (
        <>
          {!AppValue.themeTrue && (
            <div id="entireZoomedItemDarkMode">
              <div
                id="ZoomedItemArrowAndTitleDarkMode"
                className="fixed-top text-light"
              >
                <h2
                  className="		fas fa-arrow-circle-left"
                  id="zoomeItemArrow"
                  onClick={() => {
                    AppValue.setZoomToFill("default");
                    AppValue.setPageToDisp("defaultPage");
                  }}
                ></h2>
                <h1 id="ZoomedItemTitle">{item.title}</h1>
              </div>
              <div id="zoomedDetailContentContainer">
                {item.details.map((detail, index) => (
                  <div key={index} className="text-white">
                    <div>{detail.detailsContent}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {AppValue.themeTrue && (
            <div id="entireZoomedItemLightMode">
              <div
                id="ZoomedItemArrowAndTitleLightMode"
                className=" fixed-top text-dark"
              >
                <h2
                  className="		fas fa-arrow-circle-left"
                  id="zoomeItemArrow"
                  onClick={() => {
                    AppValue.setZoomToFill("default");
                    AppValue.setPageToDisp("defaultPage");
                    console.log("item", item);
                  }}
                ></h2>
                <h1>{item.title}</h1>
              </div>
              <div id="zoomedDetailContentContainer">
                {item.details.map((detail, index) => (
                  <div key={index} className="text-dark">
                    <div>{detail.detailsContent}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

const ApiTest = () => {
  const [apiVal, setApiVal] = useState();

  const loadDoc = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      let apiArray = this.responseText;
      const myArr = JSON.parse(apiArray);
      let table = ` <table>
      <tr> 
        <th> ID </th>
        <th> Title </th>
        <th> userId </th>
        <th> completed</th>
      </tr>
`;
      for (let x in myArr) {
        table += ` 
      <tr>
         <td id="myId">${myArr[x].id} </td>
         <td> ${myArr[x].title} </td> 
           <td> ${myArr[x].userId} </td>
          <td id="myId">${myArr[x].userId} </td>
        
      </tr>`;
      }
      table += `</table>`;
      document.getElementById("demo").innerHTML = table;

      console.log(apiVal);
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
    xhttp.send();
  };

  return (
    <>
      <div id="demo"></div>
      <button onClick={loadDoc}>show Api</button>
    </>
  );
};

export default NoteGrouped;
