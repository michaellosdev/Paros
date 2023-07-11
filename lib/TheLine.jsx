"use client";

function TheLine() {
  return (
    <div className="primary-bg hidden h-8 w-full lg:flex">
      <div className="flex w-1/2 items-center justify-center text-white">
        <div className="mr-8 flex">
          <span className="material-icons mr-2"> location_on </span>
          <p>8499 Sunland Blvd, Sun Valley, CA</p>
        </div>
        <div className="flex">
          <span className="material-icons mr-2"> local_phone </span>
          <a href="tel:+18189623480">(818) 962-3480</a>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

export default TheLine;
