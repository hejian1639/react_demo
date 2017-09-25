import React from 'react'


import 'css!bootstrap';
import 'css!bootstrap-theme';

import 'css!antd';
import { Icon, Table, DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

export default React.createClass({
    componentWillMount() {
        $('#pageLoading').hide();
    },

    onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        console.log(new Date(value));
    },

    onOk(value) {
        console.log('onOk: ', value);
    },

    render() {

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href="#">{text}</a>,
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '操作',
            key: 'operation',
            render: (text, record) => (
                <span>
                    <a href="#">操作一{record.name}</a>
                    <span className="ant-divider"></span>
                    <a href="#">操作二</a>
                    <span className="ant-divider"></span>
                    <a href="#" className="ant-dropdown-link">
                        更多 <Icon type="down" />
                    </a>
                </span>
            ),
        }];

        const data = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        }, {
            key: '3',
            name: '李大嘴',
            age: 32,
            address: '西湖区湖底公园1号',
        }];


        return (
            <div>
                <Table columns={columns} dataSource={data} onRowClick={function () { console.log("onRowClick") }} onRowHover={function () { console.log("onMyRowHover") }} />
                <DatePicker defaultValue={moment()} format={dateFormat} onChange={this.onChange} onOk={this.onOk} />
                <br />
                <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
                <br />
                <RangePicker
                    defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                    format={dateFormat}
                />
            </div>);
    },
});


