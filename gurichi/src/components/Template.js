import React from 'react';
import  './Template.css';

const Template = ( {children, matchLength} ) => {
	return (
	<div className="Template">
		<div className="title">
			<img src="img/logo_transparent.png" alt="logo"/>
			<div>2022년 경기 수: ({matchLength})</div>
		</div>
		<div>{children}</div>
	</div>
	)
}

export default Template;