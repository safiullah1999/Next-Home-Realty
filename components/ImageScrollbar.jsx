// import { useContext } from "react";
// import Image from "next/image";
// import { Box, Icon, Flex } from "@chakra-ui/react";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Flex justifyContent={'center'} alignItems={'center'} marginRight={1}>
//       <Icon
//         as={FaArrowAltCircleLeft}
//         onClick={() => scrollPrev()}
//         fontSize={'2xl'}
//         cursor={'pointer'}
//       // d={['none','none','none','block']}
//       />
//     </Flex>
//   )
// }

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Flex justifyContent={'center'} alignItems={'center'} marginLeft={1}>
//       <Icon
//         as={FaArrowAltCircleRight}
//         onClick={() => scrollNext()}
//         fontSize={'2xl'}
//         cursor={'pointer'}
//       // d={['none','none','none','block']}
//       />
//     </Flex>
//   )
// }

// export default function ImageSrollbar({ data }) {
//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
//     {data.map((item) => (
//       <Box key={item.id} width={910} itemID={item.id} overflow={'hidden'} p={1} >
//         <Image
//           alt="property"
//           placeholder='blur'
//           blurDataURL={item.url}
//           src={item.url}
//           width={1000}
//           height={500}
//           // if screen size 500px then 100px image size or if screen size 1023px then image size 400px else for all screen sizes image size is 1000px 
//           sizes="(max-width:500px) 100px, (max-width:1023px) 400px, 1000px"
//         />
//       </Box>
//     ))}
//   </ScrollMenu>
//   );
// }

// // const ImageScrollbar = ({ data }) => (
// //   <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
// //     {data.map((item) => (
// //       <Box width={910} itemId={item.id} overflow={'hidden'} p={1} >
// //         {/* if screen size 500px then 100px image size or if screen size 1023px then image size 400px else for all screen sizes image size is 1000px  */}
// //         <Image
// //           alt="property" placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
// //         />
// //       </Box>
// //     ))}
// //   </ScrollMenu>
// // )

// // export default ImageScrollbar;

import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
      />
    </Flex>
  );
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
    />
    </Flex>
  );
}
export default function ImageSrollbar({ data }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
      {data.map((item) => (
        <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
          <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
        </Box>
      ))}
    </ScrollMenu>
  );
}