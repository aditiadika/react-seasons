import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
	summer: {
		text: 'lets hit the beach',
		iconName: 'sun'
	},
	winter: {
		text: 'Burr, it is chilly',
		iconName: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = ({ lat, loading, Error }) => {
	const season = getSeason(lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season];

	if (loading) {
		return (
			<div className="load">
				<i className="massive notched circle loading icon" />
			</div>
		);
	}

	if (Error) {
		return <h1>Error: {Error}</h1>;
	}

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{season === 'winter' ? `${text}` : `${text}`}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
