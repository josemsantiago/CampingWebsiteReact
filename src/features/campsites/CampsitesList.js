import { CAMPSITES } from '../../app/shared/CAMPSITES';
import CampsiteCard from './CampsiteCard';
import { Col, Row } from 'reactstrap';
import React from 'react'; 

const CampsitesList = () => {
	return (
		<Row>
			{CAMPSITES.map((campsite) => {
				return (
					<Col md='5' className='m-4' key={campsite.id}>
						<CampsiteCard campsite={campsite} />
					</Col>
				);
			})}
		</Row>
	);
};

export default CampsitesList;
