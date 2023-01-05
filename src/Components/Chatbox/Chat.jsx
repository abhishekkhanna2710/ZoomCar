import React from 'react'
import chatStyle from "./Chat.module.css"


function Chat() {
    return (
        <div id={chatStyle.mainChat}>
            <div className={chatStyle.newsletter}>
                <p>Get the latest news from Zoom Car</p>
                <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                <br />
                <div class={chatStyle.textInputWrapper}>
                    <input placeholder="Email Address" type="text" class={chatStyle.textInput} />
                </div>
            </div>




            {/* Chat box start here */}
            <div className={chatStyle.chats}>
                <div className={chatStyle.parallax}>
                    <h5>Get In Touch</h5>
                    <h1>Send Us Message</h1>
                    <form>
                        <div>

                            <input type="text" placeholder='Name' />

                            <input type="Email" placeholder='Email' />

                            <input type="text" placeholder='Subject' />
                            <input type="submit" value="Submit" />
                        </div>
                    </form>






















                </div>


            </div>

        </div>
    )
}

export default Chat