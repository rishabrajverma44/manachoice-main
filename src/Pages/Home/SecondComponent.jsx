import React from "react";

const SecondComponent = () => {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(222, 0, 75, 0.2) 10%, rgba(191, 70, 255, 0.2) 39%, rgba(0, 212, 255, 0.1) 100%)",
        }}
      >
        <article className="text-center text-pretty py-10">
          <h5 className="text-4xl font-bold my-6">
            <span className="text-pink-600">Uvaan</span>
            <span className="text-blue-950">
              {" "}
              Infotech
              <br></br> Provides The Best Software for Your <br></br>Business
            </span>
          </h5>
          <p className="my-6">
            Uvaan Infotech is a leading provider of software solutions for
            businesses of all sizes. Our software is designed<br></br> to help
            businesses improve their efficiency, productivity, and
            profitability.
          </p>
        </article>
      </div>
    </div>
  );
};

export default SecondComponent;
