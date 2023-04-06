import './index.css';

import React from 'react';

import Icon from 'components/widgets/icon';

interface MainComponentProps {
	data: any;
	columns: any;
}

const MainComponent: React.FC<MainComponentProps> = ({ data, columns }) => {
	return (
		<div className="react-component-library">
			<Icon name="filter" />
			<Icon name="column" />
			MainComponent
		</div>
	);
};

export default MainComponent;
