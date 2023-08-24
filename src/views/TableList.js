/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Tasks</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Task</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Start Time</th>
                      <th >End Time</th>
                      {/* <th >Salary</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Create ToDo repo</td>
                      <td>Development</td>
                      <td>Complete</td>
                      <td>8/23/2023, 10:10:00 AM</td>
                      <td >8/23/2023, 3:10:00 PM</td>
                    </tr>
                    <tr>
                      <td>Select a theme</td>
                      <td>Development</td>
                      <td>Complete</td>
                      <td>8/23/2023, 10:10:00 AM</td>
                      <td >8/23/2023, 12:00:00 PM</td>
                    </tr>
                    <tr>
                      <td>Browse the new theme</td>
                      <td>Development</td>
                      <td>Ongoing</td>
                      <td>8/23/2023, 12:10:00 AM</td>
                      <td >8/23/2023, 12:30:00 PM</td>
                    </tr>
                    <tr>
                      <td>Create Listing page</td>
                      <td>Development</td>
                      <td>Ongoing</td>
                      <td>8/23/2023, 12:10:00 AM</td>
                      <td >8/23/2023, 02:30:00 PM</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
