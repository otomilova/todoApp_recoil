import {useRecoilValue} from "recoil";
import {fetchRandomQuote} from "../state/selectors/randomQuote.js";
import {Box, Text} from "@chakra-ui/react";

const RandomQuote = () => {
    const randomQuote= useRecoilValue(fetchRandomQuote)
    return (
        <>

            <Box
                mb={4}
                mt={4}
                maxW="50%"
            >
                <Text
                    position="relative"
                    _after={{
                        content: '"“"',
                        width: "60%",
                        height: "60%",
                        position: "absolute",
                        bottom: "-3px",
                        right: '-40px',
                        color: "blue.500",
                        fontSize: "100px",
                        fontFamily: 'Times, sans-serif',
                        lineHeight: '5',
                        transform: "rotate(180deg)"
                    }}
                    _before={{
                        content: '"“"',
                        width: "60%",
                        height: "60%",
                        position: "absolute",
                        top: "-3px",
                        left: '-40px',
                        color: "blue.500",
                        fontSize: "100px",
                        fontFamily: 'Times, sans-serif',
                        lineHeight: '5',
                    }}

                >{randomQuote.content}</Text>
                <Text as='b' color="blue.500">{randomQuote.author}</Text>
            </Box>
        </>

    );
};

export default RandomQuote;