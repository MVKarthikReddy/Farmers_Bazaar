import React from "react";
import PropTypes from "prop-types"

function BoxSkeleton({ height, width, paddingX, paddingY, radius}) {
  return (
    <div
      className={`bg-gray-300 ${radius} ${paddingX} ${paddingY} ${height} ${width} animate-pulse`}
    ></div>
  );
}

export default BoxSkeleton;

// BoxSkeleton.propTypes = {
//   width : PropTypes.func,
//   height : PropTypes.func,
//   radius : PropTypes.func,
// }
