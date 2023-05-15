import { useState, useEffect, useContext, createContext } from "react";
import { MyApp } from "../App";
import SearchAdded from "../searchAdded";
const SearchNotes = () => {
  const AppValue = useContext(MyApp);
  const [searchNote, setSearchNote] = useState("");
  const [results, setResults] = useState([]);
  const [displaySuggestions, setDisplaySuggestions] = useState(false);
  const searchVal = (event) => {
    setSearchNote(event.target.value);
  };
  const searchValOnKeyUp = () => {
    setResults(() => {
      setDisplaySuggestions(true);
      const newItems = AppValue.items.filter((value) => {
        return value.title.toLowerCase().includes(searchNote.toLowerCase());
      });

      return newItems;
    });
  };
  return (
    <>
      <div id="EntireSearchNoteContainer">
        <div
          id="InputAndSuggestion"
          onMouseLeave={() => {
            setDisplaySuggestions(false);
          }}
        >
          <div id="searchNotesInputAndButton">
            <input
              autoFocus
              autoComplete="off"
              type="text"
              id="searchNotesInput"
              placeholder="search For Notes"
              value={searchNote}
              onChange={searchVal}
              onKeyUp={searchValOnKeyUp}
            />
            <button
              type="button"
              id="searchNoteButton"
              className="fas fa-search"
              onClick={() => {
                setDisplaySuggestions(false);
              }}
            >
            
            </button>
          </div>
          {displaySuggestions && (
            <div id="entireSearchNoteSuggestion">
              {results.map((value, index) => (
                <p
                  key={index}
                  id="searchNoteSuggestions"
                  onClick={(event) => {
                    setSearchNote(event.target.innerText);
                    setResults(() => {
                      setDisplaySuggestions(true);
                      const newItems = AppValue.items.filter((value) => {
                        return value.title
                          .toLowerCase()
                          .includes(event.target.innerText.toLowerCase());
                      });
                      setDisplaySuggestions(false);
                      return newItems;
                    });
                  }}
                >
                  {value.title}
                </p>
              ))}{" "}
            </div>
          )}
        </div>

        <div id="searchDescription">
          {" "}
          Search result<span className="text-secondary">(s)</span> for :{" "}
          <span style={{ "font-size": "21px" }}>{searchNote}</span>
        </div>

        {searchNote !== "" && (
          <div id="allMyNoteSpace">
            {results.map((item, index) => (
              <div key={index} className="allMyNotes">
                <SearchAddedArranged
                  setConfirmAllFavouritesSaved={
                    AppValue.setConfirmAllFavouritesSaved
                  }
                  item={item}
                  AppValue={AppValue}
                  setResults={setResults}
                  results={results}
                />
              </div>
            ))}
          </div>
        )}
        {results == "" && searchNote !== "" && (
          <div id="noNatchWarningContainer">
            <h1 id="noNatchWarning">no Note match your search</h1>
          </div>
        )}
      </div>
    </>
  );
};

const SearchAddedArranged = ({
  setConfirmAllFavouritesSaved,
  item,
  AppValue,
  setResults,
  results,
}) => {
  return (
    <>
      {AppValue.zoomToFill == "default" && (
        <div>
          <div className="NoteAddedAndDelete">
            <SearchAdded
              item={item}
              setResults={setResults}
              setConfirmAllFavouritesSaved={setConfirmAllFavouritesSaved}
              results={results}
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
                <h1 id="ZoomedItemTitle">{item.title}</h1>
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

export default SearchNotes;
