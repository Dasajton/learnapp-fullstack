import { NavLink } from "react-router-dom";

export const Page404 = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-[10rem] font-mono text-slate-500">404</p>
      <p className="-my-8 text-2xl">
        Please{" "}
        <NavLink to="/" className="underline hover:text-yellow-500 transition">
          return to the site
        </NavLink>
        .
      </p>
    </div>
  );
};
