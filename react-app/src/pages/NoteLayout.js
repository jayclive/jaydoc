import { useEffect, useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { MyApp } from "../App";
const NoteLayout = () => {
  const AppValue = useContext(MyApp);
  return (
    <>
    
      {/******** Dark Mode ********** */}
      {!AppValue.themeTrue && (
        <div id="entireLayout">
          <div id="generalHeader" className="fixed-top">
            <div id="headerContentDarkMode">
              <div id="logoAndHeader">
                <li>
                  <img
                    src={require("./image/logo3.jpg")}
                    id="logoImg"
                    alt="JayDoc"
                  />
                </li>
              </div>

              <div id="allHeaderLinks">
                {AppValue.confirmCurrentLayout == "Notes" && (
                  <li className="headerListLinks">
                    <Link
                      to="/"
                      className="vlinksDarkMode"
                      id="currentlyThisDarkMode"
                      onClick={() => {
                        AppValue.setNoteLayoutDropBar(false);
                      }}
                    >
                      Notes
                    </Link>
                  </li>
                )}

                {AppValue.confirmCurrentLayout !== "Notes" && (
                  <li className="headerListLinks">
                    <Link
                      to="/"
                      className="vlinksDarkMode"
                      id="currentlyNotThisDarkMode"
                      onClick={() => {
                        AppValue.setConfirmCurrentLayout("Notes");
                        AppValue.setNoteLayoutDropBar(false);
                      }}
                    >
                      Notes
                    </Link>
                  </li>
                )}

                {AppValue.confirmCurrentLayout !== "Todos" && (
                  <li className="headerListLinks">
                    <Link
                      to="Todos"
                      className="vlinksDarkMode"
                      id="currentlyNotThisDarkMode"
                      onClick={() => {
                        AppValue.setConfirmCurrentLayout("Todos");
                        AppValue.setNoteLayoutDropBar(false);
                      }}
                    >
                      Todos
                    </Link>
                  </li>
                )}
                {AppValue.confirmCurrentLayout == "Todos" && (
                  <li className="headerListLinks">
                    <Link
                      to="Todos"
                      className="vlinksDarkMode"
                      id="currentlyThisDarkMode"
                      onClick={() => {
                        AppValue.setNoteLayoutDropBar(false);
                      }}
                    >
                      Todos
                    </Link>
                  </li>
                )}
                <div id="Favourites">
                  {AppValue.confirmCurrentLayout !== "Favourites" && (
                    <li className="headerListLinks">
                      <Link
                        to="Favourites"
                        className="vlinksDarkMode"
                        id="currentlyNotThisDarkMode"
                        onClick={() => {
                          AppValue.setConfirmCurrentLayout("Favourites");
                        }}
                      >
                        Favourites
                      </Link>
                    </li>
                  )}
                  {AppValue.confirmCurrentLayout == "Favourites" && (
                    <li className="headerListLinks">
                      <Link
                        to="Favourites"
                        className="vlinksDarkMode"
                        id="currentlyThisDarkMode"
                      >
                        Favourites
                      </Link>
                    </li>
                  )}
                </div>
                <div id="SearchNotes">
                  {AppValue.confirmCurrentLayout !== "SearchNotes" && (
                    <li className="headerListLinks">
                      <Link
                        to="SearchNotes"
                        className="vlinksDarkMode"
                        id="currentlyNotThisDarkMode"
                        onClick={() => {
                          AppValue.setConfirmCurrentLayout("SearchNotes");
                        }}
                      >
                        SearchNotes <span className="fas fa-search"></span>
                      </Link>
                    </li>
                  )}
                  {AppValue.confirmCurrentLayout == "SearchNotes" && (
                    <li className="headerListLinks">
                      <Link
                        to="SearchNotes"
                        className="vlinksDarkMode"
                        id="currentlyThisDarkMode"
                      >
                        SearchNotes <span className="fas fa-search"></span>
                      </Link>
                    </li>
                  )}
                </div>
                <div id="NoteLayoutDropBars">
                  {AppValue.NoteLayoutDropBar == true && (
                    <div id="NoteLayoutDropBarsContainer">
                      <li
                        className="	fa fa-close headerListLinks"
                        id="NoteLayoutDropBarsActiveIcon"
                        onClick={() => {
                          AppValue.setNoteLayoutDropBar((prev) => !prev);
                        }}
                      ></li>
                      <div
                        id="NoteLayoutDropBarsContentDarkMode"
                        onClick={() => {
                          AppValue.setNoteLayoutDropBar((prev) => !prev);
                        }}
                      >
                        {AppValue.confirmCurrentLayout !== "Favourites" && (
                          <li className="eachNoteLayoutDropDownLink headerListLinks">
                            <Link
                              to="Favourites"
                              className="vlinksDarkMode"
                              id="currentlyNotThisDarkMode"
                              onClick={() => {
                                AppValue.setMiniNoteLayoutNotificationIcon(
                                  false
                                );
                                AppValue.setConfirmCurrentLayout("Favourites");
                              }}
                            >
                              Favourites <span className="fas fa-star"></span>{" "}
                              <span>{AppValue.Favourite.length}</span>
                            </Link>
                          </li>
                        )}
                        {AppValue.confirmCurrentLayout == "Favourites" && (
                          <li className="eachNoteLayoutDropDownLink headerListLinks">
                            <Link
                              to="Favourites"
                              className="vlinksDarkMode"
                              id="currentlyThisDarkMode"
                            >
                              Favourites <span className="fas fa-star"></span>
                            </Link>
                          </li>
                        )}
                        {AppValue.confirmCurrentLayout !== "SearchNotes" && (
                          <li className="eachNoteLayoutDropDownLink headerListLinks">
                            <Link
                              to="SearchNotes"
                              className="vlinksDarkMode"
                              id="currentlyNotThisDarkMode"
                              onClick={() => {
                                AppValue.setConfirmCurrentLayout("SearchNotes");
                              }}
                            >
                              Search <span className="fas fa-search"></span>
                            </Link>
                          </li>
                        )}
                        {AppValue.confirmCurrentLayout == "SearchNotes" && (
                          <li className="eachNoteLayoutDropDownLink headerListLinks">
                            <Link
                              to="SearchNotes"
                              className="vlinksDarkMode"
                              id="currentlyThisDarkMode"
                            >
                              Search
                              <span className="fas fa-search"></span>
                            </Link>
                          </li>
                        )}
                      </div>
                    </div>
                  )}
                  {AppValue.NoteLayoutDropBar == false &&
                    AppValue.confirmCurrentLayout !== "Todos" &&
                    AppValue.confirmCurrentLayout !== "Notes" && (
                      <div
                        id="NoteLayoutDropBarsContainer"
                        onClick={() => {
                          AppValue.setNoteLayoutDropBar((prev) => !prev);
                        }}
                      >
                        <li
                          className="fas fa-bars headerListLinks"
                          id="NoteLayoutDropBarsActiveSelectedIconDarkMode"
                        ></li>
                      </div>
                    )}
                  {AppValue.NoteLayoutDropBar == false &&
                    AppValue.confirmCurrentLayout !== "Favourites" &&
                    AppValue.confirmCurrentLayout !== "SearchNotes" && (
                      <div
                        id="NoteLayoutDropBarsContainer"
                        onClick={() => {
                          AppValue.setNoteLayoutDropBar((prev) => !prev);
                        }}
                      >
                        <li
                          className="fas fa-bars headerListLinks"
                          id="currentlyNotThisDarkMode"
                        ></li>{" "}
                        {AppValue.Favourite.length > 0 &&
                          AppValue.miniNoteLayoutNotificationIcon && (
                            <span id="dropDownNotificationMiniIcon">
                              {AppValue.Favourite.length}
                            </span>
                          )}
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/******** LightMode ********** */}

      {AppValue.themeTrue && (
        <div id="entireLayout">
          <div id="generalHeader" className="fixed-top">
            <div id="headerContentLightMode">
              <div id="logoAndHeader">
                <li>
                  <img
                    src={require("./image/logoLightMode.jpg")}
                    id="logoImg"
                  />
                </li>
              </div>

              <div id="allHeaderLinks">
                {AppValue.confirmCurrentLayout == "Notes" && (
                  <li className="headerListLinks">
                    <Link
                      to="/"
                      className="vlinksLightMode"
                      id="currentlyThisLightMode"
                      onClick={() => {
                        AppValue.setNoteLayoutDropBar(false);
                      }}
                    >
                      Notes
                    </Link>
                  </li>
                )}
                {AppValue.confirmCurrentLayout !== "Notes" && (
                  <li className="headerListLinks">
                    <Link
                      to="/"
                      className="vlinksLightMode"
                      id="currentlyNotThisLightMode"
                      onClick={() => {
                        AppValue.setConfirmCurrentLayout("Notes");
                        AppValue.setNoteLayoutDropBar(false);
                      }}
                    >
                      Notes
                    </Link>
                  </li>
                )}

                {AppValue.confirmCurrentLayout !== "Todos" && (
                  <li className="headerListLinks">
                    <Link
                      to="Todos"
                      className="vlinksLightMode"
                      id="currentlyNotThisLightMode"
                      onClick={() => {
                        AppValue.setConfirmCurrentLayout("Todos");
                        AppValue.setNoteLayoutDropBar(false);
                      }}
                    >
                      Todos
                    </Link>
                  </li>
                )}
                {AppValue.confirmCurrentLayout == "Todos" && (
                  <li className="headerListLinks">
                    <Link
                      to="Todos"
                      className="vlinksLightMode"
                      id="currentlyThisLightMode"
                      onClick={() => {
                        AppValue.setNoteLayoutDropBar(false);
                      }}
                    >
                      Todos
                    </Link>
                  </li>
                )}
                <div id="Favourites">
                  {AppValue.confirmCurrentLayout !== "Favourites" && (
                    <li className="headerListLinks">
                      <Link
                        to="Favourites"
                        className="vlinksLightMode"
                        id="currentlyNotThisLightMode"
                        onClick={() => {
                          AppValue.setConfirmCurrentLayout("Favourites");
                        }}
                      >
                        Favourites
                      </Link>
                    </li>
                  )}
                  {AppValue.confirmCurrentLayout == "Favourites" && (
                    <li className="headerListLinks">
                      <Link
                        to="Favourites"
                        className="vlinksLightMode"
                        id="currentlyThisLightMode"
                      >
                        Favourites
                      </Link>
                    </li>
                  )}
                </div>
                <div id="SearchNotes">
                  {AppValue.confirmCurrentLayout !== "SearchNotes" && (
                    <li className="headerListLinks">
                      <Link
                        to="SearchNotes"
                        className="vlinksLightMode"
                        id="currentlyNotThisLightMode"
                        onClick={() => {
                          AppValue.setConfirmCurrentLayout("SearchNotes");
                        }}
                      >
                        Search <span className="fas fa-search"></span>
                      </Link>
                    </li>
                  )}
                  {AppValue.confirmCurrentLayout == "SearchNotes" && (
                    <li className="headerListLinks">
                      <Link
                        to="SearchNotes"
                        className="vlinksLightMode"
                        id="currentlyThisLightMode"
                      >
                        Search <span className="fas fa-search"></span>
                      </Link>
                    </li>
                  )}
                </div>
                <div id="NoteLayoutDropBars">
                  {AppValue.NoteLayoutDropBar == true && (
                    <div id="NoteLayoutDropBarsContainer">
                      <li
                        className="	fa fa-close headerListLinks"
                        id="NoteLayoutDropBarsActiveIcon"
                        onClick={() => {
                          AppValue.setNoteLayoutDropBar((prev) => !prev);
                        }}
                      ></li>
                      <div
                        id="NoteLayoutDropBarsContentLightMode"
                        onClick={() => {
                          AppValue.setNoteLayoutDropBar((prev) => !prev);
                        }}
                      >
                        {AppValue.confirmCurrentLayout !== "Favourites" && (
                          <li className="eachNoteLayoutDropDownLink headerListLinks">
                            <Link
                              to="Favourites"
                              className="vlinksLightMode"
                              id="currentlyNotThisLightMode"
                              onClick={() => {
                                AppValue.setConfirmCurrentLayout("Favourites");
                                AppValue.setMiniNoteLayoutNotificationIcon(
                                  false
                                );
                              }}
                            >
                              Favourites <span className="fas fa-star"></span>{" "}
                              <span>{AppValue.Favourite.length}</span>
                            </Link>
                          </li>
                        )}
                        {AppValue.confirmCurrentLayout == "Favourites" && (
                          <li className="eachNoteLayoutDropDownLink headerListLinks">
                            <Link
                              to="Favourites"
                              className="vlinksLightMode"
                              id="currentlyThisNoteLayoutDropdownLightMode"
                            >
                              Favourites <span className="fas fa-star"></span>
                            </Link>
                          </li>
                        )}
                        {AppValue.confirmCurrentLayout !== "SearchNotes" && (
                          <li className="eachNoteLayoutDropDownLink headerListLinks">
                            <Link
                              to="SearchNotes"
                              className="vlinksLightMode"
                              id="currentlyNotThisLightMode"
                              onClick={() => {
                                AppValue.setConfirmCurrentLayout("SearchNotes");
                              }}
                            >
                              Search <span className="fas fa-search"></span>
                            </Link>
                          </li>
                        )}
                        {AppValue.confirmCurrentLayout == "SearchNotes" && (
                          <li className="eachNoteLayoutDropDownLink headerListLinks">
                            <Link
                              to="SearchNotes"
                              className="vlinksLightMode"
                              id="currentlyThisNoteLayoutDropdownLightMode"
                            >
                              Search <span className="fas fa-search"></span>
                            </Link>
                          </li>
                        )}
                      </div>
                    </div>
                  )}
                  {AppValue.NoteLayoutDropBar == false &&
                    AppValue.confirmCurrentLayout !== "Todos" &&
                    AppValue.confirmCurrentLayout !== "Notes" && (
                      <div
                        id="NoteLayoutDropBarsContainer"
                        onClick={() => {
                          AppValue.setNoteLayoutDropBar((prev) => !prev);
                        }}
                      >
                        <li
                          className="fas fa-bars headerListLinks"
                          id="NoteLayoutDropBarsActiveSelectedIconLightMode"
                        ></li>
                      </div>
                    )}
                  {AppValue.NoteLayoutDropBar == false &&
                    AppValue.confirmCurrentLayout !== "Favourites" &&
                    AppValue.confirmCurrentLayout !== "SearchNotes" && (
                      <div
                        id="NoteLayoutDropBarsContainer"
                        onClick={() => {
                          AppValue.setNoteLayoutDropBar((prev) => !prev);
                        }}
                      >
                        <li
                          className="fas fa-bars headerListLinks"
                          id="currentlyNotThisLightMode"
                        ></li>
                        {AppValue.Favourite.length > 0 &&
                          AppValue.miniNoteLayoutNotificationIcon && (
                            <span id="dropDownNotificationMiniIcon">
                              {AppValue.Favourite.length}
                            </span>
                          )}
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default NoteLayout;
