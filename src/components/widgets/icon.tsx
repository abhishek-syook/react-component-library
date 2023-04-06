import React from 'react';
import cx from 'helpers/classnames';

const icons = {
	filter: (
		<path d="M6.66667 12H9.33333V10.6667H6.66667V12ZM2 4V5.33333H14V4H2ZM4 8.66667H12V7.33333H4V8.66667Z" />
	),
	column: (
		<path d="M9.78 3.33325V12.6666H6.22V3.33325H9.78ZM10.4467 12.6666H14V3.33325H10.4467V12.6666ZM5.55333 12.6666V3.33325H2V12.6666H5.55333Z" />
	)
};

interface IconProps {
	name: 'filter' | 'column';
	size?: number;
	fill?: string;
	asButton?: boolean;
	className?: string;
	title?: string;
}

const Icon: React.FC<IconProps> = ({
	name,
	size = 24,
	fill = 'currentColor',
	asButton = false,
	className = '',
	title,
	...rest
}) => {
	return (
		<svg
			className={cx(className, { cursorOverHover: asButton })}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			{icons[name]}
			{title != null && <title>{title}</title>}
		</svg>
	);
};

export default Icon;
