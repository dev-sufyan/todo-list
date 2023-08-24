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
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table
} from "reactstrap";


function Tasks(props) {

  const [taskTypeFilter, setTaskTypeFilter] = useState('all');
  const [tasksList, setTasksList] = useState([]);

  function getData() {
    setTasksList([
      {
        name: 'Create ToDo repo',
        category: 'Development',
        status: 'Complete',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Select a theme',
        category: 'Development',
        status: 'Complete',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Browse the new theme',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Create Listing page',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 33',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 34',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 35',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 36',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 37',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 38',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 39',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 40',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 41',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 42',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 43',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
      {
        name: 'Task 44',
        category: 'Development',
        status: 'Ongoing',
        start: '2023-08-23T05:10:00.000Z',
        end: '2023-08-23T10:10:00.000Z',
        createdAt: '2023-08-23T03:10:00.000Z',
        updatedAt: '2023-08-23T03:10:00.000Z'
      },
    ])
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    {/* <h5 className="card-category">Total Shipments</h5> */}
                    <CardTitle tag="h2">Tasks</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: taskTypeFilter === "all",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setTaskTypeFilter("all")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          All
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: taskTypeFilter === "completed",
                        })}
                        onClick={() => setTaskTypeFilter("completed")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Completed
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: taskTypeFilter === "ongoing",
                        })}
                        onClick={() => setTaskTypeFilter("ongoing")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Ongoing
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div>
                  {/* <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  /> */}
                  <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Task</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Created At</th>
                      <th>Modified At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasksList.map((task, ind) => {
                      return (
                        <tr key={`task-list-${ind}`}>
                          <td>{task.name}</td>
                          <td>{task.category}</td>
                          <td>{task.status}</td>
                          <td>{task.start}</td>
                          <td>{task.end}</td>
                          <td>{task.createdAt}</td>
                          <td>{task.updatedAt}</td>
                        </tr>
                      )
                    })}
                    
                    {/* <tr>
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
                    </tr> */}
                    
                  </tbody>
                </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tasks;
