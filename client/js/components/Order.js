import React from "react"
import Base from "components/Base"

export default class Order extends Base {
    render() {
        return (
            <div className="order">
                <div className="order_field">
                    <div className="order_typeSelect">
                        <input onChange={()=>{}} checked type="radio" id="orderTypeLimie" name="type" value="limie" />
                        <label className="order_type" htmlFor="orderTypeLimie">指値</label>
                        <input onChange={()=>{}} type="radio" id="orderTypeMarket" name="type" value="market" />
                        <label className="order_type" htmlFor="orderTypeMarket">成り行き</label>
                    </div>
                </div>
                <div className="order_field">
                    <div className="order_tradeSelect">
                        <input onChange={()=>{}} checked type="radio" id="orderTradeTypeBuy" name="trade" value="buy" />
                        <label className="order_trade" htmlFor="orderTradeTypeBuy">買い</label>
                        <input onChange={()=>{}} type="radio" id="orderTradeTypeSell" name="trade" value="sell" />
                        <label className="order_trade" htmlFor="orderTradeTypeSell">売り</label>
                    </div>
                </div>
                <div className="order_fieldGroup">
                    <label className="order_field order_field-text" htmlFor="orderPrice">
                        <span>価格</span>
                        <input id="orderPrice" type="text" name="price" />
                        <span>ZNY/JPY</span>
                    </label>
                    <label className="order_field order_field-text" htmlFor="orderAmount">
                        <span>数量</span>
                        <input id="orderAmount" type="text" name="amout" />
                        <span>ZNY</span>
                    </label>
                </div>
                <div className="order_fieldGroup">
                    <label className="order_field order_field-text"  htmlFor="orderForecast">
                        <span>予測</span>
                        <input id="orderForecast" type="text"/>
                        <span>JPY</span>
                    </label>
                    <div className="order_field order_field-range">
                        <input style={{width:"100%"}} type="range"/><span>0%</span>
                    </div>
                </div>
                <div className="order_fieldGroup">
                    <div className="order_field">
                        <div className="order_note">
                            <span>手数料 M 0% / T 0%</span>
                            <br/><a href="">注文方法ヘルプ</a>
                        </div>
                    </div>
                    <div className="order_field">
                        <button className="order_submit">注文</button>
                    </div>
                </div>
            </div>
        )
    }
};
