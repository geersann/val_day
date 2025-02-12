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
    const [backgroundImage, setBackgroundImage] = useState("");

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
        setBackgroundImage(`url(${process.env.PUBLIC_URL}/images/heart.gif)`);

        // Змінюємо фон на весь html
        document.documentElement.style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/heart.gif)`;
        document.documentElement.style.backgroundSize = "cover"; 
        document.documentElement.style.backgroundPosition = "center";
        document.documentElement.style.height = "100%";
        document.documentElement.style.margin = "0";
    };

    return (
        <div className={styles.container}>
            <img className={styles.home_img} src={imageSrc} alt="Milk and Mocha" />
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
