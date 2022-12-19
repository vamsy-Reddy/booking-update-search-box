import React from "react";
import "./styles.css";
import { DatePicker, Form, Button, Input, Typography, InputNumber } from "antd";
import moment from "moment";

const { Text } = Typography;

const disabledDate = (current) => {
  return current && current < moment().startOf("day");
};

const ExtendedSearch = (onFinish, initialValues) => {
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();

  return (
    <div>
      <Form
        onFinish={onFinish}
        form={form}
        initialValues={initialValues}
        layout="vertical"
        labelCol={{
          span: 27
        }}
        wrapperCol={{
          span: 27
        }}
      >
        {/* //--------------------------------------------------------------------------- */}
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle" style={{ paddingLeft: 10 }}>
                Search
              </h1>
              <div className="lsItem">
                <Form.Item
                  style={{ paddingLeft: 10, width: 270 }}
                  label="Destination"
                  name="destination"
                  rules={[
                    {
                      required: true,
                      message: "Invalid Value"
                    }
                  ]}
                >
                  <Input type="text"></Input>
                </Form.Item>
              </div>
              {/* destination div ends here */}
              <div className="lsItem">
                <Form.Item
                  style={{ paddingLeft: 10 }}
                  label="Check-In & Check-Out"
                  name="time_in_&_out"
                  rules={[
                    {
                      required: true,
                      message: "Invalid Value"
                    }
                  ]}
                >
                  <RangePicker
                    disabledDate={disabledDate}
                    showTime
                    format="Do MMMM YYYY,h:mm a"
                  />
                </Form.Item>
              </div>
              {/* check-In & Out date Ends here*/}
              <div className="lsItem">
                <Form.Item
                  label="Filter By :-"
                  style={{ paddingLeft: 10 }}
                ></Form.Item>
              </div>
              {/* filter by div ends here */}
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <Form.Item>
                    <span className="lsOptionText">
                      Min price <Text type="secondary">per night</Text>
                    </span>
                    <InputNumber
                      min={0}
                      max={100}
                      type="number"
                      keyboard={false}
                      style={{ width: 100, marginLeft: 14 }}
                      className="lsOptionInput"
                    />
                  </Form.Item>
                </div>
                {/* div of min price ends here */}
                <div className="lsOptionItem">
                  <Form.Item>
                    <span className="lsOptionText">
                      Max price <Text type="secondary">per night</Text>
                    </span>
                    <InputNumber
                      min={0}
                      max={100}
                      type="number"
                      keyboard={false}
                      style={{ width: 100, marginLeft: 12 }}
                      className="lsOptionInput"
                    />
                  </Form.Item>
                </div>
                {/* div of max price ends here */}
                <div className="lsOptionItem">
                  <Form.Item>
                    <span className="lsOptionText">Adult</span>
                    <InputNumber
                      min={0}
                      max={100}
                      type="number"
                      keyboard={false}
                      style={{ width: 100, marginLeft: 100 }}
                      className="lsOptionInput"
                    />
                  </Form.Item>
                </div>
                {/* div of adult end here */}
                <div className="lsOptionItem">
                  <Form.Item>
                    <span className="lsOptionText">childern</span>
                    <InputNumber
                      min={0}
                      max={100}
                      type="number"
                      keyboard={false}
                      style={{ width: 100, marginLeft: 85 }}
                      className="lsOptionInput"
                    />
                  </Form.Item>
                </div>
                {/* div of childern ends here */}
                <div className="lsOptionItem">
                  <Form.Item>
                    <span className="lsOptionText">
                      room
                      <InputNumber
                        min={0}
                        max={100}
                        type="number"
                        keyboard={false}
                        style={{ width: 100, marginLeft: 100 }}
                        className="lsOptionInput"
                      />
                    </span>
                  </Form.Item>
                </div>
                {/* div of room ends here */}
              </div>
              {/* div of options ends here */}
              <div>
                <Button className="listButton" htmlType="submit">
                  Search
                </Button>
              </div>
              {/* div of button ends here */}
            </div>
          </div>
        </div>
      </Form>
      {/* //-------------------------------------------------------------------------------------- */}
    </div>
  );
};
export default ExtendedSearch;
