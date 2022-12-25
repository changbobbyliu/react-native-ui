import {
	getStorybookUI,
	configure,
	addDecorator,
	addParameters,
	addArgsEnhancer,
	clearDecorators,
} from "@storybook/react-native";

export const StorybookRoot = getStorybookUI({});

configure(() => {
	return [require("./Button.stories"), require("./Counter.stories")];
}, module);
