import type { FC } from "react";
import { Text, TextProps } from "react-native";
import { styles } from "../styles";

type TProps = TextProps & {};

const BaseText: FC<TProps> = ({ style, ...props }) => {
	return <Text {...props} style={[style, { color: styles.colors.black }]} />;
};

const H1: FC<TProps> = ({ style, ...props }) => {
	return (
		<BaseText
			{...props}
			style={[
				{
					fontSize: styles.font.size.xl,
					fontWeight: "bold",
					textTransform: "uppercase",
					color: styles.colors.black,
				},
				style,
			]}
		/>
	);
};

const P: FC<TProps> = ({ style, ...props }) => {
	return <BaseText {...props} style={[style, { color: "blue" }]} />;
};

export default {
	H1,
	P,
};
