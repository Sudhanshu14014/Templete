import data from "../data/benefits";

const SecContent = () => {
    return (
        <div className="secComp">
            <div className="sec-main-comp">
                <p className="sec-main-title">
                    We believe in Customer Satisfaction
                </p>
                <p className="sec-main-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate, optio quaerat? Quibusdam labore atque corrupti?
                    Commodi, necessitatibus omnis.
                </p>
            </div>
            <div className="sec-item-list">
                {data.map((item) => {
                    return (
                        <div className="sec-item" key={item.id}>
                            <div className="sec-item-bg">{item.id}</div>
                            <img
                                className="sec-item-img"
                                src={item.image}
                                alt={item.title}
                            />
                            <h3 className="sec-item-title">{item.title}</h3>
                            <p className="sec-item-desc">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SecContent;
