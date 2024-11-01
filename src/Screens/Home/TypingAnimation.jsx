import React, { useEffect, useState } from 'react';
import "./styles.scss"

const TypingAnimation = ({ texts, speed = 150 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const fullText = texts[textIndex];
        const interval = setInterval(() => {
            if (isDeleting) {
                // Remove characters
                setDisplayedText(prev => prev.slice(0, -1));
                if (displayedText.length === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                // Add characters progressively
                setDisplayedText(fullText.slice(0, displayedText.length + 1));
                if (displayedText.length === fullText.length) {
                    setIsDeleting(true);
                }
            }
            // Toggle cursor visibility
            setShowCursor(prev => !prev);
        }, isDeleting ? speed / 2 : speed);

        return () => clearInterval(interval);
    }, [isDeleting, displayedText, texts, textIndex, speed]);

    return (
        <span>
            {displayedText}
            <span className={`cursor ${showCursor ? 'blink' : ''}`}>.</span>
        </span>
    );
};

export default TypingAnimation;
