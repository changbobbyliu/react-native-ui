import React from "react";
import { Counter } from "@boobareth/react-native-ui";
import type { ComponentMeta } from "@storybook/react-native";

const config: ComponentMeta<typeof Counter> = {
	title: "Counter",
	component: Counter,
	args: {
		title: "Hello world??!",
	},
};

export const Basic = (args: any) => <Counter {...args} title="BABA" initialCount={20} />;

export default config;
