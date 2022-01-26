import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { List, Avatar, Button, Skeleton } from 'antd';
import {useState} from 'react';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

 export default function CommunityMemberList{
     
const [initLoading, setLoading] =useState(true)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [list, setList]= useState([])


    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        setLoading(false)
         setData(res.results)
          setList(res.results)
    
      });
  }

  onLoadMore = () => {
  
        setLoading(true)
      setList(setData(data.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} })))))
  
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        setData(data.concat(res.results))
        
            setList(data)
            setLoading(false)
        
         
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
          }
        );
      
  

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}

ReactDOM.render(<CommunityMemberList />, document.getElementById('container'));