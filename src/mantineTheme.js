import { Anchor, createTheme } from '@mantine/core';

const theme = createTheme({
	components: {
		Anchor: Anchor.extend({
			defaultProps: {
				underline: 'never',
				style: {
					color: '#010103',
					fontWeight: 500,
				},
			},
		}),
	},
});

export default theme;