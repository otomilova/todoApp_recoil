import {selector} from "recoil";
const url= "https://api.quotable.io/random";

export const fetchRandomQuote = selector({
    key: 'fetchRandomQuote',
    get: async ({ get }) => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            return data;
        }catch(error){
            throw error;
        }
    }
});

