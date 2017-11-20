import React from "react"
import Base from "components/Base"

export default class MarketTable extends Base {
    constructor(props) {
      super(props)

      this.state = {
            isGrouping: true
      }
    }

    render() {
        return (
            <div className="marketTable">
                <div className="marketTable_header">
                    <div className="marketTable_headerCol">売り</div>
                    <div className="marketTable_headerCol">価格</div>
                    <div className="marketTable_headerCol">買い</div>
                </div>
                <div className="marketTable_body">
                    <div className="marketTable_group marketTable_group-sell">
                        {new Array(32).fill(null).map((e,i) => (
                            <div className="marketTable_row" key={i}>
                                <div className="marketTable_col marketTable_col-week">0.0100</div>
                                <div className="marketTable_col">310</div>
                                <div className="marketTable_col"></div>
                            </div>

                        ))}
                    </div>
                    <div className="marketTable_group marketTable_group-avg">
                        <div className="marketTable_row marketTable_row-safety">
                            <div className="marketTable_col"></div>
                            <div className="marketTable_col marketTable_col-strong">300.00</div>
                            <div className="marketTable_col marketTable_col-week">+0.00%</div>
                        </div>
                    </div>
                    <div className="marketTable_group marketTable_group-buy">
                        {new Array(32).fill(null).map((e,i)=>(
                            <div className="marketTable_row" key={i}>
                                <div className="marketTable_col"></div>
                                <div className="marketTable_col">295</div>
                                <div className="marketTable_col marketTable_col-week">0.0100</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="marketTable_footer">
                    <span>グルーピング</span>
                    <button
                        className={`btn btn-${this.state.isGrouping == true ? "primary" : "seconray"}`}
                        onClick={() => this.setState({isGrouping: true})}>ON</button>
                    <button
                        className={`btn btn-${this.state.isGrouping == false ? "primary" : "seconray"}`}
                        onClick={() => this.setState({isGrouping: false})}>OFF</button>
                </div>
            </div>
        )
    }
}
