import './App.scss';
import './theme.scss';
import Home from './Screens/Home/index';
import Experience from './Screens/Experience/index';
import Tech from './Screens/Tech/index';
import Project from './Screens/Project/index';
import Footer from './Screens/Footer/index';
import Header from './Screens/Header/index';
import About from './Screens/About/index';
import { useEffect, useRef, useState } from 'react';

function App() {
    const [activePage, setActivePage] = useState("home");
    const [isScrolling, setIsScrolling] = useState(false);  // State to track programmatic scroll
    const scrollTimeoutRef = useRef(null);  // Store the timeout reference

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const techRef = useRef(null);
    const projectRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Don't trigger if we are in the middle of a programmatic scroll
            if (isScrolling) return;

            const homeRect = homeRef.current.getBoundingClientRect();
            const aboutRect = aboutRef.current.getBoundingClientRect();
            const experienceRect = experienceRef.current.getBoundingClientRect();
            const techRect = techRef.current.getBoundingClientRect();
            const projectRect = projectRef.current.getBoundingClientRect();
            const footerRect = footerRef.current.getBoundingClientRect();

            if (footerRect.top < 450) {
                setActivePage("footer");
            }
            else if (projectRect.top < 300) {
                setActivePage("project");
            }
            else if (techRect.top < 300) {
                setActivePage("tech");
            }
            else if (experienceRect.top < 300) {
                setActivePage("experience");
            }
            else if (aboutRect.top < 300) {
                setActivePage("about");
            }
            else if (homeRect.top < 300) {
                setActivePage("home");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolling]);  // We only want to re-run the scroll listener if `isScrolling` changes

    const handleSelectMenu = (menu) => {
        setActivePage(menu);
        setIsScrolling(true);  // Set isScrolling to true to prevent scroll event

        if (menu === "home") {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (menu === "about") {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (menu === "experience") {
            experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (menu === "tech") {
            techRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (menu === "project") {
            projectRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (menu === "footer") {
            footerRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        // Set a timeout to reset isScrolling after smooth scroll animation completes
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);  // Clear any previous timeouts
        }

        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 1000);  // Adjust the timeout duration if needed
    };

    return (
        <div className="App">
            <Header
                activePage={activePage}
                setActivePage={setActivePage}
                handleSelectMenu={handleSelectMenu}
            />
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={experienceRef}>
                <Experience />
            </div>
            <div ref={techRef}>
                <Tech />
            </div>
            <div ref={projectRef}>
                <Project />
            </div>
            <div ref={footerRef}>
                <Footer />
            </div>
        </div>
    );
}

export default App;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [images, setImages] = useState([]);
//   const [numbers, setNumbers] = useState([]);
//   const [blockedNumbers, setBlockedNumbers] = useState([]);
//   const [selectedNumber, setSelectedNumber] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const OCR_SPACE_KEY = "K81016145688957"; // your OCR.space key

//   // Load numbers and blocked numbers from localStorage on mount
//   useEffect(() => {
//     const savedNumbers = JSON.parse(localStorage.getItem("numbers")) || [];
//     const savedBlocked = JSON.parse(localStorage.getItem("blockedNumbers")) || [];
//     setNumbers(savedNumbers);
//     setBlockedNumbers(savedBlocked);
//   }, []);

//   // Handle multiple image selection
//   const handleImageChange = async (e) => {
//     const files = Array.from(e.target.files);
//     if (!files.length) return;

//     setError("");
//     setImages([]);

//     // Preview all selected images
//     const previews = await Promise.all(
//       files.map(
//         (file) =>
//           new Promise((resolve) => {
//             const reader = new FileReader();
//             reader.onload = () => resolve(reader.result);
//             reader.readAsDataURL(file);
//           })
//       )
//     );

//     setImages(previews);

//     // Extract numbers
//     extractNumbersFromMultiple(previews);
//   };

//   const extractNumbersFromMultiple = async (imageArray) => {
//     setLoading(true);
//     const newNumbers = [];

//     try {
//       for (let img of imageArray) {
//         const formData = new FormData();
//         formData.append("apikey", OCR_SPACE_KEY);
//         formData.append("language", "eng");
//         formData.append("OCREngine", "2");
//         formData.append(
//           "base64Image",
//           `data:image/png;base64,${img.split(",")[1]}`
//         );

//         const res = await axios.post(
//           "https://api.ocr.space/parse/image",
//           formData
//         );

//         const text =
//           res.data?.ParsedResults?.[0]?.ParsedText || "";

//         // Strong phone regex (India + Intl)
//         const phoneRegex = /(\+?\d{1,3}[\s-]?)?(\d[\s-]?){9,12}\d/g;
//         const matches = text.match(phoneRegex) || [];
//         const cleaned = matches.map((n) =>
//           n.replace(/[^\d+]/g, "").slice(-10)
//         );

//         newNumbers.push(...cleaned);
//       }

//       // Read existing numbers and blocked numbers
//       const savedNumbers = JSON.parse(localStorage.getItem("numbers")) || [];
//       const savedBlocked = JSON.parse(localStorage.getItem("blockedNumbers")) || [];

//       // Combine new numbers, remove duplicates and remove blocked
//       const combined = [...savedNumbers, ...newNumbers].filter(
//         (n) => !savedBlocked.includes(n)
//       );
//       const uniqueNumbers = [...new Set(combined)];

//       if (uniqueNumbers.length === 0) {
//         setError("No phone numbers found in selected images.");
//       } else {
//         setNumbers(uniqueNumbers);
//         localStorage.setItem("numbers", JSON.stringify(uniqueNumbers));
//       }
//     } catch (err) {
//       console.error(err);
//       setError("OCR failed for one or more images.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Block/delete a number
//   const blockNumber = (num) => {
//     const updatedNumbers = numbers.filter((n) => n !== num);
//     const updatedBlocked = [...blockedNumbers, num];

//     setNumbers(updatedNumbers);
//     setBlockedNumbers(updatedBlocked);
//     localStorage.setItem("numbers", JSON.stringify(updatedNumbers));
//     localStorage.setItem("blockedNumbers", JSON.stringify(updatedBlocked));

//     if (selectedNumber === num) setSelectedNumber("");
//   };

//   // Unblock a number
//   const unblockNumber = (num) => {
//     const updatedBlocked = blockedNumbers.filter((n) => n !== num);
//     const updatedNumbers = [...numbers, num];

//     setNumbers(updatedNumbers);
//     setBlockedNumbers(updatedBlocked);
//     localStorage.setItem("numbers", JSON.stringify(updatedNumbers));
//     localStorage.setItem("blockedNumbers", JSON.stringify(updatedBlocked));
//   };

//   // Clear all numbers and blocked numbers
//   const clearAll = () => {
//     setNumbers([]);
//     setBlockedNumbers([]);
//     setSelectedNumber("");
//     localStorage.removeItem("numbers");
//     localStorage.removeItem("blockedNumbers");
//   };

//   return (
//     <div style={{ padding: 30, fontFamily: "Arial" }}>
//       <h2>📷 Extract Phone Numbers from Multiple Images</h2>

//       <input
//         type="file"
//         accept="image/*"
//         multiple
//         onChange={handleImageChange}
//       />

//       {images.length > 0 && (
//         <div style={{ display: "flex", marginTop: 20, gap: 10 }}>
//           {images.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`preview-${idx}`}
//               style={{ width: 100, border: "1px solid #ccc" }}
//             />
//           ))}
//         </div>
//       )}

//       {loading && <p>🔍 Extracting numbers...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

// <div style={{display:"flex", gap:"100px"}}>


//       {numbers.length > 0 && (
//         <div style={{ marginTop: 20 }}>
//           <h3>Extracted Numbers</h3>
//           {numbers.map((num, idx) => (
//             <div
//               key={idx}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginBottom: 5,
//               }}
//             >
//               <label style={{ flex: 1 }}>
               
//                 {idx + 1} -------- {num}
//               </label>
//               <button
//                 style={{
//                   marginLeft: 10,
//                   cursor: "pointer",
//                 //   background: "red",
//                   color: "white",
//                   border: "none",
//                   borderRadius: 4,
//                   padding: "2px 6px",
//                 }}
//                 onClick={() => blockNumber(num)}
//               >
//                 ❌
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {blockedNumbers.length > 0 && (
//         <div style={{ marginTop: 20 }}>
//           <h3>Blocked Numbers</h3>
//           {blockedNumbers.map((num, idx) => (
//             <div
//               key={idx}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginBottom: 5,
//               }}
//             >
//               <span style={{ flex: 1 }}> {idx + 1} -------- {num}</span>
//               <button
//                 style={{
//                   marginLeft: 10,
//                   cursor: "pointer",
//                 //   background: "green",
//                   color: "white",
//                   border: "none",
//                   borderRadius: 4,
//                   padding: "2px 6px",
//                 }}
//                 onClick={() => unblockNumber(num)}
//               >
//                 🔓
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       </div>

//       {numbers.length > 0 || blockedNumbers.length > 0 ? (
//         <button
//           style={{
//             marginTop: 10,
//             padding: "5px 10px",
//             cursor: "pointer",
//           }}
//           onClick={clearAll}
//         >
//           🗑 Clear All
//         </button>
//       ) : null}
//     </div>
//   );
// }

// export default App;
