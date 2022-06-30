import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../contexts/UsersContext";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { editUser, getUser } from "../../../DB/dbUsers";

const EditUser = () => {
  let navigate = useNavigate();
  const userCtx = useContext(userContext);

  const handleClose = () => {
    navigate(-1);
  };

  const handleAdd = () => {
    editUser(user).then(() => {
      userCtx.fetchUsers();
      handleClose();
    });
  };

  const [user, setUser] = useState(null);
  const [valid, setValid] = useState({
    name: true,
    phone: true,
    email: true,
    age: true,
    address: true,
  });

  const { id } = useParams();

  useEffect(() => {
    getUser(id).then((user) => setUser(user));
  }, [id]);

  const validatePattern = (input) => {
    switch (input.id) {
      case "name":
      case "address":
        return input.value.trim() !== "";
      case "phone":
        return input.value.trim().match("^(010|011|012|015)[0-9]{8}$");
      case "email":
        return input.value
          .trim()
          .match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$");
      case "age":
        return input.value.trim().match("^[2-9][0-9]$|^100$");
      default:
        return false;
    }
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
    const valueIsValid = validatePattern(event.target);
    setValid({
      ...valid,
      [event.target.id]: valueIsValid ? true : false,
    });
  };

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    let isValid = true;
    for (let inp in valid) {
      if (!valid[inp]) isValid = false;
    }
    setFormValid(isValid);
  }, [valid]);

  return (
    <div>
      {user !== null && (
        <Dialog open={true} maxWidth="sm">
          <DialogTitle>Update User</DialogTitle>
          <DialogContent>
            {["name", "phone", "email", "age", "address"].map((input) => {
              return (
                <TextField
                  key={input}
                  required
                  margin="dense"
                  id={input}
                  label={input.charAt(0).toUpperCase() + input.slice(1)}
                  type="text"
                  fullWidth
                  variant="standard"
                  error={!valid[input]}
                  helperText={!valid[input] ? `Incorrect ${input}` : ``}
                  value={user[input]}
                  onChange={handleChange}
                />
              );
            })}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAdd} disabled={!formValid}>
              Update
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default EditUser;
