const logo = new URL("../assets/logo.png", import.meta.url).href;
const menu = new URL("../assets/menu.png", import.meta.url).href;
const chat = new URL("../assets/chat.png", import.meta.url).href;

const MainContent = () => {
    return (
        <div className="main-div">
            <div className="navbar">
                <img className="nav-icon" src={logo} alt="logo" />

                <img className="nav-icon" src={menu} alt="menu" />
            </div>
            <div className="main-display">
                <div className="text-content">
                    <p className="about-us">ABOUT US</p>
                    <p className="text-title">
                        1000+ customer using Our application.
                    </p>
                    <ul className="text-list">
                        <li>Powerful and flexible them</li>
                        <li>Simple, transparent pricing</li>
                        <li>Build tools and full documention</li>
                    </ul>
                    <button className="read-btn">READ MORE</button>
                </div>
                <img className="chat-img" src={chat} alt="chat" />
            </div>
            <div className="sec-content">
                <p className="sec-title">Quick & Easy Process</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, quaerat aut. Officia nostrum quo, dolore, dignissimos
                    iure natus atque recusandae, fugiat ex officiis corporis
                    quod delectus non possimus hic voluptatibus.
                </p>
                <button className="read-btn sec-btn">READ MORE</button>
            </div>
        </div>
    );
};

export default MainContent;
