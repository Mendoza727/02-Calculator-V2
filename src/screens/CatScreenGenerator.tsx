import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface Cat {
  x: number;
  y: number;
}

const CatGame: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [cats, setCats] = useState<Cat[]>([]);

  const generateCats = () => {
    const newCats = Array.from({ length: 3 }, () => ({
      x: Math.random() * 90,
      y: Math.random() * 90,
    }));
    setCats(newCats);
  };

  const handleClick = () => {
    setScore(score + 1);
    generateCats();
  };

  useEffect(() => {
    generateCats();
  }, []);

  return (
    <View style={styles.gameContainer}>
      <Text style={styles.title}>Juego de Gatitos</Text>
      <Text style={styles.score}>Puntaje: {score}</Text>
      <View style={styles.gameArea}>
        {cats.map((cat, index) => (
          <TouchableOpacity
            key={index}
            onPress={handleClick}
            style={[
              styles.cat,
              {
                top: `${cat.y}%`,
                left: `${cat.x}%`,
              },
            ]}
          >
            <Image
              source={require("../../assets/cat-without-background.png")}
              style={styles.catImage}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7e7fe",
  },
  title: {
    fontSize: 36,
    color: "#ff69b4",
    marginBottom: 20,
  },
  score: {
    fontSize: 24,
    color: "#ff85c1",
    marginBottom: 20,
  },
  gameArea: {
    width: "90%",
    height: "80%",
    borderColor: "#ff9cee",
    borderWidth: 2,
    borderRadius: 10,
    position: "relative",
    overflow: "hidden",
  },
  cat: {
    position: "absolute",
  },
  catImage: {
    width: 80,
    height: 80,
  },
});

export default CatGame;
