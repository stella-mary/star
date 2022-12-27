import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const getDatafromValues = () => {
    const data = localStorage.getItem("formValues");
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
    // getDatafromValues("formValues")
];




export default function Final() {
    const [data, setDate] = useState(getDatafromValues())
    const [yesOrNo, setYesOrNo] = useState("")
    const [clicked, setClicked] = useState(false)
    const [clicked1, setClicked1] = useState(false)
    console.log(yesOrNo)
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
                        {data.map((row) => (
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
                                <TableCell><div className="Icons">
                                    {clicked ? <p>Accepted</p> : (<ThumbUpOffAltIcon value={yesOrNo} onClick={(e) => setClicked("Accepted")} />)}
                                    {clicked1 ? <p>Rejected</p> : (<ThumbDownOffAltIcon value={yesOrNo} onClick={(e) => setClicked1("Rejected")} />)}
                                </div></TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

