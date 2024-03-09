import { useState, useEffect } from "react";
import image1 from "../assets/images/IMG-20240309-WA0021.jpg";
import image2 from "../assets/images/IMG-20240309-WA0020.jpg";
import image3 from "../assets/images/IMG-20240309-WA0023.jpg";
import image4 from "../assets/images/IMG-20240309-WA0024.jpg";
import image5 from "../assets/images/IMG-20240309-WA0025.jpg";
import image6 from "../assets/images/a.jpg";
import image7 from "../assets/images/VID-20240309-WA0009.mp4";
import image8 from "../assets/images/VID-20240309-WA0008.mp4";
import image9 from "../assets/images/IMG-20240309-WA0020.jpg";
import image10 from "../assets/images/IMG-20240309-WA0020.jpg";
import image11 from "../assets/images/IMG-20240309-WA0020.jpg";
import image12 from "../assets/images/IMG-20240309-WA0027.jpg";
import image13 from "../assets/images/IMG-20240309-WA0020.jpg";

const LoveStoryTimeline = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    [image1, image2], // First set of images
    [image3, image4],
    [image8],
    [image5],
    [image12],
    [image6],
    [image7],
    // Second set of images
    // Add more sets of images as needed
  ];

  const dates = [
    "23/01/2024", // Date for the first set of images
    "04/02/2024", 
    "04/02/2024", 
    "11/02/2024", 
    "14/02/2024",
    "25/02/2024",
    "07/03/2024"
     // Date for the second set of images
    // Date for the second set of images
    // Add more dates as needed
  ];

  const descriptions = [
    "The day we met", // Description for the first set of images
    "the day we had our first kiss and we dated",
    "A special day",
    "A special day",
    "first valaintine day together she got her flower", 
    "first time washing my hair",
    "The day I met her mum"
    // Description for the second set of images

     // Description for the second set of images
    // Description for the second set of images
    // Add more descriptions as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % images[currentImageIndex].length
      );
    }, 5000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images]);

  return (
    <main id="timeline">
      <div className="love-story-timeline">
        <h2>Our Love Story Timeline</h2>
        <div className="timeline">
          {images.map((imageSet, setIndex) => (
            <div key={setIndex} className="moment">
              <div className="date">{dates[setIndex]}</div>
              <div className="description">{descriptions[setIndex]}</div>
              <div className="media-container">
              {imageSet[currentImageIndex % imageSet.length].endsWith(".mp4") ? (
                  <video
                    src={imageSet[currentImageIndex % imageSet.length]}
                    alt={`Video ${currentImageIndex + 1}`}
                    className="media"
                    controls
                  />
                ) : (
                  <img
                    src={imageSet[currentImageIndex % imageSet.length]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="media"
                  />
                )}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LoveStoryTimeline;
