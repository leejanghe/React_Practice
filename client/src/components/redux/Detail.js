import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {

const myId = useParams().id;
const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

// function mapStateToProps(state, ownProps) {
//   const {
//     match: {
//       params: { id }
//     }
//   } = ownProps;
//   return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
// }
function mapStateToProps(state) {
    return { toDos: state };
    }

export default connect(mapStateToProps)(Detail);


// react-router-dom 버전이 6버전부터는 더이상 history, 
// location, match 등의 props를 component에서 받을 수 없다.
// useParams 이용해서 진행하기