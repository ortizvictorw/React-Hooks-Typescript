import { useState } from "react";
import { Nav, NavItem, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { sideMenu } from "./sideMenuStructure";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import projectPackage from "../../../package.json";



export const SideMenu = () => {
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);

  return (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      {!isDataLoading ? (
        <>
          <div className="sidebar-sticky">
            {sideMenu.map((links) => {
              const container = links.map((link) => {
                return (
                  <>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                      <span>{link.moduleName}</span>
                    </h6>
                    {link.views.map((view) => {
                      return (
                        <NavItem key={view.path}>
                          {view.dropdownSubModule ? (
                            view.dropdownSubModule.map((dropdown) => {
                              return (
                                <>
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      variant="muted"
                                      id="dropdown-basic"
                                    >
                                      <FontAwesomeIcon
                                        icon={view.icon}
                                        fixedWidth
                                        className="mr-2"
                                      />
                                      {dropdown.subModuleName}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      {dropdown.dropdownLinks.map((link) => {
                                        return (
                                          <>
                                            <Dropdown.Item>
                                              <Link to={`/${link.path}`}>
                                                <Nav.Link>{link.name}</Nav.Link>
                                              </Link>
                                            </Dropdown.Item>
                                          </>
                                        );
                                      })}
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </>
                              );
                            })
                          ) : (
                            <>
                              <Link to={`/${view.path}`}>
                                <Nav.Link>
                                  <FontAwesomeIcon
                                    icon={view.icon}
                                    fixedWidth
                                    className="mr-2"
                                  />
                                  <span>{view.name}</span>
                                </Nav.Link>
                              </Link>
                            </>
                          )}
                        </NavItem>
                      );
                    })}
                  </>
                );
              });
              return container;
            })}
            <div className="my-3 px-3">
              <small className="text-muted">{`v${projectPackage.version}`}</small>
            </div>
          </div>
        </>
      ) : (
        <>
          <span>Loading</span>
        </>
      )}
    </Nav>
  );
};
