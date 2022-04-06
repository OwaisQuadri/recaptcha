import { Button, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

function ButtonHold({ callback }) {
    const [progress, setProgress] = useState(0);
    const options = [10, 25, 50, 20, 12.5, 33.33333];
    const [filler, setFiller] = useState(
        options[Math.round(Math.random() * 5)]
    );

    const handleClick = () => {
        setProgress(progress + filler);
    };

    const handleButton = () => {
        if (progress > 99 && progress < 101) {
            callback(1);
        } else {
            callback(0);
        }
    };

    useEffect(() => {
        setFiller(options[Math.round(Math.random() * 5)]);
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
            <div
                id="bttn"
                style={{
                    width: 120,
                    height: 120,
                    backgroundColor: "greenyellow",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 999,
                    fontSize: 11,
                    margin: "auto",
                    marginTop: 150,
                    paddingLeft: 10,
                    paddingRight: 10,
                }}
                onClick={handleClick}
            >
                <p style={{ paddingTop: 30, userSelect: "none" }}>
                    Press this to fill progress bar. Hit "DONE" when it's full
                </p>
            </div>
            <LinearProgress
                variant="determinate"
                value={progress}
                style={{ width: "90%", margin: "auto", marginTop: 20 }}
                id="progressbar"
            />
            <Button
                style={{
                    marginTop: 20,
                }}
                variant="outlined"
                onClick={handleButton}
                id="doneBtn"
            >
                Done
            </Button>
        </div>
    );
}

export default ButtonHold;
