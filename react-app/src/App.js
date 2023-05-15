import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteLayout from "./pages/NoteLayout";
import GeneralLayout from "./pages/GeneralLayout";
import TodoGrouped from "./TodoGrouped";
import Favourites from "./Favourites";
import MySearch from "./mySearch";
import { useState, createContext } from "react";
import NoteGrouped from "./NoteGrouped";
import SearchNotes from "./pages/searchNotes";
export const MyApp = createContext();


const App = () => {
  const [themeTrue, setThemeTrue] = useState(false);
  const [confirmAllNoteSaved, setConfirmAllNoteSaved] = useState(false);
  const [confirmAllFavouritesSaved, setConfirmAllFavouritesSaved] =
    useState(false);
  const [confirmAllTodosSaved, setConfirmAllTodosSaved] = useState(false);
  const [zoomToFill, setZoomToFill] = useState("default");
  const [pageToDisp, setPageToDisp] = useState("defaultPage");
  const [confirmGeneralCurrentLayout, setConfirmGeneralCurrentLayout] =
    useState("NotesAndTodos");
  const [confirmCurrentLayout, setConfirmCurrentLayout] = useState("Notes");
  const [NoteLayoutDropBar, setNoteLayoutDropBar] = useState(false);
  const [testAlbum, setTestAlbum] = useState([]);
  const [miniNoteLayoutNotificationIcon,setMiniNoteLayoutNotificationIcon] = useState(false)
  const [items, setItems] = useState([
    {
      title: "item 1",
      subTitle: "",
      content: "",
      isDone: false,
      isDoneIcon: "",
      dateModified: "",
      id: Math.random(10) * Math.random(5) * 3,
      details: [],
      showTitle: false,
      inputSubtitle: "",
      inputContent: "",
      contentImage: false,
      deleteContentImg: false,
      selectedImage: null,
      addedToFavourite: false,
    },
  ]);

  const [Favourite, setFavourite] = useState([]);

  const [todoItems, setTodoItems] = useState([
    {
      title: "item 1",
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

  return (
    <>
      <MyApp.Provider
        value={{
          themeTrue: themeTrue,
          setThemeTrue: setThemeTrue,
          items: items,
          setItems: setItems,
          setTodoItems: setTodoItems,
          todoItems: todoItems,
          setConfirmAllNoteSaved: setConfirmAllNoteSaved,
          confirmAllNoteSaved: confirmAllNoteSaved,
          setConfirmAllTodosSaved: setConfirmAllTodosSaved,
          confirmAllTodosSaved: confirmAllTodosSaved,
          zoomToFill: zoomToFill,
          setZoomToFill: setZoomToFill,
          setPageToDisp: setPageToDisp,
          pageToDisp: pageToDisp,
          setConfirmGeneralCurrentLayout: setConfirmGeneralCurrentLayout,
          confirmGeneralCurrentLayout: confirmGeneralCurrentLayout,
          NoteLayoutDropBar: NoteLayoutDropBar,
          setNoteLayoutDropBar: setNoteLayoutDropBar,
          setConfirmCurrentLayout: setConfirmCurrentLayout,
          confirmCurrentLayout: confirmCurrentLayout,
          setTestAlbum: setTestAlbum,
          testAlbum: testAlbum,
          setFavourite: setFavourite,
          Favourite: Favourite,
          setConfirmAllFavouritesSaved: setConfirmAllFavouritesSaved,
          confirmAllFavouritesSaved: confirmAllFavouritesSaved,
          setMiniNoteLayoutNotificationIcon: setMiniNoteLayoutNotificationIcon,
          miniNoteLayoutNotificationIcon: miniNoteLayoutNotificationIcon,
        }}
      >
        {pageToDisp == "defaultPage" && (
          <div id="entirePage">
            <BrowserRouter>
              <Routes>
                {" "}
                <Route path="/" element={<GeneralLayout />}>
                  <Route path="/" element={<NoteLayout />}>
                    <Route index element={<NoteGrouped />} />
                    <Route path="Todos" element={<TodoGrouped />} />
                    <Route path="Favourites" element={<Favourites />} />
                    <Route path="SearchNotes" element={<SearchNotes />} />
                  </Route>

                  <Route path="MySearch" element={<MySearch />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        )}
        {pageToDisp == "notePage" && <NoteGrouped />}
      </MyApp.Provider>
    </>
  );
};

export default App;
