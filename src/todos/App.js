import React, { PureComponent } from 'react';
import Title from './components/Title';
import Create from './components/Create';
import TodoList from './components/TodoList';

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

        this.addData = this.addData.bind(this);
        this.editTxt = this.editTxt.bind(this);

        this.state = {
            data:[
                {
                  id: 0,
                  txt: "数据内容",
                  done: true
                },
                {
                  id: 1,
                  txt: "数据内容2",
                  done: false
                },
                {
                  id: 2,
                  txt: "数据内容3",
                  done: false
                }
            ]
        }
    }

    // 添加数据
    addData(txt) {
        let { data } = this.state;

        data.unshift({
            id: Date.now(),
            txt,
            done: false
        });

        this.setState({
            data: [...data]
        });
    }

    // 修改事项信息
    editTxt(id, txt) {
        const { data } = this.state;

        // data.find(item => item.id === id).txt = txt;
        data.forEach(item => {
            if (item.id === id) {
                item.txt = txt;
            }
        });

        this.setState({
            data: [...data]
        })
    }

    render() {
        let { data } = this.state;

        return (
            <div id="dodoapp">
                <Title />
                <div className="content">
                    <Create addData={this.addData} />
                    {data.length > 0 && 
                        <TodoList
                            data={data}
                            editTxt={this.editTxt}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default App;

