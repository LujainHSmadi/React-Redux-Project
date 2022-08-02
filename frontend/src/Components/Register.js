import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { Register } from "../Store/Reducer/SignIn";
const SignUp = () => {
  const initialState = {
    email: "",
      password: "",
      name: '',
      role: 'user',
      image:'esraa'
  };

  const [User, setUser] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...User, [name]: value });
  };

  const save = () => {
    const { name, email, password, role, image } = User;

    dispatch(Register({ name, email, password, role, image }))
      .unwrap()
      .then((data) => {
        console.log(data);
        console.log(User);
        setUser({
          id: data.id,
          email: data.email,
          password: data.password,
          role: data.role,
          image: data.image,
        });

        setSubmitted(true);
      })

      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
     

      {/* <!-- LISTING LIST --> */}

      <div class="allWrapper">
        <div class="innerr">
          <img
            src="./register/images/20945158-removebg-preview.png"
            alt=""
            class="image-1"
            style={{ height: "600px", width: "550px" , left: '-387px'}}
          />
          <form action="" class="register">
            <h3>New Account?</h3>

            <div class="form-holderr">
              <span class="lnr lnr-phone-handset"></span>
              <input
                type="text"
                class="form-controll"
                placeholder=" name"
                onChange={handleInputChange}
                name="name"
              />
            </div>
            <div class="form-holderr">
              <span class="lnr lnr-envelope"></span>
              <input
                type="text"
                class="form-controll"
                placeholder="Email"
                onChange={(event) => handleInputChange(event)}
                value={User.email || ""}
                required
                name="email"
              />
            </div>
            <div class="form-holderr">
              <span class="lnr lnr-lock"></span>
              <input
                type="password"
                class="form-controll"
                placeholder="Password"
                onChange={handleInputChange}
                value={User.password || ""}
                required
                name="password"
              />
            </div>
            <div class="form-holderr">
              <span class="lnr lnr-lock"></span>
              <input
                type="password"
                class="form-controll"
                placeholder="Confirm Password"
              />
            </div>
            <button class="registerBtn" type="submit" onClick={save}>
              <span>Register</span>
            </button>
          </form>
          <img src="" alt="" class="image-2" />
        </div>
      </div>

    
    </>
  );
};
export default SignUp;
