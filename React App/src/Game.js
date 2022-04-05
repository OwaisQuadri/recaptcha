import { useEffect, useState } from "react";
import target_top from "./target_top.png";
import target_right from "./target_right.png";
import target_left from "./target_left.png";
import target_bottom from "./target_bottom.png";
import { Zoom } from "@mui/material";

function Game() {
    const [targetPos, setTargetPos] = useState({ x: 10, y: 20 });
    const [targetCounter, setTargetCounter] = useState(1);
    const [showThing, setShowThing] = useState(true);
    const [showOtherThing, setShowOtherThing] = useState(false);
    const images = [target_top, target_left, target_right, target_bottom];
    const [image, setImage] = useState(target_top);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(false);

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

    var x;

    const handleHoldDown = (e) => {
        var timer = 10;
        x = setInterval(() => {
            document.getElementById("timerText").innerHTML =
                "Timer: " + --timer;
            if (timer === 0) {
                console.log("tooo");
                setGameOver(true);
                setWinner(true);
                clearInterval(x);
            }
        }, 1000);
    };

    const handleUp = (e) => {
        setGameOver(true);
        setWinner(false);
        clearInterval(x);
    };

    useEffect(() => {
        let element = null;
        if (showThing) {
            element = document.getElementById("dot");
            element.addEventListener("mousedown", handleClick);
        } else if (!gameOver) {
            element = document.getElementById("bttn");
            element.addEventListener("mousedown", handleHoldDown);
            element.addEventListener("mouseup", handleUp);
        }

        return () => {
            if (showThing) {
                element.removeEventListener("mousedown", handleClick);
            }
        };
    }, [targetCounter, gameOver]);

    return (
        <div
            style={{
                width: "500px",
                height: "500px",
                margin: "auto",
                borderWidth: 2,
                borderStyle: "solid",
            }}
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
            {showOtherThing && !gameOver && (
                <div>
                    <p
                        id="timerText"
                        style={{
                            alignSelf: "center",
                            textAlign: "center",
                            marginTop: 20,
                        }}
                    >
                        Timer: 10{" "}
                    </p>
                    <div
                        id="bttn"
                        style={{
                            position: "relative",
                            top: 225,
                            left: 225,
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
