import * as React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../css/banner.css";


class App extends components {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
        <div><img src={require("https://www.mbizmarket.co.id/news/wp-content/uploads/2021/03/contoh-usaha-kecil.png")} alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src={require("https://www.mbizmarket.co.id/news/wp-content/uploads/2021/03/contoh-usaha-kecil.png")} alt="Credit to Alisa Anton on Unsplash"/></div>
        <div><img src={require("https://www.mbizmarket.co.id/news/wp-content/uploads/2021/03/contoh-usaha-kecil.png")} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        <div><img src={require("https://www.mbizmarket.co.id/news/wp-content/uploads/2021/03/contoh-usaha-kecil.png")} alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
        <div><img src={require("https://www.mbizmarket.co.id/news/wp-content/uploads/2021/03/contoh-usaha-kecil.png")} alt="Credit to Richard Nolan on Unsplash"/></div>
        <div><img src={require("")} alt="Credit to Cristina Gottardi on Unsplash"/></div>
        </Slider>
      </div>
    );
  }
}

export default Banner;