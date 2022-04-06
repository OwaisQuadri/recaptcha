import { useEffect, useState } from "react";

function Target({ callback }) {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const colours = shuffleArray(["red", "blue", "green", "orange", "pink"]);
    const colour = colours[Math.round(Math.random() * 4)];
    const targets = [];

    const handleTargetClick = () => {
        callback(1);
    };

    const handleFail = () => {
        callback(0);
    };

    for (let i = 0; i < 5; i++) {
        targets.push(
            <div
                className="target"
                id={colours[i]}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 999,
                    backgroundColor: colours[i],
                    margin: 5,
                }}
                onClick={colour == colours[i] ? handleTargetClick : handleFail}
            ></div>
        );
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
            }}
        >
            <p id="prompt" style={{ textAlign: "center", marginTop: 150 }}>
                Click on the {colour} target!
            </p>
            <div
                style={{
                    marginTop: 30,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {targets}
            </div>
        </div>
    );
}

export default Target;
