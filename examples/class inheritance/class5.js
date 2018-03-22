//protecting attributes with weakmap
const properties = new WeakMap();

class VideoGame {
  constructor(name, output, media){
    properties.set(this, {name, output, media})
  }
  
  getProperty(property){
    return properties.get(this)[property]
  }
}


const ps4 = new VideoGame("ps4", "hdmi 2.0", "blue-ray");
console.log(ps4.getProperty('name'));