import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const getDatafromValues = () => {
    const data = localStorage.getItem("feedbacks");
    console.log(data)
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};


// const [data, setDate] = useState(getDatafromValues())

// function createData(name, mobile, serviceRating, recommended, comments, accepted) {
//     return { name, mobile, serviceRating, recommended, comments, accepted };
// }

const rows = [
    // getDatafromValues("feedbacks")
];




export default function Final({ children }) {
    const [feedbacks, setfeedbacks] = useState(getDatafromValues())
    const [yesOrNo, setYesOrNo] = useState("")
    const [clicked, setClicked] = useState(false)
    const [acceptedOrRejected, setAcceptedOrRejected] = useState("");

    const updateAcceptance = (id, value) => {
        // const data = JSON.parse(localStorage.getItem("inputs"));
        console.log("selected ID: " + id);
        const updatedArray = feedbacks.map((singleValue) => {
            console.log(id, singleValue.id);
            if (singleValue.id === id) {
                return {
                    id: singleValue.id,
                    name: singleValue.name,
                    mobile: singleValue.mobile,
                    rating: singleValue.rating,
                    yesOrNo: singleValue.yesOrNo,
                    comments: singleValue.comments,
                    accepted: value,
                };
            } else {
                return singleValue;
            }
        });
        console.log(updatedArray);
        setfeedbacks(updatedArray);
        localStorage.setItem("feedbacks", JSON.stringify(updatedArray));

    };

    // const [clicked1, setClicked1] = useState(false)
    // console.log(yesOrNo)
    return (
        <div>
            <h1>Feedback From</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Mobile</TableCell>
                            <TableCell align="right">Service Rating</TableCell>
                            <TableCell align="right">Recommended</TableCell>
                            <TableCell align="right">Comments</TableCell>
                            <TableCell align="right">Accepted</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedbacks.map((row) => (
                            <TableRow
                                key={row}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell> */}
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.mobile}</TableCell>
                                <TableCell align="right">{row.rating}</TableCell>
                                <TableCell align="right">{row.yesOrNo}</TableCell>
                                <TableCell align="right">{row.comments}</TableCell>
                                {/* <TableCell align="right">{row.accepted}</TableCell> */}
                                <TableCell>
                                    <div className="icon">
                                        {row.accepted === "Accepted" ? (
                                            <p>Accepted</p>
                                        ) : row.accepted === "Rejected" ? (
                                            <p>Rejected</p>
                                        ) : (
                                            <div>
                                                <ThumbUpOffAltIcon
                                                    style={{ color: "green", fontSize: "30px" }}
                                                    // value={acceptedOrRejected}
                                                    onClick={() => updateAcceptance(row.id, "Accepted")}
                                                />
                                                <ThumbUpOffAltIcon
                                                    style={{ color: "red", fontSize: "30px" }}
                                                    // value={acceptedOrRejected}
                                                    onClick={() => updateAcceptance(row.id, "Rejected")}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

