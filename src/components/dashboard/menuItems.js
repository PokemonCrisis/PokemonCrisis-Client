import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaShoppingCart, FaBoxOpen, FaTable, FaBattleNet, FaUserCheck, FaMobileAlt, FaReplyAll, FaDiceD20, FaChartPie, FaForumbee } from 'react-icons/fa';
import { Navbar,Modal, Row, Nav, NavDropdown, Col, Image, ButtonToolbar, Button, Overlay, OverlayTrigger, Tooltip, PopoverContent, PopoverTitle, Popover, ListGroup} from "react-bootstrap";
import { GiHelp, GiDiscGolfBag } from "react-icons/gi";
import MenuCarousel from "./carousel";
import Shop from "./Plugins/shop"

function MenuItems() {

  
        return (
            <>
            
       
              <nav className="main-menu">
              <ul>
              <br /><hr />
                  <li>
                      <a href="#">
                          <i className="fa fa-2x"><FaBoxOpen /></i>
                          <span className="nav-text">
                              Pokemons
                          </span>
                      </a>

                  </li>
                  <li>
                      <a href="#">
                          <i className="fa fa-2x"><GiDiscGolfBag /></i>
                          <span className="nav-text">
                              User Bag
                          </span>
                      </a>

                  </li>

                  <hr />
                  
                  {/* Game Shop Componnet */}
                    <Shop />
                    
                  <li className="has-subnav">
                      <a href="#">
                         <i className="fa fa-2x"><FaTable /></i>
                          <span className="nav-text">
                              Ladder
                          </span>
                      </a>

                  </li>
                  <li className="has-subnav">
                      <a href="#">
                         <i className="fa fa-2x"><FaBattleNet /></i>
                          <span className="nav-text">
                              Watch a Battle
                          </span>
                      </a>

                  </li>
                  <hr />
                  <li>
                      <a href="#">
                          <i className="fa fa-2x"><FaUserCheck /></i>
                          <span className="nav-text">
                              Search User
                          </span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <i className="fa fa-2x"><FaMobileAlt /></i>
                          <span className="nav-text">
                             Pokedex
                          </span>
                      </a>
                  </li>
                  <li>
                     <a href="#">
                         <i className="fa fa-2x"><FaReplyAll /></i>
                          <span className="nav-text">
                              Replay
                          </span>
                      </a>
                  </li>
                  <hr />
                  <li>
                     <a href="#">
                          <i className="fa fa-2x"><FaDiceD20 /></i>
                          <span className="nav-text">
                              Rules
                          </span>
                      </a>
                  </li>
                  <li>
                     <a href="#">
                          <i className="fa fa-2x"><GiHelp /></i>
                          <span className="nav-text">
                              Help & Tutorial
                          </span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                         <i className="fa fa-2x"><FaChartPie /></i>
                          <span className="nav-text">
                              Credit
                          </span>
                      </a>
                  </li>
                  <li>
                     <a href="#">
                           <i className="fa fa-2x"><FaForumbee /></i>
                          <span className="nav-text">
                              Forum
                          </span>
                      </a>
                  </li>
                  <hr />
                  <li>
                     <span className="menu-carousel"><MenuCarousel /></span>
                  </li>
                </ul><br /><hr />
          </nav>
            </>
        )
}

export default MenuItems;