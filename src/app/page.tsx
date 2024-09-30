import Image from "next/image";
import picture from "./c88e62cb33a7b6e20b60af964d362a10883a43a1.jpg";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="childContainer">
        Hey,
        <br />
        My Name is <span className="color">Ahmed Ali</span>
        <br />I am Next JS Developer
      </div>
      <div className="image">
        <Image src={picture} alt="picture" placeholder="blur" />
      </div>
    </div>
  );
}
