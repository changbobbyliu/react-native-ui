import { Text } from "@boobareth/react-native-ui";
import type { ComponentMeta } from "@storybook/react-native";

type TH1 = typeof Text.H1;

const config: ComponentMeta<TH1> = {
	title: "Text",
	component: Text.H1,
	args: {
		children: "H1 Sample Text"
	}
};

export const H1: TH1 = (props) => {
	return <Text.H1 {...props} />;
};

export default config;
