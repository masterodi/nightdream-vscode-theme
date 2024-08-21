import React from 'react';

const template = `${JSON.stringify({ something: 'else' })}`;

const Component = () => (
	<>
		<div>Something 1</div>
		<div>Something 2</div>
	</>
);

export const Main = () => (
	<div class="container">
		<Component />
		{template}
		<Component />
	</div>
);
