import React from "react"
import Base from "components/Base"

export default class TradeTable extends Base {
    render() {
        return (
            <div className="tradeTable">
                <table>
                    <thead>
                        <tr>
                            <th>注文ID</th>
                            <th>取引ID</th>
                            <th>通貨ペア</th>
                            <th>タイプ</th>
                            <th>売/買</th>
                            <th>数量</th>
                            <th>価格</th>
                            <th>手数料</th>
                            <th>M/T</th>
                            <th>日時</th>
                        </tr>
                    </thead>
                    <tbody>
                        {new Array(32).fill(null).map((e,i) => (
                            <tr key={i}>
                                <td>386557</td>
                                <td>22913</td>
                                <td>MONA/JPY</td>
                                <td>指値</td>
                                <td>買</td>
                                <td>0.0577</td>
                                <td>420.000</td>
                                <td>0.0000</td>
                                <td>メイカー</td>
                                <td>2017/10/26 08:06:46</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
