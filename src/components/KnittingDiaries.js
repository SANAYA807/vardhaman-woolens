import React, { useState } from 'react'
import './knittingDiaries.css'

const KnittingDiaries = () => {

    const ReadMore = ({ children }) => {
        const text = children;
        console.log(children);
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 150) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? <h5>...read more></h5> : <h5>Show less</h5>}
                </span>
            </p>
        );
    };

    return (
        <div className="diary">
            <h1>Knitting Diaries</h1>
            <div className="diary-container">
                <div className="diary-card">
                    <div className="image1">

                    </div>
                    <div className="text">
                        <h3>What are the different types of crochet yarn?</h3>
                        <ReadMore>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eum asperiores facere magni eaque, aperiam impedit totam cupiditate exercitationem quibusdam reiciendis!Fugiat maiores autem, necessitatibus saepe dolores explicabo rerum?Consequatur modi magni facere necessitatibus deserunt enim dolor sunt, totam laborum aspernatur voluptates repellat doloremque, corrupti aperiam rerum cumque et voluptas molestiae.</ReadMore>

                    </div>
                </div>
                <div className="diary-card">
                    <div className="image2">

                    </div>
                    <div className="text">
                        <h3>How is Yarn Made?</h3>
                        <ReadMore>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eum asperiores facere magni eaque, aperiam impedit totam cupiditate exercitationem quibusdam reiciendis!Fugiat maiores autem, necessitatibus saepe dolores explicabo rerum?Consequatur modi magni facere necessitatibus deserunt enim dolor sunt, totam laborum aspernatur voluptates repellat doloremque, corrupti aperiam rerum cumque et voluptas molestiae.</ReadMore>

                    </div>
                </div>
                <div className="diary-card diary3">
                    <div className="image3">

                    </div>
                    <div className="text">
                        <h3>Vardhaman Wool Warm Knitting Yarn</h3>
                        <ReadMore>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eum asperiores facere magni eaque, aperiam impedit totam cupiditate exercitationem quibusdam reiciendis!Fugiat maiores autem, necessitatibus saepe dolores explicabo rerum?Consequatur modi magni facere necessitatibus deserunt enim dolor sunt, totam laborum aspernatur voluptates repellat doloremque, corrupti aperiam rerum cumque et voluptas molestiae.</ReadMore>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnittingDiaries
