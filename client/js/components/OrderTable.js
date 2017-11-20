import React from "react"
import Base from "components/Base"

export default class OrderTable extends Base {
    render() {
        return (
            <div className="orderTable">
                <table>
                    <thead>
                        <tr>
                            <th>注文ID</th>
                            <th>通貨ペア</th>
                            <th>タイプ</th>
                            <th>売/買</th>
                            <th>数量</th>
                            <th>価格</th>
                            <th>約定</th>
                            <th>数量</th>
                            <th>平均</th>
                            <th>価格</th>
                            <th>注文日時</th>
                            <th>ステータス</th>
                            <th>キャンセル</th>
                        </tr>
                    </thead>
                    <tbody>
                    {new Array(32).fill(null).map((e,i) => (
                        <tr key={i}>
                            <td>mb-000001</td>
                            <td>ZNY/JPY</td>
                            <td>指値</td>
                            <td>買</td>
                            <td>20.0</td>
                            <td>100</td>
                            <td>OK</td>
                            <td>10</td>
                            <td>OK</td>
                            <td>OK</td>
                            <td>OK</td>
                            <td>OK</td>
                            <td>OK</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
