import useAuth from "../../context/AuthContext/AuthContext";
import Hero from "../Hero/Hero";

export default function Home() {
  const { user } = useAuth();
  //   console.log(user.photoURL);

  return (
    <>
      <h1>this is home</h1>
    </>
  );
}
