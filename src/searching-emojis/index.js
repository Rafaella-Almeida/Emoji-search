import "./style.css";
import arrayEmoji from "../services/getEmoji";

const SearchingEmoji = () => {
  const filterEmojis = arrayEmoji
    .filter(({ title, keywords }) => {
      if (title.toLowerCase().includes(listEmoji.toLowerCase())) {
      }
    })
    .slice(0);
};
