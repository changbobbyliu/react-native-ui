import React, { type FC, useState } from "react";
import { View, Text, Button } from "react-native";

export const Counter: FC<{ title: string; initialCount?: number }> = ({
	title,
	initialCount = 0,
}) => {
	const [count, setCount] = useState(initialCount || 0);

	return (
		<View
			style={{
				alignSelf: "flex-start",
				padding: 8,
			}}
		>
			<View style={{ marginBottom: 8 }}>
				<Text>{`${title}: ${count}`}</Text>
				<Text>V0.1.0</Text>
			</View>
			<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
				<Button title="+" onPress={() => setCount(count + 1)} />
				<Button title="-" onPress={() => setCount(count - 1)} />
			</View>
		</View>
	);
};
