import { useEffect, useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { MyApp } from "../App";
const GeneralLayout = () => {
  const AppValue = useContext(MyApp);

  return (
    <>
      {/********** Dark mode ************* */}
      {!AppValue.themeTrue && (
        <div className="fixed-bottom" id="GeneralLayoutFooter">
          {AppValue.confirmGeneralCurrentLayout == "NotesAndTodos" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="/"
                className="generalCurrentPage GeneralLayoutFooterLinksDarkMode fa fa-book"
                onClick={() => {
                  AppValue.setConfirmCurrentLayout("Notes");
                }}
              ></Link>
            </li>
          )}
          {AppValue.confirmGeneralCurrentLayout !== "NotesAndTodos" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="/"
                className="NotGeneralCurrentPage GeneralLayoutFooterLinksDarkMode fa fa-book"
                onClick={() => {
                  AppValue.setConfirmGeneralCurrentLayout("NotesAndTodos");
                  AppValue.setConfirmCurrentLayout("Notes");
                }}
              ></Link>
            </li>
          )}
          {AppValue.confirmGeneralCurrentLayout == "discover" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="/"
                className="generalCurrentPage GeneralLayoutFooterLinksDarkMode fa fa-cc-discover"
                onClick={() => {
                  AppValue.setConfirmCurrentLayout("Notes");
                }}
              ></Link>
            </li>
          )}
          {AppValue.confirmGeneralCurrentLayout !== "discover" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="/"
                className="NotGeneralCurrentPage GeneralLayoutFooterLinksDarkMode fa fa-cc-discover"
                onClick={() => {
                  AppValue.setConfirmGeneralCurrentLayout("discover");
                  AppValue.setConfirmCurrentLayout("Notes");
                }}
              ></Link>
            </li>
          )}
          {AppValue.confirmGeneralCurrentLayout == "search" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="MySearch"
                className="generalCurrentPage GeneralLayoutFooterLinksDarkMode	fas fa-search"
              ></Link>
            </li>
          )}
          {AppValue.confirmGeneralCurrentLayout !== "search" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="MySearch"
                className="NotGeneralCurrentPage GeneralLayoutFooterLinksDarkMode	fas fa-search"
                onClick={() => {
                  AppValue.setConfirmGeneralCurrentLayout("search");
                }}
              ></Link>
            </li>
          )}
          {AppValue.themeTrue && (
            <div id="themeToggleContainer">
              <button
                className="generalCurrentPage far fa-moon"
                id="themeToggleDarkMode"
                title="toggle theme"
                onClick={() => {
                  AppValue.setThemeTrue((prev) => !prev);
                  if (AppValue.themeTrue == false) {
                    document.getElementById("body").style =
                      "background-color:white;color:black";
                  } else {
                    document.getElementById("body").style =
                      "    background-color:black;color:white";
                  }
                }}
              ></button>
            </div>
          )}
          {!AppValue.themeTrue && (
            <div id="themeToggleContainer">
              <button
                className="NotGeneralCurrentPage fas fa-sun"
                id="themeToggleDarkMode"
                title="toggle theme"
                onClick={() => {
                  AppValue.setThemeTrue((prev) => !prev);
                  if (AppValue.themeTrue == false) {
                    document.getElementById("body").style =
                      "background-color:white;color:black";
                  } else {
                    document.getElementById("body").style =
                      "    background-color:black;color:white";
                  }
                }}
              ></button>
            </div>
          )}
        </div>
      )}

      {/********** light mode ************* */}

      {AppValue.themeTrue && (
        <div className="fixed-bottom" id="GeneralLayoutFooterLightMode">
          {AppValue.confirmGeneralCurrentLayout == "NotesAndTodos" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="/"
                className="generalCurrentPageLightMode GeneralLayoutFooterLinksLightMode fa fa-book"
                onClick={() => {
                  AppValue.setConfirmCurrentLayout("Notes");
                }}
              ></Link>
            </li>
          )}
          {AppValue.confirmGeneralCurrentLayout !== "NotesAndTodos" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="/"
                className="NotGeneralCurrentPageLightMode GeneralLayoutFooterLinksLightMode fa fa-book"
                onClick={() => {
                  AppValue.setConfirmGeneralCurrentLayout("NotesAndTodos");
                  AppValue.setConfirmCurrentLayout("Notes");
                }}
              ></Link>
            </li>
          )}{" "}
          {AppValue.confirmGeneralCurrentLayout == "discover" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="/"
                className="generalCurrentPageLightMode GeneralLayoutFooterLinksLightMode fa fa-cc-discover"
                onClick={() => {
                  AppValue.setConfirmCurrentLayout("Notes");
                }}
              ></Link>
            </li>
          )}
          {AppValue.confirmGeneralCurrentLayout !== "discover" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="/"
                className="NotGeneralCurrentPageLightMode GeneralLayoutFooterLinksLightMode fa fa-cc-discover"
                onClick={() => {
                  AppValue.setConfirmGeneralCurrentLayout("discover");
                }}
              ></Link>
            </li>
          )}
          {AppValue.confirmGeneralCurrentLayout == "search" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="MySearch"
                className="generalCurrentPageLightMode GeneralLayoutFooterLinksLightMode	fas fa-search"
              ></Link>
            </li>
          )}
          {AppValue.confirmGeneralCurrentLayout !== "search" && (
            <li id="GeneralLayoutFooterLinksContainer">
              <Link
                to="MySearch"
                className="NotGeneralCurrentPageLightMode GeneralLayoutFooterLinksLightMode	fas fa-search"
                onClick={() => {
                  AppValue.setConfirmGeneralCurrentLayout("search");
                }}
              ></Link>
            </li>
          )}
          <div id="themeToggleContainer">
            <button
              className="NotGeneralCurrentPageLightMode far fa-moon"
              id="themeToggleLightMode"
              title="toggle theme"
              onClick={() => {
                AppValue.setThemeTrue((prev) => !prev);
                if (AppValue.themeTrue == false) {
                  document.getElementById("body").style =
                    "background-color:white;color:black";
                } else {
                  document.getElementById("body").style =
                    "    background-color:black;color:white";
                }
              }}
            ></button>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default GeneralLayout;
