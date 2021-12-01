import React, {useState,} from "react";

export default function SearchBar({setQuery}){
    const [text, setText] = useState("");

    const handleChange = (e) =>{
        setText(e.target.value);
        setQuery(e.target.value)
    }

    return(
        <div>
            <section className="search">
                <form >
                    <input type="text" className="form-control" autoFocus name="search" value={text} onChange={handleChange} id="search" />
                </form>
            </section>
        </div>
    )
}