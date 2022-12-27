import { useState, useEffect } from 'react'
import './Feedback.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { navigate, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";



const getDatafromValues = () => {
    const data = localStorage.getItem("feedbacks");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};

export default function Feedback() {

    // const initialValues = { name: "", mobile: "", comments: "" };
    const [feedbacks, setfeedbacks] = useState(getDatafromValues());
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState("")

    const [yesOrNo, setYesOrNo] = useState("")


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };



    const [hover, setHover] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormErrors(validate(feedbacks));
        let newFormValue = {
            id: feedbacks.length + 1,
            name: name,
            mobile: mobileNumber,
            rating: rating,
            comments: comments,
            yesOrNo: yesOrNo,
            accepted: ""

        };
        setfeedbacks([...feedbacks, newFormValue])
        setName("")
        setMobileNumber("")
        setComments("")
        setRating("")


        localStorage.setItem(
            "feedbacks",
            JSON.stringify([...feedbacks, newFormValue])
        );
        console.log(JSON.stringify(newFormValue));
        navigate('/Final')
    }


    return (
        <div>
            <h1>Feedback Form</h1>
            <form className='Head' onSubmit={handleSubmit}>
                <p className='para'>Name</p>
                <p className='para'>
                    <input
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <p className='para'>Mobile</p>
                <p className='para'>
                    <input
                        type="mobile"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </p>
                <p className='para'>How would you rate our service?</p>


                {/* <stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </stack> */}
                <p className='para'>
                    {
                        [...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <button
                                    type="button"
                                    key={index}
                                    className={index <= (hover || rating) ? "on" : "off"}
                                    onClick={() => setRating(index)}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(rating)}
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                >
                                    <span className="star">&#9733;</span>
                                </button>

                            );
                        })}
                </p>

                <p className='para'>Will you recommend us to Friends?</p>


                <div className="Icons">
                    <ThumbUpOffAltIcon value={yesOrNo} onClick={(e) => setYesOrNo("Yes")} />
                    <ThumbDownOffAltIcon value={yesOrNo} onClick={(e) => setYesOrNo("No")} />
                </div>
                <p className='para'>Comments</p>
                <p className='para'>
                    <textarea
                        type="comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                </p>
                <button className='submit'>Submit</button>
            </form >

        </div >
    )
}
