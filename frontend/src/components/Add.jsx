import { Box, Button, TextField } from "@mui/material";
import  { useEffect, useState } from "react";
import axios from "axios";
import {  useLocation, useNavigate } from "react-router-dom";

const Add =  () => {
  const navigate = useNavigate();
  const location = useLocation();
  var [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId:"",
    img_url: ""
  });
  useEffect(() => {
    if (location.state && location.state.employeeData) {
      setInputs(location.state.employeeData);
    }
  }, [location.state]);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const addData = async (e) => {
    console.log("Submit button clicked")
    e.preventDefault(); // Prevent form submission
    try {
      if (inputs._id) {
        // Updating existing employee data
        const response = await axios.put(`http://localhost:3001/update/${inputs._id}`, inputs);
        console.log("Data successfully updated:", response.data);
      } else {
        // Adding new employee data
        const response = await axios.post("http://localhost:3001/add", inputs);
        console.log("Data successfully added:", response.data);
      }
      navigate("/"); // Navigate after the data is added or updated
    } catch (error) {
      console.error("There was an error processing the data!", error);
    }

    //Write missing code here
  };
  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
            onSubmit={addData} 
          >
            <TextField
              variant="outlined"
              placeholder="Employee Name"
              onChange={inputHandler}
              name="EmpName"
              value={inputs.EmpName}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="Designation"
              onChange={inputHandler}
              name="designation"
              value={inputs.designation}
              multiline
            />
             <TextField
              variant="outlined"
              placeholder="Employee Id"
              onChange={inputHandler}
              name="empId"
              value={inputs.empId}
            />
            <TextField
              variant="outlined"
              placeholder="Photo(paste any link from the browser)"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            />
           

            <Button variant="contained" color="secondary" onClick={addData}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;
