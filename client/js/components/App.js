import React from "react"
import Base from "components/Base"

import Header from "components/Header"
import Chart from "components/Chart"
import TradeTable from "components/TradeTable"
import MarketTable from "components/MarketTable"
import Order from "components/Order"
import OrderTable from "components/OrderTable"
import AssetTable from "components/AssetTable"
import StepValueTable from "components/StepValueTable"

export default class App extends Base {

    constructor(props) {

        super(props)

        this.state = {
            rightTab : "order",
            bottomTab: "order"
        }
    }

    render() {
        return (
            <div className="app">
                <div className="app_row app_row-header">
                    <Header />
                </div>
                <div className="app_row app_row-body">
                    <div className="app_col app_col-left">
                        <div className="app_row app_row-chart">
                            <Chart />
                        </div>
                        <div className="app_row app_row-tabBar">
                            <div className="tabBar">
                                <button
                                    className={`tabBar_tab ${this.state.bottomTab == "order" ? "tabBar_tab-active" : ""}`}
                                    onClick={() => this.setState({ bottomTab : "order" })} >
                                        注文一覧
                                </button>
                                <button
                                    className={`tabBar_tab ${this.state.bottomTab == "trade" ? "tabBar_tab-active" : ""}`}
                                    onClick={() => this.setState({ bottomTab : "trade" })} >
                                        取引履歴
                                </button>
                            </div>
                        </div>
                        {(()=>( this.state.bottomTab == "order" ? (
                            <div className="app_row app_row-bottom app_row-orderTable">
                                <OrderTable />
                            </div>
                        ) : (
                            <div className="app_row app_row-bottom app_row-tradeTable">
                                <TradeTable />
                            </div>
                        )))()}
                    </div>
                    <div className="app_col app_col-middle">
                        <MarketTable />
                    </div>
                    <div className="app_col app_col-right">
                        <div className="app_row app_row-tabBar">
                            <div className="tabBar">
                                <button
                                    className={`tabBar_tab ${this.state.rightTab == "order" ? "tabBar_tab-active" : ""}`}
                                    onClick={() => this.setState({ rightTab : "order" })} >
                                        注文
                                </button>
                                <button
                                    className={`tabBar_tab ${this.state.rightTab == "stepValue" ? "tabBar_tab-active" : ""}`}
                                    onClick={() => this.setState({ rightTab : "stepValue" })} >
                                        歩み値
                                </button>
                            </div>
                        </div>
                        {(()=>( this.state.rightTab == "order" ? [
                            <div key="1" className="app_row app_row-order">
                                <Order />
                            </div>,
                            <div key="2" className="app_row app_row-assetTable">
                                <AssetTable />
                            </div>
                        ] : (
                            <div key="3" className="app_row app_row-stepValueTable">
                                <StepValueTable />
                            </div>
                        )))()}
                    </div>
                </div>
            </div>
        )
    }
};
