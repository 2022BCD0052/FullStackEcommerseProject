/* eslint-disable no-undef */
import Button from "@mui/material/Button";
import { FaArrowDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { IoSearchSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import Slide from "@mui/material/Slide";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export const CountryDropDown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectTab, setSelectTab] = useState(null);
  const [countryList, setCountryList] = useState([]);

  const context = useContext(MyContext);
  const selectCountry = (index, country) => {
    setSelectTab(index);
    setisOpenModal(false);
    context.setSelectedCountry(country);
  };
  useEffect(() => {
    setCountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyboard = e.target.value.toLowerCase();
    let list;

    if (keyboard !== "") {
      list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyboard);
      });
    } else {
      list = context.countryList;
    }

    setCountryList(list);
  };

  return (
    <div>
      <Button className="countryDrop " onClick={() => setisOpenModal(true)}>
        <div className="flex info flex-col">
          <span className="lable">Your Location</span>
          <span className="name">
            {context.selectedCountry !== ""
              ? context.selectedCountry?.length>15 ? context.selectedCountry?.substr(0,15)+'...':
              context.selectedCountry : "select Location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaArrowDown />
        </span>
      </Button>
      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        TransitionComponent={Transition}
        className="locationModal"
      >
        <h4 className="mb-1 text-2xl font-medium">
          Choose your Delivery Location
        </h4>
        <p>Enter your location and we will specify the offer for your area</p>
        <Button className="close_" onClick={() => setisOpenModal(false)}>
          <MdClose />
        </Button>
        <div className="headerSearch w-auto ">
          <input
            type="text"
            placeholder="Search your area..."
            onChange={filterList}
          />
          <Button>
            <IoSearchSharp />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => selectCountry(index, item.country)}
                  className={`${selectTab === index ? "active" : ""}`}
                >
                  <Button>{item.country}</Button>
                </li>
              );
            })}
         
        </ul>
      </Dialog>
    </div>
  );
};
