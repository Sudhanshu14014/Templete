import logo from "../assets/employee.png";

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="aboutUs-div">
                <p className="aboutUs-title">About Us</p>
                <p className="aboutUs-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis dolores tempora, vero maiores dolor atque ipsam
                    sed provident veritatis consectetur quo voluptas
                    praesentium, impedit voluptates. Non accusamus, sit dolore
                    eum minima quis illo omnis saepe porro itaque deleniti,
                    obcaecati sed. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptates assumenda id praesentium
                    necessitatibus molestias suscipit quae at placeat sint
                    officia nisi inventore, est perspiciatis illo possimus
                    sequi, adipisci sapiente! Minima consequuntur saepe maiores
                    eligendi! Cumque aliquam illo error hic repellendus.
                </p>
                <p className="aboutUs-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Exercitationem enim repudiandae eum. Eaque, numquam nostrum
                    amet unde quod laboriosam officia. Ullam fugit sit quos et
                    sint inventore temporibus natus quibusdam? Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Iste iure sit
                    illo enim amet exercitationem incidunt ea, vitae laborum
                    voluptates quas voluptatibus distinctio hic non tenetur
                    placeat quae sapiente natus.
                </p>
            </div>
            <div className="aboutUs-sec">
                <img className="aboutUs-img" src={logo} alt="" />
                <p className="aboutUs-caption">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore, ab?
                </p>
                <button className="aboutUs-btn">
                    <i class="fa fa-linkedin-square"></i> Find me on LinkedIn
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
