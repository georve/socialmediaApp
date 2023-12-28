import FeedPost from "../components/FeedPost";
import { ScrollView, FlatList } from "react-native";
import posts from "../../assets/data/posts.json";


  const FeedScreen = () => {
    return (
        <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <FeedPost post={item} />}
      />
    );
  };

export default FeedScreen;