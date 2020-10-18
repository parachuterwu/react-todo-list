import React, { PureComponent } from 'react';
import Title from './title';
import Create from './create';

import './index.css';
/*
  数据驱动视图

   1. 确定数据格式
   2. 根据数据完成列表的渲染
   3. 完成添加功能
   4. 完成单项错误

   data:[
      {
        id: 0,
        txt: "数据内容",
        done: false
      },{
        id: 1,
        txt: "数据内容2",
        done: false
      },{
        id: 2,
        txt: "数据内容3",
        done: false
      }
   ]

*/

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: 0,
                    txt: '数据内容',
                    done: false
                }
            ]
        }
    }

    addData(txt) {

    }

    render() {
        let { data } = this.state;

        return (
            <div id="dodoapp">
                <Title />
                <div className="content">
                    <Create addData={this.addData} />  
                </div>
            </div>

        );
    }
}

export default App;

