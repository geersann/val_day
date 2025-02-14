import React, { useState } from "react";
import styles from "./Home.module.css";

function Home() {
  const [text, setText] = useState("Will u be my valentine?");
  const noResponses = [
    "Oh... 💔", 
    "Seriously? 🥺", 
    "You can rechoose, u know? 😢",
    "No way 😢", 
    "Last chance! 😭",
  ];
  const [noIndex, setNoIndex] = useState(0);
  const [yesSize, setYesSize] = useState(150);
  const [noSize, setNoSize] = useState(150);
  const [showNoButton, setShowNoButton] = useState(true);
  const [imageSrc, setImageSrc] = useState(`${process.env.PUBLIC_URL}/images/milk-and-mocha.gif`);
  const [showHeart, setShowHeart] = useState(false);

  const handleNoClick = () => {
    setText(noResponses[noIndex]);

    if (noIndex === noResponses.length - 1) {
      setShowNoButton(false);
    } else {
      setNoIndex((prevIndex) => prevIndex + 1);
      setNoSize((prevSize) => Math.max(prevSize - 30, 20));
      setYesSize((prevSize) => prevSize + 15);
    }
  };

  const handleYesClick = () => {
    setText("Yay! I LOVE U LIA❤️");
    setImageSrc(`${process.env.PUBLIC_URL}/images/milk-and-mocha-love.gif`);
    setShowHeart(true); // показуємо overlay з heart.gif
  };

  return (
    <div className={styles.container}>
      {showHeart && (
        <div 
          className={styles.heartOverlay}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/heart.gif)` }}
        />
      )}
      <img 
        src={`${process.env.PUBLIC_URL}/images/background.png`} 
        alt="Background" 
        className={styles.backgroundImage} 
      />
      <img 
        className={styles.home_img} 
        src={imageSrc} 
        alt="Milk and Mocha" 
      />
      <h1 className={styles.main_text}>{text}</h1>
      <div>
        <button 
          className={styles.yes_button} 
          onClick={handleYesClick} 
          style={{ width: `${yesSize}px`, height: `${yesSize}px`, fontSize: `${yesSize / 5}px` }}
        >
          Yeees!
        </button>
        {showNoButton && (
          <button 
            className={styles.no_button} 
            onClick={handleNoClick} 
            style={{ width: `${noSize}px`, height: `${noSize}px`, fontSize: `${noSize / 5}px` }}
          >
            Oh...
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
