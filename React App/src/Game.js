import { useEffect, useState } from "react";

function Game() {
    const [targetPos, setTargetPos] = useState({ x: 10, y: 20 });
    const [targetCounter, setTargetCounter] = useState(0);
    const [showThing, setShowThing] = useState(true);

    const handleClick = (e) => {
        let element = document.getElementById("dot");
        var rect = element.getBoundingClientRect();
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        var midY = (rect.bottom - rect.top) / 2 + rect.top;
        var midX = (rect.right - rect.left) / 2 + rect.left;
        console.log(midX - mouseX, midY - mouseY);
        setTargetPos({ x: Math.random() * 450, y: Math.random() * 450 });
        setTargetCounter(targetCounter + 1);
        if (targetCounter > 5) {
            setShowThing(false);
        }
        console.log(targetCounter);
    };

    useEffect(() => {
        let element = document.getElementById("dot");
        element.addEventListener("mousedown", handleClick);
        return () => {};
    }, []);

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
                        backgroundColor: "red",
                        width: 50,
                        height: 50,
                        borderRadius: 999,
                    }}
                ></div>
            )}
        </div>
    );
}

export default Game;
