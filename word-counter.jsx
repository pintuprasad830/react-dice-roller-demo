import { useState } from "react";

export function WordCounter() {

    const [text, setText] = useState("");

    return (
        <div className="container p-4">

            <h2>Word Counter</h2>

            <textarea
                className="form-control"
                rows="5"
                onChange={(e) => setText(e.target.value)}
                placeholder="Type here..."
            >
            </textarea>

            <h3 className="mt-3">
                Characters : {text.length}
            </h3>

            <h3>
                Words : {text.split(" ").filter(word => word !== "").length}
            </h3>

        </div>
    )
}