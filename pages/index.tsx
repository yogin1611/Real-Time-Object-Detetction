import Head from "next/head";
import Yolo from "../components/models/Yolo";

export default function Home() {
  return (
    <>
      <main className="font-mono flex flex-col justify-center items-center w-screen relative">
        {/* Logo */}
        <img
          src="/icon.png"
          alt="College Logo"
          className="absolute top-5 right-5 w-16 h-16 object-contain"
        />

        {/* Main Content */}
        <h1 className="m-5 text-xl font-bold">Real-Time Object Detection - Mini Project</h1>
        <Yolo />

        {/* Project Team */}
        <div className="mt-5 text-center text-sm">
          <p className="font-semibold">Project by:</p>
          <p>Heerath Bhat - 1MJ22CS075</p>
          <p>Sajid Nazir - 1MJ23CS420</p>
          <p>Harshika Kumari - 1MJ22CS072</p>
          <p>Greeshma D J - 1MJ22CS066</p>
        </div>
      </main>
    </>
  );
}
