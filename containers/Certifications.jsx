import { certifications } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import CertificationCard from "../components/CertificationCard";
import { Fade } from "react-reveal";

const Certifications = () => {
	return (
		<section className="">
			<Container>
				<Fade bottom duration={1000} distance="40px">
					<div className="d-flex p-4">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
								<i className="fa fa-star text-info" />
							</div>
						</div>
						<div className="pl-4">
							<h4 className="display-3 text-info">
								Certifications
							</h4>
						</div>
					</div>
					<Row className="row-grid align-items-center">
						{certifications.map((data, i) => {
							return (
								<Col key={i} lg={20}>
									<CertificationCard data={data} />
								</Col>
							);
						})}
					</Row>
				</Fade>
			</Container>
		</section>
	);
};

export default Certifications;
