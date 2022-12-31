import features from "../data/features";

const ThirdContent = () => {
    return (
        <div className="third-comp">
            <p className="third-subtitle">FEATURES</p>
            <h1 className="third-main-title">Our Features & Services.</h1>
            <div className="third-item-list">
                {features.map((item) => {
                    return (
                        <div key={item.id} className="third-item">
                            <img
                                className="third-item-img"
                                src={item.image}
                                alt={item.title}
                            />

                            <h3 className="third-item-title">{item.title}</h3>
                            <p className="third-item-desc">
                                {item.description}
                            </p>
                            <button className="third-more-btn">MORE</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ThirdContent;
