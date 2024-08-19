/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { FaCartPlus } from "react-icons/fa";

import { CountryDropDown } from "../SmallComponent/CountryDropDown";
import { Button } from "@mui/material";
import SearchBox from "../SmallComponent/SearchBox";
import { IoIosSearch } from "react-icons/io";
import Navigation from "../SmallComponent/navigation";
import { MyContext } from "../../App";

export const Header = () => {

  const context = useContext(MyContext);
  return (
    <div>
      <nav className="headerWrapper ">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID 19</b> epidemic, order may be processed with a
              slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container w-[80%]">
            <div className="row">
              <div className="flex items-center logoWrapper col-sm-2">
                <Link to={"/"}>
                  {" "}
                  <img src={Logo} alt="logo" />
                </Link>
              </div>

              <div className="col-10 flex gap items-center part2">
                {
                  context.countryList.length!==0 &&  <CountryDropDown />
                }
               
                {/* Header Search Start Here */}
                <SearchBox />

                {/* header part 3 */}
                <div className="part3 flex items-center gap-4 ">
                  <Button className="circle mr-3">
                    <LuUser />
                  </Button>
                  <div className="ml-auto cartTab flex items-center">
                    <span className="price"> $7.76</span>
                    <div className="relative ml-2 ">
                      <Button className="circle ml-2">
                        <FaCartPlus />
                      </Button>
                      <span className="count flex items-center justify-center">
                        0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* navbar 3 */}
        <Navigation/>
      </nav>
    </div>
  );
};
