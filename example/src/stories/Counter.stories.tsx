import React from "react";
import { Counter } from "@boobareth/react-native-ui";
import type { ComponentMeta } from "@storybook/react-native";

const config: ComponentMeta<typeof Counter> = {
	title: "Counter",
	component: Counter,
	args: {
		title: "Hello world??!",
	},
	parameters: {
		notes: "This is a simple counter component",
	}
};

export const Basic = (args: any) => <Counter {...args} />;

export default config;
