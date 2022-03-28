import React from "react"
function displayEmojis(minutes) {
    const interval = minutes < 30 ? 5 : 10
    const emojis = minutes < 30 ? "☕️" : "🍱"

let emojiList = ""

    for (let i = 0; i < minutes; i+=interval) {
        emojiList += emojis
    }

    return emojiList
}


function Article ({
    title,
    date = "January 1, 1970",
    preview,
    minutes
}) {
   
    const emojiList = displayEmojis(minutes)
       

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>{`-${emojiList} ${minutes} long read`}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article