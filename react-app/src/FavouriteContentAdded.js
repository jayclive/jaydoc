import { useState, useEffect, useRef, useContext } from "react";
import { MyApp } from "./App";
const FavouriteContentAdded = ({
  item,
  Favourite,
  setItems,
  setFavourite,
  setConfirmAllFavouritesSaved,

}) => {
  const AppValue = useContext(MyApp);

  const [emptyNoteWarning, setEmptyNoteWarning] = useState(false);
  const ItemAndTitle = () => {
    return (
      <>
        <div className="itemDetailsDisp">
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.content}</div>
        </div>
      </>
    );
  };

  const ContentImage = () => {
    return (
      <>
        <div id="contentImgAndRemoveButton">
          <img
            alt="not found"
            id="contentImg"
            src={URL.createObjectURL(item.selectedImage)}
          />
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
      setFavourite((items) => {
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

  const addSubtitle = (event) => {
    event.preventDefault();
    if (item.subTitle !== "") {
      setItems((items) => {
        return items.map((itItem) => {
          if (itItem.id === item.id) {
            return {
              ...itItem,
              details: [
                ...itItem.details,
                {
                  id: Math.random(17) * Math.random(4) * 3,
                  detailsContent: <h4>{item.subTitle}</h4>,
                },
              ],
              subTitle: "",
            };
          } else {
            return itItem;
          }
        });
      });
      setFavourite((items) => {
        return items.map((itItem) => {
          if (itItem.id === item.id) {
            return {
              ...itItem,
              details: [
                ...itItem.details,
                {
                  id: Math.random(17) * Math.random(4) * 3,
                  detailsContent: <h4>{item.subTitle}</h4>,
                },
              ],
              subTitle: "",
            };
          } else {
            return itItem;
          }
        });
      });
      document.getElementById("focu").focus();
    }
  };

  const addContent = () => {
    if (item.isDone !== true) {
      item.isDoneIcon = "fas fa-check-circle ";
    }

    if (item.content !== "") {
      setItems((items) => {
        return items.map((itItem) => {
          if (itItem.id === item.id) {
            return {
              ...itItem,
              details: [
                ...itItem.details,
                {
                  id: Math.random(17) * Math.random(4) * 3,
                  detailsContent: <ItemAndTitle />,
                },
              ],
              content: "",
            };
          } else {
            return itItem;
          }
        });
      });
      setFavourite((items) => {
        return items.map((itItem) => {
          if (itItem.id === item.id) {
            return {
              ...itItem,
              details: [
                ...itItem.details,
                {
                  id: Math.random(17) * Math.random(4) * 3,
                  detailsContent: <ItemAndTitle />,
                },
              ],
              content: "",
            };
          } else {
            return itItem;
          }
        });
      });
      document.getElementById("focu").focus();
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
      setFavourite((items) => {
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

  const toggleDone = () => {
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
      setFavourite((items) => {
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
        setConfirmAllFavouritesSaved(true);

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
        setFavourite((items) => {
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
        setConfirmAllFavouritesSaved(false);
      }
    }
  };

  const inputSubtitle = (e) => {
    if (e.target.value !== "") {
      setItems((items) => {
        return items.map((items) => {
          if (items.id === item.id) {
            return {
              ...items,
              subTitle: e.target.value,
            };
          } else {
            return items;
          }
        });
      });
      setFavourite((items) => {
        return items.map((items) => {
          if (items.id === item.id) {
            return {
              ...items,
              subTitle: e.target.value,
            };
          } else {
            return items;
          }
        });
      });
    }
  };

  const inputContent = (e) => {
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
    setFavourite((items) => {
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

  const uploadContentImage = () => {
    setItems((items) => {
      return items.map((itItem) => {
        if (itItem.id === item.id) {
          return {
            ...itItem,
            details: [
              ...itItem.details,
              {
                id: Math.random(17) * Math.random(4) * 3,
                detailsContent: <ContentImage />,
              },
            ],
          };
        } else {
          return itItem;
        }
      });
    });
    setFavourite((items) => {
      return items.map((itItem) => {
        if (itItem.id === item.id) {
          return {
            ...itItem,
            details: [
              ...itItem.details,
              {
                id: Math.random(17) * Math.random(4) * 3,
                detailsContent: <ContentImage />,
              },
            ],
          };
        } else {
          return itItem;
        }
      });
    });

    setItems((items) => {
      return items.map((items) => {
        if (items.id === item.id) {
          return {
            ...items,
            ContentImage: !item.ContentImage,
          };
        } else {
          return items;
        }
      });
    });
    setFavourite((items) => {
      return items.map((items) => {
        if (items.id === item.id) {
          return {
            ...items,
            ContentImage: !item.ContentImage,
          };
        } else {
          return items;
        }
      });
    });
    document.getElementById("focu").focus();
  };

  const cancelUploadContentImage = () => {
    setItems((items) => {
      return items.map((items) => {
        if (items.id === item.id) {
          return {
            ...items,
            ContentImage: !item.ContentImage,
          };
        } else {
          return items;
        }
      });
    });
    setFavourite((items) => {
      return items.map((items) => {
        if (items.id === item.id) {
          return {
            ...items,
            ContentImage: !item.ContentImage,
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
        <div id="entireNewNoteDarkMode">
          <div className="titleAndIconContainer">
            <div>
              {item.showTitle && <h1 id="titleDarkMode">{item.title}</h1>}
              {!item.showTitle && (
                <form
                  onSubmit={addTitle}
                  id="TitleAndSubmit"
                  autoComplete="off"
                >
                  <span className="text-light" id="TitleLabel">
                    {" "}
                    Title:{" "}
                  </span>
                  <input
                    type="text"
                    id="itemTitleDarkMode"
                    maxLength="44"
                    onKeyUp={itemTitle}
                    placeholder={item.title}
                  />
                  <button
                    type="button"
                    className="submitTitleButton"
                    onClick={addTitle}
                  >
                    submit
                  </button>
                </form>
              )}
            </div>
            {emptyNoteWarning && (
              <p id="emptyNoteWarning">Note cant be empty</p>
            )}
            <div id="togglerAndDelete">
              {item.isDone && !item.addedToFavourite && (
                <button
                  id="AddToFavourite"
                  className="	far fa-star"
                  onClick={() => {
                    setItems((items) => {
                      return items.map((itItem) => {
                        if (itItem.id === item.id) {
                          return {
                            ...itItem,
                            addedToFavourite: true,
                          };
                        } else {
                          return itItem;
                        }
                      });
                    });
                    setFavourite((items) => {
                      return items.map((itItem) => {
                        if (itItem.id === item.id) {
                          return {
                            ...itItem,
                            addedToFavourite: true,
                          };
                        } else {
                          return itItem;
                        }
                      });
                    });
                  }}
                ></button>
              )}
              {item.isDone && item.addedToFavourite && (
                <button
                  id="AddToFavourite"
                  className="	fas fa-star"
                  onClick={() => {
                    setItems((items) => {
                      return items.map((itItem) => {
                        if (itItem.id === item.id) {
                          return {
                            ...itItem,
                            addedToFavourite: false,
                          };
                        } else {
                          return itItem;
                        }
                      });
                    });
                    setFavourite(() => {
                      const newItems = Favourite.filter((value) => {
                        return value.id != item.id;
                      });

                      return newItems;
                    });
                  }}
                ></button>
              )}
              <div id="errorMessageAndToggle">
                {!item.isDone && (
                  <>
                    {" "}
                    <button
                      id="myToggleDoneDarkMode"
                      className="mr-4 fas fa-check-circle "
                      onClick={toggleDone}
                      title="Save note"
                    ></button>
                  </>
                )}
              </div>

              {item.isDone && (
                <button
                  id="myToggleDoneDarkMode"
                  className="mr-4 fas fa-pencil-alt"
                  onClick={toggleDone}
                  title="Edit note"
                ></button>
              )}
            </div>
          </div>
          {!item.isDone && (
            <div>
              <div id="newNoteSpaceMinimizedDarkMode">
                {item.details.map((detail, index) => (
                  <div key={index} className="text-white">
                    <DetailsAndDeleteBtn
                      detail={detail}
                      setItems={setItems}
                      setFavourite={setFavourite}
                      item={item}
                    />
                  </div>
                ))}
                <div id="focuContainer">
                  <input
                    id="focu"
                    type="text"
                    className="mt-5"
                    onFocus={() => {
                      document.getElementById("focu").blur();
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {item.isDone && (
            <div>
              <div id="newNoteSpaceMaximizedDarkMode">
                {item.details.map((detail, index) => (
                  <div key={index} className="text-white">
                    {detail.detailsContent}
                  </div>
                ))}{" "}
              </div>
            </div>
          )}
          {!item.isDone && (
            <div>
              <div className="row">
                <div className="col-sm-8">
                  <form onSubmit={addSubtitle}>
                    <input
                      type="text"
                      className="boldHeaderDarkMode"
                      placeholder=" Sub-heading (optional)"
                      value={item.subTitle}
                      onInput={inputSubtitle}
                      maxLength="150"
                    />
                    <button
                      type="submit"
                      className="submitSubtitleButton"
                      onClick={addSubtitle}
                    >
                      add
                    </button>
                  </form>
                </div>

                <div className="col-sm-4">
                  {item.ContentImage && (
                    <>
                      <div id="previewContentImgAndUploadBtn">
                        <h1
                          type="button"
                          onClick={cancelUploadContentImage}
                          id="contentImgRemoveBtnDarkMode"
                          className="mr-3	fa fa-remove"
                        ></h1>
                        <img
                          alt="not an image"
                          className="text-light"
                          id="previewContentImg"
                          src={URL.createObjectURL(item.selectedImage)}
                        />
                        <h1
                          type="button"
                          onClick={uploadContentImage}
                          id="contentImgUploadBtnDarkMode"
                          className="ml-2	fab fa-telegram"
                        ></h1>
                      </div>
                    </>
                  )}
                  {!item.ContentImage && (
                    <>
                      <label
                        className="fas fa-images"
                        id="contentImageLabelDarkMode"
                      >
                        <input
                          type="file"
                          id="myImage"
                          onChange={(event) => {
                            setItems((items) => {
                              return items.map((itItem) => {
                                if (itItem.id === item.id) {
                                  return {
                                    ...itItem,
                                    selectedImage: event.target.files[0],
                                    ContentImage: !item.ContentImage,
                                  };
                                } else {
                                  return itItem;
                                }
                              });
                            });
                            setFavourite((items) => {
                              return items.map((itItem) => {
                                if (itItem.id === item.id) {
                                  return {
                                    ...itItem,
                                    selectedImage: event.target.files[0],
                                    ContentImage: !item.ContentImage,
                                  };
                                } else {
                                  return itItem;
                                }
                              });
                            });
                          }}
                        />
                      </label>
                    </>
                  )}
                </div>
              </div>
              <form className="theForm" onSubmit={addContent}>
                <textarea
                  type="text"
                  placeholder="paragraph"
                  value={item.content}
                  className="itemDetailsDarkMode"
                  id="itemDetails"
                  onChange={inputContent}
                />
                <span
                  className="text-white	fas fa-arrows-alt-v "
                  id="textAreaIcon"
                ></span>

                <input
                  type="button"
                  className="submitItemButton"
                  onClick={addContent}
                  value="submit"
                ></input>
              </form>
            </div>
          )}

          {item.isDone && (
            <>
              <div id="zoomNoteBtnAndDateModifiedContainer">
                <p
                  className="text-light fas fa-expand-arrows-alt"
                  id="expandNoteArrow"
                  onClick={() => {
                    AppValue.setZoomToFill(item.id);
                    AppValue.setPageToDisp("notePage");
                  }}
                ></p>
                <div id="dateModifiedContainerDarkMode">
                  <p>
                    last modified :{" "}
                    <span id="dateModifiedDarkMode"> {item.dateModified}</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/************  light mode ***************/}
      {AppValue.themeTrue && (
        <div id="entireNewNoteLightMode">
          <div className="titleAndIconContainer">
            <div>
              {item.showTitle && <h1 id="titleLightMode">{item.title}</h1>}
              {!item.showTitle && (
                <form
                  onSubmit={addTitle}
                  id="TitleAndSubmit"
                  autoComplete="off"
                >
                  <span className="text-dark" id="TitleLabel">
                    {" "}
                    Title:{" "}
                  </span>
                  <input
                    type="text"
                    id="itemTitleLightMode"
                    maxLength="45"
                    onKeyUp={itemTitle}
                    placeholder={item.title}
                  />
                  <button
                    type="button"
                    className="submitTitleButton"
                    onClick={addTitle}
                  >
                    submit
                  </button>
                </form>
              )}
            </div>
            {emptyNoteWarning && (
              <p id="emptyNoteWarning">Note cant be empty</p>
            )}

            <div id="togglerAndDelete">
              {item.isDone && !item.addedToFavourite && (
                <button
                  id="AddToFavourite"
                  className="	far fa-star"
                  onClick={() => {
                    setItems((items) => {
                      return items.map((itItem) => {
                        if (itItem.id === item.id) {
                          return {
                            ...itItem,
                            addedToFavourite: true,
                          };
                        } else {
                          return itItem;
                        }
                      });
                    });
                    setFavourite((items) => {
                      return items.map((itItem) => {
                        if (itItem.id === item.id) {
                          return {
                            ...itItem,
                            addedToFavourite: true,
                          };
                        } else {
                          return itItem;
                        }
                      });
                    });
                  }}
                ></button>
              )}
              {item.isDone && item.addedToFavourite && (
                <button
                  id="AddToFavourite"
                  className=" fas fa-star"
                  onClick={() => {
                    setItems((items) => {
                      return items.map((itItem) => {
                        if (itItem.id === item.id) {
                          return {
                            ...itItem,
                            addedToFavourite: false,
                          };
                        } else {
                          return itItem;
                        }
                      });
                    });

                    setFavourite(() => {
                      const newItems = Favourite.filter((value) => {
                        return value.id != item.id;
                      });

                      return newItems;
                    });
                  }}
                ></button>
              )}
              <div id="errorMessageAndToggle">
                {!item.isDone && (
                  <>
                    {" "}
                    <button
                      id="myToggleDoneLightMode"
                      className="mr-4 fas fa-check-circle "
                      onClick={toggleDone}
                      title="Save note"
                    ></button>
                  </>
                )}
              </div>

              {item.isDone && (
                <>
                  <button
                    id="myToggleDoneLightMode"
                    className="mr-4 fas fa-pencil-alt"
                    onClick={toggleDone}
                    title="Edit note"
                  ></button>
                </>
              )}
            </div>
          </div>
          {!item.isDone && (
            <div>
              <div id="newNoteSpaceMinimizedLightMode">
                {item.details.map((detail, index) => (
                  <div key={index} className="text-dark">
                    <DetailsAndDeleteBtn
                      detail={detail}
                      setItems={setItems}
                      setFavourite={setFavourite}
                      item={item}
                    />
                  </div>
                ))}
                <div id="focuContainer">
                  <input
                    id="focu"
                    type="text"
                    className="mt-5"
                    onFocus={() => {
                      document.getElementById("focu").blur();
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {item.isDone && (
            <div>
              <div id="newNoteSpaceMaximizedLightMode">
                {item.details.map((detail, index) => (
                  <div key={index} className="text-dark">
                    {detail.detailsContent}
                  </div>
                ))}{" "}
              </div>
            </div>
          )}
          {!item.isDone && (
            <div>
              <div className="row">
                <div className="col-sm-8">
                  <form onSubmit={addSubtitle}>
                    <input
                      type="text"
                      className="boldHeaderLightMode"
                      placeholder=" Sub-heading (optional)"
                      value={item.subTitle}
                      onInput={inputSubtitle}
                      maxLength="150"
                    />
                    <button
                      type="submit"
                      className="submitSubtitleButton"
                      onClick={addSubtitle}
                    >
                      add
                    </button>
                  </form>
                </div>

                <div className="col-sm-4">
                  {item.ContentImage && (
                    <>
                      <div id="previewContentImgAndUploadBtn">
                        <h1
                          type="button"
                          onClick={cancelUploadContentImage}
                          id="contentImgRemoveBtnLightMode"
                          className="mr-3	fa fa-remove"
                        ></h1>

                        <img
                          alt="not and image"
                          className="text-dark"
                          id="previewContentImg"
                          src={URL.createObjectURL(item.selectedImage)}
                        />

                        <h1
                          type="button"
                          onClick={uploadContentImage}
                          id="contentImgUploadBtnLightMode"
                          className="ml-2	fab fa-telegram"
                        ></h1>
                      </div>
                    </>
                  )}

                  {!item.ContentImage && (
                    <label
                      className="fas fa-images"
                      id="contentImageLabelLightMode"
                    >
                      <input
                        type="file"
                        id="myImage"
                        onChange={(event) => {
                          setItems((items) => {
                            return items.map((itItem) => {
                              if (itItem.id === item.id) {
                                return {
                                  ...itItem,
                                  selectedImage: event.target.files[0],
                                  ContentImage: !item.ContentImage,
                                };
                              } else {
                                return itItem;
                              }
                            });
                          });
                          setFavourite((items) => {
                            return items.map((itItem) => {
                              if (itItem.id === item.id) {
                                return {
                                  ...itItem,
                                  selectedImage: event.target.files[0],
                                  ContentImage: !item.ContentImage,
                                };
                              } else {
                                return itItem;
                              }
                            });
                          });
                        }}
                      />
                    </label>
                  )}
                </div>
              </div>
              <form className="theForm" onSubmit={addContent}>
                <textarea
                  type="text"
                  placeholder="paragraph"
                  value={item.content}
                  className="itemDetailsLightMode"
                  id="itemDetails"
                  onChange={inputContent}
                />
                <span
                  className="	text-dark	fas fa-arrows-alt-v "
                  id="textAreaIcon"
                ></span>

                <input
                  type="button"
                  className="submitItemButton"
                  onClick={addContent}
                  value="submit"
                ></input>
              </form>
            </div>
          )}

          {item.isDone && (
            <>
              <div id="zoomNoteBtnAndDateModifiedContainer">
                <p
                  className="text-dark  fas fa-expand-arrows-alt"
                  id="expandNoteArrow"
                  onClick={() => {
                    AppValue.setZoomToFill(item.id);
                    AppValue.setPageToDisp("notePage");
                  }}
                ></p>
                <div id="dateModifiedContainerLightMode">
                  <p>
                    last modified :{" "}
                    <span id="dateModifiedLightMode"> {item.dateModified}</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

const DetailsAndDeleteBtn = ({ detail, setItems, item, setFavourite }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  return (
    <>
      <div
        id="detailsAnddelete"
        onMouseLeave={() => {
          setShowDeleteBtn(false);
        }}
      >
        <div
          onMouseDown={() => {
            setShowDeleteBtn((prev) => !prev);
          }}
        >
          {detail.detailsContent}
        </div>

        {showDeleteBtn && (
          <div
            id="deleteContent"
            onClick={() => {
              setItems((items) => {
                const newDetails = item.details.filter((value) => {
                  return value.id != detail.id;
                });

                return items.map((itItem) => {
                  if (itItem.id === item.id) {
                    return {
                      ...itItem,
                      details: newDetails,
                    };
                  } else {
                    return itItem;
                  }
                });
              });
              setFavourite((items) => {
                const newDetails = item.details.filter((value) => {
                  return value.id != detail.id;
                });

                return items.map((itItem) => {
                  if (itItem.id === item.id) {
                    return {
                      ...itItem,
                      details: newDetails,
                    };
                  } else {
                    return itItem;
                  }
                });
              });
            }}
          >
            <h1 className=" deleteContentIcon fa fa-trash-o"></h1>
          </div>
        )}
      </div>
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
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes()
  );
};

export default FavouriteContentAdded;
