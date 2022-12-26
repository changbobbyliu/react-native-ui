import React from "react";
import { View } from "react-native";

/**
 * 📒 Add border box to all stories
 */
const withBox = (Story) => {
	return (
		<View
			style={{
				flex: 1,
				margin: 8,
				borderWidth: 1,
				backgroundColor: "#eee",
				borderColor: "#ddd",
			}}
		>
			<Story />
		</View>
	);
}

export default withBox;