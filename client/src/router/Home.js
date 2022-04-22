import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 40%;
margin: 0 auto;
margin-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
`

const ListUl = styled.ul`
font-size: 2rem;
margin-bottom: .3rem;
list-style:none;
`

const Btn = styled.button`
 -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  background: #0d6efd;
  color: #fff;
  margin: 0;
  padding: 0.5rem 1rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  display: inline-block;
  width: auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
`

function Home() {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users/'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        // console.log(response.data[0])
      } catch (e) {
        setError(e);
      }
      setLoading(false);
      console.log('gg??')
    };
  
    useEffect(() => {
      fetchUsers();
      console.log('useeff')
    },[]);

    // const onDelete = async (id) => {
    //     try {
    //       const response = await axios.delete(
    //         `https://jsonplaceholder.typicode.com/users/${id}`
    //       );
    //       console.log(1, response.id);
    //       console.log(2, id)
    //       deleteUser()
    //     } catch (e) {
    //       setError(e);
    //     }
    //   }
      
    //   const deleteUser = (id) => {
    //     console.log(2, id)
    //     const deleteUser = [...users].filter(user => user.id !== id);
    //     setUsers(deleteUser)
    // }
    
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
      <>
      <Wrapper>
        <ListUl>
          {users.map(user => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ListUl>
        <Btn onClick={fetchUsers}>다시 불러오기</Btn>
        </Wrapper>
      </>
    );
}


export default Home;
