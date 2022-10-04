import React from 'react';
import { useSelector } from 'react-redux';
import { FetchData } from '../../pages/api';
import { RootState } from '../../redux';

const Template = ({ isVisible }: { isVisible: any }) => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);

	const breadcrumbHeight = useSelector(
		(state: RootState) => state.basic.breadcrumbHeight
	);

	return (
		<>
			<div
				className="container m-auto grid grid-cols-1 lg:grid-cols-2 items-center"
				style={{
					minHeight: `calc(100vh - ${navigationHeight + breadcrumbHeight}px)`,
				}}
			></div>
		</>
	);
};

export default Template;
