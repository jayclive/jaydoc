import { useState, useContext, createContext } from "react";
import { MyApp } from "./App";
import { MyTodoArranged } from "./NoteGrouped";
import FavouriteContentAdded from "./FavouriteContentAdded";
const Favourites = () => {
  const AppValue = useContext(MyApp);
  const MyTodo = useContext(MyTodoArranged);

  return (
    <>
      <div id="entireFavouritesContainer">
        {AppValue.pageToDisp == "defaultPage" && (
          <>
            <div id="FavouriteAndClearFavContainer">
              <div id="FavouriteAndNumberOfFavouriteContainer">
                {AppValue.themeTrue && (
                  <h4 id="FavouriteLightMode">
                    Favourites <span className="fas fa-star"></span>
                  </h4>
                )}
                {!AppValue.themeTrue && (
                  <h4 id="FavouriteDarkMode">
                    Favourites <span className="fas fa-star"></span>
                  </h4>
                )}
                <div id="NumberOfFavourites">
                  <span id="NumberOfFavouritesText"> no. of Favourites </span> :{" "}
                  <span id="NumberOfFavouritesNumber">
                    {" "}
                    {AppValue.Favourite.length}{" "}
                  </span>
                </div>
              </div>
              {AppValue.Favourite.length > 1 && (
                <button
                  id="clearAllFavourites"
                  onClick={() => {
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
                  }}
                >
                  clear All favourites
                </button>
              )}
            </div>
          </>
        )}

        <div id="allMyNoteSpace">
          {AppValue.Favourite.map((item, index) => (
            <div key={index} className="allMyNotes">
              <FavouriteArranged
                setConfirmAllFavouritesSaved={
                  AppValue.setConfirmAllFavouritesSaved
                }
                item={item}
              />
            </div>
          ))}
        </div>

        {AppValue.Favourite.length == 0 && (
          <div id="emptyListImageContainer">
            <h3>No Favourite added</h3>
            <img
              id="emptyListImage"
              src={require("./pages/image/emptyItemImage.jpg")}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
      </div>
    </>
  );
};

const FavouriteArranged = ({
  handleDelete,
  setConfirmAllFavouritesSaved,
  item,
}) => {
  const AppValue = useContext(MyApp);

  return (
    <>
      {AppValue.zoomToFill == "default" && (
        <div>
          <div className="NoteAddedAndDelete">
            <FavouriteContentAdded
              item={item}
              setItems={AppValue.setItems}
              setFavourite={AppValue.setFavourite}
              setConfirmAllFavouritesSaved={setConfirmAllFavouritesSaved}
              items={AppValue.items}
              Favourite={AppValue.Favourite}
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

export default Favourites;
