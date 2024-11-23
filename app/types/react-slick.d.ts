// declare module 'react-slick'{
//     const Slider:any;
//     export default Slider
// }









declare module "react-slick" {
    import { Component } from "react";
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      [key: string]: unknown; 
    }
  
    export default class Slider extends Component<Settings> {}
  }
  