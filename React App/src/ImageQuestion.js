import { Button, TextField } from "@mui/material";
import { useState } from "react";
import park from "./park.jpg";

function ImageQuestion({ callback }) {
    const questions = [
        ["How many balls are in the sandpit?", 4],
        ["How many people are in this image?", 7],
        ["How many girls are in this image?", 4],
        ["How many boys are in this image?", 3],
    ];
    const [choice, setChoice] = useState(
        questions[Math.round(Math.random() * (questions.length - 1))]
    );
    const [value, setValue] = useState("");

    const handleButton = () => {
        console.log(value, choice[1], value == choice[1]);
        if (value == choice[1]) {
            callback(1);
        } else {
            callback(0);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <p style={{ textAlign: "center", marginTop: 30 }}>{choice[0]}</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField
                    id="filled-basic"
                    label="Answer"
                    variant="filled"
                    style={{ width: "50%", flex: 4 }}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <Button
                    style={{
                        flex: 1,
                        marginLeft: 10,
                    }}
                    variant="outlined"
                    onClick={handleButton}
                    id="done"
                >
                    Done
                </Button>
            </div>

            <div
                style={{
                    margin: "auto",
                    marginTop: 20,
                    width: 480,
                    height: 320,
                    backgroundImage: `url(${park})`,
                    backgroundSize: "cover",
                }}
            ></div>
        </div>
    );
}

export default ImageQuestion;
