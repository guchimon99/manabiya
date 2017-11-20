import React from "react"
import Base from "components/Base"

export default class StepValueTable extends Base {
    render() {
        return (
            <div className="stepValueTable">
                {new Array(128).fill(null).map((e,i) => {
                    var type = i % 2 ? "buy" : "sell"
                    return (
                        <div key={i} className={`stepValueTable_row stepValueTable_row-${type}`}>
                            <div className="stepValueTable_col stepValueTable_col-time">00:00:00</div>
                            <div className="stepValueTable_col stepValueTable_col-price">1000</div>
                            <div className="stepValueTable_col stepValueTable_col-amount">0.0001</div>
                        </div>
                    )
                })}
            </div>
        )
    }
};
