/*
 * Copyright (c) 2013-2019. 浙江博圣生物技术股份有限公司 www.biosan.cn. All Rights Reserved.
 */

/**
 * Created by Admin on 2021/1/20.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import styles from './style.less';
import { Row, Col } from 'antd';

const resp = [
  {
    title: '基本信息',
    children: [
      {
        key: '母亲姓名',
        value: '王文',
        rowWidth: ''
      },
      {
        key: '女方姓名',
        value: '宋茜'
      },
      {
        key: '女方证件类型',
        value: '身份证'
      },
      {
        key: '有无不良孕产史（早产、胎儿异常引产、正常分娩新生儿异常、胎停、自然流产等）',
        value: '自然流产（具体描述周数、次数） 12周 1次'
      },
      {
        key: '接触有毒物质',
        value: '有  苯类有害物质'
      },
      {
        key: '孕早期不良接触史',
        value: '宠物 狗；吸烟（填写每天支数） 3'
      },
    ]
  }
];

class ArchivesInfo extends React.Component {
  state = {
    rowWidth: []
  }
  itemCount = 0;
  componentDidMount () {
    console.log('3333');
    var container = document.querySelector('.info_container111');
    const nodeList = container.querySelectorAll('span.item');
    console.log('nodeList', nodeList);
    nodeList.forEach(item => {
      console.log(item.offsetWidth);
      this.state.rowWidth.push(item.offsetWidth);
    });
    resp.forEach(block => {
      block.children.forEach((item, index) => {
        const width = nodeList[this.itemCount++].offsetWidth / 300;
        if (width >= 2) {
          item.rowWidth = 24;
        } else if (width >= 1) {
          item.rowWidth = 16;
        } else {
          item.rowWidth = 8;
        }
      });
    });
    this.setState({});
  }
  getContent (data) {
    if (this.itemCount) {
      return data.map((item, index) => {
        return (
          <Col span={item.rowWidth}>
            <span className="info_label">{item.key}:</span>
            <span className="info_input">{item.value}</span>
          </Col>
        );
      });
    }
    return data.map((item, index) => {
      return (
        <span className={'item'}>
          <span>{item.key}:</span>
          <span>{item.value}</span>
        </span>
      );
    });
  }
  render () {
    return (
      <div className="info_container111">
        {
          resp.map(block => {
            return (
              <React.Fragment>
                <div className="info_title">{block.title}</div>
                <Row>{this.getContent(block.children)}</Row>
              </React.Fragment>
            );
          })
        }
      </div>
    );
  }
}
ArchivesInfo.propTypes = {
  baseInfoData: PropTypes.object,
};
export default connect(({archivesList}) => archivesList)(ArchivesInfo);
