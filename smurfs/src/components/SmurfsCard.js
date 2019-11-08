import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../action/index";

import Smurfs from "./Smurfs";

const SmurfsCard = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);
  if (props.isFetching) {
    return <h2> Loading Smurfs .......</h2>;
  }
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.smurfInfo.map(info => (
        <Smurfs
          key={info.id}
          info={info}
          height={info.height}
          name={info.name}
          age={info.age}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfInfo: state.smurfInfo,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfsCard);
