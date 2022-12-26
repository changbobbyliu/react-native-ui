import { addDecorator } from "@storybook/react-native";
import { View } from "react-native";

/**
 * 📒 Add border box to all stories
 */
addDecorator((Story) => {
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
});
