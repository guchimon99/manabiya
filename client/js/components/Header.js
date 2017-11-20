import React from "react"
import Base from "components/Base"

export default class Header extends Base {
    render() {
        return (
            <div className="header">
                <div className="header_brand">
                    <i className="fa fa-compass" />
                </div>
                <div className="header_pair">
                    ZNY/JPY <i className="fa fa-caret-down"></i>
                </div>
                <div className="header_overview">
                    <div className="header_overviewCol">1.000 JPY</div>
                    <div className="header_overviewCol">+0.00%</div>
                    <div className="header_overviewCol">1000 ZNY</div>
                </div>
                <div className="header_account">
                    <div className="header_accountCol">0.0 ZNY</div>
                    <div className="header_accountCol">3000.000 JPY</div>
                    <div className="header_accountCol"><i className="fa fa-life-ring" /></div>
                    <div className="header_accountCol"><i className="fa fa-user" /></div>
                </div>
            </div>
        )
    }
};
