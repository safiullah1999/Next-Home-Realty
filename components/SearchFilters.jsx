import { useEffect, useState } from "react";
import { Flex, Box, Text, Icon, Spinner, Select, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {MdCancel} from 'react-icons/md';

import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const [filters, setfilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filtervalues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filtervalues);
    
    values.forEach((item)=>{
      query[item.name] = item.value
    })
    // we update the url with pathname and query
    router.push({ pathname: path, query })
  }

  return(
    <Flex bg={'gray.100'} justifyContent={'center'} flexWrap={'wrap'} >
      {filters.map((filter)=>(
        <Box key={filter.queryName}>
          {/* onchange will trigger searchProperties function that will search specific properties that are related to selected filters in our query of url */}
          <Select
            placeholder={filter.placeholder}
            p={2}
            onChange={(e)=>searchProperties({ [filter.queryName]: e.target.value })}
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}

export default SearchFilters;