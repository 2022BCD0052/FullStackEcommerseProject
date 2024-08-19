import { Button } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import { VscTriangleDown } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container pl-[5%] pr-[5%]">
        <div className="row">
          <div className="col-sm-3  navPart1">
            <Button className="allCatTab items-center flex">
              <span className="icon1 mr-2">
                <IoMenu />
              </span>
              <span className="text"> All Categories</span>
              <span className="icon2 ml-2">
                <VscTriangleDown />
              </span>
            </Button>
          </div>

          <div className="col-sm-9 navPart2  justify-center flex items-center ">
            <ul className="list list-inline  ml-auto ">
              <li className="list-inline-item">
                <Link to=''><Button>Home</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to=''><Button>Fashion</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to=''> <Button>Electronic</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to=''><Button>Bakery</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to=''><Button>Grocery</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to=''><Button>Blog</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to=''><Button>Blog</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to=''><Button>Blog</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to=''><Button>Blog</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to=''><Button>Blog</Button></Link>
              </li>
            
              

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
