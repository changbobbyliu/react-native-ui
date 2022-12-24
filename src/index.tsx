import React, { type FC, useState } from "react";
import { View, Text, Button } from "react-native";

export function multiply(a: number, b: number): Promise<number> {
	return Promise.resolve(a * b);
}

export const Counter: FC<{ title: string; initialCount?: number }> = ({
	title,
	initialCount = 0,
}) => {
	const [count, setCount] = useState(initialCount || 0);

	return (
		<View>
			<Text>{`${title}: ${count}`}</Text>
			<Text>V0.1.0</Text>
			<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
				<Button title="+" onPress={() => setCount(count + 1)} />
				<Button title="-" onPress={() => setCount(count - 1)} />
			</View>
		</View>
	);
};
