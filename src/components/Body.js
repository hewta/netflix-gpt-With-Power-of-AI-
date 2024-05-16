import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //SIGN IN
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({
          uid: uid,
          email:email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
      } else {
        //SIGN OUT
        dispatch(removeUser());
      }
    });
  },[]);

  const apppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={apppRouter} />
    </div>
  );
};

export default Body;
