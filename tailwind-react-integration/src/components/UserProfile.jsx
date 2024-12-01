import React from "react";

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto transition-shadow duration-300 hover:shadow-xl">
      {/* Profile Image with hover and transition effects */}
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
      {/* User Name with hover effect */}
      <h1 className="text-lg sm:text-lg md:text-xl font-semibold mt-4 transition-colors duration-300 hover:text-blue-500">
        John Doe
      </h1>
      {/* User Bio */}
      <p className="text-sm sm:text-sm md:text-base text-gray-600 mt-2 text-center">
        Frontend Developer passionate about creating user-friendly interfaces
        and improving user experience.
      </p>
    </div>
  );
};

export default UserProfile;

// some  hoover changes