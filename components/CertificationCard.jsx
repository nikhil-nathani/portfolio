import React from "react";
import { Card, CardBody, Badge, Button } from "reactstrap";
import Image from "next/dist/client/image";
import { Fade } from "react-reveal";
import Images from "../Assets/Images";

const CertificationCard = ({ data }) => {
  return (
    <Fade left duration={1000} distance="40px">
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div
              style={{
                width: 110,
                height: 110,
                borderWidth: 0,
                justifyItems: "center",
              }}
            >
              <Image src={Images.freeCodeCamp}></Image>
            </div>
            <div className="pl-4">
              <h5
                className="text-info"
                style={{ fontSize: data.name.length * 0.5 }}
              >
                {data.name}
              </h5>

              <Button
                outline
                color="info"
                href={data.link}
                rel="noopener"
                style={{
                  fontSize: 12,
                  textTransform: "none",
                  justifyContent: "center",
                  justifyItems: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  marginTop: 10,
                }}
                target="_blank"
                on
              >
                View Certification
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default CertificationCard;
