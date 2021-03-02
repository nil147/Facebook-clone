import React from 'react'
import '../styles/Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <iframe
            className="widget"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonPrime%2F&tabs=timeline&width=340&height=1500&small_headers=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            name="X-Frame-Options" value="SAMEORIGIN"
            height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"        
            allow="encrypted-media">
            </iframe>
        </div>
    )
}

export default Widgets
