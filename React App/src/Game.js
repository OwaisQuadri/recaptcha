import { useEffect, useState } from "react";
import target_top from "./target_top.png";
import target_right from "./target_right.png";
import target_left from "./target_left.png";
import target_bottom from "./target_bottom.png";

function Game() {
    const [targetPos, setTargetPos] = useState({ x: 10, y: 20 });
    const [targetCounter, setTargetCounter] = useState(1);
    const [showThing, setShowThing] = useState(true);
    const [showOtherThing, setShowOtherThing] = useState(false);
    const images = [target_top, target_left, target_right, target_bottom];
    const [image, setImage] = useState(target_top);

    const handleClick = (e) => {
        console.log(targetCounter);
        console.log(image);
        let element = document.getElementById("dot");
        var rect = element.getBoundingClientRect();
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        if (image === target_top) {
            if (mouseY <= rect.top + 12.5) {
                console.log("good");
            } else {
                console.log("bad");
            }
        } else if (image === target_bottom) {
            if (mouseY >= rect.bottom - 12.5) {
                console.log("good");
            } else {
                console.log("bad");
            }
        } else if (image === target_left) {
            if (mouseX <= rect.left + 12.5) {
                console.log("good");
            } else {
                console.log("bad");
            }
        } else if (image === target_right) {
            if (mouseX >= rect.right - 12.5) {
                console.log("good");
            } else {
                console.log("bad");
            }
        }

        if (targetCounter > 4) {
            setShowThing(false);
            setShowOtherThing(true);
        }

        setTargetPos({ x: Math.random() * 450, y: Math.random() * 450 });
        setImage(images[Math.floor(Math.random() * images.length)]);
        setTargetCounter(targetCounter + 1);
    };

    useEffect(() => {
        let element = null;
        if (showThing) {
            element = document.getElementById("dot");
            element.addEventListener("mousedown", handleClick);
        }

        return () => {
            if (showThing) {
                element.removeEventListener("mousedown", handleClick);
            }
        };
    }, [targetCounter]);

    return (
        <div
            style={{
                width: "500px",
                height: "500px",
                margin: "auto",
                borderWidth: 2,
                borderStyle: "solid",
            }}
            id="game"
        >
            {showThing && (
                <div
                    id="dot"
                    style={{
                        position: "relative",
                        top: targetPos.y,
                        left: targetPos.x,
                        width: 50,
                        height: 50,
                        borderRadius: 999,
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                    }}
                ></div>
            )}
            {showOtherThing && (
                <div>
                    <div
                        id="bttn"
                        style={{
                            position: "relative",
                            top: targetPos.y,
                            left: targetPos.x,
                            width: 50,
                            height: 50,
                            borderRadius: 999,
                            backgroundColor: "green",
                            backgroundSize: "cover",
                        }}
                    ></div>
                </div>
            )}
        </div>
    );
}

export default Game;
