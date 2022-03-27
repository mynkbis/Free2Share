import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { List, Avatar, Button, Skeleton } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
const count = 3;

export default function CommunityMemberList(props) {
console.log(props.location.state.communityMember)
   const [list, setList] = useState([])

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then((res) => { setList(res.data) })
  // }, []);

  // console.log(list);

  return (
    <div className="flex-center max-w-7xl mx-auto px-4 lg:pt-24">
        <List
        itemLayout="horizontal"
        dataSource={props.location.state.communityMember}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit">Remove</a>, <a key="list-loadmore-more">Edit</a>, <a key="list-loadmore-more">Chat</a>]}
          >
            <List.Item.Meta
              title={item.membername}
            />
          </List.Item>
        )}
      />
      </div>
  );

}
