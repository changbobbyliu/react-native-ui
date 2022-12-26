import { Text } from "@boobareth/react-native-ui";
import type { ComponentMeta } from "@storybook/react-native";

const config: ComponentMeta<typeof Text.H1> = {
	title: "Text",
	component: Text.H1,
};

export const H1 = () => {
	return <Text.H1>H1</Text.H1>;
};

export default config;
