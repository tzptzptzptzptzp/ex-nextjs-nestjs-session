"use client";

export const SignUpContainer = () => {
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <div className="p-12 rounded-3xl shadow-lg">
      <h2 className="mb-4 text-3xl text-center">SignUp</h2>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div datatype="username" className="flex flex-col">
            <label className="ml-2" htmlFor="username">
              UserName<span className="text-red-500">*</span>
            </label>
            <input
              className="w-80 px-2 py-1 border"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div datatype="password" className="flex flex-col">
            <label className="ml-2" htmlFor="password">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              className="w-80 px-2 py-1 border"
              id="password"
              type="text"
              placeholder="Password"
            />
          </div>
          <div datatype="confirmPassword" className="flex flex-col">
            <label className="ml-2" htmlFor="confirmPassword">
              ConfirmPassword<span className="text-red-500">*</span>
            </label>
            <input
              className="w-80 px-2 py-1 border"
              id="confirmPassword"
              type="text"
              placeholder="ConfirmPassword"
            />
          </div>
        </div>
        <button
          className="w-2/3 h-8 mx-auto border bg-gray-700 hover:bg-white text-white hover:text-gray-700 duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
