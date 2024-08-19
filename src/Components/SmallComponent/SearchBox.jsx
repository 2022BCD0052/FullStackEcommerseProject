import { Button } from "@mui/material"
import { IoSearchSharp } from "react-icons/io5"

const SearchBox = () => {
  return (
    <div className="headerSearch ml-3 mr-3  ">
                  <input
                    type="text"
                    placeholder="Search for products, brands, or stores"
                  />
                  <Button>
                    <IoSearchSharp />
                  </Button>
                </div>
  )
}

export default SearchBox