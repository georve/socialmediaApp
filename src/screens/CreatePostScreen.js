import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, Button } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import { Entypo } from "@expo/vector-icons";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePostScreen = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const onPost = () => {
    console.warn("Posting: ", description);
    setDescription("");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.canceled) {
      setImage(result.uri);
    }
  };



  return (
    <View style={styles.container}>   
    <Text>Create Post Screen</Text>

      <View style={styles.header}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>

      <TextInput
        placeholder="What's on your mind?"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />

      <View style={styles.buttonContainer}>
        <Button onPress={onPost} title="Post" disabled={!description} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    padding: 10,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  input: {
    marginBottom: "auto",
  },
  buttonContainer: {
    marginTop: "auto",
    marginVertical: 10,
  },
  image: {
	  width: "100%",
	  aspectRatio: 4 / 3,
	},
});

export default CreatePostScreen;