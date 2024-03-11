import React, { useState } from "react";
import image1 from "../images/image-1.webp";
import image2 from "../images/image-2.webp";
import image3 from "../images/image-3.webp";
import image4 from "../images/image-4.webp";
import image5 from "../images/image-5.webp";
import image6 from "../images/image-6.webp";
import image7 from "../images/image-7.webp";
import image8 from "../images/image-8.webp";
import image9 from "../images/image-9.webp";
import image10 from "../images/image-10.jpeg";
import image11 from "../images/image-11.jpeg";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [checkedCount, setCheckedCount] = useState(0);
  const [checkedImages, setCheckedImages] = useState([]);

  const imagesUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    "add",
  ];



  const handleCheckboxChange = (index)=>{
    let updatedCheckedImages = [...checkedImages];
    if(checkedImages.includes(index)){
      updatedCheckedImages = updatedCheckedImages.filter((item) => item!==index);
    }else{
      updatedCheckedImages.push(index);
    }
    setCheckedImages(updatedCheckedImages);
    setCheckedCount(updatedCheckedImages.length);
  }

  
  return (
    <div className="bg-gray-100">
      <div className="bg-white m-8 border-2 rounded-md h-{800px}">
        <div>
          {
           checkedCount===0 &&(
            <p className="font-semibold pl-12 text-2xl mt-3 mb-3">Gallery</p>
           )
          }
          {
            <div className="flex justify-between mt-3 mb-3">
              {checkedCount===1 &&(
                <>
                 <p className="font-semibold pl-12 text-2xl">{checkedCount} File Selected</p>
                 <button className="text-red-600 font-medium text-sm pr-12">Delete File</button>
                </>
                
              )}
              {checkedCount>1 &&(
                <>
                 <p className="font-semibold pl-12 text-2xl">{checkedCount} Files Selected</p>
                 <button className="text-red-600 font-medium text-sm pr-12">Delete Files</button>
                </>                
              )}
            </div>
          }
        </div>
        <hr />

        <div className="grid grid-cols-5 gap-8 m-12">
          {imagesUrls.map((url, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? "col-span-2 row-span-2 border-2 rounded-lg relative cursor-pointer"
                  : "border-2 rounded-lg relative cursor-pointer"
              }
              onMouseEnter={() => {
                if(!checkedImages.includes(index) && index !==11)
                setHoveredIndex(index)
              }}
              onMouseLeave={() => {
                if(!checkedImages.includes(index)) setHoveredIndex(-1);
              }}
            >
              {url==="add" ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-4xl font-light text-blue-700">+</p>
                  <button className=" text-blue-700 text-xl  ">Add images</button>
                  
                </div>
              ) : (
                <img
                  src={url}
                  alt={`pic-${index + 1}`}
                  className="w-full h-full rounded-lg"
                />
              )}

              {(hoveredIndex === index || checkedImages.includes(index)) && (
                <div className="absolute inset-0 p-4 bg-black bg-opacity-50 rounded-lg">
                  <input type="checkbox" checked={checkedImages.includes(index)} onChange={()=>handleCheckboxChange(index)} className="size-4 m-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
