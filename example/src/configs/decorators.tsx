import { addDecorator } from "@storybook/react-native";
import { View } from "react-native";

addDecorator((Story) => (
	<View style={{ margin: 8, borderWidth: 1, backgroundColor: "#eee", borderColor: "#ddd" }}>
		<Story />
	</View>
));
