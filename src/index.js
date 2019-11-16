import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
	const [ latitude, setLatitude ] = useState(null);
	const [ error, setError ] = useState('');
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			(position) => setLatitude(position.coords.latitude),
			setLoading(false),
			(err) => setError(err.message)
		);
	}, []);

	return <SeasonDisplay lat={latitude} loading={loading} error={error} />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
