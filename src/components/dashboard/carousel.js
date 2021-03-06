import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'


  export default class MenuCarousel extends Component {

      render() {
          return (
              <>
              <Carousel >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images6.alphacoders.com/996/996006.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://wallpaperheart.com/wp-content/uploads/2018/04/pokemon-wallpaper.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://wallpaperheart.com/wp-content/uploads/2018/04/pokemon_fanart_by_jasonwang7-pokemon-wallpaper.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
      </>
  )
  }
  }
