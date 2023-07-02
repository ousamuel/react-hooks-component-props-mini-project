import React from "react";

function About({image, about}){
  // console.log(about)
  if (image =="" || image== null){
    image = "https://via.placeholder.com/215"
  }
  return (
    <aside>
      <img src={image} alt={"blog logo"}></img>
      <p>{about}</p>
    </aside>
  )
}






export default About;